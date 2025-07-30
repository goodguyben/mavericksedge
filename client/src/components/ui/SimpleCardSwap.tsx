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
      x: i * 40,
      y: -i * 50,
      z: -i * 60,
      zIndex: children.length - i
    }));
  }, [children.length]);

  useEffect(() => {
    // Start rotation after initial delay
    const startTimeout = setTimeout(() => {
      const performSwap = () => {
        setIsSwapping(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % children.length);
          setIsSwapping(false);
        }, 300);
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
      className="relative overflow-visible"
      style={{ 
        width, 
        height,
        perspective: "900px"
      }}
    >
      {children
        .map((child, index) => {
          const position = (index - currentIndex + children.length) % children.length;
          const isVisible = position < 4; // Show only top 4 cards
          
          if (!isVisible) return null;

          const isDropping = isSwapping && position === 0;
          const pos = cardPositions[position];

          // Reorder cards when dropping - dropping card should be rendered first (bottom)
          const renderOrder = isDropping ? -1 : pos.zIndex;

          return {
            child,
            index,
            position,
            isDropping,
            pos,
            renderOrder
          };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null)
        .sort((a, b) => {
          // Sort so dropping card comes first (rendered at bottom)
          if (a.isDropping && !b.isDropping) return -1;
          if (!a.isDropping && b.isDropping) return 1;
          return b.renderOrder - a.renderOrder; // Higher z-index rendered later
        })
        .map(({ child, index, position, isDropping, pos, renderOrder }) => (
          <motion.div
            key={index}
            className="absolute"
            initial={false}
            animate={{
              x: isDropping ? pos.x - 60 : pos.x,
              y: isDropping ? pos.y + 400 : pos.y,
              z: isDropping ? pos.z - 500 : pos.z,
              skewY: 6,
              opacity: isDropping ? 0 : 1
            }}
            transition={{
              duration: isDropping ? 1.5 : 0.8,
              ease: isDropping ? [0.4, 0, 1, 1] : [0.25, 0.1, 0.25, 1],
              opacity: {
                duration: isDropping ? 0.8 : 0.8,
                delay: isDropping ? 0.3 : 0
              }
            }}
            style={{
              width: "100%",
              height: "100%",
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              transformStyle: "preserve-3d",
              zIndex: renderOrder
            }}
          >
            {React.isValidElement(child) && 
              React.cloneElement(child as React.ReactElement<CardProps>, {
                style: { width: "100%", height: "100%" }
              })
            }
          </motion.div>
        ))}
    </div>
  );
};

export default SimpleCardSwap;