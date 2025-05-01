
import React from "react";
import { Code, PenTool, Brain, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";
import CustomButton from "@/components/ui/custom-button";

export function WhatWeDoSection() {
  const isMobile = useMobile();
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
    <section id="what-we-do" className="py-12 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What We Do</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive digital solutions tailored to your unique business challenges and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <CustomButton href={`/services#${service.id}`} variant="outline" className="mt-auto">
                Learn More
              </CustomButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
