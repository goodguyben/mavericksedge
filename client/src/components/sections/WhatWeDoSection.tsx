
import React from "react";
import { Code, PenTool, Brain, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function WhatWeDoSection() {
  const isMobile = useIsMobile();
  const services = [
    {
      id: "web-development",
      title: "Web & Digital Solutions",
      description: "Transform your online presence with custom digital experiences that captivate your audience and drive conversions.",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: "From stunning responsive websites to powerful e-commerce platforms, we craft digital solutions that align perfectly with your business goals. Our development approach ensures your digital presence isn't just visually impressive but also delivers measurable business outcomes through optimized user journeys, seamless functionality, and strategic architecture that scales with your growth."
    },
    {
      id: "creative-design",
      title: "Marketing & Creative Services",
      description: "Elevate your brand with strategic marketing that connects with your target audience and delivers measurable ROI.",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: "We don't just create marketing—we craft compelling brand stories that resonate with your audience across all touchpoints. Our integrated approach combines powerful visual design, targeted content strategies, and data-driven campaigns to build meaningful connections with your customers, increasing engagement and creating lasting brand loyalty while delivering quantifiable business results."
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description: "Harness the transformative power of AI to unlock hidden insights, automate workflows, and create competitive advantages.",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details: "We make AI accessible and practical for your business, turning complex technologies into tangible advantages. Our solutions help you reduce operational costs, uncover valuable data insights, and create intelligent customer experiences that set you apart. We focus on responsible AI implementation that enhances human capabilities rather than replacing them, with clear ROI and change management support."
    },
    {
      id: "client-services",
      title: "Ongoing Support & Optimization",
      description: "Ensure your digital investments continue to perform at their peak with proactive maintenance and continuous improvement.",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details: "Digital success requires ongoing attention, not just initial implementation. Our support services provide peace of mind through proactive monitoring, regular updates, and performance optimization that keeps your digital assets secure and effective. We become an extension of your team, providing the technical expertise to adapt to changing market conditions and technology landscapes while you focus on your core business."
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
