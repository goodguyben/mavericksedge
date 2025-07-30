import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SimpleCardSwapProps {
  width?: number | string;
  height?: number | string;
  delay?: number;
  children: React.ReactNode[];
}

export interface CardProps {
  title?: string;
  description?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ title, description, style }) => {
  const getCardVideo = (title: string) => {
    const videoMap: { [key: string]: string } = {
      "Mobile Responsive": "/attached_assets/1.webm",
      "Human-Centered Design": "/attached_assets/2.webm",
      "Google Ranked": "/attached_assets/3.webm",
      "Affordable": "/attached_assets/4.webm"
    };
    return videoMap[title || ""] || "/attached_assets/1.webm";
  };

  return (
    <div
      className="absolute inset-0 rounded-xl border border-white bg-black text-white flex flex-col overflow-hidden"
      style={style}
    >
      {/* Title section with macOS controls */}
      <div className="bg-black p-3 flex items-center justify-start space-x-2">
        {/* macOS Window Controls */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {title && (
          <div className="flex items-center space-x-2 ml-[12px] mr-[12px] pl-[10px] pr-[10px]">
            <span className="font-medium text-white text-[18px]">{title}</span>
          </div>
        )}
      </div>
      {/* White divider line */}
      <div className="border-t border-white"></div>
      {/* Content area with video */}
      <div className="flex-1 bg-black overflow-hidden">
        {title && (
          <video 
            src={getCardVideo(title)}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
          />
        )}
      </div>
    </div>
  );
};

const SimpleCardSwap: React.FC<SimpleCardSwapProps> = ({
  width = 600,
  height = 400,
  delay = 5000,
  children
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number>();

  useEffect(() => {
    // Start rotation after initial delay
    const startTimeout = setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % children.length);
      }, delay);
    }, 5000); // Wait for Framer Motion animation

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [children.length, delay]);

  const cardVariants = {
    enter: (index: number) => ({
      x: index * 60,
      y: -index * 70,
      z: -index * 90,
      zIndex: children.length - index,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }),
    center: {
      x: 0,
      y: 0,
      z: 0,
      zIndex: children.length,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      y: 500,
      transition: {
        duration: 1.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <div
      className="relative perspective-[900px]"
      style={{ width, height }}
    >
      <AnimatePresence mode="sync">
        {children.map((child, index) => {
          const position = (index - currentIndex + children.length) % children.length;
          const isVisible = position < 4; // Show only top 4 cards
          
          if (!isVisible) return null;

          return (
            <motion.div
              key={index}
              className="absolute inset-0"
              custom={position}
              variants={cardVariants}
              initial="enter"
              animate="enter"
              exit={position === 0 ? "exit" : undefined}
              style={{
                transformStyle: "preserve-3d",
                transform: `
                  translateX(${position * 60}px) 
                  translateY(${-position * 70}px) 
                  translateZ(${-position * 90}px)
                  skewY(48deg)
                `,
                zIndex: children.length - position
              }}
            >
              {React.isValidElement(child) && 
                React.cloneElement(child as React.ReactElement<CardProps>, {
                  style: { width: "100%", height: "100%" }
                })
              }
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default SimpleCardSwap;