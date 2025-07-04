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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex justify-start items-center w-full pointer-events-none relative">
        {/* Main Hero Content - Left Aligned */}
        <motion.div
          className="w-full lg:w-3/5 xl:w-1/2 text-left pointer-events-auto relative mt-16 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.1 }}
          style={{ opacity: heroOpacity }}
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-start gap-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-medium mb-3 sm:mb-4 md:mb-6"
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-maverick-orange/80 flex-shrink-0" />
            <GradientText 
              colors={["#C0C0C0", "#E5E5E5", "#F8F8FF", "#DCDCDC", "#C0C0C0"]}
              animationSpeed={8}
            >
              <span className="font-light">Website Design Edmonton</span>
            </GradientText>
          </motion.h1>

          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-left">
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
            className="hero-tagline text-sm sm:text-base md:text-lg lg:text-xl text-maverick-cream/80 mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 font-sans leading-relaxed text-left"
          >
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start"
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

        {/* Placeholder for CardSwap Component - Temporarily Disabled */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="hidden lg:block absolute right-8 xl:right-16 top-1/2 transform -translate-y-1/2 pointer-events-auto"
        >
          <div className="w-72 h-48 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-maverick-orange/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-maverick-orange font-semibold mb-3 text-center">Our Services</h3>
            <div className="space-y-2 text-sm text-maverick-cream/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-maverick-orange rounded-full"></div>
                <span>Custom Web Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Digital Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>AI Integration</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Service Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="lg:hidden absolute bottom-4 right-4 pointer-events-auto"
        >
          <div className="w-40 h-28 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-maverick-orange/30 rounded-lg p-3 backdrop-blur-sm">
            <h4 className="text-maverick-orange font-semibold text-xs mb-2 text-center">Services</h4>
            <div className="space-y-1 text-xs text-maverick-cream/80">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-maverick-orange rounded-full"></div>
                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <span>Marketing</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>AI Tech</span>
              </div>
            </div>
          </div>
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