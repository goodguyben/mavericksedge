import { useEffect, useRef, useCallback } from 'react';

export const useExecutionOptimization = () => {
  const frameId = useRef<number>();
  const pendingUpdates = useRef<Set<() => void>>(new Set());
  
  const scheduleUpdate = useCallback((updateFn: () => void) => {
    pendingUpdates.current.add(updateFn);
    
    if (!frameId.current) {
      frameId.current = requestAnimationFrame(() => {
        pendingUpdates.current.forEach(fn => fn());
        pendingUpdates.current.clear();
        frameId.current = undefined;
      });
    }
  }, []);
  
  const batchUpdates = useCallback((updates: (() => void)[]) => {
    updates.forEach(update => scheduleUpdate(update));
  }, [scheduleUpdate]);
  
  const debouncedUpdate = useCallback((updateFn: () => void, delay: number = 16) => {
    const timeoutId = setTimeout(() => {
      scheduleUpdate(updateFn);
    }, delay);
    
    return () => clearTimeout(timeoutId);
  }, [scheduleUpdate]);
  
  useEffect(() => {
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);
  
  return { 
    scheduleUpdate, 
    batchUpdates, 
    debouncedUpdate 
  };
};

// Hook for optimizing expensive calculations
export const useOptimizedCalculation = <T>(
  calculation: () => T,
  dependencies: any[],
  options: { 
    debounceMs?: number; 
    batchUpdates?: boolean;
    memoize?: boolean;
  } = {}
) => {
  const { debounceMs, batchUpdates, memoize = true } = options;
  const { scheduleUpdate, debouncedUpdate } = useExecutionOptimization();
  const resultRef = useRef<T>();
  const calculationRef = useRef(calculation);
  
  calculationRef.current = calculation;
  
  const executeCalculation = useCallback(() => {
    const newResult = calculationRef.current();
    if (memoize && resultRef.current !== newResult) {
      resultRef.current = newResult;
    } else if (!memoize) {
      resultRef.current = newResult;
    }
  }, [memoize]);
  
  useEffect(() => {
    if (debounceMs) {
      return debouncedUpdate(executeCalculation, debounceMs);
    } else if (batchUpdates) {
      scheduleUpdate(executeCalculation);
    } else {
      executeCalculation();
    }
  }, dependencies);
  
  return resultRef.current;
};

// Hook for optimizing scroll events
export const useOptimizedScroll = (
  callback: (scrollTop: number) => void,
  options: { 
    throttleMs?: number; 
    passive?: boolean;
  } = {}
) => {
  const { throttleMs = 16, passive = true } = options;
  const { scheduleUpdate } = useExecutionOptimization();
  const lastScrollTop = useRef(0);
  const throttleTimeout = useRef<NodeJS.Timeout>();
  
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop !== lastScrollTop.current) {
      lastScrollTop.current = scrollTop;
      
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
      
      throttleTimeout.current = setTimeout(() => {
        scheduleUpdate(() => callback(scrollTop));
      }, throttleMs);
    }
  }, [callback, throttleMs, scheduleUpdate]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [handleScroll, passive]);
  
  return lastScrollTop.current;
};

// Hook for optimizing resize events
export const useOptimizedResize = (
  callback: (dimensions: { width: number; height: number }) => void,
  options: { 
    debounceMs?: number; 
    passive?: boolean;
  } = {}
) => {
  const { debounceMs = 100, passive = true } = options;
  const { debouncedUpdate } = useExecutionOptimization();
  const lastDimensions = useRef({ width: 0, height: 0 });
  
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width !== lastDimensions.current.width || height !== lastDimensions.current.height) {
      lastDimensions.current = { width, height };
      debouncedUpdate(() => callback({ width, height }), debounceMs);
    }
  }, [callback, debounceMs, debouncedUpdate]);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive });
    
    // Initial call
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, passive]);
  
  return lastDimensions.current;
}; 