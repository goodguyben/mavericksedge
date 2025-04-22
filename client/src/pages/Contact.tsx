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
      <div className="pt-28 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Ready to take your business to the next level? Contact us today to discuss your project.
            We're excited to hear from you and help you achieve your digital goals.
          </p>
        </div>
      </div>
      
      <ContactSection fullPage />
    </motion.div>
  );
}
