import { motion } from "framer-motion";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Pricing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-36 md:pt-40 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
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
  );
}
