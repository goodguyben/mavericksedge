import { useRef, useState } from "react";

interface BeforeAfterProps {
  beforeImageUrl: string;
  afterImageUrl: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export default function BeforeAfter({
  beforeImageUrl,
  afterImageUrl,
  beforeAlt = "Before",
  afterAlt = "After",
  className
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);

  const handleMove = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl border border-gray-800 select-none ${className || ""}`}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img src={beforeImageUrl} alt={beforeAlt} className="w-full h-auto block" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ width: `${position}%`, overflow: "hidden" }}
      >
        <img src={afterImageUrl} alt={afterAlt} className="w-full h-auto block" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Comparison slider"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 accent-maverick-orange"
      />
      <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded">{beforeAlt}</div>
      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded">{afterAlt}</div>
      <div
        className="absolute inset-y-0" 
        style={{ left: `${position}%` }}
      >
        <div className="w-px h-full bg-white/50" />
      </div>
    </div>
  );
}


