import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
}

interface CardSwapProps {
  children: ReactNode[];
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  className = ''
}: CardSwapProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cards = React.Children.toArray(children);

  useEffect(() => {
    if (isPaused && pauseOnHover) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, delay);

    return () => clearInterval(interval);
  }, [cards.length, delay, isPaused, pauseOnHover]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div 
      className={`relative w-full h-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        {cards.map((card, index) => {
          const isActive = index === currentIndex;
          const isPrevious = index === (currentIndex - 1 + cards.length) % cards.length;
          const isNext = index === (currentIndex + 1) % cards.length;

          if (!isActive && !isPrevious && !isNext) return null;

          let zIndex = 1;
          let x = 0;
          let y = 0;
          let opacity = 0.3;
          let scale = 0.9;

          if (isActive) {
            zIndex = 3;
            opacity = 1;
            scale = 1;
          } else if (isPrevious) {
            zIndex = 2;
            x = -cardDistance;
            y = -verticalDistance;
            opacity = 0.6;
            scale = 0.95;
          } else if (isNext) {
            zIndex = 1;
            x = cardDistance;
            y = verticalDistance;
            opacity = 0.4;
            scale = 0.9;
          }

          return (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                x, 
                y, 
                opacity, 
                scale,
                zIndex 
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              style={{ zIndex }}
            >
              {card}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}