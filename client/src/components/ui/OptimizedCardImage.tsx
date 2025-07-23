import React from 'react';
import { motion } from 'framer-motion';

interface OptimizedCardImageProps {
  title: string;
  cardNumber?: number;
  className?: string;
}

export const OptimizedCardImage: React.FC<OptimizedCardImageProps> = ({ 
  title, 
  cardNumber, 
  className = "w-full h-full object-cover" 
}) => {
  const getCardContent = (title: string, cardNumber?: number) => {
    let content = {
      icon: "💻",
      color: "from-blue-500 to-purple-600",
      text: title
    };

    switch (title) {
      case "Mobile Responsive":
        content = {
          icon: "📱",
          color: "from-green-500 to-blue-600",
          text: "Responsive Design"
        };
        break;
      case "Human Design":
        content = {
          icon: "🎨",
          color: "from-pink-500 to-red-600",
          text: "User-Centered"
        };
        break;
      case "Google Ranked":
        content = {
          icon: "🔍",
          color: "from-yellow-500 to-orange-600",
          text: "SEO Optimized"
        };
        break;
      case "Affordable":
        content = {
          icon: "💰",
          color: "from-emerald-500 to-teal-600",
          text: "Cost Effective"
        };
        break;
    }

    return content;
  };

  const cardContent = getCardContent(title, cardNumber);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${cardContent.color} opacity-90`}
        animate={{
          background: [
            `linear-gradient(135deg, var(--tw-gradient-stops))`,
            `linear-gradient(225deg, var(--tw-gradient-stops))`,
            `linear-gradient(135deg, var(--tw-gradient-stops))`
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
        {/* Animated icon */}
        <motion.div
          className="text-6xl mb-4"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {cardContent.icon}
        </motion.div>
        
        {/* Text content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-xl font-bold mb-2">{cardContent.text}</h3>
          <p className="text-sm opacity-90">Optimized Performance</p>
        </motion.div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 