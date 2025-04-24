
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
      // Pulsating radar effect with orange/amber gradients
      animate: {
        boxShadow: [
          "0 0 0 rgba(255, 86, 48, 0)",
          "0 0 30px rgba(255, 140, 48, 0.7)",
          "0 0 5px rgba(255, 200, 48, 0.3)",
          "0 0 20px rgba(255, 86, 48, 0.6)",
          "0 0 0 rgba(255, 86, 48, 0)"
        ],
        scale: [1, 1.15, 1.05, 1.1, 1],
        borderRadius: ["20%", "50%", "30%", "40%", "20%"],
        background: [
          "radial-gradient(circle, rgba(255,86,48,0.2) 0%, rgba(255,86,48,0.1) 70%)",
          "radial-gradient(circle, rgba(255,150,48,0.3) 0%, rgba(255,86,48,0.1) 70%)",
          "radial-gradient(circle, rgba(255,86,48,0.2) 0%, rgba(255,86,48,0.1) 70%)"
        ]
      },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    },
    strategy: {
      // Floating geometric shapes with grid pattern
      animate: {
        background: [
          "linear-gradient(135deg, rgba(255,86,48,0.1) 0%, rgba(255,86,48,0) 70%), repeating-linear-gradient(45deg, rgba(255,86,48,0.1) 0px, rgba(255,86,48,0.1) 2px, transparent 2px, transparent 10px)",
          "linear-gradient(135deg, rgba(255,140,48,0.2) 0%, rgba(255,86,48,0) 70%), repeating-linear-gradient(45deg, rgba(255,140,48,0.1) 0px, rgba(255,140,48,0.1) 2px, transparent 2px, transparent 10px)",
          "linear-gradient(135deg, rgba(255,86,48,0.1) 0%, rgba(255,86,48,0) 70%), repeating-linear-gradient(45deg, rgba(255,86,48,0.1) 0px, rgba(255,86,48,0.1) 2px, transparent 2px, transparent 10px)"
        ],
        x: [0, 8, -5, 3, 0],
        y: [0, -5, 2, -3, 0],
        rotate: [0, 5, -3, 2, 0],
        boxShadow: [
          "0 0 0 rgba(255,86,48,0)",
          "0 5px 15px rgba(255,140,48,0.3)",
          "0 0 0 rgba(255,86,48,0)"
        ]
      },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    },
    design: {
      // Color palette blending with brush-like movement
      animate: {
        background: [
          "linear-gradient(45deg, rgba(255,86,48,0.1) 0%, rgba(255,170,80,0.2) 50%, rgba(255,86,48,0.1) 100%)",
          "linear-gradient(135deg, rgba(255,170,80,0.2) 0%, rgba(255,86,48,0.1) 50%, rgba(255,170,80,0.2) 100%)",
          "linear-gradient(225deg, rgba(255,86,48,0.1) 0%, rgba(255,170,80,0.2) 50%, rgba(255,86,48,0.1) 100%)",
          "linear-gradient(315deg, rgba(255,170,80,0.2) 0%, rgba(255,86,48,0.1) 50%, rgba(255,170,80,0.2) 100%)"
        ],
        borderRadius: ["20% 50% 30% 40%", "50% 30% 40% 20%", "30% 40% 20% 50%", "40% 20% 50% 30%"],
        filter: [
          "blur(0px)",
          "blur(1px)",
          "blur(0px)"
        ],
        rotate: [0, 3, -2, 1, 0]
      },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    },
    development: {
      // Code-like pattern with animated typing effect
      animate: {
        backgroundImage: [
          "linear-gradient(90deg, rgba(255,86,48,0.1) 25%, rgba(255,86,48,0) 25%, rgba(255,86,48,0) 50%, rgba(255,86,48,0.1) 50%, rgba(255,86,48,0.1) 75%, rgba(255,86,48,0) 75%)",
          "linear-gradient(90deg, rgba(255,86,48,0) 25%, rgba(255,86,48,0.1) 25%, rgba(255,86,48,0.1) 50%, rgba(255,86,48,0) 50%, rgba(255,86,48,0) 75%, rgba(255,86,48,0.1) 75%)"
        ],
        backgroundSize: ["20px 20px", "20px 20px"],
        backgroundPosition: ["0px 0px", "20px 0px"],
        boxShadow: [
          "inset 0 0 0 2px rgba(255,86,48,0.1)",
          "inset 0 0 0 2px rgba(255,140,48,0.2)",
          "inset 0 0 0 2px rgba(255,86,48,0.1)"
        ],
        scale: [1, 1.02, 0.98, 1]
      },
      transition: { duration: 4, repeat: Infinity, ease: "linear" }
    },
    launch: {
      // Rocket launch with pulsating energy
      animate: {
        y: [0, -8, 0],
        backgroundImage: [
          "radial-gradient(circle at 50% 100%, rgba(255,86,48,0.3) 0%, rgba(255,86,48,0) 50%)",
          "radial-gradient(circle at 50% 100%, rgba(255,140,48,0.4) 0%, rgba(255,86,48,0) 60%)",
          "radial-gradient(circle at 50% 100%, rgba(255,86,48,0.3) 0%, rgba(255,86,48,0) 50%)"
        ],
        boxShadow: [
          "0 5px 15px -5px rgba(255,86,48,0.3)",
          "0 15px 25px -5px rgba(255,140,48,0.5)",
          "0 5px 15px -5px rgba(255,86,48,0.3)"
        ],
        filter: [
          "brightness(1)",
          "brightness(1.2)",
          "brightness(1)"
        ]
      },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };
  
  // Fallback animations with advanced graphics consistent with theme
  const fallbackAnimations: Record<number, any> = {
    1: {
      // Exploratory pulse animation
      animate: {
        background: [
          "radial-gradient(circle, rgba(255,86,48,0.15) 0%, rgba(30,26,24,0) 70%)",
          "radial-gradient(circle, rgba(255,140,48,0.25) 0%, rgba(30,26,24,0) 70%)",
          "radial-gradient(circle, rgba(255,86,48,0.15) 0%, rgba(30,26,24,0) 70%)"
        ],
        boxShadow: [
          "0 0 0 2px rgba(255,86,48,0.1)",
          "0 0 0 2px rgba(255,140,48,0.2)",
          "0 0 0 2px rgba(255,86,48,0.1)"
        ],
        scale: [1, 1.05, 1],
        rotate: [0, 5, 0]
      },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    },
    2: {
      // Strategic network pattern
      animate: {
        background: [
          "radial-gradient(circle at top left, rgba(255,86,48,0.1) 0%, transparent 30%), radial-gradient(circle at bottom right, rgba(255,196,61,0.1) 0%, transparent 30%)",
          "radial-gradient(circle at top right, rgba(255,86,48,0.1) 0%, transparent 30%), radial-gradient(circle at bottom left, rgba(255,196,61,0.1) 0%, transparent 30%)"
        ],
        scale: [1, 1.03, 0.98, 1],
        rotate: [0, 2, -1, 0]
      },
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
    },
    3: {
      // Creative wave pattern
      animate: {
        background: [
          "linear-gradient(135deg, rgba(255,86,48,0.1) 0%, rgba(30,26,24,0) 70%), repeating-linear-gradient(45deg, rgba(255,86,48,0.05) 0px, rgba(255,86,48,0.05) 5px, transparent 5px, transparent 10px)",
          "linear-gradient(135deg, rgba(255,140,48,0.15) 0%, rgba(30,26,24,0) 70%), repeating-linear-gradient(45deg, rgba(255,140,48,0.05) 0px, rgba(255,140,48,0.05) 5px, transparent 5px, transparent 10px)",
          "linear-gradient(135deg, rgba(255,86,48,0.1) 0%, rgba(30,26,24,0) 70%), repeating-linear-gradient(45deg, rgba(255,86,48,0.05) 0px, rgba(255,86,48,0.05) 5px, transparent 5px, transparent 10px)"
        ],
        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        rotate: [0, 3, 0]
      },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    },
    4: {
      // Technical circuit pattern
      animate: {
        background: [
          "linear-gradient(90deg, rgba(255,86,48,0) 0%, rgba(255,86,48,0.1) 50%, rgba(255,86,48,0) 100%), linear-gradient(0deg, rgba(255,86,48,0) 0%, rgba(255,86,48,0.1) 50%, rgba(255,86,48,0) 100%)",
          "linear-gradient(90deg, rgba(255,140,48,0) 0%, rgba(255,140,48,0.15) 50%, rgba(255,140,48,0) 100%), linear-gradient(0deg, rgba(255,140,48,0) 0%, rgba(255,140,48,0.15) 50%, rgba(255,140,48,0) 100%)",
          "linear-gradient(90deg, rgba(255,86,48,0) 0%, rgba(255,86,48,0.1) 50%, rgba(255,86,48,0) 100%), linear-gradient(0deg, rgba(255,86,48,0) 0%, rgba(255,86,48,0.1) 50%, rgba(255,86,48,0) 100%)"
        ],
        boxShadow: [
          "inset 0 0 15px rgba(255,86,48,0.1)",
          "inset 0 0 15px rgba(255,140,48,0.2)",
          "inset 0 0 15px rgba(255,86,48,0.1)"
        ],
        x: [0, 3, -2, 0],
        y: [0, -2, 3, 0]
      },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    },
    5: {
      // Support orbit animation
      animate: {
        background: [
          "radial-gradient(ellipse at center, rgba(255,86,48,0.15) 0%, rgba(30,26,24,0) 70%)",
          "radial-gradient(ellipse at center, rgba(255,140,48,0.25) 0%, rgba(30,26,24,0) 70%)",
          "radial-gradient(ellipse at center, rgba(255,86,48,0.15) 0%, rgba(30,26,24,0) 70%)"
        ],
        boxShadow: [
          "0 0 0 4px rgba(255,86,48,0.05), 0 0 20px rgba(255,86,48,0.1)",
          "0 0 0 4px rgba(255,140,48,0.1), 0 0 25px rgba(255,140,48,0.2)",
          "0 0 0 4px rgba(255,86,48,0.05), 0 0 20px rgba(255,86,48,0.1)"
        ],
        y: [0, -5, 0],
        rotate: [0, 2, -1, 0]
      },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };
  
  // Get the animation based on the step id OR step number
  const currentAnimation = 
    animationVariants[step.id] || 
    fallbackAnimations[step.step] || 
    { 
      animate: { 
        scale: [1, 1.1, 1],
        background: [
          "radial-gradient(circle, rgba(255,86,48,0.15) 0%, rgba(30,26,24,0) 70%)",
          "radial-gradient(circle, rgba(255,140,48,0.25) 0%, rgba(30,26,24,0) 70%)",
          "radial-gradient(circle, rgba(255,86,48,0.15) 0%, rgba(30,26,24,0) 70%)"
        ]
      }, 
      transition: { duration: step.step + 2.5, repeat: Infinity, ease: "easeInOut" } 
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
