import { useEffect } from 'react';

/**
 * Monitors Core Web Vitals and performance metrics
 * Reports FCP, LCP, CLS, and other metrics to console
 */
const WebVitalsMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor First Contentful Paint (FCP)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime.toFixed(2) + 'ms');
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // Older browsers may not support this
    }

    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime.toFixed(2) + 'ms');
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Older browsers may not support this
    }

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
          console.log('Current CLS:', clsValue.toFixed(3));
        }
      }
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Older browsers may not support this
    }

    // Log navigation timing when available
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const timing = window.performance.timing;
          const loadTime = timing.loadEventEnd - timing.navigationStart;
          const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;
          
          console.log('Performance Metrics:');
          console.log('- Total Load Time:', loadTime + 'ms');
          console.log('- DOM Ready:', domReady + 'ms');
          console.log('- Speed Index (estimated):', (domReady * 0.8 + loadTime * 0.2).toFixed(0) + 'ms');
        }, 0);
      });
    }

    return () => {
      observer.disconnect();
      lcpObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return null;
};

export default WebVitalsMonitor;