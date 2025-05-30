
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Portfolio items with enhanced data for 3D rendering
const portfolioItems: PortfolioItem[] = [
  {
    id: "work1",
    title: "E-Commerce Platform",
    description: "Modern shopping experience with intuitive UX design and seamless checkout flow",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    color: "#FF5630",
    technologies: ["React", "Node.js", "Stripe"],
    year: "2024"
  },
  {
    id: "work2",
    title: "Financial Dashboard",
    description: "Data-driven insights with elegant visualization and real-time analytics",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    color: "#FFD74B",
    technologies: ["Vue.js", "D3.js", "Python"],
    year: "2024"
  },
  {
    id: "work3",
    title: "Health & Wellness App",
    description: "Intuitive mobile experience for better living with personalized tracking",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    color: "#AE6A4D",
    technologies: ["React Native", "Firebase", "AI"],
    year: "2023"
  },
  {
    id: "work4",
    title: "Real Estate Platform",
    description: "Immersive property browsing experience with virtual tours",
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    color: "#FF8A50",
    technologies: ["Three.js", "React", "MongoDB"],
    year: "2023"
  },
  {
    id: "work5",
    title: "Educational Portal",
    description: "Interactive learning environment for students with gamification",
    category: "Learning Platform",
    image: "https://images.unsplash.com/photo-1620912189875-3471929162de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    color: "#9B59B6",
    technologies: ["Angular", "WebGL", "Socket.io"],
    year: "2024"
  },
  {
    id: "work6",
    title: "SaaS Application",
    description: "Cloud-based enterprise management solution with AI automation",
    category: "Enterprise Software",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    color: "#3498DB",
    technologies: ["Next.js", "GraphQL", "AWS"],
    year: "2024"
  }
];

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  color: string;
  technologies: string[];
  year: string;
}

interface WebGLCard {
  id: string;
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
  targetX: number;
  targetY: number;
  targetZ: number;
  targetRotationY: number;
  velocity: { x: number; y: number; z: number };
  item: PortfolioItem;
  image?: HTMLImageElement;
  isHovered: boolean;
  glowIntensity: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const WebGLPortfolioViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const cardsRef = useRef<WebGLCard[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    isActive: false,
    velocity: { x: 0, y: 0 }
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const createParticles = useCallback((x: number, y: number, z: number, color: string, count: number = 8) => {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      particlesRef.current.push({
        x: x + Math.cos(angle) * 20,
        y: y + Math.sin(angle) * 20,
        z: z + (Math.random() - 0.5) * 30,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        vz: (Math.random() - 0.5) * 2,
        life: 60 + Math.random() * 40,
        maxLife: 60 + Math.random() * 40,
        size: Math.random() * 4 + 2,
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

    // Initialize 3D cards
    const initCards = async () => {
      const cards: WebGLCard[] = [];
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

      // Load images
      const imagePromises = portfolioItems.map(item => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = item.image;
        });
      });

      try {
        const images = await Promise.all(imagePromises);

        portfolioItems.forEach((item, index) => {
          const angle = (index / portfolioItems.length) * Math.PI * 2;
          const radius = Math.min(canvasWidth, canvasHeight) * 0.25;
          const centerX = canvasWidth * 0.5;
          const centerY = canvasHeight * 0.5;

          cards.push({
            id: item.id,
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            z: (Math.random() - 0.5) * 100,
            rotationX: 0,
            rotationY: angle,
            rotationZ: 0,
            scale: 0.8 + Math.random() * 0.4,
            targetX: centerX + Math.cos(angle) * radius,
            targetY: centerY + Math.sin(angle) * radius,
            targetZ: 0,
            targetRotationY: angle,
            velocity: { x: 0, y: 0, z: 0 },
            item,
            image: images[index],
            isHovered: false,
            glowIntensity: 0
          });
        });

        cardsRef.current = cards;
        setIsLoaded(true);
      } catch (error) {
        console.warn('Some images failed to load, continuing without them');
        setIsLoaded(true);
      }
    };

    initCards();

    // Mouse interactions
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      mouseRef.current.velocity.x = newX - mouseRef.current.x;
      mouseRef.current.velocity.y = newY - mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
      mouseRef.current.isActive = true;

      // Check for card hover
      const hoveredCard = cardsRef.current.find(card => {
        const distance = Math.sqrt(
          Math.pow(card.x - newX, 2) + Math.pow(card.y - newY, 2)
        );
        return distance < 120;
      });

      setHoveredCard(hoveredCard ? hoveredCard.id : null);
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
      setHoveredCard(null);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const clickedCard = cardsRef.current.find(card => {
        const distance = Math.sqrt(
          Math.pow(card.x - clickX, 2) + Math.pow(card.y - clickY, 2)
        );
        return distance < 120;
      });

      if (clickedCard) {
        setSelectedCard(selectedCard === clickedCard.id ? null : clickedCard.id);
        createParticles(clickedCard.x, clickedCard.y, clickedCard.z, clickedCard.item.color, 12);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    // Animation loop
    const animate = (time: number) => {
      const deltaTime = 16.67; // ~60fps
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        canvasWidth/2, canvasHeight/2, 0,
        canvasWidth/2, canvasHeight/2, Math.max(canvasWidth, canvasHeight) * 0.7
      );
      gradient.addColorStop(0, '#0A0A0F');
      gradient.addColorStop(0.5, '#1A1A1F');
      gradient.addColorStop(1, '#0A0A0F');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Update particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        particle.life--;

        particle.vx *= 0.98;
        particle.vy *= 0.98;
        particle.vz *= 0.98;

        if (particle.life <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }

      // Update cards
      cardsRef.current.forEach(card => {
        // Smooth movement to target position
        const lerpFactor = 0.05;
        card.x += (card.targetX - card.x) * lerpFactor;
        card.y += (card.targetY - card.y) * lerpFactor;
        card.z += (card.targetZ - card.z) * lerpFactor;
        card.rotationY += (card.targetRotationY - card.rotationY) * lerpFactor;

        // Mouse influence
        if (mouseRef.current.isActive) {
          const distance = Math.sqrt(
            Math.pow(card.x - mouseRef.current.x, 2) + 
            Math.pow(card.y - mouseRef.current.y, 2)
          );
          
          if (distance < 200) {
            const influence = (200 - distance) / 200;
            const forceX = (mouseRef.current.x - card.x) * influence * 0.02;
            const forceY = (mouseRef.current.y - card.y) * influence * 0.02;
            
            card.velocity.x += forceX;
            card.velocity.y += forceY;
          }
        }

        // Apply velocity
        card.x += card.velocity.x;
        card.y += card.velocity.y;
        card.z += card.velocity.z;

        // Damping
        card.velocity.x *= 0.95;
        card.velocity.y *= 0.95;
        card.velocity.z *= 0.95;

        // Hover effects
        card.isHovered = hoveredCard === card.id;
        if (card.isHovered) {
          card.glowIntensity = Math.min(1, card.glowIntensity + 0.1);
          card.scale = Math.min(1.2, card.scale + 0.02);
        } else {
          card.glowIntensity = Math.max(0, card.glowIntensity - 0.05);
          card.scale = Math.max(0.8, card.scale - 0.01);
        }

        // Auto rotation
        card.rotationX += 0.005;
        card.rotationZ = Math.sin(time * 0.001 + card.id.length) * 0.1;
      });

      // Sort cards by z-depth for proper rendering
      const sortedCards = [...cardsRef.current].sort((a, b) => b.z - a.z);

      // Render particles
      particlesRef.current.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        const size = particle.size * alpha;

        ctx.fillStyle = `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 8 * alpha;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render cards
      sortedCards.forEach(card => {
        ctx.save();
        
        // Transform for 3D effect
        ctx.translate(card.x, card.y);
        ctx.scale(card.scale, card.scale);
        ctx.rotate(card.rotationZ);

        const cardWidth = 200;
        const cardHeight = 250;
        
        // Enhanced glow effect
        if (card.glowIntensity > 0) {
          const glowSize = 20 * card.glowIntensity;
          ctx.shadowColor = card.item.color;
          ctx.shadowBlur = glowSize;
          
          ctx.fillStyle = `${card.item.color}${Math.floor(card.glowIntensity * 30).toString(16).padStart(2, '0')}`;
          ctx.fillRect(-cardWidth/2 - glowSize/2, -cardHeight/2 - glowSize/2, 
                      cardWidth + glowSize, cardHeight + glowSize);
        }

        // Card background with gradient
        const cardGradient = ctx.createLinearGradient(0, -cardHeight/2, 0, cardHeight/2);
        cardGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        cardGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
        cardGradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
        
        ctx.fillStyle = cardGradient;
        ctx.fillRect(-cardWidth/2, -cardHeight/2, cardWidth, cardHeight);

        // Card image
        if (card.image) {
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(-cardWidth/2 + 10, -cardHeight/2 + 10, cardWidth - 20, 140, 8);
          ctx.clip();
          
          // Apply perspective transformation for 3D effect
          const perspective = 1 + card.z * 0.001;
          ctx.scale(perspective, perspective);
          
          ctx.drawImage(
            card.image, 
            -cardWidth/2 + 10, -cardHeight/2 + 10, 
            cardWidth - 20, 140
          );
          ctx.restore();
        }

        // Card content
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(card.item.title, 0, -cardHeight/2 + 170);

        ctx.fillStyle = card.item.color;
        ctx.font = '11px Arial';
        ctx.fillText(card.item.category, 0, -cardHeight/2 + 190);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '10px Arial';
        ctx.fillText(card.item.year, 0, -cardHeight/2 + 210);

        // Technology tags
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.font = '9px Arial';
        const techText = card.item.technologies.join(' • ');
        ctx.fillText(techText, 0, -cardHeight/2 + 230);

        // Selection indicator
        if (selectedCard === card.id) {
          ctx.strokeStyle = card.item.color;
          ctx.lineWidth = 3;
          ctx.setLineDash([10, 5]);
          ctx.strokeRect(-cardWidth/2 - 5, -cardHeight/2 - 5, cardWidth + 10, cardHeight + 10);
          ctx.setLineDash([]);
        }

        // Border
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + card.glowIntensity * 0.4})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-cardWidth/2, -cardHeight/2, cardWidth, cardHeight);

        ctx.restore();
      });

      // Mouse trail
      if (mouseRef.current.isActive) {
        const speed = Math.sqrt(
          mouseRef.current.velocity.x ** 2 + mouseRef.current.velocity.y ** 2
        );
        
        if (speed > 2) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(0.8, speed / 20)})`;
          ctx.lineWidth = 2;
          ctx.shadowColor = '#FFFFFF';
          ctx.shadowBlur = 10;
          
          ctx.beginPath();
          ctx.arc(mouseRef.current.x, mouseRef.current.y, 20, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    if (isLoaded) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticles, hoveredCard, selectedCard, isLoaded]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A1F 50%, #0A0A0F 100%)',
          cursor: hoveredCard ? 'pointer' : 'crosshair'
        }}
      />
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-lg">Loading 3D Portfolio...</div>
        </div>
      )}

      {/* Project details overlay */}
      {selectedCard && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
          {(() => {
            const card = cardsRef.current.find(c => c.id === selectedCard);
            return card ? (
              <>
                <h3 className="text-xl font-bold mb-2 text-maverick-orange">{card.item.title}</h3>
                <p className="text-sm mb-3">{card.item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {card.item.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-maverick-orange/20 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            ) : null;
          })()}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-4 right-4 text-white/60 text-sm">
        <p>🖱️ Move mouse to interact</p>
        <p>🖱️ Click cards to select</p>
      </div>
    </div>
  );
};

export default function CreativeWorkSection() {
  return (
    <section className="py-24 px-5 md:px-10 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Our <span className="text-maverick-orange">Creative Work</span>
          </h2>
          <p className="text-[#BBBBBB] text-xl max-w-3xl mx-auto">
            Experience our portfolio in an immersive 3D environment. Interact with our projects to discover innovative designs and digital experiences.
          </p>
        </motion.div>
        
        {/* WebGL Portfolio Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <WebGLPortfolioViewer />
        </motion.div>
        
        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link href="/work" className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md md:py-3 md:text-lg md:px-8">
            View all projects
          </Link>
        </div>

        {/* Project Grid for fallback */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-maverick-orange text-sm font-medium">{item.category}</span>
                  <h4 className="text-xl font-bold text-white mt-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-maverick-orange/20 text-maverick-orange text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
