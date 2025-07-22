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
      const threshold = PERFORMANCE_THRESHOLDS[name as keyof typeof PERFORMANCE_THRESHOLDS];
      let rating = 'poor';
      
      if (threshold) {
        if (value <= threshold.good) {
          rating = 'good';
        } else if (value <= threshold.needsImprovement) {
          rating = 'needs improvement';
        }
      }

      // You can send metrics to analytics here
      // Example: analytics.track('web_vital', { name, value, rating });
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
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigationTiming) {
        const speedIndex = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
        const domContentLoaded = navigationTiming.domContentLoadedEventEnd - navigationTiming.fetchStart;
        const pageLoad = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
        
        // You can send these metrics to analytics here
        // Example: analytics.track('performance', { speedIndex, domContentLoaded, pageLoad });
      }
    }

    // Report metrics to analytics if needed
    window.addEventListener('beforeunload', () => {
      // You can send metrics to your analytics service here
      // Example: analytics.track('web_vitals_final', metrics);
    });

  }, []);

  return null; // This component doesn't render anything
};