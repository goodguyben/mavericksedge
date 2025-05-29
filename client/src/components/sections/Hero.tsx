import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import AIWebGLBackground from "@/components/ui/AIWebGLBackground";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate opacity based on scroll position
      const scrollY = window.scrollY;
      const maxFade = 400; // Distance in pixels to complete fade
      const opacity = Math.max(0, 1 - (scrollY / maxFade));
      setHeroOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-32">
      {/* WebGL AI Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20">
        {/* Interactive WebGL Background with built-in text readability enhancement */}
        <AIWebGLBackground className="backdrop-blur-[0.5px]" />
      </div>
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-30 flex justify-center items-center w-full pointer-events-none">
        <motion.div
          className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center w-full pointer-events-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.1 }}
          style={{ opacity: heroOpacity }}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-center">
            <div className="inline-block">
              {/* Word-by-word animation for the heading */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="inline-block mr-2"
              >
                Building
              </motion.span>
              <span className="text-maverick-orange relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="mr-2"
                >
                  resilience
                </motion.span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-maverick-orange"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
              {" "}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="inline-block mr-1"
              >
                with
              </motion.span>
              {" "}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.6 }}
                className="inline-block mr-1"
              >
                innovation
              </motion.span>
              {" "}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.0 }}
                className="inline-block mr-1"
              >
                and
              </motion.span>
              {" "}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.4 }}
                className="inline-block"
              >
                heart
              </motion.span>
            </div>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-maverick-cream/80 mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 font-sans leading-relaxed mx-auto text-center"
          >
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          >
            <Button 
              href="/services" 
              variant="primary"
            >
              Explore Services
            </Button>
            <Button 
              href="/contact" 
              variant="outline"
            >
              Book Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto"
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