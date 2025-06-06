
// Global error handling for cross-origin and other errors
export const setupGlobalErrorHandling = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    // Prevent cross-origin errors from being logged
    if (event.reason?.message?.includes('cross-origin') ||
        event.reason?.message === 'Script error.' ||
        event.reason?.message?.includes('ResizeObserver loop limit exceeded')) {
      event.preventDefault();
      return;
    }
    
    console.warn('Unhandled promise rejection:', event.reason);
  });

  // Handle global JavaScript errors
  window.addEventListener('error', (event) => {
    // Prevent cross-origin errors from being logged
    if (event.message.includes('cross-origin') ||
        event.message === 'Script error.' ||
        event.message.includes('ResizeObserver loop limit exceeded')) {
      event.preventDefault();
      return;
    }
    
    console.error('Global error:', event.error);
  });

  // Handle resource loading errors
  window.addEventListener('error', (event) => {
    if (event.target !== window) {
      const target = event.target as HTMLElement;
      if (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.tagName === 'SCRIPT') {
        console.warn(`Failed to load ${target.tagName}:`, target);
        event.preventDefault();
      }
    }
  }, true);
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
