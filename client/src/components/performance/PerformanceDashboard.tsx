import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  FCP?: number;
  LCP?: number;
  CLS?: number;
  TTFB?: number;
  INP?: number;
  TBT?: number;
  SI?: number;
}

interface PerformanceDashboardProps {
  isVisible?: boolean;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  isVisible = process.env.NODE_ENV === 'development' 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Get navigation timing
    if ('performance' in window) {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        setMetrics(prev => ({
          ...prev,
          TTFB: navigationTiming.responseStart - navigationTiming.requestStart,
          SI: navigationTiming.loadEventEnd - navigationTiming.fetchStart
        }));
      }
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if ('value' in entry) {
          setMetrics(prev => ({
            ...prev,
            [entry.name]: (entry as any).value
          }));
        }
      }
    });

    observer.observe({ entryTypes: ['measure', 'paint'] });

    return () => observer.disconnect();
  }, [isVisible]);

  const getMetricColor = (metric: string, value: number) => {
    const thresholds = {
      FCP: { good: 1800, needsImprovement: 3000 },
      LCP: { good: 2500, needsImprovement: 4000 },
      CLS: { good: 0.1, needsImprovement: 0.25 },
      TTFB: { good: 800, needsImprovement: 1800 },
      INP: { good: 200, needsImprovement: 500 },
      TBT: { good: 200, needsImprovement: 600 },
      SI: { good: 3400, needsImprovement: 5800 }
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'text-gray-500';

    if (value <= threshold.good) return 'text-green-500';
    if (value <= threshold.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    if (value < 1000) return `${value.toFixed(0)}${unit}`;
    return `${(value / 1000).toFixed(1)}s`;
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white text-sm font-mono"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-orange-400">Performance</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      <div className="space-y-1">
        {Object.entries(metrics).map(([metric, value]) => (
          <div key={metric} className="flex justify-between">
            <span className="text-gray-300">{metric}:</span>
            <span className={getMetricColor(metric, value)}>
              {formatMetric(value, metric === 'CLS' ? '' : 'ms')}
            </span>
          </div>
        ))}
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-3 pt-3 border-t border-gray-700"
        >
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Memory Usage:</span>
              <span>{Math.round((performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0)}MB</span>
            </div>
            <div className="flex justify-between">
              <span>DOM Nodes:</span>
              <span>{document.querySelectorAll('*').length}</span>
            </div>
            <div className="flex justify-between">
              <span>Resources:</span>
              <span>{performance.getEntriesByType('resource').length}</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}; 