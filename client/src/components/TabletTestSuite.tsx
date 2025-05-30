import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, Monitor, Smartphone, Tablet } from 'lucide-react';

interface TestResult {
  test: string;
  status: 'pass' | 'fail' | 'warning';
  details: string;
  recommendation?: string;
}

export default function TabletTestSuite() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<any>({});

  const runTabletTests = async () => {
    setIsRunning(true);
    const results: TestResult[] = [];

    // Device Detection
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = window.devicePixelRatio;
    const userAgent = navigator.userAgent;
    const isTablet = width >= 768 && width <= 1366;

    setDeviceInfo({
      width,
      height,
      pixelRatio,
      userAgent,
      isTablet,
      orientation: width > height ? 'landscape' : 'portrait'
    });

    // Test 1: Viewport Configuration
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    results.push({
      test: 'Viewport Meta Tag',
      status: viewportMeta ? 'pass' : 'fail',
      details: viewportMeta ? 'Viewport meta tag properly configured' : 'Missing viewport meta tag',
      recommendation: !viewportMeta ? 'Add viewport meta tag for proper mobile rendering' : undefined
    });

    // Test 2: Touch Target Sizes
    const touchElements = document.querySelectorAll('button, [role="button"], input, select, textarea, a');
    let touchTargetPass = 0;
    touchElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.width >= 44 && rect.height >= 44) {
        touchTargetPass++;
      }
    });
    const touchTargetPercentage = (touchTargetPass / touchElements.length) * 100;
    
    results.push({
      test: 'Touch Target Sizes (WCAG 2.1 AA)',
      status: touchTargetPercentage >= 90 ? 'pass' : touchTargetPercentage >= 70 ? 'warning' : 'fail',
      details: `${touchTargetPass}/${touchElements.length} elements (${touchTargetPercentage.toFixed(1)}%) meet 44px minimum`,
      recommendation: touchTargetPercentage < 90 ? 'Increase size of small touch targets to minimum 44px' : undefined
    });

    // Test 3: Font Scaling
    const h1Elements = document.querySelectorAll('h1');
    let fontScalingPass = true;
    h1Elements.forEach(element => {
      const fontSize = window.getComputedStyle(element).fontSize;
      const fontSizeNum = parseFloat(fontSize);
      if (fontSizeNum < 24) {
        fontScalingPass = false;
      }
    });

    results.push({
      test: 'Typography Scaling',
      status: fontScalingPass ? 'pass' : 'warning',
      details: fontScalingPass ? 'Headers properly scaled for tablet viewing' : 'Some headers may be too small for tablets',
      recommendation: !fontScalingPass ? 'Increase font sizes for better tablet readability' : undefined
    });

    // Test 4: Responsive Images
    const images = document.querySelectorAll('img');
    let responsiveImagePass = 0;
    images.forEach(img => {
      const style = window.getComputedStyle(img);
      if (style.maxWidth === '100%' || style.width === '100%') {
        responsiveImagePass++;
      }
    });

    results.push({
      test: 'Responsive Images',
      status: responsiveImagePass === images.length ? 'pass' : 'warning',
      details: `${responsiveImagePass}/${images.length} images are responsive`,
      recommendation: responsiveImagePass < images.length ? 'Ensure all images have responsive sizing' : undefined
    });

    // Test 5: Orientation Support
    const supportsOrientationChange = 'onorientationchange' in window;
    results.push({
      test: 'Orientation Change Support',
      status: supportsOrientationChange ? 'pass' : 'warning',
      details: supportsOrientationChange ? 'Device supports orientation change events' : 'Limited orientation support',
      recommendation: !supportsOrientationChange ? 'Add orientation change handling for better tablet UX' : undefined
    });

    // Test 6: Performance - Layout Shift
    let layoutShiftScore = 'pass';
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          let cumulativeScore = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cumulativeScore += (entry as any).value;
            }
          }
          layoutShiftScore = cumulativeScore < 0.1 ? 'pass' : cumulativeScore < 0.25 ? 'warning' : 'fail';
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        layoutShiftScore = 'warning';
      }
    }

    results.push({
      test: 'Layout Stability (CLS)',
      status: layoutShiftScore as any,
      details: 'Measuring cumulative layout shift for tablet experience',
      recommendation: layoutShiftScore !== 'pass' ? 'Optimize layout stability to reduce visual shifting' : undefined
    });

    // Test 7: Scroll Performance
    const scrollContainer = document.documentElement;
    const style = window.getComputedStyle(scrollContainer) as any;
    const hasOptimizedScrolling = style.webkitOverflowScrolling === 'touch' || style.overflowScrolling === 'touch';
    
    results.push({
      test: 'Scroll Performance',
      status: hasOptimizedScrolling ? 'pass' : 'warning',
      details: hasOptimizedScrolling ? 'Momentum scrolling enabled' : 'Standard scrolling detected',
      recommendation: !hasOptimizedScrolling ? 'Enable momentum scrolling for better tablet experience' : undefined
    });

    // Test 8: Focus Management
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    let focusVisibleSupport = true;
    try {
      document.querySelector(':focus-visible');
    } catch (e) {
      focusVisibleSupport = false;
    }

    results.push({
      test: 'Keyboard Navigation & Focus',
      status: focusVisibleSupport ? 'pass' : 'warning',
      details: `${focusableElements.length} focusable elements found, focus-visible ${focusVisibleSupport ? 'supported' : 'not supported'}`,
      recommendation: !focusVisibleSupport ? 'Add focus-visible polyfill for better keyboard navigation' : undefined
    });

    // Test 9: High DPI Support
    const isHighDPI = pixelRatio >= 2;
    const hasRetinaOptimization = document.documentElement.classList.contains('high-dpi') || 
                                 getComputedStyle(document.documentElement).getPropertyValue('image-rendering').includes('crisp');

    results.push({
      test: 'High-DPI Display Support',
      status: isHighDPI && hasRetinaOptimization ? 'pass' : isHighDPI ? 'warning' : 'pass',
      details: `Device pixel ratio: ${pixelRatio}, optimization ${hasRetinaOptimization ? 'enabled' : 'disabled'}`,
      recommendation: isHighDPI && !hasRetinaOptimization ? 'Add high-DPI image and text optimizations' : undefined
    });

    // Test 10: Tablet-Specific CSS
    const hasTabletCSS = document.querySelector('link[href*="tablet"]') || 
                         document.querySelector('style')?.textContent?.includes('@media') ||
                         getComputedStyle(document.documentElement).getPropertyValue('--tablet-width');

    results.push({
      test: 'Tablet-Specific Styling',
      status: hasTabletCSS ? 'pass' : 'fail',
      details: hasTabletCSS ? 'Tablet-specific CSS detected' : 'No tablet-specific optimizations found',
      recommendation: !hasTabletCSS ? 'Add tablet-specific CSS media queries and optimizations' : undefined
    });

    setTestResults(results);
    setIsRunning(false);
  };

  useEffect(() => {
    runTabletTests();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'fail': return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getDeviceIcon = () => {
    if (deviceInfo.width >= 1024) return <Monitor className="w-6 h-6" />;
    if (deviceInfo.width >= 768) return <Tablet className="w-6 h-6" />;
    return <Smartphone className="w-6 h-6" />;
  };

  const passCount = testResults.filter(r => r.status === 'pass').length;
  const warningCount = testResults.filter(r => r.status === 'warning').length;
  const failCount = testResults.filter(r => r.status === 'fail').length;

  if (!deviceInfo.isTablet) {
    return null; // Only show on tablet devices
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 max-w-md bg-gray-900 border border-gray-700 rounded-lg p-4 z-50 max-h-96 overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {getDeviceIcon()}
          <h3 className="text-white font-semibold">Tablet Optimization Test</h3>
        </div>
        <button 
          onClick={runTabletTests}
          disabled={isRunning}
          className="text-blue-400 hover:text-blue-300 disabled:opacity-50"
        >
          {isRunning ? 'Testing...' : 'Retest'}
        </button>
      </div>

      <div className="mb-4 text-sm text-gray-300">
        <div>Device: {deviceInfo.width}×{deviceInfo.height} ({deviceInfo.orientation})</div>
        <div>Pixel Ratio: {deviceInfo.pixelRatio}</div>
      </div>

      <div className="flex gap-4 mb-4 text-sm">
        <span className="text-green-400">✓ {passCount} Pass</span>
        <span className="text-yellow-400">⚠ {warningCount} Warning</span>
        <span className="text-red-400">✗ {failCount} Fail</span>
      </div>

      <div className="space-y-2">
        {testResults.map((result, index) => (
          <div key={index} className="flex items-start gap-2 p-2 bg-gray-800 rounded">
            {getStatusIcon(result.status)}
            <div className="flex-1 min-w-0">
              <div className="font-medium text-white text-sm">{result.test}</div>
              <div className="text-gray-400 text-xs">{result.details}</div>
              {result.recommendation && (
                <div className="text-blue-400 text-xs mt-1">💡 {result.recommendation}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Tablet optimization suite by Mavericks Edge
      </div>
    </motion.div>
  );
}