
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Code, PenTool, Brain } from "lucide-react";

export default function ServiceCascadeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations for better performance
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothScrollProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothScrollProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const services = [
    {
      id: "web-development",
      title: "Web Design & Development",
      icon: <Code className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Custom Website Design",
          description: "We create stunning, responsive websites that capture your brand's essence and convert visitors into customers. Our designs prioritize user experience while maintaining pixel-perfect aesthetics that work seamlessly across all devices."
        },
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "E-commerce Solutions",
          description: "Transform your business with powerful e-commerce platforms that drive sales and streamline operations. We build scalable online stores with secure payment processing, inventory management, and analytics to maximize your revenue potential."
        },
        {
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Performance Optimization",
          description: "Ensure your website loads lightning-fast and ranks high in search results with our technical optimization services. We implement best practices for speed, SEO, and accessibility to deliver exceptional user experiences that convert."
        }
      ]
    },
    {
      id: "marketing-creative",
      title: "Marketing & Creative",
      icon: <PenTool className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Brand Strategy & Identity",
          description: "Develop a compelling brand identity that resonates with your target audience and sets you apart from competitors. Our strategic approach encompasses visual design, messaging, and positioning to create memorable brand experiences that drive loyalty."
        },
        {
          image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Digital Marketing Campaigns",
          description: "Reach your ideal customers with data-driven marketing campaigns across multiple channels. We leverage social media, email marketing, and targeted advertising to amplify your message and generate measurable results that impact your bottom line."
        },
        {
          image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Creative Content Production",
          description: "Engage your audience with compelling visual and written content that tells your story authentically. From photography and videography to copywriting and graphic design, we create content that captures attention and drives engagement."
        }
      ]
    },
    {
      id: "ai-integration",
      title: "AI Integration & Automation",
      icon: <Brain className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Business Process Automation",
          description: "Streamline your operations with intelligent automation solutions that reduce manual work and increase efficiency. We implement AI-powered systems that handle repetitive tasks, allowing your team to focus on strategic initiatives that drive growth."
        },
        {
          image: "https://images.unsplash.com/photo-1590674899484-13b5a8a9d0af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Customer Experience Enhancement",
          description: "Deliver personalized customer experiences at scale with AI-driven solutions that anticipate needs and provide instant support. Our chatbots and recommendation engines create meaningful interactions that increase satisfaction and retention."
        },
        {
          image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Data Analytics & Insights",
          description: "Transform raw data into actionable business intelligence with advanced AI analytics platforms. We help you uncover hidden patterns, predict trends, and make informed decisions that drive competitive advantage and sustainable growth."
        }
      ]
    }
  ];

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (!sectionRef.current || !isInView) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    // Calculate progress based on section visibility
    const startPoint = -rect.top;
    const endPoint = sectionHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, startPoint / endPoint));
    
    // Calculate total items and determine current index
    const totalItems = services.reduce((acc, service) => acc + service.items.length, 0);
    const itemIndex = Math.floor(progress * (totalItems - 1));
    const clampedIndex = Math.min(Math.max(itemIndex, 0), totalItems - 1);
    
    setCurrentIndex(clampedIndex);
  }, [services, isInView]);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px 100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Throttled scroll event listener
  useEffect(() => {
    if (!isInView) return;

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll, isInView]);

  // Get current service and item based on index
  const getCurrentServiceAndItem = useCallback((index: number) => {
    let currentIndex = 0;
    for (const service of services) {
      if (index < currentIndex + service.items.length) {
        return {
          service,
          item: service.items[index - currentIndex],
          itemIndex: index - currentIndex
        };
      }
      currentIndex += service.items.length;
    }
    return {
      service: services[0],
      item: services[0].items[0],
      itemIndex: 0
    };
  }, [services]);

  const currentData = getCurrentServiceAndItem(currentIndex);
  const totalItems = services.reduce((acc, service) => acc + service.items.length, 0);

  // Navigate to specific item
  const navigateToItem = useCallback((targetIndex: number) => {
    if (!sectionRef.current) return;
    
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const progress = targetIndex / (totalItems - 1);
    const targetScroll = sectionTop + progress * (sectionHeight - window.innerHeight);
    
    window.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: 'smooth'
    });
  }, [totalItems]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-[500vh] bg-gradient-to-b from-[#121212] to-[#0a0a0a] overflow-hidden"
      style={{ 
        opacity,
        scale,
        transformOrigin: "center center"
      }}
    >
      {/* Enhanced floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-maverick-orange/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Sticky content container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced background effects */}
        <motion.div
          className="absolute top-1/4 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,90,0,0.3) 0%, rgba(255,178,0,0.1) 50%, transparent 100%)",
            scale: useTransform(smoothScrollProgress, [0, 0.5, 1], [0.8, 1.4, 0.8]),
            x: useTransform(smoothScrollProgress, [0, 0.5, 1], [100, -100, 100]),
            rotate: useTransform(smoothScrollProgress, [0, 1], [0, 360]),
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,178,0,0.3) 0%, rgba(255,90,0,0.1) 50%, transparent 100%)",
            scale: useTransform(smoothScrollProgress, [0, 0.5, 1], [1.2, 0.6, 1.2]),
            y: useTransform(smoothScrollProgress, [0, 0.5, 1], [-50, 50, -50]),
          }}
        />

        {/* Image stack with improved 3D effects */}
        <div className="relative w-1/2 h-[80vh] flex items-center justify-center" style={{ perspective: '1200px' }}>
          <div className="relative w-full max-w-lg h-full">
            {services.flatMap(service => service.items).map((item, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              const absOffset = Math.abs(offset);
              
              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                  style={{
                    zIndex: isActive ? 20 : Math.max(0, 20 - absOffset),
                  }}
                  animate={{
                    scale: isActive ? 1 : Math.max(0.7, 1 - absOffset * 0.08),
                    rotateY: offset * 8,
                    rotateX: offset * 2,
                    z: offset * -80,
                    opacity: absOffset > 3 ? 0 : Math.max(0.3, 1 - absOffset * 0.2),
                    filter: isActive ? "brightness(1)" : `brightness(${Math.max(0.4, 1 - absOffset * 0.15)})`,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    scale: isActive ? 1.02 : undefined,
                    rotateY: isActive ? 0 : undefined,
                  }}
                  onClick={() => !isActive && navigateToItem(index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    }}
                    loading="lazy"
                  />
                  
                  {/* Enhanced overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/10 via-transparent to-maverick-amber/5" />
                  
                  {/* Animated border */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2"
                    style={{
                      borderColor: isActive ? '#FF5A00' : 'rgba(255, 90, 0, 0.2)',
                    }}
                    animate={{
                      boxShadow: isActive 
                        ? '0 0 30px rgba(255, 90, 0, 0.3), inset 0 0 30px rgba(255, 90, 0, 0.1)' 
                        : '0 0 0px rgba(255, 90, 0, 0)',
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Content area with improved animations */}
        <div className="w-1/2 px-16 text-white relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 60, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1
            }}
          >
            {/* Service category indicator */}
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div 
                className="p-4 bg-gradient-to-br from-maverick-orange/20 to-maverick-amber/10 rounded-2xl mr-4 backdrop-blur-sm border border-maverick-orange/20"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {currentData.service.icon}
              </motion.div>
              <span className="text-maverick-orange text-sm font-bold uppercase tracking-widest">
                {currentData.service.title}
              </span>
            </motion.div>

            {/* Main content */}
            <motion.h2 
              className="text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-maverick-orange via-maverick-amber to-maverick-orange bg-clip-text text-transparent bg-300% animate-gradient">
                {currentData.item.title}
              </span>
            </motion.h2>
            
            <motion.div
              className="text-xl leading-relaxed mb-10 text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentData.item.description}
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.button
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-maverick-orange to-maverick-amber text-white font-bold rounded-full shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 90, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-maverick-amber to-maverick-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="buttonBg"
              />
            </motion.button>

            {/* Progress line */}
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-full mt-10"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </div>

        {/* Enhanced progress indicator */}
        <motion.div 
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="space-y-3">
            {services.flatMap((service, serviceIndex) => 
              service.items.map((_, itemIndex) => {
                const globalIndex = services.slice(0, serviceIndex).reduce((acc, s) => acc + s.items.length, 0) + itemIndex;
                const isActive = globalIndex === currentIndex;
                
                return (
                  <motion.button
                    key={globalIndex}
                    className="relative w-4 h-4 rounded-full transition-all duration-300 group"
                    style={{
                      backgroundColor: isActive ? '#FF5A00' : 'rgba(255, 255, 255, 0.3)',
                    }}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigateToItem(globalIndex)}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-maverick-orange"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-maverick-orange opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: isActive ? [1, 1.5, 1] : 1,
                        opacity: isActive ? [0.5, 1, 0.5] : 0
                      }}
                      transition={{ 
                        duration: isActive ? 2 : 0.3,
                        repeat: isActive ? Infinity : 0
                      }}
                    />
                  </motion.button>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
