
import { ReactNode } from "react";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollFadeSectionProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  fadeSpeed?: number;
  fadeOffset?: number;
  fadeOutOnly?: boolean;
  id?: string;
}

export function ScrollFadeSection({
  children,
  className,
  as: Component = "section",
  fadeSpeed = 0.8,
  fadeOffset = 0.3,
  fadeOutOnly = false,
  id
}: ScrollFadeSectionProps) {
  const { opacity, sectionRef } = useScrollFade({
    fadeSpeed,
    fadeOffset,
    fadeOutOnly
  });

  return (
    <Component
      ref={sectionRef}
      id={id}
      className={cn("relative", className)}
    >
      <motion.div
        style={{ opacity }}
        className="w-full h-full"
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
