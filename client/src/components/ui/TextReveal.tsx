
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface TextRevealProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'small';
  delay?: number;
  className?: string;
}

export default function TextReveal({
  children,
  variant = 'body',
  delay = 0,
  className = ''
}: TextRevealProps) {
  const getVariantSettings = () => {
    switch (variant) {
      case 'heading':
        return {
          baseRotation: 8,
          blurStrength: 12,
          duration: 1.0
        };
      case 'subheading':
        return {
          baseRotation: 5,
          blurStrength: 10,
          duration: 0.9
        };
      case 'body':
        return {
          baseRotation: 3,
          blurStrength: 8,
          duration: 0.8
        };
      case 'small':
        return {
          baseRotation: 2,
          blurStrength: 6,
          duration: 0.7
        };
      default:
        return {
          baseRotation: 3,
          blurStrength: 8,
          duration: 0.8
        };
    }
  };

  const settings = getVariantSettings();

  return (
    <ScrollReveal
      baseOpacity={0}
      enableBlur={true}
      baseRotation={settings.baseRotation}
      blurStrength={settings.blurStrength}
      delay={delay}
      duration={settings.duration}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
}
