
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: (error: Event) => void;
}

const MAX_CONCURRENT_VIDEOS = 6;
let currentlyLoadingVideos = 0;
const videoQueue: Array<() => void> = [];

const processVideoQueue = () => {
  if (currentlyLoadingVideos < MAX_CONCURRENT_VIDEOS && videoQueue.length > 0) {
    const nextLoad = videoQueue.shift();
    if (nextLoad) {
      currentlyLoadingVideos++;
      nextLoad();
    }
  }
};

export const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  className = '',
  priority = false,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedLoading = useRef(false);

  // Use intersection observer to trigger loading
  const { isIntersecting } = useIntersectionObserver(videoRef, {
    threshold: 0.1,
    rootMargin: '100px'
  });

  const startLoading = useCallback(() => {
    if (hasStartedLoading.current) return;
    hasStartedLoading.current = true;

    const loadVideo = () => {
      const video = videoRef.current;
      if (!video) {
        currentlyLoadingVideos--;
        processVideoQueue();
        return;
      }

      const handleLoad = () => {
        setIsLoaded(true);
        currentlyLoadingVideos--;
        processVideoQueue();
        onLoad?.();
        console.log(`Video ready: ${src}`);
      };

      const handleError = (e: Event) => {
        setHasError(true);
        currentlyLoadingVideos--;
        processVideoQueue();
        onError?.(e);
        console.error(`Video failed to load: ${src}`);
      };

      video.addEventListener('loadeddata', handleLoad, { once: true });
      video.addEventListener('error', handleError, { once: true });
      
      // Set the source to start loading
      video.src = src;
      video.load();
    };

    if (priority || currentlyLoadingVideos < MAX_CONCURRENT_VIDEOS) {
      if (!priority) currentlyLoadingVideos++;
      loadVideo();
    } else {
      videoQueue.push(loadVideo);
    }
  }, [src, priority, onLoad, onError]);

  useEffect(() => {
    if ((isIntersecting || priority) && !shouldLoad) {
      setShouldLoad(true);
      startLoading();
    }
  }, [isIntersecting, priority, shouldLoad, startLoading]);

  if (hasError) {
    return (
      <div className={`relative ${className} bg-gray-800 flex items-center justify-center`}>
        <div className="text-gray-400 text-center">
          <p className="text-sm">Video unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} optimized-video`} data-loading={!isLoaded}>
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading video...</div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        autoPlay={false}
        muted
        loop
        playsInline
        preload="none"
        controls={false}
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  );
};

OptimizedVideo.displayName = "OptimizedVideo";

// Wrapper component for the entire gallery with performance optimizations
interface VideoGalleryWrapperProps {
  children: React.ReactNode;
  maxConcurrentVideos?: number;
  className?: string;
}

export const VideoGalleryWrapper: React.FC<VideoGalleryWrapperProps> = ({
  children,
  maxConcurrentVideos = 6,
  className,
}) => {
  const [isLowPowerMode, setIsLowPowerMode] = React.useState(false);

  React.useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsLowPowerMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLowPowerMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Reduce video quality on mobile or low-end devices
  React.useEffect(() => {
    const checkDeviceCapabilities = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isLowEndDevice = navigator.hardwareConcurrency <= 4;
      
      if (isMobile || isLowEndDevice || isLowPowerMode) {
        // Add class to reduce video quality
        document.documentElement.classList.add("reduce-video-quality");
      }
    };

    checkDeviceCapabilities();
  }, [isLowPowerMode]);

  return (
    <div 
      className={className}
      data-max-videos={maxConcurrentVideos}
      data-low-power={isLowPowerMode}
    >
      {children}
    </div>
  );
};
