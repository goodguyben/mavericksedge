import React, { useState, useRef, useEffect } from "react";
import { Code, PenTool, Brain, Database, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function WhatWeDoSection() {
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = useState("web-development");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const services = [
    {
      id: "web-development",
      title: "Web Design & Development",
      description: "Custom digital experiences that engage audiences and drive results.",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: "We create responsive websites and e-commerce platforms aligned with your business goals. Our solutions deliver optimized user journeys, seamless functionality, and scalable architecture built for growth.",
      color: "#FF5A00",
      hoverColor: "#FF7A30"
    },
    {
      id: "creative-design",
      title: "Marketing & Creative",
      description: "Strategic marketing that connects with your audience and delivers measurable ROI.",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: "We craft compelling brand stories across all touchpoints using effective design, targeted content, and data-driven campaigns to build engagement and drive lasting brand loyalty.",
      color: "#FF8C00",
      hoverColor: "#FFA030"
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description: "Practical AI solutions that streamline operations and create competitive advantages.",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details: "We implement accessible AI that delivers real business results by reducing costs, uncovering data insights, and enhancing customer experiences with responsible implementation and clear ROI.",
      color: "#FF7000",
      hoverColor: "#FF9030"
    },
    {
      id: "client-services",
      title: "Ongoing Support & Optimization",
      description: "Proactive maintenance and optimization that keeps your digital assets performing at their best.",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details: "We provide continuous monitoring, updates, and performance tuning as an extension of your team, giving you the technical expertise to adapt to changing market conditions.",
      color: "#FFA200",
      hoverColor: "#FFC060"
    }
  ];

  // Function to find the service details by ID
  const getServiceById = (id: string) => {
    return services.find(service => service.id === id);
  };

  // Auto-rotate services every 5 seconds
  useEffect(() => {
    if (isMobile) return; // Don't auto-rotate on mobile
    
    const interval = setInterval(() => {
      const currentIndex = services.findIndex(service => service.id === activeService);
      const nextIndex = (currentIndex + 1) % services.length;
      setActiveService(services[nextIndex].id);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeService, isMobile, services]);

  return (
    <section ref={sectionRef} className="py-28 md:py-32 px-5 md:px-10 bg-[#121212] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-maverick-orange/20 to-transparent opacity-30 blur-3xl"
        style={{ 
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
          x: useTransform(scrollYProgress, [0, 0.5, 1], [-50, 50, -50]) 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-maverick-amber/20 to-transparent opacity-20 blur-3xl"
        style={{ 
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 1.2]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], [50, -50, 50]) 
        }}
      />
      
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-maverick-orange/10 rounded-full">
              <span className="text-maverick-orange font-medium">Our services</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What We <span className="text-maverick-orange relative inline-block">
              Do
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-maverick-orange"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-[#AAAAAA] text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We deliver transformative digital solutions that drive growth, increase efficiency, and create meaningful customer experiences
          </motion.p>
        </motion.div>

        {isMobile ? (
          // Mobile version - Interactive vertical scroll list
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div 
                  className="bg-[#1A1A1A]/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 overflow-hidden"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveService(activeService === service.id ? "" : service.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: `${service.color}20` }}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeService === service.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-maverick-orange" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <p className="text-[#AAAAAA] mb-3">{service.description}</p>
                        <p className="text-[#DDDDDD] leading-relaxed text-sm">{service.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Animated accent line */}
                <motion.div 
                  className="absolute left-0 top-0 h-full w-1 rounded-l-lg"
                  style={{ backgroundColor: service.color }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          // Desktop version - Interactive showcase
          <motion.div 
            className="relative min-h-[500px]"
            style={{ opacity, y }}
          >
            {/* Service Navigation */}
            <div className="absolute top-0 left-0 w-full z-10">
              <motion.div
                className="flex justify-center gap-3 md:gap-6 mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`relative px-4 py-3 min-w-[120px] rounded-lg transition-all duration-300 ${
                      activeService === service.id 
                        ? "bg-gradient-to-r from-maverick-orange/20 to-maverick-amber/10 text-white"
                        : "bg-[#1A1A1A]/30 text-gray-400 hover:text-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        animate={{ 
                          scale: activeService === service.id ? 1.1 : 1,
                          y: activeService === service.id ? -4 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-lg ${
                          activeService === service.id 
                            ? `bg-${service.id} bg-opacity-20`
                            : 'bg-gray-800/20'
                        }`}
                      >
                        <div className="w-6 h-6">
                          {React.cloneElement(service.icon as React.ReactElement, { 
                            className: `w-6 h-6 ${activeService === service.id ? 'text-maverick-orange' : 'text-gray-500'}` 
                          })}
                        </div>
                      </motion.div>
                      <span className="font-medium text-sm">
                        {service.title.split(' ')[0]}
                      </span>
                    </div>
                    
                    {/* Active indicator line */}
                    {activeService === service.id && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-1 bg-maverick-orange rounded-b-lg"
                        layoutId="activeServiceIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Service Content Display */}
            <div className="mt-10 pt-14">
              <AnimatePresence mode="wait">
                {services.map((service) => 
                  activeService === service.id && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                    >
                      {/* Content side */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <motion.div 
                          className="inline-block mb-6 p-3 rounded-lg"
                          style={{ backgroundColor: `${service.color}30` }}
                          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        >
                          <div className="w-16 h-16">
                            {React.cloneElement(service.icon as React.ReactElement, { 
                              className: "w-16 h-16 text-maverick-orange" 
                            })}
                          </div>
                        </motion.div>
                        
                        <motion.h3 
                          className="text-3xl lg:text-4xl font-bold mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {service.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-[#AAAAAA] text-xl mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {service.description}
                        </motion.p>
                        
                        <motion.p 
                          className="text-[#DDDDDD] leading-relaxed mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          {service.details}
                        </motion.p>
                        
                        <motion.button
                          className="px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300"
                          style={{ 
                            background: `linear-gradient(90deg, ${service.color} 0%, ${service.hoverColor} 100%)` 
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: `0 10px 25px -5px ${service.color}40` 
                          }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          Learn more <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                      
                      {/* Visual side */}
                      <motion.div
                        className="relative h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {/* Main visual container */}
                        <div className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl overflow-hidden">
                          {/* Animated decorative elements */}
                          <motion.div 
                            className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
                            style={{ background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)` }}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.4, 0.3],
                              rotate: [0, 90, 180, 270, 360]
                            }}
                            transition={{ 
                              duration: 15,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                          
                          <motion.div 
                            className="absolute bottom-10 left-10 w-20 h-20 rounded-full" 
                            style={{ background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)` }}
                            animate={{ 
                              scale: [1, 1.5, 1],
                              opacity: [0.2, 0.3, 0.2],
                              y: [0, -30, 0]
                            }}
                            transition={{ 
                              duration: 10,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                          
                          {/* Animated code/text lines */}
                          {service.id === "web-development" && (
                            <>
                              {[...Array(8)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute h-1 rounded-full"
                                  style={{ 
                                    left: `${10 + (i * 5)}%`,
                                    top: `${15 + (i * 8)}%`,
                                    width: `${20 + Math.random() * 50}%`,
                                    backgroundColor: i % 2 === 0 ? `${service.color}50` : "#ffffff20" 
                                  }}
                                  initial={{ scaleX: 0, originX: 0 }}
                                  animate={{ scaleX: 1 }}
                                  transition={{ 
                                    delay: 0.5 + (i * 0.1),
                                    duration: 0.8,
                                    ease: "easeOut"
                                  }}
                                />
                              ))}
                            </>
                          )}
                          
                          {service.id === "creative-design" && (
                            <>
                              <motion.div 
                                className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full" 
                                style={{ background: service.color }}
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  x: [0, 20, 0],
                                  y: [0, -20, 0],
                                  opacity: [0.5, 0.7, 0.5]
                                }}
                                transition={{ 
                                  duration: 8,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }}
                              />
                              
                              <motion.div 
                                className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-lg" 
                                style={{ background: service.hoverColor }}
                                animate={{ 
                                  rotate: [0, 90, 180, 270, 360],
                                  opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ 
                                  duration: 20,
                                  repeat: Infinity,
                                  repeatType: "loop"
                                }}
                              />
                            </>
                          )}
                          
                          {service.id === "digital-strategy" && (
                            <>
                              <motion.div className="absolute inset-0 flex items-center justify-center">
                                <motion.div 
                                  className="w-32 h-32 rounded-full border-4 border-dashed"
                                  style={{ borderColor: service.color }}
                                  animate={{ 
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                  }}
                                  transition={{ 
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 8, repeat: Infinity, repeatType: "reverse" }
                                  }}
                                >
                                  <motion.div 
                                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                                    style={{ background: service.color }}
                                  />
                                  <motion.div 
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full"
                                    style={{ background: service.hoverColor }}
                                  />
                                  <motion.div 
                                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                                    style={{ background: service.color }}
                                  />
                                  <motion.div 
                                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                                    style={{ background: service.hoverColor }}
                                  />
                                </motion.div>
                              </motion.div>
                            </>
                          )}
                          
                          {service.id === "client-services" && (
                            <>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div 
                                  className="relative w-40 h-40"
                                  animate={{ rotate: [0, 360] }}
                                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                >
                                  {[...Array(4)].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="absolute top-1/2 left-1/2 w-full h-1 origin-left"
                                      style={{ 
                                        backgroundColor: i % 2 === 0 ? service.color : service.hoverColor,
                                        transform: `rotate(${i * 45}deg)` 
                                      }}
                                      initial={{ scaleX: 0 }}
                                      animate={{ scaleX: 1 }}
                                      transition={{ delay: i * 0.2, duration: 1 }}
                                    />
                                  ))}
                                </motion.div>
                              </div>
                              
                              <motion.div 
                                className="absolute bottom-10 right-10 w-20 h-20"
                                animate={{ 
                                  opacity: [0.4, 0.8, 0.4],
                                  scale: [1, 1.2, 1]
                                }}
                                transition={{ 
                                  duration: 6,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }}
                              >
                                {React.cloneElement(service.icon as React.ReactElement, { 
                                  className: "w-full h-full text-maverick-orange/70" 
                                })}
                              </motion.div>
                            </>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}