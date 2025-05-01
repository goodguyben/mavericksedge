
import React from 'react';
import { cn } from '@/lib/utils';

// Responsive container component
export function ResponsiveContainer({
  children,
  className,
  fluid = false,
  as: Component = 'div',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  as?: React.ElementType;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        fluid ? 'w-full px-4 sm:px-6 lg:px-8' : 'container mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Responsive grid component
export function ResponsiveGrid({
  children,
  className,
  cols = 1,
  gap = 'gap-4',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: string;
  [key: string]: any;
}) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div
      className={cn(
        'grid',
        gridCols[cols],
        gap,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Stack component for vertical layouts
export function Stack({
  children,
  className,
  spacing = 'space-y-4',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  spacing?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        'flex flex-col',
        spacing,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Row component for horizontal layouts with responsive behavior
export function Row({
  children,
  className,
  wrap = true,
  spacing = 'gap-4',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  wrap?: boolean;
  spacing?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row',
        wrap ? 'flex-wrap' : 'flex-nowrap',
        spacing,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Responsive padding utility
export function ResponsivePadding({
  children,
  className,
  py = 'py-8 md:py-12 lg:py-16',
  px = 'px-4 sm:px-6 lg:px-8',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  py?: string;
  px?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        py,
        px,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
