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
  logoVideoSrc = 'https://mavericksedge.ca/videos/logo_animation.webm',
  companyName = 'Mavericks Edge',
  loadingDuration = 1000 // Changed from 4000 to 1000ms (1 second)
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

  // Simulate loading progress - one second duration for all devices
  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // Fixed to 1 second for all devices
    const endTime = startTime + duration;

    progressIntervalRef.current = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      
      setLoadingProgress(progress);

      if (progress >= 100) {
        clearInterval(progressIntervalRef.current);
        // Add a small delay before hiding the loading screen
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onLoadingComplete, 300); // Reduced from 500ms to 300ms for faster transition
        }, 100); // Reduced from 200ms to 100ms
      }
    }, 16); // Update every 16ms for 60fps smooth progress

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [onLoadingComplete]);

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
            transition: { duration: 0.3, ease: "easeInOut" } // Reduced from 0.5s to 0.3s
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
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4 transform -translate-y-8">
            
            {/* Logo Animation Video - optimized for mobile */}
            <motion.div
              className={`relative bg-black ${
                isMobile 
                  ? 'w-64 h-64 sm:w-80 sm:h-80' 
                  : 'w-96 h-96 sm:w-[22.5rem] sm:h-[22.5rem] md:w-[27rem] md:h-[27rem] lg:w-[31.5rem] lg:h-[31.5rem]'
              }`}
              style={{ backgroundColor: 'black' }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, // Reduced from 0.8s to 0.5s
                ease: "easeOut",
                delay: 0.1 // Reduced from 0.2s to 0.1s
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
                duration: 0.5, // Reduced from 0.8s to 0.5s
                ease: "easeOut",
                delay: 0.3 // Reduced from 0.6s to 0.3s
              }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-maverick-orange mb-2">
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
                duration: 0.5, // Reduced from 0.8s to 0.5s
                ease: "easeOut",
                delay: 0.1 // Reduced from 0.2s to 0.1s
              }}
            >
              {/* Background bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                {/* Animated progress bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }} // Reduced from 0.2s to 0.1s
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1, // Reduced from 2s to 1s
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
                transition={{ delay: 0.2 }} // Reduced from 0.4s to 0.2s
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
              transition={{ delay: 0.3 }} // Reduced from 0.6s to 0.3s
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
                    duration: 1, // Reduced from 1.5s to 1s
                    repeat: Infinity,
                    delay: i * 0.15, // Reduced from 0.2s to 0.15s
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
            transition={{ delay: 0.4 }} // Reduced from 0.8s to 0.4s
          >
            Edmonton, Alberta
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 