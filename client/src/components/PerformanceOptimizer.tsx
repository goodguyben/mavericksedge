import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
      // Reduce animation complexity on mobile
      document.documentElement.style.setProperty('--animation-duration', '0.2s');
      document.documentElement.style.setProperty('--transition-duration', '0.2s');
      
      // Add mobile-specific performance classes
      document.body.classList.add('mobile-optimized');
      
      // Optimize touch interactions
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
      document.addEventListener('touchend', () => {}, { passive: true });
      
      // Reduce motion for better performance
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--motion-reduce', '1');
      }
      
      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.dataset.mobileSrc) {
          img.src = img.dataset.mobileSrc;
        }
        // Ensure lazy loading on mobile
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
      
      // Optimize videos for mobile
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.preload = 'metadata';
        video.playsInline = true;
        video.muted = true;
      });
    }
    
    // Performance monitoring
    if ('performance' in window) {
      // Monitor LCP
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
            if (entry.startTime > 2500) {
              console.warn('LCP is too slow:', entry.startTime);
            }
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Monitor FID
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
        }
      }).observe({ entryTypes: ['first-input'] });
    }
    
    // Cleanup function
    return () => {
      document.removeEventListener('touchstart', () => {});
      document.removeEventListener('touchmove', () => {});
      document.removeEventListener('touchend', () => {});
    };
  }, []);
  
  return null;
}; 