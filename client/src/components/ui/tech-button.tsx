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
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 text-white touch-manipulation",
    "bg-gradient-to-r from-[#E04500] to-[#E57B00] hover:from-[#E57B00] hover:to-[#E04500]",
    "hover:scale-105 hover:shadow-lg hover:shadow-maverick-orange/30",
    "focus:outline-none focus:ring-2 focus:ring-maverick-orange focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
    // WCAG 2.1 AA touch target sizing for all devices
    "min-h-[44px] min-w-[44px] px-6 py-3",
    // Comprehensive tablet optimizations
    "ipad-portrait:min-h-[48px] ipad-portrait:px-8 ipad-portrait:py-4 ipad-portrait:text-lg",
    "ipad-landscape:min-h-[50px] ipad-landscape:px-10 ipad-landscape:py-4 ipad-landscape:text-lg",
    "galaxy-portrait:min-h-[48px] galaxy-portrait:px-7 galaxy-portrait:py-3.5 galaxy-portrait:text-base",
    "galaxy-landscape:min-h-[52px] galaxy-landscape:px-12 galaxy-landscape:py-5 galaxy-landscape:text-lg",
    "surface-compact:min-h-[46px] surface-compact:px-6 surface-compact:py-3 surface-compact:text-sm",
    "surface-pro:min-h-[50px] surface-pro:px-9 surface-pro:py-4 surface-pro:text-base",
    "tablet-all:min-h-[48px] tablet-all:px-8 tablet-all:py-4",
    // Enhanced tablet touch feedback
    "active:scale-95 active:shadow-inner tablet-all:active:scale-96", 
    // Better focus for tablet keyboard navigation
    "tablet-all:focus:ring-3 tablet-all:focus:ring-maverick-orange/60",
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