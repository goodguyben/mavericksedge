import { motion } from "framer-motion";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-36 md:pt-40 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto pl-0 md:pl-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Comprehensive digital solutions designed to help your business thrive in the digital landscape.
            From web development to marketing and AI integration, we've got you covered.
          </p>
        </div>
      </div>
      
      <ServicesSection fullPage />
      <ProcessSection />
      <ContactSection />
    </motion.div>
  );
}
