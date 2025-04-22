import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center bg-maverick-charcoal overflow-hidden">
      {/* Background gradients */}
      <div className="absolute w-full h-full top-0 left-0 opacity-30 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-maverick-orange opacity-40 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-maverick-amber opacity-30 blur-3xl bottom-20 right-20"></div>
        <div className="absolute w-64 h-64 rounded-full bg-maverick-brown opacity-20 blur-2xl top-1/2 left-1/3"></div>
      </div>

      <div className="container mx-auto px-5 md:px-10 z-10">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Digital solutions that{" "}
            <span className="text-maverick-orange">elevate</span> your business
          </h1>
          <p className="text-xl md:text-2xl text-maverick-cream/90 mt-6 mb-10 max-w-2xl">
            Web development, marketing, and AI integration services tailored for
            SMBs and nonprofits
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/services"
              className="btn-primary"
            >
              Explore services
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator cursor-pointer"
        animate={{ 
          opacity: scrolled ? 0 : 1,
          y: scrolled ? 10 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection("services")}
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
