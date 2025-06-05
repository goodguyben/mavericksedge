
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Search, Settings, Paintbrush, Code, Shield, ArrowDown, CheckCircle, Lightbulb, Rocket, Target, Users, TrendingUp } from "lucide-react";

const processSteps = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery",
    description: "We start by understanding your business goals, audience, and challenges to develop a comprehensive strategy.",
    icon: <Search className="h-8 w-8" />,
    graphic: <Lightbulb className="h-20 w-20" />,
    color: "#FF5630"
  },
  {
    id: "strategy",
    step: 2,
    title: "Strategy",
    description: "Based on our findings, we create a tailored strategy and roadmap to achieve your specific objectives.",
    icon: <Target className="h-8 w-8" />,
    graphic: <Target className="h-20 w-20" />,
    color: "#36B37E"
  },
  {
    id: "planning",
    step: 3,
    title: "Planning",
    description: "We develop detailed project plans with timelines, milestones, and resource allocation to ensure efficient execution.",
    icon: <Settings className="h-8 w-8" />,
    graphic: <Settings className="h-20 w-20" />,
    color: "#6554C0"
  },
  {
    id: "design-development",
    step: 4,
    title: "Design & Development",
    description: "Our team creates visually appealing designs and builds robust, scalable solutions using the latest technologies.",
    icon: <Code className="h-8 w-8" />,
    graphic: <Code className="h-20 w-20" />,
    color: "#FFAB00"
  },
  {
    id: "launch",
    step: 5,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.",
    icon: <Rocket className="h-8 w-8" />,
    graphic: <Rocket className="h-20 w-20" />,
    color: "#FF5630"
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth spring animation for the line progress
  const lineProgress = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  // Create individual step progress values
  const stepProgressValues = processSteps.map((_, index) => {
    const stepStart = index / processSteps.length;
    const stepEnd = (index + 1) / processSteps.length;
    return useTransform(scrollYProgress, [stepStart, stepEnd], [0, 1]);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepNumber = parseInt(entry.target.getAttribute('data-step') || '0');
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, stepNumber]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = containerRef.current?.querySelectorAll('[data-step]');
    stepElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] overflow-hidden" ref={containerRef}>
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Our <span className="text-maverick-orange">Process</span>
          </h2>
          <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
            A collaborative approach to delivering exceptional results for your business
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced Animated Progress Line */}
          <div className="absolute left-8 top-0 h-full w-2 rounded-full overflow-hidden">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 rounded-full opacity-50" />
            
            {/* Animated progress line */}
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full origin-top"
              style={{
                height: lineProgress,
                background: "linear-gradient(180deg, #FF5630 0%, #FFAB00 25%, #6554C0 50%, #36B37E 75%, #FF5630 100%)"
              }}
            />
            
            {/* Glowing effect */}
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full origin-top blur-sm"
              style={{
                height: lineProgress,
                background: "linear-gradient(180deg, #FF5630 0%, #FFAB00 25%, #6554C0 50%, #36B37E 75%, #FF5630 100%)",
                opacity: 0.6
              }}
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                data-step={step.step}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              >
                {/* Enhanced Step Circle with Icon */}
                <motion.div
                  className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 transition-all duration-500"
                  style={{
                    backgroundColor: visibleSteps.has(step.step) ? step.color : "#121212",
                    borderColor: visibleSteps.has(step.step) ? step.color : "#374151",
                    boxShadow: visibleSteps.has(step.step) ? `0 0 20px ${step.color}40` : "none"
                  }}
                  animate={visibleSteps.has(step.step) ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <motion.div
                    style={{
                      color: visibleSteps.has(step.step) ? "#FFFFFF" : step.color
                    }}
                    animate={visibleSteps.has(step.step) ? {
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Pulse rings */}
                  {visibleSteps.has(step.step) && (
                    <>
                      {[1, 2, 3].map((ring) => (
                        <motion.div
                          key={ring}
                          className="absolute inset-0 rounded-full border-2 opacity-0"
                          style={{ borderColor: step.color }}
                          animate={{
                            scale: [1, 2, 3],
                            opacity: [0.8, 0.4, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: ring * 0.4,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>

                {/* Enhanced Content Card */}
                <motion.div
                  className="flex-1 bg-gradient-to-br from-[#121212] to-[#1a1a1a] p-8 rounded-2xl border border-gray-800 relative group overflow-hidden"
                  whileHover={{ 
                    y: -8,
                    borderColor: step.color,
                    boxShadow: `0 20px 40px ${step.color}20`
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 70% 30%, ${step.color}40, transparent 50%)`
                    }}
                  />

                  {/* Step Number */}
                  <motion.span
                    className="absolute top-6 right-6 text-7xl font-bold opacity-10 transition-all duration-500"
                    style={{ color: step.color }}
                    animate={visibleSteps.has(step.step) ? {
                      opacity: 0.2,
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    {step.step.toString().padStart(2, '0')}
                  </motion.span>

                  {/* Enhanced Animated Graphic */}
                  <motion.div
                    className="absolute top-8 right-24 opacity-20 transition-all duration-500"
                    style={{ color: step.color }}
                    animate={visibleSteps.has(step.step) ? {
                      opacity: 0.6,
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1],
                      y: [0, -10, 0]
                    } : {}}
                    transition={{ 
                      duration: 4,
                      repeat: visibleSteps.has(step.step) ? Infinity : 0,
                      repeatType: "reverse",
                      delay: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {step.graphic}
                  </motion.div>

                  <div className="relative z-10">
                    <motion.h3
                      className="text-2xl font-semibold mb-4 font-heading transition-colors duration-500"
                      style={{
                        color: visibleSteps.has(step.step) ? step.color : "#FFFFFF"
                      }}
                      animate={visibleSteps.has(step.step) ? {
                        x: [0, 10, 0]
                      } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-[#AAAAAA] text-lg leading-relaxed"
                      animate={visibleSteps.has(step.step) ? {
                        opacity: [0.7, 1],
                        y: [0, -5, 0]
                      } : {}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {step.description}
                    </motion.p>

                    {/* Enhanced progress indicator */}
                    <motion.div
                      className="mt-6 h-2 bg-gray-700 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={visibleSteps.has(step.step) ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${step.color}, ${step.color}80)`
                        }}
                        initial={{ width: "0%" }}
                        animate={visibleSteps.has(step.step) ? { width: "100%" } : {}}
                        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                      />
                    </motion.div>
                  </div>

                  {/* Enhanced particle effects */}
                  {visibleSteps.has(step.step) && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{
                            backgroundColor: step.color,
                            left: `${10 + i * 10}%`,
                            top: `${20 + (i % 3) * 20}%`,
                          }}
                          animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 0.8, 0],
                            y: [0, -30, -60],
                            x: [0, Math.sin(i) * 20, Math.sin(i) * 40]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>

                {/* Enhanced arrow connector */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="absolute left-8 -bottom-10 flex justify-center z-20"
                    animate={visibleSteps.has(step.step) ? {
                      y: [0, 8, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowDown 
                      className="h-6 w-6 drop-shadow-lg" 
                      style={{ color: processSteps[index + 1]?.color || "#FF5630" }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Enhanced completion indicator */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={visibleSteps.size === processSteps.length ? {
              opacity: 1,
              y: 0
            } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-maverick-orange/10 to-green-500/10 border border-maverick-orange rounded-full backdrop-blur-sm"
              animate={visibleSteps.size === processSteps.length ? {
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 rgba(255, 86, 48, 0)",
                  "0 0 30px rgba(255, 86, 48, 0.4)",
                  "0 0 0 rgba(255, 86, 48, 0)"
                ]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
            >
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-maverick-orange font-semibold text-lg">Process Complete</span>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
