import { motion } from "framer-motion";
import PricingCard from "@/components/cards/PricingCard";

interface PricingSectionProps {
  fullPage?: boolean;
}

const webPricing = [
  {
    id: "launch-pad",
    title: "Launch Pad",
    subtitle: "Perfect for startups & small businesses",
    price: "$750",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Up to 5 core pages",
      "Basic contact form",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Google Analytics 4 setup"
    ]
  },
  {
    id: "business-growth",
    title: "Business Growth Builder",
    subtitle: "For businesses ready to scale",
    price: "$1,650",
    currency: "CAD",
    oneTime: true,
    popular: true,
    features: [
      "Up to 10 pages total",
      "Booking system & advanced forms",
      "Enhanced SEO strategy & setup",
      "Blog & resource hub setup",
      "Advanced Cloudflare setup"
    ]
  },
  {
    id: "professional",
    title: "Professional / E-commerce",
    subtitle: "For established businesses",
    price: "$3,350+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Everything in Business Growth",
      "E-commerce functionality",
      "Advanced integrations",
      "Membership & subscription features",
      "Advanced AI chatbot integration"
    ]
  }
];

const marketingPricing = [
  {
    id: "marketing-foundation",
    title: "Marketing Foundation",
    subtitle: "Launch your digital marketing",
    price: "$1,400+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Strategy workshop",
      "Digital presence audit",
      "Competitor snapshot",
      "Setup & optimization of 2-3 key channels"
    ]
  },
  {
    id: "digital-presence",
    title: "Digital Presence Starter",
    subtitle: "Monthly social & online presence",
    price: "$400",
    currency: "CAD/mo",
    oneTime: false,
    popular: false,
    features: [
      "Google Business Profile management",
      "Local citation management",
      "Monthly performance report",
      "Social media management (1 platform)"
    ]
  },
  {
    id: "content-community",
    title: "Integrated Content & Community",
    subtitle: "Comprehensive marketing solution",
    price: "$1,100",
    currency: "CAD/mo",
    oneTime: false,
    popular: true,
    features: [
      "Monthly content & social strategy",
      "Audience/keyword research",
      "4-6 SEO-optimized content pieces/month",
      "Social media management (4 platforms)"
    ]
  }
];

const aiPricing = [
  {
    id: "ai-readiness",
    title: "AI Readiness Assessment",
    subtitle: "First step into AI transformation",
    price: "$600",
    priceRange: "- $1,200+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "System & data audit",
      "Opportunity identification",
      "Basic roadmap development",
      "Detailed implementation plan"
    ]
  },
  {
    id: "ai-monitoring",
    title: "Basic AI Monitoring",
    subtitle: "Keep your AI solutions running",
    price: "$250",
    priceRange: "- $400+/mo",
    currency: "CAD",
    oneTime: false,
    popular: true,
    features: [
      "AI tool monitoring",
      "Basic updates",
      "Usage reporting",
      "Performance checks"
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
    popular: false,
    features: [
      "Everything in Basic Monitoring",
      "Dedicated support hours",
      "Troubleshooting & optimization",
      "Governance & user support"
    ]
  }
];

export default function PricingSection({ fullPage = false }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 px-5 md:px-10 bg-[#121212]">
      <div className="container mx-auto">
        {!fullPage && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Pricing</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Transparent pricing tailored for SMBs and nonprofits
            </p>
          </motion.div>
        )}

        {/* Web Pricing Section */}
        <div id="web-pricing" className="mb-20">
          <motion.h3 
            className="text-3xl font-semibold mb-8 text-center font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Web & Digital Solutions
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webPricing.map((plan, index) => (
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

        {/* Marketing Pricing Section */}
        <div id="marketing-pricing" className="mb-20">
          <motion.h3 
            className="text-3xl font-semibold mb-8 text-center font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Marketing & Creative Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingPricing.map((plan, index) => (
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

        {/* AI Pricing Section */}
        <div id="ai-pricing">
          <motion.h3 
            className="text-3xl font-semibold mb-8 text-center font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI Integration & Automation
          </motion.h3>
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
      </div>
    </section>
  );
}
