import { motion } from "framer-motion";
import PricingCard from "@/components/cards/PricingCard";

interface PricingSectionProps {
  fullPage?: boolean;
}

const webPricing = [
  {
    id: "edge-start",
    title: "EdgeStart",
    subtitle: "Ideal for startups, solopreneurs & small nonprofits",
    price: "$850",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Up to 6 core pages",
      "Mobile-responsive design",
      "Basic contact form",
      "On-Page SEO & Schema Markup",
      "Google Analytics 4 setup",
      "Google Business Profile setup",
      "Security essentials (SSL/TSL)",
      "Accessibility basics (WCAG 2.1)"
    ]
  },
  {
    id: "edge-grow",
    title: "EdgeGrow",
    subtitle: "For growing SMBs & established organizations",
    price: "$1,850",
    currency: "CAD",
    oneTime: true,
    popular: true,
    features: [
      "Up to 20 custom-designed pages",
      "Advanced multi-step forms with calendar",
      "Mobile-first responsive design",
      "Full On-Page SEO implementation",
      "Advanced Schema Markup",
      "WCAG 2.2 Level AA accessibility",
      "Core Web Vitals optimization",
      "Security suite with DDoS Protection",
      "Custom branding & visual design"
    ]
  },
  {
    id: "edge-lead",
    title: "EdgeLead",
    subtitle: "For businesses needing advanced functionality",
    price: "$3,750+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Full-featured web app or e-commerce",
      "User accounts and dashboard features",
      "Headless CMS integration",
      "Payment gateway setup",
      "API integration (booking, CRM, etc.)",
      "On-Page SEO & full Schema",
      "Accessibility compliance (WCAG 2.2)",
      "Advanced security & performance",
      "Custom application architecture"
    ]
  }
];

const marketingPricing = [
  {
    id: "edge-ignite",
    title: "EdgeIgnite",
    subtitle: "All-in-one marketing launchpad",
    price: "$1,800+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Strategy & positioning workshop",
      "Audience persona development",
      "Competitive snapshot with AI insights",
      "Google Business Profile setup",
      "GA4 and Meta Pixel setup",
      "Content strategy playbook",
      "High-value content assets creation",
      "First-party data capture setup"
    ]
  },
  {
    id: "edge-reach-lean",
    title: "EdgeReach Lean",
    subtitle: "Foundational digital visibility",
    price: "$950",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Google Business Profile setup",
      "10 key directory listings",
      "On-page SEO for 3 core pages",
      "Basic schema markup",
      "Mobile performance check",
      "SSL security setup",
      "One SEO blog template",
      "Local business visibility essentials"
    ]
  },
  {
    id: "edge-engage",
    title: "EdgeEngage",
    subtitle: "Integrated content & community builder",
    price: "$1,850",
    currency: "CAD/mo",
    oneTime: false,
    popular: true,
    features: [
      "Monthly content & social strategy",
      "Audience/keyword research",
      "4-6 SEO-optimized content pieces/month",
      "Social media management (4 platforms)",
      "Monthly analytics & performance reports",
      "Community engagement services",
      "Email communications (2-3/month)",
      "Integrated marketing approach"
    ]
  }
];

const aiPricing = [
  {
    id: "edge-automate",
    title: "EdgeAutomate Kickstart",
    subtitle: "Start your AI transformation journey",
    price: "$2,200+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "AI Readiness & Tech Stack Audit",
      "Custom AI Roadmap with Use Cases",
      "AI Tool & Platform Recommendations",
      "Workflow Automation (3-5 processes)",
      "Custom GPT Integration",
      "Basic Data Cleansing & Structuring",
      "AI Governance Quick Start Guide",
      "Staff Onboarding Resources"
    ]
  },
  {
    id: "edge-assist",
    title: "EdgeAssist AI Agent",
    subtitle: "Custom AI-powered assistant solution",
    price: "$3,600+",
    currency: "CAD",
    oneTime: true,
    popular: true,
    features: [
      "Custom AI Agent Development",
      "RAG Architecture Implementation",
      "Knowledge Base Creation & Indexing",
      "Multi-Step Task Handling",
      "Custom UI/UX Interface",
      "API Integrations with Your Tools",
      "User Authentication & Management",
      "Comprehensive Testing & Deployment"
    ]
  },
  {
    id: "edge-monitor",
    title: "EdgeMonitor AI Support",
    subtitle: "Ongoing AI management & optimization",
    price: "$600",
    priceRange: "- $1,200+/mo",
    currency: "CAD",
    oneTime: false,
    popular: false,
    features: [
      "AI System Monitoring & Maintenance",
      "Performance Optimization",
      "Usage Analytics & Reporting",
      "Model Fine-Tuning & Updates",
      "Security & Compliance Checks",
      "Troubleshooting & Support",
      "User Training & Enablement",
      "Quarterly Strategy Review"
    ]
  }
];

// Website Care Plans
const carePricing = [
  {
    id: "edge-care",
    title: "EdgeCare",
    subtitle: "Essential website maintenance",
    price: "$75",
    currency: "CAD/mo",
    oneTime: false,
    popular: false,
    features: [
      "Core software updates",
      "1 hour of content updates per month",
      "Security monitoring",
      "Daily cloud backups",
      "Basic performance monitoring",
      "Uptime monitoring (24/7)",
      "Database optimization",
      "Email support (48-hour response)"
    ]
  },
  {
    id: "edge-advance",
    title: "EdgeAdvance",
    subtitle: "Enhanced website care & growth",
    price: "$175",
    currency: "CAD/mo",
    oneTime: false,
    popular: true,
    features: [
      "All EdgeCare features",
      "3 hours of dedicated support monthly",
      "Ongoing technical SEO optimization",
      "Core Web Vitals tuning",
      "1 SEO content piece monthly",
      "CRM/email automation maintenance",
      "Priority support (24-hour response)",
      "Quarterly strategy check-ins"
    ]
  },
  {
    id: "edge-pro",
    title: "EdgePro",
    subtitle: "Proactive optimization & development",
    price: "$400+",
    currency: "CAD/mo",
    oneTime: false,
    popular: false,
    features: [
      "All EdgeAdvance features",
      "Up to 10 hours of dev/design monthly",
      "UX enhancements & new features",
      "Proactive performance deep dives",
      "Staging site for testing updates",
      "Monthly strategy review call",
      "Quarterly competitor & SERP audit",
      "Priority development queue access"
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

        {/* Website Care Plans Section */}
        <div id="care-pricing" className="mb-20">
          <motion.h3 
            className="text-3xl font-semibold mb-8 text-center font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Website Care Plans
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carePricing.map((plan, index) => (
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
