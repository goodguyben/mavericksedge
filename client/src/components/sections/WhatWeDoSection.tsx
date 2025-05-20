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
      tagline: "Where Vision Meets Digital Reality",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: "We create responsive websites and e-commerce platforms aligned with your business goals. Our solutions deliver optimized user journeys, seamless functionality, and scalable architecture built for growth.",
      valueProps: [
        "Converts visitors into customers through strategic design",
        "Builds brand credibility with professional, cohesive aesthetics",
        "Reduces maintenance costs with future-proof technologies"
      ],
      color: "#FF5A00",
      hoverColor: "#FF7A30",
      animationElements: "code" // Used to determine which animation elements to show
    },
    {
      id: "creative-design",
      title: "Marketing & Creative",
      description: "Strategic marketing that connects with your audience and delivers measurable ROI.",
      tagline: "Turning Impressions Into Relationships",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: "We craft compelling brand stories across all touchpoints using effective design, targeted content, and data-driven campaigns to build engagement and drive lasting brand loyalty.",
      valueProps: [
        "Amplifies your voice in crowded markets",
        "Transforms data into actionable marketing strategies",
        "Creates emotional connections that drive customer loyalty"
      ],
      color: "#FF8C00",
      hoverColor: "#FFA030",
      animationElements: "creative" // Used to determine which animation elements to show
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description: "Practical AI solutions that streamline operations and create competitive advantages.",
      tagline: "Work Smarter, Not Harder",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details: "We implement accessible AI that delivers real business results by reducing costs, uncovering data insights, and enhancing customer experiences with responsible implementation and clear ROI.",
      valueProps: [
        "Reduces operational costs through intelligent automation",
        "Uncovers hidden insights in your business data",
        "Creates personalized customer experiences at scale"
      ],
      color: "#FF7000",
      hoverColor: "#FF9030",
      animationElements: "ai" // Used to determine which animation elements to show
    },
    {
      id: "client-services",
      title: "Ongoing Support & Optimization",
      description: "Proactive maintenance and optimization that keeps your digital assets performing at their best.",
      tagline: "Beyond Launch: Evolve & Excel",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details: "We provide continuous monitoring, updates, and performance tuning as an extension of your team, giving you the technical expertise to adapt to changing market conditions.",
      valueProps: [
        "Ensures maximum uptime and reliability",
        "Adapts your digital assets to changing market conditions",
        "Provides peace of mind with expert technical support"
      ],
      color: "#FFA200",
      hoverColor: "#FFC060",
      animationElements: "support" // Used to determine which animation elements to show
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
            We deliver transformative digital solutions that drive real business growth, 
            increase operational efficiency, and create meaningful customer experiences that 
            keep them coming back for more
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
                        <p className="text-maverick-orange text-sm italic mb-2">"{service.tagline}"</p>
                        <p className="text-[#AAAAAA] mb-3">{service.description}</p>
                        <p className="text-[#DDDDDD] leading-relaxed text-sm mb-3">{service.details}</p>
                        
                        <div className="mb-2">
                          <h4 className="text-sm font-semibold mb-2 text-white">Key Benefits:</h4>
                          <ul className="space-y-1.5">
                            {service.valueProps.map((prop, idx) => (
                              <li key={idx} className="flex items-start text-xs">
                                <span className="mr-1.5 mt-0.5 text-maverick-orange">•</span>
                                <span className="text-[#DDDDDD]">{prop}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
            <div className="absolute top-[-50px] left-0 w-full z-10">
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
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mt-20" // Increased top margin to move content further down
                        >
                          <h3 className="text-3xl lg:text-4xl font-bold mb-2">{service.title}</h3>
                          <p className="text-maverick-orange text-lg italic mb-4">"{service.tagline}"</p>
                        </motion.div>
                        
                        <motion.p 
                          className="text-[#AAAAAA] text-xl mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {service.description}
                        </motion.p>
                        
                        <motion.p 
                          className="text-[#DDDDDD] leading-relaxed mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          {service.details}
                        </motion.p>

                        <motion.div
                          className="mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <h4 className="text-lg font-semibold mb-3 text-white">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {service.valueProps.map((prop, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 + (idx * 0.1) }}
                              >
                                <div className="mr-2 mt-1 text-maverick-orange">•</div>
                                <span className="text-[#DDDDDD]">{prop}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                        
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
                          
                          {/* Web Development Animations */}
                          {service.animationElements === "code" && (
                            <>
                              {/* Code editor visualization */}
                              <div className="absolute top-6 left-6 right-6 h-24 rounded-lg bg-[#1E1E1E]/80 overflow-hidden border border-gray-700">
                                {/* Header bar of code editor */}
                                <div className="h-6 bg-[#333]/80 flex items-center px-3">
                                  <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                                  </div>
                                  <div className="text-xs text-gray-400 mx-auto">index.html</div>
                                </div>
                                
                                {/* Code lines */}
                                <div className="p-3">
                                  {[...Array(5)].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="flex items-center gap-2 text-xs"
                                    >
                                      <span className="text-gray-500 w-4">{i+1}</span>
                                      <motion.div
                                        className="h-3 rounded-full"
                                        style={{ 
                                          width: `${60 + Math.random() * 30}%`,
                                          backgroundColor: i % 3 === 0 ? `${service.color}40` : 
                                                        i % 3 === 1 ? "#5e9dd580" : "#99bbff40" 
                                        }}
                                        initial={{ scaleX: 0, originX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ 
                                          delay: 0.3 + (i * 0.15),
                                          duration: 0.8,
                                          ease: "easeOut"
                                        }}
                                      />
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Browser preview */}
                              <motion.div 
                                className="absolute bottom-6 left-6 right-6 h-36 bg-white/10 rounded-lg overflow-hidden border border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                              >
                                {/* Browser header */}
                                <div className="h-6 bg-[#333]/80 flex items-center px-3">
                                  <div className="flex gap-2 w-full items-center">
                                    <div className="flex gap-1.5">
                                      <div className="w-2.5 h-2.5 rounded-full bg-gray-500/70"></div>
                                      <div className="w-2.5 h-2.5 rounded-full bg-gray-500/70"></div>
                                    </div>
                                    <div className="text-xs bg-[#222]/80 text-gray-400 px-2 py-0.5 rounded-sm flex-grow text-center">
                                      mavericksedge.com
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Responsive layout representation */}
                                <div className="p-4 flex">
                                  <motion.div 
                                    className="h-12 w-1/3 bg-maverick-orange/20 rounded-md mr-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.4, duration: 0.3 }}
                                  />
                                  <div className="flex-grow flex flex-col gap-2">
                                    <motion.div 
                                      className="h-3 w-full bg-gray-400/30 rounded-sm"
                                      initial={{ opacity: 0, width: 0 }}
                                      animate={{ opacity: 1, width: "100%" }}
                                      transition={{ delay: 1.5, duration: 0.4 }}
                                    />
                                    <motion.div 
                                      className="h-3 w-5/6 bg-gray-400/30 rounded-sm"
                                      initial={{ opacity: 0, width: 0 }}
                                      animate={{ opacity: 1, width: "83.333%" }}
                                      transition={{ delay: 1.6, duration: 0.4 }}
                                    />
                                    <motion.div 
                                      className="h-3 w-4/6 bg-gray-400/30 rounded-sm"
                                      initial={{ opacity: 0, width: 0 }}
                                      animate={{ opacity: 1, width: "66.666%" }}
                                      transition={{ delay: 1.7, duration: 0.4 }}
                                    />
                                  </div>
                                </div>
                                
                                {/* Device responsive indicators */}
                                <div className="absolute bottom-3 right-3 flex gap-2">
                                  <motion.div 
                                    className="w-6 h-6 flex items-center justify-center bg-maverick-orange/30 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.9 }}
                                  >
                                    <div className="w-3 h-4 border border-white/70 rounded-sm"></div>
                                  </motion.div>
                                  <motion.div 
                                    className="w-6 h-6 flex items-center justify-center bg-maverick-orange/30 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.0 }}
                                  >
                                    <div className="w-4 h-3 border border-white/70 rounded-sm"></div>
                                  </motion.div>
                                </div>
                              </motion.div>
                            </>
                          )}
                          
                          {/* Marketing & Creative Animations */}
                          {service.animationElements === "creative" && (
                            <>
                              {/* Marketing dashboard visualization */}
                              <div className="absolute top-8 left-6 right-6 bottom-8 overflow-hidden rounded-lg border border-gray-700 bg-[#1A1A1A]/80">
                                {/* Dashboard header */}
                                <div className="h-8 bg-[#222]/90 flex items-center px-4">
                                  <div className="text-sm text-gray-300 font-medium">Marketing Dashboard</div>
                                </div>
                                
                                {/* Dashboard content */}
                                <div className="p-4 grid grid-cols-2 gap-3">
                                  {/* Analytics chart */}
                                  <motion.div 
                                    className="bg-[#222]/70 rounded-md p-2 h-28 col-span-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                  >
                                    <div className="text-xs text-gray-400 mb-2">Campaign Performance</div>
                                    <div className="relative h-16">
                                      {/* Graph lines */}
                                      <svg className="w-full h-full">
                                        {/* Grid lines */}
                                        <line x1="0" y1="0" x2="100%" y2="0" stroke="#444" strokeWidth="1" strokeDasharray="4,4" />
                                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#444" strokeWidth="1" strokeDasharray="4,4" />
                                        <line x1="0" y1="100%" x2="100%" y2="100%" stroke="#444" strokeWidth="1" />
                                        
                                        {/* Performance line */}
                                        <motion.path
                                          d="M0,50 C30,40 70,70 100,30 L100,64 L0,64 Z"
                                          fill={`${service.color}30`}
                                          stroke={service.color}
                                          strokeWidth="2"
                                          initial={{ pathLength: 0 }}
                                          animate={{ pathLength: 1 }}
                                          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                                        />
                                      </svg>
                                    </div>
                                  </motion.div>
                                  
                                  {/* KPI boxes */}
                                  {[
                                    { label: "Conversion", value: "+24%", color: service.color },
                                    { label: "Engagement", value: "+47%", color: service.hoverColor },
                                    { label: "Reach", value: "12.5K", color: `${service.color}90` },
                                    { label: "ROI", value: "3.2x", color: `${service.hoverColor}90` }
                                  ].map((kpi, idx) => (
                                    <motion.div
                                      key={idx}
                                      className="bg-[#222]/70 rounded-md p-2 flex flex-col justify-between"
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.8 + (idx * 0.15) }}
                                    >
                                      <div className="text-xs text-gray-400">{kpi.label}</div>
                                      <div className="text-lg font-semibold" style={{ color: kpi.color }}>{kpi.value}</div>
                                    </motion.div>
                                  ))}
                                  
                                  {/* Brand elements */}
                                  <motion.div 
                                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-30" 
                                    style={{ background: `radial-gradient(circle, ${service.color}70 0%, transparent 70%)` }}
                                    animate={{ 
                                      scale: [1, 1.2, 1],
                                      opacity: [0.2, 0.3, 0.2],
                                      rotate: [0, 180]
                                    }}
                                    transition={{ 
                                      duration: 15,
                                      repeat: Infinity,
                                      repeatType: "reverse"
                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          
                          {/* AI Integration Animations */}
                          {service.animationElements === "ai" && (
                            <>
                              <div className="absolute inset-6 rounded-lg border border-gray-700 bg-[#121212]/90 overflow-hidden">
                                {/* Neural network visualization */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                  {/* Container for nodes and connections */}
                                  <div className="relative w-full h-full max-w-xs mx-auto">
                                    {/* Neural network layers */}
                                    {[0, 1, 2].map((layer) => (
                                      <div 
                                        key={layer} 
                                        className="absolute top-0 bottom-0 flex flex-col justify-around"
                                        style={{ 
                                          left: `${25 + layer * 25}%`,
                                          transform: 'translateX(-50%)',
                                        }}
                                      >
                                        {/* Nodes in each layer */}
                                        {[...Array(layer === 1 ? 4 : 3)].map((_, i) => (
                                          <motion.div
                                            key={i}
                                            className="w-4 h-4 rounded-full"
                                            style={{ 
                                              backgroundColor: layer === 0 
                                                ? `${service.color}90` 
                                                : layer === 1 
                                                  ? `${service.hoverColor}80` 
                                                  : `${service.color}70` 
                                            }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ 
                                              delay: 0.2 + (layer * 0.2) + (i * 0.1),
                                              duration: 0.5 
                                            }}
                                          />
                                        ))}
                                      </div>
                                    ))}
                                    
                                    {/* Animated pulses along connections */}
                                    {[0, 1].map((layerFrom) => (
                                      [...Array(layerFrom === 0 ? 3 : 4)].map((_, nodeFrom) => (
                                        [...Array(layerFrom === 0 ? 4 : 3)].map((_, nodeTo) => (
                                          <motion.div
                                            key={`${layerFrom}-${nodeFrom}-${nodeTo}`}
                                            className="absolute w-2 h-2 rounded-full bg-maverick-orange"
                                            initial={{ 
                                              x: `calc(${25 + layerFrom * 25}% - 4px)`, 
                                              y: `${(nodeFrom + 1) * 100 / (layerFrom === 0 ? 4 : 5)}%`,
                                              opacity: 0,
                                              scale: 0
                                            }}
                                            animate={{ 
                                              x: `calc(${25 + (layerFrom + 1) * 25}% - 4px)`, 
                                              y: `${(nodeTo + 1) * 100 / (layerFrom === 0 ? 5 : 4)}%`,
                                              opacity: [0, 1, 0],
                                              scale: [0, 1, 0]
                                            }}
                                            transition={{ 
                                              duration: 1.5, 
                                              delay: 1.2 + (layerFrom * 0.5) + (nodeFrom * 0.2) + (nodeTo * 0.1),
                                              repeat: Infinity,
                                              repeatDelay: 3 + Math.random() * 5
                                            }}
                                          />
                                        ))
                                      ))
                                    ))}
                                  </div>

                                  {/* Data Flow Indicators */}
                                  <motion.div
                                    className="absolute left-4 top-4 px-2 py-1 bg-[#222]/80 rounded text-xs text-maverick-orange border border-maverick-orange/30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.5 }}
                                  >
                                    Input Data
                                  </motion.div>
                                  
                                  <motion.div
                                    className="absolute right-4 top-4 px-2 py-1 bg-[#222]/80 rounded text-xs text-maverick-orange border border-maverick-orange/30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.7 }}
                                  >
                                    Predictions
                                  </motion.div>
                                  
                                  <motion.div
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#222]/80 rounded text-xs text-white border border-white/20"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 3 }}
                                  >
                                    Self-optimizing model
                                  </motion.div>
                                </div>
                              </div>
                            </>
                          )}
                          
                          {/* Support & Maintenance Animations */}
                          {service.animationElements === "support" && (
                            <>
                              <div className="absolute inset-6 rounded-lg border border-gray-700 bg-[#121212]/90 overflow-hidden">
                                {/* Support dashboard visualization */}
                                <div className="h-8 bg-[#222]/90 flex items-center px-4">
                                  <div className="text-sm text-gray-300 font-medium">System Monitoring</div>
                                </div>
                                
                                <div className="p-4">
                                  {/* Status indicators */}
                                  <div className="grid grid-cols-2 gap-3 mb-3">
                                    {[
                                      { label: "Uptime", value: "99.9%", status: "optimal" },
                                      { label: "Response", value: "124ms", status: "optimal" },
                                      { label: "CPU Load", value: "24%", status: "normal" },
                                      { label: "Memory", value: "47%", status: "normal" }
                                    ].map((metric, idx) => (
                                      <motion.div
                                        key={idx}
                                        className="bg-[#222]/70 rounded-md p-2 flex items-center justify-between"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (idx * 0.15) }}
                                      >
                                        <span className="text-xs text-gray-400">{metric.label}</span>
                                        <div className="flex items-center">
                                          <span className="text-sm font-medium mr-2">{metric.value}</span>
                                          <span 
                                            className={`w-2 h-2 rounded-full ${
                                              metric.status === 'optimal' ? 'bg-green-500' : 
                                              metric.status === 'normal' ? 'bg-blue-500' : 'bg-yellow-500'
                                            }`}
                                          />
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>
                                  
                                  {/* Activity timeline */}
                                  <motion.div
                                    className="bg-[#222]/70 rounded-md p-3 mb-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                  >
                                    <div className="text-xs text-gray-400 mb-2">Recent Activity</div>
                                    <div className="space-y-2">
                                      {[
                                        { time: "10:45", action: "Security patch applied", status: "success" },
                                        { time: "09:20", action: "Database backup completed", status: "success" },
                                        { time: "08:05", action: "Performance optimization", status: "success" }
                                      ].map((activity, idx) => (
                                        <motion.div
                                          key={idx}
                                          className="flex items-center text-xs"
                                          initial={{ opacity: 0, x: -5 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 1.1 + (idx * 0.2) }}
                                        >
                                          <span className="text-gray-500 w-10">{activity.time}</span>
                                          <span className={`h-1.5 w-1.5 rounded-full mx-2 ${
                                            activity.status === 'success' ? 'bg-green-500' : 
                                            activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                                          }`}></span>
                                          <span className="text-gray-300">{activity.action}</span>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                  
                                  {/* Update notification */}
                                  <motion.div
                                    className="bg-maverick-orange/20 border border-maverick-orange/40 rounded-md p-2 flex items-center justify-between"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.8 }}
                                  >
                                    <div className="flex items-center">
                                      <motion.div 
                                        className="w-6 h-6 mr-2 rounded-full bg-maverick-orange/30 flex items-center justify-center"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                      >
                                        <Database className="w-3 h-3 text-maverick-orange" />
                                      </motion.div>
                                      <span className="text-xs text-maverick-orange">System update available</span>
                                    </div>
                                    <button className="text-xs bg-maverick-orange/30 hover:bg-maverick-orange/50 text-white px-2 py-0.5 rounded transition-colors">
                                      Apply
                                    </button>
                                  </motion.div>
                                </div>
                              </div>
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