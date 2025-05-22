import { useState, useEffect, RefObject } from 'react';

interface ScrollFadeOptions {
  fadeOutPoint?: number;
  fadeInPoint?: number;
  fadeOutDuration?: number;
  fadeInDuration?: number;
  initialOpacity?: number;
  minOpacity?: number;
}

// This is a custom hook that calculates opacity based on scroll position
const useScrollFade = (
  ref: RefObject<HTMLElement>,
  {
    fadeOutPoint = 0.3,
    fadeInPoint = 0.9,
    fadeOutDuration = 1,
    fadeInDuration = 1.2,
    initialOpacity = 0,
    minOpacity = 0.05,
  }: ScrollFadeOptions = {}
) => {
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

      // Element is completely above viewport (scrolled past)
      if (rect.bottom < 0) {
        setOpacity(minOpacity);
        return;
      }

      // Element is completely below viewport (not visible yet)
      if (rect.top > viewportHeight) {
        setOpacity(initialOpacity);
        return;
      }

      // Element is at least partially visible in viewport
      // Calculate fade in effect (bottom to top of viewport)
      const entryRatio = (viewportHeight - rect.top) / (viewportHeight * fadeInPoint);
      const entryFactor = Math.min(1, Math.max(0, entryRatio * fadeInDuration));

      // Calculate fade out effect (as element leaves viewport at top)
      const exitRatio = rect.top / (viewportHeight * fadeOutPoint);
      const exitFactor = Math.max(minOpacity, 1 - Math.max(0, exitRatio));

      // Use the smaller opacity between entry and exit calculations
      const finalOpacity = Math.min(entryFactor, exitFactor);
      setOpacity(finalOpacity);
    };

    // Calculate initial opacity
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref, fadeOutPoint, fadeInPoint, fadeOutDuration, fadeInDuration, initialOpacity, minOpacity]);

  return opacity;
};

export { useScrollFade };