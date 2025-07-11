import { useState, useEffect, useCallback } from 'react';

class AnimationBudget {
  private static instance: AnimationBudget;
  private activeAnimations = 0;
  private maxAnimations = 6;
  private queue: Array<{ id: string; callback: () => void; priority: number }> = [];
  private listeners: Set<(count: number) => void> = new Set();

  static getInstance() {
    if (!AnimationBudget.instance) {
      AnimationBudget.instance = new AnimationBudget();
    }
    return AnimationBudget.instance;
  }

  constructor() {
    // Adjust max animations based on device capabilities
    if (typeof window !== 'undefined') {
      const isLowEnd = 
        navigator.hardwareConcurrency <= 4 ||
        /Android [4-5]/.test(navigator.userAgent) ||
        /iPhone [5-6]/.test(navigator.userAgent);
      
      this.maxAnimations = isLowEnd ? 3 : 6;
    }
  }

  requestAnimation(id: string, callback: () => void, priority: number = 0) {
    if (this.activeAnimations < this.maxAnimations) {
      this.activeAnimations++;
      this.notifyListeners();
      callback();
      return true;
    } else {
      // Add to queue sorted by priority
      this.queue.push({ id, callback, priority });
      this.queue.sort((a, b) => b.priority - a.priority);
      return false;
    }
  }

  releaseAnimation(id: string) {
    this.activeAnimations = Math.max(0, this.activeAnimations - 1);
    this.notifyListeners();
    
    // Process next in queue
    if (this.queue.length > 0 && this.activeAnimations < this.maxAnimations) {
      const next = this.queue.shift();
      if (next) {
        this.activeAnimations++;
        this.notifyListeners();
        next.callback();
      }
    }
  }

  cancelAnimation(id: string) {
    this.queue = this.queue.filter(item => item.id !== id);
  }

  addListener(listener: (count: number) => void) {
    this.listeners.add(listener);
    listener(this.activeAnimations);
  }

  removeListener(listener: (count: number) => void) {
    this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.activeAnimations));
  }

  getActiveCount() {
    return this.activeAnimations;
  }

  getMaxAnimations() {
    return this.maxAnimations;
  }
}

export const useAnimationBudget = (priority: number = 0) => {
  const [canAnimate, setCanAnimate] = useState(false);
  const [animationId] = useState(() => `animation-${Math.random().toString(36).substr(2, 9)}`);
  const budget = AnimationBudget.getInstance();

  const requestAnimation = useCallback((callback: () => void) => {
    const granted = budget.requestAnimation(animationId, callback, priority);
    setCanAnimate(granted);
    return granted;
  }, [budget, animationId, priority]);

  const releaseAnimation = useCallback(() => {
    budget.releaseAnimation(animationId);
    setCanAnimate(false);
  }, [budget, animationId]);

  useEffect(() => {
    return () => {
      // Clean up on unmount
      budget.cancelAnimation(animationId);
      if (canAnimate) {
        budget.releaseAnimation(animationId);
      }
    };
  }, [budget, animationId, canAnimate]);

  return { canAnimate, requestAnimation, releaseAnimation };
};

// Hook to monitor animation budget status
export const useAnimationBudgetStatus = () => {
  const [activeCount, setActiveCount] = useState(0);
  const budget = AnimationBudget.getInstance();

  useEffect(() => {
    const listener = (count: number) => setActiveCount(count);
    budget.addListener(listener);
    
    return () => {
      budget.removeListener(listener);
    };
  }, [budget]);

  return {
    activeAnimations: activeCount,
    maxAnimations: budget.getMaxAnimations(),
    isAtCapacity: activeCount >= budget.getMaxAnimations()
  };
}; 