import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface TabletOptimizerProps {
  children: React.ReactNode;
}

interface TabletInfo {
  isTablet: boolean;
  device: string;
  orientation: 'portrait' | 'landscape';
  pixelRatio: number;
  viewportWidth: number;
  viewportHeight: number;
}

export default function TabletOptimizer({ children }: TabletOptimizerProps) {
  const [tabletInfo, setTabletInfo] = useState<TabletInfo>({
    isTablet: false,
    device: 'unknown',
    orientation: 'portrait',
    pixelRatio: 1,
    viewportWidth: 0,
    viewportHeight: 0
  });

  const detectTabletDevice = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = window.devicePixelRatio || 1;
    const userAgent = navigator.userAgent;

    // Detect tablet devices and orientations
    let device = 'unknown';
    let isTablet = false;

    // iPad detection
    if (/iPad/.test(userAgent) || (width >= 768 && width <= 1366)) {
      isTablet = true;
      if ((width === 768 && height === 1024) || (width === 1024 && height === 768)) {
        device = 'iPad';
      } else if ((width === 834 && height === 1194) || (width === 1194 && height === 834)) {
        device = 'iPad Pro 11"';
      } else if ((width === 1024 && height === 1366) || (width === 1366 && height === 1024)) {
        device = 'iPad Pro 12.9"';
      }
    }

    // Samsung Galaxy Tab detection
    if (/Samsung|Galaxy Tab/.test(userAgent) || 
        (width >= 800 && width <= 1280 && /Android/.test(userAgent))) {
      isTablet = true;
      device = 'Galaxy Tab';
    }

    // Surface Pro detection
    if (/Surface/.test(userAgent) || 
        (width >= 912 && width <= 1368 && /Windows/.test(userAgent))) {
      isTablet = true;
      device = 'Surface Pro';
    }

    // General tablet detection fallback
    if (width >= 768 && width <= 1366 && !isTablet) {
      isTablet = true;
      device = 'Generic Tablet';
    }

    const orientation: 'portrait' | 'landscape' = width > height ? 'landscape' : 'portrait';

    return {
      isTablet,
      device,
      orientation,
      pixelRatio,
      viewportWidth: width,
      viewportHeight: height
    };
  };

  useEffect(() => {
    const updateTabletInfo = () => {
      setTabletInfo(detectTabletDevice());
    };

    updateTabletInfo();
    window.addEventListener('resize', updateTabletInfo);
    window.addEventListener('orientationchange', updateTabletInfo);

    return () => {
      window.removeEventListener('resize', updateTabletInfo);
      window.removeEventListener('orientationchange', updateTabletInfo);
    };
  }, []);

  useEffect(() => {
    if (tabletInfo.isTablet) {
      // Apply tablet-specific optimizations
      document.documentElement.classList.add('tablet-optimized');
      document.documentElement.classList.add(`device-${tabletInfo.device.toLowerCase().replace(/\s+/g, '-')}`);
      document.documentElement.classList.add(`orientation-${tabletInfo.orientation}`);
      
      // High-DPI optimizations
      if (tabletInfo.pixelRatio >= 2) {
        document.documentElement.classList.add('high-dpi');
      }

      // Viewport meta tag optimization
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 
          'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover'
        );
      }

      // Add tablet-specific CSS custom properties
      document.documentElement.style.setProperty('--tablet-width', `${tabletInfo.viewportWidth}px`);
      document.documentElement.style.setProperty('--tablet-height', `${tabletInfo.viewportHeight}px`);
      document.documentElement.style.setProperty('--pixel-ratio', tabletInfo.pixelRatio.toString());
      
    } else {
      document.documentElement.classList.remove('tablet-optimized');
    }
  }, [tabletInfo]);

  return (
    <div 
      className={`tablet-container ${tabletInfo.isTablet ? 'is-tablet' : ''}`}
      data-device={tabletInfo.device}
      data-orientation={tabletInfo.orientation}
    >
      {children}
    </div>
  );
}

// Hook to get current tablet information
export function useTabletInfo() {
  const [tabletInfo, setTabletInfo] = useState<TabletInfo>({
    isTablet: false,
    device: 'unknown',
    orientation: 'portrait',
    pixelRatio: 1,
    viewportWidth: 0,
    viewportHeight: 0
  });

  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pixelRatio = window.devicePixelRatio || 1;
      const isTablet = width >= 768 && width <= 1366;
      const orientation: 'portrait' | 'landscape' = width > height ? 'landscape' : 'portrait';

      setTabletInfo({
        isTablet,
        device: isTablet ? 'tablet' : 'not-tablet',
        orientation,
        pixelRatio,
        viewportWidth: width,
        viewportHeight: height
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  return tabletInfo;
}