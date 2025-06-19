
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
  };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
  stagger?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete,
  stagger = 0.02
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    threshold, 
    margin: rootMargin,
    once: true 
  });
  const [animationComplete, setAnimationComplete] = useState(false);

  const splitText = () => {
    switch (splitType) {
      case 'words':
        return text.split(' ').map((word, index) => ({ content: word, index, isSpace: false }))
          .reduce((acc, word, index) => {
            acc.push(word);
            if (index < text.split(' ').length - 1) {
              acc.push({ content: ' ', index: index + 0.5, isSpace: true });
            }
            return acc;
          }, [] as { content: string; index: number; isSpace: boolean }[]);
      case 'lines':
        return text.split('\n').map((line, index) => ({ content: line, index, isSpace: false }));
      case 'chars':
      default:
        return text.split('').map((char, index) => ({ content: char, index, isSpace: char === ' ' }));
    }
  };

  const textElements = splitText();

  useEffect(() => {
    if (isInView && !animationComplete) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
        onLetterAnimationComplete?.();
      }, delay + (textElements.length * stagger * 1000) + (duration * 1000));

      return () => clearTimeout(timer);
    }
  }, [isInView, animationComplete, delay, duration, stagger, textElements.length, onLetterAnimationComplete]);

  const getEaseFunction = (easeString: string) => {
    switch (easeString) {
      case 'power3.out':
        return [0.215, 0.610, 0.355, 1.000];
      case 'power2.out':
        return [0.165, 0.840, 0.440, 1.000];
      case 'power4.out':
        return [0.190, 1.000, 0.220, 1.000];
      case 'back.out':
        return [0.175, 0.885, 0.320, 1.275];
      case 'elastic.out':
        return [0.190, 1.000, 0.220, 1.000];
      default:
        return [0.215, 0.610, 0.355, 1.000];
    }
  };

  return (
    <div 
      ref={ref} 
      className={`inline-block ${className}`}
      style={{ textAlign, whiteSpace: 'nowrap' }}
    >
      {textElements.map((element, index) => (
        <motion.span
          key={index}
          className={`inline-block ${element.isSpace ? '' : 'transform-gpu'}`}
          initial={from}
          animate={isInView ? to : from}
          transition={{
            duration,
            delay: delay / 1000 + index * stagger,
            ease: getEaseFunction(ease),
          }}
          style={{
            display: element.content === ' ' ? 'inline' : 'inline-block',
            whiteSpace: element.content === ' ' ? 'pre' : 'normal',
          }}
        >
          {element.content === '\n' ? <br /> : element.content}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;
