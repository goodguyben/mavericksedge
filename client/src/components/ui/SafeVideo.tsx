import React, { useState, useRef, useEffect } from 'react';

interface SafeVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  fallbackImage?: string;
  onLoad?: () => void;
  onError?: (error: Event) => void;
}

export const SafeVideo: React.FC<SafeVideoProps> = ({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = true,
  controls = false,
  playsInline = true,
  preload = 'metadata',
  fallbackImage,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoad = () => {
      setIsLoaded(true);
      onLoad?.();
    };

    const handleError = (e: Event) => {
      console.error(`Video failed to load: ${src}`, e);
      setHasError(true);
      onError?.(e);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadeddata', handleLoad);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadeddata', handleLoad);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [src, onLoad, onError]);

  if (hasError) {
    return (
      <div className={`relative ${className}`}>
        {fallbackImage ? (
          <img
            src={fallbackImage}
            alt="Video fallback"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <p className="text-sm">Video unavailable</p>
              <p className="text-xs mt-1">Please try again later</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading video...</div>
        </div>
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline={playsInline}
        preload={preload}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SafeVideo;