import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Animated background effects */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(255, 86, 48, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 86, 48, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(255, 86, 48, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Loading content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl mb-8">
            <img
              src="/assets/logo-transparent-thumb4x.png"
              alt="Mavericks Edge Logo"
              className="w-full h-full object-contain p-4"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/20 via-transparent to-transparent rounded-full" />
          </div>

          {/* Loading text and progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-maverick-orange mb-4 font-heading">
              Mavericks Edge
            </h1>

            <motion.div
              className="w-64 h-1 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-maverick-orange to-orange-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}