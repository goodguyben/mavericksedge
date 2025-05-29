
import React, { useRef, useEffect, useState } from 'react';

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
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  strength: number;
  id: string;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const neuronsRef = useRef<Neuron[]>([]);
  const signalsRef = useRef<Signal[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize neural network
    const initNeuralNetwork = () => {
      const neurons: Neuron[] = [];
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      // Create layers
      const layers = [
        { type: 'input' as const, count: 6, x: canvasWidth * 0.15 },
        { type: 'hidden' as const, count: 8, x: canvasWidth * 0.4 },
        { type: 'hidden' as const, count: 6, x: canvasWidth * 0.6 },
        { type: 'output' as const, count: 4, x: canvasWidth * 0.85 }
      ];

      let neuronIndex = 0;
      layers.forEach((layer, layerIndex) => {
        const startY = (canvasHeight - (layer.count * 60)) / 2;
        
        for (let i = 0; i < layer.count; i++) {
          neurons.push({
            x: layer.x + (Math.random() - 0.5) * 20,
            y: startY + i * 60 + (Math.random() - 0.5) * 20,
            vx: 0,
            vy: 0,
            radius: Math.max(3, 6 + Math.random() * 4),
            activity: Math.random() * 0.3,
            type: layer.type,
            connections: [],
            pulsePhase: Math.random() * Math.PI * 2,
            lastActivation: 0
          });
          neuronIndex++;
        }
      });

      // Create connections between layers
      let currentIndex = 0;
      layers.forEach((layer, layerIndex) => {
        if (layerIndex < layers.length - 1) {
          const nextLayerStart = currentIndex + layer.count;
          const nextLayerCount = layers[layerIndex + 1].count;
          
          for (let i = 0; i < layer.count; i++) {
            const neuronIdx = currentIndex + i;
            // Connect to next layer with some randomness
            for (let j = 0; j < nextLayerCount; j++) {
              if (Math.random() > 0.3) { // 70% connection probability
                neurons[neuronIdx].connections.push(nextLayerStart + j);
              }
            }
          }
        }
        currentIndex += layer.count;
      });

      neuronsRef.current = neurons;
      signalsRef.current = [];
    };

    initNeuralNetwork();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Trigger neural activity wave
      neuronsRef.current.forEach((neuron, index) => {
        const distance = Math.sqrt(Math.pow(neuron.x - clickX, 2) + Math.pow(neuron.y - clickY, 2));
        if (distance < 150) {
          neuron.activity = Math.min(1, neuron.activity + 0.8);
          neuron.lastActivation = Date.now();
          
          // Create signals from this neuron
          neuron.connections.forEach(targetIndex => {
            if (Math.random() > 0.5) {
              signalsRef.current.push({
                from: index,
                to: targetIndex,
                progress: 0,
                strength: neuron.activity,
                id: `${index}-${targetIndex}-${Date.now()}-${Math.random()}`
              });
            }
          });
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      // Clear with dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      gradient.addColorStop(0, '#0A0A0A');
      gradient.addColorStop(0.5, '#121212');
      gradient.addColorStop(1, '#0A0A0A');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      const neurons = neuronsRef.current;
      const signals = signalsRef.current;
      const mouse = mouseRef.current;
      const currentTime = Date.now();

      // Update neurons
      neurons.forEach((neuron, index) => {
        // Update pulse phase
        neuron.pulsePhase += 0.02 + neuron.activity * 0.03;
        
        // Decay activity over time
        const timeSinceActivation = currentTime - neuron.lastActivation;
        if (timeSinceActivation > 100) {
          neuron.activity = Math.max(0.1, neuron.activity * 0.995);
        }
        
        // Mouse interaction
        if (mouse.isActive) {
          const dx = mouse.x - neuron.x;
          const dy = mouse.y - neuron.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const influence = (100 - distance) / 100;
            neuron.activity = Math.min(1, neuron.activity + influence * 0.01);
            
            // Subtle movement toward mouse
            const force = influence * 0.001;
            neuron.vx += dx * force;
            neuron.vy += dy * force;
          }
        }
        
        // Apply subtle movement
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;
        neuron.vx *= 0.95; // Damping
        neuron.vy *= 0.95;
        
        // Random neural firing
        if (Math.random() < 0.001 + neuron.activity * 0.002) {
          neuron.activity = Math.min(1, neuron.activity + 0.3);
          neuron.lastActivation = currentTime;
          
          // Create signals
          neuron.connections.forEach(targetIndex => {
            if (Math.random() > 0.7) {
              signals.push({
                from: index,
                to: targetIndex,
                progress: 0,
                strength: neuron.activity,
                id: `${index}-${targetIndex}-${currentTime}-${Math.random()}`
              });
            }
          });
        }
      });

      // Update and draw signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const signal = signals[i];
        signal.progress += 0.02;
        
        if (signal.progress >= 1) {
          // Signal reached destination
          const targetNeuron = neurons[signal.to];
          if (targetNeuron) {
            targetNeuron.activity = Math.min(1, targetNeuron.activity + signal.strength * 0.5);
            targetNeuron.lastActivation = currentTime;
          }
          signals.splice(i, 1);
          continue;
        }
        
        // Draw signal
        const fromNeuron = neurons[signal.from];
        const toNeuron = neurons[signal.to];
        
        if (fromNeuron && toNeuron) {
          const x = fromNeuron.x + (toNeuron.x - fromNeuron.x) * signal.progress;
          const y = fromNeuron.y + (toNeuron.y - fromNeuron.y) * signal.progress;
          
          ctx.shadowColor = '#00FFFF';
          ctx.shadowBlur = Math.max(2, 8 * signal.strength);
          ctx.fillStyle = `rgba(0, 255, 255, ${signal.strength * 0.9})`;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(1, 3 * signal.strength), 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw connections
      neurons.forEach((neuron, index) => {
        neuron.connections.forEach(targetIndex => {
          const target = neurons[targetIndex];
          if (!target) return;
          
          const distance = Math.sqrt(Math.pow(target.x - neuron.x, 2) + Math.pow(target.y - neuron.y, 2));
          const opacity = Math.max(0.1, (neuron.activity + target.activity) / 2);
          
          ctx.strokeStyle = `rgba(64, 224, 255, ${opacity * 0.4})`;
          ctx.lineWidth = Math.max(0.5, 1 + opacity);
          ctx.setLineDash([2, 4]);
          
          ctx.beginPath();
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
          ctx.setLineDash([]);
        });
      });

      // Draw neurons
      neurons.forEach((neuron) => {
        const baseSize = Math.max(1, neuron.radius);
        const activityPulse = Math.max(0.1, Math.sin(neuron.pulsePhase) * 0.3 + 1);
        const size = Math.max(2, baseSize * (1 + Math.max(0, neuron.activity) * 0.5) * activityPulse);
        
        // Neuron type colors
        let color;
        switch (neuron.type) {
          case 'input':
            color = `rgba(0, 255, 128, ${0.6 + neuron.activity * 0.4})`;
            break;
          case 'hidden':
            color = `rgba(64, 224, 255, ${0.6 + neuron.activity * 0.4})`;
            break;
          case 'output':
            color = `rgba(255, 128, 0, ${0.6 + neuron.activity * 0.4})`;
            break;
        }
        
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = Math.max(2, neuron.activity * 15);
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, Math.max(2, size), 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core for active neurons
        if (neuron.activity > 0.5) {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${neuron.activity * 0.8})`;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, Math.max(0.5, size * 0.4), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      });

      // Draw neural network layers labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      ctx.fillText('Input', canvasWidth * 0.15, canvasHeight - 20);
      ctx.fillText('Processing', canvasWidth * 0.5, canvasHeight - 20);
      ctx.fillText('Output', canvasWidth * 0.85, canvasHeight - 20);

      // Draw mouse interaction area
      if (mouse.isActive) {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, Math.max(1, 100), 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a brief delay
    setTimeout(() => {
      setIsLoaded(true);
      animate();
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #0A0A0A 100%)',
        cursor: 'pointer'
      }}
    />
  );
}
