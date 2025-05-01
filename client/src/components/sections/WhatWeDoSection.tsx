import React from "react";
import { Code, PenTool, Brain, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function WhatWeDoSection() {
  const isMobile = useIsMobile();
  const services = [
    {
      id: "web-development",
      title: "Web Design & Development",
      description: "Custom digital experiences that engage audiences and drive results.",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: "We create responsive websites and e-commerce platforms aligned with your business goals. Our solutions deliver optimized user journeys, seamless functionality, and scalable architecture built for growth."
    },
    {
      id: "creative-design",
      title: "Marketing & Creative",
      description: "Strategic marketing that connects with your audience and delivers measurable ROI.",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: "We craft compelling brand stories across all touchpoints using effective design, targeted content, and data-driven campaigns to build engagement and drive lasting brand loyalty."
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description: "Practical AI solutions that streamline operations and create competitive advantages.",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details: "We implement accessible AI that delivers real business results by reducing costs, uncovering data insights, and enhancing customer experiences with responsible implementation and clear ROI."
    },
    {
      id: "client-services",
      title: "Ongoing Support & Optimization",
      description: "Proactive maintenance and optimization that keeps your digital assets performing at their best.",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details: "We provide continuous monitoring, updates, and performance tuning as an extension of your team, giving you the technical expertise to adapt to changing market conditions."
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-[#121212]">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We <span className="text-maverick-orange">Do</span></h2>
          <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
            We deliver transformative digital solutions that drive growth, increase efficiency, and create meaningful customer experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Service Card */}
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300 hover-card relative h-full">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-[#AAAAAA] mb-4">{service.description}</p>
                    <p className="text-[#DDDDDD] leading-relaxed">{service.details}</p>
                  </div>
                </div>
              </div>

              {/* Animated border glow effect on hover */}
              <motion.div
                className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-maverick-orange via-maverick-amber to-maverick-orange blur-sm group-hover:blur"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}