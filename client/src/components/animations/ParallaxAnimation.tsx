
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 1], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.2, 0.8]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, -5]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -5, 5]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative h-[140vh] overflow-hidden bg-maverick-charcoal"
      style={{ position: 'relative' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-center px-4">
          {/* Background gradient blobs */}
          <motion.div 
            className="absolute w-[500px] h-[500px] rounded-full bg-maverick-orange/20 blur-3xl" 
            style={{ 
              x: -150, 
              y: y1, 
              opacity: opacity1,
              scale: scale1,
            }}
          />
          
          <motion.div 
            className="absolute right-0 w-[400px] h-[400px] rounded-full bg-maverick-amber/20 blur-3xl" 
            style={{ 
              x: 100, 
              y: y2, 
              opacity: opacity2,
              scale: scale2,
            }}
          />
          
          {/* Animated cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10 w-full max-w-5xl">
            <motion.div 
              className="rounded-xl p-6 backdrop-blur-lg bg-maverick-slate/20 border border-maverick-orange/20 shadow-xl"
              style={{ 
                y: y1, 
                opacity: opacity1,
                rotate: rotate1
              }}
            >
              <div className="text-maverick-orange text-5xl mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">Innovative Solutions</h3>
              <p className="text-maverick-cream/90">Cutting-edge technology tailored for your business needs.</p>
            </motion.div>
            
            <motion.div 
              className="rounded-xl p-6 backdrop-blur-lg bg-maverick-slate/20 border border-maverick-orange/20 shadow-xl md:mt-16"
              style={{ 
                y: y3, 
                opacity: opacity2,
                rotate: rotate2
              }}
            >
              <div className="text-maverick-orange text-5xl mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">Creative Designs</h3>
              <p className="text-maverick-cream/90">Modern, responsive interfaces that elevate your brand.</p>
            </motion.div>
            
            <motion.div 
              className="rounded-xl p-6 backdrop-blur-lg bg-maverick-slate/20 border border-maverick-orange/20 shadow-xl"
              style={{ 
                y: y2, 
                opacity: opacity3,
                rotate: rotate1
              }}
            >
              <div className="text-maverick-orange text-5xl mb-4">03</div>
              <h3 className="text-2xl font-bold mb-3">Strategic Growth</h3>
              <p className="text-maverick-cream/90">Data-driven approaches to help your business scale effectively.</p>
            </motion.div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute w-16 h-16 rounded-full bg-maverick-orange/40 top-1/4 left-1/4"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -200]),
              x: useTransform(scrollYProgress, [0, 1], [0, 100]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 0]),
            }}
          />
          
          <motion.div 
            className="absolute w-8 h-8 rounded-md bg-maverick-amber/40 bottom-1/3 right-1/3"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -150]),
              x: useTransform(scrollYProgress, [0, 1], [0, -100]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 0]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
            }}
          />
          
          <motion.div 
            className="absolute w-12 h-12 rounded-lg bg-maverick-orange/30 top-1/3 right-1/4"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -120]),
              x: useTransform(scrollYProgress, [0, 1], [0, -50]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 0]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, -90]),
            }}
          />
        </div>
      </div>
    </div>
  );
}
