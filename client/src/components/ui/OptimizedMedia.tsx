
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedVideoProps {
  src: string;
  alt?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
}

export const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  alt,
  className = '',
  autoPlay = false,
  muted = true,
  loop = true,
  controls = false,
  poster
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Generate optimized source paths
  const getOptimizedSources = (originalSrc: string) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    const directory = originalSrc.substring(0, originalSrc.lastIndexOf('/'));
    
    return {
      webm: `${directory}/optimized/${baseName.split('/').pop()}-optimized.webm`,
      mp4: `${directory}/optimized/${baseName.split('/').pop()}-optimized.mp4`,
      fallback: originalSrc
    };
  };

  const sources = getOptimizedSources(src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setError(true);

    video.addEventListener('loadeddata', handleLoad);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoad);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading video...</div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded-lg ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        poster={poster}
        playsInline
        preload="metadata"
      >
        <source src={sources.webm} type="video/webm" />
        <source src={sources.mp4} type="video/mp4" />
        <source src={sources.fallback} type="video/mp4" />
        
        <p>Your browser does not support the video tag. {alt}</p>
      </video>
      
      {error && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm text-center">
            <p>Video failed to load</p>
            <p className="text-xs mt-1">{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getOptimizedImageSrc = (originalSrc: string) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    const directory = originalSrc.substring(0, originalSrc.lastIndexOf('/'));
    
    return {
      webp: `${directory}/optimized/${baseName.split('/').pop()}.webp`,
      fallback: originalSrc
    };
  };

  const sources = getOptimizedImageSrc(src);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg"
          style={{ width, height }}
        />
      )}
      
      <picture>
        <source srcSet={sources.webp} type="image/webp" />
        <img
          src={sources.fallback}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      </picture>
      
      {error && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm text-center">
            <p>Image failed to load</p>
            <p className="text-xs mt-1">{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default { OptimizedVideo, OptimizedImage };
