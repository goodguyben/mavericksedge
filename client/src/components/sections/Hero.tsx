import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/blocks/animated-gallery"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import GradientText from "@/components/ui/GradientText";

// Project assets - videos and images from /videos/services
const MEDIA_COL_1 = [
  "/videos/services/Custom Interactive Websites 1.mp4",
  "/videos/services/Custom AI Solutions.jpg",
  "/videos/services/Custom Interactive Websites 2.mp4",
  "/videos/services/Next-Gen E-Commerce 1.mp4",
]

const MEDIA_COL_2 = [
  "/videos/services/Social Media Management.mp4",
  "/videos/services/Productivity & Management Web Applications 2.png",
  "/videos/services/Custom Interactive Websites 3.mp4",
  "/videos/services/Next-Gen E-Commerce 2.mp4",
]

const MEDIA_COL_3 = [
  "/videos/services/Productivity & Management Web Applications 1.mp4",
  "/videos/services/Productivity & Management Web Applications 3.mp4",
  "/videos/background.mp4",
  "/assets/logo-transparent-thumb4x.png",
]

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate opacity based on scroll position for text content
      const scrollY = window.scrollY;
      const maxFade = 400;
      const opacity = Math.max(0, 1 - (scrollY / maxFade));
      setHeroOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderMediaItem = (src: string, index: number, alt: string) => {
    const isVideo = src.endsWith('.mp4');
    
    if (isVideo) {
      return (
        <video
          key={index}
          className="aspect-video block h-auto max-h-full w-full rounded-lg object-cover shadow-lg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
      );
    } else {
      return (
        <img
          key={index}
          className="aspect-video block h-auto max-h-full w-full rounded-lg object-cover shadow-lg"
          src={src}
          alt={alt}
          loading={index < 2 ? "eager" : "lazy"}
        />
      );
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen overflow-hidden">
      {/* Hero Text Content - Positioned above gallery */}
      <div className="absolute inset-0 z-[9999] flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <motion.div
            className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center w-full pointer-events-auto relative mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroOpacity, y: 0 }}
            transition={{ duration: 0.1 }}
            style={{ opacity: heroOpacity }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-center px-2">
              <div className="inline-block">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="inline-block mr-2"
                >
                  Building
                </motion.span>
                <span className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="mr-2"
                  >
                    <GradientText 
                      colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                      animationSpeed={6}
                    >
                      resilience
                    </GradientText>
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
              className="hero-tagline text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-maverick-cream/80 mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 font-sans leading-relaxed mx-auto text-center"
            >
              We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center items-center px-4"
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 z-[10000] pointer-events-auto"
        animate={{ 
          opacity: scrolled ? 0 : 1,
          y: scrolled ? 10 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection("services")}
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-maverick-orange" />
      </motion.div>
      
      {/* Animated gradient overlay */}
      <div 
        className="pointer-events-none absolute z-10 h-[70vh] w-full opacity-20"
        style={{
          background: "linear-gradient(135deg, #FF5630, #FF8A50, #1a1a1a)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Animated Gallery Background */}
      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="p-2 md:p-4">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {MEDIA_COL_1.map((src, index) => 
                renderMediaItem(src, index, `Service showcase ${index + 1}`)
              )}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {MEDIA_COL_2.map((src, index) => 
                renderMediaItem(src, index, `Digital solution ${index + 1}`)
              )}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {MEDIA_COL_3.map((src, index) => 
                renderMediaItem(src, index, `Technology showcase ${index + 1}`)
              )}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}