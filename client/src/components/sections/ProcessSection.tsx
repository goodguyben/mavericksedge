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
    color: "#FF8A50"
  },
  {
    id: "strategy",
    step: 2,
    title: "Strategy",
    description: "Based on our findings, we create a tailored strategy and roadmap to achieve your specific objectives.",
    icon: <Target className="h-8 w-8" />,
    color: "#FFD74B"
  },
  {
    id: "planning",
    step: 3,
    title: "Planning",
    description: "We develop detailed project plans with timelines, milestones, and resource allocation to ensure efficient execution.",
    icon: <Settings className="h-8 w-8" />,
    color: "#FFC43D"
  },
  {
    id: "design-development",
    step: 4,
    title: "Design & Development",
    description: "Our team creates visually appealing designs and builds robust, scalable solutions using the latest technologies.",
    icon: <Code className="h-8 w-8" />,
    color: "#AE6A4D"
  },
  {
    id: "launch",
    step: 5,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.",
    icon: <Rocket className="h-8 w-8" />,
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
          <div className="absolute left-8 top-0 h-full w-1 bg-gray-700 rounded-full overflow-hidden">
            {/* Animated fill line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-maverick-orange via-maverick-light-orange to-maverick-yellow rounded-full origin-top"
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
                    borderColor: visibleSteps.has(step.step) ? step.color : "#374151",
                    backgroundColor: visibleSteps.has(step.step) ? step.color : "#121212",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    style={{
                      color: visibleSteps.has(step.step) ? "#FFFFFF" : step.color
                    }}
                  >
                    {step.icon}
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-gradient-to-br from-[#121212] to-[#1a1a1a] p-6 rounded-xl border border-gray-800 relative overflow-hidden"
                  whileHover={{ 
                    y: -4,
                    borderColor: step.color,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step Number */}
                  <span
                    className="absolute top-4 right-6 text-6xl font-bold opacity-10"
                    style={{ color: step.color }}
                  >
                    {step.step.toString().padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <h3
                      className="text-2xl font-semibold mb-3 font-heading transition-colors duration-300"
                      style={{
                        color: visibleSteps.has(step.step) ? step.color : "#FFFFFF"
                      }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[#AAAAAA] text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Simple arrow connector */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 -bottom-8 flex justify-center z-20">
                    <ArrowDown 
                      className="h-5 w-5 text-gray-600" 
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Completion indicator */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visibleSteps.size === processSteps.length ? { 
              opacity: 1, 
              scale: 1,
            } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-maverick-orange/20 to-maverick-yellow/20 border-2 rounded-full relative overflow-hidden"
              animate={visibleSteps.size === processSteps.length ? {
                borderColor: ["#FF5630", "#FFD74B", "#FF8A50", "#FF5630"],
                boxShadow: [
                  "0 0 20px rgba(255, 86, 48, 0.3)",
                  "0 0 30px rgba(255, 215, 75, 0.4)",
                  "0 0 25px rgba(255, 138, 80, 0.35)",
                  "0 0 20px rgba(255, 86, 48, 0.3)"
                ]
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: visibleSteps.size === processSteps.length ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-maverick-orange/10 via-maverick-yellow/10 to-maverick-light-orange/10"
                animate={visibleSteps.size === processSteps.length ? {
                  background: [
                    "linear-gradient(90deg, rgba(255, 86, 48, 0.1) 0%, rgba(255, 215, 75, 0.1) 50%, rgba(255, 138, 80, 0.1) 100%)",
                    "linear-gradient(90deg, rgba(255, 215, 75, 0.1) 0%, rgba(255, 138, 80, 0.1) 50%, rgba(255, 86, 48, 0.1) 100%)",
                    "linear-gradient(90deg, rgba(255, 138, 80, 0.1) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 215, 75, 0.1) 100%)"
                  ]
                } : {}}
                transition={{ 
                  duration: 3, 
                  repeat: visibleSteps.size === processSteps.length ? Infinity : 0,
                  ease: "linear"
                }}
              />
              
              <motion.div
                animate={visibleSteps.size === processSteps.length ? {
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ 
                  duration: 2, 
                  repeat: visibleSteps.size === processSteps.length ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <CheckCircle className="h-6 w-6 text-maverick-orange relative z-10" />
              </motion.div>
              
              <motion.span 
                className="text-maverick-orange font-bold text-lg relative z-10"
                animate={visibleSteps.size === processSteps.length ? {
                  textShadow: [
                    "0 0 10px rgba(255, 86, 48, 0.5)",
                    "0 0 20px rgba(255, 215, 75, 0.6)",
                    "0 0 15px rgba(255, 138, 80, 0.5)",
                    "0 0 10px rgba(255, 86, 48, 0.5)"
                  ]
                } : {}}
                transition={{ 
                  duration: 2, 
                  repeat: visibleSteps.size === processSteps.length ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                Process Complete
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}