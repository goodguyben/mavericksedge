import React from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

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
  // Determine if this is a link-style button
  const isLinkStyle = variant === "link";
  
  // Base styles - different for regular buttons vs link-style buttons
  const baseStyles = isLinkStyle 
    ? "inline-flex items-center justify-center font-medium text-center transition-colors duration-200 cursor-pointer" 
    : "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-center transition-colors duration-200 cursor-pointer";
  
  // Variant-specific styles
  const variantStyles = {
    primary: "bg-maverick-orange text-white hover:bg-maverick-orange/90 shadow-lg shadow-maverick-orange/20",
    secondary: "bg-maverick-slate border border-maverick-slate text-maverick-cream hover:bg-maverick-slate/90 shadow-md",
    outline: "bg-transparent border border-maverick-orange text-maverick-orange hover:bg-maverick-orange/10",
    ghost: "bg-transparent text-maverick-orange hover:bg-maverick-orange/10 hover:text-maverick-orange",
    link: "bg-transparent text-maverick-orange hover:underline p-0 shadow-none"
  };
  
  // Disabled styles
  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";
  
  // Combine classes
  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    disabled && disabledStyles,
    className
  );
  
  // If href is provided, render a Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render a button
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