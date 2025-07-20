import { motion } from "framer-motion";
import { Brain, Database, Workflow, Shield, FileCode, Users, Gauge, Zap, Activity, LineChart } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { useEffect } from "react";

export default function AIServices() {
  // Track page view for analytics
  useEffect(() => {
    console.log("AI Services page viewed");
  }, []);
  const services = [
    {
      icon: <Gauge className="h-10 w-10 text-maverick-orange" />,
      title: "AI Readiness Assessment",
      description: "Comprehensive evaluation of your current systems, workflows, and data to determine AI integration readiness and opportunities."
    },
    {
      icon: <Brain className="h-10 w-10 text-maverick-orange" />,
      title: "Custom AI Integration Roadmap",
      description: "Tailored strategic roadmap for integrating AI into your business processes, prioritizing high-impact, low-effort implementations."
    },
    {
      icon: <Activity className="h-10 w-10 text-maverick-orange" />,
      title: "AI Tool & Platform Selection",
      description: "Expert consultation to identify the most suitable AI tools and platforms for your specific business needs and objectives."
    },
    {
      icon: <FileCode className="h-10 w-10 text-maverick-orange" />,
      title: "Custom API Integration",
      description: "Specialized integration of leading AI platforms like OpenAI, Google Gemini, and Anthropic Claude into your existing systems."
    },
    {
      icon: <Zap className="h-10 w-10 text-maverick-orange" />,
      title: "AI Feature Development",
      description: "Development of custom AI features and functionalities to enhance your existing software and applications."
    },
    {
      icon: <Workflow className="h-10 w-10 text-maverick-orange" />,
      title: "Workflow & Process Automation",
      description: "Implementation of AI-powered automation for business processes like invoicing, customer support, and lead engagement."
    },
    {
      icon: <Database className="h-10 w-10 text-maverick-orange" />,
      title: "Data Cleansing & Structuring",
      description: "Preparation and optimization of your data for effective AI applications and improved machine learning outcomes."
    },
    {
      icon: <LineChart className="h-10 w-10 text-maverick-orange" />,
      title: "AI Data Governance Strategy",
      description: "Development of comprehensive strategies and frameworks for responsible AI data management and governance."
    },
    {
      icon: <Users className="h-10 w-10 text-maverick-orange" />,
      title: "AI Training & Implementation",
      description: "Comprehensive training programs to help your team effectively utilize new AI tools and adapt to improved workflows."
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Secure & Compliant AI Setup",
      description: "Implementation of AI solutions with strong security measures and compliance with regulations including PIPEDA."
    },
    {
      icon: <Brain className="h-10 w-10 text-maverick-orange" />,
      title: "Custom AI Applications",
      description: "We develop custom AI solutions to streamline your core operations. Our expertise in generative AI and machine learning enables us to build powerful automation tools like an AI sales representative that nurtures leads, an automated inventory management system, or an intelligent platform for logistics optimization."
    }
  ];

  return (
    <div>
      <SEOHead 
        title="AI Integration Services | Business Automation Solutions | Mavericks Edge"
        description="Transform your business with AI integration and automation solutions. Streamline operations, enhance decision-making, and improve customer experiences with our tailored AI services."
        keywords="AI integration, business automation, AI readiness assessment, workflow automation, AI implementation, custom API integration, AI data governance, small business AI solutions"
        canonicalUrl="/services/ai"
        ogTitle="AI Integration Services | Business Automation Solutions | Mavericks Edge"
        ogDescription="Transform your business with AI integration and automation solutions. Streamline operations, enhance decision-making, and improve customer experiences."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
        ogType="website"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      {/* Hero Section */}
      <div className="pt-44 md:pt-48 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">AI Integration & Automation</h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mb-8">
                Harness the transformative power of artificial intelligence to streamline operations, enhance decision-making, and create exceptional customer experiences.
              </p>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                  Get a free consultation
                </a>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-[#1A1A1A] p-1 rounded-lg border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Services" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Network Services */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our AI Integration Services</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We offer a comprehensive suite of AI services to transform your business operations
            </p>
          </motion.div>

          {/* Neural Network Layout */}
          <div className="relative min-h-[800px] md:min-h-[1000px]">
            {/* Connection Lines Background */}
            <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              
              {/* Animated connection lines */}
              <motion.path
                d="M 100,150 Q 400,200 700,250"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path
                d="M 200,350 Q 500,300 800,450"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              />
              <motion.path
                d="M 150,600 Q 450,550 750,700"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              />
            </svg>

            {/* Service Nodes */}
            <div className="absolute inset-0" style={{ zIndex: 2 }}>
              {services.map((service, index) => {
                // Position services in a neural network pattern
                const positions: Array<{ top: string; left: string; size: 'small' | 'medium' | 'large' }> = [
                  { top: '10%', left: '15%', size: 'large' }, // Top left
                  { top: '5%', left: '50%', size: 'medium' }, // Top center
                  { top: '15%', left: '80%', size: 'large' }, // Top right
                  { top: '35%', left: '25%', size: 'medium' }, // Mid left
                  { top: '40%', left: '60%', size: 'large' }, // Center
                  { top: '45%', left: '85%', size: 'medium' }, // Mid right
                  { top: '65%', left: '20%', size: 'large' }, // Bottom left
                  { top: '70%', left: '50%', size: 'medium' }, // Bottom center
                  { top: '75%', left: '75%', size: 'large' }, // Bottom right
                ];

                // Ensure we don't exceed available positions, cycle if needed
                const position = positions[index % positions.length];
                const sizeClasses: Record<'small' | 'medium' | 'large', string> = {
                  small: 'w-48 h-48',
                  medium: 'w-52 h-52',
                  large: 'w-56 h-56'
                };

                return (
                  <motion.div
                    key={index}
                    className={`absolute ${sizeClasses[position.size]} transform -translate-x-1/2 -translate-y-1/2`}
                    style={{
                      top: position.top,
                      left: position.left,
                    }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Hexagonal Container */}
                    <div className="relative w-full h-full group cursor-pointer">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-maverick-orange opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-full"></div>
                      
                      {/* Main Hexagonal Shape */}
                      <div 
                        className="relative w-full h-full bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] border-2 border-gray-700 group-hover:border-maverick-orange transition-all duration-500 backdrop-blur-sm"
                        style={{
                          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        }}
                      >
                        {/* Content */}
                        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                          {/* Icon */}
                          <motion.div
                            className="mb-3 p-2 rounded-lg bg-maverick-orange bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {service.icon}
                          </motion.div>
                          
                          {/* Title */}
                          <h3 className="text-sm font-bold mb-2 font-heading text-white group-hover:text-maverick-orange transition-colors duration-300 leading-tight">
                            {service.title}
                          </h3>
                          
                          {/* Description - Hidden by default, shown on hover */}
                          <motion.p 
                            className="text-xs text-[#AAAAAA] opacity-0 group-hover:opacity-100 transition-all duration-300 leading-tight"
                            initial={{ height: 0 }}
                            whileHover={{ height: "auto" }}
                          >
                            {service.description.slice(0, 80)}...
                          </motion.p>
                        </div>

                        {/* Floating Particles */}
                        <motion.div
                          className="absolute top-1/4 right-1/4 w-2 h-2 bg-maverick-orange rounded-full opacity-60"
                          animate={{
                            x: [0, 10, -5, 0],
                            y: [0, -10, 5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </div>

                      {/* Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-maverick-orange opacity-0 group-hover:opacity-50"
                        style={{
                          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Central AI Core */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-20"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity },
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-maverick-orange to-yellow-400 rounded-full blur-lg opacity-60"></div>
              <Brain className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-white z-10" />
            </motion.div>
          </div>

          {/* Mobile Fallback */}
          <div className="md:hidden grid grid-cols-1 gap-6 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-6 border border-gray-700 hover:border-maverick-orange transition-all duration-300 group"
              >
                <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 font-heading group-hover:text-maverick-orange transition-colors duration-300">{service.title}</h3>
                <p className="text-[#AAAAAA] group-hover:text-[#DDDDDD] transition-all duration-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-maverick-orange rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-maverick-orange rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-maverick-orange rounded-full blur-2xl opacity-10"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Benefits of AI Integration</h2>
              <p className="text-[#AAAAAA] text-lg mb-8">
                Implementing AI solutions in your business offers numerous advantages that can drive growth, efficiency, and innovation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Increased Efficiency",
                    description: "Automate routine tasks and streamline workflows to save time and resources."
                  },
                  {
                    title: "Enhanced Decision-Making",
                    description: "Leverage data insights for more informed, strategic business decisions."
                  },
                  {
                    title: "Improved Customer Experience",
                    description: "Deliver personalized, responsive customer interactions at scale."
                  },
                  {
                    title: "Reduced Operational Costs",
                    description: "Lower expenses through automation and optimization of business processes."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-[#AAAAAA] text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative order-first lg:order-last">
              <div className="bg-[#1A1A1A] p-1 rounded-lg border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Benefits" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our AI Integration Process</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We follow a structured approach to implement AI solutions in your business
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
            
            {[
              {
                title: "Discovery & Analysis",
                description: "We begin by understanding your business goals, existing workflows, and data assets to identify potential AI integration opportunities.",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI Readiness Assessment",
                description: "We evaluate your technical infrastructure, data quality, and organizational readiness to identify any gaps that need to be addressed.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Strategy & Roadmap Development",
                description: "We create a tailored AI implementation plan with prioritized initiatives, required resources, and expected outcomes.",
                image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Implementation & Integration",
                description: "We develop and deploy AI solutions, integrating them seamlessly with your existing systems and workflows.",
                image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Training & Change Management",
                description: "We provide comprehensive training to ensure your team can effectively utilize and manage the new AI tools.",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Monitoring & Optimization",
                description: "We continuously monitor performance and refine the AI solutions to ensure they deliver maximum value.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 last:mb-0 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`md:text-${index % 2 === 1 ? 'left' : 'right'} p-6`}>
                  <div className="bg-maverick-orange text-black text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center absolute left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 -top-5 z-10">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-[#AAAAAA]">{step.description}</p>
                </div>
                <div className={`order-first ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                  <div className="bg-[#1A1A1A] p-1 rounded-lg border border-gray-800">
                    <img src={step.image} alt={step.title} className="rounded-lg w-full h-auto" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our AI Success Stories</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              See how our AI integration services have transformed businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Customer Service Automation",
                category: "Retail",
                stats: "70% reduction in response time"
              },
              {
                image: "https://images.unsplash.com/photo-1590674899484-13b5a8a9d0af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Predictive Maintenance",
                category: "Manufacturing",
                stats: "40% decrease in downtime"
              },
              {
                image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Donor Engagement Automation",
                category: "Nonprofit",
                stats: "35% increase in donations"
              }
            ].map((casestudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={casestudy.image} 
                    alt={casestudy.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <div className="text-maverick-orange mb-1">{casestudy.category}</div>
                  <h3 className="text-2xl font-semibold mb-3">{casestudy.title}</h3>
                  <p className="text-[#AAAAAA] group-hover:text-[#DDDDDD] transition-all duration-300 font-bold">
                    {casestudy.stats}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/work">
              <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md md:py-3 md:text-lg md:px-8">
                View all case studies
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Find answers to common questions about our AI integration services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is the minimum business size for AI integration?",
                answer: "There is no minimum business size for AI integration. We work with businesses of all sizes, from startups to established enterprises. We tailor our solutions to your specific needs and scale, ensuring that even small businesses can benefit from AI technologies without excessive costs."
              },
              {
                question: "Do I need a large amount of data to implement AI?",
                answer: "While having quality data is important, you don't necessarily need massive amounts. We can work with the data you have and help you implement solutions that start small and grow as your data collection improves. Many AI implementations can begin with modest data sets and expand over time."
              },
              {
                question: "How long does it take to implement AI solutions?",
                answer: "Implementation timelines vary based on complexity and scope. Simple AI integrations might take 4-8 weeks, while more comprehensive solutions could take 3-6 months. We provide detailed timelines during the discovery phase and often implement in phases to deliver value quickly."
              },
              {
                question: "How do you ensure data privacy and security?",
                answer: "We take data privacy and security very seriously. We implement robust security measures including encryption, access controls, and regular security audits. All our AI implementations comply with relevant data protection regulations like PIPEDA. We also provide clear documentation on data usage and security protocols."
              },
              {
                question: "What kind of ROI can I expect from AI integration?",
                answer: "ROI varies by implementation, but our clients typically see returns in the form of cost savings, increased efficiency, improved customer satisfaction, and new revenue opportunities. We work with you to establish clear KPIs and measurement frameworks to track the business impact of your AI investments."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 border-b border-gray-800 pb-6 last:border-b-0"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-[#AAAAAA]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      </motion.div>
    </div>
  );
}