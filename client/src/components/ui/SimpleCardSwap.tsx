import React, { useState, useEffect, useRef, useMemo } from "react";
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
  const [isSwapping, setIsSwapping] = useState(false);

  // Pre-calculate positions for performance
  const cardPositions = useMemo(() => {
    return Array.from({ length: children.length }, (_, i) => ({
      x: i * 60,
      y: -i * 50, // Reduced from 70 to make tops more visible
      z: -i * 90,
      zIndex: children.length - i
    }));
  }, [children.length]);

  useEffect(() => {
    // Start rotation after initial delay
    const startTimeout = setTimeout(() => {
      const performSwap = () => {
        setIsSwapping(true);
        // Wait for the z-index to change before moving to next card
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % children.length);
        }, 100);
        // Reset swapping state after animation completes
        setTimeout(() => {
          setIsSwapping(false);
        }, 1600);
      };

      performSwap(); // Initial swap
      intervalRef.current = window.setInterval(performSwap, delay);
    }, 5000); // Wait for Framer Motion animation

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [children.length, delay]);

  return (
    <div
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right"
      style={{ 
        width, 
        height,
        perspective: "900px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Render all cards, sorted by position to ensure proper layering */}
      {children.map((child, index) => {
        const position = (index - currentIndex + children.length) % children.length;
        return { child, index, position };
      })
      .filter(({ position }) => position < 4) // Show only top 4 cards
      .sort((a, b) => b.position - a.position) // Sort by position (back to front)
      .map(({ child, index, position }) => {
        const isDropping = isSwapping && position === 0;
        const pos = cardPositions[position];
        
        // Simple z-index: higher position = higher z-index, except when dropping
        const currentZIndex = isDropping ? 0 : (children.length - position);

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={false}
            animate={{
              x: pos.x,
              y: isDropping ? pos.y + 500 : pos.y,
              z: isDropping ? pos.z - 200 : pos.z, // Push dropping card further back
              skewY: 6,
              opacity: isDropping ? 0.9 : 1,
              rotateX: isDropping ? 10 : 0 // Slight rotation to enhance depth
            }}
            transition={{
              duration: isDropping ? 1.5 : 0.8,
              ease: isDropping ? [0.4, 0, 1, 1] : [0.25, 0.1, 0.25, 1],
              z: { duration: 0.1 }, // Instant z-index change
              rotateX: { duration: 0.3 }
            }}
            style={{
              width: "100%",
              height: "100%",
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              transformStyle: "preserve-3d",
              zIndex: currentZIndex,
              backfaceVisibility: "hidden"
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
    </div>
  );
};

export default SimpleCardSwap;