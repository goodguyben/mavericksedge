import { motion } from "framer-motion";
import { Code, Monitor, PieChart, Zap, BarChart2, PenTool, Calendar, Brain, Database, Workflow } from "lucide-react";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";

export default function Services() {
  const serviceCategories = [
    {
      id: "web",
      title: "Web & Digital Solutions",
      description: "Custom websites, web applications, and digital platforms tailored to your unique business needs",
      icon: <Monitor className="h-12 w-12 text-maverick-orange" />,
      linkHref: "/services/web",
      subServices: [
        "Custom Website Design & Development",
        "CMS Development & Customization",
        "E-commerce Platform Development",
        "Custom Web Application Development",
        "UX/UI Design",
        "Third-Party API Integrations"
      ]
    },
    {
      id: "marketing",
      title: "Marketing & Creative Services",
      description: "Strategic marketing solutions to boost your brand visibility and drive engagement",
      icon: <PieChart className="h-12 w-12 text-maverick-orange" />,
      linkHref: "/services/marketing",
      subServices: [
        "Digital Marketing Strategy",
        "Brand & Identity Development",
        "Graphic Design Services",
        "SEO & PPC Advertising",
        "Social Media Strategy & Management",
        "Event Planning & Management"
      ]
    },
    {
      id: "ai",
      title: "AI Integration & Automation",
      description: "Harness the power of artificial intelligence to streamline operations and enhance customer experiences",
      icon: <Zap className="h-12 w-12 text-maverick-orange" />,
      linkHref: "/services/ai",
      subServices: [
        "AI Readiness Assessment",
        "Custom AI Integration Roadmap",
        "AI Tool & Platform Selection",
        "Custom API Integration",
        "AI-Powered Workflow Automation",
        "Secure & Compliant AI Setup"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-44 md:pt-48 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Our Services</h1>
            <p className="text-xl text-[#AAAAAA] max-w-3xl">
              Comprehensive digital solutions designed to help your business thrive in the digital landscape.
              From web development to marketing and AI integration, we've got you covered.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Services Overview */}
      <section className="py-16 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg mr-6">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading">{category.title}</h2>
                </div>
                <p className="text-lg text-[#AAAAAA] mb-6">{category.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {category.subServices.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-maverick-orange"></div>
                      </div>
                      <span className="text-[#DDDDDD]">{service}</span>
                    </li>
                  ))}
                </ul>
                <Link href={category.linkHref} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-maverick-orange hover:bg-maverick-orange/90 maverick-button-primary">
                  Learn more about {category.title}
                </Link>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                <div className="bg-[#121212] p-1 rounded-lg border border-gray-800">
                  <img 
                    src={
                      category.id === 'web' 
                        ? "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        : category.id === 'marketing'
                        ? "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        : "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    } 
                    alt={category.title} 
                    className="rounded-lg w-full h-auto" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <ProcessSection />
      
      {/* Industries Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Industries We Serve</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We specialize in providing digital solutions for various industries, with a focus on SMBs and nonprofits
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Nonprofits & Charities",
              "Small & Medium Businesses",
              "Professional Services",
              "Healthcare & Wellness",
              "Education & Training",
              "Retail & E-commerce",
              "Arts & Entertainment",
              "Hospitality & Tourism"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#121212] p-6 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300 text-center"
              >
                <span className="text-lg font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection />
    </motion.div>
  );
}
