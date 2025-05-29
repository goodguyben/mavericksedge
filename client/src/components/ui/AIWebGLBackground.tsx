
import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  activity: number;
  type: 'input' | 'hidden' | 'output';
  connections: number[];
  pulsePhase: number;
  lastActivation: number;
  energy: number;
  targetX: number;
  targetY: number;
  glowIntensity: number;
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  strength: number;
  id: string;
  color: string;
  trail: Array<{ x: number; y: number; opacity: number }>;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const neuronsRef = useRef<Neuron[]>([]);
  const signalsRef = useRef<Signal[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    isActive: false, 
    clicked: false,
    velocity: { x: 0, y: 0 },
    trail: [] as { x: number, y: number, alpha: number }[],
    lastX: 0,
    lastY: 0
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const lastTimeRef = useRef(0);
  const attractorNodesRef = useRef<{ x: number, y: number, strength: number, active: boolean }[]>([]);

  // Enhanced color palette
  const colors = {
    input: { base: '#00FF80', glow: '#00FF80', trail: '#40E0D0' },
    hidden: { base: '#40E0FF', glow: '#00BFFF', trail: '#1E90FF' },
    output: { base: '#FF8040', glow: '#FF6347', trail: '#FF4500' },
    connection: '#40E0FF',
    background: { start: '#0A0A0A', mid: '#121212', end: '#0A0A0A' },
    particle: '#00FFFF'
  };

  const createParticles = useCallback((x: number, y: number, count: number = 5, color: string = colors.particle) => {
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 60,
        maxLife: 60,
        size: Math.random() * 3 + 1,
        color
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High DPI support
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize enhanced neural network
    const initNeuralNetwork = () => {
      const neurons: Neuron[] = [];
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      // Create layered network architecture
      const layers = [
        { type: 'input' as const, count: 8, x: canvasWidth * 0.12 },
        { type: 'hidden' as const, count: 12, x: canvasWidth * 0.35 },
        { type: 'hidden' as const, count: 10, x: canvasWidth * 0.55 },
        { type: 'hidden' as const, count: 8, x: canvasWidth * 0.75 },
        { type: 'output' as const, count: 6, x: canvasWidth * 0.88 }
      ];

      let neuronIndex = 0;
      layers.forEach((layer, layerIndex) => {
        const verticalSpacing = Math.min(60, (canvasHeight * 0.7) / layer.count);
        const startY = (canvasHeight - (layer.count * verticalSpacing)) / 2;
        
        for (let i = 0; i < layer.count; i++) {
          const baseY = startY + i * verticalSpacing;
          neurons.push({
            x: layer.x + (Math.random() - 0.5) * 15,
            y: baseY + (Math.random() - 0.5) * 15,
            targetX: layer.x,
            targetY: baseY,
            vx: 0,
            vy: 0,
            radius: 4 + Math.random() * 3,
            activity: Math.random() * 0.2,
            energy: Math.random(),
            type: layer.type,
            connections: [],
            pulsePhase: Math.random() * Math.PI * 2,
            lastActivation: 0,
            glowIntensity: 0
          });
          neuronIndex++;
        }
      });

      // Create sophisticated connections
      let currentIndex = 0;
      layers.forEach((layer, layerIndex) => {
        if (layerIndex < layers.length - 1) {
          const nextLayerStart = currentIndex + layer.count;
          const nextLayerCount = layers[layerIndex + 1].count;
          
          for (let i = 0; i < layer.count; i++) {
            const neuronIdx = currentIndex + i;
            const connectionCount = Math.floor(Math.random() * 3) + 2; // 2-4 connections
            const possibleConnections = Array.from({ length: nextLayerCount }, (_, j) => nextLayerStart + j);
            
            // Shuffle and take subset
            for (let j = 0; j < Math.min(connectionCount, nextLayerCount); j++) {
              const randomIndex = Math.floor(Math.random() * possibleConnections.length);
              neurons[neuronIdx].connections.push(possibleConnections.splice(randomIndex, 1)[0]);
            }
          }
        }
        currentIndex += layer.count;
      });

      neuronsRef.current = neurons;
      signalsRef.current = [];
      particlesRef.current = [];
    };

    initNeuralNetwork();

    // Enhanced mouse interactions
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      console.log('Mouse move:', newX, newY); // Debug log
      
      // Calculate velocity for enhanced effects
      mouseRef.current.velocity.x = newX - mouseRef.current.lastX;
      mouseRef.current.velocity.y = newY - mouseRef.current.lastY;
      
      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
      mouseRef.current.isActive = true;
      
      // Update mouse trail
      mouseRef.current.trail.unshift({ x: newX, y: newY, alpha: 1 });
      if (mouseRef.current.trail.length > 20) {
        mouseRef.current.trail.pop();
      }
      
      // Create dynamic particles based on mouse speed
      const speed = Math.sqrt(mouseRef.current.velocity.x ** 2 + mouseRef.current.velocity.y ** 2);
      if (speed > 5 && Math.random() > 0.7) {
        createParticles(newX, newY, Math.floor(speed / 10), colors.particle);
      }
      
      // Attract nearby neurons with smooth influence
      neuronsRef.current.forEach(neuron => {
        const distance = Math.sqrt((neuron.x - newX) ** 2 + (neuron.y - newY) ** 2);
        if (distance < 150) {
          const influence = (150 - distance) / 150;
          neuron.activity = Math.min(1, neuron.activity + influence * 0.02);
          neuron.glowIntensity = Math.max(neuron.glowIntensity, influence * 0.5);
          
          // Add subtle attraction force
          const force = influence * 0.1;
          neuron.vx += (newX - neuron.x) * force * 0.001;
          neuron.vy += (newY - neuron.y) * force * 0.001;
        }
      });
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
      mouseRef.current.trail = [];
      mouseRef.current.velocity = { x: 0, y: 0 };
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      console.log('Mouse click:', clickX, clickY, e.button); // Debug log
      mouseRef.current.clicked = true;
      
      // Create enhanced explosion effect based on click intensity
      const explosionSize = e.shiftKey ? 25 : 15;
      const explosionRadius = e.shiftKey ? 300 : 200;
      createParticles(clickX, clickY, explosionSize, colors.particle);
      
      // Add attractor node on right-click
      if (e.button === 2) {
        attractorNodesRef.current.push({
          x: clickX,
          y: clickY,
          strength: 1,
          active: true
        });
        createParticles(clickX, clickY, 20, colors.input.glow);
      }
      
      // Enhanced neural activation with wave propagation
      neuronsRef.current.forEach((neuron, index) => {
        const distance = Math.sqrt(Math.pow(neuron.x - clickX, 2) + Math.pow(neuron.y - clickY, 2));
        if (distance < explosionRadius) {
          const influence = (explosionRadius - distance) / explosionRadius;
          const activationStrength = e.shiftKey ? 1.2 : 0.9;
          
          neuron.activity = Math.min(1, neuron.activity + influence * activationStrength);
          neuron.energy = Math.min(1, neuron.energy + influence * 0.5);
          neuron.glowIntensity = influence;
          neuron.lastActivation = Date.now();
          
          // Add velocity push away from click
          const pushForce = influence * 0.5;
          neuron.vx += (neuron.x - clickX) * pushForce * 0.001;
          neuron.vy += (neuron.y - clickY) * pushForce * 0.001;
          
          // Create enhanced signals with delay for wave effect
          setTimeout(() => {
            neuron.connections.forEach(targetIndex => {
              if (Math.random() > 0.2) {
                const signal: Signal = {
                  from: index,
                  to: targetIndex,
                  progress: 0,
                  strength: neuron.activity * influence,
                  id: `${index}-${targetIndex}-${Date.now()}-${Math.random()}`,
                  color: colors[neuron.type].trail,
                  trail: []
                };
                signalsRef.current.push(signal);
              }
            });
          }, distance * 2); // Delay based on distance for wave effect
        }
      });
      
      setTimeout(() => { mouseRef.current.clicked = false; }, 150);
    };

    const handleDoubleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Create massive energy burst
      createParticles(clickX, clickY, 30, colors.output.glow);
      
      // Activate all neurons with ripple effect
      neuronsRef.current.forEach((neuron, index) => {
        const distance = Math.sqrt(Math.pow(neuron.x - clickX, 2) + Math.pow(neuron.y - clickY, 2));
        setTimeout(() => {
          neuron.activity = 1;
          neuron.energy = 1;
          neuron.glowIntensity = 1;
          neuron.lastActivation = Date.now();
        }, distance * 3);
      });
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault(); // Prevent default context menu
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('dblclick', handleDoubleClick);
    canvas.addEventListener('contextmenu', handleContextMenu);

    // Enhanced animation loop with delta time
    const animate = (animationTime: number) => {
      const deltaTime = animationTime - lastTimeRef.current;
      lastTimeRef.current = animationTime;
      const dt = Math.min(deltaTime / 16.67, 2); // Cap at 2x normal speed

      // Create advanced gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / (2 * window.devicePixelRatio), 
        canvas.height / (2 * window.devicePixelRatio), 
        0,
        canvas.width / (2 * window.devicePixelRatio), 
        canvas.height / (2 * window.devicePixelRatio), 
        canvas.width / window.devicePixelRatio
      );
      gradient.addColorStop(0, colors.background.mid);
      gradient.addColorStop(0.5, colors.background.start);
      gradient.addColorStop(1, colors.background.end);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      const neurons = neuronsRef.current;
      const signals = signalsRef.current;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const currentTime = Date.now();

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;
        particle.life -= dt;
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Enhanced neuron updates
      neurons.forEach((neuron, index) => {
        // Smooth orbital movement
        neuron.pulsePhase += (0.01 + neuron.activity * 0.02) * dt;
        
        // Return to target position
        const dx = neuron.targetX - neuron.x;
        const dy = neuron.targetY - neuron.y;
        neuron.vx += dx * 0.01 * dt;
        neuron.vy += dy * 0.01 * dt;
        
        // Activity and energy decay
        const timeSinceActivation = currentTime - neuron.lastActivation;
        if (timeSinceActivation > 100) {
          neuron.activity = Math.max(0.05, neuron.activity * (1 - 0.005 * dt));
          neuron.energy = Math.max(0.1, neuron.energy * (1 - 0.003 * dt));
          neuron.glowIntensity = Math.max(0, neuron.glowIntensity * (1 - 0.02 * dt));
        }
        
        // Mouse interaction with enhanced physics
        if (mouse.isActive) {
          const dx = mouse.x - neuron.x;
          const dy = mouse.y - neuron.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const influence = (150 - distance) / 150;
            neuron.activity = Math.min(1, neuron.activity + influence * 0.008 * dt);
            neuron.glowIntensity = Math.max(neuron.glowIntensity, influence * 0.5);
            
            // Magnetic-like attraction/repulsion
            const force = influence * 0.002 * dt;
            if (distance > 50) {
              neuron.vx += dx * force * 0.5; // Attraction
              neuron.vy += dy * force * 0.5;
            } else {
              neuron.vx -= dx * force; // Repulsion
              neuron.vy -= dy * force;
            }
          }
        }
        
        // Apply movement with damping
        neuron.x += neuron.vx * dt;
        neuron.y += neuron.vy * dt;
        neuron.vx *= Math.pow(0.95, dt);
        neuron.vy *= Math.pow(0.95, dt);
        
        // Autonomous neural firing
        if (Math.random() < (0.0005 + neuron.energy * 0.001) * dt) {
          neuron.activity = Math.min(1, neuron.activity + 0.4);
          neuron.lastActivation = currentTime;
          
          // Create signals with trail effects
          neuron.connections.forEach(targetIndex => {
            if (Math.random() > 0.6) {
              signals.push({
                from: index,
                to: targetIndex,
                progress: 0,
                strength: neuron.activity,
                id: `${index}-${targetIndex}-${currentTime}-${Math.random()}`,
                color: colors[neuron.type].trail,
                trail: []
              });
            }
          });
        }
      });

      // Enhanced signal rendering and updates
      for (let i = signals.length - 1; i >= 0; i--) {
        const signal = signals[i];
        signal.progress += 0.015 * dt;
        
        if (signal.progress >= 1) {
          // Signal reached destination with impact effect
          const targetNeuron = neurons[signal.to];
          if (targetNeuron) {
            targetNeuron.activity = Math.min(1, targetNeuron.activity + signal.strength * 0.6);
            targetNeuron.energy = Math.min(1, targetNeuron.energy + signal.strength * 0.3);
            targetNeuron.lastActivation = currentTime;
            targetNeuron.glowIntensity = Math.max(targetNeuron.glowIntensity, signal.strength);
            
            // Impact particles
            createParticles(targetNeuron.x, targetNeuron.y, 3, signal.color);
          }
          signals.splice(i, 1);
          continue;
        }
        
        // Update trail
        const fromNeuron = neurons[signal.from];
        const toNeuron = neurons[signal.to];
        
        if (fromNeuron && toNeuron) {
          const x = fromNeuron.x + (toNeuron.x - fromNeuron.x) * signal.progress;
          const y = fromNeuron.y + (toNeuron.y - fromNeuron.y) * signal.progress;
          
          // Add to trail
          signal.trail.push({ x, y, opacity: 1 });
          if (signal.trail.length > 8) {
            signal.trail.shift();
          }
          
          // Update trail opacity
          signal.trail.forEach((point, idx) => {
            point.opacity = (idx + 1) / signal.trail.length * 0.8;
          });
        }
      }

      // Draw enhanced connections with flow animation
      neurons.forEach((neuron, index) => {
        neuron.connections.forEach(targetIndex => {
          const target = neurons[targetIndex];
          if (!target) return;
          
          const activity = (neuron.activity + target.activity) / 2;
          const opacity = Math.max(0.1, activity * 0.6);
          
          // Gradient connection line
          const gradient = ctx.createLinearGradient(neuron.x, neuron.y, target.x, target.y);
          gradient.addColorStop(0, `rgba(64, 224, 255, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(0, 255, 255, ${opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(64, 224, 255, ${opacity})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(0.5, 1 + activity * 2);
          ctx.setLineDash([3, 6]);
          ctx.lineDashOffset = -currentTime * 0.05;
          
          ctx.beginPath();
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
          ctx.setLineDash([]);
        });
      });

      // Draw signal trails
      signals.forEach(signal => {
        signal.trail.forEach((point, idx) => {
          if (idx === 0) return;
          
          const prevPoint = signal.trail[idx - 1];
          const gradient = ctx.createLinearGradient(prevPoint.x, prevPoint.y, point.x, point.y);
          gradient.addColorStop(0, `rgba(0, 255, 255, ${prevPoint.opacity * signal.strength})`);
          gradient.addColorStop(1, `rgba(0, 255, 255, ${point.opacity * signal.strength})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(1, 3 * signal.strength);
          ctx.shadowColor = signal.color;
          ctx.shadowBlur = 8 * signal.strength;
          
          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
          ctx.shadowBlur = 0;
        });
      });

      // Draw particles
      particles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 0.8})`;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 5 * alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw enhanced neurons
      neurons.forEach((neuron) => {
        const baseSize = Math.max(2, neuron.radius);
        const activityPulse = Math.sin(neuron.pulsePhase) * 0.4 + 1;
        const energyPulse = Math.sin(neuron.pulsePhase * 1.3) * 0.2 + 1;
        const size = baseSize * (1 + neuron.activity * 0.6) * activityPulse;
        
        const colorConfig = colors[neuron.type];
        const alpha = 0.7 + neuron.activity * 0.3;
        
        // Outer glow
        if (neuron.glowIntensity > 0.1) {
          ctx.shadowColor = colorConfig.glow;
          ctx.shadowBlur = Math.max(5, neuron.glowIntensity * 25);
          ctx.fillStyle = `rgba(255, 255, 255, ${neuron.glowIntensity * 0.3})`;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, size * 1.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        // Main neuron body with gradient
        const gradient = ctx.createRadialGradient(
          neuron.x - size * 0.3, neuron.y - size * 0.3, 0,
          neuron.x, neuron.y, size
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.4, colorConfig.base + '80');
        gradient.addColorStop(1, colorConfig.base + '40');
        
        ctx.fillStyle = gradient;
        ctx.shadowColor = colorConfig.glow;
        ctx.shadowBlur = Math.max(3, neuron.activity * 15);
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Energy core
        if (neuron.energy > 0.3) {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${neuron.energy * alpha})`;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, size * 0.4 * energyPulse, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.shadowBlur = 0;
      });

      // Render attractor nodes
      attractorNodesRef.current.forEach((attractor, index) => {
        if (!attractor.active) return;
        
        const pulse = Math.sin(currentTime * 0.008) * 0.3 + 0.7;
        const size = 15 * pulse * attractor.strength;
        
        // Outer ring
        ctx.strokeStyle = `rgba(0, 255, 128, ${0.6 * attractor.strength})`;
        ctx.lineWidth = 3;
        ctx.setLineDash([4, 4]);
        ctx.lineDashOffset = currentTime * 0.05;
        ctx.shadowColor = '#00FF80';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(attractor.x, attractor.y, size * 1.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Inner core
        ctx.fillStyle = `rgba(0, 255, 128, ${0.8 * attractor.strength})`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(attractor.x, attractor.y, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
        
        // Fade out attractor over time
        attractor.strength *= 0.995;
        if (attractor.strength < 0.1) {
          attractor.active = false;
        }
        
        // Attract nearby neurons
        neurons.forEach(neuron => {
          const distance = Math.sqrt((neuron.x - attractor.x) ** 2 + (neuron.y - attractor.y) ** 2);
          if (distance < 200) {
            const force = (200 - distance) / 200 * attractor.strength * 0.001;
            neuron.vx += (attractor.x - neuron.x) * force;
            neuron.vy += (attractor.y - neuron.y) * force;
            neuron.activity = Math.min(1, neuron.activity + force * 0.5);
          }
        });
      });

      // Clean up inactive attractors
      attractorNodesRef.current = attractorNodesRef.current.filter(a => a.active);

      // Enhanced UI elements
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      // Layer labels with glow
      ctx.shadowColor = '#00FFFF';
      ctx.shadowBlur = 5;
      ctx.fillText('INPUT', canvasWidth * 0.12, canvasHeight - 25);
      ctx.fillText('PROCESSING LAYERS', canvasWidth * 0.5, canvasHeight - 25);
      ctx.fillText('OUTPUT', canvasWidth * 0.88, canvasHeight - 25);
      ctx.shadowBlur = 0;

      // Enhanced mouse trail effect
      if (mouse.trail.length > 1) {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#00FFFF';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        
        for (let i = 0; i < mouse.trail.length - 1; i++) {
          const point = mouse.trail[i];
          const alpha = (1 - i / mouse.trail.length) * point.alpha;
          
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            const nextPoint = mouse.trail[i + 1];
            const cpx = (point.x + nextPoint.x) / 2;
            const cpy = (point.y + nextPoint.y) / 2;
            ctx.quadraticCurveTo(point.x, point.y, cpx, cpy);
          }
          
          // Fade trail points
          mouse.trail[i].alpha *= 0.95;
        }
        
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Interactive cursor effect
      if (mouse.isActive) {
        const pulse = Math.sin(currentTime * 0.005) * 0.3 + 0.7;
        const speed = Math.sqrt(mouse.velocity.x ** 2 + mouse.velocity.y ** 2);
        const dynamicRadius = Math.min(150, 80 + speed * 2);
        
        // Main cursor ring
        ctx.strokeStyle = `rgba(0, 255, 255, ${pulse * 0.6})`;
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 8]);
        ctx.lineDashOffset = -currentTime * 0.1;
        ctx.shadowColor = '#00FFFF';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, dynamicRadius * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Speed-based inner rings
        if (speed > 3) {
          const speedPulse = Math.sin(currentTime * 0.01) * 0.2 + 0.8;
          ctx.strokeStyle = `rgba(255, 255, 255, ${(speed / 20) * speedPulse})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, (dynamicRadius * 0.6) * speedPulse, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
        
        if (mouse.clicked) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    setTimeout(() => {
      setIsLoaded(true);
      requestAnimationFrame(animate);
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('dblclick', handleDoubleClick);
      canvas.removeEventListener('contextmenu', handleContextMenu);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #0A0A0A 100%)',
        cursor: 'crosshair'
      }}
    />
  );
}
