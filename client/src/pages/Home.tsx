import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
    </motion.div>
  );
}
