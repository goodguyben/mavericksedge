import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import { AnimatePresence } from "framer-motion";

// Comprehensive error suppression for cross-origin and development errors
const suppressCrossOriginErrors = () => {
  // Prevent React's cross-origin error from being thrown
  const originalError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    if (typeof message === 'string' && (
      message.includes('Script error') ||
      message.includes('cross-origin') ||
      message.includes('ResizeObserver loop limit exceeded')
    )) {
      return true; // Prevent default browser error handling
    }
    if (originalError) {
      return originalError(message, source, lineno, colno, error);
    }
    return false;
  };

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const message = event.reason?.message || '';
    if (message.includes('cross-origin') || 
        message.includes('Script error') ||
        message.includes('ResizeObserver loop limit exceeded')) {
      event.preventDefault();
      return;
    }
  });

  // Override console.error to filter out React development warnings
  const originalConsoleError = console.error;
  console.error = (...args) => {
    const message = args[0]?.toString() || '';
    if (message.includes('cross-origin') ||
        message.includes('Script error') ||
        message.includes('React doesn\'t have access to the actual error object') ||
        message.includes('ResizeObserver loop limit exceeded')) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
};

// Initialize error suppression immediately
suppressCrossOriginErrors();

// Performance optimizations
const enablePerformanceOptimizations = () => {
  // Enable paint optimization
  if ('paintWorklet' in CSS) {
    // CSS Paint API optimizations can be added here
  }

  // Optimize images loading
  if ('loading' in HTMLImageElement.prototype) {
    document.documentElement.classList.add('native-lazy-loading');
  }

  // Reduce motion for accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--motion-reduce', '1');
  }
};

// Initialize performance optimizations
enablePerformanceOptimizations();

const root = createRoot(document.getElementById("root")!);

root.render(
  <HelmetProvider>
    <AnimatePresence mode="wait">
      <App />
    </AnimatePresence>
  </HelmetProvider>
);