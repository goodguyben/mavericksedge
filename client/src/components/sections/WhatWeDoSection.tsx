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
import GradientText from "@/components/ui/GradientText";

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
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const currentIndex = services.findIndex(
        (service) => service.id === activeService,
      );
      const nextIndex = (currentIndex + 1) % services.length;
      setActiveService(services[nextIndex].id);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeService, services, isAutoPlaying]);

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
        <header className="text-center mt-[-16px] mb-[-16px]">
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

            
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What We <span className="text-maverick-orange relative inline-block">
              <GradientText
                colors={["#ff5630", "#ffab00", "#ff5630", "#ffab00", "#ff5630"]}
              >
                Do
              </GradientText>
            </span>
          </h2>

            <div className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              We offer a range of services, from building and optimizing websites and e-commerce platforms to developing strategic marketing campaigns and integrating AI solutions for automation. Our goal is to provide customized, impactful solutions that drive results.
            </div>
          </motion.div>
        </header>

        {isMobile ? (
          // Mobile/Tablet version - Mimics desktop layout with graphics
          (<motion.div className="relative min-h-[500px]" style={{ opacity, y }}>
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
                                    ```
Here's the modified code with SplitText components removed and replaced with regular text:
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
          </motion.div>)
        ) : (
          // Desktop version - Interactive showcase
          (<motion.div className="relative min-h-[500px]" style={{ opacity, y }}>
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
                                          { contentreturn (
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
        <header className="text-center mt-[-16px] mb-[-16px]">
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

            
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What We <span className="text-maverick-orange relative inline-block">
              <GradientText
                colors={["#ff5630", "#ffab00", "#ff5630", "#ffab00", "#ff5630"]}
                animationSpeed={6}
              >
                Do
              </GradientText>
            </span>
          </h2>

            <div className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              We offer a range of services, from building and optimizing websites and e-commerce platforms to developing strategic marketing campaigns and integrating AI solutions for automation. Our goal is to provide customized, impactful solutions that drive results.
            </div>
          </motion.div>
        </header>

        {isMobile ? (
          // Mobile/Tablet version - Mimics desktop layout with graphics
          (<motion.div className="relative min-h-[500px]" style={{ opacity, y }}>
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
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </motion.div>)
        )}
      </div>
    </section>
  );
}