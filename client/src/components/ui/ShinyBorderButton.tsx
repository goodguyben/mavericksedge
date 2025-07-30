"use client";

import React, { useRef, useEffect, ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ShinyBorderButtonProps {
  children: ReactNode;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function ShinyBorderButton({
  children,
  lightWidth = 110,
  duration = 3,
  lightColor = "#FAFAFA",
  backgroundColor = "currentColor",
  borderWidth = 2,
  className,
  href,
  onClick,
  ...props
}: ShinyBorderButtonProps) {
  const pathRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const div = pathRef.current;
      div.style.setProperty(
        "--path",
        `path('M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0')`,
      );
    }
  }, []);

  const buttonContent = (
    <button
      style={
        {
          "--duration": duration,
          "--light-width": `${lightWidth}px`,
          "--light-color": lightColor,
          "--border-width": `${borderWidth}px`,
          isolation: "isolate",
        } as CSSProperties
      }
      ref={pathRef}
      className={cn(
        "relative z-[3] overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 group/shiny-button",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      <div
        className="absolute aspect-square inset-0 animate-shiny-btn"
        style={
          {
            offsetPath: "var(--path)",
            offsetDistance: "0%",
            width: "var(--light-width)",
            background: `radial-gradient(ellipse at center, ${lightColor}80, transparent, transparent)`,
          } as CSSProperties
        }
      />
      <div
        className="absolute inset-0 border-white/20 z-[4] overflow-hidden rounded-[inherit] text-white"
        style={{ borderWidth: "var(--border-width)" }}
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <span className="z-10 relative text-white">
        {children}
      </span>
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
} 