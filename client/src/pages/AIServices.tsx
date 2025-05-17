
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { Brain, Database, Workflow, Shield, FileCode, Users, Gauge, Zap, Activity, LineChart } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
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
    }
  ];

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>AI Integration Services | Business Automation Solutions | Mavericks Edge</title>
        <meta name="description" content="Transform your business with AI integration and automation solutions. Streamline operations, enhance decision-making, and improve customer experiences with our tailored AI services." />
        <link rel="canonical" href="https://mavericksedge.com/services/ai" />
        <meta name="keywords" content="AI integration, business automation, AI readiness assessment, workflow automation, AI implementation, custom API integration, AI data governance, small business AI solutions" />
        
        {/* Open Graph data */}
        <meta property="og:title" content="AI Integration Services | Business Automation Solutions | Mavericks Edge" />
        <meta property="og:description" content="Transform your business with AI integration and automation solutions. Streamline operations, enhance decision-making, and improve customer experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavericksedge.com/services/ai" />
        <meta property="og:image" content="/images/logo-transparent-thumb4x.png" />
        
        {/* Structured data for Service */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Integration",
              "provider": {
                "@type": "Organization",
                "name": "Mavericks Edge",
                "url": "https://mavericksedge.com"
              },
              "name": "AI Integration & Automation",
              "description": "Harness the transformative power of artificial intelligence to streamline operations, enhance decision-making, and create exceptional customer experiences.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "url": "https://mavericksedge.com/pricing/ai"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Readiness Assessment",
                      "description": "Comprehensive evaluation of your current systems, workflows, and data to determine AI integration readiness."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Integration Roadmap",
                      "description": "Tailored strategic roadmap for integrating AI into your business processes."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Workflow & Process Automation",
                      "description": "Implementation of AI-powered automation for business processes."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Feature Development",
                      "description": "Development of custom AI features and functionalities to enhance your existing software."
                    }
                  }
                ]
              }
            }
          `}
        </script>

        {/* Case Studies Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Article",
                    "name": "Customer Service Automation",
                    "about": {
                      "@type": "Thing",
                      "name": "Retail AI Implementation"
                    },
                    "description": "70% reduction in response time"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Article",
                    "name": "Predictive Maintenance",
                    "about": {
                      "@type": "Thing",
                      "name": "Manufacturing AI Implementation"
                    },
                    "description": "40% decrease in downtime"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Article",
                    "name": "Donor Engagement Automation",
                    "about": {
                      "@type": "Thing",
                      "name": "Nonprofit AI Implementation"
                    },
                    "description": "35% increase in donations"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
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

      {/* Services Grid */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
              >
                <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">{service.title}</h3>
                <p className="text-[#AAAAAA] group-hover:text-[#DDDDDD] transition-all duration-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
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
                title: "Assessment & Discovery",
                description: "We evaluate your current systems, data, and processes to identify opportunities for AI implementation.",
                icon: <Gauge className="h-6 w-6 text-maverick-orange" />
              },
              {
                title: "Strategy Development",
                description: "We create a customized AI integration roadmap aligned with your business objectives and priorities.",
                icon: <Brain className="h-6 w-6 text-maverick-orange" />
              },
              {
                title: "Solution Design",
                description: "We design AI solutions tailored to your specific needs, selecting the most appropriate tools and technologies.",
                icon: <FileCode className="h-6 w-6 text-maverick-orange" />
              },
              {
                title: "Implementation",
                description: "We develop and integrate AI features into your existing systems with minimal disruption to your operations.",
                icon: <Workflow className="h-6 w-6 text-maverick-orange" />
              },
              {
                title: "Training & Adoption",
                description: "We provide comprehensive training to ensure your team can effectively utilize the new AI capabilities.",
                icon: <Users className="h-6 w-6 text-maverick-orange" />
              },
              {
                title: "Monitoring & Optimization",
                description: "We continuously monitor performance and refine the AI solutions to maximize results and ROI.",
                icon: <LineChart className="h-6 w-6 text-maverick-orange" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className={`flex items-start gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 bg-[#121212] border-2 border-maverick-orange rounded-full z-10">
                    {step.icon}
                  </div>
                  <div className={`bg-[#121212] p-6 rounded-lg border border-gray-800 md:w-[calc(50%-3rem)] w-full ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
                    <div className="flex md:hidden items-center mb-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#1A1A1A] border border-maverick-orange rounded-full mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <h3 className="hidden md:block text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-[#AAAAAA]">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">AI Success Stories</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              See how our AI solutions have transformed businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Customer Service Automation",
                industry: "Retail",
                result: "70% reduction in response time"
              },
              {
                image: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Predictive Maintenance",
                industry: "Manufacturing",
                result: "40% decrease in downtime"
              },
              {
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Donor Engagement Automation",
                industry: "Nonprofit",
                result: "35% increase in donations"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-[#1A1A1A] border border-gray-800 group-hover:border-maverick-orange transition-all duration-300">
                  <div className="aspect-[4/3]">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-maverick-orange mb-2">{story.industry}</div>
                    <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                    <p className="text-[#AAAAAA]">{story.result}</p>
                  </div>
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
              Answers to common questions about our AI integration services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How can AI benefit my small business?",
                answer: "AI can benefit small businesses in numerous ways, including automating routine tasks, providing valuable customer insights, enhancing customer service through chatbots, optimizing operations, and enabling more personalized marketing campaigns. These benefits can help small businesses save time, reduce costs, and compete more effectively in their markets."
              },
              {
                question: "What kind of data do I need for AI implementation?",
                answer: "The type of data needed depends on your specific AI implementation goals. Generally, you'll need relevant, high-quality data related to the business process you're looking to enhance. This might include customer data, transaction records, operational metrics, or communication logs. Our AI readiness assessment helps identify what data you have available and what might need to be collected."
              },
              {
                question: "How long does AI integration typically take?",
                answer: "The timeline for AI integration varies based on the complexity of the solution and your organization's readiness. Simple implementations like chatbots might take 4-6 weeks, while more complex solutions could take 3-6 months. We provide detailed timelines during the strategy development phase after assessing your specific needs and existing infrastructure."
              },
              {
                question: "Is my business too small for AI integration?",
                answer: "No business is too small for AI integration. We specialize in right-sizing AI solutions for SMBs and nonprofits. There are AI implementations appropriate for organizations of all sizes, from simple automation tools to more sophisticated solutions. We focus on implementing AI that provides tangible ROI regardless of your organization's size."
              },
              {
                question: "How do you ensure the security of our data?",
                answer: "Data security is paramount in our AI implementations. We follow industry best practices for data protection, including encryption, access controls, and secure API connections. We also ensure compliance with relevant regulations like PIPEDA. Our AI solutions are designed with privacy and security considerations built in from the ground up."
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
  );
}
