
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CyclingVideoPlayerProps {
  videos: string[];
  images?: string[];
  alt: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  cycleDuration?: number;
  videoDurations?: number[];
  zoomEffects?: ('zoom-out' | 'zoom-in' | 'none')[];
}

export default function CyclingVideoPlayer({
  videos,
  images = [],
  alt,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  cycleDuration = 8000,
  videoDurations = [],
  zoomEffects = []
}: CyclingVideoPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideo, setIsVideo] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const allMedia = [...videos, ...images];
  const totalMedia = allMedia.length;

  useEffect(() => {
    if (totalMedia <= 1) return;

    const getCurrentDuration = () => {
      if (currentIndex < videos.length && videoDurations[currentIndex]) {
        return videoDurations[currentIndex];
      }
      return cycleDuration;
    };

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % totalMedia;
        const nextIsVideo = nextIndex < videos.length;
        setIsVideo(nextIsVideo);
        return nextIndex;
      });
    }, getCurrentDuration());

    return () => clearInterval(interval);
  }, [totalMedia, videos.length, cycleDuration, videoDurations, currentIndex]);

  useEffect(() => {
    // Preload next video
    const nextIndex = (currentIndex + 1) % totalMedia;
    if (nextIndex < videos.length && videoRefs.current[nextIndex]) {
      videoRefs.current[nextIndex]?.load();
    }
  }, [currentIndex, totalMedia, videos.length]);

  if (totalMedia === 0) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence mode="wait">
        {allMedia.map((media, index) => {
          if (index !== currentIndex) return null;
          
          const isCurrentVideo = index < videos.length;
          
          const zoomEffect = zoomEffects[index] || 'none';
          const zoomClass = zoomEffect === 'zoom-out' ? 'scale-110' : zoomEffect === 'zoom-in' ? 'scale-75' : 'scale-100';
          
          return (
            <motion.div
              key={`${media}-${index}`}
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className={`w-full h-full ${zoomClass}`}
                initial={{ scale: zoomEffect === 'zoom-out' ? 1.1 : zoomEffect === 'zoom-in' ? 0.75 : 1 }}
                animate={{ scale: zoomEffect === 'zoom-out' ? 0.95 : zoomEffect === 'zoom-in' ? 1 : 1 }}
                transition={{ duration: zoomEffect !== 'none' ? 2.5 : 0, ease: "easeOut" }}
              >
                {isCurrentVideo ? (
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    className="w-full h-full object-contain"
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    playsInline
                    preload="metadata"
                  >
                    <source src={media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={media}
                    alt={alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      {/* Optional indicators */}
      {totalMedia > 1 && (
        <div className="absolute bottom-2 right-2 flex gap-1">
          {allMedia.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                index === currentIndex 
                  ? 'bg-maverick-orange' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
