
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Search, Settings, Paintbrush, Code, Shield, ArrowDown, CheckCircle, Lightbulb, Rocket, Target, Users, TrendingUp, Sparkles, Star } from "lucide-react";

const processSteps = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery",
    description: "We start by understanding your business goals, audience, and challenges to develop a comprehensive strategy.",
    icon: <Search className="h-8 w-8" />,
    color: "#FF5630",
    gradient: "from-orange-400/20 via-red-400/10 to-transparent"
  },
  {
    id: "strategy",
    step: 2,
    title: "Strategy",
    description: "Based on our findings, we create a tailored strategy and roadmap to achieve your specific objectives.",
    icon: <Target className="h-8 w-8" />,
    color: "#36B37E",
    gradient: "from-emerald-400/20 via-green-400/10 to-transparent"
  },
  {
    id: "planning",
    step: 3,
    title: "Planning",
    description: "We develop detailed project plans with timelines, milestones, and resource allocation to ensure efficient execution.",
    icon: <Settings className="h-8 w-8" />,
    color: "#6554C0",
    gradient: "from-purple-400/20 via-violet-400/10 to-transparent"
  },
  {
    id: "design-development",
    step: 4,
    title: "Design & Development",
    description: "Our team creates visually appealing designs and builds robust, scalable solutions using the latest technologies.",
    icon: <Code className="h-8 w-8" />,
    color: "#FFAB00",
    gradient: "from-amber-400/20 via-yellow-400/10 to-transparent"
  },
  {
    id: "launch",
    step: 5,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.",
    icon: <Rocket className="h-8 w-8" />,
    color: "#FF5630",
    gradient: "from-orange-400/20 via-red-400/10 to-transparent"
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Enhanced line progress with easing
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const completionProgress = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

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

  const isComplete = visibleSteps.size === processSteps.length;

  return (
    <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] overflow-hidden relative" ref={containerRef}>
      {/* Floating background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(255, 86, 48, 0.03), transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(101, 84, 192, 0.03), transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(54, 179, 126, 0.03), transparent 50%)",
          ]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="p-3 rounded-full bg-gradient-to-r from-maverick-orange/10 to-purple-500/10 backdrop-blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-maverick-orange/80" />
            </motion.div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Our <span className="text-maverick-orange">Process</span>
          </h2>
          <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
            A collaborative approach to delivering exceptional results for your business
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced Vertical Line with Pulse Effect */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-gray-700/50 to-gray-800/30 rounded-full overflow-hidden">
            {/* Animated fill line with glow */}
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full origin-top"
              style={{
                height: lineProgress,
                background: "linear-gradient(180deg, #FF5630 0%, #FFAB00 30%, #6554C0 60%, #36B37E 90%, #FF5630 100%)",
                boxShadow: "0 0 10px rgba(255, 86, 48, 0.5), 0 0 20px rgba(255, 86, 48, 0.3)"
              }}
              initial={{ height: "0%" }}
            />
            
            {/* Pulse effect at the end of the line */}
            <motion.div
              className="absolute w-3 h-3 rounded-full -left-1"
              style={{
                top: lineProgress,
                background: "radial-gradient(circle, #FF5630 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                data-step={step.step}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredStep(step.step)}
                onHoverEnd={() => setHoveredStep(null)}
              >
                {/* Enhanced Step Circle */}
                <motion.div
                  className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 backdrop-blur-md transition-all duration-500"
                  style={{
                    borderColor: visibleSteps.has(step.step) ? `${step.color}40` : "#374151",
                    backgroundColor: visibleSteps.has(step.step) ? `${step.color}15` : "#121212",
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 25px ${step.color}30`
                  }}
                  animate={visibleSteps.has(step.step) ? {
                    boxShadow: [
                      `0 0 0 ${step.color}00`,
                      `0 0 20px ${step.color}20`,
                      `0 0 0 ${step.color}00`
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Floating particles around active step */}
                  <AnimatePresence>
                    {visibleSteps.has(step.step) && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{ backgroundColor: step.color }}
                            initial={{ 
                              opacity: 0,
                              x: 0,
                              y: 0,
                              scale: 0
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                              y: [0, Math.sin(i * 60 * Math.PI / 180) * 40],
                              scale: [0, 1, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  <motion.div
                    style={{
                      color: visibleSteps.has(step.step) ? step.color : "#666666"
                    }}
                    animate={hoveredStep === step.step ? {
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Enhanced Content Card */}
                <motion.div
                  className="flex-1 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-6 rounded-xl border border-white/10 relative overflow-hidden backdrop-blur-sm"
                  whileHover={{ 
                    y: -4,
                    borderColor: `${step.color}30`,
                    backgroundColor: "rgba(255, 255, 255, 0.03)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Subtle background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0`}
                    animate={hoveredStep === step.step ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Animated step number */}
                  <motion.span
                    className="absolute top-4 right-6 text-6xl font-bold opacity-5"
                    style={{ color: step.color }}
                    animate={visibleSteps.has(step.step) ? {
                      opacity: [0.05, 0.15, 0.05],
                      scale: [1, 1.05, 1]
                    } : {}}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {step.step.toString().padStart(2, '0')}
                  </motion.span>

                  {/* Floating corner decoration */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: `${step.color}40` }}
                    animate={visibleSteps.has(step.step) ? {
                      scale: [0, 1, 0.8, 1],
                      opacity: [0, 1, 0.6, 1]
                    } : {}}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />

                  <div className="relative z-10">
                    <motion.h3
                      className="text-2xl font-semibold mb-3 font-heading transition-colors duration-300"
                      style={{
                        color: visibleSteps.has(step.step) ? step.color : "#FFFFFF"
                      }}
                      animate={hoveredStep === step.step ? {
                        x: [0, 5, 0]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p 
                      className="text-[#AAAAAA] text-lg leading-relaxed"
                      animate={hoveredStep === step.step ? {
                        color: "#CCCCCC"
                      } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Enhanced arrow connector with animation */}
                {index < processSteps.length - 1 && (
                  <motion.div 
                    className="absolute left-8 -bottom-8 flex justify-center z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: visibleSteps.has(step.step) ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={visibleSteps.has(step.step) ? {
                        y: [0, 3, 0],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2 
                      }}
                    >
                      <ArrowDown 
                        className="h-5 w-5 text-gray-600" 
                        style={{
                          color: visibleSteps.has(step.step) ? step.color : "#666666"
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Creative Process Complete Animation */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                className="text-center mt-20 relative"
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 50 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  type: "spring",
                  bounce: 0.4
                }}
              >
                {/* Celebration particles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: `hsl(${i * 30}, 70%, 60%)`,
                      left: '50%',
                      top: '50%'
                    }}
                    initial={{ 
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, Math.cos(i * 30 * Math.PI / 180) * 100],
                      y: [0, Math.sin(i * 30 * Math.PI / 180) * 100]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Main completion badge */}
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-maverick-orange/20 via-green-500/20 to-purple-500/20 border-2 border-maverick-orange/30 rounded-full backdrop-blur-md relative overflow-hidden"
                  animate={{
                    borderColor: [
                      "rgba(255, 86, 48, 0.3)",
                      "rgba(54, 179, 126, 0.3)",
                      "rgba(101, 84, 192, 0.3)",
                      "rgba(255, 86, 48, 0.3)"
                    ],
                    boxShadow: [
                      "0 0 20px rgba(255, 86, 48, 0.2)",
                      "0 0 30px rgba(54, 179, 126, 0.2)",
                      "0 0 25px rgba(101, 84, 192, 0.2)",
                      "0 0 20px rgba(255, 86, 48, 0.2)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {/* Sliding background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-maverick-orange/10 via-green-500/10 to-purple-500/10"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Animated checkmark */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </motion.div>

                  {/* Text with typing effect */}
                  <motion.span 
                    className="text-maverick-orange font-semibold text-lg relative z-10"
                    animate={{
                      color: [
                        "#FF5630",
                        "#36B37E", 
                        "#6554C0",
                        "#FF5630"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Process Complete
                  </motion.span>

                  {/* Sparkle effect */}
                  <motion.div
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                </motion.div>

                {/* Success message */}
                <motion.p
                  className="text-gray-400 text-sm mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  Ready to start your journey?
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
