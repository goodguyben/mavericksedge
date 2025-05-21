
import { useState, useEffect, useRef } from "react";

interface ScrollFadeOptions {
  // How quickly the section fades out (higher = faster fade)
  fadeSpeed?: number;
  // Offset when fade starts (0 = start of section, 0.5 = middle)
  fadeOffset?: number;
  // Whether to only fade out (true) or fade in and out (false)
  fadeOutOnly?: boolean;
}

export function useScrollFade({
  fadeSpeed = 0.8,
  fadeOffset = 0.3,
  fadeOutOnly = false
}: ScrollFadeOptions = {}) {
  const [opacity, setOpacity] = useState(fadeOutOnly ? 1 : 0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section is in view
      const visiblePercent = (windowHeight - sectionTop) / (sectionHeight + windowHeight);
      
      // For fade in: We want opacity to go from 0 -> 1 as section enters viewport
      // For fade out: We want opacity to go from 1 -> 0 as section leaves viewport
      let newOpacity;
      
      if (fadeOutOnly) {
        // Only implement fade out logic
        newOpacity = Math.max(0, 1 - (visiblePercent - fadeOffset) * fadeSpeed);
      } else {
        // Implement fade in and fade out
        if (visiblePercent < fadeOffset) {
          // Fade in
          newOpacity = Math.min(1, visiblePercent / fadeOffset);
        } else {
          // Fade out
          const fadeOutPercent = (visiblePercent - fadeOffset) / (1 - fadeOffset);
          newOpacity = Math.max(0, 1 - fadeOutPercent * fadeSpeed);
        }
      }
      
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fadeSpeed, fadeOffset, fadeOutOnly]);

  return { opacity, sectionRef };
}
