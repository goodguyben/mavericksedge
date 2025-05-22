import { useState, useEffect, RefObject } from 'react';

// Define the options interface for the hook
export interface ScrollFadeOptions {
  fadeOutPoint?: number;  // Point where fade out begins (0-1)
  fadeInPoint?: number;   // Point where fade in begins (0-1) 
  fadeOutDuration?: number; // How long the fade out takes
  fadeInDuration?: number;  // How long the fade in takes
  initialOpacity?: number;  // Starting opacity
  minOpacity?: number;      // Minimum opacity when element is off-screen
}

/**
 * Hook that returns an opacity value for an element based on its scroll position
 * - Fades in as element enters viewport from bottom
 * - Fades out as element exits viewport at top
 */
export function useScrollFade(
  ref: RefObject<HTMLElement>,
  options: ScrollFadeOptions = {}
) {
  // Default values for options
  const {
    fadeOutPoint = 0.5,     // Start fade out when element is 50% up the viewport (more noticeable)
    fadeInPoint = 0.6,      // Start fade in when element is 60% into viewport (sooner)
    fadeOutDuration = 1.5,  // Default fade out speed multiplier (more pronounced)
    fadeInDuration = 1,     // Default fade in speed multiplier
    initialOpacity = 0,     // Start invisible
    minOpacity = 0.05,      // Lowest opacity value
  } = options;

  // State to track current opacity
  const [opacity, setOpacity] = useState(initialOpacity);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fix position to prevent scroll offset warning
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.position === 'static') {
      element.style.position = 'relative';
    }

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Element is above viewport (scrolled past)
      if (rect.bottom < 0) {
        setOpacity(minOpacity);
        return;
      }
      
      // Element is below viewport (not yet visible)
      if (rect.top > viewportHeight) {
        setOpacity(initialOpacity);
        return;
      }

      // Element is at least partially visible
      
      // Fade in - calculate how far the element has entered the viewport
      const entryRatio = (viewportHeight - rect.top) / (viewportHeight * fadeInPoint);
      const entryFactor = Math.min(1, Math.max(0, entryRatio * fadeInDuration));
      
      // Fade out - calculate how close element is to leaving top of viewport
      const exitRatio = rect.top / (viewportHeight * fadeOutPoint);
      const exitFactor = Math.max(minOpacity, 1 - Math.max(0, exitRatio));
      
      // Use the lower opacity value to ensure both effects work
      const finalOpacity = Math.min(entryFactor, exitFactor);
      setOpacity(finalOpacity);
    };

    // Initial calculation
    handleScroll();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref, fadeOutPoint, fadeInPoint, fadeOutDuration, fadeInDuration, initialOpacity, minOpacity]);

  return opacity;
}