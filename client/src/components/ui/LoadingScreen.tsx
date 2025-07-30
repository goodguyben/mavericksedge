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
  logoVideoSrc = '/attached_assets/logo_animation.mp4',
  companyName = 'Mavericks Edge',
  loadingDuration = 4000
}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout>();

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

  // Simulate loading progress - faster on mobile
  useEffect(() => {
    const startTime = Date.now();
    const mobileDuration = isMobile ? Math.min(loadingDuration, 2000) : loadingDuration; // Max 2s on mobile
    const endTime = startTime + mobileDuration;

    progressIntervalRef.current = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min((elapsed / mobileDuration) * 100, 100);
      
      setLoadingProgress(progress);

      if (progress >= 100) {
        clearInterval(progressIntervalRef.current);
        // Add a small delay before hiding the loading screen
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onLoadingComplete, 500); // Wait for fade out animation
        }, 200);
      }
    }, 16); // Update every 16ms for 60fps smooth progress

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [loadingDuration, onLoadingComplete, isMobile]);

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
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          style={{ backgroundColor: 'black' }}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          {/* Animated background particles - reduced on mobile */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(isMobile ? 8 : 20)].map((_, i) => (
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
                  duration: isMobile ? 2 + Math.random() : 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main content container */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4">
            
            {/* Logo Animation Video - optimized for mobile */}
            <motion.div
              className={`relative bg-black ${
                isMobile 
                  ? 'w-64 h-64 sm:w-80 sm:h-80' 
                  : 'w-96 h-96 sm:w-[30rem] sm:h-[30rem] md:w-[36rem] md:h-[36rem] lg:w-[42rem] lg:h-[42rem]'
              }`}
              style={{ backgroundColor: 'black' }}
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
                  style={{ 
                    backgroundColor: 'black',
                    background: 'black'
                  }}
                />
              )}
              
              {/* Fallback logo if video fails */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 bg-black flex items-center justify-center" style={{ backgroundColor: 'black' }}>
                  <LogoAnimationPlaceholder className="w-full h-full" />
                </div>
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
                  transition={{ duration: 0.2, ease: "easeOut" }}
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
              
              {/* Loading text */}
              <motion.div
                className="text-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-sm sm:text-base text-gray-300 font-medium">
                  Loading...
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