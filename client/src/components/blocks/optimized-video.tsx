"use client"

import * as React from "react"
import { useInView } from "framer-motion"

interface OptimizedVideoProps {
  src: string
  className?: string
  threshold?: number
  rootMargin?: string
  preload?: "none" | "metadata" | "auto"
  priority?: boolean
}

export const OptimizedVideo = React.forwardRef<
  HTMLVideoElement,
  OptimizedVideoProps
>(
  (
    {
      src,
      className,
      threshold = 0.1,
      rootMargin = "50px",
      preload = "metadata",
      priority = false,
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)
    const isInView = useInView(containerRef, {
      once: false,
      margin: "50px",
      amount: threshold,
    })

    // Combine refs
    React.useImperativeHandle(ref, () => videoRef.current!)

    // Load video when in view or if priority
    React.useEffect(() => {
      if (!videoRef.current) return

      if (priority || isInView) {
        if (!isLoaded) {
          videoRef.current.load()
          setIsLoaded(true)
        }
      }
    }, [isInView, priority, isLoaded])

    // Play/pause based on viewport visibility
    React.useEffect(() => {
      if (!videoRef.current || !isLoaded) return

      const video = videoRef.current

      const handlePlay = async () => {
        try {
          if (isInView && video.paused) {
            await video.play()
          } else if (!isInView && !video.paused) {
            video.pause()
          }
        } catch (error) {
          console.warn("Video play/pause error:", error)
        }
      }

      handlePlay()

      return () => {
        if (!video.paused) {
          video.pause()
        }
      }
    }, [isInView, isLoaded])

    // Cleanup on unmount
    React.useEffect(() => {
      return () => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.src = ""
          videoRef.current.load()
        }
      }
    }, [])

    return (
      <div ref={containerRef} className={className}>
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-900">
            <span className="text-sm text-gray-400">Video unavailable</span>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload={preload}
            onCanPlay={() => {
              console.log(`Video ready: ${src}`)
            }}
            onError={(e) => {
              console.warn(`Failed to load video: ${src}`, e)
              setHasError(true)
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </div>
    )
  }
)

OptimizedVideo.displayName = "OptimizedVideo"

// Wrapper component for the entire gallery with performance optimizations
interface VideoGalleryWrapperProps {
  children: React.ReactNode
  maxConcurrentVideos?: number
  className?: string
}

export const VideoGalleryWrapper: React.FC<VideoGalleryWrapperProps> = ({
  children,
  maxConcurrentVideos = 6,
  className,
}) => {
  const [isLowPowerMode, setIsLowPowerMode] = React.useState(false)

  React.useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsLowPowerMode(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLowPowerMode(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Reduce video quality on mobile or low-end devices
  React.useEffect(() => {
    const checkDeviceCapabilities = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      const isLowEndDevice = navigator.hardwareConcurrency <= 4
      
      if (isMobile || isLowEndDevice || isLowPowerMode) {
        // Add class to reduce video quality
        document.documentElement.classList.add("reduce-video-quality")
      }
    }

    checkDeviceCapabilities()
  }, [isLowPowerMode])

  return (
    <div 
      className={className}
      data-max-videos={maxConcurrentVideos}
      data-low-power={isLowPowerMode}
    >
      {children}
    </div>
  )
} 