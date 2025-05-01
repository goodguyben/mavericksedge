import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

interface TechButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  techTheme?: 'html' | 'css' | 'js';
}

export default function TechButton({
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  size = 'md',
  techTheme = 'html'
}: TechButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [rippleStyle, setRippleStyle] = useState<React.CSSProperties>({});
  const [rippleActive, setRippleActive] = useState(false);

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg'
  };

  // Theme classes based on tech choice
  const getThemeClasses = () => {
    switch (techTheme) {
      case 'html':
        return 'bg-[#E44D26] hover:bg-[#F16529] border-[#E44D26] hover:border-[#F16529] text-white';
      case 'css':
        return 'bg-[#264DE4] hover:bg-[#2965F1] border-[#264DE4] hover:border-[#2965F1] text-white';
      case 'js':
        return 'bg-[#F7DF1E] hover:bg-[#F7DF1E]/90 border-[#F7DF1E] hover:border-[#F7DF1E]/90 text-black';
      default:
        return 'bg-maverick-orange hover:bg-maverick-orange/90 border-maverick-orange hover:border-maverick-orange/90 text-white';
    }
  };
  
  // Base classes
  const baseClasses = `
    relative overflow-hidden font-medium rounded-lg transition-all duration-300
    border-2 flex items-center justify-center shadow-lg
    ${sizeClasses[size]} ${getThemeClasses()} ${className}
  `;

  // Create ripple effect on click
  const handleRippleEffect = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = event.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    const rippleX = event.clientX - rect.left - radius;
    const rippleY = event.clientY - rect.top - radius;
    
    setRippleStyle({
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${rippleX}px`,
      top: `${rippleY}px`
    });
    
    setRippleActive(true);
    
    setTimeout(() => {
      setRippleActive(false);
    }, 600);
  };

  // Define tech-specific additional elements
  const getTechElement = () => {
    if (techTheme === 'html') {
      return <span className="mr-2 font-mono text-xs opacity-70">&lt;/&gt;</span>;
    } else if (techTheme === 'css') {
      return <span className="mr-2 font-mono text-xs opacity-70">{ '{' } { '}' }</span>;
    } else if (techTheme === 'js') {
      return <span className="mr-2 font-mono text-xs opacity-70">JS</span>;
    }
    return null;
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!disabled) {
      handleRippleEffect(event);
      if (onClick) onClick();
    }
  };

  // Button content
  const buttonContent = (
    <>
      {/* Tech indicator */}
      {getTechElement()}
      
      {/* Button text */}
      <span>{children}</span>
      
      {/* Ripple effect */}
      {rippleActive && (
        <span 
          className={`absolute block rounded-full bg-white bg-opacity-30 animate-ripple`}
          style={rippleStyle}
        />
      )}
      
      {/* Code snippet highlight */}
      <span className={`absolute inset-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 ${hovered ? 'opacity-5' : ''}`}></span>
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <a 
          className={`${baseClasses} ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {buttonContent}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {buttonContent}
    </button>
  );
}