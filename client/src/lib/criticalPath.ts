import { requestIdleCallback } from './performance';

export const CriticalPathLoader = {
  // Load only essential components for above-the-fold content
  loadCritical: () => {
    return Promise.all([
      import('@/components/Layout'),
      import('@/pages/Home').then(module => ({ default: module.default })),
    ]);
  },
  
  // Defer non-critical components
  loadNonCritical: () => {
    return requestIdleCallback(() => {
      return Promise.all([
        import('@/components/sections/PartnershipSection'),
        import('@/components/blocks/optimized-video'),
      ]);
    });
  },
  
  // Preload based on user behavior
  preloadBasedOnRoute: (currentPath: string) => {
    const preloadMap: Record<string, () => Promise<any>> = {
      '/': () => import('@/pages/Services'),
      '/services': () => import('@/pages/Pricing'),
      '/pricing': () => import('@/pages/Contact'),
      '/work': () => import('@/pages/About'),
      '/about': () => import('@/pages/Contact'),
    };
    
    const preloadFn = preloadMap[currentPath];
    if (preloadFn) {
      requestIdleCallback(() => preloadFn());
    }
  },
  
  // Load components based on device capabilities
  loadBasedOnDevice: (capabilities: { isLowEnd: boolean; isMobile: boolean }) => {
    if (capabilities.isLowEnd) {
      // Load minimal components for low-end devices
      return Promise.all([
        import('@/components/Layout'),
        import('@/pages/Home'),
      ]);
    } else if (capabilities.isMobile) {
      // Load mobile-optimized components
      return Promise.all([
        import('@/components/Layout'),
        import('@/pages/Home'),
        import('@/components/sections/PartnershipSection'),
      ]);
    } else {
      // Load full experience for desktop
      return Promise.all([
        import('@/components/Layout'),
        import('@/pages/Home'),
        import('@/components/sections/PartnershipSection'),
        import('@/components/blocks/optimized-video'),
      ]);
    }
  },
}; 