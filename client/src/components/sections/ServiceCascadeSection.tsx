import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Code, PenTool, Brain, ChevronRight, Play, Pause } from "lucide-react";
import TechButton from "../ui/tech-button";

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
  imagePosition: 'left' | 'right';
}

export default function ServiceCascadeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services: ServiceSection[] = [
    {
      id: "web-applications",
      title: "Web Applications",
      icon: <Code className="w-8 h-8 text-maverick-orange" />,
      imagePosition: 'left',
      items: [
        {
          id: "websites",
          title: "Custom Interactive Websites",
          description: "We craft custom interactive and 3D websites that engage users with motion, depth, and storytelling built to captivate and convert. Whether it’s scroll-triggered animations, immersive product showcases, or spatial design, we turn static sites into dynamic journeys.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-orange-500/20 to-yellow-500/20"
        },
        {
          id: "web-applications",
          title: "Productivity & Management Web Applications",
          description: "We develop web applications tailored to solve your unique operational challenges and streamline complex data management. From CRM software and asset management systems to interactive dashboards, our scalable, user-friendly solutions leverage AI-driven insights and low-code adaptability. Designed for seamless integration, these powerful tools empower your team to boost productivity, enhance decision-making, and accelerate business growth.",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-yellow-500/20 to-orange-500/20"
        },
        {
          id: "next-gen-ecommerce",
          title: "Next-Gen E-Commerce",
          description: "Launch and grow your online store with expertly crafted e-commerce sites on Shopify and WooCommerce. We build fast, secure storefronts with optimized checkout, seamless payment integration, inventory syncing, and built-in analytics to help you sell smarter. With AI-powered product recommendations built in, your customers discover what they want faster, boosting engagement and increasing sales.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-emerald-500/20 to-teal-500/20"
        },
        {
          id: "performance",
          title: "Performance Optimization & Online Visibility",
          description: "We enhance your website’s speed, mobile responsiveness, and Core Web Vitals to ensure a seamless user experience. Our strategies incorporate Generative Engine Optimization (GEO) to position your content in AI-generated responses across platforms like Google’s AI Overviews and ChatGPT. By focusing on structured data, semantic clarity, and user-centric design, we not only boost your search rankings but also increase visibility in AI-driven search results, driving higher engagement and conversions.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-orange-500/20 to-red-500/20"
        }
      ]
    },
    {
      id: "marketing-solutions",
      title: "Marketing Solutions",
      icon: <PenTool className="w-8 h-8 text-maverick-orange" />,
      imagePosition: 'right',
      items: [
        {
          id: "brand-strategy",
          title: "Brand Strategy & Design",
          description: "We create adaptive brand strategies that connect your business with audiences across platforms through clarity and authenticity. Our services include logo design, brand guidelines, visual identity systems, and messaging frameworks, all crafted to build memorable, scalable brand experiences that evolve with your business. Every element is thoughtfully designed to build trust, inspire engagement, and reflect your brand’s true character.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
          id: "social-media",
          title: "Social Media Management",
          description: "Social media is about more than visibility; it’s about earning attention through relevance, consistency, and trust. Services include content planning, platform native strategy, community engagement, and performance analysis, all tailored to reflect your brand’s voice and values. ",
          image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-blue-500/20 to-purple-500/20"
        }
      ]
    },
    {
      id: "ai-applications",
      title: "AI Applications",
      icon: <Brain className="w-8 h-8 text-maverick-orange" />,
      imagePosition: 'left',
      items: [
        {
          id: "ai-integration",
          title: "AI Integration & Automation",
          description: "Streamline your business operations with intelligent AI solutions that reduce manual work and increase efficiency. Our implementations are practical, measurable, and designed to deliver immediate ROI.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-cyan-500/20 to-blue-500/20"
        },
        {
          id: "data-analytics",
          title: "AI-Powered Analytics",
          description: "Transform your business data into actionable insights with advanced AI analytics. We help you uncover hidden patterns, predict trends, and make data-driven decisions that accelerate growth.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-green-500/20 to-cyan-500/20"
        },
        {
          id: "custom-ai",
          title: "Custom AI Solutions",
          description: "Develop bespoke AI applications tailored to your specific business challenges. From chatbots to predictive models, we create AI solutions that integrate seamlessly with your existing workflows.",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&crop=entropy",
          gradient: "from-indigo-500/20 to-purple-500/20"
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

  // Update current section based on active index
  useEffect(() => {
    let itemCount = 0;
    for (let i = 0; i < services.length; i++) {
      itemCount += services[i].items.length;
      if (activeIndex < itemCount) {
        setCurrentSection(i);
        break;
      }
    }
  }, [activeIndex, services]);

  // Scroll-based progression - optimized with throttling
  const scrollProgress = useTransform(scrollYProgress, [0.2, 0.95], [0, totalItems - 1]);

  useEffect(() => {
    let lastUpdate = 0;
    const unsubscribe = scrollProgress.on("change", (latest) => {
      const now = Date.now();
      if (now - lastUpdate > 16) { // Throttle to ~60fps
        const newIndex = Math.round(latest);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalItems) {
          setActiveIndex(newIndex);
          setIsAutoPlaying(false);
        }
        lastUpdate = now;
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
        rotateX: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px) brightness(1.1)",
        zIndex: 10
      };
    } else if (diff === 1) {
      // Next card - flipped and positioned to the right
      return {
        x: 100,
        y: 0,
        z: -200,
        rotateY: -90,
        rotateX: 0,
        scale: 0.8,
        opacity: 0.3,
        filter: "blur(2px) brightness(0.6)",
        zIndex: 5
      };
    } else if (diff === -1) {
      // Previous card - flipped and positioned to the left
      return {
        x: -100,
        y: 0,
        z: -200,
        rotateY: 90,
        rotateX: 0,
        scale: 0.8,
        opacity: 0.3,
        filter: "blur(2px) brightness(0.6)",
        zIndex: 5
      };
    } else if (diff > 1) {
      // Future cards - stacked to the right with increasing rotation
      return {
        x: 150 + (diff - 1) * 20,
        y: (diff - 1) * 10,
        z: -300 - (diff - 1) * 50,
        rotateY: -120 - (diff - 1) * 15,
        rotateX: (diff - 1) * 5,
        scale: 0.6 - (diff - 1) * 0.1,
        opacity: Math.max(0, 0.2 - (diff - 1) * 0.1),
        filter: `blur(${2 + (diff - 1)}px) brightness(0.4)`,
        zIndex: Math.max(1, 5 - diff)
      };
    } else {
      // Past cards - stacked to the left with increasing rotation
      const absDiff = Math.abs(diff);
      return {
        x: -150 - (absDiff - 1) * 20,
        y: (absDiff - 1) * 10,
        z: -300 - (absDiff - 1) * 50,
        rotateY: 120 + (absDiff - 1) * 15,
        rotateX: (absDiff - 1) * 5,
        scale: 0.6 - (absDiff - 1) * 0.1,
        opacity: Math.max(0, 0.2 - (absDiff - 1) * 0.1),
        filter: `blur(${2 + (absDiff - 1)}px) brightness(0.4)`,
        zIndex: Math.max(1, 5 - absDiff)
      };
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentService = services[currentSection];
  const currentItem = allItems[activeIndex];

  return (
    <div ref={containerRef} className="relative h-[400vh] sm:h-[500vh] bg-black" style={{ 
      transformStyle: "preserve-3d" 
    }}>
      {/* Floating particles - reduced for performance and mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(window?.innerWidth <= 768 ? 4 : 8)].map((_, i) => (
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
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black z-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">

          {/* Section Title */}
          <div className="text-center mb-8 lg:mb-12">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              {currentService.icon}
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                {currentService.title}
              </h2>
            </motion.div>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center px-4 sm:px-6 md:px-8 lg:px-0 ${
            currentService.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
          }`}>

            {/* 3D Image Stack */}
            <div className={`relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[28rem] touch-manipulation ${
              currentService.imagePosition === 'right' ? 'lg:col-start-2' : ''
            }`} style={{ perspective: "1200px", perspectiveOrigin: "center center" }}>
              <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                {allItems.map((item, index) => {
                  const transform = getImageTransform(index);

                  return (
                    <motion.div
                      key={item.id}
                      className="absolute inset-0 cursor-pointer"
                      style={{
                        transformStyle: "preserve-3d",
                        zIndex: transform.zIndex,
                        perspective: "1000px",
                        transformOrigin: "center center",
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
                        type: "spring",
                        stiffness: 160,
                        damping: 25,
                        mass: 0.8,
                        duration: 0.8,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      onClick={() => handleDotClick(index)}
                      whileHover={index === activeIndex ? { 
                        scale: 1.02,
                        rotateY: transform.rotateY + 2,
                        transition: { 
                          duration: 0.2,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      } : {}}
                    >
                      <motion.div 
                        className="relative w-full h-full rounded-2xl overflow-hidden group"
                        initial={{ rotateY: 180, opacity: 0 }}
                        animate={{ 
                          rotateY: 0, 
                          opacity: index === activeIndex ? 1 : transform.opacity,
                        }}
                        transition={{
                          rotateY: {
                            type: "spring",
                            stiffness: 140,
                            damping: 18,
                            duration: 0.6,
                          },
                          opacity: {
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1]
                          }
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden"
                        }}
                      >
                        <picture>
                          <source 
                            srcSet={`${item.image}?fm=avif&w=800&h=600&q=90&auto=format&fit=crop&crop=entropy`}
                            type="image/avif"
                          />
                          <source 
                            srcSet={`${item.image}?fm=webp&w=800&h=600&q=90&auto=format&fit=crop&crop=entropy`}
                            type="image/webp"
                          />
                          <img
                            src={`${item.image}?w=800&h=600&q=90&auto=format&fit=crop&crop=entropy`}
                            alt={item.title}
                            className="w-full h-full object-cover transition-all duration-700 ease-out"
                            style={{
                              filter: index === activeIndex 
                                ? 'brightness(1.1) contrast(1.05) saturate(1.1)' 
                                : 'brightness(0.9) contrast(0.95) saturate(0.8)',
                            }}
                            loading={index === activeIndex ? "eager" : "lazy"}
                            decoding="async"
                            width="800"
                            height="600"
                          />
                        </picture>

                        {/* Enhanced gradient overlay with depth */}
                        {index === activeIndex && (
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(135deg, 
                                rgba(255, 86, 48, 0.1) 0%, 
                                transparent 30%, 
                                transparent 70%, 
                                rgba(0, 0, 0, 0.3) 100%)`
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                          />
                        )}

                        {/* Enhanced decorative border with glow effect */}
                        {index === activeIndex && (
                          <>
                            <motion.div
                              className="absolute inset-0 border-2 border-maverick-orange/40 rounded-2xl"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-2xl"
                              style={{
                                boxShadow: `0 0 30px rgba(255, 86, 48, 0.3), 
                                           inset 0 0 20px rgba(255, 215, 75, 0.1)`
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                            />
                          </>
                        )}

                        {/* Enhanced shimmer effect for visible cards */}
                        {Math.abs(index - activeIndex) <= 2 && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"
                            style={{ transform: 'translateX(-100%)' }}
                            animate={{ transform: 'translateX(100%)' }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              repeatDelay: index === activeIndex ? 4 : 6,
                              ease: "easeInOut"
                            }}
                          />
                        )}

                        {/* Active card glow effect */}
                        {index === activeIndex && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                              boxShadow: `0 0 40px rgba(255, 86, 48, 0.4), 
                                         0 0 80px rgba(255, 86, 48, 0.2),
                                         inset 0 0 40px rgba(255, 215, 75, 0.1)`
                            }}
                            animate={{
                              boxShadow: [
                                `0 0 40px rgba(255, 86, 48, 0.4), 0 0 80px rgba(255, 86, 48, 0.2)`,
                                `0 0 60px rgba(255, 86, 48, 0.6), 0 0 120px rgba(255, 86, 48, 0.3)`,
                                `0 0 40px rgba(255, 86, 48, 0.4), 0 0 80px rgba(255, 86, 48, 0.2)`
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className={`space-y-6 lg:space-y-8 ${
              currentService.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="space-y-4 lg:space-y-6"
                  initial={{ opacity: 0, x: currentService.imagePosition === 'right' ? -30 : 30, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: currentService.imagePosition === 'right' ? 30 : -30, y: -10 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    staggerChildren: 0.1
                  }}
                >
                  {/* Title */}
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {currentItem.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {currentItem.description}
                  </motion.p>

                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <TechButton 
                      href={`/services/${currentService.id === 'web-applications' ? 'web-design-and-development-edmonton' : currentService.id === 'marketing-solutions' ? 'digital-marketing-edmonton' : 'ai-integration-automation-edmonton'}`}
                      className="inline-flex items-center"
                      asButton={true}
                    >
                      Learn More
                    </TechButton>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar Navigation - hidden on mobile phones */}
              <div className="hidden sm:flex items-center justify-center pt-4 sm:pt-8">
                <div className="flex items-center gap-4 md:gap-8">
                  {/* Modern segmented progress bar */}
                  <div className="relative flex items-center">
                    {/* Background track */}
                    <div className="absolute inset-0 h-1 bg-gray-800 rounded-full" />
                    
                    {/* Progress segments */}
                    <div className="relative flex items-center gap-0.5">
                      {allItems.map((_, index) => (
                        <motion.button
                          key={index}
                          className="relative touch-manipulation flex items-center justify-center group"
                          onClick={() => handleDotClick(index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          style={{ width: `${100 / allItems.length}px` }}
                        >
                          {/* Individual segment */}
                          <motion.div
                            className="h-1 rounded-full relative overflow-hidden"
                            style={{ width: `${100 / allItems.length - 2}px` }}
                            animate={{
                              backgroundColor: index <= activeIndex ? "#FF5A00" : "#374151"
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            {/* Active segment glow */}
                            {index === activeIndex && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                  x: ["-100%", "100%"]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatDelay: 2,
                                  ease: "easeInOut"
                                }}
                              />
                            )}
                          </motion.div>
                          
                          {/* Hover indicator */}
                          <motion.div
                            className="absolute -top-2 w-2 h-2 bg-maverick-orange rounded-full opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                          
                          {/* Active indicator */}
                          {index === activeIndex && (
                            <motion.div
                              className="absolute -top-3 w-3 h-3 border-2 border-maverick-orange bg-black rounded-full"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3, ease: "backOut" }}
                            >
                              <motion.div
                                className="absolute inset-0.5 bg-maverick-orange rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                    
                    {/* Progress text - hidden on mobile phones */}
                    <motion.div
                      className="absolute -bottom-6 left-0 text-xs text-gray-400 font-medium hidden sm:block"
                      animate={{ 
                        x: `${(activeIndex / (allItems.length - 1)) * 100}%`,
                        translateX: "-50%"
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {activeIndex + 1} of {allItems.length}
                    </motion.div>
                  </div>

                  {/* Auto-play toggle - hidden on phones, visible on tablet+ */}
                  <motion.button
                    onClick={toggleAutoPlay}
                    className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 touch-manipulation min-h-[44px] whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden lg:inline">Auto-play ON</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden lg:inline">Auto-play OFF</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}