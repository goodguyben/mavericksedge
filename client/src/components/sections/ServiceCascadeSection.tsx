
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
      // Cards behind - less visible, stacked behind
      const distance = Math.abs(diff);
      return {
        x: -30 * distance,
        y: 15 * distance,
        z: -80 * distance,
        rotateY: -12 * distance,
        scale: Math.max(0.6, 1 - 0.15 * distance),
        opacity: distance === 1 ? 0.4 : 0.1,
        filter: `blur(${distance * 3}px) brightness(${Math.max(0.3, 1 - 0.2 * distance)})`,
        zIndex: 10 - distance
      };
    } else {
      // Cards ahead - hidden or barely visible
      const distance = diff;
      return {
        x: 40 * distance,
        y: -20 * distance,
        z: -60 * distance,
        rotateY: 15 * distance,
        scale: Math.max(0.5, 1 - 0.2 * distance),
        opacity: distance === 1 ? 0.2 : 0.05,
        filter: `blur(${distance * 4}px) brightness(${Math.max(0.2, 0.8 - 0.3 * distance)})`,
        zIndex: 10 - distance
      };
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentService = services[currentSection];
  const currentItem = allItems[activeIndex];

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
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black z-10 pt-32">
        <div className="container mx-auto px-4">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              {currentService.icon}
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                {currentService.title}
              </h2>
            </motion.div>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            currentService.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
          }`}>
            
            {/* 3D Image Stack */}
            <div className={`relative h-96 lg:h-[500px] perspective-1000 ${
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
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      onClick={() => handleDotClick(index)}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        
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
                            className="absolute inset-0 border-2 border-maverick-orange/30 rounded-2xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className={`space-y-8 ${
              currentService.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="space-y-6"
                  initial={{ opacity: 0, x: currentService.imagePosition === 'right' ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: currentService.imagePosition === 'right' ? 50 : -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Title */}
                  <motion.h3
                    className="text-3xl lg:text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {currentItem.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-gray-300 leading-relaxed"
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
                      href={`/services/${currentService.id.replace('-applications', '').replace('-solutions', '')}`}
                      className="inline-flex items-center"
                    >
                      Learn More
                    </TechButton>
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
                
                {/* Auto-play toggle */}
                <motion.button
                  onClick={toggleAutoPlay}
                  className="flex items-center gap-2 px-3 py-1 ml-4 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Auto-play ON</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Auto-play OFF</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
