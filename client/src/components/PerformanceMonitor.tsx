import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  isMobile: boolean;
  connectionType: string;
  deviceMemory: number | null;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    isMobile: false,
    connectionType: 'unknown',
    deviceMemory: null,
  });

  useEffect(() => {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // Get connection info
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const connectionType = connection ? connection.effectiveType || connection.type : 'unknown';
    
    // Get device memory
    const deviceMemory = (navigator as any).deviceMemory || null;

    setMetrics(prev => ({
      ...prev,
      isMobile,
      connectionType,
      deviceMemory,
    }));

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observer failed:', e);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer failed:', e);
      }

      // Cumulative Layout Shift
      let clsValue = 0;
      try {
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }
    }

    // Time to First Byte
    if ('performance' in window) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    }

    // Send metrics to analytics (if configured)
    const sendMetrics = () => {
      const currentMetrics = {
        ...metrics,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      };

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Performance Metrics:', currentMetrics);
      }

      // Send to analytics service (Google Analytics, etc.)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'performance',
          event_label: 'core_web_vitals',
          value: Math.round(currentMetrics.lcp || 0),
          custom_map: {
            fcp: currentMetrics.fcp,
            lcp: currentMetrics.lcp,
            fid: currentMetrics.fid,
            cls: currentMetrics.cls,
            ttfb: currentMetrics.ttfb,
            is_mobile: currentMetrics.isMobile,
            connection_type: currentMetrics.connectionType,
            device_memory: currentMetrics.deviceMemory,
          },
        });
      }
    };

    // Send metrics after page load
    window.addEventListener('load', () => {
      setTimeout(sendMetrics, 1000); // Wait for final metrics
    });

    // Send metrics on page unload
    window.addEventListener('beforeunload', sendMetrics);

  }, []);

  // Performance warnings
  useEffect(() => {
    const warnings = [];
    
    if (metrics.lcp && metrics.lcp > 2500) {
      warnings.push(`LCP is ${Math.round(metrics.lcp)}ms (should be < 2500ms)`);
    }
    
    if (metrics.fcp && metrics.fcp > 1800) {
      warnings.push(`FCP is ${Math.round(metrics.fcp)}ms (should be < 1800ms)`);
    }
    
    if (metrics.cls && metrics.cls > 0.1) {
      warnings.push(`CLS is ${metrics.cls.toFixed(3)} (should be < 0.1)`);
    }
    
    if (metrics.fid && metrics.fid > 100) {
      warnings.push(`FID is ${Math.round(metrics.fid)}ms (should be < 100ms)`);
    }

    if (warnings.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('⚠️ Performance Issues Detected:', warnings);
    }
  }, [metrics]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-sm">
      <div className="font-bold mb-2">📊 Performance Monitor</div>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Loading...'}</div>
        <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Loading...'}</div>
        <div>Mobile: {metrics.isMobile ? 'Yes' : 'No'}</div>
        <div>Connection: {metrics.connectionType}</div>
        {metrics.deviceMemory && <div>Memory: {metrics.deviceMemory}GB</div>}
      </div>
    </div>
  );
};

export default PerformanceMonitor; 