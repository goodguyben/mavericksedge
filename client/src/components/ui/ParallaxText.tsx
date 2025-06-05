
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxTextProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  effect?: 'slide' | 'zoom' | 'rotate' | 'wave';
}

export default function ParallaxText({ 
  children, 
  speed = 0.5, 
  className = '',
  effect = 'slide' 
}: ParallaxTextProps) {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  
  const getEffectStyle = () => {
    switch (effect) {
      case 'zoom':
        return { scale };
      case 'rotate':
        return { rotate };
      case 'wave':
        return { 
          y,
          rotateX: useTransform(scrollY, [0, 500], [0, 15]),
          rotateY: useTransform(scrollY, [0, 500], [0, 10])
        };
      default:
        return { y };
    }
  };

  return (
    <motion.div
      style={getEffectStyle()}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
