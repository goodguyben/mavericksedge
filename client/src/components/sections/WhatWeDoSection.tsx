
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
      description: "Transform your online presence with custom digital experiences that engage your audience and drive results.",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: "From responsive websites to powerful e-commerce platforms, we build solutions aligned with your goals. Our development ensures a visually stunning, high-performing digital presence with optimized user journeys, seamless functionality, and scalable architecture to support your growth."
    },
    {
      id: "creative-design",
      title: "Marketing & Creative",
      description: "Elevate your brand with strategic marketing that connects with your target audience and delivers measurable ROI.",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: "We don’t just market—we craft compelling brand stories that connect across every touchpoint. Through visual design, targeted content, and data-driven campaigns, we build strong customer relationships, boost engagement, and drive lasting brand loyalty with clear, quantifiable results."
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description: "Harness the power of AI to unlock insights, automate workflows, and gain a competitive edge.",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details: "We make AI practical and accessible, turning complex tech into real results. Our solutions reduce costs, surface valuable data, and enhance customer experiences. With a focus on responsible implementation, we boost human potential—not replace it—backed by clear ROI and change management support."
    },
    {
      id: "client-services",
      title: "Ongoing Support & Optimization",
      description: "Ensure your digital investments perform at their best with proactive maintenance and ongoing optimization.",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details: "Digital success doesn’t stop at launch—our support services offer peace of mind through monitoring, updates, and performance tuning. As an extension of your team, we provide the technical expertise to adapt to evolving market and tech landscapes, so you can stay focused on your core business."
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
