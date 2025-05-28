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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalItems]);

  // Scroll-based progression
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, totalItems - 1]);

  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      const newIndex = Math.round(latest);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalItems) {
        setActiveIndex(newIndex);
        setIsAutoPlaying(false);
      }
    });

    return unsubscribe;
  }, [scrollProgress, activeIndex, totalItems]);

  const getImageTransform = (index: number) => {
    const diff = index - activeIndex;
    
    if (diff === 0) {
      // Active card - fully visible and prominent
      return {
        x: 0,
        y: 0,
        z: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px) brightness(1)",
        zIndex: 10
      };
    } else if (diff < 0) {
      // Cards behind - stacked behind with more obvious layering
      const distance = Math.abs(diff);
      return {
        x: -20 * distance,
        y: 20 * distance,
        z: -60 * distance,
        rotateY: -8 * distance,
        scale: Math.max(0.7, 1 - 0.1 * distance),
        opacity: distance === 1 ? 0.6 : Math.max(0.2, 0.6 - 0.2 * distance),
        filter: `blur(${distance * 2}px) brightness(${Math.max(0.4, 1 - 0.15 * distance)})`,
        zIndex: 10 - distance
      };
    } else {
      // Cards ahead - more visible when close
      const distance = diff;
      return {
        x: 25 * distance,
        y: -15 * distance,
        z: -40 * distance,
        rotateY: 10 * distance,
        scale: Math.max(0.6, 1 - 0.15 * distance),
        opacity: distance === 1 ? 0.4 : Math.max(0.1, 0.4 - 0.15 * distance),
        filter: `blur(${distance * 2}px) brightness(${Math.max(0.3, 0.9 - 0.2 * distance)})`,
        zIndex: 10 - distance
      };
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      {/* Floating particles */}
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
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Sticky content container */}
      <div className="sticky top-24 h-screen flex items-center justify-center bg-black z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 3D Image Stack */}
          <div className="relative h-96 lg:h-[500px] perspective-1000">
            {/* Scroll indicator */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-20">
              <motion.div
                className="flex flex-col items-center space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="w-1 h-12 bg-gradient-to-b from-transparent via-maverick-orange to-transparent rounded-full"
                  animate={{
                    scaleY: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-xs text-gray-400 writing-mode-vertical transform rotate-180">
                  Scroll to explore
                </span>
              </motion.div>
            </div>

            {/* Card counter */}
            <div className="absolute top-4 right-4 z-20">
              <motion.div
                className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white border border-maverick-orange/30"
                key={activeIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {activeIndex + 1} / {totalItems}
              </motion.div>
            </div>

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
                      scale: transform.scale,
                      opacity: transform.opacity,
                      filter: transform.filter,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    onClick={() => handleDotClick(index)}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Depth shadow for cards behind */}
                      {index !== activeIndex && (
                        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                      )}
                      
                      {/* Active card gradient overlay */}
                      {index === activeIndex && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                      
                      {/* Decorative border for active card */}
                      {index === activeIndex && (
                        <motion.div
                          className="absolute inset-0 border-2 border-maverick-orange/50 rounded-2xl"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
                      )}

                      {/* Card title overlay for stacked cards */}
                      {index !== activeIndex && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <motion.div
                            className="bg-black/70 backdrop-blur-sm rounded-lg p-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ 
                              opacity: transform.opacity > 0.1 ? 0.8 : 0, 
                              y: transform.opacity > 0.1 ? 0 : 10 
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="text-white text-sm font-medium truncate">
                              {item.title}
                            </h4>
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* Card number indicator */}
                    <motion.div
                      className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-maverick-orange text-black text-sm font-bold flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: index === activeIndex ? 1 : 0.3,
                        scale: index === activeIndex ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Directional arrows */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <motion.button
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-maverick-orange/50 transition-colors"
                onClick={() => handleDotClick(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-maverick-orange/50 transition-colors"
                onClick={() => handleDotClick(Math.min(totalItems - 1, activeIndex + 1))}
                disabled={activeIndex === totalItems - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Title */}
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {allItems[activeIndex].title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {allItems[activeIndex].description}
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.button
                    className="group relative inline-flex items-center px-6 py-3 bg-maverick-orange hover:bg-maverick-orange/90 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(255, 90, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative flex items-center gap-2">
                      Learn More
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="flex items-center gap-3 pt-8">
              {allItems.map((_, index) => (
                <motion.button
                  key={index}
                  className="relative"
                  onClick={() => handleDotClick(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Background circle */}
                  <motion.div
                    className="w-3 h-3 rounded-full bg-gray-600"
                    animate={{
                      scale: index === activeIndex ? 1.5 : 1,
                      backgroundColor: index === activeIndex ? "#FF5A00" : "#4B5563"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active indicator with ripple */}
                  {index === activeIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-maverick-orange/30"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 2, 1] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>
              ))}
              
              {/* Auto-play indicator */}
              <div className="ml-4 flex items-center gap-2 text-sm text-gray-400">
                <motion.div
                  animate={{ rotate: isAutoPlaying ? 360 : 0 }}
                  transition={{ duration: 4, repeat: isAutoPlaying ? Infinity : 0, ease: "linear" }}
                >
                  <Play className="w-3 h-3" />
                </motion.div>
                <span className="text-xs">Auto-play {isAutoPlaying ? 'ON' : 'OFF'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}