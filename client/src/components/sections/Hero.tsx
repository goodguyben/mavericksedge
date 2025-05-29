import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import InteractiveBackground from "../InteractiveBackground";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
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

  // Handle background loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-32">
      {/* Interactive WebGL Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Interactive WebGL Background */}
        <InteractiveBackground />
        
        {/* Fallback gradient background (shows while background loads) */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] bg-gradient-animate animate-gradient-slow z-0 transition-opacity duration-1000 ${backgroundLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex justify-center items-center w-full">
        <motion.div
          className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center w-full"
          initial={{ opacity: 1, y: 0 }} // Start fully opaque
          animate={{ opacity: heroOpacity, y: 0 }} // Animate opacity based on scroll
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-center">
            <div className="inline-block">
              {/* Word-by-word animation for the heading */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block mr-4"
              >
                Building
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block mr-4 text-maverick-orange relative"
              >
                resilience
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-maverick-orange rounded opacity-80"></div>
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="inline-block mr-4"
              >
                with
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="inline-block mr-4"
              >
                innovation
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="inline-block mr-4"
              >
                and
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="inline-block text-maverick-yellow relative"
              >
                heart
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-maverick-yellow rounded opacity-80"></div>
              </motion.span>
            </div>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maverick-cream/80 mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-18 font-sans leading-relaxed mx-auto text-center"
          >
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-maverick-orange hover:bg-maverick-orange/90 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-maverick-cream text-maverick-cream hover:bg-maverick-cream hover:text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
              onClick={() => scrollToSection('work')}
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer text-maverick-cream/60 hover:text-maverick-cream transition-colors"
          onClick={() => scrollToSection('service-cascade')}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}