import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileOptimizedVideoProps {
  src: string | { webm: string; mp4: string };
  alt?: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export const MobileOptimizedVideo: React.FC<MobileOptimizedVideoProps> = ({
  src,
  alt = '',
  className = '',
  poster,
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading !== 'lazy' || !containerRef.current) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay loading slightly to prioritize critical content
            setTimeout(() => setShouldLoad(true), 100);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [loading]);

  // Handle video load
  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  // Handle video error
  const handleVideoError = useCallback(() => {
    console.warn('Video failed to load:', src);
    onError?.();
  }, [src, onError]);

  // Get video source
  const getVideoSrc = () => {
    if (typeof src === 'string') {
      return src;
    }
    // Prefer WebM on desktop, MP4 on mobile for better compatibility
    return isMobile ? src.mp4 : src.webm;
  };

  // Get video type
  const getVideoType = () => {
    const videoSrc = getVideoSrc();
    if (videoSrc.includes('.webm')) {
      return 'video/webm; codecs="vp9,opus"';
    }
    return 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
  };

  // Render placeholder for mobile when not loaded
  const renderPlaceholder = () => {
    if (isMobile && !shouldLoad) {
      return (
        <div className="video-placeholder">
          <div className="placeholder-content">
            <div className="play-icon">▶</div>
            <p className="placeholder-text">Tap to load video</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      ref={containerRef}
      className={`mobile-optimized-video-container ${className}`}
      style={{
        aspectRatio: '16 / 9',
        backgroundColor: '#1a1a1a',
        position: 'relative',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      <AnimatePresence>
        {shouldLoad && (
          <motion.video
            ref={videoRef}
            className="mobile-optimized-video"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            poster={poster}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}

          >
            {typeof src === 'object' && src.webm && src.mp4 ? (
              <>
                <source src={src.webm} type="video/webm; codecs=vp9,opus" />
                <source src={src.mp4} type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
              </>
            ) : (
              <source src={getVideoSrc()} type={getVideoType()} />
            )}
            {alt && <track kind="descriptions" src="" label={alt} />}
          </motion.video>
        )}
      </AnimatePresence>

      {renderPlaceholder()}

      {/* Loading indicator */}
      {shouldLoad && !isLoaded && (
        <div className="video-loading">
          <div className="loading-spinner"></div>
        </div>
      )}


    </div>
  );
};

export default MobileOptimizedVideo; 