
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import GradientText from "@/components/ui/GradientText";
import { 
  ContainerScroll, 
  ContainerSticky, 
  GalleryContainer, 
  GalleryCol, 
  GalleryItem 
} from "@/components/blocks/animated-gallery";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gallery images/videos for the scroll animation
  const galleryItems = [
    // Column 1
    [
      { type: 'video', src: '/videos/services/Custom Interactive Websites 1.mp4', alt: 'Custom Website Development' },
      { type: 'video', src: '/videos/services/Next-Gen E-Commerce 1.mp4', alt: 'E-Commerce Solutions' },
      { type: 'image', src: '/videos/services/Custom AI Solutions.jpg', alt: 'AI Integration' },
    ],
    // Column 2
    [
      { type: 'video', src: '/videos/services/Custom Interactive Websites 2.mp4', alt: 'Interactive Websites' },
      { type: 'video', src: '/videos/services/Social Media Management.mp4', alt: 'Social Media Management' },
      { type: 'video', src: '/videos/services/Productivity & Management Web Applications 1.mp4', alt: 'Web Applications' },
    ],
    // Column 3
    [
      { type: 'video', src: '/videos/services/Custom Interactive Websites 3.mp4', alt: 'Modern Web Design' },
      { type: 'video', src: '/videos/services/Next-Gen E-Commerce 2.mp4', alt: 'Advanced E-Commerce' },
      { type: 'image', src: '/videos/services/Productivity & Management Web Applications 2.png', alt: 'Management Solutions' },
    ]
  ];

  return (
    <section className="relative overflow-hidden opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.2s_forwards]">
      <ContainerScroll className="min-h-screen">
        {/* Hero Content - Sticky positioned */}
        <ContainerSticky className="flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex justify-center items-center w-full pointer-events-none">
            <motion.div
              className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center w-full pointer-events-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-center px-2 mb-6">
                <div className="inline-block">
                  {/* Word-by-word animation for the heading */}
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
                className="hero-tagline text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-maverick-cream/80 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 font-sans leading-relaxed mx-auto text-center"
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

          {/* Scroll-based Gallery Animation */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <GalleryContainer className="h-full w-full max-w-6xl mx-auto p-4">
              {galleryItems.map((column, colIndex) => (
                <GalleryCol 
                  key={colIndex}
                  yRange={
                    colIndex === 0 ? ["0%", "-20%"] :
                    colIndex === 1 ? ["0%", "-10%"] :
                    ["0%", "-30%"]
                  }
                >
                  {column.map((item, itemIndex) => (
                    <GalleryItem 
                      key={itemIndex}
                      className="aspect-[3/4] bg-gray-800 overflow-hidden"
                    >
                      {item.type === 'video' ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-300"
                          onError={(e) => {
                            console.warn(`Gallery video failed to load: ${item.src}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        >
                          <source src={item.src} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-300"
                          onError={(e) => {
                            console.warn(`Gallery image failed to load: ${item.src}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      {/* Overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </GalleryItem>
                  ))}
                </GalleryCol>
              ))}
            </GalleryContainer>
          </motion.div>
        </ContainerSticky>
      </ContainerScroll>

      <motion.div
        className="scroll-indicator cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto"
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
