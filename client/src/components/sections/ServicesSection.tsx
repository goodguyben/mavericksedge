The code modifies the "Get Started" button's styling in the ServicesSection component to match the EdgeBrand Identity design, enhancing its visual appeal and interactivity.
```

```replit_final_file
import { motion } from "framer-motion";
import ServiceCard from "@/components/cards/ServiceCard";
import { Monitor, PieChart, Zap, Layout, Globe, ShieldCheck, BarChart2, PenTool, Calendar, Brain, Database, Workflow } from "lucide-react";
import { Link } from "wouter";
import SplitText from "@/components/ui/SplitText";

interface ServicesSectionProps {
  fullPage?: boolean;
}

const services = [
  {
    id: "web",
    title: "Web & Digital Solutions",
    description: "Custom websites, web applications, and digital platforms tailored to your unique business needs",
    icon: <Monitor className="h-8 w-8 text-maverick-orange" />,
    features: [
      "Custom website design & development",
      "E-commerce solutions",
      "Web application development",
      "Website maintenance & support"
    ],
    linkText: "Learn more",
    linkHref: "/services/web"
  },
  {
    id: "marketing",
    title: "Marketing & Creative Services",
    description: "Strategic marketing solutions to boost your brand visibility and drive engagement",
    icon: <PieChart className="h-8 w-8 text-maverick-orange" />,
    features: [
      "Digital marketing strategy",
      "Brand identity development",
      "Social media management",
      "Event planning & management"
    ],
    linkText: "Learn more",
    linkHref: "/services/marketing"
  },
  {
    id: "ai",
    title: "AI Integration & Automation",
    description: "Harness the power of artificial intelligence to streamline operations and enhance customer experiences",
    icon: <Zap className="h-8 w-8 text-maverick-orange" />,
    features: [
      "AI readiness assessment",
      "Custom API integrations",
      "Workflow automation",
      "AI training & implementation"
    ],
    linkText: "Learn more",
    linkHref: "/services/ai"
  }
];

export default function ServicesSection({ fullPage = false }: ServicesSectionProps) {
  return (
    <section id="services" className={`py-24 px-5 md:px-10 bg-[#1E1E1E]`}>
      <div className="container mx-auto">
        {!fullPage && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              <SplitText
                text="Our Services"
                className="inline-block"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
            </h2>
            <div className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              <SplitText
                text="Comprehensive digital solutions designed to help your business thrive in the digital landscape"
                className="text-[#AAAAAA] text-xl"
                delay={300}
                duration={0.4}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                stagger={0.03}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {fullPage && (
          <div className="mt-16 text-center">
            <motion.a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-maverick-orange text-maverick-orange font-medium rounded-lg hover:bg-maverick-orange hover:bg-opacity-10 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(255, 86, 48, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Started
            </motion.a>
          </div>
        )}
      </div>
    </section>
  );
}