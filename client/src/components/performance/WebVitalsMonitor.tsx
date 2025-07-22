import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface PerformanceMetrics {
  CLS?: number;
  FCP?: number;
  LCP?: number;
  TTFB?: number;
  INP?: number;
}

const PERFORMANCE_THRESHOLDS = {
  FCP: { good: 1800, needsImprovement: 3000 },
  LCP: { good: 2500, needsImprovement: 4000 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  TTFB: { good: 800, needsImprovement: 1800 },
  INP: { good: 200, needsImprovement: 500 }
};

export const WebVitalsMonitor = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {};

    // Track performance metrics
    const trackMetric = (name: string, value: number) => {
      try {
        const threshold = PERFORMANCE_THRESHOLDS[name as keyof typeof PERFORMANCE_THRESHOLDS];
        let rating = 'poor';
        
        if (threshold) {
          if (value <= threshold.good) {
            rating = 'good';
          } else if (value <= threshold.needsImprovement) {
            rating = 'needs improvement';
          }
        }

        // Log metrics for debugging (only in development)
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Web Vitals] ${name}: ${value.toFixed(2)}ms (${rating})`);
        }

        // You can send metrics to analytics here
        // Example: analytics.track('web_vital', { name, value, rating });
      } catch (error) {
        // Silently handle any tracking errors
        console.warn('WebVitals tracking error:', error);
      }
    };

    // Capture Core Web Vitals
    onCLS((metric) => {
      metrics.CLS = metric.value;
      trackMetric('CLS', metric.value);
    });

    onFCP((metric) => {
      metrics.FCP = metric.value;
      trackMetric('FCP', metric.value);
    });

    onLCP((metric) => {
      metrics.LCP = metric.value;
      trackMetric('LCP', metric.value);
    });

    onTTFB((metric) => {
      metrics.TTFB = metric.value;
      trackMetric('TTFB', metric.value);
    });

    onINP((metric) => {
      metrics.INP = metric.value;
      trackMetric('INP', metric.value);
    });

    // Track navigation timing for Speed Index approximation
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      try {
        const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigationTiming && navigationTiming.loadEventEnd > 0) {
          const speedIndex = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
          const domContentLoaded = navigationTiming.domContentLoadedEventEnd - navigationTiming.fetchStart;
          const pageLoad = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
          
          // Log performance metrics (only in development)
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Performance] Speed Index (approx): ${speedIndex.toFixed(2)}ms`);
            console.log(`[Performance] DOM Content Loaded: ${domContentLoaded.toFixed(2)}ms`);
            console.log(`[Performance] Page Load Complete: ${pageLoad.toFixed(2)}ms`);
          }
          
          // You can send these metrics to analytics here
          // Example: analytics.track('performance', { speedIndex, domContentLoaded, pageLoad });
        }
      } catch (error) {
        console.warn('Performance timing error:', error);
      }
    }

    // Report metrics to analytics if needed
    const reportFinalMetrics = () => {
      try {
        if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
          console.log('[Web Vitals] Final metrics:', metrics);
        }
        // You can send metrics to your analytics service here
        // Example: analytics.track('web_vitals_final', metrics);
      } catch (error) {
        console.warn('Final metrics reporting error:', error);
      }
    };

    window.addEventListener('beforeunload', reportFinalMetrics);

  }, []);

  return null; // This component doesn't render anything
};