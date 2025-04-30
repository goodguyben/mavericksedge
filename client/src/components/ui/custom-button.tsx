import React from "react";
import { Link } from "wouter";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  // Build the class names based on the variant
  const buttonClasses = [
    'maverick-button',
    `maverick-button-${variant}`,
    disabled ? 'maverick-button-disabled' : '',
    className
  ].filter(Boolean).join(' ');
  
  // If href is provided, render a Link with our CSS classes
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
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
      {children}
    </button>
  );
}