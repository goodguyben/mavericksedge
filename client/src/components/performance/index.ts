// Performance optimization components
export { LazySection } from './LazySection';
export { OptimizedSection } from './OptimizedSection';
export { PerformanceMonitor } from './PerformanceMonitor';

// Re-export hooks for convenience
export { useOptimizedScrollFade } from '@/hooks/useOptimizedScrollFade';
export { useAnimationBudget, useAnimationBudgetStatus } from '@/hooks/useAnimationBudget';
export type { ScrollFadeOptions } from '@/hooks/useOptimizedScrollFade'; 