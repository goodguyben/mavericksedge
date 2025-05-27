import React, { useState, useRef } from "react";
import {
  Code,
  Brain,
  Database,
  ArrowRight,
  LineChart,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "wouter";

export default function WhatWeDoSection() {
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = useState("web-development");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      description: "Creating responsive, fast, and user-friendly websites that drive results.",
      features: ["Custom Development", "E-commerce Solutions", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: <LineChart className="w-8 h-8" />,
      description: "Strategic marketing campaigns that boost your brand visibility and engagement.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "ai-integration",
      title: "AI Integration",
      icon: <Brain className="w-8 h-8" />,
      description: "Implementing cutting-edge AI solutions to automate and enhance your business.",
      features: ["Machine Learning", "Process Automation", "Data Analytics"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "data-solutions",
      title: "Data Solutions",
      icon: <Database className="w-8 h-8" />,
      description: "Transforming raw data into actionable insights for better decision making.",
      features: ["Data Analytics", "Business Intelligence", "Custom Dashboards"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{ y }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We specialize in cutting-edge digital solutions that transform businesses 
            and drive innovation in the modern marketplace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setActiveService(service.id)}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Service Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link href="/services" className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
            Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}