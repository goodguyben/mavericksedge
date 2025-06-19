import { motion } from "framer-motion";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import SplitText from "@/components/ui/SplitText";

export default function Pricing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-44 md:pt-48 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto pl-0 md:pl-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <SplitText
              text="Pricing"
              className="text-5xl md:text-7xl font-bold"
              delay={200}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </h1>
          <div className="text-xl text-[#AAAAAA] max-w-3xl">
            <SplitText
              text="Transparent pricing tailored for SMBs and nonprofits. We offer flexible packages to meet your business needs and budget."
              className="text-xl text-[#AAAAAA]"
              delay={500}
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
      </div>
      
      <PricingSection fullPage />
      <ContactSection />
    </motion.div>
  );
}
