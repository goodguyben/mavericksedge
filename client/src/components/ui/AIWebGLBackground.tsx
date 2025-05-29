
import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  hue: number;
  opacity: number;
  trail: Array<{x: number, y: number, life: number}>;
}

interface ForceField {
  x: number;
  y: number;
  strength: number;
  radius: number;
  type: 'attract' | 'repel' | 'vortex';
  life: number;
  maxLife: number;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const forceFieldsRef = useRef<ForceField[]>([]);
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    isPressed: false, 
    velocity: { x: 0, y: 0 },
    trail: [] as Array<{x: number, y: number, life: number}>
  });
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
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      const numParticles = Math.min(150, Math.floor((canvasWidth * canvasHeight) / 8000));
      
      for (let i = 0; i < numParticles; i++) {
        const particle: Particle = {
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: 1 + Math.random() * 3,
          life: Math.random() * 100 + 50,
          maxLife: 150,
          hue: 180 + Math.random() * 120, // Cyan to purple range
          opacity: 0.3 + Math.random() * 0.7,
          trail: []
        };
        particles.push(particle);
      }

      particlesRef.current = particles;
    };

    initParticles();

    // Mouse tracking with velocity calculation
    let lastMousePos = { x: 0, y: 0 };
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      // Calculate velocity
      if (deltaTime > 0) {
        mouseRef.current.velocity.x = (newX - lastMousePos.x) / deltaTime * 50;
        mouseRef.current.velocity.y = (newY - lastMousePos.y) / deltaTime * 50;
      }
      
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
      
      // Add to mouse trail
      mouseRef.current.trail.push({
        x: newX,
        y: newY,
        life: 30
      });
      
      if (mouseRef.current.trail.length > 20) {
        mouseRef.current.trail.shift();
      }
      
      lastMousePos = { x: newX, y: newY };
      lastTime = currentTime;
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isPressed = true;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Create force field at click location
      const forceType = Math.random() > 0.5 ? 'attract' : 'vortex';
      forceFieldsRef.current.push({
        x: mouseX,
        y: mouseY,
        strength: 50 + Math.random() * 100,
        radius: 100 + Math.random() * 150,
        type: forceType,
        life: 200,
        maxLife: 200
      });
      
      // Spawn burst of particles at click
      const burstCount = 15 + Math.random() * 25;
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2 * i) / burstCount + Math.random() * 0.5;
        const speed = 2 + Math.random() * 8;
        const distance = Math.random() * 30;
        
        particlesRef.current.push({
          x: mouseX + Math.cos(angle) * distance,
          y: mouseY + Math.sin(angle) * distance,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 4,
          life: 80 + Math.random() * 40,
          maxLife: 120,
          hue: 30 + Math.random() * 60, // Orange to yellow for clicks
          opacity: 0.8 + Math.random() * 0.2,
          trail: []
        });
      }
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    const animate = () => {
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const forceFields = forceFieldsRef.current;

      // Clear with trailing effect
      ctx.fillStyle = 'rgba(8, 8, 12, 0.05)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Update mouse trail
      mouse.trail.forEach(point => {
        point.life--;
      });
      mouse.trail = mouse.trail.filter(point => point.life > 0);

      // Update force fields
      for (let i = forceFields.length - 1; i >= 0; i--) {
        const field = forceFields[i];
        field.life--;
        
        if (field.life <= 0) {
          forceFields.splice(i, 1);
          continue;
        }
        
        // Draw force field visualization
        const alpha = field.life / field.maxLife;
        const pulseIntensity = Math.sin(time * 4 + i) * 0.3 + 0.7;
        
        ctx.strokeStyle = `hsla(${field.type === 'attract' ? 60 : field.type === 'vortex' ? 280 : 0}, 70%, 60%, ${alpha * 0.3 * pulseIntensity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius * alpha, 0, Math.PI * 2);
        ctx.stroke();
        
        // Inner glow
        const gradient = ctx.createRadialGradient(
          field.x, field.y, 0,
          field.x, field.y, field.radius * alpha * 0.5
        );
        gradient.addColorStop(0, `hsla(${field.type === 'attract' ? 60 : field.type === 'vortex' ? 280 : 0}, 80%, 70%, ${alpha * 0.2})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius * alpha * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw mouse trail
      if (mouse.trail.length > 1) {
        ctx.strokeStyle = 'hsla(200, 80%, 70%, 0.6)';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        
        for (let i = 0; i < mouse.trail.length; i++) {
          const point = mouse.trail[i];
          const alpha = point.life / 30;
          
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.globalAlpha = alpha;
            ctx.lineTo(point.x, point.y);
          }
        }
        ctx.globalAlpha = 1;
        ctx.stroke();
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Age particle
        particle.life--;
        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        
        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y, life: 10 });
        if (particle.trail.length > 8) {
          particle.trail.shift();
        }
        particle.trail.forEach(point => point.life--);
        particle.trail = particle.trail.filter(point => point.life > 0);
        
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;
        
        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          if (mouse.isPressed) {
            // Strong attraction when clicking
            particle.vx += Math.cos(angle) * force * 0.8;
            particle.vy += Math.sin(angle) * force * 0.8;
            particle.hue = 60 + Math.random() * 60; // Yellow/orange
          } else {
            // Gentle repulsion on hover
            particle.vx -= Math.cos(angle) * force * 0.2;
            particle.vy -= Math.sin(angle) * force * 0.2;
          }
          
          // Add mouse velocity influence
          particle.vx += mouse.velocity.x * force * 0.1;
          particle.vy += mouse.velocity.y * force * 0.1;
        }
        
        // Force field interactions
        forceFields.forEach(field => {
          const fdx = field.x - particle.x;
          const fdy = field.y - particle.y;
          const fdistance = Math.sqrt(fdx * fdx + fdy * fdy);
          
          if (fdistance < field.radius && fdistance > 0) {
            const fieldForce = (field.radius - fdistance) / field.radius * field.strength * 0.01;
            const fieldAngle = Math.atan2(fdy, fdx);
            
            switch (field.type) {
              case 'attract':
                particle.vx += Math.cos(fieldAngle) * fieldForce;
                particle.vy += Math.sin(fieldAngle) * fieldForce;
                break;
              case 'repel':
                particle.vx -= Math.cos(fieldAngle) * fieldForce;
                particle.vy -= Math.sin(fieldAngle) * fieldForce;
                break;
              case 'vortex':
                const perpAngle = fieldAngle + Math.PI / 2;
                particle.vx += Math.cos(perpAngle) * fieldForce;
                particle.vy += Math.sin(perpAngle) * fieldForce;
                // Also add slight inward pull
                particle.vx += Math.cos(fieldAngle) * fieldForce * 0.3;
                particle.vy += Math.sin(fieldAngle) * fieldForce * 0.3;
                break;
            }
            
            particle.hue = field.type === 'vortex' ? 280 : 60;
          }
        });
        
        // Environmental forces
        particle.vx += Math.sin(time * 0.5 + particle.x * 0.01) * 0.02;
        particle.vy += Math.cos(time * 0.3 + particle.y * 0.01) * 0.02;
        
        // Apply velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        
        // Boundary wrapping
        if (particle.x < 0) particle.x = canvasWidth;
        if (particle.x > canvasWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvasHeight;
        if (particle.y > canvasHeight) particle.y = 0;
        
        // Draw particle trail
        if (particle.trail.length > 1) {
          ctx.strokeStyle = `hsla(${particle.hue}, 70%, 50%, 0.3)`;
          ctx.lineWidth = Math.max(0.5, particle.size * 0.3);
          ctx.lineCap = 'round';
          ctx.beginPath();
          
          for (let j = 0; j < particle.trail.length; j++) {
            const trailPoint = particle.trail[j];
            const trailAlpha = trailPoint.life / 10;
            
            if (j === 0) {
              ctx.moveTo(trailPoint.x, trailPoint.y);
            } else {
              ctx.globalAlpha = trailAlpha * 0.5;
              ctx.lineTo(trailPoint.x, trailPoint.y);
            }
          }
          ctx.globalAlpha = 1;
          ctx.stroke();
        }
        
        // Draw particle
        const lifeRatio = particle.life / particle.maxLife;
        const pulseIntensity = Math.sin(time * 3 + i * 0.1) * 0.2 + 0.8;
        const currentSize = Math.max(0.5, particle.size * lifeRatio * pulseIntensity);
        
        // Particle glow
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 3
        );
        glowGradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${particle.opacity * lifeRatio})`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Particle core
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 80%, ${particle.opacity * lifeRatio})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Spawn new particles periodically
      if (Math.random() < 0.3 && particles.length < 200) {
        const edge = Math.floor(Math.random() * 4);
        let x, y;
        
        switch (edge) {
          case 0: x = Math.random() * canvasWidth; y = 0; break;
          case 1: x = canvasWidth; y = Math.random() * canvasHeight; break;
          case 2: x = Math.random() * canvasWidth; y = canvasHeight; break;
          default: x = 0; y = Math.random() * canvasHeight; break;
        }
        
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: 1 + Math.random() * 2,
          life: 100 + Math.random() * 50,
          maxLife: 150,
          hue: 180 + Math.random() * 120,
          opacity: 0.3 + Math.random() * 0.5,
          trail: []
        });
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
        background: 'radial-gradient(ellipse at center, #0a0f1c 0%, #050810 70%, #020406 100%)',
        cursor: 'crosshair',
      }}
    />
  );
}
