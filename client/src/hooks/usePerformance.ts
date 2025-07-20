import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
}

export const usePerformance = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });

  useEffect(() => {
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metricsRef.current.fcp = fcpEntry.startTime;
        console.log('FCP:', fcpEntry.startTime);
        
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(fcpEntry.startTime)
          });
        }
      }
    });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1] as PerformanceEntry;
      if (lcpEntry) {
        metricsRef.current.lcp = lcpEntry.startTime;
        console.log('LCP:', lcpEntry.startTime);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lcpEntry.startTime)
          });
        }
      }
    });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          metricsRef.current.fid = fidEntry.processingStart - fidEntry.startTime;
          console.log('FID:', metricsRef.current.fid);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(metricsRef.current.fid)
            });
          }
        }
      });
    });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
          metricsRef.current.cls = clsValue;
          console.log('CLS:', clsValue);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000) / 1000
            });
          }
        }
      });
    });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', metricsRef.current.ttfb);
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(metricsRef.current.ttfb)
        });
      }
    }

    // Start observing
    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Function to get current metrics
  const getMetrics = () => metricsRef.current;

  // Function to measure custom performance
  const measurePerformance = (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    console.log(`${name} took ${duration.toFixed(2)}ms`);
    
    if (window.gtag) {
      window.gtag('event', 'custom_performance', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(duration)
      });
    }
    
    return duration;
  };

  // Function to mark performance milestones
  const markPerformance = (name: string) => {
    performance.mark(name);
    console.log(`Performance mark: ${name}`);
  };

  // Function to measure between marks
  const measureBetweenMarks = (startMark: string, endMark: string, name: string) => {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      if (measure) {
        console.log(`${name}: ${measure.duration.toFixed(2)}ms`);
        
        if (window.gtag) {
          window.gtag('event', 'performance_measure', {
            event_category: 'Performance',
            event_label: name,
            value: Math.round(measure.duration)
          });
        }
      }
    } catch (error) {
      console.warn(`Could not measure ${name}:`, error);
    }
  };

  return {
    getMetrics,
    measurePerformance,
    markPerformance,
    measureBetweenMarks
  };
};

// Extend window object for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
} 