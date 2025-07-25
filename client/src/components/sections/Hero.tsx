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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-red-900">
      {/* TEST: Temporary red background to verify visibility */}
      <div className="absolute inset-0 bg-red-500 z-5" />
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50 mt-[-10px] mb-[-10px]" />
      </div>
      {/* Content Container */}
      <div className="container mx-auto px-0 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex justify-start items-center w-full pointer-events-none relative">
        {/* Main Content - Left aligned and responsive */}
        <motion.div
          className="max-w-full lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[50%] text-left w-full pointer-events-auto relative sm:pt-4 md:pt-8 lg:pt-0 mt-[45px] sm:mt-[55px] md:mt-[65px] lg:mt-[84px] mb-[84px] pt-[20px] sm:pt-[25px] md:pt-[30px] pb-[30px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Location heading with metallic gradient */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center gap-2 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-heading font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-6 justify-start md:justify-start"
          >
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-4 lg:w-4 xl:h-5 xl:h-5 2xl:h-6 2xl:w-6 text-maverick-orange/80 flex-shrink-0" />
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
              transition={{ duration: 0.8, delay: 1.0 }}
              className="block"
            >
              <span className="text-maverick-cream block font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-[56px]">Building resilient online presence from</span>
              <span className="block text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-[58px]">
                <GradientText 
                  colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                  animationSpeed={6}
                >
                  river valley to digital valley
                </GradientText>
              </span>
            </motion.div>
          </div>

          {/* Description text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-maverick-cream/80 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 font-sans leading-relaxed text-left mt-[16px] mb-[24px]"
          >
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business
          </motion.p>

          

          {/* Buttons - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
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

        {/* CardSwap Component - Right side for desktop/tablet, moved down */}
        <motion.div 
          className="hidden lg:block absolute right-0 bottom-20 pointer-events-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 3.5, ease: "easeOut" }}
        >
          <CardSwap
            width={600}
            height={400}
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card 
              title="Mobile Responsive"
            />
            <Card 
              title="Human Design"
            />
            <Card 
              title="Google Ranked"
            />
            <Card 
              title="Affordable"
            />
          </CardSwap>
        </motion.div>

        {/* CardSwap Component - Mobile bottom right, larger */}
        <motion.div 
          className="lg:hidden absolute bottom-4 right-4 pointer-events-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 3.5, ease: "easeOut" }}
        >
          <CardSwap
            width={500}
            height={340}
            cardDistance={55}
            verticalDistance={60}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card 
              title="Mobile Responsive"
            />
            <Card 
              title="Human Design"
            />
            <Card 
              title="Google Ranked"
            />
            <Card 
              title="Affordable"
            />
          </CardSwap>
        </motion.div>
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