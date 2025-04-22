import { motion } from "framer-motion";
import WorkSection from "@/components/sections/WorkSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-28 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Explore our portfolio of innovative digital solutions that have helped businesses achieve their goals.
            Each project represents our commitment to excellence and client satisfaction.
          </p>
        </div>
      </div>
      
      <WorkSection fullPage />
      <ContactSection />
    </motion.div>
  );
}
