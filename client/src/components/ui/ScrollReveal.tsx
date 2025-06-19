
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 5,
  blurStrength = 10,
  delay = 0,
  duration = 0.8,
  className = ""
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: baseOpacity,
        y: 20,
        rotateX: baseRotation,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)'
      } : {}}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}
