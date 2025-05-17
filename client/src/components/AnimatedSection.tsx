
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  fadeDirection?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: React.ElementType;
}

export default function AnimatedSection({
  children,
  className = "",
  threshold = 0.1,
  fadeDirection = "up",
  distance = 50,
  delay = 0,
  duration = 0.6,
  once = true,
  as = "div"
}: AnimatedSectionProps) {
  const { ref, style, isInView } = useScrollAnimation({
    threshold,
    fadeDirection,
    distance,
    delay,
    duration
  });
  
  const Component = motion[as as keyof typeof motion] || motion.div;
  
  return (
    <Component
      ref={ref}
      className={`relative ${className}`}
      style={{ position: "relative" }} // Fix for framer-motion warning
      initial={{ opacity: 0 }}
      animate={once && isInView ? { opacity: 1 } : {}}
      whileInView={!once ? { opacity: 1 } : {}}
      viewport={!once ? { once: false } : {}}
      transition={{ duration: duration, delay: delay }}
    >
      <motion.div style={style} className="w-full h-full">
        {children}
      </motion.div>
    </Component>
  );
}
