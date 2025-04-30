
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Check, Zap, Brain, Shield, Database, Robot, Code } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

const AIPricing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">AI That <span className="text-maverick-orange">Works For You</span></h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mb-8">
                We're here to help you navigate the AI landscape with solutions that actually make sense for your business. No tech jargon – just practical AI tools that save you time and help you grow.
              </p>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                  <Heart className="mr-2 h-5 w-5" /> Let's explore AI together
                </a>
              </Link>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-[#1A1A1A] p-2 rounded-lg border border-gray-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Services" 
                  className="rounded-lg w-full h-auto transform transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* AI Projects Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">AI Solutions <span className="text-maverick-orange">That Make Sense</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We focus on practical AI implementations that deliver real value for your business – no science fiction, just results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* EdgeAutomate Kickstart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeAutomate Kickstart</h3>
              <p className="text-maverick-orange mb-4 font-medium">For SMBs starting their AI journey</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$2,200</span>
                <span className="text-[#AAAAAA] ml-2">CAD+</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "AI Readiness & Tech Stack Audit",
                  "Custom AI Roadmap with Use Cases",
                  "AI Tool & Platform Recommendations",
                  "Workflow Automation (3-5 key processes)",
                  "Custom GPT Integration",
                  "Basic Data Cleansing & Structuring",
                  "AI Governance Quick Start Guide",
                  "Staff Onboarding Resources",
                  "Prompt Template Starter Kit",
                  "AI Tool Usage SOPs"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgeAssist AI Agent Build */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#121212] rounded-xl p-8 border-2 border-maverick-orange shadow-lg shadow-maverick-orange/20 flex flex-col h-full relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                Most Advanced
              </div>
              <Robot className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeAssist AI Agent Build</h3>
              <p className="text-maverick-orange mb-4 font-medium">Custom AI-powered assistants</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$3,600</span>
                <span className="text-[#AAAAAA] ml-2">CAD+</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Persona design and prompt engineering",
                  "Private knowledge assistant build",
                  "Vector database and RAG implementation",
                  "Optional multimodal input capability",
                  "API integration into existing systems",
                  "Embeddable chatbot with contextual memory",
                  "Internal training guide",
                  "Async team onboarding"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary w-full text-center py-3 rounded-md transition-all duration-300">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgeConnect Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Code className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeConnect Integration</h3>
              <p className="text-maverick-orange mb-4 font-medium">Connect your tools with AI</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$2,800</span>
                <span className="text-[#AAAAAA] ml-2">CAD+</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Custom API Integration with AI models",
                  "Business Logic Mapping & Prompt Engineering",
                  "Custom Function Calling & Tool Use",
                  "Authentication & Security Layer Setup",
                  "Middleware or Webhook Configuration",
                  "Failover & Error Handling Protocols",
                  "Test Suite & Debug Logs",
                  "Deployment to appropriate environment",
                  "Admin Control Panel (basic)",
                  "Technical Documentation + Video Walkthrough"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom AI Solutions */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Custom AI <span className="text-maverick-orange">Solutions</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Need something more specific? We can create custom AI solutions tailored to your unique business challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A1A1A] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 font-heading">AI Feature/Tool Development</h3>
                <p className="text-[#AAAAAA] mb-6">
                  We can develop custom AI features and tools specifically designed for your business needs. From specialized data analysis tools to customer-facing AI applications, we'll help you leverage AI in ways that make sense for your organization.
                </p>
                <p className="text-[#AAAAAA] mb-6">
                  Pricing is quoted based on complexity and integration effort after an initial consultation to understand your specific requirements.
                </p>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-maverick-orange mb-2">Our AI Consulting Services:</h4>
                  <p className="text-[#DDDDDD] mb-2">
                    <span className="text-xl font-semibold">$95/hour</span> - Premium rate reflecting AI specialization
                  </p>
                  <p className="text-[#AAAAAA]">
                    Packaged consulting days also available – perfect for workshops and planning sessions.
                  </p>
                </div>
                <Link href="/contact">
                  <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                    <Heart className="mr-2 h-5 w-5" /> Let's discuss your AI needs
                  </a>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-[#121212] p-2 rounded-lg border border-gray-800 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1682687982107-14e590f75090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Custom AI Development" 
                    className="rounded-lg w-full h-auto transform transition-transform duration-700 hover:scale-105" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Approach AI */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">How We Approach <span className="text-maverick-orange">AI Integration</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Our approach to AI is practical, ethical, and focused on delivering real value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-10 w-10 text-maverick-orange" />,
                title: "We Focus on What Works",
                description: "We prioritize practical AI implementations that solve real business problems."
              },
              {
                icon: <Shield className="h-10 w-10 text-maverick-orange" />,
                title: "Security & Ethics First",
                description: "We implement AI solutions with strong security measures and ethical considerations."
              },
              {
                icon: <Database className="h-10 w-10 text-maverick-orange" />,
                title: "We Value Your Data",
                description: "Your data is treated with the utmost care and respect for privacy regulations."
              },
              {
                icon: <Heart className="h-10 w-10 text-maverick-orange" />,
                title: "We Keep the Human Touch",
                description: "AI should enhance human capabilities, not replace the warmth of human connection."
              },
              {
                icon: <Zap className="h-10 w-10 text-maverick-orange" />,
                title: "No Hype, Just Results",
                description: "We cut through the AI hype to deliver solutions that actually make a difference."
              },
              {
                icon: <Users className="h-10 w-10 text-maverick-orange" />,
                title: "We Bring Everyone Along",
                description: "We ensure your team is comfortable and confident using new AI tools."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 h-full group"
              >
                <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">{item.title}</h3>
                <p className="text-[#AAAAAA] group-hover:text-[#DDDDDD] transition-all duration-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
};

export default AIPricing;
