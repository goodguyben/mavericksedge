import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate WebP and fallback sources
  const generateWebPSrc = (baseSrc: string) => {
    if (baseSrc.includes('unsplash.com')) {
      return `${baseSrc}&fm=webp&q=80`;
    }
    return baseSrc.replace(/\.(jpg|jpeg|png)$/, '.webp');
  };

  // Generate different sizes for responsive images
  const generateSrcSet = (baseSrc: string, format: 'webp' | 'original' = 'original') => {
    const sizes = [400, 800, 1200];
    const formatSrc = format === 'webp' ? generateWebPSrc(baseSrc) : baseSrc;

    if (baseSrc.includes('unsplash.com')) {
      return sizes.map(size => 
        format === 'webp' 
          ? `${baseSrc}&w=${size}&fm=webp&q=80 ${size}w`
          : `${baseSrc}&w=${size}&q=80 ${size}w`
      ).join(', ');
    }

    return sizes.map(size => `${formatSrc}?w=${size} ${size}w`).join(', ');
  };

  const handleLoad = () => setImageLoaded(true);
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Don't log cross-origin image errors
    if (e.currentTarget.src.includes('unsplash.com') || 
        e.currentTarget.src.includes('third-party-domain')) {
      e.preventDefault();
    }
    setImageError(true);
  };

  if (imageError) {
    return (
      <div 
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture>
      <source
        srcSet={generateSrcSet(src, 'webp')}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        type="image/webp"
      />
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={priority ? 'eager' : loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
      {!imageLoaded && !imageError && (
        <div 
          className={`absolute inset-0 bg-gray-800 animate-pulse ${className}`}
          style={{ width, height }}
        />
      )}
    </picture>
  );
};