
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-maverick-orange/20 to-transparent opacity-30 blur-3xl"
          animate={{
            scale: [0.8, 1.2, 0.8],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-bl from-maverick-amber/20 to-transparent opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            x: [50, -50, 50],
            y: [40, -40, 40],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with enhanced glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo size="large" showText={false} noLink={true} />
        </motion.div>

        {/* Company name with intense glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-heading font-bold text-maverick-orange mb-8"
          style={{
            textShadow: '0 0 60px rgba(255, 86, 48, 1), 0 0 120px rgba(255, 86, 48, 1), 0 0 240px rgba(255, 86, 48, 0.8), 0 0 360px rgba(255, 86, 48, 0.6)',
            animation: 'pulse-glow-text 3s ease-in-out infinite'
          }}
        >
          Mavericks Edge
        </motion.h1>

        {/* Loading animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Pulsing dots */}
          <div className="flex space-x-2 mb-4">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full bg-maverick-orange"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: '0 0 20px rgba(255, 86, 48, 0.8), 0 0 40px rgba(255, 86, 48, 0.4)'
                }}
              />
            ))}
          </div>

          {/* Loading text */}
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-lg text-maverick-cream/80 font-medium tracking-wide"
          >
            Loading Experience...
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-full"
          style={{
            width: "200px",
            boxShadow: '0 0 20px rgba(255, 86, 48, 0.6)'
          }}
        >
          <motion.div
            className="h-full w-full bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-full"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
