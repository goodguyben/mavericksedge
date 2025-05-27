import React, { useState, useRef } from "react";
import {
  Code,
  PenTool,
  Brain,
  Database,
  ArrowRight,
  Zap,
  LineChart,
  Shield,
  FileIcon,
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

        {/* Core Services Cascading Section */}
        <div className="mt-32 mb-20">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover how we transform your vision into reality through our specialized services
            </p>
          </motion.div>

          {/* Web Design & Development Cascade */}
          <div className="mb-24">
            <motion.h4
              className="text-2xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Web Design & Development
            </motion.h4>
            
            {/* Step 1 - Left text, Right image */}
            <motion.div
              className="flex flex-col lg:flex-row items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex-1 lg:pr-8">
                <h5 className="text-xl font-semibold text-white mb-4">Custom Web Solutions</h5>
                <p className="text-gray-300 leading-relaxed">
                  We craft bespoke websites tailored to your unique business needs and brand identity. 
                  Our development process ensures scalable, secure, and lightning-fast performance that keeps your visitors engaged.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/30">
                  <Code className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <div className="text-center text-gray-300">Custom Development</div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Right text, Left image */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex-1 lg:pl-8">
                <h5 className="text-xl font-semibold text-white mb-4">E-commerce Excellence</h5>
                <p className="text-gray-300 leading-relaxed">
                  Transform your business with powerful e-commerce platforms that drive sales and enhance customer experience. 
                  We integrate secure payment systems, inventory management, and analytics to maximize your online revenue.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm border border-yellow-500/30">
                  <Database className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <div className="text-center text-gray-300">E-commerce Solutions</div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 - Left text, Right image */}
            <motion.div
              className="flex flex-col lg:flex-row items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex-1 lg:pr-8">
                <h5 className="text-xl font-semibold text-white mb-4">Performance Optimization</h5>
                <p className="text-gray-300 leading-relaxed">
                  Speed matters in the digital world. We optimize your website for blazing-fast load times and superior user experience. 
                  Our performance enhancements boost SEO rankings and increase conversion rates significantly.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/30">
                  <Zap className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <div className="text-center text-gray-300">Speed Optimization</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Marketing & Creative Cascade */}
          <div className="mb-24">
            <motion.h4
              className="text-2xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Marketing & Creative
            </motion.h4>
            
            {/* Step 1 - Left text, Right image */}
            <motion.div
              className="flex flex-col lg:flex-row items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex-1 lg:pr-8">
                <h5 className="text-xl font-semibold text-white mb-4">Brand Strategy & Design</h5>
                <p className="text-gray-300 leading-relaxed">
                  We create compelling brand identities that resonate with your target audience and stand out in competitive markets. 
                  Our strategic approach combines visual design with market research to build memorable brand experiences.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
                  <PenTool className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <div className="text-center text-gray-300">Brand Strategy</div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Right text, Left image */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex-1 lg:pl-8">
                <h5 className="text-xl font-semibold text-white mb-4">Digital Marketing Campaigns</h5>
                <p className="text-gray-300 leading-relaxed">
                  Drive targeted traffic and maximize ROI with our data-driven marketing campaigns across all digital channels. 
                  We leverage analytics and user behavior insights to create campaigns that convert prospects into loyal customers.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl p-8 backdrop-blur-sm border border-pink-500/30">
                  <LineChart className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                  <div className="text-center text-gray-300">Digital Campaigns</div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 - Left text, Right image */}
            <motion.div
              className="flex flex-col lg:flex-row items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex-1 lg:pr-8">
                <h5 className="text-xl font-semibold text-white mb-4">Content Creation & SEO</h5>
                <p className="text-gray-300 leading-relaxed">
                  Engage your audience with high-quality content that ranks well in search engines and drives organic traffic. 
                  Our content strategy combines storytelling with SEO best practices to build authority and trust in your industry.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm border border-red-500/30">
                  <FileIcon className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <div className="text-center text-gray-300">Content & SEO</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* AI Integration & Automation Cascade */}
          <div className="mb-24">
            <motion.h4
              className="text-2xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              AI Integration & Automation
            </motion.h4>
            
            {/* Step 1 - Left text, Right image */}
            <motion.div
              className="flex flex-col lg:flex-row items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex-1 lg:pr-8">
                <h5 className="text-xl font-semibold text-white mb-4">Smart Process Automation</h5>
                <p className="text-gray-300 leading-relaxed">
                  Streamline your operations with intelligent automation that reduces manual work and eliminates human error. 
                  Our AI-powered solutions handle repetitive tasks, allowing your team to focus on strategic initiatives that drive growth.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 backdrop-blur-sm border border-emerald-500/30">
                  <Brain className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <div className="text-center text-gray-300">Process Automation</div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Right text, Left image */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex-1 lg:pl-8">
                <h5 className="text-xl font-semibold text-white mb-4">Machine Learning Integration</h5>
                <p className="text-gray-300 leading-relaxed">
                  Harness the power of machine learning to gain predictive insights and make data-driven decisions. 
                  We implement custom ML models that learn from your data patterns to optimize performance and predict future trends.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-teal-500/30">
                  <Shield className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                  <div className="text-center text-gray-300">Machine Learning</div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 - Left text, Right image */}
            <motion.div
              className="flex flex-col lg:flex-row items-center mb-16 gap-8 lg:gap-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex-1 lg:pr-8">
                <h5 className="text-xl font-semibold text-white mb-4">Intelligent Analytics & Insights</h5>
                <p className="text-gray-300 leading-relaxed">
                  Transform raw data into actionable business intelligence with AI-powered analytics dashboards. 
                  Our systems provide real-time insights and recommendations that help you stay ahead of market trends and customer needs.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                  <LineChart className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <div className="text-center text-gray-300">AI Analytics</div>
                </div>
              </div>
            </motion.div>
          </div>
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