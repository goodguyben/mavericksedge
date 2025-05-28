
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Code, PenTool, Brain, ChevronRight, Play } from "lucide-react";

interface CascadeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
}

interface ServiceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: CascadeItem[];
}

export default function ServiceCascadeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services: ServiceSection[] = [
    {
      id: "web-development",
      title: "Web Design & Development",
      icon: <Code className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          id: "custom-solutions",
          title: "Custom Web Solutions",
          description: "We craft bespoke websites tailored to your unique business needs and brand identity. Our development process ensures scalable, secure, and lightning-fast performance that keeps your visitors engaged.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-orange-500/20 to-yellow-500/20"
        },
        {
          id: "ecommerce",
          title: "E-commerce Excellence",
          description: "Transform your business with powerful e-commerce platforms that drive sales and enhance customer experience. We integrate secure payment systems, inventory management, and analytics to maximize your online revenue.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-yellow-500/20 to-orange-500/20"
        },
        {
          id: "performance",
          title: "Performance Optimization",
          description: "Speed matters in the digital world. We optimize your website for blazing-fast load times and superior user experience. Our performance enhancements boost SEO rankings and increase conversion rates significantly.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-orange-500/20 to-red-500/20"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing & Creative",
      icon: <PenTool className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          id: "brand-strategy",
          title: "Brand Strategy & Design",
          description: "We create compelling brand identities that resonate with your target audience and stand out in competitive markets. Our strategic approach combines visual design with market research to build memorable brand experiences.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
          id: "digital-campaigns",
          title: "Digital Marketing Campaigns",
          description: "Drive targeted traffic and maximize ROI with our data-driven marketing campaigns across all digital channels. We leverage analytics and user behavior insights to create campaigns that convert prospects into loyal customers.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-pink-500/20 to-red-500/20"
        }
      ]
    }
  ];

  const allItems = services.flatMap(service => service.items);
  const totalItems = allItems.length;

  // Controlled scroll-based progression with heavy throttling for single-item changes
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const now = Date.now();
      
      // Heavy throttle to prevent rapid changes - only allow changes every 500ms
      if (now - lastScrollTime.current < 500) return;
      
      // More granular scroll sections for smoother single-item progression
      const scrollSection = latest * totalItems;
      const targetIndex = Math.floor(scrollSection);
      const clampedIndex = Math.min(Math.max(targetIndex, 0), totalItems - 1);
      
      // Only change if we've crossed a significant threshold
      const threshold = 0.15; // Require 15% scroll progress between items
      const currentSection = activeIndex;
      const sectionProgress = scrollSection - currentSection;
      
      if (Math.abs(sectionProgress) >= threshold && clampedIndex !== activeIndex) {
        lastScrollTime.current = now;
        setActiveIndex(clampedIndex);
        setIsScrolling(true);
        
        // Clear existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        
        // Set scrolling to false after animation completes
        scrollTimeout.current = setTimeout(() => {
          setIsScrolling(false);
        }, 400);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, activeIndex, totalItems]);

  const getImageTransform = (index: number) => {
    const diff = index - activeIndex;
    
    if (diff === 0) {
      // Active card - prominent and centered
      return {
        x: 0,
        y: 0,
        z: 0,
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px) brightness(1)",
        zIndex: 20
      };
    } else if (diff < 0) {
      // Cards behind - stacked with dramatic depth
      const distance = Math.abs(diff);
      return {
        x: -30 * distance,
        y: 15 * distance,
        z: -80 * distance,
        rotateY: -15 * distance,
        rotateX: 5 * distance,
        scale: Math.max(0.6, 1 - 0.15 * distance),
        opacity: Math.max(0.1, 0.7 - 0.3 * distance),
        filter: `blur(${distance * 3}px) brightness(${Math.max(0.3, 1 - 0.2 * distance)})`,
        zIndex: 20 - distance
      };
    } else {
      // Cards ahead - partially visible with forward tilt
      const distance = diff;
      return {
        x: 40 * distance,
        y: -10 * distance,
        z: -60 * distance,
        rotateY: 12 * distance,
        rotateX: -3 * distance,
        scale: Math.max(0.5, 1 - 0.2 * distance),
        opacity: Math.max(0.05, 0.5 - 0.25 * distance),
        filter: `blur(${distance * 2}px) brightness(${Math.max(0.2, 0.8 - 0.3 * distance)})`,
        zIndex: 20 - distance
      };
    }
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black overflow-hidden">
      {/* Dynamic background gradients */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 90, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 90, 0, 0.05) 0%, transparent 50%)
          `
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated mesh gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(255, 90, 0, 0.03) 90deg, 
              transparent 180deg, 
              rgba(255, 165, 0, 0.03) 270deg, 
              transparent 360deg)
          `
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Enhanced floating graphics and particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-50, -200],
              x: [0, Math.random() * 40 - 20],
              rotate: [0, 360],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 && (
              <div className="w-3 h-3 border border-maverick-orange/30 rotate-45" />
            )}
            {i % 3 === 1 && (
              <div className="w-2 h-2 bg-maverick-orange/40 rounded-full" />
            )}
            {i % 3 === 2 && (
              <div className="w-4 h-0.5 bg-gradient-to-r from-transparent via-maverick-orange/50 to-transparent" />
            )}
          </motion.div>
        ))}
        
        {/* Animated grid lines */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 90, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 90, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            x: [0, 60],
            y: [0, 60],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Glowing orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full bg-gradient-radial from-maverick-orange/10 to-transparent blur-xl"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Sticky content container */}
      <div className="sticky top-16 h-screen flex items-center justify-center bg-black z-10 relative">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* 3D Image Stack */}
          <div className="relative h-96 lg:h-[500px] perspective-1000">
            {/* Enhanced progress indicator */}
            <div className="absolute -top-12 left-0 right-0 z-30">
              <div className="flex justify-center items-center space-x-3">
                <motion.div 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-32 h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
                    <motion.div
                      className="h-full bg-gradient-to-r from-maverick-orange via-yellow-500 to-maverick-orange rounded-full relative"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((activeIndex + 1) / totalItems) * 100}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute right-0 top-0 w-1 h-full bg-white/80 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                  <motion.span 
                    className="text-xs text-maverick-orange font-medium"
                    key={activeIndex}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeIndex + 1}/{totalItems}
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-20">
              <motion.div
                className="flex flex-col items-center space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="w-0.5 h-8 bg-gradient-to-b from-transparent via-maverick-orange to-transparent rounded-full"
                  animate={{
                    scaleY: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-xs text-gray-500 transform -rotate-90 whitespace-nowrap origin-center">
                  Scroll
                </span>
              </motion.div>
            </div>

            {/* 3D Cards Container */}
            <div className="relative w-full h-full preserve-3d">
              {allItems.map((item, index) => {
                const transform = getImageTransform(index);
                
                return (
                  <motion.div
                    key={item.id}
                    className="absolute inset-0 cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      zIndex: transform.zIndex,
                    }}
                    animate={{
                      x: transform.x,
                      y: transform.y,
                      z: transform.z,
                      rotateY: transform.rotateY,
                      rotateX: transform.rotateX,
                      scale: transform.scale,
                      opacity: transform.opacity,
                      filter: transform.filter,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Active card effects */}
                      {index === activeIndex && (
                        <>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="absolute inset-0 border-2 border-maverick-orange/60 rounded-xl"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          />
                        </>
                      )}

                      {/* Active card indicator */}
                      {index === activeIndex && (
                        <motion.div
                          className="absolute top-3 right-3 w-3 h-3 rounded-full bg-maverick-orange shadow-lg shadow-maverick-orange/50"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      {/* Inactive card overlay */}
                      {index !== activeIndex && (
                        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation arrows */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
              <motion.button
                className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-maverick-orange/30 hover:border-maverick-orange/70 transition-colors disabled:opacity-30"
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button
                className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-maverick-orange/30 hover:border-maverick-orange/70 transition-colors disabled:opacity-30"
                onClick={() => setActiveIndex(Math.min(totalItems - 1, activeIndex + 1))}
                disabled={activeIndex === totalItems - 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-white"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {allItems[activeIndex].title}
                </motion.h3>

                <motion.p
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {allItems[activeIndex].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <motion.button
                    className="group relative inline-flex items-center px-5 py-2.5 bg-maverick-orange hover:bg-maverick-orange/90 text-black font-semibold rounded-lg overflow-hidden transition-all duration-200"
                    whileHover={{ 
                      y: -2, 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(255, 90, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative flex items-center gap-2">
                      Learn More
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 pt-4">
              {allItems.map((_, index) => (
                <motion.button
                  key={index}
                  className="relative"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    animate={{
                      scale: index === activeIndex ? 1.5 : 1,
                      backgroundColor: index === activeIndex ? "#FF5A00" : "#6B7280"
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {index === activeIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-maverick-orange/20"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 2, 1] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
