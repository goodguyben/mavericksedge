import { useState, useEffect, RefObject, useCallback, useRef } from 'react';
import { throttle } from '@/lib/performance';

export interface ScrollFadeOptions {
  fadeOutPoint?: number;
  fadeInPoint?: number;
  fadeOutDuration?: number;
  fadeInDuration?: number;
  initialOpacity?: number;
  minOpacity?: number;
}

// Global scroll manager to consolidate all scroll listeners
class ScrollManager {
  private static instance: ScrollManager;
  private listeners: Map<string, (scrollY: number) => void> = new Map();
  private throttledUpdate: () => void;
  private lastScrollY = 0;
  private rafId: number | null = null;

  static getInstance() {
    if (!ScrollManager.instance) {
      ScrollManager.instance = new ScrollManager();
    }
    return ScrollManager.instance;
  }

  private constructor() {
    // Use RAF for smooth updates with less aggressive throttling
    this.throttledUpdate = throttle(() => {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      this.rafId = requestAnimationFrame(() => {
        this.listeners.forEach(listener => listener(this.lastScrollY));
        this.rafId = null;
      });
    }, 8); // Less aggressive throttling for smoother animations

    window.addEventListener('scroll', () => {
      this.lastScrollY = window.scrollY;
      this.throttledUpdate();
    }, { passive: true });
  }

  addListener(id: string, callback: (scrollY: number) => void) {
    this.listeners.set(id, callback);
  }

  removeListener(id: string) {
    this.listeners.delete(id);
  }
}

export function useOptimizedScrollFade(
  ref: RefObject<HTMLElement>,
  options: ScrollFadeOptions = {}
) {
  const {
    fadeOutPoint = 0.5,
    fadeInPoint = 0.6,
    fadeOutDuration = 1.5,
    fadeInDuration = 1,
    initialOpacity = 0,
    minOpacity = 0.05,
  } = options;

  const [opacity, setOpacity] = useState(initialOpacity);
  const elementId = useRef(`scroll-fade-${Math.random().toString(36).substr(2, 9)}`);

  const calculateOpacity = useCallback((scrollY: number) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Element is above viewport (scrolled past)
    if (rect.bottom < 0) {
      setOpacity(minOpacity);
      return;
    }
    
    // Element is below viewport (not yet visible)
    if (rect.top > viewportHeight) {
      setOpacity(initialOpacity);
      return;
    }

    // Element is at least partially visible
    
    // Fade in - calculate how far the element has entered the viewport
    const entryRatio = (viewportHeight - rect.top) / (viewportHeight * fadeInPoint);
    const entryFactor = Math.min(1, Math.max(0, entryRatio * fadeInDuration));
    
    // Fade out - calculate how close element is to leaving top of viewport
    const exitRatio = rect.top / (viewportHeight * fadeOutPoint);
    const exitFactor = Math.max(minOpacity, 1 - Math.max(0, exitRatio));
    
    // Use the lower opacity value to ensure both effects work
    const finalOpacity = Math.min(entryFactor, exitFactor);
    
    // Debug logging in development
    if (process.env.NODE_ENV === 'development' && element.id) {
      console.log(`ScrollFade [${element.id}]:`, {
        scrollY,
        rectTop: rect.top,
        viewportHeight,
        entryRatio,
        entryFactor,
        exitRatio,
        exitFactor,
        finalOpacity
      });
    }
    
    setOpacity(finalOpacity);
  }, [fadeOutPoint, fadeInPoint, fadeOutDuration, fadeInDuration, initialOpacity, minOpacity]);

  useEffect(() => {
    const scrollManager = ScrollManager.getInstance();
    const id = elementId.current;
    
    scrollManager.addListener(id, calculateOpacity);
    
    // Initial calculation - use a small delay to ensure DOM is ready
    setTimeout(() => {
      calculateOpacity(window.scrollY);
    }, 0);

    return () => {
      scrollManager.removeListener(id);
    };
  }, [calculateOpacity]);

  return opacity;
} 