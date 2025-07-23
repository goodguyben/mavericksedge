import React from 'react';

interface OptimizedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'transparent';
}

export const OptimizedLogo: React.FC<OptimizedLogoProps> = ({ 
  className = "", 
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const colorClasses = {
    default: 'text-blue-600',
    white: 'text-white',
    transparent: 'text-transparent'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[variant]} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        className="w-full h-full"
        aria-label="Mavericks Edge Logo"
      >
        {/* Optimized SVG logo - simplified version */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        
        {/* Main logo shape */}
        <path
          d="M32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm0 44c-11.046 0-20-8.954-20-20S20.954 12 32 12s20 8.954 20 20-8.954 20-20 20z"
          fill="url(#logoGradient)"
        />
        
        {/* Inner design elements */}
        <path
          d="M32 16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 28c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"
          fill="currentColor"
          opacity="0.3"
        />
        
        {/* Center accent */}
        <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.8" />
      </svg>
    </div>
  );
}; 