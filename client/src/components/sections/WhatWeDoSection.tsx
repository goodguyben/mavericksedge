import React, { useState, useRef, useEffect } from "react";
import {
  Code,
  PenTool,
  Brain,
  Database,
  ArrowRight,
  Zap,
  Users,
  LineChart,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function WhatWeDoSection() {
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = useState("web-development");
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

    const interval = setInterval(() => {
      const currentIndex = services.findIndex(
        (service) => service.id === activeService,
      );
      const nextIndex = (currentIndex + 1) % services.length;
      setActiveService(services[nextIndex].id);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeService, isMobile, services]);

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
            We deliver transformative digital solutions that drive real business
            growth, increase operational efficiency, and create meaningful
            customer experiences that keep them coming back for more
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
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? "" : service.id,
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: activeService === service.id ? 90 : 0,
                      }}
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
                        <p className="text-maverick-orange text-sm italic mb-2">
                          "{service.tagline}"
                        </p>
                        <p className="text-[#AAAAAA] mb-3">
                          {service.description}
                        </p>
                        <p className="text-[#DDDDDD] leading-relaxed text-sm mb-3">
                          {service.details}
                        </p>

                        <div className="mb-2">
                          <h4 className="text-sm font-semibold mb-2 text-white">
                            Key Benefits:
                          </h4>
                          <ul className="space-y-1.5">
                            {service.valueProps.map((prop, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-xs"
                              >
                                <span className="mr-1.5 mt-0.5 text-maverick-orange">
                                  •
                                </span>
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
                            className="mt-20" // Increased top margin to move content further down
                          >
                            <h3 className="text-3xl lg:text-4xl font-bold mb-2">
                              {service.title}
                            </h3>
                            <p className="text-maverick-orange text-lg italic mb-4">
                              "{service.tagline}"
                            </p>
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
                                  <div className="mr-2 mt-1 text-maverick-orange">
                                    •
                                  </div>
                                  <span className="text-[#DDDDDD]">{prop}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>

                          <motion.button
                            className="px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300"
                            style={{
                              background: `linear-gradient(90deg, ${service.color} 0%, ${service.hoverColor} 100%)`,
                            }}
                            whileHover={{
                              scale: 1.05,
                              boxShadow: `0 10px 25px -5px ${service.color}40`,
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
                                {/* AI-powered code editor visualization */}
                                <div className="absolute top-6 left-6 right-6 h-40 rounded-lg bg-[#1E1E1E]/80 overflow-hidden border border-gray-700 shadow-lg shadow-maverick-orange/10">
                                  {/* Header bar of code editor */}
                                  <div className="h-8 bg-[#333]/90 flex items-center px-3 justify-between">
                                    <div className="flex gap-1.5">
                                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="text-xs text-gray-300 font-mono">
                                      smart-website-builder.js
                                    </div>
                                    <div className="text-xs text-maverick-orange bg-maverick-orange/20 px-2 py-0.5 rounded-sm flex items-center backdrop-blur-sm">
                                      <Brain className="w-3 h-3 mr-1" />
                                      AI Assistant
                                    </div>
                                  </div>

                                  {/* Code lines with AI suggestions */}
                                  <div className="p-3 font-mono">
                                    {[...Array(5)].map((_, i) => (
                                      <motion.div
                                        key={i}
                                        className="flex items-center gap-2 text-xs"
                                      >
                                        <span className="text-gray-500 w-4">
                                          {i + 1}
                                        </span>
                                        <motion.div
                                          className="h-3 rounded-full flex items-center"
                                          style={{
                                            width: `${60 + Math.random() * 30}%`,
                                            backgroundColor:
                                              i % 3 === 0
                                                ? `${service.color}40`
                                                : i % 3 === 1
                                                  ? "#5e9dd580"
                                                  : "#99bbff40",
                                          }}
                                          initial={{ scaleX: 0, originX: 0 }}
                                          animate={{ scaleX: 1 }}
                                          transition={{
                                            delay: 0.3 + i * 0.15,
                                            duration: 0.8,
                                            ease: "easeOut",
                                          }}
                                        >
                                          {i === 2 && (
                                            <motion.span
                                              className="ml-2 text-green-300 whitespace-nowrap"
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              transition={{ delay: 1.5 }}
                                            >
                                              optimizeUserJourney(analytics_data)
                                            </motion.span>
                                          )}
                                        </motion.div>
                                      </motion.div>
                                    ))}

                                    {/* AI-generated suggestions */}
                                    <motion.div
                                      className="mt-3 flex items-start gap-2 text-xs"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: 1.2 }}
                                    >
                                      <span className="text-gray-500 w-4">
                                        6
                                      </span>
                                      <div className="flex-1">
                                        <div className="bg-maverick-orange/20 border-l-2 border-maverick-orange rounded px-2 py-1 text-[10px]">
                                          <div className="flex items-center text-maverick-orange font-medium mb-1">
                                            <Brain className="w-3 h-3 mr-1" />
                                            AI Suggestion: Personalize User
                                            Experience
                                          </div>
                                          <div className="text-gray-300">
                                            <span className="text-green-400">
                                              +
                                            </span>{" "}
                                            Implementing AI-driven user behavior
                                            analysis can increase conversions by
                                            65%
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>

                                    <motion.div
                                      className="mt-2 flex items-start gap-2 text-xs"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: 1.6 }}
                                    >
                                      <span className="text-gray-500 w-4">
                                        7
                                      </span>
                                      <div className="flex-1">
                                        <div className="bg-blue-500/20 border-l-2 border-blue-500 rounded px-2 py-1 text-[10px]">
                                          <div className="flex items-center text-blue-300 font-medium mb-1">
                                            <Zap className="w-3 h-3 mr-1" />
                                            Performance Boost: Implement Smart
                                            Caching
                                          </div>
                                          <div className="text-gray-300">
                                            <span className="text-blue-400">
                                              →
                                            </span>{" "}
                                            Add predictive content loading for
                                            78% faster page transitions
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  </div>
                                </div>

                                {/* Browser preview with AI insights */}
                                <motion.div
                                  className="absolute bottom-6 left-6 right-6 h-44 bg-white/10 rounded-lg overflow-hidden border border-gray-700 shadow-lg shadow-maverick-orange/10"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 1.2, duration: 0.5 }}
                                >
                                  {/* Browser header with AI indicator */}
                                  <div className="h-8 bg-[#333]/90 flex items-center px-3">
                                    <div className="flex gap-2 w-full items-center">
                                      <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-gray-500/70"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-gray-500/70"></div>
                                      </div>
                                      <div className="text-xs bg-[#222]/90 text-gray-300 px-2 py-0.5 rounded-sm flex-grow text-center">
                                        mavericksedge.com
                                      </div>
                                      <div className="bg-green-500/30 rounded px-1.5 py-0.5 text-[9px] text-green-300 flex items-center">
                                        <Zap className="w-2 h-2 mr-0.5" />
                                        AI Enhanced
                                      </div>
                                    </div>
                                  </div>

                                  {/* Website preview with AI augmentation */}
                                  <div className="p-4 flex flex-col h-full">
                                    <div className="flex gap-3 mb-3">
                                      <div className="w-1/3 relative">
                                        <motion.div
                                          className="h-16 w-full bg-gradient-to-br from-maverick-orange/40 to-maverick-amber/20 rounded-md flex items-center justify-center"
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay: 1.4,
                                            duration: 0.3,
                                          }}
                                        >
                                          <motion.div
                                            className="w-10 h-10 bg-maverick-orange/30 rounded-full flex items-center justify-center"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{
                                              duration: 3,
                                              repeat: Infinity,
                                            }}
                                          >
                                            <Brain className="w-5 h-5 text-maverick-orange" />
                                          </motion.div>
                                        </motion.div>
                                        <motion.div
                                          className="absolute -top-2 -right-2 bg-green-500/90 rounded-full px-1.5 py-0.5 text-[8px] text-white flex items-center"
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          transition={{
                                            delay: 1.9,
                                            type: "spring",
                                          }}
                                        >
                                          <Zap className="w-1.5 h-1.5 mr-0.5" />
                                          +93% Engagement
                                        </motion.div>
                                      </div>

                                      <div className="flex-grow flex flex-col gap-2">
                                        <motion.div
                                          className="h-4 w-full bg-gray-400/30 rounded-sm"
                                          initial={{ opacity: 0, width: 0 }}
                                          animate={{
                                            opacity: 1,
                                            width: "100%",
                                          }}
                                          transition={{
                                            delay: 1.5,
                                            duration: 0.4,
                                          }}
                                        />
                                        <motion.div
                                          className="h-4 w-5/6 bg-gray-400/30 rounded-sm"
                                          initial={{ opacity: 0, width: 0 }}
                                          animate={{
                                            opacity: 1,
                                            width: "83.333%",
                                          }}
                                          transition={{
                                            delay: 1.6,
                                            duration: 0.4,
                                          }}
                                        />
                                        <motion.div
                                          className="h-4 w-4/6 bg-gray-400/30 rounded-sm"
                                          initial={{ opacity: 0, width: 0 }}
                                          animate={{
                                            opacity: 1,
                                            width: "66.666%",
                                          }}
                                          transition={{
                                            delay: 1.7,
                                            duration: 0.4,
                                          }}
                                        />
                                      </div>
                                    </div>

                                    {/* Personalization overlay */}
                                    <motion.div
                                      className="mt-1 bg-[#222]/80 rounded-md p-2 border border-maverick-orange/20"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 2.0 }}
                                    >
                                      <div className="flex justify-between items-center mb-1">
                                        <div className="text-[10px] text-maverick-orange font-medium flex items-center">
                                          <Brain className="w-2.5```text
 h-2.5 mr-1" />
                                          AI-Powered Personalization
                                        </div>
                                        <div className="text-[9px] text-gray-400">
                                          Real-time adapting
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-3 gap-1">
                                        <div className="text-[8px] bg-[#333]/80 p-1 rounded text-gray-300">
                                          <span className="text-green-400 block">
                                            +84%
                                          </span>
                                          Conversion Rate
                                        </div>
                                        <div className="text-[8px] bg-[#333]/80 p-1 rounded text-gray-300">
                                          <span className="text-blue-400 block">
                                            -35%
                                          </span>
                                          Bounce Rate
                                        </div>
                                        <div className="text-[8px] bg-[#333]/80 p-1 rounded text-gray-300">
                                          <span className="text-purple-400 block">
                                            +108%
                                          </span>
                                          Avg Time on Site
                                        </div>
                                      </div>
                                    </motion.div>

                                    {/* AI insights dashboard */}
                                    <motion.div
                                      className="mt-auto bg-gradient-to-r from-[#222]/90 to-[#333]/90 rounded-md border border-gray-700 flex items-center px-2 py-1.5 gap-4 text-[9px]"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: 2.2 }}
                                    >
                                      <div className="flex items-center text-green-400">
                                        <Zap className="w-2.5 h-2.5 mr-1" />
                                        <span>Page Speed: +82%</span>
                                      </div>
                                      <div className="flex items-center text-blue-400">
                                        <Users className="w-2.5 h-2.5 mr-1" />
                                        <span>User Retention: +59%</span>
                                      </div>
                                      <div className="flex items-center text-purple-400">
                                        <LineChart className="w-2.5 h-2.5 mr-1" />
                                        <span>Revenue: +73%</span>
                                      </div>
                                      <div className="ml-auto flex items-center text-maverick-orange">
                                        <Brain className="w-2.5 h-2.5 mr-1" />
                                        <span>AI Optimizations: 14</span>
                                      </div>
                                    </motion.div>
                                  </div>
                                </motion.div>

                                {/* Value proposition badges */}
                                <motion.div
                                  className="absolute top-2 right-2 flex flex-col gap-2"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 2.5, duration: 0.5 }}
                                >
                                  <div className="bg-[#222]/90 px-2 py-1 rounded-md border border-maverick-orange/30 text-[9px] text-white flex items-center">
                                    <Zap className="w-2 h-2 mr-1 text-maverick-orange" />
                                    <span>Self-optimizing websites</span>
                                  </div>
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
                                      <Brain className="w-2.5 h-2.5 mr-1" />
                                      <span>
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
                                            <div className="text-gray-300">
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
                                        <Brain className="w-2.5 h-2.5 mr-1" />
                                        <span>
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