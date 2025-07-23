import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoAnimationPlaceholder } from './LogoAnimationPlaceholder';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  logoVideoSrc?: string; // Path to logo animation video
  companyName?: string;
  loadingDuration?: number; // Duration in milliseconds
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
  logoVideoSrc = '/attached_assets/logo_animation.mp4', // Updated to use your MP4 file
  companyName = 'Mavericks Edge',
  loadingDuration = 4000 // 4 seconds default
}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout>();

  // Simulate loading progress
  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + loadingDuration;

    progressIntervalRef.current = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min((elapsed / loadingDuration) * 100, 100);
      
      setLoadingProgress(progress);

      if (progress >= 100) {
        clearInterval(progressIntervalRef.current);
        // Add a small delay before hiding the loading screen
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onLoadingComplete, 500); // Wait for fade out animation
        }, 200);
      }
    }, 50); // Update every 50ms for smooth progress

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [loadingDuration, onLoadingComplete]);

  // Handle video load
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Handle video error - fallback to static logo
  const handleVideoError = () => {
    console.warn('Logo animation video failed to load, using fallback');
    setIsVideoLoaded(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main content container */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4">
            
            {/* Logo Animation Video */}
            <motion.div
              className="relative w-96 h-96 sm:w-[30rem] sm:h-[30rem] md:w-[36rem] md:h-[36rem] lg:w-[42rem] lg:h-[42rem]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2 
              }}
            >
              {logoVideoSrc && (
                <video
                  ref={videoRef}
                  src={logoVideoSrc}
                  className="w-full h-full object-cover bg-black"
                  autoPlay
                  muted
                  playsInline
                  loop={false}
                  onLoadedData={handleVideoLoad}
                  onError={handleVideoError}
                  preload="auto"
                />
              )}
              
              {/* Fallback logo if video fails */}
              {!isVideoLoaded && (
                <LogoAnimationPlaceholder className="absolute inset-0" />
              )}
            </motion.div>

            {/* Company Name */}
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.6 
              }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {companyName}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light">
                Digital Growth Partner
              </p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2 
              }}
            >
              {/* Background bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                {/* Animated progress bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Loading percentage */}
              <motion.div
                className="text-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-sm sm:text-base text-gray-300 font-medium">
                  Loading... {Math.round(loadingProgress)}%
                </span>
              </motion.div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              className="flex space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-orange-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom corner accent */}
          <motion.div
            className="absolute bottom-4 right-4 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Edmonton, Alberta
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 