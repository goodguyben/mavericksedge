
import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  energy: number;
  baseEnergy: number;
  hue: number;
  life: number;
  maxLife: number;
  connections: number[];
  cluster: number;
}

interface RippleEffect {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
  life: number;
}

interface EnergyStream {
  points: { x: number; y: number; intensity: number }[];
  direction: number;
  speed: number;
  life: number;
  hue: number;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<RippleEffect[]>([]);
  const energyStreamsRef = useRef<EnergyStream[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const lastMouseMoveRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with proper scaling
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

    // Initialize particle system
    const initParticles = () => {
      const particles: Particle[] = [];
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
      const numParticles = Math.min(200, Math.floor((canvasWidth * canvasHeight) / 8000));
      const clusters = 8;
      
      for (let i = 0; i < numParticles; i++) {
        const cluster = Math.floor(i / (numParticles / clusters));
        const clusterCenterX = ((cluster % 4) * canvasWidth / 4) + canvasWidth / 8;
        const clusterCenterY = (Math.floor(cluster / 4) * canvasHeight / 2) + canvasHeight / 4;
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 120 + 40;
        
        particles.push({
          x: clusterCenterX + Math.cos(angle) * distance,
          y: clusterCenterY + Math.sin(angle) * distance,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 4 + 1,
          energy: Math.random() * 0.8 + 0.2,
          baseEnergy: Math.random() * 0.8 + 0.2,
          hue: 180 + cluster * 30 + Math.random() * 60,
          life: 1,
          maxLife: 1,
          connections: [],
          cluster: cluster
        });
      }
      
      particlesRef.current = particles;
    };

    // Create energy streams
    const createEnergyStream = () => {
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
      
      const stream: EnergyStream = {
        points: [],
        direction: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 + 1,
        life: 1,
        hue: Math.random() * 360
      };

      // Create curved path
      const startX = Math.random() * canvasWidth;
      const startY = Math.random() * canvasHeight;
      const segments = 20;
      
      for (let i = 0; i < segments; i++) {
        const progress = i / segments;
        const curve = Math.sin(progress * Math.PI * 3) * 50;
        stream.points.push({
          x: startX + Math.cos(stream.direction) * progress * 300 + Math.cos(stream.direction + Math.PI/2) * curve,
          y: startY + Math.sin(stream.direction) * progress * 300 + Math.sin(stream.direction + Math.PI/2) * curve,
          intensity: Math.sin(progress * Math.PI) * (Math.random() * 0.5 + 0.5)
        });
      }
      
      energyStreamsRef.current.push(stream);
    };

    initParticles();

    // Mouse tracking with enhanced interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isMoving: true
      };
      lastMouseMoveRef.current = Date.now();
    };

    // Mouse click creates ripple effects
    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Create multiple ripples with different properties
      for (let i = 0; i < 3; i++) {
        ripplesRef.current.push({
          x: clickX + (Math.random() - 0.5) * 20,
          y: clickY + (Math.random() - 0.5) * 20,
          radius: 0,
          maxRadius: 150 + Math.random() * 100,
          strength: 1 - i * 0.2,
          life: 1
        });
      }

      // Create energy stream from click point
      createEnergyStream();
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleMouseClick);

    // Animation loop
    const animate = () => {
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

      // Clear with subtle trail effect
      ctx.fillStyle = 'rgba(8, 8, 12, 0.08)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const time = Date.now() * 0.001;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const ripples = ripplesRef.current;
      const streams = energyStreamsRef.current;

      // Check if mouse is still moving
      if (Date.now() - lastMouseMoveRef.current > 100) {
        mouse.isMoving = false;
      }

      // Update and draw energy streams
      for (let i = streams.length - 1; i >= 0; i--) {
        const stream = streams[i];
        stream.life -= 0.008;
        
        if (stream.life <= 0) {
          streams.splice(i, 1);
          continue;
        }

        // Draw stream
        ctx.strokeStyle = `hsla(${stream.hue}, 70%, 60%, ${stream.life * 0.6})`;
        ctx.lineWidth = 3 * stream.life;
        ctx.shadowColor = `hsl(${stream.hue}, 70%, 60%)`;
        ctx.shadowBlur = 10 * stream.life;

        ctx.beginPath();
        stream.points.forEach((point, index) => {
          const intensity = point.intensity * stream.life;
          const offsetX = Math.sin(time * 2 + index * 0.5) * intensity * 10;
          const offsetY = Math.cos(time * 1.5 + index * 0.3) * intensity * 8;
          
          if (index === 0) {
            ctx.moveTo(point.x + offsetX, point.y + offsetY);
          } else {
            ctx.lineTo(point.x + offsetX, point.y + offsetY);
          }
        });
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += 4;
        ripple.life = 1 - (ripple.radius / ripple.maxRadius);
        
        if (ripple.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw ripple
        const alpha = ripple.life * ripple.strength * 0.5;
        ctx.strokeStyle = `hsla(200, 80%, 70%, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'hsl(200, 80%, 70%)';
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Inner ripple
        ctx.strokeStyle = `hsla(180, 90%, 80%, ${alpha * 0.7})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Update particles
      particles.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = mouse.isMoving ? 200 : 120;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.energy = Math.min(3, particle.baseEnergy + force * 2);
          
          // Dynamic attraction/repulsion based on mouse movement
          const attraction = mouse.isMoving ? 0.004 : 0.001;
          particle.vx += dx * attraction * force;
          particle.vy += dy * attraction * force;
          
          // Add some orbital motion around cursor
          const angle = Math.atan2(dy, dx) + Math.PI/2;
          particle.vx += Math.cos(angle) * force * 0.002;
          particle.vy += Math.sin(angle) * force * 0.002;
        } else {
          particle.energy = Math.max(particle.baseEnergy, particle.energy * 0.95);
        }

        // Ripple effects on particles
        ripples.forEach(ripple => {
          const rippleDx = particle.x - ripple.x;
          const rippleDy = particle.y - ripple.y;
          const rippleDistance = Math.sqrt(rippleDx * rippleDx + rippleDy * rippleDy);
          
          if (Math.abs(rippleDistance - ripple.radius) < 30) {
            const rippleForce = ripple.strength * ripple.life * 0.02;
            particle.vx += (rippleDx / rippleDistance) * rippleForce;
            particle.vy += (rippleDy / rippleDistance) * rippleForce;
            particle.energy = Math.min(3, particle.energy + ripple.strength * 0.5);
          }
        });

        // Cluster cohesion
        const clusterParticles = particles.filter(p => p.cluster === particle.cluster && p !== particle);
        let clusterCenterX = 0, clusterCenterY = 0;
        clusterParticles.forEach(p => {
          clusterCenterX += p.x;
          clusterCenterY += p.y;
        });
        
        if (clusterParticles.length > 0) {
          clusterCenterX /= clusterParticles.length;
          clusterCenterY /= clusterParticles.length;
          
          const clusterDx = clusterCenterX - particle.x;
          const clusterDy = clusterCenterY - particle.y;
          const clusterDistance = Math.sqrt(clusterDx * clusterDx + clusterDy * clusterDy);
          
          if (clusterDistance > 100) {
            particle.vx += clusterDx * 0.0001;
            particle.vy += clusterDy * 0.0001;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add gentle drift
        particle.x += Math.sin(time * 0.5 + i * 0.1) * 0.2;
        particle.y += Math.cos(time * 0.3 + i * 0.15) * 0.15;

        // Apply friction
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        // Boundary wrapping
        if (particle.x < -50) particle.x = canvasWidth + 50;
        if (particle.x > canvasWidth + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvasHeight + 50;
        if (particle.y > canvasHeight + 50) particle.y = -50;

        // Update hue based on energy
        particle.hue = (particle.hue + particle.energy * 0.5) % 360;

        // Find connections for constellation effect
        particle.connections = [];
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dist = Math.sqrt(
            Math.pow(particle.x - other.x, 2) + Math.pow(particle.y - other.y, 2)
          );
          
          if (dist < 80 && (particle.cluster === other.cluster || Math.random() < 0.1)) {
            particle.connections.push(j);
          }
        }
      });

      // Draw constellation connections
      particles.forEach((particle, i) => {
        particle.connections.forEach((connectionIndex) => {
          const other = particles[connectionIndex];
          const dist = Math.sqrt(
            Math.pow(particle.x - other.x, 2) + Math.pow(particle.y - other.y, 2)
          );
          
          const opacity = Math.max(0, (80 - dist) / 80);
          const energy = (particle.energy + other.energy) / 2;
          const avgHue = (particle.hue + other.hue) / 2;
          
          // Dynamic line style based on energy
          const lineWidth = energy * 2;
          const brightness = 40 + energy * 40;
          const saturation = 60 + energy * 40;
          
          ctx.strokeStyle = `hsla(${avgHue}, ${saturation}%, ${brightness}%, ${opacity * energy * 0.7})`;
          ctx.lineWidth = lineWidth;
          ctx.shadowColor = `hsl(${avgHue}, ${saturation}%, ${brightness}%)`;
          ctx.shadowBlur = energy * 8;
          
          // Animated line pattern
          ctx.setLineDash([energy * 5, energy * 3]);
          ctx.lineDashOffset = time * energy * 10;
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
          
          ctx.setLineDash([]);
          ctx.shadowBlur = 0;
        });
      });

      // Draw particles with enhanced effects
      particles.forEach((particle) => {
        const pulseSize = particle.size + Math.sin(time * 3 + particle.x * 0.01) * particle.energy * 2;
        const brightness = 50 + particle.energy * 40;
        const saturation = 70 + particle.energy * 30;
        
        // Outer glow
        ctx.shadowColor = `hsl(${particle.hue}, ${saturation}%, ${brightness}%)`;
        ctx.shadowBlur = particle.energy * 20;
        
        // Main particle
        ctx.fillStyle = `hsla(${particle.hue}, ${saturation}%, ${brightness}%, ${0.8 + particle.energy * 0.2})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core with different color
        ctx.shadowBlur = particle.energy * 10;
        ctx.fillStyle = `hsla(${(particle.hue + 60) % 360}, 90%, 80%, ${0.9 + particle.energy * 0.1})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        // Energy ring for highly energized particles
        if (particle.energy > 1.5) {
          ctx.strokeStyle = `hsla(${particle.hue}, 100%, 90%, ${(particle.energy - 1.5) * 0.8})`;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
      });

      // Randomly create new energy streams
      if (Math.random() < 0.002 && streams.length < 5) {
        createEnergyStream();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    setTimeout(() => {
      setIsLoaded(true);
      animate();
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleMouseClick);
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
        background: 'radial-gradient(ellipse at center, #0A0A0F 0%, #050508 50%, #000000 100%)',
        cursor: 'crosshair'
      }}
    />
  );
}
