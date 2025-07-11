import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useOptimizedScrollFade } from '@/hooks/useOptimizedScrollFade';
import { LazySection } from './LazySection';
import { useAnimationBudget } from '@/hooks/useAnimationBudget';
import { cn } from '@/lib/utils';

interface OptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  // Lazy loading options
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
  // Scroll fade options
  minOpacity?: number;
  fadeOutPoint?: number;
  fadeInPoint?: number;
  fadeOutDuration?: number;
  fadeInDuration?: number;
  initialOpacity?: number;
  // Performance options
  priority?: number;
  disableAnimations?: boolean;
  as?: 'div' | 'section' | 'article';
}

/**
 * High-performance section component that combines:
 * - Lazy loading with Intersection Observer
 * - Optimized scroll-based fade effects
 * - Animation budget management
 * - CSS performance optimizations
 */
export const OptimizedSection: React.FC<OptimizedSectionProps> = ({
  children,
  className,
  id,
  // Lazy loading defaults
  threshold = 0.1,
  rootMargin = '50px',
  fallback,
  // Scroll fade defaults
  minOpacity = 0.05,
  fadeOutPoint = 0.3,
  fadeInPoint = 0.9,
  fadeOutDuration = 1,
  fadeInDuration = 1.2,
  initialOpacity = 0,
  // Performance defaults
  priority = 0,
  disableAnimations = false,
  as: Component = 'section'
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { canAnimate, requestAnimation, releaseAnimation } = useAnimationBudget(priority);
  
  // Use optimized scroll fade
  const opacity = useOptimizedScrollFade(sectionRef, {
    minOpacity,
    fadeOutPoint,
    fadeInPoint,
    fadeOutDuration,
    fadeInDuration,
    initialOpacity,
  });

  React.useEffect(() => {
    if (!disableAnimations && sectionRef.current) {
      const element = sectionRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            requestAnimation(() => {
              element.classList.add('animate-in');
            });
          } else {
            releaseAnimation();
            element.classList.remove('animate-in');
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return () => {
        observer.disconnect();
        releaseAnimation();
      };
    }
  }, [disableAnimations, requestAnimation, releaseAnimation]);

  const performanceClasses = cn(
    'performance-optimized',
    'hint-resource-priority-low',
    'optimize-animation',
    className
  );

  return (
    <LazySection
      threshold={threshold}
      rootMargin={rootMargin}
      fallback={fallback}
      className={performanceClasses}
      as={Component}
    >
      <motion.div
        ref={sectionRef as any}
        id={id}
        className="w-full"
        style={{ opacity: disableAnimations ? 1 : opacity }}
        initial={{ opacity: disableAnimations ? 1 : initialOpacity }}
        animate={{ opacity: disableAnimations ? 1 : opacity }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </LazySection>
  );
}; 