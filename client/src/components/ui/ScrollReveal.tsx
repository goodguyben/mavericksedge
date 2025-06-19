
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function ScrollReveal({
  children,
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 5,
  blurStrength = 10,
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold,
    once: triggerOnce 
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        filter: enableBlur ? 'blur(0px)' : undefined,
        rotateX: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      });
    } else if (!triggerOnce) {
      controls.start({
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : undefined,
        rotateX: baseRotation,
        y: 20,
        transition: {
          duration: duration * 0.5,
          ease: "easeIn"
        }
      });
    }
  }, [isInView, controls, baseOpacity, enableBlur, baseRotation, blurStrength, delay, duration, triggerOnce]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : undefined,
        rotateX: baseRotation,
        y: 20,
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
