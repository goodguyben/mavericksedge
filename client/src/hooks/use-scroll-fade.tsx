import { useState, useEffect } from 'react';

/**
 * Hook to calculate an element's opacity based on its position in the viewport during scroll
 * 
 * @param ref - React ref object pointing to the element we want to track
 * @param options - Configuration options
 * @returns opacity value between 0 and 1
 */
export function useScrollFade(
  ref: React.RefObject<HTMLElement>,
  options: {
    fadeOutPoint?: number; // Percentage of element height where fade out starts (0-1)
    fadeInPoint?: number;  // Percentage of viewport height where fade in starts (0-1)
    fadeOutDuration?: number; // How quickly the element fades out (higher = longer duration)
    fadeInDuration?: number;  // How quickly the element fades in (higher = longer duration)
    initialOpacity?: number; // Initial opacity before scroll effects
    minOpacity?: number; // Minimum opacity value
  } = {}
) {
  const {
    fadeOutPoint = 0.3,  // Start fading out when element is 30% scrolled
    fadeInPoint = 0.9,   // Start fading in when element is 90% into view
    fadeOutDuration = 1, // Default fade duration
    fadeInDuration = 1.2, // Default fade in duration
    initialOpacity = 0,  // Start invisible (will fade in)
    minOpacity = 0.05,   // Never go completely invisible
  } = options;

  const [opacity, setOpacity] = useState(initialOpacity);

  useEffect(() => {
    if (!ref.current) return;

    const calculateOpacity = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Element is above the viewport, already scrolled past
      if (rect.bottom < 0) {
        setOpacity(minOpacity);
        return;
      }
      
      // Element is below the viewport, not yet visible
      if (rect.top > viewportHeight) {
        setOpacity(initialOpacity);
        return;
      }

      // Fade in calculation - as element enters viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // How far has the element entered the viewport (0 = just at bottom, 1 = fully in viewport)
        const entryProgress = Math.min(1, (viewportHeight - rect.top) / (viewportHeight * fadeInPoint));
        
        // Fade out calculation - as element leaves viewport
        const exitRatio = rect.top / (viewportHeight * fadeOutPoint);
        const exitProgress = Math.max(0, 1 - exitRatio);
        
        // Combine both effects with different durations
        const entryOpacity = Math.min(1, entryProgress * fadeInDuration);
        const exitOpacity = Math.max(minOpacity, exitProgress * fadeOutDuration);
        
        // Use the smaller of the two values to ensure both fade in/out work
        setOpacity(Math.min(entryOpacity, exitOpacity));
      }
    };

    // Initial calculation
    calculateOpacity();
    
    // Re-calculate on scroll
    window.addEventListener('scroll', calculateOpacity, { passive: true });
    
    return () => window.removeEventListener('scroll', calculateOpacity);
  }, [ref, fadeOutPoint, fadeInPoint, fadeOutDuration, fadeInDuration, initialOpacity, minOpacity]);

  return opacity;
}