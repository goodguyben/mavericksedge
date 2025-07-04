import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import GradientText from "@/components/ui/GradientText";
import HeroSideComponent from "@/components/ui/HeroSideComponent";


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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex items-start justify-between w-full pointer-events-none min-h-screen pt-8 sm:pt-12 md:pt-16 lg:pt-24">
        {/* Main Content - Left Side */}
        <motion.div
          className="w-full lg:w-3/5 xl:w-1/2 text-left pointer-events-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.1 }}
          style={{ opacity: heroOpacity }}
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-start gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-heading font-medium mb-2 sm:mb-3 md:mb-4"
          >
            <MapPin className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-maverick-orange/80 flex-shrink-0" />
            <GradientText 
              colors={["#C0C0C0", "#E5E5E5", "#F0F0F0", "#FFFFFF", "#F0F0F0", "#E5E5E5", "#C0C0C0"]}
              animationSpeed={4}
            >
              Website Design Edmonton
            </GradientText>
          </motion.h1>

          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block"
            >
              <span className="text-maverick-cream block">
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
            className="hero-tagline text-xs sm:text-sm md:text-base lg:text-lg text-maverick-cream/80 mt-3 sm:mt-4 md:mt-6 lg:mt-8 mb-3 sm:mb-4 md:mb-6 lg:mb-8 font-sans leading-relaxed text-left max-w-lg lg:max-w-xl"
          >
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-start items-start"
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

        {/* Side Component - Right Side (Desktop/Tablet) */}
        <div className="hidden md:block md:w-2/5 lg:w-2/5 xl:w-1/2 ml-6 lg:ml-8 xl:ml-12 pointer-events-auto">
          <HeroSideComponent />
        </div>
      </div>

      {/* Side Component - Bottom Right (Mobile) */}
      <div className="md:hidden absolute bottom-4 right-4 w-72 h-80 pointer-events-auto z-30">
        <HeroSideComponent />
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