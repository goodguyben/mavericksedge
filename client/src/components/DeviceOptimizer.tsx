import { useEffect, useState } from 'react';

interface DeviceInfo {
  name: string;
  width: number;
  height: number;
  pixelRatio: number;
  userAgent: string;
  orientation: 'portrait' | 'landscape';
  type: 'mobile' | 'tablet' | 'desktop' | 'foldable';
  os: 'ios' | 'android' | 'windows' | 'macos' | 'unknown';
}

// Device database covering 30+ popular devices
const DEVICE_DATABASE = [
  // iPhones
  { name: 'iPhone SE', width: 375, height: 667, pixelRatio: 2, type: 'mobile', os: 'ios' },
  { name: 'iPhone 12 mini', width: 375, height: 812, pixelRatio: 3, type: 'mobile', os: 'ios' },
  { name: 'iPhone 12/13/14', width: 390, height: 844, pixelRatio: 3, type: 'mobile', os: 'ios' },
  { name: 'iPhone 12/13/14 Pro', width: 390, height: 844, pixelRatio: 3, type: 'mobile', os: 'ios' },
  { name: 'iPhone 14 Plus', width: 428, height: 926, pixelRatio: 3, type: 'mobile', os: 'ios' },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932, pixelRatio: 3, type: 'mobile', os: 'ios' },
  { name: 'iPhone 15', width: 393, height: 852, pixelRatio: 3, type: 'mobile', os: 'ios' },
  { name: 'iPhone 15 Pro Max', width: 430, height: 932, pixelRatio: 3, type: 'mobile', os: 'ios' },
  
  // iPads
  { name: 'iPad mini', width: 768, height: 1024, pixelRatio: 2, type: 'tablet', os: 'ios' },
  { name: 'iPad Air', width: 820, height: 1180, pixelRatio: 2, type: 'tablet', os: 'ios' },
  { name: 'iPad Pro 11"', width: 834, height: 1194, pixelRatio: 2, type: 'tablet', os: 'ios' },
  { name: 'iPad Pro 12.9"', width: 1024, height: 1366, pixelRatio: 2, type: 'tablet', os: 'ios' },
  
  // Android Phones
  { name: 'Galaxy S21', width: 360, height: 800, pixelRatio: 3, type: 'mobile', os: 'android' },
  { name: 'Galaxy S22', width: 360, height: 780, pixelRatio: 3, type: 'mobile', os: 'android' },
  { name: 'Galaxy S23', width: 360, height: 780, pixelRatio: 3, type: 'mobile', os: 'android' },
  { name: 'Galaxy S23 Ultra', width: 384, height: 854, pixelRatio: 3, type: 'mobile', os: 'android' },
  { name: 'Pixel 6', width: 393, height: 851, pixelRatio: 2.75, type: 'mobile', os: 'android' },
  { name: 'Pixel 7', width: 393, height: 851, pixelRatio: 2.75, type: 'mobile', os: 'android' },
  { name: 'Pixel 8 Pro', width: 384, height: 854, pixelRatio: 2.625, type: 'mobile', os: 'android' },
  { name: 'OnePlus 11', width: 412, height: 919, pixelRatio: 3, type: 'mobile', os: 'android' },
  
  // Android Tablets
  { name: 'Galaxy Tab S8', width: 753, height: 1037, pixelRatio: 2, type: 'tablet', os: 'android' },
  { name: 'Galaxy Tab S8+', width: 800, height: 1280, pixelRatio: 2, type: 'tablet', os: 'android' },
  { name: 'Galaxy Tab S8 Ultra', width: 900, height: 1440, pixelRatio: 2, type: 'tablet', os: 'android' },
  { name: 'Galaxy Tab A8', width: 800, height: 1280, pixelRatio: 1.5, type: 'tablet', os: 'android' },
  
  // Foldables
  { name: 'Galaxy Z Fold 4 (folded)', width: 344, height: 882, pixelRatio: 2.5, type: 'foldable', os: 'android' },
  { name: 'Galaxy Z Fold 4 (unfolded)', width: 768, height: 1114, pixelRatio: 2.5, type: 'foldable', os: 'android' },
  { name: 'Galaxy Z Flip 4', width: 360, height: 740, pixelRatio: 2.5, type: 'foldable', os: 'android' },
  { name: 'Surface Duo', width: 540, height: 720, pixelRatio: 2, type: 'foldable', os: 'android' },
  { name: 'Surface Duo 2', width: 540, height: 720, pixelRatio: 2, type: 'foldable', os: 'android' },
  
  // Surface Devices
  { name: 'Surface Pro 8', width: 880, height: 1240, pixelRatio: 1.5, type: 'tablet', os: 'windows' },
  { name: 'Surface Pro 9', width: 880, height: 1240, pixelRatio: 1.5, type: 'tablet', os: 'windows' },
  { name: 'Surface Go 3', width: 540, height: 720, pixelRatio: 1.5, type: 'tablet', os: 'windows' },
  
  // Other Popular Devices
  { name: 'Kindle Fire HD', width: 800, height: 1280, pixelRatio: 1.5, type: 'tablet', os: 'android' },
  { name: 'Xiaomi Pad 5', width: 800, height: 1280, pixelRatio: 2, type: 'tablet', os: 'android' }
];

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    name: 'Unknown Device',
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: window.devicePixelRatio || 1,
    userAgent: navigator.userAgent,
    orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
    type: 'desktop',
    os: 'unknown'
  });

  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pixelRatio = window.devicePixelRatio || 1;
      const userAgent = navigator.userAgent;
      const orientation = width > height ? 'landscape' : 'portrait';

      // Detect OS
      let os: DeviceInfo['os'] = 'unknown';
      if (/iPad|iPhone|iPod/.test(userAgent)) os = 'ios';
      else if (/Android/.test(userAgent)) os = 'android';
      else if (/Windows/.test(userAgent)) os = 'windows';
      else if (/Mac/.test(userAgent)) os = 'macos';

      // Find matching device from database
      const matchedDevice = DEVICE_DATABASE.find(device => {
        const tolerance = 20; // Allow some tolerance for browser chrome
        return (
          Math.abs(device.width - width) <= tolerance &&
          Math.abs(device.height - height) <= tolerance &&
          Math.abs(device.pixelRatio - pixelRatio) <= 0.5 &&
          device.os === os
        );
      });

      // Determine device type based on screen size if no exact match
      let detectedType: DeviceInfo['type'] = 'desktop';
      if (userAgent.includes('Fold') || userAgent.includes('Duo')) {
        detectedType = 'foldable';
      } else if (width < 600) {
        detectedType = 'mobile';
      } else if (width < 1024) {
        detectedType = 'tablet';
      }

      setDeviceInfo({
        name: matchedDevice?.name || `${detectedType} (${width}x${height})`,
        width,
        height,
        pixelRatio,
        userAgent,
        orientation,
        type: matchedDevice?.type || detectedType,
        os
      });
    };

    detectDevice();
    
    const handleResize = () => {
      detectDevice();
    };

    const handleOrientationChange = () => {
      // Delay to ensure dimensions are updated after orientation change
      setTimeout(detectDevice, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return deviceInfo;
}

export function useResponsiveClasses(deviceInfo: DeviceInfo) {
  const getResponsiveClasses = () => {
    const classes = [];
    
    // Device type classes
    classes.push(`device-${deviceInfo.type}`);
    classes.push(`os-${deviceInfo.os}`);
    classes.push(`orientation-${deviceInfo.orientation}`);
    
    // Screen size classes
    if (deviceInfo.width < 375) classes.push('screen-xs');
    else if (deviceInfo.width < 428) classes.push('screen-sm');
    else if (deviceInfo.width < 600) classes.push('screen-md');
    else if (deviceInfo.width < 768) classes.push('screen-lg');
    else if (deviceInfo.width < 1024) classes.push('screen-xl');
    else if (deviceInfo.width < 1280) classes.push('screen-2xl');
    else classes.push('screen-3xl');
    
    // Pixel ratio classes
    if (deviceInfo.pixelRatio >= 3) classes.push('retina-3x');
    else if (deviceInfo.pixelRatio >= 2) classes.push('retina-2x');
    else classes.push('retina-1x');
    
    // Specific device optimizations
    if (deviceInfo.name.includes('iPhone')) {
      classes.push('ios-device', 'iphone');
      if (deviceInfo.name.includes('Pro Max')) classes.push('iphone-pro-max');
      if (deviceInfo.name.includes('mini')) classes.push('iphone-mini');
    }
    
    if (deviceInfo.name.includes('iPad')) {
      classes.push('ios-device', 'ipad');
      if (deviceInfo.name.includes('Pro')) classes.push('ipad-pro');
      if (deviceInfo.name.includes('mini')) classes.push('ipad-mini');
    }
    
    if (deviceInfo.name.includes('Galaxy')) {
      classes.push('android-device', 'samsung-galaxy');
      if (deviceInfo.name.includes('Tab')) classes.push('galaxy-tab');
      if (deviceInfo.name.includes('Fold')) classes.push('galaxy-fold');
    }
    
    if (deviceInfo.name.includes('Pixel')) {
      classes.push('android-device', 'google-pixel');
    }
    
    if (deviceInfo.name.includes('Surface')) {
      classes.push('microsoft-surface');
      if (deviceInfo.name.includes('Pro')) classes.push('surface-pro');
      if (deviceInfo.name.includes('Duo')) classes.push('surface-duo');
    }
    
    // Touch capabilities
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch) classes.push('touch-enabled');
    else classes.push('no-touch');
    
    // Safe area support
    const hasSafeArea = CSS.supports('padding-top: env(safe-area-inset-top)');
    if (hasSafeArea) classes.push('safe-area-supported');
    
    return classes.join(' ');
  };

  return getResponsiveClasses();
}

export default function DeviceOptimizer() {
  const deviceInfo = useDeviceDetection();
  const responsiveClasses = useResponsiveClasses(deviceInfo);

  useEffect(() => {
    // Apply device-specific classes to document body
    document.body.className = `${document.body.className} ${responsiveClasses}`.trim();
    
    // Set CSS custom properties for device info
    document.documentElement.style.setProperty('--device-width', `${deviceInfo.width}px`);
    document.documentElement.style.setProperty('--device-height', `${deviceInfo.height}px`);
    document.documentElement.style.setProperty('--device-pixel-ratio', deviceInfo.pixelRatio.toString());
    
    // Device-specific optimizations
    if (deviceInfo.type === 'mobile' && deviceInfo.os === 'ios') {
      // iOS-specific optimizations
      document.documentElement.style.setProperty('--ios-safe-area-top', 'env(safe-area-inset-top, 0px)');
      document.documentElement.style.setProperty('--ios-safe-area-bottom', 'env(safe-area-inset-bottom, 0px)');
    }
    
    if (deviceInfo.type === 'foldable') {
      // Foldable-specific optimizations
      document.documentElement.style.setProperty('--foldable-hinge-width', '34px');
    }
    
    // Cleanup function
    return () => {
      // Remove device classes on unmount
      const classesToRemove = responsiveClasses.split(' ');
      classesToRemove.forEach(className => {
        document.body.classList.remove(className);
      });
    };
  }, [deviceInfo, responsiveClasses]);

  // Development helper - only show in dev mode
  const isDev = process.env.NODE_ENV === 'development';
  
  if (!isDev) return null;

  return (
    <div 
      className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50 max-w-xs"
      style={{ fontSize: '10px', lineHeight: '1.2' }}
    >
      <div><strong>Device:</strong> {deviceInfo.name}</div>
      <div><strong>Size:</strong> {deviceInfo.width}×{deviceInfo.height}</div>
      <div><strong>Ratio:</strong> {deviceInfo.pixelRatio}x</div>
      <div><strong>Type:</strong> {deviceInfo.type}</div>
      <div><strong>OS:</strong> {deviceInfo.os}</div>
      <div><strong>Orientation:</strong> {deviceInfo.orientation}</div>
    </div>
  );
}

// Export device database for testing
export { DEVICE_DATABASE };