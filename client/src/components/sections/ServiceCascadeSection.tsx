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
          description: "We craft custom interactive and 3D websites that engage users with motion, depth, and storytelling built to captivate and convert. Whether it’s scroll-triggered animations, immersive product showcases, or spatial design, we turn static sites into dynamic journeys. Whether it’s scroll-triggered animations, immersive product showcases, or spatial design, we turn static sites into dynamic journeys.",
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
        },
        {
          id: "social-media",
          title: "Social Media Management",
          description: "Build meaningful connections with your audience through strategic social media presence. Our comprehensive approach includes content creation, community management, and performance analytics to grow your brand online.",
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
        scale: 1,
        opacity: 1,
        filter: "blur(0px) brightness(1)",
        zIndex: 10
      };
    } else {
      // All non-active cards - completely hidden
      return {
        x: 0,
        y: 0,
        z: 0,
        rotateY: 0,
        scale: 1,
        opacity: 0,
        filter: "blur(0px) brightness(1)",
        zIndex: 1
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
    <div ref={containerRef} className="relative h-[400vh] sm:h-[500vh] bg-black">
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
            <div className={`relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] perspective-1000 touch-manipulation ${
              currentService.imagePosition === 'right' ? 'lg:col-start-2' : ''
            }`}>
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
                        duration: 1.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      onClick={() => handleDotClick(index)}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden group">
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

                        {/* Subtle shimmer effect for non-active cards */}
                        {index !== activeIndex && Math.abs(index - activeIndex) <= 2 && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                            style={{ transform: 'translateX(-100%)' }}
                            animate={{ transform: 'translateX(100%)' }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </div>
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
                  initial={{ opacity: 0, x: currentService.imagePosition === 'right' ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: currentService.imagePosition === 'right' ? 50 : -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
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

              {/* Modern Progress Navigation */}
              <div className="flex items-center justify-center pt-4">
                <div className="relative">
                  {/* Progress Track */}
                  <div className="flex items-center gap-1">
                    <div className="relative h-0.5 bg-gray-800/40 rounded-full overflow-hidden" style={{ width: `${allItems.length * 12}px` }}>
                      {/* Active Progress Bar */}
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-full"
                        animate={{ 
                          width: `${((activeIndex + 1) / allItems.length) * 100}%`
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    
                    {/* Auto-play Control */}
                    <motion.button
                      onClick={toggleAutoPlay}
                      className="ml-2 p-1 rounded-full bg-gray-900/60 hover:bg-gray-800/80 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        animate={{ rotate: isAutoPlaying ? 0 : 180 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isAutoPlaying ? (
                          <Pause className="w-3 h-3 text-maverick-orange" />
                        ) : (
                          <Play className="w-3 h-3 text-gray-400" />
                        )}
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Interactive Segments */}
                  <div className="absolute top-0 left-0 flex items-center gap-1">
                    {allItems.map((_, index) => (
                      <motion.button
                        key={index}
                        className="relative w-3 h-0.5 cursor-pointer group"
                        onClick={() => handleDotClick(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >

                        
                        {/* Hover indicator */}
                        <motion.div
                          className="absolute -top-1 left-1/2 w-1 h-3 bg-maverick-orange/60 rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.15 }}
                        />
                        
                        {/* Active indicator */}
                        {index === activeIndex && (
                          <motion.div
                            className="absolute -top-0.5 left-1/2 w-0.5 h-1.5 bg-maverick-orange rounded-full transform -translate-x-1/2"
                            initial={{ opacity: 0, y: 2 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Section Labels */}
                  <div className="absolute -bottom-4 left-0 right-0 flex justify-between text-xs text-gray-500">
                    <span className="text-maverick-orange/80">{activeIndex + 1}</span>
                    <span>of {allItems.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}