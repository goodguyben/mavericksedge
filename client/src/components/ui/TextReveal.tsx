
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface TextRevealProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
  intensity?: 'light' | 'medium' | 'strong';
}

export default function TextReveal({ 
  children, 
  as: Component = 'div',
  className = '',
  delay = 0,
  intensity = 'medium'
}: TextRevealProps) {
  const intensitySettings = {
    light: {
      baseOpacity: 0.2,
      enableBlur: true,
      baseRotation: 2,
      blurStrength: 5
    },
    medium: {
      baseOpacity: 0,
      enableBlur: true,
      baseRotation: 5,
      blurStrength: 10
    },
    strong: {
      baseOpacity: 0,
      enableBlur: true,
      baseRotation: 8,
      blurStrength: 15
    }
  };

  const settings = intensitySettings[intensity];

  return (
    <ScrollReveal 
      baseOpacity={settings.baseOpacity}
      enableBlur={settings.enableBlur}
      baseRotation={settings.baseRotation}
      blurStrength={settings.blurStrength}
      delay={delay}
    >
      <Component className={className}>
        {children}
      </Component>
    </ScrollReveal>
  );
}
