
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  PenTool, 
  Brain, 
  ArrowRight, 
  Play, 
  Pause,
  Smartphone,
  Monitor,
  Tablet
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

export default function WhatWeDoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services: ServiceItem[] = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: <Code className="w-6 h-6" />,
      color: "#E04500",
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "Performance Optimization",
        "SEO Ready"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to boost your online presence and drive meaningful engagement with your audience.",
      icon: <PenTool className="w-6 h-6" />,
      color: "#E57B00",
      features: [
        "Social Media Management",
        "Content Strategy",
        "Brand Development",
        "Analytics & Insights"
      ]
    },
    {
      id: "ai-integration",
      title: "AI Integration",
      description: "Intelligent solutions that automate processes and enhance business operations with cutting-edge artificial intelligence.",
      icon: <Brain className="w-6 h-6" />,
      color: "#FF6B35",
      features: [
        "Process Automation",
        "Data Analytics",
        "Custom AI Solutions",
        "Machine Learning"
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maverick-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We specialize in creating digital solutions that drive growth, enhance user experiences, 
            and transform businesses through innovative technology.
          </p>
        </motion.div>

        {isMobile ? (
          // Mobile version - Stacked cards
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-2 text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

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
            ))}
          </div>
        ) : (
          // Desktop version - Interactive showcase
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Demo Area */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                  initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Mock Interface */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${services[activeIndex].color}20` }}
                        >
                          <div style={{ color: services[activeIndex].color }}>
                            {services[activeIndex].icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {services[activeIndex].title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="bg-black/30 rounded-lg p-6 min-h-[300px]">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {activeIndex === 0 && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm text-gray-400">
                              <span>index.html</span>
                              <div className="flex gap-2">
                                <Monitor className="w-4 h-4" />
                                <Tablet className="w-4 h-4" />
                                <Smartphone className="w-4 h-4" />
                              </div>
                            </div>
                            <div className="font-mono text-green-400 text-sm">
                              {"<div className='hero-section'>"}
                              <br />
                              {"  <h1>Welcome to the Future</h1>"}
                              <br />
                              {"  <p>Responsive • Fast • Modern</p>"}
                              <br />
                              {"</div>"}
                            </div>
                          </div>
                        )}

                        {activeIndex === 1 && (
                          <div className="space-y-4">
                            <div className="text-sm text-gray-400 mb-4">Campaign Analytics</div>
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { label: "Reach", value: "125K", color: "#E04500" },
                                { label: "Engagement", value: "18.5%", color: "#E57B00" },
                                { label: "Clicks", value: "3.2K", color: "#FF6B35" },
                                { label: "Conversions", value: "284", color: "#FFA500" }
                              ].map((metric, idx) => (
                                <motion.div
                                  key={idx}
                                  className="bg-gray-800/50 rounded-lg p-3"
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                  <div className="text-xs text-gray-400">{metric.label}</div>
                                  <div 
                                    className="text-lg font-bold"
                                    style={{ color: metric.color }}
                                  >
                                    {metric.value}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeIndex === 2 && (
                          <div className="space-y-4">
                            <div className="text-sm text-gray-400 mb-4">AI Processing Pipeline</div>
                            <div className="space-y-3">
                              {[
                                { step: "Data Ingestion", status: "complete" },
                                { step: "Pattern Analysis", status: "processing" },
                                { step: "Model Training", status: "pending" },
                                { step: "Output Generation", status: "pending" }
                              ].map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-center gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                  <div className={`w-3 h-3 rounded-full ${
                                    item.status === 'complete' ? 'bg-green-500' :
                                    item.status === 'processing' ? 'bg-yellow-500 animate-pulse' :
                                    'bg-gray-600'
                                  }`} />
                                  <span className="text-gray-300">{item.step}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    {services[activeIndex].title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {services[activeIndex].description}
                  </p>

                  <ul className="space-y-3">
                    {services[activeIndex].features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: services[activeIndex].color }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

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
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4 pt-8">
                {services.map((_, index) => (
                  <motion.button
                    key={index}
                    className="relative"
                    onClick={() => handleDotClick(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full bg-gray-600"
                      animate={{
                        scale: index === activeIndex ? 1.5 : 1,
                        backgroundColor: index === activeIndex ? "#E04500" : "#4B5563"
                      }}
                      transition={{ duration: 0.3 }}
                    />
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
        )}
      </div>
    </section>
  );
}
