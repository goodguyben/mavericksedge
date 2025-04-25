import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-44 md:pt-48 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto pl-0 md:pl-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-3xl text-[#AAAAAA] max-w-3xl">
            We'd love to know more about your goals and how we can design and build a solution that meets your needs.
          </p>
        </div>
      </div>
      
      <ContactSection fullPage />
    </motion.div>
  );
}
