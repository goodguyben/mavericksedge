import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";

// Import video directly using Vite's asset handling
import backgroundVideo from "../../../assets/3129977-uhd_3840_2160_30fps.mp4";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1); // Added state for hero opacity
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Calculate heroOpacity based on scroll position
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.max-w-4xl')?.offsetHeight || 0; // Get hero section height
      const opacityThreshold = 0.7; // Adjust as needed.  0 = fully transparent at the top, 1 at the bottom
      const opacity = Math.max(0, 1 - (scrollY / (heroHeight * opacityThreshold)));
      setHeroOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle video loading
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
      });

      // Fallback in case video doesn't load in 3 seconds
      const timeout = setTimeout(() => {
        if (!videoLoaded) setVideoLoaded(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [videoLoaded]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-32">
      {/* Video background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Video element */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className={`absolute top-0 left-0 min-w-full min-h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        {/* Fallback gradient background (shows while video loads or if video fails) */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] bg-gradient-animate animate-gradient-slow z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>
      <div className="container mx-auto px-4 md:px-10 z-20 flex justify-center items-center w-full">
        <motion.div
          className="max-w-4xl text-center w-full"
          initial={{ opacity: 1, y: 0 }} // Start fully opaque
          animate={{ opacity: heroOpacity, y: 0 }} // Animate opacity based on scroll
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-center">
            <div className="inline-block text-[64px]">
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
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-maverick-cream/80 mt-3 xs:mt-4 sm:mt-6 md:mt-8 mb-6 xs:mb-8 sm:mb-10 md:mb-12 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-3 xs:px-4 sm:px-2 font-sans leading-relaxed mx-auto text-center"
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