import { motion } from "framer-motion";
import TeamSection from "@/components/sections/TeamSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-28 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Mavericks Edge is a digital solutions agency specializing in web development, marketing, and AI integration services for SMBs and nonprofits.
            Our mission is to provide accessible, high-quality digital services that empower businesses to thrive in the digital landscape.
          </p>
        </div>
      </div>
      
      <TeamSection fullPage />
      <ProcessSection />
      <ContactSection />
    </motion.div>
  );
}
