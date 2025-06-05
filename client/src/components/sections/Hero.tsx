
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Sparkles, Zap, Rocket } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const { scrollY } = useScroll();

  // Parallax transforms for background elements
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -600]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

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
      {/* Enhanced Video Background with Overlay Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover scale-110"
          style={{
            objectPosition: window?.innerWidth <= 768 ? 'center center' : 'center center'
          }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        
        {/* Multi-layered overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-maverick-charcoal/80 via-transparent to-transparent" />
        
        {/* Animated overlay particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-maverick-orange/30 rounded-full blur-sm"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-1 h-1 bg-maverick-cream/40 rounded-full blur-sm"
            animate={{
              y: [15, -15, 15],
              x: [8, -8, 8],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      {/* Floating Background Graphics */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-20 right-20 w-32 h-32 opacity-10"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-maverick-orange to-maverick-amber blur-xl" />
        </motion.div>
        
        <motion.div
          style={{ y: y2, scale }}
          className="absolute bottom-32 left-16 w-24 h-24 opacity-15"
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-maverick-cream to-maverick-orange blur-lg rotate-45" />
        </motion.div>
        
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-maverick-orange via-transparent to-maverick-amber blur-3xl" />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex justify-center items-center w-full pointer-events-none">
        <motion.div
          className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center w-full pointer-events-auto relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity: heroOpacity }}
        >
          {/* Decorative Icons */}
          <motion.div
            className="flex justify-center items-center space-x-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 rounded-full bg-maverick-orange/10 backdrop-blur-sm border border-maverick-orange/20"
            >
              <Sparkles className="w-6 h-6 text-maverick-orange" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-2 rounded-full bg-maverick-cream/10 backdrop-blur-sm border border-maverick-cream/20"
            >
              <Zap className="w-6 h-6 text-maverick-cream" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 rounded-full bg-maverick-amber/10 backdrop-blur-sm border border-maverick-amber/20"
            >
              <Rocket className="w-6 h-6 text-maverick-amber" />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading with Better Typography */}
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-heading font-black tracking-tight leading-[0.9] text-maverick-cream text-center px-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span className="inline-block">
              Building{" "}
            </motion.span>
            <span className="relative inline-block">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-maverick-orange via-maverick-amber to-maverick-orange bg-size-200 animate-gradient-x"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                resilience
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.4, duration: 1 }}
              />
            </span>
            <br className="hidden sm:block" />
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-maverick-cream to-white">
                innovation
              </span>
              {" "}and{" "}
              <span className="text-maverick-orange">
                heart
              </span>
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle with Better Formatting */}
          <motion.div
            className="relative mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-maverick-orange/5 to-transparent rounded-lg" />
            <p className="relative text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-maverick-cream/90 font-medium leading-relaxed mx-auto text-center max-w-4xl px-4 py-6">
              We're{" "}
              <span className="text-maverick-orange font-semibold">Edmonton-based creators</span>
              {" "}who design beautiful websites, improve your online visibility, and offer smart{" "}
              <span className="text-maverick-amber font-semibold">AI Integration</span>
              {" "}so you can focus on growing your business
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                href="/services" 
                variant="primary"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Explore Services</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-maverick-orange to-maverick-amber opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                href="/contact" 
                variant="outline"
                className="group relative overflow-hidden border-2 border-maverick-cream/30 backdrop-blur-sm"
              >
                <span className="relative z-10 group-hover:text-maverick-charcoal transition-colors duration-300">
                  Book Free Consultation
                </span>
                <motion.div
                  className="absolute inset-0 bg-maverick-cream scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Additional Value Proposition */}
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-maverick-cream/60 text-sm font-medium">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-maverick-orange rounded-full" />
                <span>Custom Solutions</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-maverick-amber rounded-full" />
                <span>AI-Powered</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-maverick-cream rounded-full" />
                <span>Edmonton Local</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="scroll-indicator cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto group"
        animate={{ 
          opacity: scrolled ? 0 : 1,
          y: scrolled ? 20 : 0 
        }}
        transition={{ duration: 0.4 }}
        onClick={() => scrollToSection("services")}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-maverick-cream/70 text-xs font-medium tracking-wide">
            Discover More
          </span>
          <div className="p-3 rounded-full bg-maverick-orange/10 backdrop-blur-sm border border-maverick-orange/30 group-hover:bg-maverick-orange/20 transition-colors duration-300">
            <ChevronDown className="h-5 w-5 text-maverick-orange" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
