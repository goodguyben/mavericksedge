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

    // Log performance metrics
    const logMetric = (name: string, value: number) => {
      const threshold = PERFORMANCE_THRESHOLDS[name as keyof typeof PERFORMANCE_THRESHOLDS];
      let rating = 'poor';
      
      if (threshold) {
        if (value <= threshold.good) {
          rating = 'good';
        } else if (value <= threshold.needsImprovement) {
          rating = 'needs improvement';
        }
      }

      console.log(`[Web Vitals] ${name}: ${value.toFixed(2)}ms (${rating})`);
    };

    // Capture Core Web Vitals
    onCLS((metric) => {
      metrics.CLS = metric.value;
      logMetric('CLS', metric.value);
    });

    onFCP((metric) => {
      metrics.FCP = metric.value;
      logMetric('FCP', metric.value);
    });

    onLCP((metric) => {
      metrics.LCP = metric.value;
      logMetric('LCP', metric.value);
    });

    onTTFB((metric) => {
      metrics.TTFB = metric.value;
      logMetric('TTFB', metric.value);
    });

    onINP((metric) => {
      metrics.INP = metric.value;
      logMetric('INP', metric.value);
    });

    // Also log navigation timing for Speed Index approximation
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigationTiming) {
        const speedIndex = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
        console.log(`[Performance] Speed Index (approx): ${speedIndex.toFixed(2)}ms`);
        
        // Log other useful metrics
        const domContentLoaded = navigationTiming.domContentLoadedEventEnd - navigationTiming.fetchStart;
        const pageLoad = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
        
        console.log(`[Performance] DOM Content Loaded: ${domContentLoaded.toFixed(2)}ms`);
        console.log(`[Performance] Page Load Complete: ${pageLoad.toFixed(2)}ms`);
      }
    }

    // Report metrics to analytics if needed
    window.addEventListener('beforeunload', () => {
      // You can send metrics to your analytics service here
      console.log('[Web Vitals] Final metrics:', metrics);
    });

  }, []);

  return null; // This component doesn't render anything
};