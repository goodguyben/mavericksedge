import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useOptimizedScrollFade, ScrollFadeOptions } from '@/hooks/useOptimizedScrollFade';
import { useScrollFade } from '@/hooks/useScrollFade';

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
  useFallback?: boolean; // Add option to use original implementation
}

/**
 * A section component with scroll-based fade effects
 * Now uses optimized scroll management for better performance
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
  useFallback = false, // Default to optimized version
}: ScrollFadeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use fallback or optimized hook based on prop
  const opacity = useFallback 
    ? useScrollFade(sectionRef, {
        minOpacity,
        fadeOutPoint,
        fadeInPoint,
        fadeOutDuration,
        fadeInDuration,
        initialOpacity,
      })
    : useOptimizedScrollFade(sectionRef, {
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
      className={`relative pt-[0px] pb-[0px] ${className}`}
      initial={{ opacity: initialOpacity }}
      animate={{ opacity }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.section>
  );
}