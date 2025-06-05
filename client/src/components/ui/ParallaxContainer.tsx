
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
  rotate?: boolean;
  blur?: boolean;
  className?: string;
}

export default function ParallaxContainer({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  scale = false,
  rotate = false,
  blur = false,
  className = '' 
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  // Create smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Different directional transforms
  const transforms = {
    up: useTransform(smoothProgress, [0, 1], [100 * speed, -100 * speed]),
    down: useTransform(smoothProgress, [0, 1], [-100 * speed, 100 * speed]),
    left: useTransform(smoothProgress, [0, 1], [100 * speed, -100 * speed]),
    right: useTransform(smoothProgress, [0, 1], [-100 * speed, 100 * speed])
  };

  const scaleTransform = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const rotateTransform = useTransform(smoothProgress, [0, 1], [0, 360]);
  const blurTransform = useTransform(smoothProgress, [0, 0.5, 1], [0, 2, 4]);

  const getTransformStyle = () => {
    const base: any = {};
    
    if (direction === 'up' || direction === 'down') {
      base.y = transforms[direction];
    } else {
      base.x = transforms[direction];
    }

    if (scale) base.scale = scaleTransform;
    if (rotate) base.rotate = rotateTransform;
    if (blur) base.filter = useTransform(blurTransform, (value) => `blur(${value}px)`);

    return base;
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={getTransformStyle()}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
