import { motion } from "framer-motion";
import ServiceCard from "@/components/cards/ServiceCard";
import { Monitor, PieChart, Zap } from "lucide-react";

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
      "Responsive web design",
      "E-commerce development",
      "Custom web applications"
    ],
    linkText: "View pricing",
    linkHref: "#web-pricing"
  },
  {
    id: "marketing",
    title: "Marketing & Creative Services",
    description: "Strategic marketing solutions to boost your brand visibility and drive engagement",
    icon: <PieChart className="h-8 w-8 text-maverick-orange" />,
    features: [
      "Brand identity development",
      "Content marketing strategy",
      "Event management"
    ],
    linkText: "View pricing",
    linkHref: "#marketing-pricing"
  },
  {
    id: "ai",
    title: "AI Integration & Automation",
    description: "Harness the power of artificial intelligence to streamline operations and enhance customer experiences",
    icon: <Zap className="h-8 w-8 text-maverick-orange" />,
    features: [
      "AI readiness assessment",
      "Custom API integrations",
      "Workflow automation setup"
    ],
    linkText: "View pricing",
    linkHref: "#ai-pricing"
  }
];

export default function ServicesSection({ fullPage = false }: ServicesSectionProps) {
  return (
    <section id="services" className={`py-24 px-5 md:px-10 bg-[#1E1E1E]`}>
      <div className="container mx-auto">
        {!fullPage && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-maverick-cream">Our Services</h2>
            <p className="text-maverick-cream/70 text-xl max-w-2xl mx-auto">
              Comprehensive digital solutions designed to help your business thrive in the digital landscape
            </p>
          </motion.div>
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
      </div>
    </section>
  );
}
