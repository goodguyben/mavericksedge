
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
  sectionStart?: number;
}

function SingleServiceSection({ service, sectionHeight = "400vh", sectionStart = 0 }: SingleServiceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const totalItems = service.items.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalItems]);

  // Enhanced scroll-based progression with section awareness
  const scrollProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, totalItems - 1]);

  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      const newIndex = Math.round(Math.max(0, Math.min(latest, totalItems - 1)));
      if (newIndex !== activeIndex) {
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
    <div ref={containerRef} className={`relative bg-black`} style={{ height: sectionHeight }}>
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
      <div className="top-0 h-screen flex items-center justify-center bg-black z-10 sm:pt-16 md:pt-20 lg:pt-24 relative pt-[24px] pb-[24px] mt-[0px] mb-[0px]">
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
          title: "Custom Website Design",
          description: "We design custom websites that range from clean, professional layouts to immersive 3D and interactive experiences. Each crafted to engage, captivate, and convert. Whether you’re looking for a straightforward, elegant website or a dynamic, story-driven journey with scroll-triggered animations, spatial design, or product showcases, our team of expert website builders brings your vision to life with clarity and creativity. For high-quality website design Edmonton businesses can rely on, we deliver results that make a lasting impact.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_3.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_2.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_5.mp4"
          ],
          videoDurations: [11000, 7000, 11000], // 1st and 3rd extended by 4 seconds
          zoomEffects: ['zoom-out', 'zoom-out', 'zoom-out'],
          gradient: "from-orange-500/20 to-yellow-500/20"
        },
        {
          id: "web-applications",
          title: "Custom Web Application Development",
          description: "We specialize in custom web application development designed to solve your unique operational challenges and streamline complex data management. Our web application development services cover everything from CRM software and asset management systems to interactive dashboards. Leveraging scalable, cloud-based web application development frameworks and advanced AI-driven insights, our user-friendly solutions offer low-code adaptability and seamless API integration web application capabilities.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_6.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_17.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_14.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_13.mp4"
          ],
          gradient: "from-yellow-500/20 to-orange-500/20"
        },
        {
          id: "next-gen-ecommerce",
          title: "Next-Gen E-Commerce",
          description: "Launch and grow your online store with expertly crafted e-commerce sites on Shopify and WooCommerce. We build fast, secure storefronts with optimized checkout, seamless payment integration, inventory syncing, and built-in analytics to help you sell smarter. With AI-powered product recommendations built in, your customers discover what they want faster, boosting engagement and increasing sales.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_9.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_8.mp4"
          ],
          gradient: "from-emerald-500/20 to-teal-500/20"
        },
        {
          id: "seo",
          title: "SEO Services and Performance",
          description: "As a leading Edmonton SEO agency, we enhance your website’s speed, mobile responsiveness, and Core Web Vitals to deliver a seamless user experience. Our strategies leverage Generative Engine Optimization (GEO) to position your content in AI-generated responses on platforms like Google’s AI Overviews and ChatGPT. By focusing on structured data, semantic clarity, and user-centric design, we improve both your traditional search rankings and visibility in AI-driven results, increasing engagement and conversions.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_27.mp4"
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
          title: "Brand Strategy and Design",
          description: "We create adaptive brand strategies that connect your business with the right audience through clarity and authenticity. Our branding services include custom logo design, brand identity systems, typography, messaging frameworks, and visual branding solutions tailored to your goals. Whether you’re a startup or an established company looking for a brand refresh, we design every element to build trust, inspire engagement, and reflect your brand’s true character across platforms.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_33.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_34.mp4"
          ],
          gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
          id: "social-media",
          title: "Social Media Management",
          description: "Social media goes beyond visibility; it’s about earning attention through relevance, consistency, and trust. From content planning and platform-native strategy to community engagement and performance analytics, we ensure your brand’s voice shines through every post on every platform. Our AI-backed process generates scroll-stopping content that’s uniquely tailored to each platform, fueling your brand’s visibility and engagement.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_31.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_32.mp4"
          ],
          gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
          id: "ppc-advertising",
          title: "Pay-Per-Click (PPC) Advertising",
          description: "Drive targeted traffic and boost ROI with strategic PPC advertising campaigns across Google Ads and Meta Ads (Facebook & Instagram). As a data-driven PPC company, we specialize in high-intent keyword research, audience targeting, ad copy optimization, and performance monitoring. From Google AdWords search to display and remarketing, our digital marketing agency creates conversion-optimized campaigns that deliver measurable results.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_29.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_30.mp4"
          ],
          videoDurations: [26000], // 26 seconds for first video, default for second
          gradient: "from-green-500/20 to-blue-500/20"
        }
      ]
    },
    {
      id: "ai-applications",
      title: "AI Solutions",
      icon: <Brain className="w-8 h-8 text-maverick-orange" />,
      imagePosition: 'left',
      items: [
        {
          id: "ai-integration",
          title: "AI Integration Solutions",
          description: "AI integration solutions that empower your business to innovate, automate, and scale effortlessly. From intelligent automation and predictive analytics to natural language processing and machine learning models, our services enable you to transform operations, enhance customer experiences, and make data-driven decisions. Whether it's integrating AI agents into your CRM, developing personalized marketing strategies, or optimizing workflows, we provide the tools and expertise to turn your business vision into reality.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_35.mp4"
          ],
          gradient: "from-cyan-500/20 to-blue-500/20"
        },
        {
          id: "ai-chatbots",
          title: "AI Chatbots and Virtual Assistants",
          description: "Elevate your customer engagement with our advanced AI Chatbots and Virtual Assistants, powered by sophisticated machine learning algorithms. Our solutions use cutting edge conversational AI and natural language processing (NLP) to deliver seamless customer service automation and intelligent lead generation. We also leverage generative AI to provide personalized recommendations, ensuring every interaction is meaningful and drives business growth.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_36.mp4",
            "https://media.mavericksedge.ca/Portfolio_Video_37.mp4"
          ],
          gradient: "from-green-500/20 to-cyan-500/20"
        },
        {
          id: "workflow-automation",
          title: "Workflow and Process Automation",
          description: "We build intelligent automation directly into your operations. We perform seamless AI integration using powerful platforms like N8n, Make, and Zapier connected to leading generative AI models from OpenAI, Gemini, and Claude. Imagine automatically qualifying sales leads with predictive analytics or using natural language processing to analyze client feedback instantly, transforming your data analysis and business efficiency with our custom AI solutions.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_19.mp4"
          ],
          gradient: "from-indigo-500/20 to-purple-500/20"
        },
        {
          id: "custom-ai-applications",
          title: "Custom AI Applications",
          description: "We develop custom AI solutions to streamline your core operations. Our expertise in generative AI and machine learning enables us to build powerful automation tools like an AI sales representative that nurtures leads, an automated inventory management system, or an intelligent platform for logistics optimization. Leverage our predictive analytics and process automation to reduce costs and gain a competitive edge.",
          videos: [
            "https://media.mavericksedge.ca/Portfolio_Video_38.mp4"
          ],
          gradient: "from-purple-500/20 to-pink-500/20"
        }
      ]
    }
  ];

  // Calculate total height needed for all sections
  const totalHeight = services.reduce((acc, service) => acc + (service.items.length * 100), 0);

  return (
    <div className={`relative`} style={{ height: `${totalHeight}vh` }}>
      {services.map((service, serviceIndex) => {
        const sectionStart = services.slice(0, serviceIndex).reduce((acc, s) => acc + (s.items.length * 100), 0);
        const sectionHeight = service.items.length * 100;
        
        return (
          <SingleServiceSection 
            key={service.id} 
            service={service} 
            sectionHeight={`${sectionHeight}vh`}
            sectionStart={sectionStart}
          />
        );
      })}
    </div>
  );
}
