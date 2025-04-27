import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";

// Let's use an embedded base64 video background gradient animation instead
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
    <section className="relative h-screen flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] bg-gradient-animate animate-gradient-slow z-0"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 z-5">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-maverick-orange/20"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlays for added depth - subtle gradients over the video */}
      <div className="absolute w-full h-full top-0 left-0 opacity-40 pointer-events-none z-10">
        <div className="absolute w-96 h-96 rounded-full bg-maverick-orange opacity-30 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-maverick-amber opacity-20 blur-3xl bottom-20 right-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 z-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream">
            building{" "}
            <span className="text-maverick-orange relative">
              <span>resilience</span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-maverick-orange"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span> with thoughtful innovation and heart
          </h1>
          <p className="text-xl md:text-2xl text-maverick-cream/80 mt-6 mb-10 max-w-2xl font-sans leading-relaxed">
            Web development, marketing, and AI integration services tailored for
            SMBs and nonprofits
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              href="/services" 
              variant="primary"
            >
              Explore services
            </Button>
            <Button 
              href="/contact" 
              variant="outline"
            >
              Get in touch
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          opacity: scrolled ? 0 : 1,
          y: scrolled ? 10 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection("services")}
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-maverick-orange" />
      </motion.div>
    </section>
  );
}
