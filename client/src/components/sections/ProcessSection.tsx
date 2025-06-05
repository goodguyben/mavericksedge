import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Search, Settings, Paintbrush, Code, Shield, ArrowDown, CheckCircle, Lightbulb, Rocket, Target, Users, TrendingUp } from "lucide-react";

const processSteps = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery",
    description: "We start by understanding your business goals, audience, and challenges to develop a comprehensive strategy.",
    icon: <Search className="h-8 w-8" />,
    color: "#FF8A65"
  },
  {
    id: "strategy",
    step: 2,
    title: "Strategy",
    description: "Based on our findings, we create a tailored strategy and roadmap to achieve your specific objectives.",
    icon: <Target className="h-8 w-8" />,
    color: "#81C784"
  },
  {
    id: "planning",
    step: 3,
    title: "Planning",
    description: "We develop detailed project plans with timelines, milestones, and resource allocation to ensure efficient execution.",
    icon: <Settings className="h-8 w-8" />,
    color: "#9575CD"
  },
  {
    id: "design-development",
    step: 4,
    title: "Design & Development",
    description: "Our team creates visually appealing designs and builds robust, scalable solutions using the latest technologies.",
    icon: <Code className="h-8 w-8" />,
    color: "#FFB74D"
  },
  {
    id: "launch",
    step: 5,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.",
    icon: <Rocket className="h-8 w-8" />,
    color: "#64B5F6"
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Simple line progress based on scroll
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
      { threshold: 0.5 }
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
          {/* Vertical Line with Fill Effect */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gray-700/40 rounded-full overflow-hidden">
            {/* Animated fill line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FF8A65]/80 via-[#FFB74D]/60 to-[#64B5F6]/70 rounded-full origin-top"
              style={{
                height: lineProgress,
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Circle */}
                <motion.div
                  className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 bg-[#121212] transition-all duration-300"
                  style={{
                    borderColor: visibleSteps.has(step.step) ? `${step.color}80` : "#374151",
                    backgroundColor: visibleSteps.has(step.step) ? `${step.color}20` : "#121212",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    style={{
                      color: visibleSteps.has(step.step) ? step.color : `${step.color}80`
                    }}
                    animate={visibleSteps.has(step.step) ? {
                      scale: [1, 1.1, 1],
                      rotate: step.id === "discovery" ? [0, 10, -10, 0] :
                              step.id === "strategy" ? [0, -5, 5, 0] :
                              step.id === "planning" ? [0, 360] :
                              step.id === "design-development" ? [0, 15, -15, 0] :
                              [0, 20, 0]
                    } : {}}
                    transition={{
                      duration: step.id === "planning" ? 2 : 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-gradient-to-br from-[#121212] to-[#1a1a1a] p-6 rounded-xl border border-gray-800/60 relative overflow-hidden"
                  whileHover={{ 
                    y: -4,
                    borderColor: `${step.color}60`,
                    backgroundColor: `${step.color}05`
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step Number */}
                  <span
                    className="absolute top-4 right-6 text-6xl font-bold opacity-[0.08]"
                    style={{ color: step.color }}
                  >
                    {step.step.toString().padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <h3
                      className="text-2xl font-semibold mb-3 font-heading transition-colors duration-300"
                      style={{
                        color: visibleSteps.has(step.step) ? `${step.color}E6` : "#FFFFFF"
                      }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[#AAAAAA] text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                </motion.div>
            ))}
          </div>

          {/* Creative Process Completion Animation */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visibleSteps.size === processSteps.length ? { 
              opacity: 1, 
              scale: 1,
            } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <motion.div
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF8A65]/10 via-[#81C784]/10 to-[#64B5F6]/10 border-2 rounded-full overflow-hidden"
              style={{
                borderColor: visibleSteps.size === processSteps.length ? "#81C784" : "transparent"
              }}
              animate={visibleSteps.size === processSteps.length ? {
                boxShadow: [
                  "0 0 0 rgba(129, 199, 132, 0)",
                  "0 0 20px rgba(129, 199, 132, 0.3)",
                  "0 0 40px rgba(129, 199, 132, 0.2)",
                  "0 0 20px rgba(129, 199, 132, 0.3)",
                  "0 0 0 rgba(129, 199, 132, 0)"
                ]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Animated background pulse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#81C784]/20 via-[#64B5F6]/20 to-[#FF8A65]/20 rounded-full"
                animate={visibleSteps.size === processSteps.length ? {
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Completion icon with animation */}
              <motion.div
                animate={visibleSteps.size === processSteps.length ? {
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                } : {}}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              >
                <CheckCircle className="h-6 w-6 text-[#81C784] relative z-10" />
              </motion.div>
              
              {/* Text with subtle animation */}
              <motion.span
                className="text-[#81C784] font-semibold text-lg relative z-10"
                animate={visibleSteps.size === processSteps.length ? {
                  scale: [1, 1.02, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Process Complete
              </motion.span>
              
              {/* Particle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#81C784] rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 2) * 40}%`
                  }}
                  animate={visibleSteps.size === processSteps.length ? {
                    y: [-10, -20, -10],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}