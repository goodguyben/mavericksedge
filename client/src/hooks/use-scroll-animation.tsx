
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollAnimationProps {
  threshold?: number;
  fadeDirection?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  duration?: number;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  fadeDirection = "up",
  distance = 50,
  delay = 0,
  duration = 0.6
}: ScrollAnimationProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", `start ${1 - threshold}`]
  });
  
  // Set up transforms based on fade direction
  let opacity: MotionValue<number>;
  let x: MotionValue<number> | null = null;
  let y: MotionValue<number> | null = null;
  
  opacity = useTransform(scrollYProgress, [0, threshold], [0, 1]);
  
  switch (fadeDirection) {
    case "up":
      y = useTransform(scrollYProgress, [0, threshold], [distance, 0]);
      break;
    case "down":
      y = useTransform(scrollYProgress, [0, threshold], [-distance, 0]);
      break;
    case "left":
      x = useTransform(scrollYProgress, [0, threshold], [distance, 0]);
      break;
    case "right":
      x = useTransform(scrollYProgress, [0, threshold], [-distance, 0]);
      break;
    case "none":
      // Only fade, no movement
      break;
  }
  
  // Check if element is in view for triggering events
  useEffect(() => {
    const checkIfInView = () => {
      if (!elementRef.current) return;
      
      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight * (1 - threshold)) {
        setIsInView(true);
      }
    };
    
    checkIfInView();
    window.addEventListener("scroll", checkIfInView);
    
    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, [threshold]);
  
  return { 
    ref: elementRef, 
    style: { 
      opacity, 
      x: x || undefined, 
      y: y || undefined,
      transition: {
        delay,
        duration
      }
    }, 
    isInView 
  };
};
