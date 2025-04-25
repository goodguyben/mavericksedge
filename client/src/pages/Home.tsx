import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import ParallaxAnimation from "@/components/animations/ParallaxAnimation";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ParallaxAnimation />
      <WhyChooseUsSection />
      <WhatWeDoSection />
      <ProcessSection />
      <ContactSection />
    </motion.div>
  );
}
