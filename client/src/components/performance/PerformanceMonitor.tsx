import React, { useState, useEffect } from 'react';
import { useAnimationBudgetStatus } from '@/hooks/useAnimationBudget';
import { getDeviceCapabilities } from '@/lib/performance';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  activeListeners: number;
  paintTime: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    activeListeners: 0,
    paintTime: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const animationStatus = useAnimationBudgetStatus();
  const deviceCapabilities = getDeviceCapabilities();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = performance.now();
    let rafId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Measure memory if available
        const memory = (performance as any).memory
          ? Math.round((performance as any).memory.usedJSHeapSize / 1048576)
          : 0;

        // Count active event listeners (approximation)
        const activeListeners = document.querySelectorAll('[data-listener]').length;

        // Get paint timing
        const paintEntries = performance.getEntriesByType('paint');
        const paintTime = paintEntries.length > 0
          ? Math.round(paintEntries[paintEntries.length - 1].startTime)
          : 0;

        setMetrics({
          fps,
          memory,
          activeListeners,
          paintTime
        });

        frameCount = 0;
        lastTime = currentTime;
      }

      rafId = requestAnimationFrame(measureFPS);
    };

    measureFPS();

    // Keyboard shortcut to toggle monitor (Ctrl/Cmd + Shift + P)
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  const getFPSColor = (fps: number) => {
    if (fps >= 55) return 'text-green-400';
    if (fps >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMemoryColor = (memory: number) => {
    if (memory < 50) return 'text-green-400';
    if (memory < 100) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl z-50 font-mono text-xs">
      <div className="mb-2 font-bold text-maverick-orange">Performance Monitor</div>
      
      <div className="space-y-1">
        <div className="flex justify-between gap-4">
          <span>FPS:</span>
          <span className={getFPSColor(metrics.fps)}>{metrics.fps}</span>
        </div>
        
        {metrics.memory > 0 && (
          <div className="flex justify-between gap-4">
            <span>Memory:</span>
            <span className={getMemoryColor(metrics.memory)}>{metrics.memory}MB</span>
          </div>
        )}
        
        <div className="flex justify-between gap-4">
          <span>Animations:</span>
          <span className={animationStatus.isAtCapacity ? 'text-red-400' : 'text-green-400'}>
            {animationStatus.activeAnimations}/{animationStatus.maxAnimations}
          </span>
        </div>
        
        <div className="flex justify-between gap-4">
          <span>Paint Time:</span>
          <span>{metrics.paintTime}ms</span>
        </div>
        
        <hr className="my-2 border-gray-700" />
        
        <div className="text-[10px] space-y-1">
          <div>Device: {deviceCapabilities.isLowEnd ? '⚠️ Low-end' : '✅ Normal'}</div>
          <div>Mobile: {deviceCapabilities.isMobile ? 'Yes' : 'No'}</div>
          <div>Reduced Motion: {deviceCapabilities.hasReducedMotion ? 'Yes' : 'No'}</div>
        </div>
      </div>
      
      <div className="mt-2 text-[10px] text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}; 