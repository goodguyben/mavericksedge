import React from 'react';
import { motion } from 'framer-motion';

interface LogoAnimationPlaceholderProps {
  className?: string;
}

export const LogoAnimationPlaceholder: React.FC<LogoAnimationPlaceholderProps> = ({ 
  className = "w-full h-full" 
}) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Animated logo container */}
        <motion.div
          className="w-full h-full bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-full flex items-center justify-center relative overflow-hidden"
          animate={{
            background: [
              "linear-gradient(135deg, #F97316, #EA580C, #F97316)",
              "linear-gradient(225deg, #F97316, #EA580C, #F97316)",
              "linear-gradient(135deg, #F97316, #EA580C, #F97316)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-4 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Logo text */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              animate={{
                textShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.5)",
                  "0 0 30px rgba(234, 88, 12, 0.7)",
                  "0 0 20px rgba(249, 115, 22, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ME
            </motion.div>
          </motion.div>
          
          {/* Rotating border effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${20 + (i * 10)}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}; 