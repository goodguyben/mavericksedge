
import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  type: 'data' | 'processing' | 'output';
  energy: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  active: boolean;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false, lastX: 0, lastY: 0 });
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

    // Initialize AI particle system
    const initParticleSystem = () => {
      const particles: Particle[] = [];
      const connections: Connection[] = [];
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      // Create initial particles
      for (let i = 0; i < 60; i++) {
        const types: ('data' | 'processing' | 'output')[] = ['data', 'processing', 'output'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: type === 'processing' ? 4 + Math.random() * 3 : 2 + Math.random() * 2,
          life: 100,
          maxLife: 100,
          type,
          energy: Math.random()
        });
      }

      // Create connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          
          if (distance < 150 && Math.random() < 0.1) {
            connections.push({
              from: i,
              to: j,
              strength: Math.random(),
              active: false
            });
          }
        }
      }

      particlesRef.current = particles;
      connectionsRef.current = connections;
    };

    initParticleSystem();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDown = true;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      
      // Create burst of particles at mouse position
      createParticleBurst(mouseRef.current.x, mouseRef.current.y);
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };

    const createParticleBurst = (x: number, y: number) => {
      const particles = particlesRef.current;
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        const speed = 2 + Math.random() * 3;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 2,
          life: 60,
          maxLife: 60,
          type: 'processing',
          energy: 1
        });
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    const animate = () => {
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      // Clear canvas with dynamic gradient
      const gradient = ctx.createRadialGradient(
        canvasWidth / 2, canvasHeight / 2, 0,
        canvasWidth / 2, canvasHeight / 2, Math.max(canvasWidth, canvasHeight) / 2
      );
      gradient.addColorStop(0, '#0A0A0F');
      gradient.addColorStop(0.5, '#0D0D13');
      gradient.addColorStop(1, '#050507');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const particles = particlesRef.current;
      const connections = connectionsRef.current;
      const mouse = mouseRef.current;

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Age particle
        particle.life--;
        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouse.x, 2) + Math.pow(particle.y - mouse.y, 2)
        );
        
        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          const angle = Math.atan2(particle.y - mouse.y, particle.x - mouse.x);
          
          if (mouse.isDown) {
            // Attract to mouse when clicked
            particle.vx += Math.cos(angle + Math.PI) * force * 0.1;
            particle.vy += Math.sin(angle + Math.PI) * force * 0.1;
            particle.energy = Math.min(1, particle.energy + 0.05);
          } else {
            // Repel from mouse normally
            particle.vx += Math.cos(angle) * force * 0.05;
            particle.vy += Math.sin(angle) * force * 0.05;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary bounce
        if (particle.x < 0 || particle.x > canvasWidth) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvasWidth, particle.x));
        }
        if (particle.y < 0 || particle.y > canvasHeight) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvasHeight, particle.y));
        }

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Energy decay
        particle.energy *= 0.995;
      }

      // Update connections
      connections.forEach(connection => {
        const fromParticle = particles[connection.from];
        const toParticle = particles[connection.to];
        
        if (fromParticle && toParticle) {
          const distance = Math.sqrt(
            Math.pow(fromParticle.x - toParticle.x, 2) + 
            Math.pow(fromParticle.y - toParticle.y, 2)
          );
          
          connection.active = distance < 120 && (fromParticle.energy > 0.3 || toParticle.energy > 0.3);
          
          if (connection.active) {
            connection.strength = Math.min(1, connection.strength + 0.05);
          } else {
            connection.strength = Math.max(0, connection.strength - 0.02);
          }
        }
      });

      // Draw connections
      connections.forEach(connection => {
        if (connection.strength > 0) {
          const fromParticle = particles[connection.from];
          const toParticle = particles[connection.to];
          
          if (fromParticle && toParticle) {
            const opacity = connection.strength * 0.5;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(fromParticle.x, fromParticle.y);
            ctx.lineTo(toParticle.x, toParticle.y);
            ctx.stroke();
          }
        }
      });

      // Draw particles
      particles.forEach(particle => {
        const lifeRatio = particle.life / particle.maxLife;
        const alpha = lifeRatio * (0.6 + particle.energy * 0.4);
        
        let color;
        switch (particle.type) {
          case 'data':
            color = `rgba(100, 255, 100, ${alpha})`;
            break;
          case 'processing':
            color = `rgba(255, 150, 0, ${alpha})`;
            break;
          case 'output':
            color = `rgba(255, 100, 255, ${alpha})`;
            break;
        }

        // Glow effect
        if (particle.energy > 0.5) {
          ctx.shadowColor = color;
          ctx.shadowBlur = particle.size * 3;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, Math.max(1, particle.size * lifeRatio), 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw mouse interaction area
      if (mouse.isDown) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Spawn new particles occasionally
      if (Math.random() < 0.02 && particles.length < 80) {
        const edge = Math.floor(Math.random() * 4);
        let x, y;
        
        switch (edge) {
          case 0: // top
            x = Math.random() * canvasWidth;
            y = 0;
            break;
          case 1: // right
            x = canvasWidth;
            y = Math.random() * canvasHeight;
            break;
          case 2: // bottom
            x = Math.random() * canvasWidth;
            y = canvasHeight;
            break;
          default: // left
            x = 0;
            y = Math.random() * canvasHeight;
        }

        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: 2 + Math.random() * 2,
          life: 120,
          maxLife: 120,
          type: 'data',
          energy: Math.random() * 0.5
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
        cursor: 'crosshair',
        pointerEvents: 'auto',
        zIndex: 1,
      }}
    />
  );
}
