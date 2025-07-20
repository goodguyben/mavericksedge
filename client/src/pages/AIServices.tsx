import { motion } from "framer-motion";
import { Brain, Database, Workflow, Shield, FileCode, Users, Gauge, Zap, Activity, LineChart, Cpu, Target, TrendingUp, CheckCircle, ArrowRight, Star, Clock, DollarSign, ChevronRight } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { useEffect } from "react";

export default function AIServices() {
  // Track page view for analytics
  useEffect(() => {
    console.log("AI Services page viewed");
  }, []);

  const aiServices = [
    {
      icon: <Brain className="h-8 w-8 text-maverick-orange" />,
      title: "AI Readiness Assessment",
      description: "Comprehensive evaluation of your current systems, workflows, and data infrastructure to determine AI integration readiness and identify high-impact opportunities.",
      features: ["Technical infrastructure analysis", "Data quality assessment", "Organizational readiness evaluation", "ROI potential identification"]
    },
    {
      icon: <Target className="h-8 w-8 text-maverick-orange" />,
      title: "Strategic AI Roadmap Development",
      description: "Tailored strategic roadmap for integrating artificial intelligence into your business processes, prioritizing high-impact, low-effort implementations with clear milestones.",
      features: ["Custom implementation strategy", "Technology stack selection", "Resource planning", "Timeline development"]
    },
    {
      icon: <Cpu className="h-8 w-8 text-maverick-orange" />,
      title: "AI Platform & Tool Selection",
      description: "Expert consultation to identify the most suitable AI tools, platforms, and technologies for your specific business needs, industry requirements, and budget constraints.",
      features: ["Platform comparison analysis", "Cost-benefit evaluation", "Scalability assessment", "Integration compatibility"]
    },
    {
      icon: <FileCode className="h-8 w-8 text-maverick-orange" />,
      title: "Custom AI API Integration",
      description: "Specialized integration of leading AI platforms including OpenAI GPT, Google Gemini, Anthropic Claude, and custom machine learning models into your existing systems.",
      features: ["Multi-platform integration", "Custom API development", "Real-time data processing", "Scalable architecture"]
    },
    {
      icon: <Zap className="h-8 w-8 text-maverick-orange" />,
      title: "AI-Powered Feature Development",
      description: "Development of custom AI features and functionalities to enhance your existing software applications, websites, and business processes.",
      features: ["Custom AI algorithms", "Natural language processing", "Computer vision integration", "Predictive analytics"]
    },
    {
      icon: <Workflow className="h-8 w-8 text-maverick-orange" />,
      title: "Business Process Automation",
      description: "Implementation of AI-powered automation for critical business processes including customer service, lead generation, invoicing, and operational workflows.",
      features: ["Workflow automation", "Intelligent document processing", "Customer interaction automation", "Process optimization"]
    },
    {
      icon: <Database className="h-8 w-8 text-maverick-orange" />,
      title: "Data Preparation & Optimization",
      description: "Comprehensive data cleansing, structuring, and optimization services to prepare your data for effective AI applications and improved machine learning outcomes.",
      features: ["Data quality improvement", "Feature engineering", "Data pipeline development", "Real-time data processing"]
    },
    {
      icon: <Shield className="h-8 w-8 text-maverick-orange" />,
      title: "AI Governance & Compliance",
      description: "Development of comprehensive strategies and frameworks for responsible AI data management, governance, and compliance with regulations including PIPEDA and GDPR.",
      features: ["Data privacy compliance", "AI ethics framework", "Security protocols", "Audit trail implementation"]
    },
    {
      icon: <Users className="h-8 w-8 text-maverick-orange" />,
      title: "AI Training & Change Management",
      description: "Comprehensive training programs and change management strategies to help your team effectively utilize new AI tools and adapt to improved workflows.",
      features: ["Team training programs", "Change management", "Best practices documentation", "Ongoing support"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-maverick-orange" />,
      title: "AI Performance Monitoring",
      description: "Continuous monitoring, analysis, and optimization of AI solutions to ensure they deliver maximum value and maintain optimal performance over time.",
      features: ["Performance tracking", "Model optimization", "ROI measurement", "Continuous improvement"]
    }
  ];

  const aiTechnologies = [
    "OpenAI GPT-4 & GPT-3.5", "Google Gemini", "Anthropic Claude", "Microsoft Azure AI", 
    "AWS Machine Learning", "TensorFlow", "PyTorch", "Natural Language Processing",
    "Computer Vision", "Predictive Analytics", "Deep Learning", "Neural Networks",
    "Machine Learning Models", "AI Chatbots", "Voice Recognition", "Data Analytics"
  ];

  const industries = [
    "Healthcare & Medical", "Financial Services", "E-commerce & Retail", "Manufacturing",
    "Real Estate", "Education", "Legal Services", "Marketing & Advertising",
    "Non-profit Organizations", "Professional Services", "Technology", "Transportation & Logistics"
  ];

  return (
    <div>
      <SEOHead 
        title="AI Integration Services Edmonton | Artificial Intelligence Solutions | Machine Learning Implementation | Mavericks Edge"
        description="Transform your Edmonton business with cutting-edge AI integration services. Expert artificial intelligence solutions, machine learning implementation, and AI automation for businesses of all sizes. Get custom AI development, ChatGPT integration, and intelligent automation in Edmonton, Alberta."
        keywords="AI integration services Edmonton, artificial intelligence solutions Edmonton, machine learning implementation Edmonton, AI automation Edmonton, ChatGPT integration Edmonton, custom AI development Edmonton, business AI solutions Edmonton, AI consulting Edmonton, machine learning consulting Edmonton, AI transformation Edmonton, intelligent automation Edmonton, AI strategy Edmonton, data science services Edmonton, predictive analytics Edmonton, natural language processing Edmonton, computer vision Edmonton, AI chatbots Edmonton, business process automation Edmonton, AI readiness assessment Edmonton, AI implementation Edmonton, enterprise AI solutions Edmonton, small business AI Edmonton, AI consulting services Edmonton, machine learning models Edmonton, deep learning Edmonton, neural networks Edmonton, AI platform integration Edmonton, OpenAI integration Edmonton, Google AI integration Edmonton, AI data governance Edmonton, AI compliance Edmonton, PIPEDA compliance Edmonton, AI training Edmonton, change management Edmonton, AI performance monitoring Edmonton, ROI optimization Edmonton, Edmonton AI services, Alberta AI solutions"
        canonicalUrl="/ai-automation-services-edmonton"
        ogTitle="AI Integration Services Edmonton | Artificial Intelligence Solutions | Mavericks Edge"
        ogDescription="Transform your Edmonton business with cutting-edge AI integration services. Expert artificial intelligence solutions, machine learning implementation, and AI automation."
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-maverick-orange bg-opacity-10 border border-maverick-orange border-opacity-30 rounded-full text-maverick-orange text-sm font-medium mb-6">
                  <Brain className="h-4 w-4 mr-2" />
                  Artificial Intelligence Solutions Edmonton
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                  AI Integration & 
                  <span className="text-maverick-orange"> Automation</span>
                </h1>
                <p className="text-xl text-[#AAAAAA] max-w-3xl mb-8 leading-relaxed">
                  Transform your Edmonton business operations with cutting-edge artificial intelligence solutions. From machine learning implementation to intelligent automation, we deliver custom AI development that drives measurable results and competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                      Get Free AI Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Link>
                  <Link href="/ai-automation-pricing-edmonton">
                    <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                      View AI Pricing
                    </a>
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#1A1A1A] p-1 rounded-lg border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Integration Services Edmonton" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Services Section - Modern List Layout */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Comprehensive AI Integration Services Edmonton</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto leading-relaxed">
              From initial AI readiness assessment to full-scale implementation and ongoing optimization, we provide end-to-end artificial intelligence solutions that transform your Edmonton business operations.
            </p>
          </motion.div>

          {/* Modern List Layout */}
          <div className="space-y-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold font-heading group-hover:text-maverick-orange transition-colors duration-300">
                          {service.title}
                        </h3>
                        <ChevronRight className="h-6 w-6 text-maverick-orange opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      
                      <p className="text-[#AAAAAA] mb-6 leading-relaxed text-lg">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-[#CCCCCC] group-hover:text-[#DDDDDD] transition-colors duration-300">
                            <CheckCircle className="h-4 w-4 text-maverick-orange mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies & Platforms */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">AI Technologies & Platforms We Integrate</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              We integrate with leading AI platforms and technologies to deliver cutting-edge solutions tailored to your Edmonton business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#1A1A1A] rounded-lg p-4 text-center border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
              >
                <div className="text-sm font-medium text-[#CCCCCC] group-hover:text-maverick-orange transition-colors duration-300">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Why Choose AI Integration in Edmonton?</h2>
              <p className="text-[#AAAAAA] text-lg mb-8 leading-relaxed">
                Implementing artificial intelligence solutions in your Edmonton business delivers measurable benefits that drive growth, efficiency, and competitive advantage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6 text-maverick-orange" />,
                    title: "Increased Efficiency",
                    description: "Automate routine tasks and streamline workflows to save 40-60% of operational time and resources."
                  },
                  {
                    icon: <Target className="h-6 w-6 text-maverick-orange" />,
                    title: "Enhanced Decision-Making",
                    description: "Leverage data insights and predictive analytics for more informed, strategic business decisions."
                  },
                  {
                    icon: <Users className="h-6 w-6 text-maverick-orange" />,
                    title: "Improved Customer Experience",
                    description: "Deliver personalized, responsive customer interactions at scale with AI-powered automation."
                  },
                  {
                    icon: <DollarSign className="h-6 w-6 text-maverick-orange" />,
                    title: "Reduced Operational Costs",
                    description: "Lower expenses through intelligent automation and optimization of business processes."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300">
                    <div className="flex items-center mb-3">
                      {benefit.icon}
                      <h3 className="text-lg font-semibold ml-3">{benefit.title}</h3>
                    </div>
                    <p className="text-[#AAAAAA] text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative order-first lg:order-last">
              <div className="bg-[#1A1A1A] p-1 rounded-lg border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Benefits Edmonton" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Industries We Serve in Edmonton</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              Our AI integration services are tailored to meet the unique challenges and opportunities across diverse Edmonton industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#1A1A1A] rounded-lg p-6 text-center border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
              >
                <div className="text-lg font-medium text-[#CCCCCC] group-hover:text-maverick-orange transition-colors duration-300">
                  {industry}
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Our AI Implementation Process Edmonton</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              We follow a proven, structured approach to implement AI solutions that deliver measurable business value for Edmonton companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Comprehensive analysis of your business goals, existing workflows, and data assets to identify high-impact AI integration opportunities.",
                icon: <Target className="h-8 w-8 text-maverick-orange" />
              },
              {
                step: "02",
                title: "AI Readiness Assessment",
                description: "Evaluation of your technical infrastructure, data quality, and organizational readiness to identify gaps and requirements.",
                icon: <Gauge className="h-8 w-8 text-maverick-orange" />
              },
              {
                step: "03",
                title: "Strategy & Roadmap",
                description: "Development of a tailored AI implementation plan with prioritized initiatives, resources, and expected outcomes.",
                icon: <Brain className="h-8 w-8 text-maverick-orange" />
              },
              {
                step: "04",
                title: "Implementation",
                description: "Development and deployment of AI solutions with seamless integration into your existing systems and workflows.",
                icon: <FileCode className="h-8 w-8 text-maverick-orange" />
              },
              {
                step: "05",
                title: "Training & Change Management",
                description: "Comprehensive training programs and change management strategies to ensure successful adoption and utilization.",
                icon: <Users className="h-8 w-8 text-maverick-orange" />
              },
              {
                step: "06",
                title: "Monitoring & Optimization",
                description: "Continuous monitoring, performance analysis, and optimization to ensure maximum value and ROI from your AI investments.",
                icon: <TrendingUp className="h-8 w-8 text-maverick-orange" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-maverick-orange">{step.step}</div>
                  <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-heading">{step.title}</h3>
                <p className="text-[#AAAAAA] leading-relaxed">{step.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">AI Success Stories Edmonton</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              See how our AI integration services have transformed Edmonton businesses across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Customer Service Automation",
                category: "Retail",
                stats: "70% reduction in response time",
                description: "Implemented AI-powered chatbots and automated customer service workflows."
              },
              {
                image: "https://images.unsplash.com/photo-1590674899484-13b5a8a9d0af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Predictive Maintenance System",
                category: "Manufacturing",
                stats: "40% decrease in downtime",
                description: "Developed machine learning models for predictive equipment maintenance."
              },
              {
                image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Donor Engagement Automation",
                category: "Nonprofit",
                stats: "35% increase in donations",
                description: "Created AI-driven donor segmentation and personalized engagement campaigns."
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
                  <div className="text-maverick-orange mb-2 font-medium">{casestudy.category}</div>
                  <h3 className="text-2xl font-semibold mb-3 font-heading">{casestudy.title}</h3>
                  <p className="text-[#AAAAAA] mb-4 leading-relaxed">{casestudy.description}</p>
                  <div className="text-white font-bold text-lg">
                    {casestudy.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/work">
              <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md md:py-3 md:text-lg md:px-8">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Frequently Asked Questions</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              Find answers to common questions about our AI integration services and artificial intelligence solutions in Edmonton.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What is the minimum business size for AI integration in Edmonton?",
                answer: "There is no minimum business size for AI integration. We work with Edmonton businesses of all sizes, from startups to established enterprises. Our AI solutions are scalable and can be tailored to your specific needs and budget. Even small businesses can benefit from AI technologies through cost-effective implementations that start small and grow with your business."
              },
              {
                question: "Do I need a large amount of data to implement AI solutions?",
                answer: "While having quality data is important, you don't necessarily need massive amounts. We can work with the data you have and help you implement solutions that start small and grow as your data collection improves. Many AI implementations can begin with modest data sets and expand over time. We also help you establish data collection strategies to improve your AI capabilities."
              },
              {
                question: "How long does it take to implement AI solutions in Edmonton?",
                answer: "Implementation timelines vary based on complexity and scope. Simple AI integrations like chatbot implementation might take 4-8 weeks, while more comprehensive solutions like custom machine learning models could take 3-6 months. We provide detailed timelines during the discovery phase and often implement in phases to deliver value quickly and allow for iterative improvements."
              },
              {
                question: "How do you ensure data privacy and security in AI implementations?",
                answer: "We take data privacy and security very seriously. All our AI implementations include robust security measures including encryption, access controls, and regular security audits. We ensure compliance with relevant data protection regulations like PIPEDA and GDPR. We also provide clear documentation on data usage, security protocols, and help you establish AI governance frameworks."
              },
              {
                question: "What kind of ROI can I expect from AI integration?",
                answer: "ROI varies by implementation, but our Edmonton clients typically see returns in the form of cost savings (20-40%), increased efficiency (30-60% time savings), improved customer satisfaction, and new revenue opportunities. We work with you to establish clear KPIs and measurement frameworks to track the business impact of your AI investments and ensure you're achieving your expected returns."
              },
              {
                question: "Can you integrate AI with my existing software and systems?",
                answer: "Yes, absolutely. We specialize in integrating AI solutions with existing software and systems. Whether you're using CRM platforms, ERP systems, e-commerce platforms, or custom software, we can seamlessly integrate AI capabilities. Our approach ensures minimal disruption to your current operations while adding powerful AI functionality."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 border-b border-gray-800 pb-8 last:border-b-0"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{faq.question}</h3>
                <p className="text-[#AAAAAA] leading-relaxed">{faq.answer}</p>
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