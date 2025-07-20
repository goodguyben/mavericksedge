import React, { Suspense, lazy, ComponentType } from 'react';
import { motion } from 'framer-motion';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component, 
  fallback, 
  className = '',
  ...props 
}) => {
  const LazyLoadedComponent = lazy(component);

  const defaultFallback = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center justify-center p-8 ${className}`}
    >
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
    </motion.div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={className}
      >
        <LazyLoadedComponent {...props} />
      </motion.div>
    </Suspense>
  );
};

export default LazyComponent; 