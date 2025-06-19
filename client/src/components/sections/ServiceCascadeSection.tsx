
import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Code, PenTool, Brain, ChevronRight, Play, Pause } from "lucide-react";
import TechButton from "../ui/tech-button";
import CyclingVideoPlayer from "../ui/CyclingVideoPlayer";

interface CascadeItem {
  id: string;
  title: string;
  description: string;
  videos?: string[];
  images?: string[];
  videoDurations?: number[];
  zoomEffects?: ('zoom-out' | 'zoom-in' | 'none')[];
  gradient: string;
}

interface ServiceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: CascadeItem[];
  imagePosition: 'left' | 'right';
}

interface SingleServiceSectionProps {
  service: ServiceSection;
  sectionHeight?: string;
}

function SingleServiceSection({ service, sectionHeight = "400vh" }: SingleServiceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring values for better performance
  const springConfig = { stiffness: 100, damping: 30, mass: 0.8 };
  const activeIndexSpring = useSpring(activeIndex, springConfig);

  const totalItems = service.items.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalItems]);

  // Optimized scroll-based progression
  const scrollProgress = useTransform(scrollYProgress, [0.2, 0.95], [0, totalItems - 1]);

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

  // Simplified transform for single card display
  const getCardTransform = useMemo(() => {
    return (index: number) => {
      return {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
        zIndex: 10,
        filter: "blur(0px) brightness(1)"
      };
    };
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentItem = service.items[activeIndex];

  // Optimized animation variants
  const cardVariants = {
    hidden: { opacity: 0, rotateY: 180 },
    visible: { opacity: 1, rotateY: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  };

  return (
    <div ref={containerRef} className={`relative ${sectionHeight} bg-black`}>
      {/* Reduced particle count for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-maverick-orange/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -80],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              {service.icon}
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                {service.title}
              </h2>
            </motion.div>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center px-4 sm:px-6 md:px-8 lg:px-0 ${
            service.imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
          }`}>

            {/* Optimized 3D Image Stack */}
            <div className={`relative aspect-[4/3] w-full ${
              service.imagePosition === 'right' ? 'lg:col-start-2' : ''
            }`} style={{ perspective: "1000px" }}>
              <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                {service.items.map((item, index) => {
                  const transform = getCardTransform(index);
                  const isVisible = index === activeIndex; // Only show active card

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={item.id}
                      className="absolute inset-0 cursor-pointer will-change-transform"
                      style={{
                        zIndex: transform.zIndex,
                        backfaceVisibility: "hidden"
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      onClick={() => handleDotClick(index)}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div 
                        className="relative w-full h-full rounded-2xl overflow-hidden"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <CyclingVideoPlayer
                          videos={item.videos || []}
                          images={item.images || []}
                          alt={item.title}
                          className="w-full h-full"
                          cycleDuration={7000}
                          videoDurations={item.videoDurations}
                          zoomEffects={item.zoomEffects}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Optimized Content Area */}
            <div className={`space-y-6 lg:space-y-8 flex flex-col justify-center items-start ${
              service.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="space-y-4 lg:space-y-6"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {currentItem.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    {currentItem.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <TechButton 
                      href={`/services/${service.id === 'web-applications' ? 'web-design-and-development-edmonton' : service.id === 'marketing-solutions' ? 'digital-marketing-edmonton' : 'ai-integration-automation-edmonton'}`}
                      className="inline-flex items-center"
                      asButton={true}
                    >
                      Learn More
                    </TechButton>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Simplified Progress Bar */}
              <div className="hidden sm:flex items-center justify-center pt-4 sm:pt-8">
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="relative flex items-center">
                    <div className="absolute inset-0 h-1 bg-gray-800 rounded-full" />

                    <div className="relative flex items-center gap-0.5">
                      {service.items.map((_, index) => (
                        <motion.button
                          key={index}
                          className="relative flex items-center justify-center"
                          onClick={() => handleDotClick(index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          style={{ width: `${100 / service.items.length}px` }}
                        >
                          <motion.div
                            className="h-1 rounded-full"
                            style={{ width: `${100 / service.items.length - 2}px` }}
                            animate={{
                              backgroundColor: index <= activeIndex ? "#FF5A00" : "#374151"
                            }}
                            transition={{ duration: 0.3 }}
                          />

                          {index === activeIndex && (
                            <motion.div
                              className="absolute -top-3 w-3 h-3 border-2 border-maverick-orange bg-black rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="absolute inset-0.5 bg-maverick-orange rounded-full" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>

                    <motion.div
                      className="absolute -bottom-6 left-0 text-xs text-gray-400 font-medium hidden sm:block"
                      animate={{ 
                        x: `${(activeIndex / (service.items.length - 1)) * 100}%`,
                        translateX: "-50%"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeIndex + 1} of {service.items.length}
                    </motion.div>
                  </div>

                  <motion.button
                    onClick={toggleAutoPlay}
                    className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 min-h-[44px] whitespace-nowrap"
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

export default function ServiceCascadeSection() {
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
          description: "We craft custom interactive and 3D websites that engage users with motion, depth, and storytelling built to captivate and convert. Whether it's scroll-triggered animations, immersive product showcases, or spatial design, we turn static sites into dynamic journeys.",
          videos: [
            "/videos/services/Custom Interactive Websites 1.mp4",
            "/videos/services/Custom Interactive Websites 2.mp4",
            "/videos/services/Custom Interactive Websites 3.mp4"
          ],
          videoDurations: [11000, 7000, 11000], // 1st and 3rd extended by 4 seconds
          zoomEffects: ['zoom-out', 'zoom-out', 'zoom-out'],
          gradient: "from-orange-500/20 to-yellow-500/20"
        },
        {
          id: "web-applications",
          title: "Productivity & Management Web Applications",
          description: "We develop web applications tailored to solve your unique operational challenges and streamline complex data management. From CRM software and asset management systems to interactive dashboards, our scalable, user-friendly solutions leverage AI-driven insights and low-code adaptability. Designed for seamless integration, these powerful tools empower your team to boost productivity, enhance decision-making, and accelerate business growth.",
          videos: [
            "/videos/services/Productivity & Management Web Applications 1.mp4",
            "/videos/services/Productivity & Management Web Applications 3.mp4"
          ],
          images: [
            "/videos/services/Productivity & Management Web Applications 2.png"
          ],
          gradient: "from-yellow-500/20 to-orange-500/20"
        },
        {
          id: "next-gen-ecommerce",
          title: "Next-Gen E-Commerce",
          description: "Launch and grow your online store with expertly crafted e-commerce sites on Shopify and WooCommerce. We build fast, secure storefronts with optimized checkout, seamless payment integration, inventory syncing, and built-in analytics to help you sell smarter. With AI-powered product recommendations built in, your customers discover what they want faster, boosting engagement and increasing sales.",
          videos: [
            "/videos/services/Next-Gen E-Commerce 1.mp4",
            "/videos/services/Next-Gen E-Commerce 2.mp4"
          ],
          gradient: "from-emerald-500/20 to-teal-500/20"
        },
        {
          id: "performance",
          title: "Performance Optimization & Online Visibility",
          description: "We enhance your website's speed, mobile responsiveness, and Core Web Vitals to ensure a seamless user experience. Our strategies incorporate Generative Engine Optimization (GEO) to position your content in AI-generated responses across platforms like Google's AI Overviews and ChatGPT. By focusing on structured data, semantic clarity, and user-centric design, we not only boost your search rankings but also increase visibility in AI-driven search results, driving higher engagement and conversions.",
          images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy"
          ],
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
          description: "We create adaptive brand strategies that connect your business with audiences across platforms through clarity and authenticity. Our services include logo design, brand guidelines, visual identity systems, and messaging frameworks, all crafted to build memorable, scalable brand experiences that evolve with your business. Every element is thoughtfully designed to build trust, inspire engagement, and reflect your brand's true character.",
          images: [
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy"
          ],
          gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
          id: "social-media",
          title: "Social Media Management",
          description: "Social media is about more than visibility; it's about earning attention through relevance, consistency, and trust. Services include content planning, platform native strategy, community engagement, and performance analysis, all tailored to reflect your brand's voice and values. ",
          videos: [
            "/videos/services/Social Media Management.mp4"
          ],
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
          images: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy"
          ],
          gradient: "from-cyan-500/20 to-blue-500/20"
        },
        {
          id: "data-analytics",
          title: "AI-Powered Analytics",
          description: "Transform your business data into actionable insights with advanced AI analytics. We help you uncover hidden patterns, predict trends, and make data-driven decisions that accelerate growth.",
          images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy"
          ],
          gradient: "from-green-500/20 to-cyan-500/20"
        },
        {
          id: "custom-ai",
          title: "Custom AI Solutions",
          description: "Develop bespoke AI applications tailored to your specific business challenges. From chatbots to predictive models, we create AI solutions that integrate seamlessly with your existing workflows.",
          images: [
            "/videos/services/Custom AI Solutions.jpg"
          ],
          gradient: "from-indigo-500/20 to-purple-500/20"
        }
      ]
    }
  ];

  return (
    <div>
      {services.map((service, index) => (
        <SingleServiceSection 
          key={service.id} 
          service={service} 
          sectionHeight={index === 0 ? "400vh sm:500vh" : "400vh"}
        />
      ))}
    </div>
  );
}
