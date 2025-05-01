import { motion } from "framer-motion";
import { Code, PenTool, Brain, Database } from "lucide-react";

export default function WhatWeDoSection() {
  const services = [
    {
      id: "web-development",
      title: "Web & Digital Solutions",
      description: "We create responsive, high-performance websites and web applications tailored to your specific business needs.",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: "Our web development services include custom website design and development, CMS customization, e-commerce platform integration, web application development, UX/UI design, and third-party API integrations. We also provide website operations support with hosting, maintenance, performance optimization, security audits, and accessibility compliance."
    },
    {
      id: "creative-design",
      title: "Marketing & Creative Services",
      description: "Our marketing team delivers comprehensive digital strategies and creative solutions to enhance your brand presence.",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: "We offer strategic marketing solutions including digital marketing strategy development, brand identity creation, graphic design for web and print, SEO optimization, PPC advertising management, social media strategy, email marketing campaigns, and conversion rate optimization. Our data-driven approach ensures measurable results and ROI."
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description: "We help you leverage cutting-edge AI technologies to streamline operations and gain valuable insights from your data.",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details: "Our AI integration services include AI readiness assessment, custom AI roadmap development, platform selection, workflow automation, chatbot implementation, custom API integration with leading AI platforms, and private knowledge assistants using vector databases. We ensure secure, privacy-first AI deployment with proper governance and staff training."
    },
    {
      id: "client-services",
      title: "Ongoing Support & Optimization",
      description: "We provide continuous support to ensure your digital solutions remain effective, secure, and up-to-date.",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details: "Our ongoing services include website maintenance, content updates, performance monitoring, security patches, analytics reporting, SEO refinement, and regular consultations. We offer flexible support plans tailored to your needs, ensuring your digital presence continues to deliver results and adapt to changing technologies."
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
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
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