
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
        rotate: [0, 15, 0, -15, 0],
        scale: [1, 1.1, 1, 1.1, 1],
        boxShadow: [
          "0 0 0 rgba(255, 86, 48, 0)",
          "0 0 20px rgba(255, 86, 48, 0.7)",
          "0 0 0 rgba(255, 86, 48, 0)",
          "0 0 20px rgba(255, 86, 48, 0.7)",
          "0 0 0 rgba(255, 86, 48, 0)"
        ]
      },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    strategy: {
      animate: {
        x: [0, 10, 0, -10, 0],
        y: [0, -5, 0, 5, 0],
        filter: [
          "drop-shadow(0 0 0 rgba(255, 86, 48, 0))",
          "drop-shadow(0 0 8px rgba(255, 86, 48, 0.8))",
          "drop-shadow(0 0 0 rgba(255, 86, 48, 0))"
        ]
      },
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
    },
    design: {
      animate: {
        borderRadius: ["20%", "50%", "20%", "40%", "20%"],
        background: [
          "rgba(255, 86, 48, 0.1)",
          "rgba(255, 86, 48, 0.3)",
          "rgba(255, 86, 48, 0.1)",
          "rgba(255, 86, 48, 0.2)",
          "rgba(255, 86, 48, 0.1)"
        ]
      },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    },
    development: {
      animate: {
        rotateY: [0, 180, 360],
        scale: [1, 1.2, 1],
        background: [
          "rgba(255, 86, 48, 0.1)",
          "rgba(255, 140, 48, 0.2)",
          "rgba(255, 86, 48, 0.1)"
        ]
      },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    launch: {
      animate: {
        y: [0, -15, 0],
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 0 0 rgba(255, 86, 48, 0)",
          "0 10px 20px rgba(255, 86, 48, 0.4)",
          "0 0 0 rgba(255, 86, 48, 0)"
        ]
      },
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    }
  };
  
  // Fallback animations for different step numbers
  const fallbackAnimations: Record<number, any> = {
    1: {
      animate: {
        rotate: [0, 360],
        scale: [1, 1.1, 1],
        background: [
          "rgba(255, 86, 48, 0.1)",
          "rgba(255, 120, 48, 0.3)",
          "rgba(255, 86, 48, 0.1)"
        ]
      },
      transition: { duration: 6, repeat: Infinity, ease: "linear" }
    },
    2: {
      animate: {
        scale: [1, 1.2, 0.9, 1.1, 1],
        borderRadius: ["20%", "30%", "20%", "40%", "20%"]
      },
      transition: { duration: 4, repeat: Infinity, ease: "easeOut" }
    },
    3: {
      animate: {
        rotate: [0, 10, 0, -10, 0],
        background: [
          "rgba(255, 86, 48, 0.1)",
          "rgba(255, 180, 48, 0.2)",
          "rgba(255, 86, 48, 0.1)"
        ]
      },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    4: {
      animate: {
        scale: [1, 0.9, 1.1, 0.9, 1],
        x: [0, 5, 0, -5, 0]
      },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    },
    5: {
      animate: {
        y: [0, -10, 0, 10, 0],
        rotate: [0, 5, 0, -5, 0]
      },
      transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
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
          animate={animationState ? currentAnimation.animate : {}}
          transition={currentAnimation.transition}
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
      
      {/* Animated gradient border */}
      <motion.div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(255,86,48,0) 0%, rgba(255,86,48,0.3) 50%, rgba(255,86,48,0) 100%)",
            "linear-gradient(180deg, rgba(255,86,48,0) 0%, rgba(255,86,48,0.3) 50%, rgba(255,86,48,0) 100%)",
            "linear-gradient(270deg, rgba(255,86,48,0) 0%, rgba(255,86,48,0.3) 50%, rgba(255,86,48,0) 100%)",
            "linear-gradient(0deg, rgba(255,86,48,0) 0%, rgba(255,86,48,0.3) 50%, rgba(255,86,48,0) 100%)",
          ],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "loop"
        }}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
}
