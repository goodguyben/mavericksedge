import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollFade, ScrollFadeOptions } from '@/hooks/useScrollFade';

interface ScrollFadeSectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  minOpacity?: number;
  fadeOutPoint?: number;
  fadeInPoint?: number;
  fadeOutDuration?: number;
  fadeInDuration?: number;
  initialOpacity?: number;
}

/**
 * A section component with scroll-based fade effects
 * Wraps children in a motion.div that changes opacity based on scroll position
 */
export default function ScrollFadeSection({
  className = '',
  children,
  id,
  minOpacity = 0.05,
  fadeOutPoint = 0.3,
  fadeInPoint = 0.9,
  fadeOutDuration = 1,
  fadeInDuration = 1.2,
  initialOpacity = 0,
}: ScrollFadeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use our custom hook to calculate opacity based on scroll position
  const opacity = useScrollFade(sectionRef, {
    minOpacity,
    fadeOutPoint,
    fadeInPoint,
    fadeOutDuration,
    fadeInDuration,
    initialOpacity,
  });

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className={`relative ${className}`}
      style={{ opacity }}
      initial={{ opacity: initialOpacity }}
      animate={{ opacity }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.section>
  );
}