import React, { useState, useEffect, useRef } from 'react';
import { PlayCircle } from 'lucide-react';

interface LazyVideoProps {
  src: string | { webm?: string; mp4?: string };
  className?: string;
  thumbnail?: string;
  priority?: boolean;
}

/**
 * Ultra-lightweight lazy video component that only loads on user interaction
 * This drastically reduces initial page load and improves LCP
 */
const LazyVideo: React.FC<LazyVideoProps> = ({ 
  src, 
  className = '', 
  thumbnail,
  priority = false 
}) => {
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use intersection observer for non-priority videos
  useEffect(() => {
    if (priority || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
            // Don't auto-load, wait for user interaction
            // This saves bandwidth and improves performance
          }
        });
      },
      { threshold: [0.25], rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  const handleLoad = () => {
    setShouldLoad(true);
    setIsLoading(true);
  };

  const getVideoSrc = () => {
    if (typeof src === 'string') return src;
    return src.webm || src.mp4 || '';
  };

  return (
    <div 
      ref={containerRef}
      className={`relative bg-gray-900 overflow-hidden ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      {!shouldLoad ? (
        <button
          onClick={handleLoad}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/70 hover:bg-black/60 transition-colors cursor-pointer group"
          aria-label="Play video"
        >
          <div className="text-center">
            <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-colors mb-2 mx-auto" />
            <p className="text-white/70 text-sm">Click to load video</p>
          </div>
          {thumbnail && (
            <img 
              src={thumbnail} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50"
              loading="lazy"
            />
          )}
        </button>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
          >
            {typeof src === 'object' && src.webm && (
              <source src={src.webm} type="video/webm" />
            )}
            {typeof src === 'object' && src.mp4 && (
              <source src={src.mp4} type="video/mp4" />
            )}
            {typeof src === 'string' && (
              <source src={src} type={src.includes('.webm') ? 'video/webm' : 'video/mp4'} />
            )}
          </video>
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <p className="text-gray-400">Failed to load video</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LazyVideo;