
// Performance optimization utilities

// Reduce DOM complexity by virtualizing large lists
export const virtualizeList = (items: any[], containerHeight: number, itemHeight: number, scrollTop: number) => {
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + Math.ceil(containerHeight / itemHeight) + 1, items.length);
  
  return {
    visibleItems: items.slice(startIndex, endIndex),
    startIndex,
    endIndex,
    totalHeight: items.length * itemHeight,
    offsetY: startIndex * itemHeight
  };
};

// Debounce scroll events to improve performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle expensive operations
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Clean up event listeners and observers
export const cleanup = (cleanupFunctions: (() => void)[]) => {
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup());
  };
};

// Optimize animations for better performance
export const reduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Cache management for static assets
export const setCacheHeaders = () => {
  // This would be handled by your server/CDN configuration
  // Static assets should have cache headers like:
  // Cache-Control: public, max-age=31536000, immutable
};

// Production optimizations
export const initializeProductionOptimizations = () => {
  if (process.env.NODE_ENV === 'production') {
    // Preload critical resources
    preloadResource('/assets/logo-transparent-thumb4x.png', 'image');
    
    // Clear old caches first
    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          if (cacheName !== 'mavericks-edge-v2') {
            caches.delete(cacheName);
          }
        });
      });
    }
    
    // Enable service worker for caching (if available)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, continue without it
      });
    }
  }
};

// Intersection Observer for lazy loading
export const createLazyObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Bundle size optimization - dynamic imports
export const loadComponentAsync = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) => {
  return React.lazy(importFunc);
};

// Memory cleanup manager
export const createCleanupManager = () => {
  const cleanupFunctions: (() => void)[] = [];
  
  return {
    add: (cleanup: () => void) => {
      cleanupFunctions.push(cleanup);
    },
    cleanup: () => {
      cleanupFunctions.forEach(fn => {
        try {
          fn();
        } catch (error) {
          console.warn('Cleanup function error:', error);
        }
      });
      cleanupFunctions.length = 0;
    }
  };
};

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && window.performance && window.performance.mark) {
    const startMark = `${name}-start`;
    const endMark = `${name}-end`;
    
    window.performance.mark(startMark);
    fn();
    window.performance.mark(endMark);
    window.performance.measure(name, startMark, endMark);
    
    const measure = window.performance.getEntriesByName(name)[0];
    console.log(`${name} took ${measure.duration}ms`);
  } else {
    fn();
  }
};

// Request Idle Callback wrapper for non-critical work
export const requestIdleCallback = (callback: () => void, options?: { timeout?: number }) => {
  if ('requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(callback, options);
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    return setTimeout(callback, 1);
  }
};

// Cancel idle callback
export const cancelIdleCallback = (id: number) => {
  if ('cancelIdleCallback' in window) {
    (window as any).cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

// Device capability detection
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') {
    return { isLowEnd: false, isMobile: false, hasReducedMotion: false };
  }

  const isLowEnd = 
    navigator.hardwareConcurrency <= 4 ||
    (navigator as any).deviceMemory <= 4 ||
    (navigator as any).connection?.effectiveType === '2g' ||
    (navigator as any).connection?.effectiveType === 'slow-2g';
  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return { isLowEnd, isMobile, hasReducedMotion };
};

// Import React for lazy loading
import React from 'react';
