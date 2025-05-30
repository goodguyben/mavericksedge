
import { useEffect } from 'react';

export const TabletOptimizer = () => {
  useEffect(() => {
    // Detect tablet viewport
    const isTablet = window.innerWidth >= 640 && window.innerWidth <= 1023;
    
    if (isTablet) {
      // Add tablet-specific class to body
      document.body.classList.add('tablet-viewport');
      
      // Optimize touch events for tablets
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
      
      // Enhance button and link touch targets
      const enhanceTouchTargets = () => {
        const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
        interactiveElements.forEach(element => {
          const el = element as HTMLElement;
          const rect = el.getBoundingClientRect();
          if (rect.height < 48 || rect.width < 48) {
            el.style.minHeight = '48px';
            el.style.minWidth = '48px';
            el.style.display = 'flex';
            el.style.alignItems = 'center';
            el.style.justifyContent = 'center';
          }
        });
      };
      
      // Run on load and DOM changes
      enhanceTouchTargets();
      
      const observer = new MutationObserver(enhanceTouchTargets);
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => {
        observer.disconnect();
        document.body.classList.remove('tablet-viewport');
      };
    }
  }, []);
  
  return null;
};

export default TabletOptimizer;
