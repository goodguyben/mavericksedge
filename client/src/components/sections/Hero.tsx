
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Sparkles, Brain, Zap } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import AIWebGLBackground from "@/components/ui/AIWebGLBackground";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate opacity based on scroll position
      const scrollY = window.scrollY;
      const maxFade = 400;
      const opacity = Math.max(0, 1 - (scrollY / maxFade));
      setHeroOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* AI WebGL Background */}
      <AIWebGLBackground 
        className="absolute inset-0 z-0"
        neuronCount={{
          input: 12,
          processing: 18,
          reasoning: 15,
          output: 10
        }}
        showGrid={true}
        showLabels={false}
        showParticles={true}
        colorScheme="default"
        allowLLMSelection={true}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10" />
      
      {/* Floating AI Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {/* Floating Brain Icons */}
        <motion.div
          className="absolute top-20 left-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Brain className="h-8 w-8 text-maverick-orange/40" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-32"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Sparkles className="h-6 w-6 text-maverick-cream/30" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Zap className="h-7 w-7 text-maverick-orange/35" />
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-maverick-orange/10 to-maverick-cream/10 blur-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-lg"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-20 flex justify-center items-center w-full relative"
        style={{ y, opacity }}
      >
        <div className="max-w-6xl text-center w-full relative">
          {/* AI Badge */}
          <motion.div
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-maverick-orange/10 border border-maverick-orange/20 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Brain className="h-5 w-5 text-maverick-orange mr-2" />
            <span className="text-maverick-orange font-medium">AI-Powered Solutions</span>
          </motion.div>

          {/* Main Heading with Typewriter Effect */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-extrabold tracking-tight leading-[0.9] text-maverick-cream mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <span className="block">Building</span>
              <div className="relative inline-block">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-maverick-orange via-yellow-400 to-maverick-orange"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  intelligent
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-maverick-orange to-yellow-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.6, duration: 1 }}
                />
              </div>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                solutions
              </motion.span>
            </motion.div>
          </h1>

          {/* Enhanced Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-maverick-cream/80 leading-relaxed max-w-4xl mx-auto font-light">
              We're Edmonton's{" "}
              <span className="text-maverick-orange font-medium">AI integration specialists</span>{" "}
              who design beautiful websites, optimize your digital presence, and implement{" "}
              <span className="text-maverick-orange font-medium">smart AI automation</span>{" "}
              so you can focus on what matters most.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            {[
              "AI Automation",
              "Custom Web Development", 
              "SEO Optimization",
              "Digital Strategy"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                className="px-4 py-2 rounded-full bg-maverick-cream/10 border border-maverick-cream/20 text-maverick-cream/70 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 211, 75, 0.1)",
                  borderColor: "rgba(255, 211, 75, 0.3)"
                }}
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              href="/services" 
              variant="primary"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore AI Solutions
                <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-maverick-orange to-yellow-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Button 
              href="/contact" 
              variant="outline"
              className="group"
            >
              <span className="flex items-center">
                Free AI Assessment
                <Brain className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            {[
              { number: "50+", label: "AI Projects" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "40%", label: "Avg. Cost Savings" },
              { number: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 3.4 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-maverick-orange mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-maverick-cream/60 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="scroll-indicator cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ 
          opacity: scrolled ? 0 : 1,
          y: scrolled ? 10 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection("services")}
      >
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-maverick-cream/60 text-sm font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-maverick-orange/40 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-maverick-orange rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <ChevronDown className="h-5 w-5 text-maverick-orange/60" />
        </motion.div>
      </motion.div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-maverick-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-maverick-orange/3 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
}
