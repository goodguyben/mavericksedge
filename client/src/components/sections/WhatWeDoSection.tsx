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
import ScrollReveal from "@/components/ui/ScrollReveal";

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

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What We{" "}
              <span className="relative inline-block">
                <GradientText 
                  colors={["#E65F34", "#FF5630", "#FFB899", "#E65F34"]}
                  animationSpeed={5}
                >
                  Do
                </GradientText>
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