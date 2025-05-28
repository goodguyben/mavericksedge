
// Performance optimization utilities
export const imageOptimization = {
  // Lazy loading for images below the fold
  lazyLoad: (img: HTMLImageElement) => {
    if ('loading' in HTMLImageElement.prototype) {
      img.loading = 'lazy';
    } else {
      // Fallback for browsers that don't support native lazy loading
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            observer.unobserve(img);
          }
        });
      });
      observer.observe(img);
    }
  },

  // Preload critical images
  preloadCriticalImages: () => {
    const criticalImages = [
      '/images/logo-transparent-thumb4x.png'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });
  }
};

// Resource hints for better loading
export const resourceHints = {
  preconnect: (url: string) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  },

  dnsPrefetch: (url: string) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = url;
    document.head.appendChild(link);
  }
};

// Critical resource loading optimization
export const optimizeLoading = () => {
  // Preconnect to external domains
  resourceHints.preconnect('https://images.unsplash.com');
  
  // Preload critical images
  imageOptimization.preloadCriticalImages();
  
  // Optimize font loading
  document.fonts.ready.then(() => {
    document.body.classList.add('fonts-loaded');
  });
};

// Web Vitals optimization
export const webVitalsOptimization = {
  // Reduce layout shift by setting dimensions
  preventLayoutShift: () => {
    const style = document.createElement('style');
    style.textContent = `
      img:not([width]):not([height]) {
        aspect-ratio: attr(width) / attr(height);
      }
      .aspect-ratio-placeholder {
        position: relative;
        overflow: hidden;
      }
      .aspect-ratio-placeholder::before {
        content: '';
        display: block;
        padding-top: 56.25%; /* 16:9 aspect ratio */
      }
      .aspect-ratio-placeholder > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `;
    document.head.appendChild(style);
  },

  // Optimize animations for mobile
  optimizeAnimations: () => {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
};
