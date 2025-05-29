
import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  energy: number;
  baseEnergy: number;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
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

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const numParticles = Math.min(150, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width / window.devicePixelRatio,
          y: Math.random() * canvas.height / window.devicePixelRatio,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
          energy: Math.random() * 0.5 + 0.5,
          baseEnergy: Math.random() * 0.5 + 0.5,
        });
      }
      
      particlesRef.current = particles;
    };

    initParticles();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.05)';
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;

      // Update particles
      particles.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.energy = Math.min(2, particle.baseEnergy + force * 1.5);
          
          // Subtle attraction to mouse
          const attraction = force * 0.002;
          particle.vx += dx * attraction;
          particle.vy += dy * attraction;
        } else {
          particle.energy = Math.max(particle.baseEnergy, particle.energy * 0.98);
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Boundary conditions with wrapping
        if (particle.x < 0) particle.x = canvasWidth;
        if (particle.x > canvasWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvasHeight;
        if (particle.y > canvasHeight) particle.y = 0;

        // Find connections
        particle.connections = [];
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dist = Math.sqrt(
            Math.pow(particle.x - other.x, 2) + Math.pow(particle.y - other.y, 2)
          );
          
          if (dist < 100) {
            particle.connections.push(j);
          }
        }
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particle.connections.forEach((connectionIndex) => {
          const other = particles[connectionIndex];
          const dist = Math.sqrt(
            Math.pow(particle.x - other.x, 2) + Math.pow(particle.y - other.y, 2)
          );
          
          const opacity = Math.max(0, (100 - dist) / 100);
          const energy = (particle.energy + other.energy) / 2;
          
          // AI-themed colors
          const hue = (particle.energy * 60 + other.energy * 60 + Date.now() * 0.01) % 360;
          const saturation = 70 + energy * 30;
          const lightness = 40 + energy * 20;
          
          ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity * energy * 0.8})`;
          ctx.lineWidth = energy * 1.5;
          
          // Add glow effect
          ctx.shadowColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
          ctx.shadowBlur = energy * 10;
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
          
          ctx.shadowBlur = 0;
        });
      });

      // Draw particles
      particles.forEach((particle) => {
        const size = 2 + particle.energy * 3;
        const hue = (particle.energy * 120 + Date.now() * 0.02) % 360;
        const saturation = 80 + particle.energy * 20;
        const lightness = 50 + particle.energy * 30;
        
        // Outer glow
        ctx.shadowColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        ctx.shadowBlur = particle.energy * 15;
        
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${0.8 + particle.energy * 0.2})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core
        ctx.shadowBlur = 0;
        ctx.fillStyle = `hsla(${hue + 30}, 90%, 80%, ${0.9 + particle.energy * 0.1})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add subtle data stream effects
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvasWidth;
        const y = (Math.cos(time * 0.3 + i * 2) * 0.5 + 0.5) * canvasHeight;
        
        ctx.fillStyle = `hsla(${(time * 100 + i * 60) % 360}, 70%, 60%, 0.1)`;
        ctx.beginPath();
        ctx.arc(x, y, 20 + Math.sin(time * 2 + i) * 10, 0, Math.PI * 2);
        ctx.fill();
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
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)',
      }}
    />
  );
}
