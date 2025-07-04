import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import GradientText from "@/components/ui/GradientText";


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
    <section className="relative min-h-screen flex items-center overflow-hidden opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.2s_forwards]">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center center'
          }}
          onError={(e) => {
            console.warn('Hero video failed to load:', e);
            // Fallback to a solid background
            e.currentTarget.style.display = 'none';
          }}
          onLoadStart={() => {
            console.log('Hero video loading started');
          }}
          onCanPlay={() => {
            console.log('Hero video can play');
          }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50 mt-[-2px] mb-[-2px]" />
        {/* Fallback background in case video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" style={{ zIndex: -1 }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex justify-center items-center w-full pointer-events-none">
        <motion.div
          className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center sm:text-left w-full pointer-events-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.1 }}
          style={{ opacity: heroOpacity }}
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center sm:justify-start gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-heading font-medium text-maverick-cream/70 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14"
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 text-maverick-orange/80 flex-shrink-0" />
            <span className="font-light">Website Design Edmonton</span>
          </motion.h1>

          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-center sm:text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block"
            >
              <span className="text-maverick-cream block sm:inline">
                Building Resilient Online Presence from 
              </span>
              <span className="block">
                <GradientText 
                  colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                  animationSpeed={6}
                >
                  River valley to digital valley
                </GradientText>
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="hero-tagline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-maverick-cream/80 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 font-sans leading-relaxed text-center sm:text-left px-2 sm:px-0"
          >
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start items-center px-4 sm:px-0"
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
        className="scroll-indicator cursor-pointer absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto"
        animate={{ 
          opacity: scrolled ? 0 : 1,
          y: scrolled ? 10 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection("services")}
      >
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce text-maverick-orange" />
      </motion.div>
    </section>
  );
}