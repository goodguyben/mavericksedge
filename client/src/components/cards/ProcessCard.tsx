
import { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ProcessCardProps {
  step: {
    id: string;
    step: number;
    title: string;
    description: string;
    icon: ReactNode;
  };
}

export default function ProcessCard({ step }: ProcessCardProps) {
  const stepFormatted = step.step.toString().padStart(2, '0');
  const [animationState, setAnimationState] = useState(false);
  
  // Start animation after a delay based on the step number
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationState(true);
    }, 500 + step.step * 200);
    
    return () => clearTimeout(timeout);
  }, [step.step]);
  
  // Define unique animations for each process step
  const animationVariants: Record<string, any> = {
    discovery: {
      animate: {
        clipPath: [
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        ],
        background: [
          "radial-gradient(circle at top left, rgba(255, 86, 48, 0.2), rgba(255, 86, 48, 0))",
          "radial-gradient(circle at top right, rgba(255, 86, 48, 0.3), rgba(255, 86, 48, 0.1))",
          "radial-gradient(circle at bottom, rgba(255, 86, 48, 0.2), rgba(255, 86, 48, 0))"
        ],
        boxShadow: [
          "inset 0 0 0 rgba(255, 86, 48, 0)",
          "inset 0 0 20px rgba(255, 86, 48, 0.3)",
          "inset 0 0 0 rgba(255, 86, 48, 0)"
        ]
      },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    },
    strategy: {
      animate: {
        background: [
          "linear-gradient(45deg, rgba(255, 86, 48, 0.05) 0%, rgba(255, 86, 48, 0) 70%)",
          "linear-gradient(135deg, rgba(255, 86, 48, 0.2) 0%, rgba(255, 86, 48, 0) 70%)",
          "linear-gradient(225deg, rgba(255, 86, 48, 0.15) 0%, rgba(255, 86, 48, 0) 70%)",
          "linear-gradient(315deg, rgba(255, 86, 48, 0.1) 0%, rgba(255, 86, 48, 0) 70%)"
        ],
        rotate: [0, 1, 0, -1, 0],
        scale: [1, 1.03, 1, 0.98, 1],
        filter: [
          "blur(0px) brightness(1)",
          "blur(0.3px) brightness(1.05)",
          "blur(0px) brightness(1)"
        ]
      },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    },
    design: {
      animate: {
        borderRadius: ["15%", "40% 20% 30% 10%", "20% 40% 10% 30%", "15%"],
        background: [
          "conic-gradient(from 0deg at 50% 50%, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0.2) 50%, rgba(255, 86, 48, 0) 100%)",
          "conic-gradient(from 180deg at 50% 50%, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0.2) 50%, rgba(255, 86, 48, 0) 100%)",
          "conic-gradient(from 360deg at 50% 50%, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0.2) 50%, rgba(255, 86, 48, 0) 100%)"
        ],
        boxShadow: [
          "0 0 0 rgba(255, 86, 48, 0)",
          "0 0 15px rgba(255, 86, 48, 0.15) inset",
          "0 0 0 rgba(255, 86, 48, 0)"
        ]
      },
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
    },
    development: {
      animate: {
        background: [
          "repeating-linear-gradient(0deg, rgba(255, 86, 48, 0.05) 0px, rgba(255, 86, 48, 0.05) 1px, transparent 1px, transparent 10px)",
          "repeating-linear-gradient(90deg, rgba(255, 86, 48, 0.1) 0px, rgba(255, 86, 48, 0.1) 1px, transparent 1px, transparent 10px)",
          "repeating-linear-gradient(45deg, rgba(255, 86, 48, 0.05) 0px, rgba(255, 86, 48, 0.05) 1px, transparent 1px, transparent 10px)"
        ],
        scale: [1, 1.02, 0.98, 1],
        boxShadow: [
          "0 0 0 rgba(255, 86, 48, 0)",
          "0 0 0 2px rgba(255, 86, 48, 0.1)",
          "0 0 0 rgba(255, 86, 48, 0)"
        ]
      },
      transition: { duration: 8.5, repeat: Infinity, ease: [0.76, 0, 0.24, 1] }
    },
    launch: {
      animate: {
        background: [
          "radial-gradient(circle at 50% 50%, rgba(255, 86, 48, 0.2) 0%, rgba(255, 86, 48, 0) 50%)",
          "radial-gradient(circle at 50% 50%, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0.2) 25%, rgba(255, 86, 48, 0) 50%)",
          "radial-gradient(circle at 50% 50%, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0) 25%, rgba(255, 86, 48, 0.2) 50%, rgba(255, 86, 48, 0) 75%)",
          "radial-gradient(circle at 50% 50%, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0) 50%, rgba(255, 86, 48, 0) 75%, rgba(255, 86, 48, 0.2) 100%)",
          "radial-gradient(circle at 50% 50%, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0) 100%)"
        ],
        scale: [0.95, 1, 0.95],
        opacity: [0.8, 1, 0.8]
      },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };
  
  // Fallback animations for different step numbers
  const fallbackAnimations: Record<number, any> = {
    1: {
      animate: {
        boxShadow: [
          "0 0 0 0 rgba(255, 86, 48, 0)",
          "0 0 0 4px rgba(255, 86, 48, 0.1)",
          "0 0 0 0 rgba(255, 86, 48, 0)"
        ],
        background: [
          "linear-gradient(135deg, rgba(255, 86, 48, 0.1) 0%, rgba(255, 86, 48, 0) 100%)",
          "linear-gradient(225deg, rgba(255, 86, 48, 0.15) 0%, rgba(255, 86, 48, 0) 100%)",
          "linear-gradient(315deg, rgba(255, 86, 48, 0.1) 0%, rgba(255, 86, 48, 0) 100%)",
          "linear-gradient(45deg, rgba(255, 86, 48, 0.05) 0%, rgba(255, 86, 48, 0) 100%)"
        ]
      },
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
    },
    2: {
      animate: {
        clipPath: [
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          "polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)",
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        ],
        filter: [
          "drop-shadow(0 0 0 rgba(255, 86, 48, 0))",
          "drop-shadow(0 0 8px rgba(255, 86, 48, 0.2))",
          "drop-shadow(0 0 0 rgba(255, 86, 48, 0))"
        ]
      },
      transition: { duration: 6, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }
    },
    3: {
      animate: {
        background: [
          "linear-gradient(to right, rgba(255, 86, 48, 0.05) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 86, 48, 0.05) 100%)",
          "linear-gradient(to bottom, rgba(255, 86, 48, 0.05) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 86, 48, 0.05) 100%)",
          "linear-gradient(to left, rgba(255, 86, 48, 0.05) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 86, 48, 0.05) 100%)",
          "linear-gradient(to top, rgba(255, 86, 48, 0.05) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 86, 48, 0.05) 100%)"
        ],
        borderRadius: ["12px", "16px", "12px"]
      },
      transition: { duration: 10, repeat: Infinity, ease: "linear" }
    },
    4: {
      animate: {
        background: [
          "repeating-radial-gradient(circle at 50% 50%, rgba(255, 86, 48, 0) 0px, rgba(255, 86, 48, 0) 10px, rgba(255, 86, 48, 0.05) 10px, rgba(255, 86, 48, 0.05) 20px)",
          "repeating-radial-gradient(circle at 50% 50%, rgba(255, 86, 48, 0) 10px, rgba(255, 86, 48, 0) 20px, rgba(255, 86, 48, 0.05) 20px, rgba(255, 86, 48, 0.05) 30px)",
          "repeating-radial-gradient(circle at 50% 50%, rgba(255, 86, 48, 0) 0px, rgba(255, 86, 48, 0) 10px, rgba(255, 86, 48, 0.05) 10px, rgba(255, 86, 48, 0.05) 20px)"
        ],
        boxShadow: [
          "inset 0 0 20px rgba(255, 86, 48, 0)",
          "inset 0 0 20px rgba(255, 86, 48, 0.1)",
          "inset 0 0 20px rgba(255, 86, 48, 0)"
        ]
      },
      transition: { duration: 9, repeat: Infinity, ease: "easeInOut" }
    },
    5: {
      animate: {
        background: [
          "linear-gradient(90deg, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 86, 48, 0) 100%)",
          "linear-gradient(180deg, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 86, 48, 0) 100%)",
          "linear-gradient(270deg, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 86, 48, 0) 100%)",
          "linear-gradient(360deg, rgba(255, 86, 48, 0) 0%, rgba(255, 86, 48, 0.1) 50%, rgba(255, 86, 48, 0) 100%)"
        ],
        borderRadius: ["12px", "20px 12px", "12px 20px", "12px"]
      },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };
  
  // Get the animation based on the step id OR step number
  const currentAnimation = 
    animationVariants[step.id] || 
    fallbackAnimations[step.step] || 
    { 
      animate: { scale: [1, 1.1, 1] }, 
      transition: { duration: step.step + 1.5, repeat: Infinity } 
    };
  
  return (
    <motion.div 
      className="bg-[#121212] p-8 rounded-xl min-w-[280px] md:min-w-[350px] flex-shrink-0 border border-gray-800 relative group hover:border-maverick-orange transition-colors duration-300"
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 30px -15px rgba(255, 86, 48, 0.3)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex justify-between items-start mb-6">
        <motion.div 
          className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg"
          whileHover={{ scale: 1.1 }}
          animate={
            step.id === "discovery" ? {
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.1, 1],
            } : step.id === "strategy" ? {
              y: [0, -5, 0],
              x: [0, 3, 0, -3, 0],
            } : step.id === "design" ? {
              borderRadius: ["20%", "50%", "20%"],
              scale: [1, 1.08, 1],
            } : step.id === "development" ? {
              rotateY: [0, 180, 360],
              transition: { duration: 2, repeat: Infinity, repeatDelay: 5 }
            } : step.id === "launch" ? {
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 rgba(255, 86, 48, 0)",
                "0 0 20px rgba(255, 86, 48, 0.4)",
                "0 0 0 rgba(255, 86, 48, 0)"
              ]
            } : {
              // Fallback animations based on step number
              rotate: step.step % 2 === 0 ? [0, 10, 0, -10, 0] : [0, -10, 0, 10, 0],
              scale: [1, 1.1, 0.95, 1.1, 1],
            }
          }
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "easeInOut" 
          }}
        >
          {step.icon}
        </motion.div>
        <motion.span 
          className="text-5xl font-bold text-maverick-orange opacity-30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stepFormatted}
        </motion.span>
      </div>
      
      <motion.h3 
        className="text-xl font-semibold mb-3 font-heading"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {step.title}
      </motion.h3>
      
      <motion.p 
        className="text-[#AAAAAA]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {step.description}
      </motion.p>
      
      {/* Simple hover border effect instead of animation - thinner border */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 border border-maverick-orange transition-opacity duration-300" style={{ zIndex: -1 }} />
    </motion.div>
  );
}
