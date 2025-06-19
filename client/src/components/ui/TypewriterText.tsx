
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
}

export default function TypewriterText({ phrases, className = '' }: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the animation after a brief delay
    const startTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3600); // Start after all the initial text animations

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 80); // Typing speed
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
      }
    } else {
      // Erasing phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Erasing speed
      } else {
        // Move to next phrase
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentPhraseIndex, phrases, isVisible]);

  return (
    <span className={`text-maverick-orange relative inline-block ${className}`}>
      <span className="mr-2">
        {currentText}
        <motion.span
          className="inline-block w-0.5 h-6 xs:h-7 sm:h-8 md:h-10 lg:h-10 xl:h-12 2xl:h-16 bg-maverick-orange ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </span>
      <motion.span 
        className="absolute -bottom-1 left-0 h-1 bg-maverick-orange"
        initial={{ width: 0 }}
        animate={{ width: isVisible ? "100%" : 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
    </span>
  );
}
