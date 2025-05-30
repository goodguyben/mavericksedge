import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface TechButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  asButton?: boolean; // Force rendering as button even with href
}

export default function TechButton({
  children,
  href,
  variant = "default",
  size = "default",
  className,
  onClick,
  disabled = false,
  asButton = false,
}: TechButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-white touch-manipulation",
    "bg-gradient-to-r from-[#E04500] to-[#E57B00] hover:from-[#E57B00] hover:to-[#E04500]",
    "hover:scale-105 hover:shadow-lg hover:shadow-maverick-orange/30",
    "focus:outline-none focus:ring-2 focus:ring-maverick-orange focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
    "min-h-[44px] min-w-[44px]", // WCAG 2.1 AA touch target size
    "tablet:min-h-[48px] tablet:px-8 tablet:py-4", // Enhanced tablet sizing
    "active:scale-95 active:shadow-inner", // Tablet touch feedback
    className
  );

  // If asButton is true or disabled, always render as button
  if (asButton || disabled || !href) {
    const handleClick = () => {
      if (href && !disabled) {
        window.location.href = href;
      }
      if (onClick) {
        onClick();
      }
    };

    return (
      <button
        className={baseClasses}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  // Otherwise render as Link
  return (
    <Link href={href}>
      <span className={baseClasses}>
        {children}
      </span>
    </Link>
  );
}