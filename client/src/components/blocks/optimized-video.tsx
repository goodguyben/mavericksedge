
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface VideoSource {
  webm: string;
  mp4: string;
}

interface OptimizedVideoProps {
  src: string | VideoSource;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: (error: Event) => void;
}

const MAX_CONCURRENT_VIDEOS = 2; // Reduced for better performance
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

  // Use intersection observer with optimized margin for better performance
  const { isIntersecting } = useIntersectionObserver(videoRef, {
    threshold: 0.01,
    rootMargin: priority ? '400px' : '200px' // Larger margins for earlier loading
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
        
        // Log which format was loaded
        const loadedSrc = video.currentSrc || video.src;
        const format = loadedSrc.includes('.webm') ? 'WebM' : 'MP4';
        console.log(`✅ Video ready (${format}): ${loadedSrc}`);
      };

      const handleError = (e: Event) => {
        setHasError(true);
        currentlyLoadingVideos--;
        processVideoQueue();
        onError?.(e);
        
        const errorSrc = typeof src === 'string' ? src : src.webm;
        console.error(`❌ Video failed to load: ${errorSrc}`);
      };

      video.addEventListener('loadeddata', handleLoad, { once: true });
      video.addEventListener('error', handleError, { once: true });
      
      // Clear any existing sources
      video.innerHTML = '';
      
      // Add source elements for WebM and MP4 fallback
      if (typeof src === 'object' && src.webm && src.mp4) {
        const webmSource = document.createElement('source');
        webmSource.src = src.webm;
        webmSource.type = 'video/webm; codecs="vp9,opus"';
        video.appendChild(webmSource);
        
        const mp4Source = document.createElement('source');
        mp4Source.src = src.mp4;
        mp4Source.type = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
        video.appendChild(mp4Source);
      } else {
        // Fallback for string src (backward compatibility)
        const singleSource = document.createElement('source');
        singleSource.src = typeof src === 'string' ? src : src.webm;
        singleSource.type = typeof src === 'string' && src.includes('.webm') ? 'video/webm' : 'video/mp4';
        video.appendChild(singleSource);
      }
      
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
    console.log(`Video ${typeof src === 'string' ? src : src.webm} - isIntersecting: ${isIntersecting}, priority: ${priority}, shouldLoad: ${shouldLoad}`);
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
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        controls={false}
        style={{ aspectRatio: '16/9' }}
      >
        {/* Sources will be dynamically added by the loading function */}
      </video>
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
