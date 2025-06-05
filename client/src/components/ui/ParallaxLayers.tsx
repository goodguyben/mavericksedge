import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxLayers() {
  const { scrollY } = useScroll();

  // Different speeds for different layers to create depth
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -200]);
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -400]);
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -600]);
  const layer4Y = useTransform(scrollY, [0, 1000], [0, -800]);

  // Rotation effects
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -30]);

  // Scale effects
  const scale1 = useTransform(scrollY, [0, 500], [1, 1.5]);
  const scale2 = useTransform(scrollY, [0, 800], [1, 0.8]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden relative">
      {/* Layer 1 - Floating orbs */}
      <motion.div
        style={{ y: layer1Y, rotate: rotate1 }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-maverick-orange/10 to-purple-500/10 blur-xl"
      />
      <motion.div
        style={{ y: layer1Y, rotate: rotate2 }}
        className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-lg"
      />

      {/* Layer 2 - Geometric shapes */}
      <motion.div
        style={{ y: layer2Y, scale: scale1 }}
        className="absolute top-60 left-1/4 w-16 h-16 rotate-45 bg-gradient-to-br from-maverick-amber/20 to-transparent border border-maverick-orange/20"
      />
      <motion.div
        style={{ y: layer2Y, scale: scale2 }}
        className="absolute bottom-40 right-1/3 w-20 h-20 rounded-full border-2 border-cyan-500/20 animate-pulse"
      />

      {/* Layer 3 - Particles */}
      <motion.div
        style={{ y: layer3Y }}
        className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-maverick-orange/40 shadow-lg shadow-maverick-orange/20"
      />
      <motion.div
        style={{ y: layer3Y }}
        className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-purple-400/60 shadow-md shadow-purple-400/30"
      />
      <motion.div
        style={{ y: layer3Y }}
        className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-cyan-400/50 shadow-lg shadow-cyan-400/25"
      />

      {/* Layer 4 - Grid pattern */}
      <motion.div
        style={{ y: layer4Y, rotate: rotate1 }}
        className="absolute inset-0 opacity-5"
        // Add a subtle grid background
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </motion.div>
    </div>
  );
}