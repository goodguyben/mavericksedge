
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Search, Lightbulb, Code, LineChart, Zap, Check, ArrowRight } from "lucide-react";

// Define process steps
const processSteps = [
  {
    id: "discovery",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and current challenges through in-depth research and analysis.",
    icon: <Search className="w-6 h-6 text-maverick-orange" />,
    color: "#FF5A00",
    details: [
      "Stakeholder interviews",
      "Market research",
      "Competitive analysis",
      "User research"
    ]
  },
  {
    id: "strategy",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy and roadmap tailored to your specific business needs and objectives.",
    icon: <Lightbulb className="w-6 h-6 text-maverick-orange" />,
    color: "#FF7A30",
    details: [
      "Solution architecture",
      "Technical requirements",
      "Project roadmap",
      "Resource planning"
    ]
  },
  {
    id: "creation",
    title: "Creation",
    description: "Our team brings your vision to life through iterative design and development cycles, ensuring quality at every step.",
    icon: <Code className="w-6 h-6 text-maverick-orange" />,
    color: "#FF8C00",
    details: [
      "UI/UX design",
      "Frontend development",
      "Backend integration",
      "Content creation"
    ]
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "We continuously test, refine, and optimize your solution to ensure peak performance and user satisfaction.",
    icon: <LineChart className="w-6 h-6 text-maverick-orange" />,
    color: "#FFA200",
    details: [
      "Performance testing",
      "User testing",
      "A/B testing",
      "Iterative improvements"
    ]
  },
  {
    id: "launch",
    title: "Launch",
    description: "We manage all aspects of the deployment process to ensure a seamless and successful launch of your project.",
    icon: <Zap className="w-6 h-6 text-maverick-orange" />,
    color: "#FF9030",
    details: [
      "Deployment planning",
      "Quality assurance",
      "Launch strategy",
      "Training & documentation"
    ]
  },
  {
    id: "growth",
    title: "Growth",
    description: "Our relationship continues as we help you scale, maintain, and evolve your digital solution for long-term success.",
    icon: <Check className="w-6 h-6 text-maverick-orange" />,
    color: "#FF7000",
    details: [
      "Analytics & reporting",
      "Ongoing optimization",
      "Maintenance & support",
      "Future enhancements"
    ]
  }
];

// Individual Process Card component
function ProcessCard({ step, isActive, onClick, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative w-72 h-96 rounded-xl p-6 flex flex-col cursor-pointer transition-all duration-300 ${isActive ? 'bg-[#1A1A1A] shadow-lg shadow-maverick-orange/10' : 'bg-[#1A1A1A]/50 hover:bg-[#1A1A1A]/70'}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Step number circle */}
      <motion.div 
        className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
        style={{ backgroundColor: step.color }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 + 0.3 }}
      >
        {index + 1}
      </motion.div>
      
      {/* Active indicator */}
      {isActive && (
        <motion.div 
          className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-maverick-orange flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring" }}
        >
          <Check className="w-5 h-5 text-white" />
        </motion.div>
      )}
      
      {/* Icon */}
      <motion.div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
        style={{ backgroundColor: `${step.color}30` }}
        animate={isActive ? { 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0, -5, 0]
        } : {}}
        transition={{ duration: 2, repeat: isActive ? Infinity : 0, repeatDelay: 1 }}
      >
        {step.icon}
      </motion.div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
      <p className="text-[#AAAAAA] text-sm mb-5">{step.description}</p>
      
      {/* Details */}
      <div className="mt-auto">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">What we do:</h4>
        <ul className="space-y-1">
          {step.details.map((detail, i) => (
            <motion.li 
              key={i} 
              className="text-sm text-gray-300 flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + (i * 0.1) }}
            >
              <ChevronRight className="w-3 h-3 text-maverick-orange shrink-0 mt-1" />
              <span>{detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      
      {/* Active progress bar */}
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-maverick-orange to-maverick-amber"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.div>
  );
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState("discovery");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section ref={sectionRef} className="py-24 px-5 md:px-10 bg-[#1E1E1E] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-maverick-orange/10 to-transparent opacity-30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-maverick-amber/10 to-transparent opacity-20 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>

      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-maverick-orange/10 rounded-full border border-maverick-orange/20 mb-6"
          >
            <span className="text-maverick-orange font-medium flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              How we work
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our <span className="text-maverick-orange relative inline-block">
              Process
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 w-full bg-maverick-orange"
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-[#AAAAAA] text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A collaborative approach to delivering exceptional results for your business
          </motion.p>
        </motion.div>

        {/* Process steps navigation */}
        <motion.div 
          className="flex justify-center flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {processSteps.map((step, index) => (
            <motion.button
              key={step.id}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                activeStep === step.id 
                  ? 'bg-gradient-to-r from-maverick-orange/20 to-maverick-amber/10 text-white shadow-md shadow-maverick-orange/10'
                  : 'bg-[#1A1A1A]/30 text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setActiveStep(step.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <motion.div
                animate={{ 
                  scale: activeStep === step.id ? 1.1 : 1,
                  rotate: activeStep === step.id ? [0, 10, 0, -10, 0] : 0
                }}
                transition={{ duration: 1.5, repeat: activeStep === step.id ? Infinity : 0, repeatDelay: 0.5 }}
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  activeStep === step.id ? 'bg-maverick-orange/30' : 'bg-[#222]/50'
                }`}
              >
                {React.cloneElement(step.icon, { 
                  className: `w-4 h-4 ${activeStep === step.id ? 'text-maverick-orange' : 'text-gray-500'}` 
                })}
              </motion.div>
              
              <span className="font-medium">
                {step.title}
              </span>
              
              {/* Active indicator */}
              {activeStep === step.id && (
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-maverick-orange"
                  layoutId="activeProcessStep"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Process cards visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 transform -translate-y-1/2 z-0"></div>
          
          {/* Process steps timeline */}
          <div className="overflow-auto no-scrollbar pb-8 mask-edges">
            <div className="flex gap-8 pl-4 pr-20 min-w-max justify-center md:justify-start">
              {processSteps.map((step, index) => (
                <ProcessCard 
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeStep === step.id}
                  onClick={() => setActiveStep(step.id)}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-xl text-white font-medium shadow-lg shadow-maverick-orange/20 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(255, 90, 0, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Start your project with us 
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
