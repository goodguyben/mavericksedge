
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
  minDisplayTime?: number;
}

export default function LoadingScreen({ 
  isLoading, 
  onLoadingComplete, 
  minDisplayTime = 5000 
}: LoadingScreenProps) {
  const [shouldShow, setShouldShow] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Start minimum time countdown immediately
    const minTimeTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minDisplayTime);

    return () => clearTimeout(minTimeTimer);
  }, [minDisplayTime]);

  useEffect(() => {
    // Only hide loading screen if both conditions are met:
    // 1. Actual loading is complete
    // 2. Minimum display time has elapsed
    if (!isLoading && minTimeElapsed && videoLoaded) {
      setShouldShow(false);
      onLoadingComplete?.();
    }
  }, [isLoading, minTimeElapsed, videoLoaded, onLoadingComplete]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoEnd = () => {
    // Video ended but still loading or min time not elapsed - restart video
    if (isLoading || !minTimeElapsed) {
      const video = document.querySelector('video') as HTMLVideoElement;
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    }
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Animated background effects */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(255, 86, 48, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 86, 48, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(255, 86, 48, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Video container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center"
          >
            {/* Logo animation video */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop={isLoading || !minTimeElapsed} // Loop if still loading or min time not elapsed
                playsInline
                onLoadedData={handleVideoLoad}
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              >
                <source src="/videos/logo_animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Glow effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/20 via-transparent to-transparent rounded-full" />
            </div>

            {/* Loading text and progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-center"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
                Mavericks Edge
              </h1>
              
              {/* Dynamic progress bar based on minimum time */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: minDisplayTime / 1000, 
                  ease: "easeInOut",
                  repeat: (!minTimeElapsed || isLoading) ? Infinity : 0,
                  repeatType: "restart"
                }}
                className="w-64 h-1 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ 
                    duration: minDisplayTime / 1000, 
                    ease: "easeInOut",
                    repeat: (!minTimeElapsed || isLoading) ? Infinity : 0,
                    repeatType: "restart"
                  }}
                  className="h-full bg-gradient-to-r from-maverick-orange to-orange-600 rounded-full"
                />
              </motion.div>

              {/* Status text */}
              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-sm text-gray-400"
              >
                {!minTimeElapsed ? "Loading Experience..." : isLoading ? "Finalizing..." : "Ready!"}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-maverick-orange rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 10,
                  opacity: 0
                }}
                animate={{
                  y: -10,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
