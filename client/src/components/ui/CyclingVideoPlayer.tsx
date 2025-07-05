import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoErrorBoundary } from "./VideoErrorBoundary";

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
    // Preload all videos for better cycling experience
    videos.forEach((_, index) => {
      if (videoRefs.current[index]) {
        videoRefs.current[index]?.load();
      }
    });
  }, [videos]);

  useEffect(() => {
    // Ensure current video plays when it becomes active
    if (isVideo && currentIndex < videos.length && videoRefs.current[currentIndex]) {
      const currentVideo = videoRefs.current[currentIndex];
      if (currentVideo && autoPlay) {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(console.warn);
      }
    }
  }, [currentIndex, isVideo, autoPlay, videos.length]);

  if (totalMedia === 0) return null;

  const getOptimizedPath = (media: string, isVideo: boolean) => {
    const base = media.substring(0, media.lastIndexOf('.'));
    const ext = media.substring(media.lastIndexOf('.') + 1);

    if (isVideo) {
      return {
        webm: `${base}.webm`,
        mp4: `${base}.mp4`,
        fallback: media,
      };
    } else {
      return {
        webp: `${base}.webp`,
        fallback: media,
      };
    }
  };

  const getZoomClass = (index: number) => {
    const zoomEffect = zoomEffects[index] || 'none';
    return zoomEffect === 'zoom-out' ? 'scale-110' : zoomEffect === 'zoom-in' ? 'scale-75' : 'scale-100';
  };

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
                <VideoErrorBoundary>
                {isCurrentVideo ? (
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    className="w-full h-full object-cover"
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    playsInline
                    preload="metadata"
                    onLoadedData={() => {
                      // Ensure video starts playing when loaded and active
                      if (index === currentIndex && autoPlay && videoRefs.current[index]) {
                        const video = videoRefs.current[index];
                        if (video) {
                          video.currentTime = 0;
                          video.play().catch((error) => {
                            console.warn(`Failed to play video: ${media}`, error);
                          });
                        }
                      }
                    }}
                    onError={(e) => {
                      console.error(`Video failed to load: ${media}`, e);
                      // Hide failed video and show next one
                      const video = e.currentTarget;
                      video.style.display = 'none';
                    }}
                    onCanPlayThrough={() => {
                      console.log(`Video ready to play: ${media}`);
                    }}
                  >
                    <source src={media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={media}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                </VideoErrorBoundary>
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