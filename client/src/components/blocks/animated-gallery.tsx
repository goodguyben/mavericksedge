"use client" 

import * as React from "react"

import {
  HTMLMotionProps,
  MotionValue,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

import { cn } from "@/lib/utils"

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}

const SPRING_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
  duration: 0.3,
}
const blurVariants: Variants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
  },
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined)
function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}
export const ContainerScroll = ({
  children,
  className,
  style,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  })
  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-[120vh]", className)}
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center top",
          transformStyle: "preserve-3d",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}
ContainerScroll.displayName = "ContainerScroll"
export const ContainerSticky = ({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "sticky left-0 top-0 min-h-[30rem] w-full overflow-hidden",
        className
      )}
      style={{
        perspective: "1000px",
        perspectiveOrigin: "center top",
        transformStyle: "preserve-3d",
        transformOrigin: "50% 50%",
        ...style,
      }}
      {...props}
    />
  )
}
ContainerSticky.displayName = "ContainerSticky"

export const GalleryContainer = ({
  children,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">) => {
  const { scrollYProgress } = useContainerScrollContext()
  // More dynamic rotation with larger angle range
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [85, 60, 30, 10, 0], {
    clamp: true
  })
  // More dramatic scale change with zoom out effect
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.9], [1.4, 1.2, 1.05, 0.95], {
    clamp: true
  })
  // Dynamic opacity with fade in/out
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0.6, 1, 1, 0.9], {
    clamp: true
  })
  // Add subtle Y translation for more depth
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50], {
    clamp: true
  })

  return (
    <motion.div
      className={cn(
        "relative grid size-full grid-cols-3 gap-2 rounded-2xl",
        className
      )}
      style={{
        rotateX,
        scale,
        opacity,
        y,
        transformStyle: "preserve-3d",
        perspective: "1200px",
        willChange: "transform",
        ...style,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 1.2
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
GalleryContainer.displayName = "GalleryContainer"

export const GalleryCol = ({
  className,
  style,
  yRange = ["0%", "-10%"],
  ...props
}: HTMLMotionProps<"div"> & { yRange?: string[] }) => {
  const { scrollYProgress } = useContainerScrollContext()
  // More dynamic parallax with extended range and multiple control points
  const y = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [yRange[0], `${parseInt(yRange[0]) * 0.8}%`, `${parseInt(yRange[0]) * 0.4}%`, `${parseInt(yRange[1]) * 0.3}%`, `${parseInt(yRange[1]) * 0.7}%`, yRange[1]],
    { clamp: true }
  )
  // Add subtle rotation for more dynamic feel
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, -1], {
    clamp: true
  })
  // Add scale variation for depth
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.02, 0.98, 1.01], {
    clamp: true
  })

  return (
    <motion.div
      className={cn("relative flex w-full flex-col gap-2 ", className)}
      style={{
        y,
        rotateZ,
        scale,
        willChange: "transform",
        transformOrigin: "center",
        ...style,
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 25,
        mass: 1.1
      }}
      {...props}
    />
  )
}
GalleryCol.displayName = "GalleryCol"

export const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, viewport, transition, ...props }, ref) => {
  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true || viewport?.once, ...viewport }}
      transition={{
        staggerChildren: transition?.staggerChildren || 0.2,
        ...transition,
      }}
      {...props}
    />
  )
})
ContainerStagger.displayName = "ContainerStagger"

export const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={blurVariants}
      transition={SPRING_CONFIG || transition}
      {...props}
    />
  )
})
ContainerAnimated.displayName = "ContainerAnimated"