import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import { AnimatePresence } from "framer-motion";

// Performance optimizations
const enablePerformanceOptimizations = () => {
  // Enable paint optimization
  if ('paintWorklet' in CSS) {
    // CSS Paint API optimizations can be added here
  }

  // Optimize images loading
  if ('loading' in HTMLImageElement.prototype) {
    document.documentElement.classList.add('native-lazy-loading');
  }

  // Reduce motion for accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--motion-reduce', '1');
  }

  // Optimize touch interactions
  if ('ontouchstart' in window) {
    document.documentElement.style.setProperty('--touch-action', 'manipulation');
  }

  // Preload critical resources
  const preloadCriticalResources = () => {
    // Preload critical images
    const criticalImages = [
      '/images/logo-transparent-thumb4x.png'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  };

  // Intersection Observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Service Worker registration for PWA
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }

  preloadCriticalResources();
};

// Initialize performance optimizations
enablePerformanceOptimizations();

const root = createRoot(document.getElementById("root")!);

root.render(
  <HelmetProvider>
    <AnimatePresence mode="wait">
      <App />
    </AnimatePresence>
  </HelmetProvider>
);