import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw',
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP src if supported
  const generateWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('data:') || originalSrc.includes('blob:')) {
      return originalSrc;
    }
    
    // Check if WebP is supported
    const canvas = document.createElement('canvas');
    const isWebPSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    
    if (isWebPSupported && !originalSrc.includes('.svg')) {
      // For now, return original src - in production you'd have WebP versions
      return originalSrc;
    }
    
    return originalSrc;
  };

  // Generate responsive srcset
  const generateSrcSet = (originalSrc: string) => {
    if (originalSrc.includes('data:') || originalSrc.includes('blob:') || originalSrc.includes('.svg')) {
      return undefined;
    }

    const breakpoints = [320, 640, 768, 1024, 1280, 1536];
    return breakpoints
      .map(bp => `${originalSrc}?w=${bp} ${bp}w`)
      .join(', ');
  };

  useEffect(() => {
    if (priority) {
      // Load immediately for priority images
      setImageSrc(generateWebPSrc(src));
    } else {
      // Lazy load for non-priority images
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(generateWebPSrc(src));
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.01
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  const imageClasses = [
    className,
    'transition-opacity duration-300',
    isLoaded ? 'opacity-100' : 'opacity-0',
    isError ? 'opacity-50' : ''
  ].filter(Boolean).join(' ');

  if (isError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden"
    >
      {!isLoaded && placeholder && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}
      
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={imageClasses}
        width={width}
        height={height}
        sizes={sizes}
        srcSet={generateSrcSet(src)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: width ? `${width}px` : 'auto',
          height: height ? `${height}px` : 'auto',
          objectFit: 'cover'
        }}
      />
    </motion.div>
  );
};

export default OptimizedImage; 