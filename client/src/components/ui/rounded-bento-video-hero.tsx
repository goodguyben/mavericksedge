import React, { useRef, useState, useEffect } from 'react';

export function RoundedBentoVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const playCountRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play when at least 50% of the card is visible
          if (entry.intersectionRatio >= 0.5) {
            video.play().catch(() => {
              // Auto-play might be blocked, that's okay
            });
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
      }
    );

    observer.observe(container);

    const handleVideoEnd = () => {
      playCountRef.current += 1;
      
      // Play twice before showing replay button
      if (playCountRef.current < 2) {
        // Restart video for second play
        video.currentTime = 0;
        video.play().catch(() => {
          // Auto-play might be blocked, that's okay
        });
      } else {
        // After playing twice, show replay button
        setShowReplay(true);
        setIsPlaying(false);
      }
    };

    const handleVideoPlay = () => {
      setIsPlaying(true);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('play', handleVideoPlay);

    return () => {
      observer.disconnect();
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('play', handleVideoPlay);
    };
  }, []);

  const handleReplay = () => {
    const video = videoRef.current;
    if (video) {
      playCountRef.current = 0; // Reset play count
      video.currentTime = 0;
      video.play();
      setShowReplay(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center"
    >
      <video
        ref={videoRef}
        className="w-full h-auto object-contain"
        playsInline
        muted
        loop={false}
        src="https://mavericksedge.ca/videos/Rounded Bento Grid Hero.mov"
      >
        Your browser does not support the video tag.
      </video>

      {/* Replay Button */}
      {showReplay && (
        <button
          onClick={handleReplay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-10 transition-opacity duration-300 hover:bg-black/40"
          aria-label="Replay video"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg">
              <svg
                className="w-8 h-8 text-black ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">Replay</span>
          </div>
        </button>
      )}

      {/* Play/Pause Indicator (optional, can be removed if not needed) */}
      {!showReplay && (
        <div className="absolute bottom-4 right-4 z-10">
          <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-gray-500'} transition-colors duration-200`} />
        </div>
      )}
    </div>
  );
}

