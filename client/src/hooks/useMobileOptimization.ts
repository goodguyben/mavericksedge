import { useEffect, useState, useCallback } from 'react';

interface MobileOptimizationConfig {
  reduceAnimations: boolean;
  lazyLoadVideos: boolean;
  optimizeImages: boolean;
  reduceParticles: boolean;
  fastLoading: boolean;
}

export const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);
  const [connectionType, setConnectionType] = useState<string>('unknown');
  const [deviceMemory, setDeviceMemory] = useState<number | null>(null);
  const [config, setConfig] = useState<MobileOptimizationConfig>({
    reduceAnimations: false,
    lazyLoadVideos: false,
    optimizeImages: false,
    reduceParticles: false,
    fastLoading: false,
  });

  // Detect device capabilities
  const detectDeviceCapabilities = useCallback(() => {
    // Mobile detection
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    setIsMobile(mobile);

    // Low power mode detection
    const lowPower = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
    setIsLowPower(lowPower);

    // Connection type
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const effectiveType = connection ? connection.effectiveType || connection.type : 'unknown';
    setConnectionType(effectiveType);

    // Device memory
    const memory = (navigator as any).deviceMemory || null;
    setDeviceMemory(memory);

    // Determine optimization strategy
    const shouldReduceAnimations = mobile || lowPower || effectiveType === 'slow-2g' || effectiveType === '2g';
    const shouldLazyLoadVideos = mobile || effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g';
    const shouldOptimizeImages = mobile || effectiveType === 'slow-2g' || effectiveType === '2g';
    const shouldReduceParticles = mobile || lowPower || effectiveType === 'slow-2g' || effectiveType === '2g';
    const shouldFastLoading = mobile || effectiveType === 'slow-2g' || effectiveType === '2g';

    setConfig({
      reduceAnimations: shouldReduceAnimations,
      lazyLoadVideos: shouldLazyLoadVideos,
      optimizeImages: shouldOptimizeImages,
      reduceParticles: shouldReduceParticles,
      fastLoading: shouldFastLoading,
    });
  }, []);

  // Apply optimizations to DOM
  const applyOptimizations = useCallback(() => {
    const root = document.documentElement;

    if (config.reduceAnimations) {
      root.classList.add('reduce-animations');
      root.style.setProperty('--animation-duration', '0.2s');
    }

    if (config.fastLoading) {
      root.classList.add('fast-loading');
    }

    // Optimize touch interactions
    if (isMobile) {
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
    }

    // Reduce motion for accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('prefers-reduced-motion');
    }
  }, [config, isMobile]);

  // Initialize optimizations
  useEffect(() => {
    detectDeviceCapabilities();
    applyOptimizations();

    // Handle resize events
    const handleResize = () => {
      detectDeviceCapabilities();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [detectDeviceCapabilities, applyOptimizations]);

  // Get optimized video source
  const getOptimizedVideoSrc = useCallback((src: string) => {
    return src;
  }, []);

  // Get optimized image source
  const getOptimizedImageSrc = useCallback((src: string, mobileSrc?: string) => {
    if (config.optimizeImages && mobileSrc && isMobile) {
      return mobileSrc;
    }
    return src;
  }, [config.optimizeImages, isMobile]);

  // Should lazy load content
  const shouldLazyLoad = useCallback(() => {
    return config.lazyLoadVideos || connectionType === 'slow-2g' || connectionType === '2g';
  }, [config.lazyLoadVideos, connectionType]);

  // Get loading priority
  const getLoadingPriority = useCallback(() => {
    if (connectionType === 'slow-2g' || connectionType === '2g') {
      return 'low';
    }
    if (connectionType === '3g' || isMobile) {
      return 'medium';
    }
    return 'high';
  }, [connectionType, isMobile]);

  return {
    isMobile,
    isLowPower,
    connectionType,
    deviceMemory,
    config,
    getOptimizedVideoSrc,
    getOptimizedImageSrc,
    shouldLazyLoad,
    getLoadingPriority,
  };
};

export default useMobileOptimization; 