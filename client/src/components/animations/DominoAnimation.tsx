
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DominoTile {
  id: string;
  label: string;
  color: string; // For problem tiles
  solutionLabel: string;
  solutionColor: string; // For solution tiles
}

const dominos: DominoTile[] = [
  {
    id: "manual-work",
    label: "Manual Work",
    color: "#444444",
    solutionLabel: "AI Automation",
    solutionColor: "#FF7E5F"
  },
  {
    id: "outdated-website",
    label: "Outdated Website",
    color: "#555555",
    solutionLabel: "Smart Web Platforms",
    solutionColor: "#FEB47B"
  },
  {
    id: "low-engagement",
    label: "Low Engagement",
    color: "#666666", 
    solutionLabel: "Targeted Campaigns",
    solutionColor: "#FFCB80"
  },
  {
    id: "poor-analytics",
    label: "Poor Analytics",
    color: "#777777",
    solutionLabel: "Data-Driven Insights",
    solutionColor: "#7BE0AD"
  },
  {
    id: "tech-overwhelm",
    label: "Tech Overwhelm",
    color: "#888888",
    solutionLabel: "Simplified Solutions",
    solutionColor: "#6886C5"
  }
];

export default function DominoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Control the overall progress of domino falling sequence
  const fallProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  
  // Control the blocking and rising sequence
  const blockingProgress = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const risingProgress = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);

  // Calculate delay for each domino in the sequence
  const calculateDelay = (index: number, total: number) => index / total;

  return (
    <div 
      ref={containerRef} 
      className="relative h-[200vh] w-full overflow-hidden"
    >
      <div className="sticky top-[30vh] h-[70vh] w-full">
        {/* Dominoes Container */}
        <div className="relative max-w-4xl mx-auto h-full flex items-center justify-center">
          
          {/* Problem Dominoes */}
          {dominos.map((domino, index) => {
            const delay = calculateDelay(index, dominos.length);
            return (
              <motion.div
                key={domino.id}
                className="absolute"
                style={{
                  left: `${20 + (index * 15)}%`,
                  originX: 0.5,
                  originY: 1,
                  zIndex: dominos.length - index
                }}
                // Transform based on the fall progress
                custom={delay}
                animate={{
                  rotateZ: fallProgress.get() >= delay 
                    ? (index === dominos.length - 1 && blockingProgress.get() > 0) 
                      ? -5 * blockingProgress.get() // The last domino slightly moves but is blocked
                      : 90 
                    : 0,
                  opacity: risingProgress.get() > delay ? 0 : 1
                }}
                transition={{
                  rotateZ: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
                }}
              >
                {/* Domino Tile */}
                <div 
                  className="w-16 h-28 rounded-md flex items-center justify-center text-center p-2"
                  style={{ 
                    backgroundColor: domino.color,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <p className="text-white text-xs font-medium">{domino.label}</p>
                </div>

                {/* Domino Shadow */}
                <motion.div
                  className="absolute w-16 h-2 bottom-0 left-0 opacity-40 rounded-full bg-black blur-sm"
                  style={{
                    originX: 0.5,
                    originY: 0
                  }}
                  animate={{
                    scaleX: fallProgress.get() >= delay ? 0.7 : 1,
                    scaleY: fallProgress.get() >= delay ? 2 : 1,
                    x: fallProgress.get() >= delay ? "50%" : "0%",
                    opacity: fallProgress.get() >= delay ? 0.2 : 0.4
                  }}
                />
              </motion.div>
            );
          })}

          {/* Mavericks Edge AI Blocker */}
          <motion.div
            className="absolute"
            style={{
              left: `${20 + (dominos.length * 15)}%`,
              originX: 0.5,
              originY: 1,
              zIndex: dominos.length + 1
            }}
            animate={{
              scale: blockingProgress.get() > 0 ? [1, 1.05, 1] : 1,
              opacity: blockingProgress.get() > 0 ? 1 : 0
            }}
            transition={{
              scale: { 
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 1.5
              }
            }}
          >
            {/* Blocker Tile */}
            <div 
              className="w-20 h-32 rounded-md flex items-center justify-center text-center p-2 bg-maverick-orange"
              style={{
                boxShadow: "0 0 20px rgba(255, 86, 48, 0.5)"
              }}
            >
              <p className="text-white text-sm font-bold">Mavericks Edge AI</p>
            </div>

            {/* Blocker Glow Effect */}
            <motion.div
              className="absolute -inset-4 bg-maverick-orange rounded-xl blur-xl opacity-20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            {/* Blocker Shadow */}
            <div className="absolute w-20 h-3 bottom-0 left-0 opacity-30 rounded-full bg-black blur-sm" />
          </motion.div>

          {/* Solution Dominoes (Rising) */}
          {dominos.map((domino, index) => {
            const delay = calculateDelay(index, dominos.length);
            return (
              <motion.div
                key={`solution-${domino.id}`}
                className="absolute"
                style={{
                  left: `${20 + (index * 15)}%`,
                  originX: 0.5,
                  originY: 1,
                  zIndex: index
                }}
                // Transform based on the rising progress
                custom={delay}
                animate={{
                  rotateZ: risingProgress.get() > (1 - delay) ? 0 : 90,
                  opacity: risingProgress.get() > (1 - delay) ? 1 : 0
                }}
                transition={{
                  rotateZ: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
                }}
              >
                {/* Solution Tile */}
                <div 
                  className="w-16 h-28 rounded-md flex items-center justify-center text-center p-2"
                  style={{ 
                    backgroundColor: domino.solutionColor,
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <p className="text-maverick-charcoal text-xs font-bold">{domino.solutionLabel}</p>
                </div>

                {/* Solution Shadow */}
                <motion.div
                  className="absolute w-16 h-2 bottom-0 left-0 opacity-40 rounded-full blur-sm"
                  style={{
                    background: "rgba(0,0,0,0.25)",
                    originX: 0.5,
                    originY: 0
                  }}
                  animate={{
                    scaleX: risingProgress.get() > (1 - delay) ? 1 : 0.7,
                    opacity: risingProgress.get() > (1 - delay) ? 0.4 : 0.1
                  }}
                />
              </motion.div>
            );
          })}
        </div>
        
        {/* Text Overlay for Context */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <motion.div 
            className="text-center max-w-md px-4"
            style={{
              opacity: useTransform(scrollYProgress, 
                [0, 0.2, 0.4, 0.6, 0.8, 1], 
                [0, 1, 0, 0, 1, 0]
              )
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-maverick-cream">
              <motion.span style={{ 
                opacity: useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]) 
              }}>
                Business Challenges
              </motion.span>
              <motion.span style={{ 
                opacity: useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]) 
              }}>
                Our Solutions
              </motion.span>
            </h3>
            <motion.p 
              className="text-maverick-cream/70"
              style={{ 
                opacity: useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 1, 0, 0, 1, 0]) 
              }}
            >
              <motion.span style={{ 
                display: useTransform(scrollYProgress, [0, 0.3, 0.4], ["block", "block", "none"]) 
              }}>
                Watch how common business pain points collapse under their own weight...
              </motion.span>
              <motion.span style={{ 
                display: useTransform(scrollYProgress, [0.6, 0.7, 1], ["none", "block", "block"]) 
              }}>
                ...and see how we transform them into digital advantages
              </motion.span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
