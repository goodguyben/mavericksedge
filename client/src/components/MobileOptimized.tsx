
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileOptimizedProps {
  children: React.ReactNode;
  className?: string;
}

const MobileOptimized: React.FC<MobileOptimizedProps> = ({ 
  children, 
  className = '' 
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={`mobile-optimized ${isMobile ? 'mobile-view' : 'desktop-view'} ${className}`}>
      {children}
    </div>
  );
};

export default MobileOptimized;
