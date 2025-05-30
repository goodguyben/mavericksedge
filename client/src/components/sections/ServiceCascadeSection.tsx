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
    <div ref={containerRef} className="relative h-[400vh] sm:h-[450vh] ipad-portrait:h-[480vh] ipad-landscape:h-[420vh] galaxy-portrait:h-[490vh] galaxy-landscape:h-[410vh] surface-compact:h-[520vh] surface-pro:h-[460vh] tablet-all:h-[480vh] bg-black">
      {/* Optimized floating particles for tablet performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(
          window?.innerWidth <= 600 ? 3 : // Surface compact
          window?.innerWidth <= 768 ? 4 : // Small tablets
          window?.innerWidth <= 1024 ? 5 : // Standard tablets
          window?.innerWidth <= 1300 ? 6 : // Large tablets landscape
          8 // Desktop
        )].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-maverick-orange/25 rounded-full 
                       ipad-portrait:w-1.5 ipad-portrait:h-1.5 
                       ipad-landscape:w-2 ipad-landscape:h-2
                       galaxy-portrait:w-1.5 galaxy-portrait:h-1.5
                       galaxy-landscape:w-2 galaxy-landscape:h-2
                       surface-compact:w-1 surface-compact:h-1
                       surface-pro:w-1.5 surface-pro:h-1.5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, -80],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: window?.innerWidth <= 1024 ? 2.5 + Math.random() * 1.5 : 3 + Math.random() * 2, // Faster on tablets
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Sticky content container - Comprehensive tablet optimization */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black z-10 
                      pt-12 sm:pt-14 
                      ipad-portrait:pt-16 ipad-landscape:pt-12
                      galaxy-portrait:pt-14 galaxy-landscape:pt-10
                      surface-compact:pt-18 surface-pro:pt-14
                      tablet-all:pt-14 lg:pt-20 relative">
        <div className="container mx-auto 
                        px-4 sm:px-6 
                        ipad-portrait:px-8 ipad-landscape:px-12
                        galaxy-portrait:px-6 galaxy-landscape:px-16
                        surface-compact:px-4 surface-pro:px-10
                        tablet-all:px-8 lg:px-12
                        max-w-none ipad-portrait:max-w-[95%] ipad-landscape:max-w-[90%]
                        galaxy-portrait:max-w-[95%] galaxy-landscape:max-w-[88%]
                        surface-compact:max-w-[100%] surface-pro:max-w-[92%]">

          {/* Section Title - Comprehensive tablet typography */}
          <div className="text-center 
                          mb-6 sm:mb-8 
                          ipad-portrait:mb-8 ipad-landscape:mb-6
                          galaxy-portrait:mb-9 galaxy-landscape:mb-7
                          surface-compact:mb-10 surface-pro:mb-8
                          tablet-all:mb-8 lg:mb-12">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center 
                         gap-3 sm:gap-4 
                         ipad-portrait:gap-5 ipad-landscape:gap-6
                         galaxy-portrait:gap-4 galaxy-landscape:gap-7
                         surface-compact:gap-3 surface-pro:gap-5
                         tablet-all:gap-5 lg:gap-6
                         mb-3 sm:mb-4 
                         ipad-portrait:mb-4 ipad-landscape:mb-3
                         galaxy-portrait:mb-5 galaxy-landscape:mb-4
                         surface-compact:mb-6 surface-pro:mb-4
                         tablet-all:mb-4"
            >
              <div className="text-maverick-orange transform 
                             md:scale-110 
                             ipad-portrait:scale-125 ipad-landscape:scale-115
                             galaxy-portrait:scale-120 galaxy-landscape:scale-110
                             surface-compact:scale-130 surface-pro:scale-120
                             tablet-all:scale-120 
                             transition-transform duration-300">
                {currentService.icon}
              </div>
              <h2 className="font-bold text-white leading-tight
                             text-2xl sm:text-3xl 
                             ipad-portrait:text-3xl ipad-landscape:text-4xl
                             galaxy-portrait:text-3xl galaxy-landscape:text-4xl
                             surface-compact:text-2.5xl surface-pro:text-3xl
                             tablet-all:text-3xl lg:text-5xl xl:text-6xl
                             ipad-portrait:leading-snug ipad-landscape:leading-tight
                             galaxy-portrait:leading-snug galaxy-landscape:leading-tight
                             surface-compact:leading-tight surface-pro:leading-snug
                             tablet-all:leading-snug">
                {currentService.title}
              </h2>
            </motion.div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 
                               gap-6 sm:gap-8 
                               ipad-portrait:gap-8 ipad-landscape:gap-12
                               galaxy-portrait:gap-7 galaxy-landscape:gap-14
                               surface-compact:gap-6 surface-pro:gap-10
                               tablet-all:gap-9 lg:gap-16 xl:gap-20 
                               items-center 
                               px-2 sm:px-4 
                               ipad-portrait:px-4 ipad-landscape:px-8
                               galaxy-portrait:px-3 galaxy-landscape:px-10
                               surface-compact:px-2 surface-pro:px-6
                               tablet-all:px-4 lg:px-0 ${
            currentService.imagePosition === 'right' ? 'md:grid-flow-col-dense ipad-portrait:grid-flow-col-dense ipad-landscape:grid-flow-col-dense galaxy-portrait:grid-flow-col-dense galaxy-landscape:grid-flow-col-dense surface-pro:grid-flow-col-dense tablet-all:grid-flow-col-dense' : ''
          }`}>

            {/* 3D Image Stack - Multi-device tablet optimization */}
            <div className={`relative perspective-1000 touch-manipulation transform
                             h-64 sm:h-80 
                             ipad-portrait:h-80 ipad-landscape:h-96
                             galaxy-portrait:h-76 galaxy-landscape:h-88
                             surface-compact:h-72 surface-pro:h-84
                             tablet-all:h-80 lg:h-[26rem] xl:h-[30rem] 2xl:h-[34rem]
                             ipad-portrait:scale-105 ipad-landscape:scale-100
                             galaxy-portrait:scale-108 galaxy-landscape:scale-102
                             surface-compact:scale-110 surface-pro:scale-105
                             tablet-all:scale-105 lg:scale-100
                             transition-transform duration-300 ${
              currentService.imagePosition === 'right' ? 'md:col-start-2 ipad-portrait:col-start-2 ipad-landscape:col-start-2 galaxy-portrait:col-start-2 galaxy-landscape:col-start-2 surface-pro:col-start-2 tablet-all:col-start-2' : ''
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
                      <div className="relative w-full h-full rounded-2xl tablet:rounded-3xl overflow-hidden group shadow-lg tablet:shadow-xl">
                        <picture>
                          <source 
                            media="(min-width: 768px) and (max-width: 1023px)"
                            srcSet={`${item.image}?fm=avif&w=1000&h=750&q=95&auto=format&fit=crop&crop=entropy`}
                            type="image/avif"
                          />
                          <source 
                            media="(min-width: 768px) and (max-width: 1023px)"
                            srcSet={`${item.image}?fm=webp&w=1000&h=750&q=95&auto=format&fit=crop&crop=entropy`}
                            type="image/webp"
                          />
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
                            className="w-full h-full object-cover transition-all duration-700 ease-out tablet:object-center"
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

            {/* Content Area - Enhanced tablet responsiveness */}
            <div className={`space-y-4 sm:space-y-6 md:space-y-6 tablet-portrait:space-y-5 tablet-landscape:space-y-7 lg:space-y-8 ${
              currentService.imagePosition === 'right' ? 'md:col-start-1 md:row-start-1 tablet:col-start-1 tablet:row-start-1' : ''
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="space-y-3 sm:space-y-4 md:space-y-4 tablet-portrait:space-y-4 tablet-landscape:space-y-5 lg:space-y-6"
                  initial={{ opacity: 0, x: currentService.imagePosition === 'right' ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: currentService.imagePosition === 'right' ? 50 : -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Title - Tablet-optimized typography */}
                  <motion.h3
                    className="text-xl sm:text-2xl md:text-2xl tablet-portrait:text-2xl tablet-landscape:text-3xl tablet:text-2.5xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight md:leading-snug tablet:leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {currentItem.title}
                  </motion.h3>

                  {/* Description - Tablet-optimized readability */}
                  <motion.p
                    className="text-sm sm:text-base md:text-base tablet-portrait:text-base tablet-landscape:text-lg tablet:text-lg tablet:max-w-none lg:text-xl text-gray-300 leading-relaxed md:leading-relaxed tablet:leading-relaxed tablet-landscape:leading-loose max-w-2xl tablet:max-w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {currentItem.description}
                  </motion.p>

                  {/* Button - Enhanced tablet interaction */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-2 md:pt-3 tablet:pt-4 tablet-landscape:pt-5"
                  >
                    <TechButton 
                      href={`/services/${currentService.id === 'web-applications' ? 'web-design-and-development-edmonton' : currentService.id === 'marketing-solutions' ? 'digital-marketing-edmonton' : 'ai-integration-automation-edmonton'}`}
                      className="inline-flex items-center text-sm sm:text-base md:text-base tablet:text-lg px-6 py-3 md:px-7 md:py-3.5 tablet:px-8 tablet:py-4 tablet-landscape:px-10 tablet-landscape:py-5"
                      asButton={true}
                    >
                      Learn More
                    </TechButton>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators - Comprehensive tablet optimization */}
              <div className="flex items-center justify-center pt-4 sm:pt-6 md:pt-6 tablet-portrait:pt-5 tablet-landscape:pt-8 tablet:pt-6">
                <div className="flex items-center gap-3 md:gap-4 tablet-portrait:gap-4 tablet-landscape:gap-6 tablet:gap-5">
                  <div className="flex items-center gap-1 sm:gap-2 md:gap-2 tablet-portrait:gap-2 tablet-landscape:gap-3 tablet:gap-2.5 lg:gap-4">
                    {allItems.map((_, index) => (
                      <motion.button
                        key={index}
                        className="relative touch-manipulation tap-target min-h-[48px] min-w-[20px] md:min-h-[52px] md:min-w-[24px] tablet-portrait:min-h-[52px] tablet-portrait:min-w-[26px] tablet-landscape:min-h-[56px] tablet-landscape:min-w-[30px] tablet:min-h-[54px] tablet:min-w-[28px] lg:min-w-[48px] flex items-center justify-center p-2 tablet:p-3 tablet-landscape:p-4"
                        onClick={() => handleDotClick(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {/* Background circle - Enhanced for different tablet views */}
                        <motion.div
                          className="w-2.5 h-2.5 md:w-3 md:h-3 tablet-portrait:w-3.5 tablet-portrait:h-3.5 tablet-landscape:w-4 tablet-landscape:h-4 tablet:w-3.5 tablet:h-3.5 lg:w-4 lg:h-4 rounded-full bg-gray-600"
                          animate={{
                            scale: index === activeIndex ? 1.5 : 1,
                            backgroundColor: index === activeIndex ? "#FF5A00" : "#4B5563"
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Active indicator with ripple - Enhanced for tablets */}
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
                  </div>

                  {/* Auto-play toggle - Multiple tablet view optimizations */}
                  <motion.button
                    onClick={toggleAutoPlay}
                    className="hidden md:flex items-center gap-2 tablet-portrait:gap-2 tablet-landscape:gap-3 tablet:gap-2.5 lg:gap-3 px-3 md:px-4 tablet-portrait:px-4 tablet-landscape:px-5 tablet:px-4.5 lg:px-6 py-2.5 md:py-3 tablet:py-3.5 text-sm md:text-base tablet:text-base text-gray-400 hover:text-white transition-colors duration-200 touch-manipulation min-h-[48px] md:min-h-[52px] tablet:min-h-[54px] whitespace-nowrap bg-gray-800/40 hover:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-700/30 tablet:border-gray-600/40"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(55, 65, 81, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-4 h-4 md:w-5 md:h-5 tablet:w-5 tablet:h-5" />
                        <span className="hidden lg:inline tablet-landscape:inline font-medium">Auto-play ON</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 md:w-5 md:h-5 tablet:w-5 tablet:h-5" />
                        <span className="hidden lg:inline tablet-landscape:inline font-medium">Auto-play OFF</span>
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