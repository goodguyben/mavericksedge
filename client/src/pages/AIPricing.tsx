import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { 
  ChevronDown, Check, ArrowRight, ChevronRight, Brain, Database, Workflow, Bot, 
  HelpCircle, Gauge, ShieldCheck, Zap, Cpu, Users, Settings, Server, MessageSquare,
  Sparkles, Fingerprint, LineChart
} from 'lucide-react';
import ContactSection from '@/components/sections/ContactSection';
import PricingCard from '@/components/cards/PricingCard';
import SEOHead from '@/components/SEOHead';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.4
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Pricing data
const pricingTiers = [
  {
    id: "ai-readiness",
    title: "AI Readiness Assessment",
    subtitle: "Comprehensive evaluation of your systems to identify AI opportunities",
    price: "$600 - $1,200+",
    oneTime: true,
    popular: false,
    features: [
      "Full tech stack, workflow, and data audit",
      "AI opportunity identification and prioritization",
      "Basic integration roadmap development",
      "Implementation plan and timeline",
      "Preliminary budget estimation",
      "Data readiness assessment",
      "Security and compliance considerations"
    ],
    icon: <Brain size={24} className="text-maverick-orange" />,
    color: "border-maverick-orange"
  },
  {
    id: "edgeautomate",
    title: "EdgeAutomate Kickstart",
    subtitle: "Foundation to identify and implement your most valuable AI automations",
    price: "Starting at $2,200",
    oneTime: true,
    popular: true,
    features: [
      "Process mapping and automation opportunity assessment",
      "Selection of one high-value automation candidate",
      "AI tool/platform selection and setup",
      "Custom workflow design and implementation",
      "Connection to your existing business systems",
      "Staff training on the new AI-powered workflow",
      "30-day post-implementation support",
      "ROI measurement framework"
    ],
    icon: <Workflow size={24} className="text-white" />,
    color: "border-blue-500"
  },
  {
    id: "custom-integration",
    title: "Custom API Integration",
    subtitle: "Connect your systems to powerful AI models with tailored API integrations",
    price: "Starting at $3,500+",
    oneTime: true,
    popular: false,
    features: [
      "OpenAI, Claude, or Gemini API integration",
      "Custom development for your unique requirements",
      "Connection to your CRM, ERP, or other systems",
      "Secure authentication implementation",
      "Data formatting and preprocessing",
      "Testing and performance optimization",
      "Documentation and knowledge transfer",
      "Deployment and configuration support"
    ],
    icon: <Cpu size={24} className="text-white" />,
    color: "border-green-400"
  }
];

const supportPlans = [
  {
    id: "basic-ai-monitoring",
    title: "Basic AI Monitoring",
    subtitle: "Essential monitoring to ensure AI solutions remain operational and effective",
    price: "$250 - $400+",
    period: "per month",
    oneTime: false,
    popular: false,
    features: [
      "Regular AI tool status monitoring",
      "Basic updates and maintenance",
      "Usage and cost tracking",
      "Performance monitoring",
      "Simple troubleshooting",
      "Monthly status reporting",
      "Response within 48 hours"
    ],
    icon: <Gauge size={24} className="text-maverick-orange" />,
    color: "border-maverick-orange"
  },
  {
    id: "proactive-ai-support",
    title: "Proactive AI Support",
    subtitle: "Comprehensive support with dedicated hours for optimization and enhancement",
    price: "$600 - $1,200+",
    period: "per month",
    oneTime: false,
    popular: true,
    features: [
      "All Basic Monitoring features",
      "Dedicated support hours (4-10 hours/month)",
      "Proactive issue detection",
      "Ongoing AI model fine-tuning",
      "Optimization of AI workflows",
      "Usage pattern analysis",
      "Governance and compliance checks",
      "Knowledge base maintenance",
      "Response within 24 hours",
      "Quarterly strategy review"
    ],
    icon: <ShieldCheck size={24} className="text-white" />,
    color: "border-blue-500"
  }
];

// AI implementation examples
const implementationExamples = [
  {
    title: "Customer Service AI Assistant",
    description: "An AI-powered chatbot that handles common customer inquiries, reducing response time by 80% and allowing staff to focus on complex issues.",
    price: "$4,500 - $8,000",
    results: [
      "24/7 customer support coverage",
      "80% reduction in response time",
      "40% decrease in support tickets",
      "Improved customer satisfaction scores"
    ]
  },
  {
    title: "Content Generation System",
    description: "A custom AI solution that generates industry-specific content, product descriptions, and marketing copy while maintaining your brand voice.",
    price: "$3,800 - $7,500",
    results: [
      "70% faster content production",
      "Consistent brand messaging",
      "Ability to scale content across channels",
      "Frees creative staff for strategic work"
    ]
  },
  {
    title: "Intelligent Document Processing",
    description: "AI-powered document processing that extracts data from invoices, contracts, and forms to automate data entry and improve accuracy.",
    price: "$5,200 - $9,500",
    results: [
      "95% reduction in manual data entry",
      "99.5% data extraction accuracy",
      "60% faster document processing",
      "Significant cost savings on admin work"
    ]
  },
  {
    title: "Custom AI Applications",
    description: "Bespoke AI solutions tailored to your specific business needs, including AI sales representatives, automated inventory management, and logistics optimization platforms.",
    price: "$8,000 - $25,000",
    results: [
      "Streamlined core operations",
      "Reduced operational costs",
      "Enhanced competitive advantage",
      "Scalable automation solutions"
    ]
  }
];

// FAQ data
const faqs = [
  {
    question: "What exactly is included in the AI Readiness Assessment?",
    answer: "Our AI Readiness Assessment is a comprehensive evaluation that includes a full audit of your current technology stack, workflows, and data infrastructure to identify AI opportunities. We examine your existing systems and processes, evaluate data quality and accessibility, identify potential automation opportunities, and assess technical and organizational readiness for AI adoption. The deliverable is a detailed report with prioritized AI use cases, a basic integration roadmap, implementation timelines, preliminary budget estimates, and recommendations for addressing any data or infrastructure gaps."
  },
  {
    question: "How long does it typically take to implement an AI solution?",
    answer: "Implementation timelines vary based on the complexity of the solution and your organization's technical readiness. Simple automations through the EdgeAutomate Kickstart package can be implemented in 3-6 weeks. More complex custom API integrations typically require 6-12 weeks from discovery to deployment. Enterprise-wide AI transformations may span several months. During the initial assessment or consultation, we'll provide a detailed timeline specific to your project scope and requirements."
  },
  {
    question: "Do we need a large amount of data to start using AI?",
    answer: "Not necessarily. While having quality data is important for certain AI applications, many solutions can be implemented with relatively modest data requirements. Modern AI platforms like OpenAI, Claude, and Gemini come pre-trained with vast knowledge that can be applied to your specific needs. During our AI Readiness Assessment, we'll evaluate your current data assets and recommend approaches that align with your data availability. For some applications, we can start with smaller datasets and expand capabilities as you collect more data over time."
  },
  {
    question: "How do you ensure AI implementations are secure and compliant?",
    answer: "Security and compliance are central to our AI implementation approach. We conduct thorough evaluations of data handling practices, implement strong encryption and access controls, and design solutions that adhere to relevant regulations like PIPEDA, GDPR, or industry-specific requirements. We work closely with your team to establish appropriate governance frameworks, develop clear policies for AI usage, and implement monitoring systems to ensure ongoing compliance. Our implementations include documentation of security measures and privacy considerations, and we can provide guidance on regular security audits."
  },
  {
    question: "What ongoing support do you provide after implementing an AI solution?",
    answer: "After implementation, we offer two levels of ongoing support: Basic AI Monitoring ($250-$400+/month) which includes regular status monitoring, basic updates, and usage tracking; and Proactive AI Support ($600-$1,200+/month) which adds dedicated support hours, proactive optimization, governance checks, and strategic guidance. All implementations include a minimum 30-day post-launch support period. We can also create custom support arrangements based on your specific needs and internal capabilities."
  },
  {
    question: "Do you offer discounts for nonprofit organizations?",
    answer: "Yes, we offer special pricing for registered nonprofit organizations and charities. We believe in supporting organizations that make a positive social impact, and our nonprofit discounts reflect this commitment. Please mention your nonprofit status during our initial consultation, and we'll be happy to discuss the special rates available for your AI implementation needs."
  }
];

export default function AIPricing() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [showAllExamples, setShowAllExamples] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("implementation");
  const implementationRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  
  const toggleFaq = (index: number) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  };

  const displayedExamples = showAllExamples ? implementationExamples : implementationExamples.slice(0, 2);
  
  const scrollToSection = (section: string) => {
    setActiveTab(section);
    
    if (section === "implementation" && implementationRef.current) {
      implementationRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "support" && supportRef.current) {
      supportRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      if (implementationRef.current && supportRef.current) {
        const implPosition = implementationRef.current.offsetTop;
        const supportPosition = supportRef.current.offsetTop;
        
        if (scrollPosition >= supportPosition) {
          setActiveTab("support");
        } else if (scrollPosition >= implPosition) {
          setActiveTab("implementation");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="AI Integration Pricing | Automation Packages | Mavericks Edge"
        description="AI integration and automation pricing for Alberta businesses. Packages for chatbots, workflow automation, and custom AI solutions."
        canonicalUrl="https://mavericksedge.ca/ai-automation-pricing-edmonton"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#121212]"
      >
        {/* Hero Section */}
        <section className="pt-44 md:pt-48 pb-20 px-5 md:px-10">
          <motion.div 
            className="container mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                className="inline-flex items-center justify-center p-3 rounded-full bg-maverick-orange bg-opacity-10 mb-5"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
              >
                <Brain className="h-6 w-6 text-maverick-orange" />
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 font-heading"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
              >
                AI Integration <span className="text-maverick-orange">Pricing</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-[#AAAAAA] mb-10 max-w-3xl mx-auto"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
              >
                Strategic AI implementation solutions designed for SMBs and nonprofits that deliver measurable business impact without enterprise-level budgets.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.6}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={() => scrollToSection("implementation")}
                  className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                    activeTab === "implementation" 
                      ? "bg-maverick-orange" 
                      : "bg-maverick-orange bg-opacity-10 hover:bg-opacity-20"
                  }`}
                >
                  Implementation Services
                </button>
                
                <button
                  onClick={() => scrollToSection("support")}
                  className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                    activeTab === "support" 
                      ? "bg-maverick-orange" 
                      : "bg-maverick-orange bg-opacity-10 hover:bg-opacity-20"
                  }`}
                >
                  Support & Governance
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 px-5 md:px-10 bg-[#151515]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Implementation",
                  description: "We focus on the AI solutions with the highest ROI potential for your specific business challenges.",
                  icon: <Zap className="h-8 w-8 text-maverick-orange" />,
                  delay: 0.3
                },
                {
                  title: "No Technical Debt",
                  description: "Our implementations are built for long-term value with clean architecture and proper documentation.",
                  icon: <ShieldCheck className="h-8 w-8 text-maverick-orange" />,
                  delay: 0.4
                },
                {
                  title: "Practical AI Adoption",
                  description: "We emphasize staff training and change management to ensure your team actually uses the AI tools.",
                  icon: <Users className="h-8 w-8 text-maverick-orange" />,
                  delay: 0.5
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={item.delay}
                  className="p-6 rounded-xl border border-gray-800 bg-[#1A1A1A] relative overflow-hidden"
                >
                  {/* Subtle animated gradient background */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-maverick-orange/5 to-transparent opacity-60"
                    style={{
                      background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(249, 115, 22, 0.08) 0%, transparent 70%)`
                    }}
                  />
                  
                  <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-4 relative z-10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                  <p className="text-[#AAAAAA] relative z-10">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section 
          id="implementation" 
          ref={implementationRef}
          className="py-20 px-5 md:px-10 bg-[#121212]"
        >
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">AI Implementation Pricing</h2>
              <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
                Transparent pricing for organizations looking to harness the power of AI with clear deliverables and value
              </p>
            </motion.div>
            
            {/* Pricing Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            >
              {pricingTiers.map((tier) => (
                <PricingCard
                  key={tier.id}
                  plan={tier}
                />
              ))}
            </motion.div>
            
            {/* Consulting Rate */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              className="bg-[#1A1A1A] rounded-xl p-8 border border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">AI Strategy Consulting</h3>
                  <p className="text-[#AAAAAA] max-w-xl">
                    Need expert guidance on your AI strategy or technical approach? Our experienced consultants can help with planning sessions, architecture reviews, or implementation oversight.
                  </p>
                </div>
                <div className="min-w-[200px] flex flex-col gap-3">
                  <div className="bg-[#121212] p-4 rounded-lg border border-gray-800">
                    <span className="text-[#AAAAAA] text-sm">Hourly Rate</span>
                    <p className="text-2xl font-bold">$140-$220<span className="text-sm text-[#AAAAAA] font-normal">+/hour</span></p>
                  </div>
                  <Link href="/contact">
                    <a className="text-center py-3 px-6 rounded-lg font-medium bg-transparent border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10 transition-all duration-300">
                      Book a Consultation
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Implementation Examples */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-b from-[#161616] to-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <h2 className="text-4xl font-bold mb-6 font-heading">Real AI Implementation Examples</h2>
              <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
                See how organizations like yours are harnessing AI to solve real business challenges
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {displayedExamples.map((example, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3 + index * 0.1}
                  className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-gray-800"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-full bg-maverick-orange bg-opacity-10 flex items-center justify-center text-maverick-orange">
                        <Bot size={24} />
                      </div>
                      <h3 className="text-xl font-bold">{example.title}</h3>
                    </div>
                    
                    <p className="text-[#AAAAAA] mb-5">{example.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-sm text-[#AAAAAA]">Implementation Cost</span>
                        <p className="text-2xl font-bold">{example.price}</p>
                      </div>
                    </div>
                    
                    <h4 className="font-medium mb-3">Business Impact:</h4>
                    <ul className="space-y-2">
                      {example.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-[#DDDDDD]">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <AnimatePresence>
              {!showAllExamples && implementationExamples.length > 2 && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <button
                    onClick={() => setShowAllExamples(true)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-maverick-orange/10 hover:bg-maverick-orange/20 border border-maverick-orange/30 transition-all duration-300"
                  >
                    <span className="mr-2">View More Examples</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Support Plans Section */}
        <section 
          id="support"
          ref={supportRef}
          className="py-24 px-5 md:px-10 bg-[#121212]"
        >
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <h2 className="text-4xl font-bold mb-6 font-heading">AI Support & Governance Plans</h2>
              <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
                Ensure your AI implementations remain effective, secure, and up-to-date with our ongoing support plans
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {supportPlans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                />
              ))}
            </motion.div>
            
            {/* Custom Support */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-maverick-orange bg-opacity-10 border border-maverick-orange border-opacity-30 mb-3">
                <Database className="h-5 w-5 text-maverick-orange mr-2" />
                <span>Need a custom support plan?</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Tailored Support Solutions</h3>
              <p className="text-[#AAAAAA] max-w-2xl mx-auto mb-6">
                We can customize a support and governance plan specific to your organization's AI implementation complexity and in-house capabilities.
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center justify-center py-3 px-8 rounded-lg font-medium bg-transparent border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10 transition-all duration-300">
                  Request Custom Support Plan
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 px-5 md:px-10 bg-[#1A1A1A]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <h2 className="text-4xl font-bold mb-6 font-heading">Our AI Implementation Process</h2>
              <p className="text-[#AAAAAA] max-w-2xl mx-auto">
                A systematic approach that ensures successful AI adoption for your organization
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Discovery & Assessment",
                  description: "We start by understanding your business goals, evaluating your current systems, and identifying the highest-value AI opportunities."
                },
                {
                  number: "02",
                  title: "Solution Design",
                  description: "Our team designs a tailored AI solution that integrates seamlessly with your existing workflows and systems."
                },
                {
                  number: "03",
                  title: "Development & Testing",
                  description: "We build and rigorously test your AI implementation to ensure it performs reliably and securely."
                },
                {
                  number: "04",
                  title: "Training & Change Management",
                  description: "We prepare your team with comprehensive training and support the transition to new AI-enhanced workflows."
                },
                {
                  number: "05",
                  title: "Deployment & Optimization",
                  description: "After successful testing, we deploy your AI solution and fine-tune it based on real-world performance data."
                },
                {
                  number: "06",
                  title: "Ongoing Support & Evolution",
                  description: "We provide continued support and help your AI solution evolve as your business needs change."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3 + index * 0.1}
                  className="relative mb-12 last:mb-0 pl-16"
                >
                  <div className="flex items-start">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                      <span className="font-bold">{step.number}</span>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-[#AAAAAA]">{step.description}</p>
                    </div>
                  </div>
                  
                  {index < 5 && (
                    <div className="absolute left-5 top-12 h-full w-0.5 bg-gradient-to-b from-maverick-orange/30 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Grid */}
        <section className="py-20 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <h2 className="text-4xl font-bold mb-6 font-heading">Benefits of AI For Your Organization</h2>
              <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
                Strategic AI implementation can transform your operations and drive meaningful business outcomes
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="h-8 w-8 text-maverick-orange" />,
                  title: "Enhanced Productivity",
                  description: "Automate routine tasks and free your team to focus on higher-value strategic work that drives your business forward."
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-maverick-orange" />,
                  title: "Improved Customer Experience",
                  description: "Deliver personalized, 24/7 service through AI assistants that provide immediate responses to customer inquiries."
                },
                {
                  icon: <LineChart className="h-8 w-8 text-maverick-orange" />,
                  title: "Data-Driven Insights",
                  description: "Uncover patterns and opportunities hidden in your data that can inform better strategic decision-making."
                },
                {
                  icon: <Settings className="h-8 w-8 text-maverick-orange" />,
                  title: "Operational Efficiency",
                  description: "Streamline processes and reduce errors through intelligent automation of complex workflows."
                },
                {
                  icon: <Fingerprint className="h-8 w-8 text-maverick-orange" />,
                  title: "Competitive Advantage",
                  description: "Stay ahead of your industry by leveraging AI capabilities that differentiate your products and services."
                },
                {
                  icon: <Server className="h-8 w-8 text-maverick-orange" />,
                  title: "Scalable Solutions",
                  description: "Handle growing workloads without proportional increases in resources through intelligent AI systems."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3 + index * 0.1}
                  className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800"
                >
                  <div className="bg-maverick-orange bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-[#AAAAAA]">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-5 md:px-10 bg-[#151515]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-maverick-orange bg-opacity-10 mb-4">
                <HelpCircle className="h-5 w-5 text-maverick-orange" />
              </div>
              <h2 className="text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
              <p className="text-[#AAAAAA] max-w-2xl mx-auto">
                Find answers to common questions about our AI implementation services
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3 + index * 0.05}
                  className={`border-b border-gray-800 py-6 ${index === faqs.length - 1 ? 'mb-0 border-b-0' : 'mb-2'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <h3 className="text-xl font-medium pr-8">{faq.question}</h3>
                    <div className={`transition-transform duration-300 ${selectedFaq === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-5 w-5 text-maverick-orange" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {selectedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-[#AAAAAA]">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nonprofit Section */}
        <section className="py-16 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              className="bg-gradient-to-r from-[#1E1E1E] to-[#262626] rounded-2xl overflow-hidden border border-gray-800"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-16 h-16 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 font-heading">Special Pricing for Nonprofits</h3>
                    <p className="text-[#AAAAAA] mb-6 max-w-2xl">
                      We're committed to helping mission-driven organizations leverage AI to maximize their impact. Registered nonprofits and charities qualify for special pricing on all our AI services.
                    </p>
                    <Link href="/contact">
                      <a className="inline-flex items-center text-maverick-orange hover:underline">
                        Contact us to learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#1A1A1A] relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Ready to <span className="text-maverick-orange">Transform</span> Your Business with AI?
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto mb-10">
                Schedule a free consultation to discuss your AI goals and discover how we can help your organization leverage artificial intelligence for meaningful results.
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center justify-center py-4 px-8 rounded-lg text-lg font-medium bg-maverick-orange hover:bg-opacity-90 text-white transition-all duration-300">
                  Start Your AI Journey
                </a>
              </Link>
            </motion.div>
          </div>
          <div className="absolute -bottom-10 right-0 w-96 h-96 bg-maverick-orange rounded-full filter blur-[180px] opacity-5"></div>
          <div className="absolute top-20 left-0 w-72 h-72 bg-maverick-orange rounded-full filter blur-[150px] opacity-5"></div>
        </section>

        <ContactSection />
      </motion.div>
    </>
  );
}