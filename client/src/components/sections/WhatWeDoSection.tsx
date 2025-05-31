import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Code,
  PenTool,
  Brain,
  Database,
  ArrowRight,
  Zap,
  Users,
  LineChart,
  Shield,
  FolderIcon,
  FileIcon,
  Play,
  Pause,
} from "lucide-react";

export default function WhatWeDoSection() {
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = useState("web-development");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const services = [
    {
      id: "web-development",
      title: "Web Design & Development",
      description:
        "Custom digital experiences that engage audiences and drive results.",
      tagline: "Where Vision Meets Digital Reality",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details:
        "We create responsive websites and e-commerce platforms aligned with your business goals. Our solutions deliver optimized user journeys, seamless functionality, and scalable architecture built for growth.",
      valueProps: [
        "Converts visitors into customers through strategic design",
        "Builds brand credibility with professional, cohesive aesthetics",
        "Reduces maintenance costs with future-proof technologies",
      ],
      color: "#FF5A00",
      hoverColor: "#FF7A30",
      animationElements: "code", // Used to determine which animation elements to show
    },
    {
      id: "creative-design",
      title: "Marketing & Creative",
      description:
        "Strategic marketing that connects with your audience and delivers measurable ROI.",
      tagline: "Turning Impressions Into Relationships",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details:
        "We craft compelling brand stories across all touchpoints using effective design, targeted content, and data-driven campaigns to build engagement and drive lasting brand loyalty.",
      valueProps: [
        "Amplifies your voice in crowded markets",
        "Transforms data into actionable marketing strategies",
        "Creates emotional connections that drive customer loyalty",
      ],
      color: "#FF8C00",
      hoverColor: "#FFA030",
      animationElements: "creative", // Used to determine which animation elements to show
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description:
        "Practical AI solutions that streamline operations and create competitive advantages.",
      tagline: "Work Smarter, Not Harder",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details:
        "We implement accessible AI that delivers real business results by reducing costs, uncovering data insights, and enhancing customer experiences with responsible implementation and clear ROI.",
      valueProps: [
        "Reduces operational costs through intelligent automation",
        "Uncovers hidden insights in your business data",
        "Creates personalized customer experiences at scale",
      ],
      color: "#FF7000",
      hoverColor: "#FF9030",
      animationElements: "ai", // Used to determine which animation elements to show
    },
    {
      id: "client-services",
      title: "Ongoing Support & Optimization",
      description:
        "Proactive maintenance and optimization that keeps your digital assets performing at their best.",
      tagline: "Beyond Launch: Evolve & Excel",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details:
        "We provide continuous monitoring, updates, and performance tuning as an extension of your team, giving you the technical expertise to adapt to changing market conditions.",
      valueProps: [
        "Ensures maximum uptime and reliability",
        "Adapts your digital assets to changing market conditions",
        "Provides peace of mind with expert technical support",
      ],
      color: "#FFA200",
      hoverColor: "#FFC060",
      animationElements: "support", // Used to determine which animation elements to show
    },
  ];

  // Function to find the service details by ID
  const getServiceById = (id: string) => {
    return services.find((service) => service.id === id);
  };

  // Auto-rotate services every 8 seconds
  useEffect(() => {
    if (isMobile) return; // Don't auto-rotate on mobile
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const currentIndex = services.findIndex(
        (service) => service.id === activeService,
      );
      const nextIndex = (currentIndex + 1) % services.length;
      setActiveService(services[nextIndex].id);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeService, isMobile, services, isAutoPlaying]);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-32 px-5 md:px-10 bg-[#121212] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-maverick-orange/20 to-transparent opacity-30 blur-3xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
          x: useTransform(scrollYProgress, [0, 0.5, 1], [-50, 50, -50]),
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-maverick-amber/20 to-transparent opacity-20 blur-3xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 1.2]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], [50, -50, 50]),
        }}
      />

      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-20">
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
                <span className="text-maverick-orange font-medium">
                  Our services
                </span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What We{" "}
              <span className="text-maverick-orange relative inline-block">
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
              We offer a range of services, from building and optimizing websites and e-commerce platforms to developing strategic marketing campaigns and integrating AI solutions for automation. Our goal is to provide customized, impactful solutions that drive results.
            </motion.p>
          </motion.div>
        </header>

        {isMobile ? (
          // Mobile/Tablet version - Mimics desktop layout with graphics
          <motion.div className="relative min-h-[500px]" style={{ opacity, y }}>
            {/* Service Navigation */}
            <div className="mb-8">
              <motion.div
                className="grid grid-cols-2 gap-3 mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`relative px-3 py-4 min-h-[100px] rounded-lg transition-all duration-300 ${
                      activeService === service.id
                        ? "bg-gradient-to-r from-maverick-orange/20 to-maverick-amber/10 text-white"
                        : "bg-[#1A1A1A]/30 text-gray-400 hover:text-gray-200"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <motion.div
                        animate={{
                          scale: activeService === service.id ? 1.1 : 1,
                          y: activeService === service.id ? -4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-lg ${
                          activeService === service.id
                            ? `bg-${service.id} bg-opacity-20`
                            : "bg-gray-800/20"
                        }`}
                      >
                        <div className="w-6 h-6">
                          {React.cloneElement(
                            service.icon as React.ReactElement,
                            {
                              className: `w-6 h-6 ${activeService === service.id ? "text-maverick-orange" : "text-gray-500"}`,
                            },
                          )}
                        </div>
                      </motion.div>
                      <span className="font-medium text-xs leading-tight">
                        {service.title}
                      </span>
                    </div>

                    {/* Active indicator line */}
                    {activeService === service.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 bg-maverick-orange rounded-b-lg"
                        layoutId="activeServiceIndicatorMobile"
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Service Content Display with Graphics */}
            <div className="mt-10">
              <AnimatePresence mode="wait">
                {services.map(
                  (service) =>
                    activeService === service.id && (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="grid grid-cols-1 gap-8 items-center"
                      >
                        {/* Visual side with same graphics as desktop */}
                        <motion.div
                          className="relative h-64 rounded-2xl overflow-hidden"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {/* Main visual container */}
                          <div className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl overflow-hidden">
                            {/* Animated decorative elements */}
                            <motion.div
                              className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
                              style={{
                                background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`,
                              }}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.4, 0.3],
                                rotate: [0, 90, 180, 270, 360],
                              }}
                              transition={{
                                duration: 15,
                                repeat: Infinity,
                                repeatType: "reverse",
                              }}
                            />

                            <motion.div
                              className="absolute bottom-10 left-10 w-20 h-20 rounded-full"
                              style={{
                                background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)`,
                              }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.2, 0.3, 0.2],
                                y: [0, -30, 0],
                              }}
                              transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                              }}
                            />

                            {/* Web Development Animations */}
                            {service.animationElements === "code" && (
                              <>
                                {/* Interactive design visualization - Mobile scaled */}
                                <motion.div 
                                  className="absolute top-3 left-3 right-3 h-32 rounded-lg bg-gradient-to-br from-[#1E1E1E]/90 to-[#252530]/90 overflow-hidden border border-gray-700 shadow-lg shadow-purple-500/20"
                                  animate={{ 
                                    rotateX: [0, 2, 0, -2, 0],
                                    rotateY: [0, -2, 0, 2, 0],
                                    translateZ: [0, 5, 0, -5, 0]
                                  }}
                                  transition={{ 
                                    duration: 10, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                  }}
                                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                                >
                                  {/* Design tool header */}
                                  <div className="h-5 bg-gradient-to-r from-purple-900/80 via-indigo-800/80 to-blue-900/80 flex items-center px-2 justify-between">
                                    <div className="flex gap-1">
                                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="text-[8px] text-gray-300 font-medium">
                                      Design Canvas
                                    </div>
                                    <div className="text-[8px] text-cyan-300 bg-cyan-800/40 px-1 py-0.5 rounded-sm flex items-center backdrop-blur-sm">
                                      <PenTool className="w-1.5 h-1.5 mr-0.5" />
                                      Live
                                    </div>
                                  </div>

                                  <div className="p-2 relative h-full">
                                    {/* Color palette */}
                                    <motion.div 
                                      className="absolute top-1 left-1 flex gap-1"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.3, duration: 0.5 }}
                                    >
                                      {["#FF5A5F", "#3A86FF", "#8338EC", "#FFB830"].map((color, i) => (
                                        <motion.div
                                          key={i}
                                          className="w-3 h-3 rounded-full"
                                          style={{ backgroundColor: color, boxShadow: `0 0 4px ${color}80` }}
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          transition={{ delay: 0.4 + i * 0.1 }}
                                        />
                                      ))}
                                    </motion.div>

                                    {/* Website mock design */}
                                    <motion.div
                                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-lg overflow-hidden border border-gray-700/50"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.8 }}
                                    >
                                      {/* Header */}
                                      <motion.div
                                        className="h-2 w-full bg-gradient-to-r from-purple-600/80 to-indigo-600/80"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 1.0, duration: 0.6 }}
                                      />

                                      {/* Hero section */}
                                      <motion.div
                                        className="h-8 w-full relative overflow-hidden"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 }}
                                      >
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/50 via-purple-700/50 to-pink-800/50" />
                                        <div className="relative z-10 flex flex-col items-center justify-center h-full p-1">
                                          <motion.div 
                                            className="w-12 h-1 bg-white/80 rounded-full mb-1"
                                            initial={{ width: 0 }}
                                            animate={{ width: '12px' }}
                                            transition={{ delay: 1.3, duration: 0.5 }}
                                          />
                                          <motion.div 
                                            className="w-8 h-0.5 bg-white/60 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: '8px' }}
                                            transition={{ delay: 1.4, duration: 0.5 }}
                                          />
                                        </div>
                                      </motion.div>

                                      {/* Content blocks */}
                                      <div className="p-1 grid grid-cols-2 gap-1">
                                        {[
                                          { color: 'from-cyan-500/70 to-blue-600/70' },
                                          { color: 'from-purple-500/70 to-pink-600/70' },
                                          { color: 'from-amber-500/70 to-orange-600/70' },
                                          { color: 'from-emerald-500/70 to-green-600/70' }
                                        ].map((block, i) => (
                                          <motion.div
                                            key={i}
                                            className={`h-3 rounded bg-gradient-to-br ${block.color}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.6 + i * 0.1 }}
                                          />
                                        ))}
                                      </div>
                                    </motion.div>
                                  </div>
                                </motion.div>

                                {/* Code editor - Mobile scaled */}
                                <motion.div
                                  className="absolute bottom-3 left-3 right-3 h-32 bg-gradient-to-br from-[#0D1117]/90 to-[#161B22]/90 rounded-lg overflow-hidden border border-gray-700 shadow-lg shadow-blue-500/20"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                  <div className="h-5 bg-gradient-to-r from-[#1F2937]/95 via-[#111827]/95 to-[#1F2937]/95 flex items-center px-2">
                                    <div className="flex gap-1">
                                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="text-[8px] bg-[#0D1117]/90 text-blue-300 px-1 py-0.5 rounded-sm flex-grow text-center font-mono">
                                      index.tsx
                                    </div>
                                  </div>

                                  <div className="p-2 font-mono text-[7px] relative">
                                    {[
                                      { content: 'import React from "react";', color: 'text-gray-400' },
                                      { content: 'import { motion } from "framer-motion";', color: 'text-gray-400' },
                                      { content: 'const Hero = () => {', color: 'text-pink-400' },
                                      { content: '  return (', color: 'text-white' },
                                      { content: '    <motion.h1', color: 'text-orange-400' },
                                      { content: '      animate={{ opacity: 1, y: 0 }}', color: 'text-green-400', highlight: true },
                                      { content: '    >', color: 'text-orange-400' },
                                      { content: '      Modern Web Solutions', color: 'text-amber-300' },
                                    ].map((line, i) => (
                                      <motion.div
                                        key={i}
                                        className={`flex items-start ${line.highlight ? 'bg-blue-900/30 -mx-1 px-1 rounded' : ''}`}
                                        initial={{ opacity: 0, x: 5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.2 + i * 0.05 }}
                                      >
                                        <span className="text-gray-600 w-2 mr-1">{i + 1}</span>
                                        <span className={line.color}>{line.content}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              </>
                            )}

                            {/* Marketing & Creative Animations */}
                            {service.animationElements === "creative" && (
                              <div className="absolute inset-3 overflow-hidden rounded-lg border border-gray-700 bg-[#1A1A1A]/90 shadow-lg shadow-maverick-orange/10">
                                <div className="h-6 bg-gradient-to-r from-[#222]/90 to-[#333]/80 flex items-center px-2 justify-between">
                                  <div className="text-[9px] text-gray-200 font-medium flex items-center">
                                    <Brain className="w-2.5 h-2.5 mr-1 text-maverick-orange" />
                                    AI Marketing Center
                                  </div>
                                  <div className="text-[7px] bg-green-500/20 text-green-400 px-1 py-0.5 rounded-sm">
                                    Live
                                  </div>
                                </div>

                                <div className="p-2 grid grid-cols-2 gap-2">
                                  <motion.div
                                    className="bg-[#222]/80 rounded p-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                  >
                                    <div className="text-[8px] text-gray-300 mb-1">Performance</div>
                                    <div className="h-12 relative">
                                      <svg className="w-full h-full">
                                        <motion.path
                                          d="M0,40 C10,35 20,30 30,20 L30,50 L0,50 Z"
                                          fill={`${service.color}30`}
                                          stroke={service.color}
                                          strokeWidth="1"
                                          initial={{ pathLength: 0 }}
                                          animate={{ pathLength: 1 }}
                                          transition={{ delay: 0.5, duration: 1.5 }}
                                        />
                                      </svg>
                                    </div>
                                  </motion.div>

                                  <motion.div
                                    className="bg-[#222]/80 rounded p-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                  >
                                    <div className="text-[8px] text-gray-300 mb-1">AI Insights</div>
                                    <div className="flex gap-1">
                                      {[73, 42, 87].map((value, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center">
                                          <div className="w-full h-8 bg-[#444]/50 rounded-sm relative">
                                            <motion.div
                                              className="absolute bottom-0 left-0 right-0 rounded-sm"
                                              style={{ backgroundColor: service.color }}
                                              initial={{ height: 0 }}
                                              animate={{ height: `${value}%` }}
                                              transition={{ delay: 0.8 + i * 0.2, duration: 1 }}
                                            />
                                          </div>
                                          <div className="text-[7px] text-gray-300">{value}%</div>
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                </div>
                              </div>
                            )}

                            {/* AI Integration Animations */}
                            {service.animationElements === "ai" && (
                              <div className="absolute inset-3 rounded-lg border border-gray-700 bg-gradient-to-br from-[#121212]/95 to-[#1E1E1E]/95 overflow-hidden">
                                <div className="h-6 bg-[#222]/90 flex items-center px-2 justify-between border-b border-gray-700/50">
                                  <div className="text-[9px] text-white font-medium flex items-center">
                                    <Brain className="w-2.5 h-2.5 mr-1 text-maverick-orange" />
                                    AI Integration
                                  </div>
                                  <div className="text-[7px] bg-green-500/20 text-green-400 px-1 py-0.5 rounded-sm">
                                    Connected
                                  </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 p-2">
                                  <motion.div
                                    className="bg-[#222]/80 rounded p-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                  >
                                    <div className="text-[8px] text-gray-300 mb-1">Processes</div>
                                    {["Customer Service", "Inventory", "Forecasting"].map((process, i) => (
                                      <motion.div
                                        key={i}
                                        className="bg-[#333]/60 rounded p-1 mb-1"
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + i * 0.2 }}
                                      >
                                        <div className="text-[7px] text-gray-200">{process}</div>
                                        <div className="text-[6px] text-green-400">AI Enhanced</div>
                                      </motion.div>
                                    ))}
                                  </motion.div>

                                  <div className="relative flex flex-col justify-center">
                                    {[0, 1].map((layer) => (
                                      <div key={layer} className="absolute top-0 bottom-0 flex flex-col justify-around" style={{ left: `${20 + layer * 30}%` }}>
                                        {[...Array(layer === 0 ? 3 : 2)].map((_, i) => (
                                          <motion.div
                                            key={i}
                                            className="w-3 h-3 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: `${service.color}80`, boxShadow: `0 0 6px ${service.color}40` }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.9 + layer * 0.2 + i * 0.1 }}
                                          >
                                            {layer === 0 && i === 1 && <Brain className="w-2 h-2 text-white" />}
                                          </motion.div>
                                        ))}
                                      </div>
                                    ))}
                                  </div>

                                  <motion.div
                                    className="bg-[#222]/80 rounded p-2"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                  >
                                    <div className="text-[8px] text-green-400 mb-1">Results</div>
                                    {["+89%", "+76%", "+94%"].map((result, i) => (
                                      <motion.div
                                        key={i}
                                        className="text-[7px] text-gray-300 mb-0.5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.0 + i * 0.2 }}
                                      >
                                        <span className="text-green-400">{result}</span> improvement
                                      </motion.div>
                                    ))}
                                  </motion.div>
                                </div>
                              </div>
                            )}

                            {/* Support & Maintenance Animations */}
                            {service.animationElements === "support" && (
                              <div className="absolute inset-3 rounded-lg border border-gray-700 bg-gradient-to-br from-[#121212]/95 to-[#1A1A1A]/95 overflow-hidden">
                                <div className="h-6 bg-gradient-to-r from-[#222]/90 to-[#333]/80 flex items-center px-2 justify-between border-b border-gray-700/50">
                                  <div className="text-[9px] text-white font-medium flex items-center">
                                    <Brain className="w-2.5 h-2.5 mr-1 text-maverick-orange" />
                                    System Monitor
                                  </div>
                                  <div className="text-[7px] bg-green-500/20 text-green-400 px-1 py-0.5 rounded-sm">
                                    Live
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 p-2">
                                  <motion.div
                                    className="bg-[#222]/80 rounded p-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                  >
                                    <div className="text-[8px] text-gray-300 mb-1">Health</div>
                                    {[
                                      { label: "Uptime", value: "99.99%", status: "optimal" },
                                      { label: "Response", value: "84ms", status: "optimal" },
                                      { label: "CPU", value: "18%", status: "optimal" },
                                    ].map((metric, i) => (
                                      <motion.div
                                        key={i}
                                        className="bg-[#333]/60 rounded p-1 mb-1 flex justify-between items-center"
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.15 }}
                                      >
                                        <span className="text-[7px] text-gray-400">{metric.label}</span>
                                        <div className="flex items-center">
                                          <span className="text-[7px] font-medium text-white mr-1">{metric.value}</span>
                                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        </div>
                                      </motion.div>
                                    ))}
                                  </motion.div>

                                  <motion.div
                                    className="bg-[#222]/80 rounded p-2"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                  >
                                    <div className="text-[8px] text-gray-300 mb-1">Performance</div>
                                    <div className="h-16 relative">
                                      <svg className="w-full h-full">
                                        <motion.path
                                          d="M0,40 C10,45 20,35 30,45 C40,55 50,40 60,30 L60,60 L0,60 Z"
                                          fill="rgba(100,100,150,0.2)"
                                          stroke="#6666aa"
                                          strokeWidth="1"
                                          strokeDasharray="2,2"
                                          initial={{ pathLength: 0 }}
                                          animate={{ pathLength: 1 }}
                                          transition={{ delay: 0.9, duration: 1 }}
                                        />
                                        <motion.path
                                          d="M60,30 C70,20 80,15 90,10 L90,60 L60,60 Z"
                                          fill={`${service.color}40`}
                                          stroke={service.color}
                                          strokeWidth="1"
                                          initial={{ pathLength: 0 }}
                                          animate={{ pathLength: 1 }}
                                          transition={{ delay: 1.5, duration: 1 }}
                                        />
                                      </svg>
                                    </div>
                                  </motion.div>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>

                        {/* Content side */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-center"
                        >
                          <motion.div
                            className="inline-block mb-4 p-3 rounded-lg"
                            style={{ backgroundColor: `${service.color}30` }}
                            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          >
                            <div className="w-12 h-12">
                              {React.cloneElement(
                                service.icon as React.ReactElement,
                                {
                                  className: "w-12 h-12 text-maverick-orange",
                                },
                              )}
                            </div>
                          </motion.div>

                          <motion.h3
                            className="text-2xl lg:text-3xl font-bold mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            {service.title}
                          </motion.h3>

                          <motion.p
                            className="text-[#AAAAAA] text-lg mb-4"
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
                            className="mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <h4 className="text-lg font-semibold mb-3 text-white">
                              Key Benefits:
                            </h4>
                            <ul className="space-y-2 text-left max-w-md mx-auto">
                              {service.valueProps.map((prop, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.7 + idx * 0.1,
                                  }}
                                >
                                  <div className="mr-3 mt-0.5 text-maverick-orange flex-shrink-0">
                                    •
                                  </div>
                                  <span className="text-[#DDDDDD] leading-relaxed">{prop}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>

                          <motion.button
                            className="px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 mx-auto"
                            style={{
                              background: `linear-gradient(90deg, #E04500 0%, #E57B00 100%)`,
                            }}
                            whileHover={{
                              scale: 1.05,
                              boxShadow: `0 10px 25px -5px rgba(224, 69, 0, 0.4)`,
                            }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            Learn more <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          // Desktop version - Interactive showcase
          <motion.div className="relative min-h-[500px]" style={{ opacity, y }}>
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
                          y: activeService === service.id ? -4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-lg ${
                          activeService === service.id
                            ? `bg-${service.id} bg-opacity-20`
                            : "bg-gray-800/20"
                        }`}
                      >
                        <div className="w-6 h-6">
                          {React.cloneElement(
                            service.icon as React.ReactElement,
                            {
                              className: `w-6 h-6 ${activeService === service.id ? "text-maverick-orange" : "text-gray-500"}`,
                            },
                          )}
                        </div>
                      </motion.div>
                      <span className="font-medium text-sm">
                        {service.title.split(" ")[0]}
                      </span>
                    </div>

                    {/* Active indicator line */}
                    {activeService === service.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 bg-maverick-orange rounded-b-lg"
                        layoutId="activeServiceIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="relative px-4 py-3 min-w-[120px] rounded-lg transition-all duration-300 bg-[#1A1A1A]/30 text-gray-400 hover:text-gray-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: services.length * 0.1 + 0.2 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      className={`p-2 rounded-lg bg-gray-800/20`}
                    >
                      <div className="w-6 h-6">
                        {isAutoPlaying ? (
                          <Pause className="w-6 h-6 text-gray-500" />
                        ) : (
                          <Play className="w-6 h-6 text-gray-500" />
                        )}
                      </div>
                    </motion.div>
                    <span className="font-medium text-sm">
                      {isAutoPlaying ? "Pause" : "Play"}
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            </div>

            {/* Service Content Display */}
            <div className="mt-10 pt-14">
              <AnimatePresence mode="wait">
                {services.map(
                  (service) =>
                    activeService === service.id && (
                      <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
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
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          >
                            <div className="w-16 h-16">
                              {React.cloneElement(
                                service.icon as React.ReactElement,
                                {
                                  className: "w-16 h-16 text-maverick-orange",
                                },
                              )}
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8" // Reduced top margin to move content up
                          >
                            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                              {service.title}
                            </h3>
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
                            <h4 className="text-lg font-semibold mb-3 text-white">
                              Key Benefits:
                            </h4>
                            <ul className="space-y-2">
                              {service.valueProps.map((prop, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.7 + idx * 0.1,
                                  }}
                                >
                                  <div className="mr-3 mt-0.5 text-maverick-orange flex-shrink-0">
                                    •
                                  </div>
                                  <span className="text-[#DDDDDD] leading-relaxed">{prop}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>

                          <motion.button
                            className="px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300"
                            style={{
                              background: `linear-gradient(90deg, #E04500 0%, #E57B00 100%)`,
                            }}
                            whileHover={{
                              scale: 1.05,
                              boxShadow: `0 10px 25px -5px rgba(224, 69, 0, 0.4)`,
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
                              style={{
                                background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`,
                              }}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.4, 0.3],
                                rotate: [0, 90, 180, 270, 360],
                              }}
                              transition={{
                                duration: 15,
                                repeat: Infinity,
                                repeatType: "reverse",
                              }}
                            />

                            <motion.div
                              className="absolute bottom-10 left-10 w-20 h-20 rounded-full"
                              style={{
                                background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)`,
                              }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.2, 0.3, 0.2],
                                y: [0, -30, 0],
                              }}
                              transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                              }}
                            />

                            {/* Web Development Animations */}
                                {service.animationElements === "code" && (
                                  <>
                                    {/* Interactive design and code visualization with 3D effects */}
                                    <motion.div 
                                      className="absolute top-6 left-6 right-6 h-44 rounded-lg bg-gradient-to-br from-[#1E1E1E]/90 to-[#252530]/90 overflow-hidden border border-gray-700 shadow-lg shadow-purple-500/20"
                                      animate={{ 
                                        rotateX: [0, 2, 0, -2, 0],
                                        rotateY: [0, -2, 0, 2, 0],
                                        translateZ: [0, 5, 0, -5, 0]
                                      }}
                                      transition={{ 
                                        duration: 10, 
                                        repeat: Infinity, 
                                        ease: "easeInOut" 
                                      }}
                                      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                                    >
                                  {/* Creative design area */}
                                  <div className="absolute inset-0">
                                    {/* Design tool header */}
                                    <div className="h-8 bg-gradient-to-r from-purple-900/80 via-indigo-800/80 to-blue-900/80 flex items-center px-3 justify-between">
                                      <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                      </div>
                                      <div className="text-xs text-gray-300 font-medium">
                                        Modern Design Canvas
                                      </div>
                                      <div className="text-[10px] text-cyan-300 bg-cyan-800/40 px-2 py-0.5 rounded-sm flex items-center backdrop-blur-sm">
                                        <PenTool className="w-2.5 h-2.5 mr-1" />
                                        Creative Mode
                                      </div>
                                    </div>

                                    {/* Design canvas with vibrant elements */}
                                    <div className="p-3 relative h-full">
                                      {/* Color palette */}
                                      <motion.div 
                                        className="absolute top-2 left-2 flex gap-1.5"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                      >
                                        {["#FF5A5F", "#3A86FF", "#8338EC", "#FFB830", "#06D6A0", "#FB5607"].map((color, i) => (
                                          <motion.div
                                            key={i}
                                            className="w-5 h-5 rounded-full"
                                            style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}80` }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.4 + i * 0.1 }}
                                            whileHover={{ scale: 1.2 }}
                                          />
                                        ))}
                                      </motion.div>

                                      {/* Design layers panel */}
                                      <motion.div
                                        className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm w-24 h-28 rounded border border-gray-700 p-1.5"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                      >
                                        <div className="text-[9px] text-gray-400 mb-1 flex items-center justify-between">
                                          <span>Layers</span>
                                          <span className="text-purple-400">4</span>
                                        </div>
                                        <div className="space-y-1">
                                          {["Header", "Hero Section", "Features", "CTA"].map((layer, i) => (
                                            <motion.div
                                              key={i}
                                              className="text-[8px] bg-gray-800/60 flex items-center justify-between p-1 rounded"
                                              initial={{ opacity: 0, y: 5 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ delay: 0.7 + i * 0.1 }}
                                            >
                                              <span className="text-gray-300">{layer}</span>
                                              <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </motion.div>

                                      {/* Website mock design */}
                                      <motion.div
                                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-28 bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-lg overflow-hidden border border-gray-700/50"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 }}
                                      >
                                        {/* Header */}
                                        <motion.div
                                          className="h-3 w-full bg-gradient-to-r from-purple-600/80 to-indigo-600/80"
                                          initial={{ width: 0 }}
                                          animate={{ width: '100%' }}
                                          transition={{ delay: 1.0, duration: 0.6 }}
                                        />

                                        {/* Hero section with gradient */}
                                        <motion.div
                                          className="h-12 w-full relative overflow-hidden"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 1.2 }}
                                        >
                                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/50 via-purple-700/50 to-pink-800/50" />

                                          {/* Hero content */}
                                          <div className="relative z-10 flex flex-col items-center justify-center h-full p-1">
                                            <motion.div 
                                              className="w-20 h-1.5 bg-white/80 rounded-full mb-1"
                                              initial={{ width: 0 }}
                                              animate={{ width: '20px' }}
                                              transition={{ delay: 1.3, duration: 0.5 }}
                                            />
                                            <motion.div 
                                              className="w-16 h-1 bg-white/60 rounded-full"
                                              initial={{ width: 0 }}
                                              animate={{ width: '16px' }}
                                              transition={{ delay: 1.4, duration: 0.5 }}
                                            />
                                            <motion.div 
                                              className="flex gap-1 mt-1.5"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              transition={{ delay: 1.5 }}
                                            >
                                              <div className="w-4 h-1.5 rounded bg-cyan-500/80" />
                                              <div className="w-4 h-1.5 rounded bg-purple-500/80" />
                                            </motion.div>
                                          </div>
                                        </motion.div>

                                        {/* Content blocks with vibrant colors */}
                                        <div className="p-1 grid grid-cols-2 gap-1">
                                          {[
                                            { color: 'from-cyan-500/70 to-blue-600/70' },
                                            { color: 'from-purple-500/70 to-pink-600/70' },
                                            { color: 'from-amber-500/70 to-orange-600/70' },
                                            { color: 'from-emerald-500/70 to-green-600/70' }
                                          ].map((block, i) => (
                                            <motion.div
                                              key={i}
                                              className={`h-5 rounded bg-gradient-to-br ${block.color}`}
                                              initial={{ opacity: 0, scale: 0.8 }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{ delay: 1.6 + i * 0.1 }}
                                            />
                                          ))}
                                        </div>

                                        {/* Footer */}
                                        <motion.div
                                          className="h-2.5 mt-1 bg-gradient-to-r from-gray-800/80 to-gray-700/80"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 2.0 }}
                                        />
                                      </motion.div>
                                    </div>
                                  </div>
                                </motion.div>

                                {/* Code and Development Visualization */}
                                <motion.div
                                  className="absolute bottom-6 left-6 right-6 h-48 bg-gradient-to-br from-[#0D1117]/90 to-[#161B22]/90 rounded-lg overflow-hidden border border-gray-700 shadow-lg shadow-blue-500/20"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                  {/* Code editor header */}
                                  <div className="h-8 bg-gradient-to-r from-[#1F2937]/95 via-[#111827]/95 to-[#1F2937]/95 flex items-center px-3">
                                    <div className="flex gap-2 w-full items-center">
                                      <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                      </div>
                                      <div className="text-xs bg-[#0D1117]/90 text-blue-300 px-2 py-0.5 rounded-sm flex-grow text-center font-mono">
                                        index.tsx
                                      </div>
                                      <div className="bg-blue-500/30 rounded px-1.5 py-0.5 text-[9px] text-blue-300 flex items-center">
                                        <Code className="w-2 h-2 mr-0.5" />
                                        React
                                      </div>
                                    </div>
                                  </div>

                                  {/* Code editor content */}
                                  <div className="grid grid-cols-5 h-[calc(100%-32px)]">
                                    {/* File explorer */}
                                    <motion.div 
                                      className="col-span-1 bg-[#0D1117]/80 border-r border-gray-800 p-2"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 1.0 }}
                                    >
                                      <div className="text-[10px] text-gray-400 mb-1">Project Files</div>

                                      {/* File tree */}
                                      <div className="space-y-1">
                                        {[
                                          { name: 'src', type: 'folder', color: 'text-blue-400' },
                                          { name: 'components', type: 'subfolder', color: 'text-blue-400', indent: true },
                                          { name: 'Hero.tsx', type: 'file', color: 'text-emerald-400', indent: true, active: true },
                                          { name: 'Navbar.tsx', type: 'file', color: 'text-emerald-400', indent: true },
                                          { name: 'Features.tsx', type: 'file', color: 'text-emerald-400', indent: true },
                                          { name: 'styles', type: 'subfolder', color: 'text-blue-400', indent: true },
                                          { name: 'global.css', type: 'file', color: 'text-purple-400', indent: true },
                                          { name: 'public', type: 'folder', color: 'text-blue-400' },
                                        ].map((file, i) => (
                                          <motion.div
                                            key={i}
                                            className={`text-[8px] flex items-center ${file.active ? 'bg-blue-900/30' : 'bg-transparent'} rounded px-1 py-0.5`}
                                            style={{ marginLeft: file.indent ? '8px' : '0' }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.1 + i * 0.08 }}
                                          >
                                            {file.type === 'folder' && <FolderIcon className={`w-2 h-2 mr-1 ${file.color}`} />}
                                            {file.type === 'subfolder' && <FolderIcon className={`w-2 h-2 mr-1 ${file.color}`} />}
                                            {file.type === 'file' && <FileIcon className={`w-2 h-2 mr-1 ${file.color}`} />}
                                            <span className={`${file.active ? 'text-white' : 'text-gray-400'}`}>{file.name}</span>
                                          </motion.div>
                                        ))}
                                      </div>
                                    </motion.div>

                                    {/* Code editor main area */}
                                    <div className="col-span-4 font-mono p-2 text-[9px] relative">
                                      {/* Syntax highlighted code */}
                                      <div className="space-y-0.5">
                                        {[
                                          { content: 'import React from "react";', color: 'text-gray-400' },
                                          { content: 'import { motion } from "framer-motion";', color: 'text-gray-400' },
                                          { content: 'import "./Hero.css";', color: 'text-gray-400' },
                                          { content: '', color: 'text-white' },
                                          { content: 'const Hero = () => {', color: 'text-pink-400' },
                                          { content: '  return (', color: 'text-white' },
                                          { content: '    <section className="hero-container">', color: 'text-blue-300' },
                                          { content: '      <div className="hero-content">', color: 'text-blue-300' },
                                          { content: '        <motion.h1', color: 'text-orange-400' },
                                          { content: '          initial={{ opacity: 0, y: -20 }}', color: 'text-green-400' },
                                          { content: '          animate={{ opacity: 1, y: 0 }}', color: 'text-green-400', highlight: true },
                                          { content: '          className="hero-title"', color: 'text-purple-400' },
                                          { content: '        >', color: 'text-orange-400' },
                                          { content: '          Modern Web Solutions', color: 'text-amber-300' },
                                          { content: '        </motion.h1>', color: 'text-orange-400' },
                                        ].map((line, i) => (
                                          <motion.div
                                            key={i}
                                            className={`flex items-start ${line.highlight ? 'bg-blue-900/30 -mx-2 px-2 rounded' : ''}`}
                                            initial={{ opacity: 0, x: 5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 + i * 0.05 }}
                                          >
                                            <span className="text-gray-600 w-4 mr-2">{i + 1}</span>
                                            <span className={line.color}>{line.content}</span>
                                          </motion.div>
                                        ))}
                                      </div>

                                      {/* Color preview tooltip */}
                                      <motion.div 
                                        className="absolute top-24 right-6 bg-[#1F2937] shadow-lg rounded p-1.5 border border-gray-700"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 2.0 }}
                                      >
                                        <div className="text-[8px] text-gray-300 mb-1">Color Preview</div>
                                        <div className="flex gap-1">
                                          <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-pink-500 border border-gray-600" />
                                          <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-500 border border-gray-600" />
                                          <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-500 to-orange-500 border border-gray-600" />
                                        </div>
                                      </motion.div>

                                      {/* Live preview badge */}
                                      <motion.div
                                        className="absolute bottom-2 right-2 bg-gradient-to-r from-emerald-600/90 to-green-600/90 text-[8px] px-2 py-1 rounded-full text-white flex items-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2.2 }}
                                      >
                                        <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-1 animate-pulse" />
                                        <span>Live Preview Active</span>
                                      </motion.div>
                                    </div>
                                  </div>
                                </motion.div>

                                {/* Floating tech stack badges */}
                                <motion.div
                                  className="absolute top-3 right-3 flex flex-col gap-2"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 2.3, duration: 0.5 }}
                                >
                                  {[
                                    { icon: <Code className="w-2 h-2 mr-1" />, text: "Responsive Design", color: "from-blue-600 to-cyan-600" },
                                    { icon: <Zap className="w-2 h-2 mr-1" />, text: "Performance Optimized", color: "from-amber-600 to-orange-600" },
                                    { icon: <Shield className="w-2 h-2 mr-1" />, text: "Secure Development", color: "from-emerald-600 to-green-600" }
                                  ].map((badge, i) => (
                                    <motion.div
                                      key={i}
                                      className={`bg-gradient-to-r ${badge.color} px-2 py-1 rounded-md text-[8px] text-white flex items-center shadow-lg`}
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 2.4 + i * 0.1 }}
                                    >
                                      {badge.icon}
                                      <span>{badge.text}</span>
                                    </motion.div>
                                  ))}
                                </motion.div>

                                {/* Mobile preview */}
                                <motion.div
                                  className="absolute bottom-10 left-8 w-20 h-32 bg-black rounded-xl overflow-hidden border-4 border-gray-800 shadow-lg"
                                  initial={{ opacity: 0, x: -20, rotate: -5 }}
                                  animate={{ opacity: 1, x: 0, rotate: -5 }}
                                  transition={{ delay: 2.6 }}
                                >
                                  {/* Mobile screen content */}
                                  <div className="h-full w-full bg-gradient-to-b from-[#111] to-[#222] flex flex-col">
                                    {/* Mobile header */}
                                    <div className="h-1.5 bg-gradient-to-r from-purple-700 to-pink-700" />

                                    {/* Mobile hero */}
                                    <div className="h-8 relative overflow-hidden">
                                      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/50 via-purple-800/50 to-pink-800/50" />
                                      <div className="flex flex-col items-center justify-center h-full">
                                        <div className="w-10 h-0.5 bg-white/70 rounded-full" />
                                        <div className="w-6 h-0.5 bg-white/50 rounded-full mt-0.5" />
                                      </div>
                                    </div>

                                    {/* Mobile content */}
                                    <div className="flex-1 p-1 grid grid-cols-2 gap-1">
                                      <div className="h-4 bg-gradient-to-br from-cyan-600/70 to-blue-700/70 rounded" />
                                      <div className="h-4 bg-gradient-to-br from-purple-600/70 to-pink-700/70 rounded" />
                                      <div className="h-4 bg-gradient-to-br from-amber-600/70 to-orange-700/70 rounded" />
                                      <div className="h-4 bg-gradient-to-br from-emerald-600/70 to-green-700/70 rounded" />
                                    </div>
                                  </div>

                                  {/* Mobile device button */}
                                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-700 rounded-full" />
                                </motion.div>

                                {/* Floating stats badges */}
                                <motion.div
                                  className="absolute left-auto right-10 bottom-28 flex gap-2"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 2.8 }}
                                >
                                  {[
                                    { label: "Performance", value: "98%", color: "text-emerald-400" },
                                    { label: "Accessibility", value: "100%", color: "text-blue-400" },
                                    { label: "SEO Ready", value: "A+", color: "text-purple-400" }
                                  ].map((stat, i) => (
                                    <motion.div
                                      key={i}
                                      className="bg-black/50 backdrop-blur-sm rounded px-2 py-1 border border-gray-700"
                                      initial={{ y: 10, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      transition={{ delay: 2.9 + i * 0.1 }}
                                    >
                                      <div className="text-[8px] text-gray-400">{stat.label}</div>
                                      <div className={`text-xs font-bold ${stat.color}`}>{stat.value}</div>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              </>
                            )}

                            {/* Marketing & Creative Animations */}
                            {service.animationElements === "creative" && (
                              <>
                                {/* AI-powered Marketing dashboard visualization */}
                                <div className="absolute top-5 left-6 right-6 bottom-5 overflow-hidden rounded-lg border border-gray-700 bg-[#1A1A1A]/90 shadow-lg shadow-maverick-orange/10">
                                  {/* Dashboard header */}
                                  <div className="h-10 bg-gradient-to-r from-[#222]/90 to-[#333]/80 flex items-center px-4 justify-between">
                                    <div className="text-sm text-gray-200 font-medium flex items-center">
                                      <Brain className="w-4 h-4 mr-2 text-maverick-orange" />
                                      AI Marketing Command Center
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-sm flex items-center">
                                        <Zap className="w-2 h-2 mr-0.5" />
                                        Live
                                      </div>
                                      <div className="text-[10px] bg-maverick-orange/20 text-maverick-orange px-1.5 py-0.5 rounded-sm">
                                        AI Optimized
                                      </div>
                                    </div>
                                  </div>

                                  {/* Dashboard content */}
                                  <div className="p-4 grid grid-cols-3 gap-3">
                                    {/* Main analytics chart with AI insights */}
                                    <motion.div
                                      className="bg-[#222]/80 rounded-md p-3 col-span-3 border border-gray-700/50"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.3 }}
                                    >
                                      <div className="flex justify-between items-center mb-2">
                                        <div className="text-xs text-gray-300 font-medium">
                                          AI-Optimized Campaign Performance
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <div className="text-[9px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center">
                                            <Brain className="w-2 h-2 mr-0.5" />
                                            Predictive Analysis Active
                                          </div>
                                        </div>
                                      </div>

                                      <div className="relative h-24">
                                        {/* Advanced graph with AI predictions */}
                                        <svg className="w-full h-full">
                                          {/* Grid lines */}
                                          <line
                                            x1="0"
                                            y1="0"
                                            x2="100%"
                                            y2="0"
                                            stroke="#444"
                                            strokeWidth="1"
                                            strokeDasharray="4,4"
                                          />
                                          <line
                                            x1="0"
                                            y1="33%"
                                            x2="100%"
                                            y2="33%"
                                            stroke="#444"
                                            strokeWidth="1"
                                            strokeDasharray="4,4"
                                          />
                                          <line
                                            x1="0"
                                            y1="66%"
                                            x2="100%"
                                            y2="66%"
                                            stroke="#444"
                                            strokeWidth="1"
                                            strokeDasharray="4,4"
                                          />
                                          <line
                                            x1="0"
                                            y1="100%"
                                            x2="100%"
                                            y2="100%"
                                            stroke="#444"
                                            strokeWidth="1"
                                          />

                                          {/* Performance line - Actual */}
                                          <motion.path
                                            d="M0,70 C20,65 40,60 60,40 L60,85 L0,85 Z"
                                            fill={`${service.color}30`}
                                            stroke={service.color}
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{
                                              delay: 0.5,
                                              duration: 1.5,
                                              ease: "easeInOut",
                                            }}
                                          />

                                          {/* Dotted vertical line marking "now" */}
                                          <motion.line
                                            x1="60%"
                                            y1="0"
                                            x2="60%"
                                            y2="100%"
                                            stroke="#666"
                                            strokeWidth="1"
                                            strokeDasharray="4,4"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.8 }}
                                          />

                                          {/* Performance line - AI Prediction */}
                                          <motion.path
                                            d="M60,40 C70,30 85,25 100,20"
                                            fill="none"
                                            stroke={`${service.hoverColor}`}
                                            strokeWidth="2"
                                            strokeDasharray="5,3"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{
                                              delay: 2.0,
                                              duration: 1.2,
                                              ease: "easeInOut",
                                            }}
                                          />

                                          {/* AI insight markers */}
                                          <motion.circle
                                            cx="75%"
                                            cy="28%"
                                            r="4"
                                            fill={service.hoverColor}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 2.3 }}
                                          />

                                          <motion.circle
                                            cx="85%"
                                            cy="24%"
                                            r="4"
                                            fill={service.hoverColor}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 2.5 }}
                                          />
                                        </svg>

                                        {/* AI prediction tooltip */}
                                        <motion.div
                                          className="absolute top-6 right-4 bg-[#333]/90 text-[9px] p-1.5 rounded border border-maverick-amber/40 shadow-lg"
                                          initial={{ opacity: 0, scale: 0.9 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: 2.6 }}
                                        >
                                          <div className="text-maverick-amber font-medium mb-1 flex items-center">
                                            <Brain className="w-2 h-2 mr-1" />
                                            AI Predicted Growth
                                          </div>
                                          <div className="text-white">
                                            +68% ROI with current strategy
                                          </div>
                                        </motion.div>

                                        {/* Legend */}
                                        <div className="absolute bottom-0 left-0 flex items-center gap-3 text-[8px]">
                                          <div className="flex items-center">
                                            <div
                                              className="w-2 h-2 rounded-full mr-1"
                                              style={{
                                                backgroundColor: service.color,
                                              }}
                                            ></div>
                                            <span className="text-gray-300">
                                              Actual
                                            </span>
                                          </div>
                                          <div className="flex items-center">
                                            <div
                                              className="w-2 h-2 rounded-full mr-1"
                                              style={{
                                                backgroundColor:
                                                  service.hoverColor,
                                              }}
                                            ></div>
                                            <span className="text-gray-300">
                                              AI Prediction
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>

                                    {/* AI-driven audience insights */}
                                    <motion.div
                                      className="col-span-3 bg-[#222]/80 rounded-md p-3 border border-gray-700/50"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.6 }}
                                    >
                                      <div className="flex justify-between items-center mb-2">
                                        <div className="text-xs text-gray-300 font-medium">
                                          AI Audience Insights
                                        </div>
                                        <div className="text-[9px] text-gray-400">
                                          Updated 12 min ago
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-5 gap-2">
                                        <motion.div
                                          className="col-span-2 bg-[#333]/70 rounded p-2"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 1.0 }}
                                        >
                                          <div className="text-[9px] text-gray-400 mb-1">
                                            Demographics
                                          </div>
                                          <div className="h-16 relative">
                                            {/* Simple demographic visualization */}
                                            <svg className="w-full h-full">
                                              <rect
                                                x="0"
                                                y="0"
                                                width="20%"
                                                height="100%"
                                                fill="#554488"
                                                rx="2"
                                              />
                                              <rect
                                                x="22%"
                                                y="0"
                                                width="15%"
                                                height="100%"
                                                fill="#775599"
                                                rx="2"
                                              />
                                              <rect
                                                x="39%"
                                                y="0"
                                                width="30%"
                                                height="100%"
                                                fill="#9966aa"
                                                rx="2"
                                              />
                                              <rect
                                                x="71%"
                                                y="0"
                                                width="28%"
                                                height="100%"
                                                fill="#bb77bb"
                                                rx="2"
                                              />

                                              <motion.rect
                                                x="50%"
                                                y="25%"
                                                width="20%"
                                                height="10%"
                                                fill="none"
                                                stroke={service.color}
                                                strokeWidth="2"
                                                rx="4"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2.0 }}
                                              />
                                            </svg>

                                            {/* AI insight */}
                                            <motion.div
                                              className="absolute bottom-0 right-0 text-[8px] bg-maverick-orange/20 rounded px-1 text-maverick-orange"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              transition={{ delay: 2.1 }}
                                            >
                                              <Brain className="w-1.5 h-1.5 inline mr-0.5" />
                                              Target segment identified
                                            </motion.div>
                                          </div>
                                        </motion.div>

                                        <motion.div
                                          className="col-span-3 bg-[#333]/70 rounded p-2"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 1.2 }}
                                        >
                                          <div className="text-[9px] text-gray-400 mb-1">
                                            AI Behavior Analysis
                                          </div>
                                          <div className="flex gap-1 h-16">
                                            {[
                                              {
                                                label: "Engagement",
                                                value: 73,
                                                color: "#5e9dd5",
                                              },
                                              {
                                                label: "Conversion",
                                                value: 42,
                                                color: "#6ac47a",
                                              },
                                              {
                                                label: "Retention",
                                                value: 87,
                                                color: service.color,
                                              },
                                            ].map((metric, idx) => (
                                              <motion.div
                                                key={idx}
                                                className="flex-1 flex flex-col items-center justify-between"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                  delay: 1.4 + idx * 0.2,
                                                }}
                                              >
                                                <div className="text-[8px] text-gray-300">
                                                  {metric.label}
                                                </div>
                                                <div className="w-full h-10 bg-[#444]/50 rounded-sm relative">
                                                  <motion.div
                                                    className="absolute bottom-0 left-0 right-0 rounded-sm"
                                                    style={{
                                                      backgroundColor:
                                                        metric.color,
                                                    }}
                                                    initial={{ height: 0 }}
                                                    animate={{
                                                      height: `${metric.value}%`,
                                                    }}
                                                    transition={{
                                                      delay: 1.6 + idx * 0.2,
                                                      duration: 1,
                                                    }}
                                                  />
                                                </div>
                                                <div
                                                  className="text-[9px] font-medium"
                                                  style={{
                                                    color: metric.color,
                                                  }}
                                                >
                                                  {metric.value}%
                                                </div>
                                              </motion.div>
                                            ))}
                                          </div>
                                        </motion.div>
                                      </div>
                                    </motion.div>

                                    {/* AI-enhanced KPI boxes */}
                                    {[
                                      {
                                        label: "AI-Enhanced Conversion",
                                        value: "+87%",
                                        subtext: "vs. +24% traditional",
                                        color: service.color,
                                        icon: <Brain className="w-3 h-3" />,
                                      },
                                      {
                                        label: "Personalized Engagement",
                                        value: "+112%",
                                        subtext: "audience match rate",
                                        color: service.hoverColor,
                                        icon: <Users className="w-3 h-3" />,
                                      },
                                      {
                                        label: "Predicted ROI",
                                        value: "5.8x",
                                        subtext: "7-day forecast",
                                        color: `${service.color}90`,
                                        icon: <LineChart className="w-3 h-3" />,
                                      },
                                    ].map((kpi, idx) => (
                                      <motion.div
                                        key={idx}
                                        className="bg-[#222]/80 rounded-md p-2 flex flex-col justify-between border border-gray-700/50"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + idx * 0.15 }}
                                      >
                                        <div className="flex justify-between items-center">
                                          <div className="text-[9px] text-gray-400">
                                            {kpi.label}
                                          </div>
                                          <div
                                            className="w-5 h-5 rounded-full flex items-center justify-center"
                                            style={{
                                              backgroundColor: `${kpi.color}30`,
                                            }}
                                          >
                                            {React.cloneElement(
                                              kpi.icon as React.ReactElement,
                                              {
                                                className: `text-${kpi.color}`,
                                              },
                                            )}
                                          </div>
                                        </div>
                                        <div className="flex flex-col">
                                          <div
                                            className="text-lg font-semibold mt-1"
                                            style={{ color: kpi.color }}
                                          >
                                            {kpi.value}
                                          </div>
                                          <div className="text-[8px] text-gray-500">
                                            {kpi.subtext}
                                          </div>
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>

                                  {/* AI Marketing Assistant popup */}
                                  <motion.div
                                    className="absolute bottom-4 right-4 bg-gradient-to-br from-[#222]/90 to-[#333]/90 rounded-lg p-3 w-48 border border-maverick-orange/30 shadow-lg"
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 3.0 }}
                                  >
                                    <div className="flex items-center gap-2 mb-2">
                                      <div className="w-6 h-6 rounded-full bg-maverick-orange/30 flex items-center justify-center">
                                        <Brain className="w-3 h-3 text-maverick-orange" />
                                      </div>
                                      <div className="text-[11px] font-medium text-white">
                                        AI Marketing Assistant
                                      </div>
                                    </div>
                                    <div className="text-[9px] text-gray-300 mb-2">
                                      Recommendation: Increase budget allocation
                                      to Channel 3 by 15% to capitalize on
                                      trending audience segment.
                                    </div>
                                    <div className="text-[8px] text-green-400 mb-1">
                                      Projected outcome:
                                    </div>
                                    <div className="text-[8px] bg-green-500/20 text-green-300 rounded px-1 py-0.5 inline-block">
                                      +28% ROI improvement
                                    </div>
                                  </motion.div>

                                  {/* Value proposition badge */}
                                  <motion.div
                                    className="absolute top-14 left-5 flex flex-col gap-2"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 3.2, duration: 0.5 }}
                                  >
                                    <div className="bg-maverick-orange/20 border border-maverick-orange/40 px-2 py-1 rounded-md text-[9px] text-maverick-orange flex items-center shadow-lg">
                                      <Brain className="w-2.5 h-2.5 mr-1" /><span>
                                                                       AI-driven creative optimization
                                      </span>
                                    </div>
                                  </motion.div>
                                </div>
                              </>
                            )}

                            {/* AI Integration Animations */}
                            {service.animationElements === "ai" && (
                              <>
                                <div className="absolute inset-5 rounded-lg border border-gray-700 bg-gradient-to-br from-[#121212]/95 to-[#1E1E1E]/95 overflow-hidden shadow-lg shadow-maverick-orange/10">
                                  <div className="h-10 bg-[#222]/90 flex items-center px-4 justify-between border-b border-gray-700/50">
                                    <div className="text-sm text-white font-medium flex items-center">
                                      <Brain className="w-4 h-4 mr-2 text-maverick-orange" />
                                      AI Integration Dashboard
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-sm">
                                        Connected
                                      </div>
                                      <div className="text-[10px] bg-maverick-orange/20 text-maverick-orange px-1.5 py-0.5 rounded-sm">
                                        Self-Optimizing
                                      </div>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-5 gap-3 p-4 h-full">
                                    {/* Left side - Business processes */}
                                    <div className="col-span-2 h-full flex flex-col gap-3">
                                      <motion.div
                                        className="bg-[#222]/80 rounded-lg p-3 border border-gray-700/50 flex-grow"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                      >
                                        <div className="text-xs text-gray-300 font-medium mb-2">
                                          Business Processes
                                        </div>

                                        {/* Process list with AI augmentation indicators */}
                                        <div className="space-y-2">
                                          {[
                                            {
                                              name: "Customer Service",
                                              aiValue: "+87% Accuracy",
                                              color: "#6ac47a",
                                            },
                                            {
                                              name: "Inventory Management",
                                              aiValue: "45% Cost Reduction",
                                              color: "#5e9dd5",
                                            },
                                            {
                                              name: "Sales Forecasting",
                                              aiValue: "93% Precision",
                                              color: service.color,
                                            },
                                          ].map((process, idx) => (
                                            <motion.div
                                              key={idx}
                                              className="bg-[#333]/60 rounded p-2 border border-gray-700/30 relative overflow-hidden"
                                              initial={{ opacity: 0, y: 10 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{
                                                delay: 0.5 + idx * 0.2,
                                              }}
                                            >
                                              <div className="flex justify-between items-center">
                                                <div className="text-[11px] text-gray-200">
                                                  {process.name}
                                                </div>
                                                <motion.div
                                                  className="text-[9px] font-medium px-1.5 py-0.5 rounded flex items-center"
                                                  style={{
                                                    color: process.color,
                                                    backgroundColor: `${process.color}20`,
                                                  }}
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 1 }}
                                                  transition={{
                                                    delay: 0.8 + idx * 0.3,
                                                  }}
                                                >
                                                  <Brain className="w-2 h-2 mr-0.5" />
                                                  {process.aiValue}
                                                </motion.div>
                                              </div>

                                              {/* Progress bar showing AI optimization */}
                                              <motion.div
                                                className="absolute bottom-0 left-0 h-0.5"
                                                style={{
                                                  backgroundColor:
                                                    process.color,
                                                }}
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{
                                                  delay: 1.0 + idx * 0.3,
                                                  duration: 1.5,
                                                }}
                                              />
                                            </motion.div>
                                          ))}
                                        </div>

                                        {/* AI integration value */}
                                        <motion.div
                                          className="mt-3 p-2 rounded bg-maverick-orange/20 border border-maverick-orange/30"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 2.0 }}
                                        >
                                          <div className="text-[10px] text-maverick-orange flex items-center mb-1">
                                            <Zap className="w-2.5 h-2.5 mr-1" />
                                            AI Integration Impact
                                          </div>
                                          <div className="text-[9px] text-gray-200">
                                            Overall operational efficiency
                                            increased by 73% with AI-driven
                                            process automation.
                                          </div>
                                        </motion.div>
                                      </motion.div>

                                      <motion.div
                                        className="bg-[#222]/80 rounded-lg p-3 border border-gray-700/50 h-28"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                      >
                                        <div className="text-xs text-gray-300 font-medium mb-2">
                                          ROI Metrics
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                          {[
                                            {
                                              label: "Cost Savings",
                                              value: "62%",
                                              color: "#6ac47a",
                                            },
                                            {
                                              label: "Revenue Gain",
                                              value: "41%",
                                              color: service.color,
                                            },
                                          ].map((metric, idx) => (
                                            <motion.div
                                              key={idx}
                                              className="bg-[#333]/60 p-2 rounded"
                                              initial={{
                                                opacity: 0,
                                                scale: 0.9,
                                              }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{
                                                delay: 1.0 + idx * 0.2,
                                              }}
                                            >
                                              <div className="text-[9px] text-gray-400">
                                                {metric.label}
                                              </div>
                                              <div
                                                className="text-base font-semibold"
                                                style={{ color: metric.color }}
                                              >
                                                {metric.value}
                                              </div>
                                            </motion.div>
                                          ))}
                                        </div>

                                        <motion.div
                                          className="mt-2 bg-[#333]/60 rounded p-1 flex justify-between items-center"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 1.5 }}
                                        >
                                          <div className="text-[9px] text-gray-400">
                                            Implementation Time
                                          </div>
                                          <div className="text-[9px] text-maverick-orange font-medium">
                                            67% Faster
                                          </div>
                                        </motion.div>
                                      </motion.div>
                                    </div>

                                    {/* Center/Right - Neural network visualization */}
                                    <div className="col-span-3 relative flex flex-col gap-3 h-full">
                                      <motion.div
                                        className="flex-grow bg-[#222]/80 rounded-lg p-3 border border-gray-700/50 relative"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                      >
                                        <div className="text-xs text-gray-300 font-medium mb-2">
                                          AI Integration Architecture
                                        </div>

                                        {/* Enhanced neural network visualization */}
                                        <div className="relative w-full h-full flex items-center justify-center p-4">
                                          {/* Container for nodes and connections */}
                                          <div className="relative w-full h-full">
                                            {/* System components on the left */}
                                            <motion.div
                                              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#333]/70 p-2 rounded border border-gray-700/50 w-24"
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: 0.8 }}
                                            >
                                              <div className="text-[9px] text-maverick-orange mb-1">
                                                Business Systems
                                              </div>
                                              <div className="space-y-1 text-[8px] text-gray-300">
                                                <div>• CRM</div>
                                                <div>• ERP</div>
                                                <div>• Analytics</div>
                                              </div>
                                            </motion.div>

                                            {/* Neural network layers */}
                                            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-32 flex justify-center">
                                              {[0, 1, 2].map((layer) => (
                                                <div
                                                  key={layer}
                                                  className="absolute top-0 bottom-0 flex flex-col justify-around"
                                                  style={{
                                                    left: `${20 + layer * 30}%`,
                                                  }}
                                                >
                                                  {/* Layer label */}
                                                  <motion.div
                                                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-[8px] text-gray-400"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                      delay: 1.5 + layer * 0.2,
                                                    }}
                                                  >
                                                    {layer === 0
                                                      ? "Input"
                                                      : layer === 1
                                                        ? "Processing"
                                                        : "Output"}
                                                  </motion.div>

                                                  {/* Nodes in each layer */}
                                                  {[
                                                    ...Array(
                                                      layer === 1 ? 5 : 3,
                                                    ),
                                                  ].map((_, i) => (
                                                    <motion.div
                                                      key={i}
                                                      className="w-5 h-5 rounded-full flex items-center justify-center"
                                                      style={{
                                                        backgroundColor:
                                                          layer === 0
                                                            ? `${service.color}80`
                                                            : layer === 1
                                                              ? `${service.hoverColor}70`
                                                              : `${service.color}60`,boxShadow: `0 0 10px ${service.color}40`,
                                                      }}
                                                      initial={{ scale: 0 }}
                                                      animate={{ scale: 1 }}
                                                      transition={{
                                                        delay:
                                                          0.9 +
                                                          layer * 0.2 +
                                                          i * 0.1,
                                                        duration: 0.5,
                                                      }}
                                                    >
                                                      {layer === 1 &&
                                                        i === 2 && (
                                                          <Brain className="w-3 h-3 text-white" />
                                                        )}
                                                    </motion.div>
                                                  ))}
                                                </div>
                                              ))}

                                              {/* Animated pulses along connections */}
                                              {[0, 1].map((layerFrom) =>
                                                [
                                                  ...Array(
                                                    layerFrom === 0 ? 3 : 5,
                                                  ),
                                                ].map((_, nodeFrom) =>
                                                  [
                                                    ...Array(
                                                      layerFrom === 0 ? 5 : 3,
                                                    ),
                                                  ].map((_, nodeTo) => (
                                                    <motion.div
                                                      key={`${layerFrom}-${nodeFrom}-${nodeTo}`}
                                                      className="absolute w-2 h-2 rounded-full"
                                                      style={{
                                                        backgroundColor:
                                                          service.color,
                                                      }}
                                                      initial={{
                                                        x: `calc(${20 + layerFrom * 30}%)`,
                                                        y: `${((nodeFrom + 1) * 100) / (layerFrom === 0 ? 4 : 6)}%`,
                                                        opacity: 0,
                                                        scale: 0,
                                                      }}
                                                      animate={{
                                                        x: `calc(${20 + (layerFrom + 1) * 30}%)`,
                                                        y: `${((nodeTo + 1) * 100) / (layerFrom === 0 ? 6 : 4)}%`,
                                                        opacity: [0, 1, 0],
                                                        scale: [0, 1, 0],
                                                      }}
                                                      transition={{
                                                        duration: 1.2,
                                                        delay:
                                                          1.8 +
                                                          layerFrom * 0.3 +
                                                          nodeFrom * 0.1 +
                                                          nodeTo * 0.05,
                                                        repeat: Infinity,
                                                        repeatDelay:
                                                          2 + Math.random() * 3,
                                                      }}
                                                    />
                                                  )),
                                                ),
                                              )}
                                            </div>

                                            {/* Output results on the right */}
                                            <motion.div
                                              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#333]/70 p-2 rounded border border-gray-700/50 w-24"
                                              initial={{ opacity: 0, x: 10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: 1.0 }}
                                            >
                                              <div className="text-[9px] text-green-400 mb-1">
                                                AI-Optimized Results
                                              </div>
                                              <div className="space-y-1 text-[8px] text-gray-300">
                                                <div className="flex justify-between items-center">
                                                  <span>Automation</span>
                                                  <span className="text-green-400">
                                                    +89%
                                                  </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                  <span>Accuracy</span>
                                                  <span className="text-green-400">
                                                    +76%
                                                  </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                  <span>Speed</span>
                                                  <span className="text-green-400">
                                                    +94%
                                                  </span>
                                                </div>
                                              </div>
                                            </motion.div>
                                          </div>

                                          {/* Value proposition badge */}
                                          <motion.div
                                            className="absolute top-0 right-0 bg-[#333]/90 px-2 py-1 rounded-bl-lg border-l border-b border-maverick-orange/30 text-[9px] text-maverick-orange flex items-center shadow-md"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                              delay: 2.7,
                                              duration: 0.5,
                                            }}
                                          >
                                            <Brain className="w-2.5 h-2.5 mr-1" />
                                            <span>
                                              Real-time business intelligence
                                            </span>
                                          </motion.div>
                                        </div>
                                      </motion.div>

                                      {/* AI Benefits Overview */}
                                      <motion.div
                                        className="h-28 bg-[#222]/80 rounded-lg p-3 border border-gray-700/50"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 }}
                                      >
                                        <div className="text-xs text-gray-300 font-medium mb-2">
                                          AI Augmented Workforce
                                        </div>

                                        <div className="grid grid-cols-3 gap-2">
                                          {[
                                            {
                                              label: "Productivity Boost",
                                              value: "+143%",
                                              icon: <Zap className="w-3 h-3" />,
                                              color: service.color,
                                            },
                                            {
                                              label: "Decision Quality",
                                              value: "+87%",
                                              icon: (
                                                <Brain className="w-3 h-3" />
                                              ),
                                              color: "#5e9dd5",
                                            },
                                            {
                                              label: "Employee Satisfaction",
                                              value: "+62%",
                                              icon: (
                                                <Users className="w-3 h-3" />
                                              ),
                                              color: "#6ac47a",
                                            },
                                          ].map((benefit, idx) => (
                                            <motion.div
                                              key={idx}
                                              className="bg-[#333]/60 rounded p-2"
                                              initial={{ opacity: 0, y: 10 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{
                                                delay: 1.2 + idx * 0.2,
                                              }}
                                            >
                                              <div className="flex justify-between items-center mb-1">
                                                <div className="text-[8px] text-gray-400">
                                                  {benefit.label}
                                                </div>
                                                <div
                                                  className="w-4 h-4 rounded-full flex items-center justify-center"
                                                  style={{
                                                    backgroundColor: `${benefit.color}30`,
                                                  }}
                                                >
                                                  {React.cloneElement(
                                                    benefit.icon as React.ReactElement,
                                                    {
                                                      className: `text-${benefit.color}`,
                                                    },
                                                  )}
                                                </div>
                                              </div>
                                              <div
                                                className="text-sm font-medium"
                                                style={{ color: benefit.color }}
                                              >
                                                {benefit.value}
                                              </div>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </motion.div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}

                            {/* Support & Maintenance Animations */}
                            {service.animationElements === "support" && (
                              <>
                                <div className="absolute inset-5 rounded-lg border border-gray-700 bg-gradient-to-br from-[#121212]/95 to-[#1A1A1A]/95 overflow-hidden shadow-lg shadow-maverick-orange/10">
                                  {/* Support dashboard visualization */}
                                  <div className="h-10 bg-gradient-to-r from-[#222]/90 to-[#333]/80 flex items-center px-4 justify-between border-b border-gray-700/50">
                                    <div className="text-sm text-white font-medium flex items-center">
                                      <Brain className="w-4 h-4 mr-2 text-maverick-orange" />
                                      AI-Powered System Monitoring
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-sm flex items-center">
                                        <Zap className="w-2 h-2 mr-0.5" />
                                        Live Monitoring
                                      </div>
                                      <div className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-sm flex items-center">
                                        <Brain className="w-2 h-2 mr-0.5" />
                                        Predictive Analysis
                                      </div>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-3 gap-3 p-4">
                                    {/* Left column - System metrics with AI enhancement */}
                                    <div className="col-span-1 flex flex-col gap-3">
                                      <motion.div
                                        className="bg-[#222]/80 rounded-lg p-3 border border-gray-700/50"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                      >
                                        <div className="text-xs text-gray-300 font-medium mb-2 flex justify-between items-center">
                                          <span>System Health</span>
                                          <span className="text-[9px] text-green-400 bg-green-500/10 rounded px-1">
                                            Excellent
                                          </span>
                                        </div>

                                        <div className="space-y-2">
                                          {[
                                            {
                                              label: "Uptime",
                                              value: "99.99%",
                                              status: "optimal",
                                              aiValue: "+0.09%",
                                            },
                                            {
                                              label: "Response",
                                              value: "84ms",
                                              status: "optimal",
                                              aiValue: "-40ms",
                                            },
                                            {
                                              label: "CPU Load",
                                              value: "18%",
                                              status: "optimal",
                                              aiValue: "-6%",
                                            },
                                            {
                                              label: "Memory",
                                              value: "42%",
                                              status: "normal",
                                              aiValue: "-5%",
                                            },
                                          ].map((metric, idx) => (
                                            <motion.div
                                              key={idx}
                                              className="bg-[#333]/60 rounded-md p-2 flex items-center justify-between"
                                              initial={{ opacity: 0, y: 5 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{
                                                delay: 0.4 + idx * 0.15,
                                              }}
                                            >
                                              <span className="text-[10px] text-gray-400">
                                                {metric.label}
                                              </span>
                                              <div className="flex items-center">
                                                <span className="text-xs font-medium mr-2">
                                                  {metric.value}
                                                </span>
                                                <span
                                                  className={`w-2 h-2 rounded-full ${
                                                    metric.status === "optimal"
                                                      ? "bg-green-500"
                                                      : metric.status ===
                                                          "normal"
                                                        ? "bg-blue-500"
                                                        : "bg-yellow-500"
                                                  }`}
                                                />
                                                <motion.span
                                                  className="ml-1 text-[9px] text-green-400"
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 1 }}
                                                  transition={{
                                                    delay: 1.0 + idx * 0.2,
                                                  }}
                                                >
                                                  {metric.aiValue}
                                                </motion.span>
                                              </div>
                                            </motion.div>
                                          ))}
                                        </div>

                                        {/* AI Optimization badge */}
                                        <motion.div
                                          className="mt-2 text-[8px] bg-blue-500/10 text-blue-400 rounded p-1 flex items-center justify-center"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 1.2 }}
                                        >
                                          <Brain className="w-2 h-2 mr-1" />
                                          AI has optimized 6 system parameters
                                          in last 24h
                                        </motion.div>
                                      </motion.div>
                                    </div>

                                    {/* Center column - Activity feed and AI insights */}
                                    <div className="col-span-1 flex flex-col gap-3">
                                      {/* Activity timeline with AI insights */}
                                      <motion.div
                                        className="bg-[#222]/80 rounded-lg p-3 border border-gray-700/50 flex-grow"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                      >
                                        <div className="flex justify-between items-center mb-2">
                                          <div className="text-xs text-gray-300 font-medium">
                                            AI-Enhanced Activity
                                          </div>
                                          <div className="text-[8px] text-gray-500">
                                            Auto-updated
                                          </div>
                                        </div>

                                        <div className="space-y-2.5 relative">
                                          <div className="absolute left-[9px] top-1 bottom-1 w-[1px] bg-gray-700/70"></div>

                                          {[
                                            {
                                              time: "10:45",
                                              action:
                                                "Security vulnerability patched",
                                              status: "success",
                                              ai: true,
                                              aiNote:
                                                "Detected and patched 3h before public disclosure",
                                            },
                                            {
                                              time: "09:20",
                                              action:
                                                "Database optimization complete",
                                              status: "success",
                                              ai: true,
                                              aiNote: "Queries now 72% faster",
                                            },
                                            {
                                              time: "08:05",
                                              action:
                                                "Traffic spike managed automatically",
                                              status: "success",
                                              ai: true,
                                              aiNote:
                                                "Auto-scaled to handle 3.2x load",
                                            },
                                            {
                                              time: "07:30",
                                              action:
                                                "Content delivery optimized",
                                              status: "success",
                                              ai: true,
                                              aiNote:
                                                "Reduced global latency by 37%",
                                            },
                                          ].map((activity, idx) => (
                                            <motion.div
                                              key={idx}
                                              className="pl-5 relative"
                                              initial={{ opacity: 0, x: -5 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{
                                                delay: 0.8 + idx * 0.2,
                                              }}
                                            >
                                              <span
                                                className={`absolute left-0 top-1.5 h-[10px] w-[10px] rounded-full border-2 border-[#222] ${
                                                  activity.status === "success"
                                                    ? "bg-green-500"
                                                    : activity.status ===
                                                        "warning"
                                                      ? "bg-yellow-500"
                                                      : "bg-red-500"
                                                }`}
                                              ></span>

                                              <div className="text-[10px] text-gray-300">
                                                {activity.action}
                                              </div>
                                              <div className="flex justify-between items-center">
                                                <span className="text-[8px] text-gray-500">
                                                  {activity.time}
                                                </span>

                                                {activity.ai && (
                                                  <motion.div
                                                    className="text-[8px] bg-maverick-orange/20 text-maverick-orange px-1 py-0.5 rounded flex items-center"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                      delay: 1.2 + idx * 0.2,
                                                    }}
                                                  >
                                                    <Brain className="w-1.5 h-1.5 mr-0.5" />
                                                    {activity.aiNote}
                                                  </motion.div>
                                                )}
                                              </div>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </motion.div>

                                      {/* Predictive maintenance */}
                                      <motion.div
                                        className="bg-[#222]/80 rounded-lg p-3 border border-gray-700/50"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                      >
                                        <div className="text-xs text-blue-400 font-medium mb-2 flex items-center">
                                          <Brain className="w-3 h-3 mr-1" />
                                          Predictive Maintenance
                                        </div>

                                        <motion.div
                                          className="bg-blue-500/10 border border-blue-500/30 rounded p-2"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 1.6 }}
                                        >
                                          <div className="text-[10px] text-gray-300 mb-1">
                                            AI has detected potential issues:
                                          </div>
                                          <div className="text-[9px] text-gray-400">
                                            Database storage will reach capacity
                                            in ~14 days. Recommended action:
                                            Increase allocation by 20%.
                                          </div>
                                        </motion.div>
                                      </motion.div>
                                    </div>

                                    {/* Right column - Performance monitoring and AI recommendations */}
                                    <div className="col-span-1 flex flex-col gap-3">
                                      {/* Performance trends */}
                                      <motion.div
                                        className="bg-[#222]/80 rounded-lg p-3 border border-gray-700/50"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                      >
                                        <div className="text-xs text-gray-300 font-medium mb-2">
                                          Performance Trends
                                        </div>

                                        <div className="h-20 relative">
                                          <svg className="w-full h-full">
                                            {/* Grid lines */}
                                            <line
                                              x1="0"
                                              y1="0"
                                              x2="100%"
                                              y2="0"
                                              stroke="#444"
                                              strokeWidth="1"
                                              strokeDasharray="2,2"
                                            />
                                            <line
                                              x1="0"
                                              y1="33%"
                                              x2="100%"
                                              y2="33%"
                                              stroke="#444"
                                              strokeWidth="1"
                                              strokeDasharray="2,2"
                                            />
                                            <line
                                              x1="0"
                                              y1="66%"
                                              x2="100%"
                                              y2="66%"
                                              stroke="#444"
                                              strokeWidth="1"
                                              strokeDasharray="2,2"
                                            />
                                            <line
                                              x1="0"
                                              y1="100%"
                                              x2="100%"
                                              y2="100%"
                                              stroke="#444"
                                              strokeWidth="1"
                                            />

                                            {/* Before AI optimization line */}
                                            <motion.path
                                              d="M0,60 C10,65 20,55 30,65 C40,75 50,60 60,50 L60,100 L0,100 Z"
                                              fill="rgba(100,100,150,0.2)"
                                              stroke="#6666aa"
                                              strokeWidth="1"
                                              strokeDasharray="2,2"
                                              initial={{ pathLength: 0 }}
                                              animate={{ pathLength: 1 }}
                                              transition={{
                                                delay: 0.9,
                                                duration: 1,
                                                ease: "easeInOut",
                                              }}
                                            />

                                            {/* Vertical divider showing when AI was implemented */}
                                            <motion.line
                                              x1="60%"
                                              y1="0"
                                              x2="60%"
                                              y2="100%"
                                              stroke={service.color}
                                              strokeWidth="1"
                                              strokeDasharray="3,2"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 0.7 }}
                                              transition={{ delay: 1.2 }}
                                            />

                                            <motion.text
                                              x="60%"
                                              y="10%"
                                              fontSize="8"
                                              fill={service.color}
                                              textAnchor="middle"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              transition={{ delay: 1.4 }}
                                            >
                                              AI Implemented
                                            </motion.text>

{/* After AI optimization line */}
                                            <motion.path
                                              d="M60,50 C70,35 80,25 90,20 C95,15 100,15 100,15 L100,100 L60,100 Z"
                                              fill={`${service.color}40`}
                                              stroke={service.color}
                                              strokeWidth="2"
                                              initial={{ pathLength: 0 }}
                                              animate={{ pathLength: 1 }}
                                              transition={{
                                                delay: 1.5,
                                                duration: 1.5,
                                                ease: "easeInOut",
                                              }}
                                            />
                                          </svg>

                                          {/* Performance improvement callout */}
                                          <motion.div
                                            className="absolute top-2 right-2 text-[8px] bg-[#333]/90 p-1 rounded border border-maverick-orange/30"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 2.2 }}
                                          >
                                            <div className="text-maverick-orange font-medium">
                                              +74% Performance
                                            </div>
                                            <div className="text-[8px] text-gray-300">
                                              with AI optimization
                                            </div>
                                          </motion.div>
                                        </div>

                                        <div className="flex justify-between items-center text-[8px] text-gray-500 mt-1">
                                          <span>30 days ago</span>
                                          <span>Today</span>
                                        </div>
                                      </motion.div>

                                      {/* Current optimization status */}
                                      <motion.div
                                        className="bg-[#222]/80 rounded-lg p-3 border border-gray-700/50"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                      >
                                        <div className="text-xs text-gray-300 font-medium mb-2">
                                          AI Optimization Impact
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                          {[
                                            {
                                              label: "Cost Savings",
                                              value: "48%",
                                              color: "#6ac47a",
                                            },
                                            {
                                              label: "Issue Prevention",
                                              value: "93%",
                                              color: service.color,
                                            },
                                          ].map((metric, idx) => (
                                            <motion.div
                                              key={idx}
                                              className="bg-[#333]/60 rounded p-2"
                                              initial={{
                                                opacity: 0,
                                                scale: 0.9,
                                              }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{
                                                delay: 1.0 + idx * 0.2,
                                              }}
                                            >
                                              <div className="text-[9px] text-gray-400">
                                                {metric.label}
                                              </div>
                                              <div
                                                className="text-base font-semibold"
                                                style={{ color: metric.color }}
                                              >
                                                {metric.value}
                                              </div>
                                            </motion.div>
                                          ))}
                                        </div>

                                        {/* AI Assistant update notification */}
                                        <motion.div
                                          className="mt-3 bg-gradient-to-r from-maverick-orange/20 to-maverick-amber/20 border border-maverick-orange/40 rounded-md p-2"
                                          initial={{ opacity: 0, scale: 0.95 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: 1.8 }}
                                        >
                                          <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center">
                                              <motion.div
                                                className="w-5 h-5 mr-2 rounded-full bg-maverick-orange/30 flex items-center justify-center"
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{
                                                  duration: 2,
                                                  repeat: Infinity,
                                                }}
                                              >
                                                <Brain className="w-3 h-3 text-maverick-orange" />
                                              </motion.div>
                                              <span className="text-[10px] text-maverick-orange font-medium">
                                                AI System Update Available
                                              </span>
                                            </div>
                                            <div className="text-[8px] bg-green-500/20 text-green-400 px-1 py-0.5 rounded">
                                              Recommended
                                            </div>
                                          </div>
                                          <div className="text-[9px] text-gray-300 mb-2">
                                            New AI model will improve threat
                                            detection by 27% and reduce false
                                            positives by 42%.
                                          </div>
                                          <div className="flex justify-end">
                                            <button className="text-[9px] bg-maverick-orange/30 hover:bg-maverick-orange/50 text-white px-2 py-0.5 rounded transition-colors">
                                              Apply Update
                                            </button>
                                          </div>
                                        </motion.div>
                                      </motion.div>
                                    </div>

                                    {/* AI Value Proposition Badge */}
                                    <motion.div
                                      className="absolute top-12 left-4 bg-[#333]/90 border border-maverick-orange/30 shadow-lg px-2 py-1 rounded-md"
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 2.6 }}
                                    >
                                      <div className="text-[9px] text-maverick-orange flex items-center">
                                        <Brain className="w-2.5 h-2.5 mr-1" /><span>
                                          Proactive AI maintenance saves 72% of
                                          potential downtime
                                        </span>
                                      </div>
                                    </motion.div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}