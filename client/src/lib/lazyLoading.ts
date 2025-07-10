
// Lazy loading utilities for better performance

export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

import React from 'react';

export const lazyLoadComponent = (importFn: () => Promise<any>) => {
  return React.lazy(() => importFn());
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload hero image
  const heroImage = new Image();
  heroImage.src = '/images/hero-bg.webp';
  
  // Preload critical fonts
  if ('fonts' in document) {
    (document as any).fonts.load('1rem Inter');
  }
};

// Optimize animations for performance
export const optimizeAnimations = () => {
  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
  }
};
