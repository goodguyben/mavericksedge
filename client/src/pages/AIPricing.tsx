
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Check, Zap, FileSearch, Cog, LucideIcon, Brain, Cpu, LineChart, Sparkles } from "lucide-react";
import PricingCard from "@/components/cards/PricingCard";
import { Button } from "@/components/ui/custom-button";

interface AIServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

const aiPricing = [
  {
    id: "ai-readiness",
    title: "AI Readiness Assessment",
    subtitle: "First step into AI transformation",
    price: "$600",
    priceRange: "- $1,200+",
    currency: "CAD",
    oneTime: true,
    popular: true,
    features: [
      "System & data audit",
      "Opportunity identification",
      "Basic roadmap development",
      "Detailed implementation plan",
      "Gap analysis",
      "Technology recommendations"
    ]
  },
  {
    id: "custom-api",
    title: "Custom API Integration",
    subtitle: "Connect systems with AI",
    price: "$3,500",
    priceRange: "+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "In-depth requirements analysis",
      "API connector development",
      "Data mapping & transformation",
      "Testing & verification",
      "User training",
      "Documentation"
    ]
  },
  {
    id: "workflow-automation",
    title: "AI-Powered Workflow Automation",
    subtitle: "Streamline business processes",
    price: "Custom",
    priceRange: "",
    currency: "Quote",
    oneTime: true,
    popular: false,
    features: [
      "Process analysis & mapping",
      "Automation opportunity assessment",
      "Custom automation development",
      "Integration with existing systems",
      "Testing & optimization",
      "User training & documentation"
    ]
  }
];

const aiSupportPlans = [
  {
    id: "ai-monitoring",
    title: "Basic AI Monitoring",
    subtitle: "Keep your AI solutions running",
    price: "$250",
    priceRange: "- $400+/mo",
    currency: "CAD",
    oneTime: false,
    popular: false,
    features: [
      "AI tool monitoring",
      "Basic updates",
      "Usage reporting",
      "Performance checks",
      "Simple troubleshooting",
      "Email support"
    ]
  },
  {
    id: "ai-support",
    title: "Proactive AI Support",
    subtitle: "Comprehensive AI management",
    price: "$600",
    priceRange: "- $1,200+/mo",
    currency: "CAD",
    oneTime: false,
    popular: true,
    features: [
      "Everything in Basic Monitoring",
      "Dedicated support hours",
      "Troubleshooting & optimization",
      "Governance & user support",
      "Regular performance reviews",
      "Enhancement recommendations"
    ]
  },
  {
    id: "ai-custom",
    title: "Enterprise AI Support",
    subtitle: "Full-scale AI management",
    price: "Custom",
    priceRange: "",
    currency: "Quote",
    oneTime: false,
    popular: false,
    features: [
      "Everything in Proactive Support",
      "Dedicated AI specialist",
      "24/7 critical issue support",
      "Quarterly strategy reviews",
      "AI training for staff",
      "Custom reporting & analytics"
    ]
  }
];

const aiServices: AIServiceProps[] = [
  {
    title: "Intelligent Chatbots",
    description: "Enhance customer experience with conversational AI chatbots",
    icon: Brain,
    benefits: [
      "24/7 customer support",
      "Personalized interactions",
      "Reduced support costs",
      "Scalable customer service"
    ]
  },
  {
    title: "Process Automation",
    description: "Automate repetitive tasks and streamline workflows",
    icon: Cpu,
    benefits: [
      "Increased operational efficiency",
      "Reduced manual errors",
      "Cost savings",
      "Staff focus on high-value tasks"
    ]
  },
  {
    title: "Data Analytics",
    description: "Extract valuable insights from your business data",
    icon: LineChart,
    benefits: [
      "Data-driven decision making",
      "Identify trends and patterns",
      "Predictive analytics",
      "Customized reporting dashboards"
    ]
  },
  {
    title: "AI Content Generation",
    description: "Create high-quality content efficiently",
    icon: Sparkles,
    benefits: [
      "Content production at scale",
      "Consistent brand voice",
      "SEO-optimized content",
      "Multi-format content creation"
    ]
  }
];

export default function AIPricing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-28 pb-16 px-5 md:px-10 relative bg-[#121212] overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-maverick-light-orange opacity-10 blur-3xl -top-20 right-[20%]"></div>
          <div className="absolute w-72 h-72 rounded-full bg-maverick-amber opacity-10 blur-3xl bottom-20 -right-20"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <Link href="/pricing" className="inline-flex items-center text-maverick-cream hover:text-maverick-orange mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to all pricing
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
            <div className="md:w-2/3">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">AI Integration & Automation</h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl">
                Harness the power of artificial intelligence to streamline operations, gain insights from your data,
                and enhance customer experiences.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-end">
              <div className="p-5 bg-maverick-slate rounded-xl border border-maverick-slate/50">
                <div className="flex items-center mb-3">
                  <Zap className="h-6 w-6 text-maverick-orange mr-3" />
                  <h3 className="text-xl font-semibold">Why AI?</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Increase operational efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Enhance customer experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Make data-driven decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Interactive AI demo placeholder */}
          <div className="w-full h-[400px] bg-gradient-to-r from-maverick-dark-slate to-maverick-dark-brown rounded-xl mb-16 overflow-hidden relative flex items-center justify-center border border-maverick-slate/30">
            <div className="absolute inset-0 bg-[url('/path/to/circuit-pattern.svg')] opacity-10"></div>
            <div className="text-center px-8">
              <Zap className="h-16 w-16 text-maverick-orange mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Interactive AI Demo</h3>
              <p className="text-maverick-cream/70 mb-6 max-w-2xl mx-auto">
                Experience how AI can transform your business operations with our interactive demo.
              </p>
              <Button variant="primary">Launch Demo</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Services Grid */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">AI Services</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Transformative AI solutions tailored for your business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-maverick-slate/20 rounded-xl p-6 border border-maverick-slate/30 hover:border-maverick-orange/30 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-maverick-orange/10 rounded-lg">
                    <service.icon className="h-8 w-8 text-maverick-orange" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                <p className="text-maverick-cream/70 text-center mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project-Based Pricing */}
      <section className="py-20 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Project-Based Services</h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl">
                One-time AI projects to help you assess opportunities, implement solutions, and automate workflows.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center bg-maverick-slate/30 rounded-full px-4 py-2">
                <FileSearch className="h-5 w-5 text-maverick-orange mr-2" />
                <span className="text-sm text-maverick-cream">Custom quotes available</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiPricing.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Implementation Process */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Our AI Implementation Process</h2>
              <p className="text-[#AAAAAA] text-xl mb-8">
                We follow a structured approach to implementing AI solutions that ensures
                alignment with your business objectives and maximum ROI.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-10 h-10 rounded-full bg-maverick-orange flex items-center justify-center text-white font-bold">1</div>
                    <div className="h-full w-0.5 bg-maverick-slate/50 mx-auto mt-2 mb-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discovery & Assessment</h3>
                    <p className="text-maverick-cream/70">
                      We analyze your current systems, processes, and data to identify AI opportunities 
                      and develop a roadmap.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-10 h-10 rounded-full bg-maverick-orange flex items-center justify-center text-white font-bold">2</div>
                    <div className="h-full w-0.5 bg-maverick-slate/50 mx-auto mt-2 mb-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
                    <p className="text-maverick-cream/70">
                      Our team designs a custom AI solution that addresses your specific needs
                      and integrates with your existing infrastructure.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-10 h-10 rounded-full bg-maverick-orange flex items-center justify-center text-white font-bold">3</div>
                    <div className="h-full w-0.5 bg-maverick-slate/50 mx-auto mt-2 mb-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Development & Integration</h3>
                    <p className="text-maverick-cream/70">
                      We develop and implement the AI solution, ensuring seamless integration
                      with your existing systems and workflows.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-10 h-10 rounded-full bg-maverick-orange flex items-center justify-center text-white font-bold">4</div>
                    <div className="h-full w-0.5 bg-maverick-slate/50 mx-auto mt-2 mb-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Testing & Optimization</h3>
                    <p className="text-maverick-cream/70">
                      We rigorously test the solution and fine-tune it based on performance
                      data and user feedback.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-10 h-10 rounded-full bg-maverick-orange flex items-center justify-center text-white font-bold">5</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Training & Ongoing Support</h3>
                    <p className="text-maverick-cream/70">
                      We provide comprehensive training for your team and ongoing support
                      to ensure long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* Dynamic image/video placeholder */}
              <div className="w-full h-[500px] bg-maverick-slate/20 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/path/to/ai-process.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-maverick-charcoal/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-maverick-cream/50">Dynamic AI process visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Support & Governance */}
      <section className="py-20 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">AI Support & Governance</h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl">
                Ongoing support and governance to ensure your AI solutions continue to deliver value.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center bg-maverick-slate/30 rounded-full px-4 py-2">
                <Cog className="h-5 w-5 text-maverick-orange mr-2" />
                <span className="text-sm text-maverick-cream">Month-to-month plans</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiSupportPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-maverick-dark-brown to-maverick-dark-slate rounded-xl p-8 md:p-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="h-12 w-12 text-maverick-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business with AI?</h2>
            <p className="text-xl text-maverick-cream/80 mb-8 max-w-2xl mx-auto">
              Start with an AI Readiness Assessment to discover how artificial intelligence
              can solve your business challenges and create new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" href="/contact">
                Schedule a Consultation
              </Button>
              <Button variant="outline" href="/solutions#ai">
                Learn More About AI Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
