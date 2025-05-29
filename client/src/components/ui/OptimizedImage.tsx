
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width = 800, 
  height = 600, 
  className = '',
  loading = 'lazy',
  priority = false 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized URLs
  const getOptimizedUrl = (format?: string) => {
    if (src.includes('unsplash.com')) {
      const url = new URL(src);
      url.searchParams.set('w', width.toString());
      url.searchParams.set('h', height.toString());
      url.searchParams.set('q', '80');
      url.searchParams.set('auto', 'format');
      if (format) url.searchParams.set('fm', format);
      return url.toString();
    }
    return src;
  };

  const avifSrc = getOptimizedUrl('avif');
  const webpSrc = getOptimizedUrl('webp');
  const fallbackSrc = getOptimizedUrl();

  useEffect(() => {
    if (priority && imgRef.current) {
      // Preload priority images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = webpSrc;
      document.head.appendChild(link);
    }
  }, [priority, webpSrc]);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse rounded"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}
      
      <picture>
        <source srcSet={avifSrc} type="image/avif" />
        <source srcSet={webpSrc} type="image/webp" />
        <img
          ref={imgRef}
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      </picture>
    </div>
  );
}
