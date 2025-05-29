import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

interface Logo {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  name: string;
  hovered: boolean;
  pulse: number;
  rotation: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const logosRef = useRef<Logo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeLogos();
    };

    const initializeLogos = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.25;

      logosRef.current = [
        {
          x: centerX - radius,
          y: centerY - radius,
          targetX: centerX - radius,
          targetY: centerY - radius,
          radius: 40,
          color: '#10a37f',
          name: 'ChatGPT',
          hovered: false,
          pulse: 0,
          rotation: 0
        },
        {
          x: centerX + radius,
          y: centerY - radius,
          targetX: centerX + radius,
          targetY: centerY - radius,
          radius: 40,
          color: '#4285f4',
          name: 'Gemini',
          hovered: false,
          pulse: 0,
          rotation: 0
        },
        {
          x: centerX - radius,
          y: centerY + radius,
          targetX: centerX - radius,
          targetY: centerY + radius,
          radius: 40,
          color: '#e97435',
          name: 'Claude',
          hovered: false,
          pulse: 0,
          rotation: 0
        },
        {
          x: centerX + radius,
          y: centerY + radius,
          targetX: centerX + radius,
          targetY: centerY + radius,
          radius: 40,
          color: '#ffffff',
          name: 'Grok',
          hovered: false,
          pulse: 0,
          rotation: 0
        }
      ];
    };

    const createParticle = (x: number, y: number, color: string) => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        radius: Math.random() * 3 + 1,
        color,
        alpha: 1,
        life: 0,
        maxLife: 60 + Math.random() * 60
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;

      // Check logo interactions
      logosRef.current.forEach(logo => {
        const distance = Math.sqrt(
          Math.pow(mouseRef.current.x - logo.x, 2) + 
          Math.pow(mouseRef.current.y - logo.y, 2)
        );
        
        logo.hovered = distance < logo.radius + 20;
        
        if (logo.hovered) {
          // Create particles when hovering
          for (let i = 0; i < 3; i++) {
            particlesRef.current.push(createParticle(logo.x, logo.y, logo.color));
          }
          
          // Repel logo from mouse
          const angle = Math.atan2(logo.y - mouseRef.current.y, logo.x - mouseRef.current.x);
          const force = Math.max(0, (logo.radius + 50 - distance) / 50);
          logo.targetX = logo.x + Math.cos(angle) * force * 30;
          logo.targetY = logo.y + Math.sin(angle) * force * 30;
        } else {
          // Return to original position
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const radius = Math.min(canvas.width, canvas.height) * 0.25;
          
          if (logo.name === 'ChatGPT') {
            logo.targetX = centerX - radius;
            logo.targetY = centerY - radius;
          } else if (logo.name === 'Gemini') {
            logo.targetX = centerX + radius;
            logo.targetY = centerY - radius;
          } else if (logo.name === 'Claude') {
            logo.targetX = centerX - radius;
            logo.targetY = centerY + radius;
          } else if (logo.name === 'Grok') {
            logo.targetX = centerX + radius;
            logo.targetY = centerY + radius;
          }
        }
      });

      // Create mouse trail particles
      if (Math.random() < 0.3) {
        particlesRef.current.push(createParticle(
          mouseRef.current.x, 
          mouseRef.current.y, 
          `hsl(${Date.now() % 360}, 70%, 60%)`
        ));
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      logosRef.current.forEach(logo => {
        const distance = Math.sqrt(
          Math.pow(clickX - logo.x, 2) + 
          Math.pow(clickY - logo.y, 2)
        );
        
        if (distance < logo.radius + 20) {
          // Create explosion effect
          for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 * i) / 20;
            const particle = createParticle(logo.x, logo.y, logo.color);
            particle.vx = Math.cos(angle) * 8;
            particle.vy = Math.sin(angle) * 8;
            particle.maxLife = 120;
            particlesRef.current.push(particle);
          }
        }
      });
    };

    const drawLogo = (ctx: CanvasRenderingContext2D, logo: Logo) => {
      const size = logo.radius + (logo.hovered ? 10 : 0) + Math.sin(logo.pulse) * 5;
      
      ctx.save();
      ctx.translate(logo.x, logo.y);
      ctx.rotate(logo.rotation);
      
      // Outer glow
      if (logo.hovered) {
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size + 20);
        gradient.addColorStop(0, logo.color + '40');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, size + 20, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Main circle
      ctx.fillStyle = logo.color;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner pattern based on logo
      ctx.fillStyle = logo.name === 'Grok' ? '#000000' : '#ffffff';
      ctx.font = `bold ${size * 0.4}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      let symbol = '';
      switch (logo.name) {
        case 'ChatGPT':
          symbol = 'GPT';
          break;
        case 'Gemini':
          symbol = '♊';
          break;
        case 'Claude':
          symbol = '𝕮';
          break;
        case 'Grok':
          symbol = '𝕏';
          break;
      }
      
      ctx.fillText(symbol, 0, 0);
      
      // Connection lines to mouse when hovered
      if (logo.hovered) {
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = logo.color + '60';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(logo.x, logo.y);
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create background gradient
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, canvas.width
      );
      gradient.addColorStop(0, '#1a1a2e15');
      gradient.addColorStop(0.5, '#16213e10');
      gradient.addColorStop(1, '#0f0f23');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        particle.alpha = 1 - (particle.life / particle.maxLife);
        
        if (particle.alpha > 0) {
          ctx.save();
          ctx.globalAlpha = particle.alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          return true;
        }
        return false;
      });
      
      // Update and draw logos
      logosRef.current.forEach(logo => {
        // Smooth movement
        logo.x += (logo.targetX - logo.x) * 0.1;
        logo.y += (logo.targetY - logo.y) * 0.1;
        
        // Update animation properties
        logo.pulse += 0.1;
        logo.rotation += logo.hovered ? 0.05 : 0.01;
        
        drawLogo(ctx, logo);
      });
      
      // Draw connections between logos
      ctx.strokeStyle = '#ffffff20';
      ctx.lineWidth = 1;
      for (let i = 0; i < logosRef.current.length; i++) {
        for (let j = i + 1; j < logosRef.current.length; j++) {
          const logo1 = logosRef.current[i];
          const logo2 = logosRef.current[j];
          const distance = Math.sqrt(
            Math.pow(logo1.x - logo2.x, 2) + 
            Math.pow(logo1.y - logo2.y, 2)
          );
          
          if (distance < 400) {
            ctx.save();
            ctx.globalAlpha = 1 - (distance / 400);
            ctx.beginPath();
            ctx.moveTo(logo1.x, logo1.y);
            ctx.lineTo(logo2.x, logo2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);
    
    setIsLoaded(true);
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        willChange: 'transform'
      }}
    />
  );
}