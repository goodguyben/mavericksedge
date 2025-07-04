
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import GradientText from "@/components/ui/GradientText";
import CardSwap, { Card } from "@/components/ui/CardSwap";

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

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex justify-start items-center w-full pointer-events-none relative">
        {/* Main Content - Left aligned and responsive */}
        <motion.div
          className="max-w-full lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[50%] text-left w-full pointer-events-auto relative pt-8 sm:pt-12 md:pt-16 lg:pt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.1 }}
          style={{ opacity: heroOpacity }}
        >
          {/* Location heading with metallic gradient */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-heading font-medium mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12"
          >
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-maverick-orange/80 flex-shrink-0" />
            <span className="font-light">
              <GradientText 
                colors={["#C0C0C0", "#E8E8E8", "#F5F5F5", "#FFFFFF", "#F5F5F5", "#E8E8E8", "#C0C0C0"]}
                animationSpeed={4}
              >
                Website Design Edmonton
              </GradientText>
            </span>
          </motion.h1>

          {/* Main heading - responsive text sizes */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-left">
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

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="hero-tagline text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-maverick-cream/80 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 font-sans leading-relaxed text-left"
          >
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business
          </motion.p>

          {/* Buttons - Left aligned */}
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

        {/* CardSwap Component - Right side for desktop/tablet, bottom right for mobile */}
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <CardSwap
            width={300}
            height={240}
            cardDistance={40}
            verticalDistance={50}
            delay={4000}
            pauseOnHover={true}
            easing="elastic"
          >
            <Card customClass="bg-gradient-to-br from-maverick-orange/20 to-maverick-orange/10 border-maverick-orange/30 p-6">
              <div className="text-maverick-cream text-sm font-medium">Web Design</div>
              <div className="text-maverick-cream/70 text-xs mt-2">Custom websites that convert</div>
            </Card>
            <Card customClass="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border-blue-600/30 p-6">
              <div className="text-maverick-cream text-sm font-medium">SEO Services</div>
              <div className="text-maverick-cream/70 text-xs mt-2">Rank higher, get more traffic</div>
            </Card>
            <Card customClass="bg-gradient-to-br from-green-600/20 to-green-600/10 border-green-600/30 p-6">
              <div className="text-maverick-cream text-sm font-medium">AI Integration</div>
              <div className="text-maverick-cream/70 text-xs mt-2">Smart automation solutions</div>
            </Card>
          </CardSwap>
        </div>

        {/* CardSwap Component - Mobile bottom right */}
        <div className="lg:hidden absolute bottom-4 right-4 pointer-events-auto">
          <CardSwap
            width={200}
            height={160}
            cardDistance={25}
            verticalDistance={30}
            delay={4000}
            pauseOnHover={true}
            easing="elastic"
          >
            <Card customClass="bg-gradient-to-br from-maverick-orange/20 to-maverick-orange/10 border-maverick-orange/30 p-4">
              <div className="text-maverick-cream text-xs font-medium">Web Design</div>
              <div className="text-maverick-cream/70 text-[10px] mt-1">Custom websites</div>
            </Card>
            <Card customClass="bg-gradient-to-br from-blue-600/20 to-blue-600/10 border-blue-600/30 p-4">
              <div className="text-maverick-cream text-xs font-medium">SEO Services</div>
              <div className="text-maverick-cream/70 text-[10px] mt-1">Rank higher</div>
            </Card>
            <Card customClass="bg-gradient-to-br from-green-600/20 to-green-600/10 border-green-600/30 p-4">
              <div className="text-maverick-cream text-xs font-medium">AI Integration</div>
              <div className="text-maverick-cream/70 text-[10px] mt-1">Smart automation</div>
            </Card>
          </CardSwap>
        </div>
      </div>

      {/* Scroll indicator */}
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
