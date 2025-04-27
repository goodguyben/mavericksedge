import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";

// Video background URL - using a royalty-free video from Pixabay
const BACKGROUND_VIDEO_URL = "https://cdn.pixabay.com/vimeo/750351709/team-153989.mp4?width=1280&hash=9e6c063f6d02ef36d01a4c64c21c33b65b7abb70";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Background video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className={`absolute top-0 left-0 min-w-full min-h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlays for added depth - subtle gradients over the video */}
      <div className="absolute w-full h-full top-0 left-0 opacity-40 pointer-events-none z-10">
        <div className="absolute w-96 h-96 rounded-full bg-maverick-orange opacity-30 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-maverick-amber opacity-20 blur-3xl bottom-20 right-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 z-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-wide leading-[2.2] text-maverick-cream">
            Building{" "}
            <span className="text-maverick-orange relative">
              <span>resilience</span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-maverick-orange"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span> with thoughtful innovation and heart
          </h1>
          <p className="text-xl md:text-2xl text-maverick-cream/80 mt-6 mb-10 max-w-2xl font-sans leading-relaxed">
            Web development, marketing, and AI integration services tailored for
            SMBs and nonprofits
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              href="/services" 
              variant="primary"
            >
              Explore services
            </Button>
            <Button 
              href="/contact" 
              variant="outline"
            >
              Get in touch
            </Button>
          </div>
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
