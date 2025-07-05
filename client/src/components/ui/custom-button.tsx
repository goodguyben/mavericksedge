import React from "react";
import GradientText from "./GradientText";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  useGradientText?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
  useGradientText = false,
}: ButtonProps) {
  // Build the class names based on the variant
  const buttonClasses = [
    'maverick-button',
    `maverick-button-${variant}`,
    disabled ? 'maverick-button-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Only use gradient text when explicitly requested
  const shouldUseGradient = useGradientText;

  const buttonContent = shouldUseGradient ? (
    <GradientText 
      colors={["#E65F34", "#FF5630", "#FF8A50", "#E65F34"]}
      animationSpeed={4}
    >
      {children}
    </GradientText>
  ) : children;

  // If href is provided, render a link with our CSS classes
  if (href) {
    return (
      <a href={href} className="maverick-button maverick-button-primary ml-[16px] mr-[16px]">
        {buttonContent}
      </a>
    );
  }

  // Otherwise render a button with our CSS classes
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
}