// Logger utility that only logs in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
  log: (...args: any[]) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },
  warn: (...args: any[]) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },
  error: (...args: any[]) => {
    // Always log errors, even in production
    console.error(...args);
  },
  info: (...args: any[]) => {
    if (isDevelopment) {
      console.info(...args);
    }
  }
};

// For analytics and important events that should always be logged
export const analytics = {
  log: (...args: any[]) => {
    // Always log analytics events
    console.log('[Analytics]', ...args);
  }
}; 