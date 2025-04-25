import { motion } from "framer-motion";
import { Link } from "wouter";
import { Monitor, PieChart, Zap, ArrowRight } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

const pricingCategories = [
  {
    id: "web",
    title: "Web & Digital Solutions",
    description: "From simple landing pages to complex e-commerce platforms, we build responsive, high-performance websites that convert visitors into customers.",
    icon: <Monitor className="h-12 w-12 text-maverick-orange" />,
    features: [
      "Responsive website development",
      "E-commerce solutions",
      "Website care plans",
      "Custom web applications"
    ],
    link: "/pricing/web",
    bgColor: "from-maverick-dark-slate to-maverick-slate",
    imagePlaceholder: "Web project showcase"
  },
  {
    id: "marketing",
    title: "Marketing & Creative Services",
    description: "Strategic marketing solutions that boost your brand visibility, engage your audience, and drive meaningful conversions.",
    icon: <PieChart className="h-12 w-12 text-maverick-orange" />,
    features: [
      "Marketing strategy development",
      "Brand identity creation",
      "Content marketing",
      "Social media management"
    ],
    link: "/pricing/marketing",
    bgColor: "from-maverick-dark-brown to-maverick-dark-slate",
    imagePlaceholder: "Marketing strategy visualization"
  },
  {
    id: "ai",
    title: "AI Integration & Automation",
    description: "Harness the power of artificial intelligence to streamline operations, gain insights from your data, and enhance customer experiences.",
    icon: <Zap className="h-12 w-12 text-maverick-orange" />,
    features: [
      "AI readiness assessment",
      "Custom AI integration",
      "Workflow automation",
      "AI support & governance"
    ],
    link: "/pricing/ai",
    bgColor: "from-maverick-slate to-maverick-dark-brown",
    imagePlaceholder: "AI implementation visualization"
  }
];

export default function Pricing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-28 pb-16 px-5 md:px-10 bg-[#121212] relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-maverick-orange opacity-10 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-maverick-amber opacity-10 blur-3xl bottom-20 right-20"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Pricing</h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Transparent pricing tailored for SMBs and nonprofits. We offer flexible packages
            to meet your business needs and budget.
          </p>
        </div>
      </div>
      
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="space-y-24">
            {pricingCategories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row gap-12"
              >
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-xl bg-maverick-orange bg-opacity-10 mr-4">
                      {category.icon}
                    </div>
                    <h2 className="text-4xl font-bold">{category.title}</h2>
                  </div>
                  
                  <p className="text-xl text-maverick-cream/80 mb-8">
                    {category.description}
                  </p>
                  
                  <ul className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-maverick-orange mt-2 mr-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={category.link}
                    className="inline-flex items-center text-maverick-orange hover:text-maverick-light-orange transition-colors group"
                  >
                    <span className="mr-2 font-medium">View detailed pricing</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="lg:w-1/2">
                  <div className={`h-[350px] rounded-xl bg-gradient-to-br ${category.bgColor} p-1 overflow-hidden group relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-maverick-cream/50">{category.imagePlaceholder}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-maverick-charcoal to-transparent">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        <Link 
                          href={category.link}
                          className="inline-flex items-center bg-maverick-orange text-white hover:bg-maverick-light-orange px-6 py-3 rounded-full transition-colors text-lg"
                        >
                          <span className="mr-2">Explore {category.title}</span>
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
}
