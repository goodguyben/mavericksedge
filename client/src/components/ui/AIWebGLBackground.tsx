
import React, { useRef, useEffect, useState } from 'react';

interface FluidParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetRadius: number;
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
  energy: number;
  life: number;
  maxLife: number;
}

interface RippleEffect {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  hue: number;
  life: number;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<FluidParticle[]>([]);
  const ripplesRef = useRef<RippleEffect[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isPressed: false });
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
      const particles: FluidParticle[] = [];
      const numParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000));
      
      for (let i = 0; i < numParticles; i++) {
        const life = 200 + Math.random() * 300;
        particles.push({
          x: Math.random() * canvas.width / window.devicePixelRatio,
          y: Math.random() * canvas.height / window.devicePixelRatio,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: 15 + Math.random() * 25,
          targetRadius: 15 + Math.random() * 25,
          hue: 200 + Math.random() * 160, // Blue to purple range
          saturation: 60 + Math.random() * 40,
          lightness: 40 + Math.random() * 30,
          alpha: 0.3 + Math.random() * 0.4,
          energy: Math.random(),
          life: life,
          maxLife: life,
        });
      }
      
      particlesRef.current = particles;
    };

    initParticles();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isPressed = true;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create ripple effect
      ripplesRef.current.push({
        x: x,
        y: y,
        radius: 0,
        maxRadius: 150 + Math.random() * 100,
        alpha: 0.8,
        hue: 200 + Math.random() * 160,
        life: 0
      });
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(13, 13, 13, 0.02)';
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      const particles = particlesRef.current;
      const ripples = ripplesRef.current;
      const mouse = mouseRef.current;
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      const time = Date.now() * 0.001;

      // Update and draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.life += 1;
        ripple.radius = (ripple.life / 60) * ripple.maxRadius;
        ripple.alpha = Math.max(0, 0.8 - (ripple.life / 60));

        if (ripple.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw ripple
        ctx.strokeStyle = `hsla(${ripple.hue}, 70%, 60%, ${ripple.alpha})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner ripple
        ctx.strokeStyle = `hsla(${ripple.hue + 30}, 80%, 70%, ${ripple.alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Update particles
      particles.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          // Smooth attraction/repulsion
          const attraction = mouse.isPressed ? -force * 0.3 : force * 0.1;
          particle.vx += Math.cos(angle) * attraction;
          particle.vy += Math.sin(angle) * attraction;
          
          // Energy boost
          particle.energy = Math.min(1, particle.energy + force * 0.02);
          particle.targetRadius = particle.radius + force * 15;
        } else {
          particle.energy *= 0.995;
          particle.targetRadius = Math.max(15, particle.targetRadius * 0.98);
        }

        // Smooth radius transition
        particle.radius += (particle.targetRadius - particle.radius) * 0.1;

        // Update position with smooth movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply fluid-like friction
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        // Add gentle floating motion
        particle.vx += Math.sin(time * 0.5 + i * 0.1) * 0.02;
        particle.vy += Math.cos(time * 0.3 + i * 0.15) * 0.02;

        // Boundary conditions with smooth wrapping
        if (particle.x < -particle.radius) particle.x = canvasWidth + particle.radius;
        if (particle.x > canvasWidth + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = canvasHeight + particle.radius;
        if (particle.y > canvasHeight + particle.radius) particle.y = -particle.radius;

        // Cycle life for color animation
        particle.life = (particle.life + 1) % particle.maxLife;
        const lifeRatio = particle.life / particle.maxLife;
        particle.hue = 200 + Math.sin(lifeRatio * Math.PI * 2) * 50;
        particle.lightness = 40 + Math.sin(lifeRatio * Math.PI * 2 + Math.PI) * 20;
      });

      // Draw connections with fluid-like behavior
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = Math.max(0, (120 - distance) / 120);
            const energy = (particle.energy + other.energy) / 2;
            
            // Create gradient for connections
            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            gradient.addColorStop(0, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${opacity * energy * 0.4})`);
            gradient.addColorStop(1, `hsla(${other.hue}, ${other.saturation}%, ${other.lightness}%, ${opacity * energy * 0.4})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(0.5, energy * 2);
            
            // Add glow effect
            ctx.shadowColor = `hsl(${(particle.hue + other.hue) / 2}, 70%, 60%)`;
            ctx.shadowBlur = energy * 8;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            
            ctx.shadowBlur = 0;
          }
        }
      });

      // Draw particles with fluid morphing
      particles.forEach((particle) => {
        const energyBoost = particle.energy;
        const size = Math.max(1, particle.radius);
        
        // Create radial gradient for each particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size
        );
        
        gradient.addColorStop(0, `hsla(${particle.hue}, ${particle.saturation + 20}%, ${particle.lightness + 20}%, ${particle.alpha + energyBoost * 0.3})`);
        gradient.addColorStop(0.7, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${particle.alpha * 0.7})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, ${particle.saturation - 10}%, ${particle.lightness - 10}%, 0)`);
        
        // Outer glow
        ctx.shadowColor = `hsl(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%)`;
        ctx.shadowBlur = energyBoost * 20 + 5;
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core with different shape variation
        ctx.shadowBlur = 0;
        const coreSize = size * 0.3;
        const coreGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, coreSize
        );
        
        coreGradient.addColorStop(0, `hsla(${particle.hue + 40}, 90%, 80%, ${0.8 + energyBoost * 0.2})`);
        coreGradient.addColorStop(1, `hsla(${particle.hue + 40}, 90%, 80%, 0)`);
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, coreSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add ambient flowing effects
      for (let i = 0; i < 3; i++) {
        const waveX = (Math.sin(time * 0.2 + i * 2) * 0.5 + 0.5) * canvasWidth;
        const waveY = (Math.cos(time * 0.15 + i * 1.5) * 0.5 + 0.5) * canvasHeight;
        
        const waveGradient = ctx.createRadialGradient(waveX, waveY, 0, waveX, waveY, 80);
        waveGradient.addColorStop(0, `hsla(${(time * 30 + i * 120) % 360}, 60%, 50%, 0.05)`);
        waveGradient.addColorStop(1, `hsla(${(time * 30 + i * 120) % 360}, 60%, 50%, 0)`);
        
        ctx.fillStyle = waveGradient;
        ctx.beginPath();
        ctx.arc(waveX, waveY, 80, 0, Math.PI * 2);
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
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
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
        background: 'radial-gradient(ellipse at center, #1A1A1A 0%, #0D0D0D 70%, #000000 100%)',
        cursor: 'crosshair',
      }}
    />
  );
}
