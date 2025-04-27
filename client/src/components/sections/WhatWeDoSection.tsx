
import { motion } from "framer-motion";
import { Code, PenTool, Lightbulb, Database } from "lucide-react";

export default function WhatWeDoSection() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "We create responsive, high-performance websites and web applications tailored to your specific business needs.",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: [
        "Custom front-end development",
        "Responsive design",
        "E-commerce solutions",
        "Progressive web apps"
      ]
    },
    {
      id: "creative-design",
      title: "Creative Design",
      description: "Our design team delivers stunning visuals that enhance your brand and create memorable user experiences.",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: [
        "UI/UX design",
        "Brand identity",
        "Motion graphics",
        "Illustration"
      ]
    },
    {
      id: "digital-strategy",
      title: "Digital Strategy",
      description: "We help you develop comprehensive digital strategies that drive growth and enhance your online presence.",
      icon: <Lightbulb className="w-12 h-12 text-maverick-orange" />,
      details: [
        "Market research",
        "Competitive analysis",
        "SEO optimization",
        "Content strategy"
      ]
    },
    {
      id: "ai-integration",
      title: "AI Integration",
      description: "Leverage the power of artificial intelligence to automate processes and gain valuable insights from your data.",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details: [
        "Machine learning implementation",
        "Chatbots & virtual assistants",
        "Data analysis & visualization",
        "Process automation"
      ]
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
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300 h-full">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-[#AAAAAA] mb-4">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="text-[#DDDDDD] flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-maverick-orange mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
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
