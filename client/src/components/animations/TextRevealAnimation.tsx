
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  title: string;
  subtitle: string;
}

export default function TextRevealAnimation({ title, subtitle }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Split title into words for individual animation
  const titleWords = title.split(' ');
  
  return (
    <div 
      ref={containerRef} 
      className="py-40 md:py-60 bg-maverick-charcoal relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container mx-auto px-4 md:px-10 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 overflow-hidden">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block text-4xl md:text-6xl font-bold mr-4 text-maverick-cream"
                style={{ 
                  opacity: useTransform(
                    scrollYProgress, 
                    [0, 0.2 + index * 0.05, 0.4 + index * 0.05, 1], 
                    [0, 1, 1, 0.7]
                  ),
                  y: useTransform(
                    scrollYProgress,
                    [0, 0.2 + index * 0.05, 1],
                    [100, 0, 0]
                  )
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <motion.p
            className="text-xl md:text-2xl text-maverick-cream/80 max-w-2xl mx-auto"
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0.7]),
              y: useTransform(scrollYProgress, [0, 0.4, 1], [50, 0, 0])
            }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="mt-8"
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.7]),
              y: useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, 0])
            }}
          >
            <div className="inline-block px-8 py-3 rounded-full bg-maverick-orange/20 border border-maverick-orange/40 backdrop-blur-sm">
              <span className="text-maverick-orange font-medium">Innovative Solutions for Modern Challenges</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-maverick-orange/10 blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 0]),
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-maverick-amber/10 blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 0]),
        }}
      />
    </div>
  );
}
