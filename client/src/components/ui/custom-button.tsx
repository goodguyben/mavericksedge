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

  // Determine if this is an orange button that should have gradient text
  const isOrangeButton = variant === "primary" || buttonClasses.includes('maverick-orange') || buttonClasses.includes('bg-maverick-orange');
  const shouldUseGradient = useGradientText || isOrangeButton;

  const buttonContent = shouldUseGradient ? (
    <GradientText 
      colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
      animationSpeed={4}
    >
      {children}
    </GradientText>
  ) : children;

  // If href is provided, render a link with our CSS classes
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
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