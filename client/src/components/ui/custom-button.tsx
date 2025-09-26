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
    // Responsive sizing classes
    'xxs:px-2 xxs:py-1 xxs:text-xs xxs-plus:px-4 xxs-plus:py-2 xxs-plus:text-sm xs:px-4 xs:py-2 xs:text-sm xs-plus:px-5 xs-plus:py-3 xs-plus:text-base sm:px-5 sm:py-3 sm:text-base sm-plus:px-6 sm-plus:py-3 sm-plus:text-base phone:px-6 phone:py-4 phone:text-base md:px-8 md:py-4 md:text-lg lg:px-8 lg:py-4 lg:text-lg tab:px-10 tab:py-4 tab:text-lg galaxy-tab:px-8 galaxy-tab:py-4 galaxy-tab:text-lg tab-large:px-10 tab-large:py-4 tab-large:text-lg xl:px-10 xl:py-4 xl:text-lg 2xl:px-12 2xl:py-5 2xl:text-xl',
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