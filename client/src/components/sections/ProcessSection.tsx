
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Search, Settings, Paintbrush, Code, Shield, ArrowDown, CheckCircle, Lightbulb, Rocket } from "lucide-react";

const processSteps = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery",
    description: "We start by understanding your business goals, audience, and challenges to develop a comprehensive strategy.",
    icon: <Search className="h-8 w-8 text-maverick-orange" />,
    graphic: <Lightbulb className="h-16 w-16 text-maverick-orange/30" />
  },
  {
    id: "strategy",
    step: 2,
    title: "Strategy",
    description: "Based on our findings, we create a tailored strategy and roadmap to achieve your specific objectives.",
    icon: <Settings className="h-8 w-8 text-maverick-orange" />,
    graphic: <Settings className="h-16 w-16 text-maverick-orange/30" />
  },
  {
    id: "planning",
    step: 3,
    title: "Planning",
    description: "We develop detailed project plans with timelines, milestones, and resource allocation to ensure efficient execution.",
    icon: <Paintbrush className="h-8 w-8 text-maverick-orange" />,
    graphic: <CheckCircle className="h-16 w-16 text-maverick-orange/30" />
  },
  {
    id: "design-development",
    step: 4,
    title: "Design & Development",
    description: "Our team creates visually appealing designs and builds robust, scalable solutions using the latest technologies.",
    icon: <Code className="h-8 w-8 text-maverick-orange" />,
    graphic: <Code className="h-16 w-16 text-maverick-orange/30" />
  },
  {
    id: "launch",
    step: 5,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.",
    icon: <Shield className="h-8 w-8 text-maverick-orange" />,
    graphic: <Rocket className="h-16 w-16 text-maverick-orange/30" />
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
      { threshold: 0.6 }
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
          {/* Animated Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-maverick-orange to-orange-400 rounded-full origin-top"
              style={{
                height: `${lineProgress.get()}%`
              }}
              initial={{ height: "0%" }}
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                data-step={step.step}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Circle with Icon */}
                <motion.div
                  className="relative z-10 flex items-center justify-center w-16 h-16 bg-[#121212] border-4 border-gray-700 rounded-full"
                  animate={visibleSteps.has(step.step) ? {
                    borderColor: "#FF5630",
                    backgroundColor: "#FF5630",
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={visibleSteps.has(step.step) ? {
                      color: "#FFFFFF",
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-[#121212] p-8 rounded-xl border border-gray-800 relative group"
                  whileHover={{ 
                    y: -5,
                    borderColor: "#FF5630",
                    boxShadow: "0 10px 30px rgba(255, 86, 48, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Number */}
                  <motion.span
                    className="absolute top-4 right-4 text-6xl font-bold text-maverick-orange opacity-10"
                    animate={visibleSteps.has(step.step) ? {
                      opacity: 0.2,
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {step.step.toString().padStart(2, '0')}
                  </motion.span>

                  {/* Animated Graphic */}
                  <motion.div
                    className="absolute top-6 right-20 opacity-20"
                    animate={visibleSteps.has(step.step) ? {
                      opacity: 0.4,
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ 
                      duration: 2,
                      repeat: visibleSteps.has(step.step) ? Infinity : 0,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  >
                    {step.graphic}
                  </motion.div>

                  <div className="relative z-10">
                    <motion.h3
                      className="text-2xl font-semibold mb-4 font-heading"
                      animate={visibleSteps.has(step.step) ? {
                        color: "#FF5630",
                        x: [0, 10, 0]
                      } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-[#AAAAAA] text-lg leading-relaxed"
                      animate={visibleSteps.has(step.step) ? {
                        opacity: [0.7, 1],
                        y: [0, -5, 0]
                      } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {step.description}
                    </motion.p>

                    {/* Progress indicator for current step */}
                    <motion.div
                      className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={visibleSteps.has(step.step) ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-maverick-orange to-orange-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={visibleSteps.has(step.step) ? { width: "100%" } : {}}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      />
                    </motion.div>
                  </div>

                  {/* Particle effect for active step */}
                  {visibleSteps.has(step.step) && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-maverick-orange rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                            y: [0, -20, -40]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>

                {/* Arrow connector for non-last steps */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="absolute left-8 -bottom-8 flex justify-center"
                    animate={visibleSteps.has(step.step) ? {
                      y: [0, 5, 0],
                      opacity: [0.5, 1, 0.5]
                    } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    <ArrowDown className="h-6 w-6 text-maverick-orange" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Completion indicator */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={visibleSteps.size === processSteps.length ? {
              opacity: 1,
              y: 0
            } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-maverick-orange bg-opacity-10 border border-maverick-orange rounded-full"
              animate={visibleSteps.size === processSteps.length ? {
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 rgba(255, 86, 48, 0)",
                  "0 0 20px rgba(255, 86, 48, 0.3)",
                  "0 0 0 rgba(255, 86, 48, 0)"
                ]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
            >
              <CheckCircle className="h-5 w-5 text-maverick-orange" />
              <span className="text-maverick-orange font-medium">Process Complete</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
