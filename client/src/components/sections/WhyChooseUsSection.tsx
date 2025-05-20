
import React, { useState, useRef } from "react";
import { Zap, Heart, FlaskConical, BookOpen, Smile as SmileIcon, Users, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyChooseUsSection() {
  const [activeReason, setActiveReason] = useState("efficiency");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-10 h-10 text-maverick-orange" />,
      color: "#FF5A00",
      stats: [
        { value: "87%", label: "Time saved with automation" },
        { value: "3.5x", label: "ROI improvement" }
      ]
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you'll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-10 h-10 text-maverick-orange" />,
      color: "#FF7000",
      stats: [
        { value: "98%", label: "Client satisfaction" },
        { value: "24/7", label: "Project visibility" }
      ]
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We're passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-10 h-10 text-maverick-orange" />,
      color: "#FF8C00",
      stats: [
        { value: "12+", label: "Emerging technologies" },
        { value: "90%", label: "Ahead of market trends" }
      ]
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There's no 'one size fits all' approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-10 h-10 text-maverick-orange" />,
      color: "#FF7A30",
      stats: [
        { value: "200+", label: "Market analysis completed" },
        { value: "3x", label: "Deeper audience insights" }
      ]
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don't always go as planned, and we're here to make sure you're never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-10 h-10 text-maverick-orange" />,
      color: "#FFA200",
      stats: [
        { value: "100%", label: "Budget transparency" },
        { value: "0", label: "Surprise fees" }
      ]
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-10 h-10 text-maverick-orange" />,
      color: "#FF9030",
      stats: [
        { value: "85%", label: "Client retention rate" },
        { value: "4.7yrs", label: "Average partnership length" }
      ]
    }
  ];

  const getReasonById = (id: string) => {
    return reasons.find(reason => reason.id === id);
  };

  return (
    <section ref={sectionRef} className="py-24 px-5 md:px-10 bg-[#141414] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-bl from-maverick-orange/20 to-transparent opacity-30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute -bottom-32 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr from-maverick-amber/20 to-transparent opacity-20 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -45, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

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
            className="inline-block px-6 py-2 bg-maverick-orange/10 rounded-full border border-maverick-orange/20 mb-6"
          >
            <span className="text-maverick-orange font-medium">Why clients choose us</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Why Choose <span className="text-maverick-orange">Mavericks Edge</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-maverick-orange to-maverick-amber"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-[#BBBBBB] text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That's why our services are flexible, transparent, and built around long-term sustainability.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          style={{ opacity, y }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onClick={() => setActiveReason(reason.id)}
            >
              <motion.div 
                className={`bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 h-full flex flex-col relative overflow-hidden transition-all duration-300 ${activeReason === reason.id ? 'ring-2 ring-maverick-orange/50 shadow-lg shadow-maverick-orange/10' : 'hover:shadow-md hover:shadow-maverick-orange/5'}`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Accent color top border */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: reason.color }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                />
                
                {/* Background glow effect */}
                <motion.div
                  className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-20 blur-3xl"
                  style={{ backgroundColor: reason.color }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1] 
                  }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                />

                <div className="flex items-center gap-5 mb-4">
                  <motion.div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${reason.color}30` }}
                    animate={{ 
                      scale: activeReason === reason.id ? [1, 1.1, 1] : 1,
                      rotate: activeReason === reason.id ? [0, 5, 0, -5, 0] : 0 
                    }}
                    transition={{ duration: 2, repeat: activeReason === reason.id ? Infinity : 0, repeatDelay: 1 }}
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold">{reason.title}</h3>
                </div>
                
                <p className="text-[#AAAAAA] mb-6 flex-grow">{reason.description}</p>

                {/* Stats section */}
                <motion.div 
                  className="grid grid-cols-2 gap-3 mt-auto"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {reason.stats.map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#222]/50 p-3 rounded-lg border border-gray-800/50"
                    >
                      <div className="text-xl font-bold" style={{ color: reason.color }}>{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Indicator for active reason */}
                {activeReason === reason.id && (
                  <motion.div
                    className="absolute right-3 bottom-3 text-maverick-orange"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learn more button */}
        <div className="text-center">
          <motion.button
            className="px-6 py-3 bg-maverick-orange text-white rounded-lg font-medium inline-flex items-center gap-2 shadow-md shadow-maverick-orange/20"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px -5px rgba(255, 90, 0, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Learn about our approach <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
