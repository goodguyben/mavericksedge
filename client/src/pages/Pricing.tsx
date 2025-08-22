import { motion } from "framer-motion";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/SEOHead";

export default function Pricing() {
  return (
    <>
      <SEOHead
        title="Pricing | Affordable Web Design & Digital Services | Mavericks Edge"
        description="Transparent pricing for web design, marketing, and AI integration. Flexible packages for small businesses with fast delivery and measurable results."
        canonicalUrl="https://mavericksedge.ca/pricing-edmonton-web-design-marketing"
      />
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-44 md:pt-48 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto pl-0 md:pl-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Pricing</h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Transparent pricing tailored for SMBs and nonprofits. We offer flexible packages
            to meet your business needs and budget.
          </p>
        </div>
      </div>
      
      <PricingSection fullPage />
      <ContactSection />
    </motion.div>
    </>
  );
}
