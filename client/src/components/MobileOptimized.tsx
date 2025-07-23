
import { useEffect } from 'react';

export const MobileOptimizations = () => {
  useEffect(() => {
    // Optimize for mobile performance
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Reduce animation complexity on mobile
      document.documentElement.style.setProperty('--animation-duration', '0.2s');
      
      // Optimize touch interactions
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
      
      // Preload critical mobile resources (removed non-existent images)
      const mobilePreloads = [
        '/assets/logo-transparent-thumb4x.png'
      ];
      
      mobilePreloads.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
    
    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (isMobile && img.dataset.mobileSrc) {
        img.src = img.dataset.mobileSrc;
      }
    });
    
  }, []);
  
  return null;
};

export default MobileOptimizations;
