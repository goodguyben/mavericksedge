# Performance Optimization Migration Guide

This guide helps you migrate existing components to use the new performance optimizations.

## Quick Start

### 1. Replace ScrollFadeSection with OptimizedSection

**Before:**
```tsx
import ScrollFadeSection from '@/components/ui/scroll-fade-section';

<ScrollFadeSection
  id="my-section"
  fadeInPoint={0.5}
  fadeOutPoint={0.6}
>
  <MyComponent />
</ScrollFadeSection>
```

**After:**
```tsx
import { OptimizedSection } from '@/components/performance';

<OptimizedSection
  id="my-section"
  fadeInPoint={0.5}
  fadeOutPoint={0.6}
  threshold={0.1}
  rootMargin="50px"
>
  <MyComponent />
</OptimizedSection>
```

### 2. Add LazySection for Non-Critical Content

**Before:**
```tsx
<section className="my-section">
  <ExpensiveComponent />
</section>
```

**After:**
```tsx
import { LazySection } from '@/components/performance';

<LazySection 
  threshold={0.1}
  rootMargin="100px"
  className="my-section"
>
  <ExpensiveComponent />
</LazySection>
```

### 3. Use Animation Budget for Complex Animations

**Before:**
```tsx
const MyAnimatedComponent = () => {
  useEffect(() => {
    // Start animation immediately
    animateElement();
  }, []);
  
  return <div>...</div>
};
```

**After:**
```tsx
import { useAnimationBudget } from '@/components/performance';

const MyAnimatedComponent = () => {
  const { requestAnimation, releaseAnimation } = useAnimationBudget(1);
  
  useEffect(() => {
    requestAnimation(() => {
      animateElement();
    });
    
    return () => releaseAnimation();
  }, []);
  
  return <div>...</div>
};
```

### 4. Add Performance Classes to Sections

Add these classes to optimize rendering:

```tsx
<section className="performance-optimized hint-resource-priority-low">
  {/* Your content */}
</section>
```

For critical above-fold content:
```tsx
<section className="hint-resource-priority-high">
  {/* Critical content */}
</section>
```

### 5. Update Scroll Event Handlers

**Before:**
```tsx
useEffect(() => {
  const handleScroll = () => {
    // Scroll logic
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**After:**
```tsx
import { useOptimizedScroll } from '@/components/performance';

useOptimizedScroll((scrollY) => {
  // Scroll logic with scrollY position
}, [dependencies]);
```

## Performance Checklist

- [ ] Replace all ScrollFadeSection with OptimizedSection
- [ ] Wrap non-critical sections with LazySection
- [ ] Add animation budget to complex animations
- [ ] Add performance CSS classes to sections
- [ ] Consolidate scroll event listeners
- [ ] Add loading="lazy" to images below fold
- [ ] Test with Performance Monitor (Ctrl+Shift+P)

## Monitoring Performance

In development, press `Ctrl+Shift+P` to toggle the performance monitor and check:
- FPS (should be 55-60)
- Memory usage
- Active animations count
- Paint timing

## Best Practices

1. **Above-fold content**: Load immediately without LazySection
2. **Below-fold content**: Always use LazySection
3. **Animations**: Limit to 3-6 concurrent animations
4. **Scroll effects**: Use the optimized hooks
5. **Videos**: Already optimized with OptimizedVideo component
6. **Images**: Use loading="lazy" for below-fold images 