import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";

// Import video directly using Vite's asset handling
import backgroundVideo from "@assets/3129977-uhd_3840_2160_30fps.mp4";

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
    <section className="relative h-screen flex items-center overflow-hidden pt-24 md:pt-32 bg-neumorphic-bg">
      {/* Neumorphic background with subtle patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Dark overlay for better text readability with neumorphic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-neumorphic-bg to-black/70 z-10"></div>

        {/* Video element with reduced opacity for minimalist look */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className={`absolute top-0 left-0 min-w-full min-h-full object-cover transition-opacity duration-1000 opacity-30 ${videoLoaded ? 'opacity-30' : 'opacity-0'}`}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        {/* Neumorphic gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#161a1e] via-[#1A1D21] to-[#141619] bg-gradient-animate animate-gradient-slow z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-70' : 'opacity-100'}`}></div>
      </div>

      {/* Subtle neumorphic pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Soft neumorphic accent lighting */}
      <div className="absolute w-full h-full top-0 left-0 opacity-20 pointer-events-none z-10">
        <div className="absolute w-96 h-96 rounded-full bg-neumorphic-orange opacity-10 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-neumorphic-orange opacity-5 blur-3xl bottom-20 right-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 z-20 flex justify-center items-center w-full">
        <motion.div
          className="neuro-container max-w-4xl text-center w-full bg-transparent py-12"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-wide leading-normal text-neumorphic-text text-center">
            <div className="inline-block">
              Building{" "}
              <span className="neuro-highlight text-neumorphic-orange relative inline-block">
                <span>resilience</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-neumorphic-orange"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
              {" "}with innovation
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-neumorphic-text-secondary mt-6 mb-10 max-w-2xl font-body leading-relaxed mx-auto text-center">
            Web development, marketing, and AI integration services tailored for
            SMBs and nonprofits
          </p>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-center">
            <a 
              href="/services" 
              className="neuro-btn neuro-btn-primary inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Explore services
            </a>
            <a 
              href="/contact" 
              className="neuro-btn inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Neumorphic scroll indicator */}
      <motion.div
        className="scroll-indicator cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          opacity: scrolled ? 0 : 1,
          y: scrolled ? 10 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection("services")}
      >
        <div className="neuro-icon">
          <ChevronDown className="h-5 w-5 text-neumorphic-orange" />
        </div>
      </motion.div>
    </section>
  );
}