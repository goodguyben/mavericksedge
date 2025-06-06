
// Global error handling for cross-origin and other errors
export const setupGlobalErrorHandling = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    // Prevent cross-origin errors from being logged
    if (event.reason?.message?.includes('cross-origin') ||
        event.reason?.message === 'Script error.' ||
        event.reason?.message?.includes('ResizeObserver loop limit exceeded') ||
        event.reason?.name === 'ChunkLoadError') {
      event.preventDefault();
      return false;
    }
    
    console.warn('Unhandled promise rejection:', event.reason);
  });

  // Handle global JavaScript errors with more comprehensive filtering
  window.addEventListener('error', (event) => {
    // Prevent cross-origin errors and development-only errors from being logged
    if (event.message?.includes('cross-origin') ||
        event.message === 'Script error.' ||
        event.message?.includes('ResizeObserver loop limit exceeded') ||
        event.message?.includes('React doesn\'t have access to the actual error object') ||
        event.filename?.includes('chrome-extension://') ||
        event.filename?.includes('moz-extension://')) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    
    // Only log actual application errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Application error:', event.error);
    }
  });

  // Handle resource loading errors
  window.addEventListener('error', (event) => {
    if (event.target !== window) {
      const target = event.target as HTMLElement;
      if (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.tagName === 'SCRIPT') {
        // Silently handle resource loading failures in production
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Failed to load ${target.tagName}:`, target);
        }
        event.preventDefault();
        return false;
      }
    }
  }, true);

  // Override console.error to filter out React development warnings
  const originalConsoleError = console.error;
  console.error = (...args) => {
    const message = args[0]?.toString() || '';
    
    // Filter out React development warnings and cross-origin errors
    if (message.includes('cross-origin') ||
        message.includes('Script error') ||
        message.includes('React doesn\'t have access to the actual error object') ||
        message.includes('ResizeObserver loop limit exceeded')) {
      return;
    }
    
    originalConsoleError.apply(console, args);
  };
};

// Suppress ResizeObserver errors
export const suppressResizeObserverErrors = () => {
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0]?.includes?.('ResizeObserver loop limit exceeded')) {
      return;
    }
    originalError(...args);
  };
};
