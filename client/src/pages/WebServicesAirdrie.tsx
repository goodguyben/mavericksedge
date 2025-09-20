
import { motion } from "framer-motion";
import { Code, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Smartphone, Search, CheckCircle, ArrowRight, MapPin, ChevronDown, Gauge, Wand2, Eye, Lock } from "lucide-react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
import GradientText from "@/components/ui/GradientText";
// Removed timeline import; replacing with creative web app tiles grid
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiShopify, SiWordpress, SiVercel, SiNetlify, SiWoocommerce, SiFigma, SiGithub, SiPostgresql, SiStripe, SiWebflow } from 'react-icons/si';
import { ReplitIcon } from "@/components/ui/ReplitIcon";
import { CursorIcon } from "@/components/ui/CursorIcon";
import ContactSection from "@/components/sections/ContactSection";
import { ShinyBorderButton } from "@/components/ui/ShinyBorderButton";
import { Link } from "wouter";
import React, { useEffect, useState, useRef, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { webDevelopmentServiceSchema, generateBreadcrumbSchema } from "@/components/StructuredData";
import { ROUTES } from "@/lib/routes";
import WebServicesCascadeSection from "@/components/sections/WebServicesCascadeSectionAirdrie";
import ScrollFadeSection from '@/components/ui/scroll-fade-section';
import { LazySection } from '@/components/performance/LazySection';
import GoogleReviews from '@/components/GoogleReviewsAirdrie';

// Animated integrated-circuit overlay for cube faces
function CircuitOverlay({ accent = "#61DAFB" }: { accent?: string }) {
  const gridSteps = Array.from({ length: 7 }, (_, i) => 22 + i * 8); // 7 lines inside the chip
  const pinCount = 8;
  const pinPositions = Array.from({ length: pinCount }, (_, i) => 22 + i * (64 / (pinCount - 1)));

  return (
    <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id="circuitGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Chip frame */}
      <rect x="18" y="18" width="64" height="64" rx="6" ry="6" fill="none" stroke={accent} strokeOpacity="0.35" strokeWidth="1.2" />

      {/* Edge pins - top */}
      {pinPositions.map((x, idx) => (
        <g key={`pt-${idx}`}>
          <line x1={x} y1={18} x2={x} y2={12} stroke={accent} strokeOpacity="0.45" strokeWidth="0.9" />
          <line x1={x} y1={82} x2={x} y2={88} stroke={accent} strokeOpacity="0.45" strokeWidth="0.9" />
        </g>
      ))}
      {/* Edge pins - sides */}
      {pinPositions.map((y, idx) => (
        <g key={`ps-${idx}`}>
          <line x1={18} y1={y} x2={12} y2={y} stroke={accent} strokeOpacity="0.45" strokeWidth="0.9" />
          <line x1={82} y1={y} x2={88} y2={y} stroke={accent} strokeOpacity="0.45" strokeWidth="0.9" />
        </g>
      ))}

      {/* Subtle inner grid */}
      {gridSteps.map((x, idx) => (
        <line key={`gv-${idx}`} x1={x} y1={22} x2={x} y2={78} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
      ))}
      {gridSteps.map((y, idx) => (
        <line key={`gh-${idx}`} x1={22} y1={y} x2={78} y2={y} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
      ))}

      {/* Animated traces (solid lines with pulsating intensity and width) */}
      {[
        "M22,60 L38,60 L38,50 L52,50 L52,34 L78,34",
        "M22,44 L30,44 L30,66 L48,66 L48,46 L78,46",
        "M22,72 L58,72 L58,40 L68,40 L68,28 L78,28",
        "M22,30 L42,30 L42,58 L70,58 L70,74 L78,74"
      ].map((d, i) => (
        <g key={`trace-${i}`}>
          {/* Base line */}
          <path d={d} stroke={accent} strokeOpacity={0.25} strokeWidth={1.2} strokeLinecap="round" fill="none" />
          {/* Pulsating overlay with glow */}
          <motion.path
            d={d}
            stroke={accent}
            filter="url(#circuitGlow)"
            strokeLinecap="round"
            fill="none"
            animate={{ strokeOpacity: [0.35, 0.9, 0.35], strokeWidth: [1.2, 2.2, 1.2] }}
            transition={{ duration: 2.4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      ))}

      {/* Optional bus bars (subtle) */}
      <path d="M20,24 L80,24" stroke={accent} strokeOpacity={0.08} strokeWidth={0.8} />
      <path d="M20,76 L80,76" stroke={accent} strokeOpacity={0.08} strokeWidth={0.8} />
    </svg>
  );
}

// Lightweight CSS-3D tech cube with orbiting badges for the hero
function TechCube3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const [rotation, setRotation] = useState({ rx: -12, ry: 25 });
  const [viewportWidth, setViewportWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setViewportWidth(window.innerWidth));
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);
  // Face normals in cube local space: front, right, left, back, top, bottom
  const faceNormals: Array<[number, number, number]> = useMemo(() => ([
    [0, 0, 1],
    [1, 0, 0],
    [-1, 0, 0],
    [0, 0, -1],
    [0, 1, 0],
    [0, -1, 0],
  ]), []);

  // Pool of logos we can cycle through (from Specialized section stack)
  const cubeIcons = useMemo(() => ([
    { key: 'react', Comp: SiReact, color: '#61DAFB' },
    { key: 'next', Comp: SiNextdotjs, color: '#FFFFFF' },
    { key: 'ts', Comp: SiTypescript, color: '#3178C6' },
    { key: 'tailwind', Comp: SiTailwindcss, color: '#38BDF8' },
    { key: 'shopify', Comp: SiShopify, color: '#95BF47' },
    { key: 'wordpress', Comp: SiWordpress, color: '#21759B' },
    { key: 'vercel', Comp: SiVercel, color: '#FFFFFF' },
    { key: 'netlify', Comp: SiNetlify, color: '#00AD9F' },
    { key: 'woo', Comp: SiWoocommerce, color: '#96588A' },
    { key: 'figma', Comp: SiFigma, color: '#F24E1E' },
    { key: 'github', Comp: SiGithub, color: '#FFFFFF' },
    { key: 'postgres', Comp: SiPostgresql, color: '#336791' },
    { key: 'stripe', Comp: SiStripe, color: '#635BFF' },
  ]), []);
  const totalIcons = cubeIcons.length;
  const [faceIconIndices, setFaceIconIndices] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const lastSwapRef = useRef<number[]>([0, 0, 0, 0, 0, 0]);
  const globalIndexRef = useRef<number>(6);
  const prevVisibilityRef = useRef<boolean[]>([true, true, true, true, true, true]);
  const visInitRef = useRef(false);
  const VISIBLE_THRESHOLD = 0.12; // clearly front-facing
  const HIDDEN_THRESHOLD = -0.05; // clearly behind
  const MIN_SWAP_INTERVAL_MS = 300;

  // Card content cycling
  const cardOptions = [
    {
      label: "Built with",
      content: "TypeScript + React",
      color: "text-blue-400"
    },
    {
      label: "Core Web Vitals", 
      content: "90+ Scores",
      color: "text-green-400"
    },
    {
      label: "SEO Optimized",
      content: "Google Ranked",
      color: "text-yellow-400"
    },
    {
      label: "Mobile First",
      content: "Responsive Design",
      color: "text-purple-400"
    },
    {
      label: "Performance",
      content: "Lightning Fast",
      color: "text-orange-400"
    },
    {
      label: "Accessibility",
      content: "WCAG Compliant",
      color: "text-cyan-400"
    },
    {
      label: "E-commerce",
      content: "Shopify + WooCommerce",
      color: "text-pink-400"
    },
    {
      label: "AI Integration",
      content: "Smart Automation",
      color: "text-indigo-400"
    }
  ];

  const [cardIndex, setCardIndex] = useState(0);

  // Card content cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex(prev => (prev + 1) % cardOptions.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, [cardOptions.length]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
    dragStartRef.current = { x: e.clientX, y: e.clientY, rx: rotation.rx, ry: rotation.ry };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return; // No hover effects; only when grabbing
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setRotation({ rx: dragStartRef.current.rx - dy * 0.4, ry: dragStartRef.current.ry + dx * 0.4 });
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
  };

  const onLeave = () => void 0; // no hover effects

  // Gentle autorotation when not dragging
  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (!isDraggingRef.current) {
        setRotation(prev => ({ rx: prev.rx, ry: prev.ry + 0.15 }));
      }
      // Cycle logos on faces that are not in view (z of rotated normal < -threshold)
      const now = performance.now();
      const rx = rotation.rx;
      const ry = rotation.ry;
      const toRad = (deg: number) => (deg * Math.PI) / 180;
      const cosY = Math.cos(toRad(ry));
      const sinY = Math.sin(toRad(ry));
      const cosX = Math.cos(toRad(rx));
      const sinX = Math.sin(toRad(rx));

      const rotatedZFor = (n: [number, number, number]) => {
        // Apply Y then X rotation to normal
        const x1 = n[0] * cosY + n[2] * sinY;
        const z1 = -n[0] * sinY + n[2] * cosY;
        const y2 = n[1] * cosX - z1 * sinX;
        const z2 = n[1] * sinX + z1 * cosX;
        return z2;
      };

      // Initialize visibility on first run
      if (!visInitRef.current) {
        prevVisibilityRef.current = faceNormals.map(n => rotatedZFor(n) > VISIBLE_THRESHOLD);
        visInitRef.current = true;
      }

      let next = faceIconIndices;
      let changed = false;
      const used = new Set<number>(next);
      for (let i = 0; i < faceNormals.length; i++) {
        const z = rotatedZFor(faceNormals[i]);
        const wasVisible = prevVisibilityRef.current[i];
        let nowVisible = wasVisible;
        if (z > VISIBLE_THRESHOLD) nowVisible = true; else if (z < HIDDEN_THRESHOLD) nowVisible = false;

        if (wasVisible && !nowVisible && now - lastSwapRef.current[i] > MIN_SWAP_INTERVAL_MS) {
          // Transitioned from visible to hidden → swap
          let candidate = globalIndexRef.current % totalIcons;
          let guard = 0;
          while (used.has(candidate) && guard < totalIcons) {
            candidate = (candidate + 1) % totalIcons;
            guard++;
          }
          const updated = next.slice();
          updated[i] = candidate;
          next = updated;
          used.add(candidate);
          globalIndexRef.current = (candidate + 1) % totalIcons;
          lastSwapRef.current[i] = now;
          changed = true;
        }

        prevVisibilityRef.current[i] = nowVisible;
      }
      if (changed) setFaceIconIndices(next);

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [faceNormals, faceIconIndices, totalIcons, rotation.rx, rotation.ry]);

  const size = (() => {
    const w = viewportWidth;
    if (w < 360) return 145; // slightly smaller on very small phones
    if (w < 420) return 165;
    if (w < 480) return 185;
    if (w < 640) return 205;
    if (w < 768) return 260;
    if (w < 1024) return 300;
    return 320;
  })();
  const depth = size / 2;
  const combinedRx = rotation.rx;
  const combinedRy = rotation.ry;
  const orbit = Math.round(size * 1.35);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[420px] md:h-[600px] lg:h-[700px] flex items-center justify-center select-none -mt-2"
    >
      {/* Orbit ring */}
      <motion.div
        className="absolute rounded-full border border-gray-700/40"
        style={{ width: orbit, height: orbit, transform: "rotateX(70deg)" }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* 3D Cube */}
      <motion.div
        className="relative cursor-grab active:cursor-grabbing"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          transform: `perspective(900px) rotateX(${combinedRx}deg) rotateY(${combinedRy}deg)`
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onLeave}
        role="img"
        aria-label="Rotating technology cube. Drag to rotate."
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-xl bg-[#161616] border border-gray-700 flex items-center justify-center shadow-xl overflow-hidden"
          style={{ transform: `translateZ(${depth}px)` }}
        >
          {(() => {
            const { Comp, color } = cubeIcons[faceIconIndices[0]];
            return (
              <>
                <CircuitOverlay accent={color} />
                <motion.div 
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${color}33, transparent 60%)` }}
                  animate={{ opacity: [0.25, 0.6, 0.25] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `repeating-linear-gradient( to bottom, ${color}26 0px, ${color}26 2px, transparent 2px, transparent 10px )`
                  }}
                  animate={{ backgroundPositionY: ["0%", "100%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <motion.div 
                  className="absolute left-0 right-0 h-16"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
                  animate={{ y: ["-30%", "130%"] }}
                  transition={{ duration: 6.6, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <div className="group/icon relative">
                  <motion.div
                    className="absolute -inset-6 rounded-full pointer-events-none opacity-60 group-hover/icon:opacity-100"
                    style={{ background: `radial-gradient(circle, ${color}73, ${color}00 70%)`, filter: "blur(16px)", mixBlendMode: "screen" as any }}
                    animate={{ opacity: [0.6, 0.85, 0.6], scale: [0.98, 1.02, 0.98] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  />
                  <Comp className="w-16 h-16 transition-all duration-300" style={{ color, filter: `drop-shadow(0 0 36px ${color}E6) brightness(1.15)` }} />
                </div>
              </>
            );
          })()}
        </div>
        <div
          className="absolute inset-0 rounded-xl bg-[#161616] border border-gray-700/80 flex items-center justify-center shadow-xl overflow-hidden"
          style={{ transform: `rotateY(90deg) translateZ(${depth}px)` }}
        >
          {(() => {
            const { Comp, color, key } = cubeIcons[faceIconIndices[1]];
            const iconSizeClasses = key === 'woo' ? "w-20 h-20" : "w-16 h-16";
            return (
              <>
                <CircuitOverlay accent={color} />
                <motion.div 
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${color}2E, transparent 60%)` }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <motion.div 
                  className="absolute left-0 right-0 h-16"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
                  animate={{ y: ["130%", "-30%"] }}
                  transition={{ duration: 7.2, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `repeating-linear-gradient( to right, ${color}1F 0px, ${color}1F 2px, transparent 2px, transparent 12px )`
                  }}
                  animate={{ backgroundPositionX: ["0%", "100%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <div className="group/icon relative">
                  <motion.div
                    className="absolute -inset-6 rounded-full pointer-events-none opacity-60 group-hover/icon:opacity-100"
                    style={{ background: `radial-gradient(circle, ${color}66, ${color}00 70%)`, filter: "blur(16px)", mixBlendMode: "screen" as any }}
                    animate={{ opacity: [0.55, 0.85, 0.55], scale: [0.98, 1.02, 0.98] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  />
                  <Comp className={`${iconSizeClasses} transition-all duration-300`} style={{ color, filter: `drop-shadow(0 0 32px ${color}F2) brightness(1.1)` }} />
                </div>
              </>
            );
          })()}
        </div>
        <div
          className="absolute inset-0 rounded-xl bg-[#161616] border border-gray-700/80 flex items-center justify-center shadow-xl overflow-hidden"
          style={{ transform: `rotateY(-90deg) translateZ(${depth}px)` }}
        >
          {(() => {
            const { Comp, color, key } = cubeIcons[faceIconIndices[2]];
            const iconSizeClasses = key === 'woo' ? "w-20 h-20" : "w-16 h-16";
            return (
              <>
                <CircuitOverlay accent={color} />
                <motion.div 
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${color}38, transparent 60%)` }}
                  animate={{ opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <motion.div 
                  className="absolute left-0 right-0 h-16"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
                  animate={{ y: ["-30%", "130%"] }}
                  transition={{ duration: 6.6, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage: `repeating-linear-gradient( to bottom, ${color}2E 0px, ${color}2E 2px, transparent 2px, transparent 10px )`
                  }}
                  animate={{ backgroundPositionY: ["100%", "0%"] }}
                  transition={{ duration: 7.4, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <div className="group/icon relative">
                  <motion.div
                    className="absolute -inset-6 rounded-full pointer-events-none opacity-60 group-hover/icon:opacity-100"
                    style={{ background: `radial-gradient(circle, ${color}73, ${color}00 70%)`, filter: "blur(16px)", mixBlendMode: "screen" as any }}
                    animate={{ opacity: [0.55, 0.85, 0.55], scale: [0.98, 1.02, 0.98] }}
                    transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  />
                  <Comp className={`${iconSizeClasses} transition-all duration-300`} style={{ color, filter: `drop-shadow(0 0 34px ${color}F2) brightness(1.12)` }} />
                </div>
              </>
            );
          })()}
        </div>
        <div
          className="absolute inset-0 rounded-xl bg-[#161616] border border-gray-700/80 flex items-center justify-center shadow-xl overflow-hidden"
          style={{ transform: `rotateY(180deg) translateZ(${depth}px)` }}
        >
          {(() => {
            const { Comp, color, key } = cubeIcons[faceIconIndices[3]];
            const iconSizeClasses = key === 'woo' ? "w-20 h-20" : "w-16 h-16";
            return (
              <>
                <CircuitOverlay accent={color} />
                <motion.div 
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${color}38, transparent 60%)` }}
                  animate={{ opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <motion.div 
                  className="absolute left-0 right-0 h-16"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
                  animate={{ y: ["130%", "-30%"] }}
                  transition={{ duration: 7.8, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage: `repeating-linear-gradient( to right, ${color}2E 0px, ${color}2E 2px, transparent 2px, transparent 12px )`
                  }}
                  animate={{ backgroundPositionX: ["100%", "0%"] }}
                  transition={{ duration: 8.4, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <div className="group/icon relative">
                  <motion.div
                    className="absolute -inset-6 rounded-full pointer-events-none opacity-60 group-hover/icon:opacity-100"
                    style={{ background: `radial-gradient(circle, ${color}73, ${color}00 70%)`, filter: "blur(16px)", mixBlendMode: "screen" as any }}
                    animate={{ opacity: [0.55, 0.85, 0.55], scale: [0.98, 1.02, 0.98] }}
                    transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  />
                  <Comp className={`${iconSizeClasses} transition-all duration-300`} style={{ color, filter: `drop-shadow(0 0 34px ${color}F2) brightness(1.12)` }} />
                </div>
              </>
            );
          })()}
        </div>
        <div
          className="absolute inset-0 rounded-xl bg-[#161616] border border-gray-700/80 flex items-center justify-center shadow-xl overflow-hidden"
          style={{ transform: `rotateX(90deg) translateZ(${depth}px)` }}
        >
          {(() => {
            const { Comp, color, key } = cubeIcons[faceIconIndices[4]];
            const iconSizeClasses = key === 'woo' ? "w-20 h-20" : "w-16 h-16";
            return (
              <>
                <CircuitOverlay accent={color} />
                <motion.div 
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${color}38, transparent 60%)` }}
                  animate={{ opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <motion.div 
                  className="absolute left-0 right-0 h-16"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
                  animate={{ y: ["-30%", "130%"] }}
                  transition={{ duration: 6.4, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage: `repeating-linear-gradient( to bottom, ${color}33 0px, ${color}33 2px, transparent 2px, transparent 10px )`
                  }}
                  animate={{ backgroundPositionY: ["0%", "100%"] }}
                  transition={{ duration: 6.8, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <div className="group/icon relative">
                  <motion.div
                    className="absolute -inset-6 rounded-full pointer-events-none opacity-60 group-hover/icon:opacity-100"
                    style={{ background: `radial-gradient(circle, ${color}73, ${color}00 70%)`, filter: "blur(16px)", mixBlendMode: "screen" as any }}
                    animate={{ opacity: [0.48, 0.82, 0.48], scale: [0.96, 1.06, 0.96] }}
                    transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  />
                  <Comp className={`${iconSizeClasses} transition-all duration-300`} style={{ color, filter: `drop-shadow(0 0 32px ${color}F2) brightness(1.12)` }} />
                </div>
              </>
            );
          })()}
        </div>
        <div
          className="absolute inset-0 rounded-xl bg-[#161616] border border-gray-700/80 flex items-center justify-center shadow-xl overflow-hidden"
          style={{ transform: `rotateX(-90deg) translateZ(${depth}px)` }}
        >
          {(() => {
            const { Comp, color, key } = cubeIcons[faceIconIndices[5]];
            const iconSizeClasses = key === 'woo' ? "w-20 h-20" : "w-16 h-16";
            return (
              <>
                <CircuitOverlay accent={color} />
                <motion.div 
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${color}38, transparent 60%)` }}
                  animate={{ opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <motion.div 
                  className="absolute left-0 right-0 h-16"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
                  animate={{ y: ["130%", "-30%"] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage: `repeating-linear-gradient( to right, ${color}2E 0px, ${color}2E 2px, transparent 2px, transparent 12px )`
                  }}
                  animate={{ backgroundPositionX: ["0%", "100%"] }}
                  transition={{ duration: 8.2, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <div className="group/icon relative">
                  <motion.div
                    className="absolute -inset-6 rounded-full pointer-events-none opacity-60 group-hover/icon:opacity-100"
                    style={{ background: `radial-gradient(circle, ${color}73, ${color}00 70%)`, filter: "blur(16px)", mixBlendMode: "screen" as any }}
                    animate={{ opacity: [0.55, 0.85, 0.55], scale: [0.98, 1.02, 0.98] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  />
                  <Comp className={`${iconSizeClasses} transition-all duration-300`} style={{ color, filter: `drop-shadow(0 0 34px ${color}F2) brightness(1.12)` }} />
                </div>
              </>
            );
          })()}
        </div>
      </motion.div>

      {/* Enhanced dynamic floating card */}
      <motion.div
        className="absolute top-1 -right-2 sm:top-2 sm:-right-2 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-gray-600/50 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 shadow-2xl backdrop-blur-sm overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,26,0.9) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
        initial={{ y: -15, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        whileHover={{ 
          scale: 1.02, 
          y: -2,
          transition: { duration: 0.2 }
        }}
      >
        {/* Animated background glow */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${cardOptions[cardIndex].color.replace('text-', '').replace('-400', '')}20, transparent 70%)`
          }}
          key={`glow-${cardIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Subtle scan line effect */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ 
            y: [0, 60, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="text-xs text-gray-400 font-medium tracking-wide uppercase relative z-10"
          key={`label-${cardIndex}`}
          initial={{ opacity: 0, y: 8, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -8, rotateX: 90 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {cardOptions[cardIndex].label}
        </motion.div>
        
        <motion.div 
          className={`font-bold text-sm sm:text-base md:text-lg mt-1 sm:mt-2 relative z-10 ${cardOptions[cardIndex].color}`}
          key={`content-${cardIndex}`}
          initial={{ opacity: 0, y: 15, scale: 0.95, rotateY: -15 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, y: -15, scale: 1.05, rotateY: 15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            textShadow: `0 0 20px ${cardOptions[cardIndex].color.replace('text-', '').replace('-400', '')}40`,
            filter: `drop-shadow(0 0 8px ${cardOptions[cardIndex].color.replace('text-', '').replace('-400', '')}30)`
          }}
        >
          {cardOptions[cardIndex].content}
        </motion.div>
        
        {/* Animated accent line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${cardOptions[cardIndex].color.replace('text-', '').replace('-400', '')}60, ${cardOptions[cardIndex].color.replace('text-', '').replace('-400', '')}20)`
          }}
          key={`accent-${cardIndex}`}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        {/* Corner accent dots */}
        <motion.div 
          className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: cardOptions[cardIndex].color.replace('text-', '').replace('-400', '') }}
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full opacity-40"
            style={{ 
              backgroundColor: cardOptions[cardIndex].color.replace('text-', '').replace('-400', ''),
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Ambient glows */}
      <div className="absolute -top-8 -left-10 w-32 h-32 bg-maverick-orange/30 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute -bottom-8 -right-10 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl" aria-hidden="true"></div>
    </div>
  );
}

export default function WebServicesAirdrie() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Track page view for analytics
  useEffect(() => {
    console.log("Web Services page viewed");
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const breadcrumbs = [
    { name: "Home", url: "https://mavericksedge.ca/" },
    { name: "Services", url: "https://mavericksedge.ca/services-edmonton-alberta" },
    { name: "Web Development", url: "https://mavericksedge.ca/web-design-services-airdrie" }
  ];

  const coreServices = [
    {
      icon: <LayoutIcon className="h-10 w-10 text-maverick-orange" />,
      title: "Custom Website Design",
      description: "We start with your sales story and build the site around it. Clear paths, clean layouts, and fast pages that help people choose you.",
      features: ["Mobile first", "Fast on real devices", "Accessible by default", "Built to convert"],
      price: "From $1,200"
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-maverick-orange" />,
      title: "E‑commerce that sells",
      description: "Shopify and WooCommerce stores tuned for speed and trust. Fewer clicks to checkout and a smoother mobile flow.",
      features: ["Payments that just work", "Inventory and shipping", "Mobile checkout", "Local delivery options"],
      price: "From $2,500"
    },
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Web Application Development",
      description: "Dashboards, booking systems, internal tools. We design for the job to be done and integrate with your stack.",
      features: ["Custom features", "Database integration", "User roles", "API integrations"],
      price: "From $3,500"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-maverick-orange" />,
      title: "Mobile-Responsive Design",
      description: "Most visitors are on their phones. We design touch-first interfaces and test on real devices.",
      features: ["Touch friendly", "Fast on 4G", "Cross‑device testing", "PWA ready"],
      price: "Included in all packages"
    }
  ];

  const techLogos: LogoItem[] = [
    { node: <SiReact className="text-white transition-colors duration-300 group-hover/item:text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white transition-colors duration-300" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-white transition-colors duration-300 group-hover/item:text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-white transition-colors duration-300 group-hover/item:text-[#38BDF8]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiShopify className="text-white transition-colors duration-300 group-hover/item:text-[#95BF47]" />, title: "Shopify", href: "https://www.shopify.com" },
    { node: <SiWordpress className="text-white transition-colors duration-300 group-hover/item:text-[#21759B]" />, title: "WordPress", href: "https://wordpress.org" },
    { node: <SiVercel className="text-white transition-colors duration-300" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiNetlify className="text-white transition-colors duration-300 group-hover/item:text-[#00AD9F]" />, title: "Netlify", href: "https://www.netlify.com" },
    {
      node: (
        <div className="flex items-center justify-center h-full w-full scale-150">
          <SiWoocommerce className="text-white transition-colors duration-300 group-hover/item:text-[#96588A] w-full h-full" />
        </div>
      ),
      title: "WooCommerce",
      href: "https://woocommerce.com"
    },
    { node: <SiFigma className="text-white transition-colors duration-300 group-hover/item:text-[#F24E1E]" />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiGithub className="text-white transition-colors duration-300" />, title: "GitHub", href: "https://github.com" },
    { node: <SiPostgresql className="text-white transition-colors duration-300 group-hover/item:text-[#336791]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiStripe className="text-white transition-colors duration-300 group-hover/item:text-[#635BFF]" />, title: "Stripe", href: "https://stripe.com" },
    {
      node: (
        <div className="flex items-center justify-center h-full w-full scale-75">
          <ReplitIcon />
        </div>
      ),
      title: "Replit",
      href: "https://replit.com"
    },
    { node: <CursorIcon />, title: "Cursor", href: "https://cursor.sh" },
    { node: <SiWebflow className="text-white transition-colors duration-300 group-hover/item:text-[#4353FF]" />, title: "Webflow", href: "https://webflow.com" },
  ];

  const specializedServices = [
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Cursor & Replit builds",
      description: "Plan, design, and ship in Cursor with Replit previews. Clean code, polished UI, fast iteration.",
      technologies: ["Cursor", "Replit", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "Shopify stores",
      description: "Theme customization and app integrations with a focus on speed and trust.",
      technologies: ["Shopify", "Liquid", "App Integration", "Payment Gateways"]
    },
    {
      icon: <Search className="h-10 w-10 text-maverick-orange" />,
      title: "SEO‑ready by design",
      description: "Technical foundations, clean IA, and content guidance. Launch with the basics done right.",
      technologies: ["Technical SEO", "Local Schema", "Core Web Vitals", "Airdrie Keywords"]
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Hosting and care",
      description: "Canadian hosting, SSL, backups, and updates. Your site stays healthy and secure.",
      technologies: ["Canadian Hosting", "SSL Security", "Daily Backups", "24/7 Monitoring"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery that matters",
      description: "We learn how you win business today. What customers ask. Where deals stall. That shapes the plan.",
      deliverables: ["Market Analysis", "Competitor Research", "Technical Requirements", "Project Roadmap"]
    },
    {
      number: "02",
      title: "Strategic design",
      description: "Wireframes and flows first. Then the visuals. We keep the path to action short and obvious.",
      deliverables: ["Wireframes", "Visual Designs", "Interactive Prototype", "Brand Integration"]
    },
    {
      number: "03",
      title: "Development",
      description: "Modern frameworks, type safety, and performance budgets. Built for real devices and real traffic.",
      deliverables: ["Responsive Website", "CMS Integration", "Performance Optimization", "Security Implementation"]
    },
    {
      number: "04",
      title: "Search basics",
      description: "Clean HTML, fast loading, structured data, and content guidance. We set you up to earn rankings.",
      deliverables: ["On-Page SEO", "Local Schema", "Google Analytics", "Search Console Setup"]
    },
    {
      number: "05",
      title: "Testing",
      description: "Accessibility, browser, and device checks. We tune for speed and remove friction.",
      deliverables: ["Cross-Browser Testing", "Mobile Testing", "Performance Report", "Accessibility Audit"]
    },
    {
      number: "06",
      title: "Launch and support",
      description: "We launch, measure, and keep improving. You get a clear handover and a friendly support channel.",
      deliverables: ["Website Launch", "Training Materials", "Maintenance Plan", "Support Access"]
    }
  ];

  // Creative grid content inspired by Home cascade (web applications)
  const webAppTiles = [
    {
      id: "custom-sites",
      title: "Custom Website Design",
      blurb:
        "Clean, honest interfaces that make the next step obvious. Built for real visitors and real devices so your story lands and your pipeline grows.",
      media: "https://mavericksedge.ca/videos/Portfolio_Video_3.webm",
      points: [
        "Clear paths to action on every page",
        "Mobile‑first layouts tested on real devices",
        "Accessible by default (WCAG‑minded)",
        "Fast loads with image/video optimization",
        "Easy edits with your preferred CMS",
        "Built to scale as your content grows",
      ],
      icon: <Code className="w-5 h-5 text-maverick-orange" />,
    },
    {
      id: "web-apps",
      title: "Custom Web Applications",
      blurb:
        "Dashboards, portals, and internal tools that replace spreadsheets and remove the busywork. Clarity for your team, momentum for your operations.",
      media: "https://mavericksedge.ca/videos/Portfolio_Video_6.webm",
      points: [
        "Role‑based access and secure authentication",
        "Clean data views with filters and exports",
        "Workflow automation and approvals",
        "API integrations with your stack (CRM/ERP)",
        "Audit trails and activity history",
        "Type‑safe code for long‑term maintainability",
      ],
      icon: <Wand2 className="w-5 h-5 text-maverick-orange" />,
    },
    {
      id: "ecommerce",
      title: "Next‑Gen E‑commerce",
      blurb:
        "Shopify and WooCommerce storefronts tuned for speed, trust, and a checkout that feels effortless—especially on mobile.",
      media: "https://mavericksedge.ca/videos/Portfolio_Video_9.webm",
      points: [
        "Fast product pages with clean information design",
        "Trust signals and social proof where it matters",
        "Streamlined mobile checkout with fewer taps",
        "Payment, tax, and shipping integrations",
        "Inventory sync and order notifications",
        "Built‑in analytics to track what’s working",
      ],
      icon: <ShoppingCart className="w-5 h-5 text-maverick-orange" />,
    },
    {
      id: "seo-performance",
      title: "SEO & Performance Foundations",
      blurb:
        "Search‑ready from day one. Technical SEO, structured data, and Core Web Vitals tuned for real‑world devices and Airdrie search intent.",
      media: "https://mavericksedge.ca/videos/Portfolio_Video_27.webm",
      points: [
        "Airdrie‑relevant keyword mapping and titles",
        "Structured data (schema) for rich results",
        "Clean HTML and internal linking",
        "Core Web Vitals performance budgets",
        "Image/video compression and lazy loading",
        "GA4 + Search Console wired for insights",
      ],
      icon: <Gauge className="w-5 h-5 text-maverick-orange" />,
    },
  ] as const;

  // testimonials replaced by live Google reviews

  const faqItems = [
    {
      question: "How much does web design cost in Airdrie?",
      answer: "Our Airdrie web design services start at $850 for basic business websites and range up to $10,000+ for complex e-commerce and custom applications. We provide transparent pricing and free consultations to discuss your specific needs and budget."
    },
    {
      question: "How long does it take to build a website in Airdrie?",
      answer: "Most Airdrie business websites take 4-8 weeks from start to finish. Simple brochure sites can be completed in 2-3 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We provide detailed timelines during our discovery phase."
    },
    {
      question: "Do you provide website hosting for Airdrie businesses?",
      answer: "Yes, we offer Canadian web hosting specifically optimized for Alberta businesses. Our hosting includes SSL certificates, daily backups, security monitoring, and 24/7 Airdrie-based support. Plans start at $25/month."
    },
    {
      question: "Can you help with SEO for my Airdrie business website?",
      answer: "Absolutely! All our websites include basic SEO optimization with Airdrie and Alberta keyword targeting. We also offer comprehensive SEO services including local optimization, Google My Business management, and ongoing search marketing."
    },
    {
      question: "Do you redesign existing websites for Airdrie businesses?",
      answer: "Yes, we specialize in website redesigns that improve user experience, search rankings, and conversion rates. We can work with your existing content and branding or create a completely fresh approach."
    },
    {
      question: "What makes your Airdrie web design different from competitors?",
      answer: "Our deep understanding of the Airdrie and Alberta business landscape, combined with cutting-edge design and development practices, sets us apart. We focus on local SEO, mobile optimization, and conversion-driven design that gets results."
    }
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mavericks Edge Web Design Airdrie",
    "image": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png",
    "telephone": "+1-250-883-8849",
    "email": "info@mavericksedge.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6908 100 Ave NW, Suite B",
      "addressLocality": "Edmonton",
      "addressRegion": "Alberta",
      "postalCode": "T6A 0G2",
      "addressCountry": "Canada"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.5461,
      "longitude": -113.4938
    },
    "url": "https://mavericksedge.ca/web-design-services-airdrie",
    "sameAs": [
      "https://x.com/mavericksedge",
      "https://www.facebook.com/mavericksedge",
      "https://www.instagram.com/mavericksedge",
      "https://www.linkedin.com/company/mavericks-edge/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$1200-$10000",
    "areaServed": [
      {
        "@type": "City",
        "name": "Airdrie"
      },
      {
        "@type": "City",
        "name": "Edmonton"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Alberta"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 53.5461,
        "longitude": -113.4938
      },
      "geoRadius": "500000"
    }
  };

  // Dynamic FAQ schema from on-page content
  const faqSchemaDynamic = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } as const;

  return (
    <div>
      <SEOHead 
        title="Mavericks Edge | Airdrie Web Design and Development"
        description="Professional Airdrie web design and development. Build responsive, SEO-optimized websites that drive results and help your business grow. Free quote today!"
        keywords="Airdrie website design, website design Airdrie, Airdrie web design, web development Airdrie, Airdrie websites"
        canonicalUrl="https://mavericksedge.ca/web-design-services-airdrie"
        ogTitle="Mavericks Edge | Airdrie Web Design and Development"
        ogDescription="Affordable Airdrie web design and development for businesses that want to stand out online. Fast, responsive, and SEO-optimized websites that convert visitors into customers."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
        ogType="website"
      />
      
      <StructuredData data={webDevelopmentServiceSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={localSchema} />
      <StructuredData data={faqSchemaDynamic} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section with clearer narrative */}
        <ScrollFadeSection
          id="hero"
          fadeInPoint={0.4}
          fadeOutPoint={0.6}
          fadeInDuration={1.2}
          fadeOutDuration={1.6}
          initialOpacity={0}
          minOpacity={0.1}
          useFallback={true}
        >
          <div className="pt-28 sm:pt-32 md:pt-32 pb-24 sm:pb-28 md:pb-16 px-0 min-h-[100svh] md:min-h-0 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 to-transparent"></div>
            <div className="container mx-auto px-0 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
              {/* Mobile layout - creative, stacked */}
              <div className="block lg:hidden relative min-h-[calc(100svh-7rem)] flex flex-col justify-start pt-8 pb-[360px] sm:pb-[440px] md:pb-[620px]">
                <div className="relative z-10 px-0">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-heading font-extrabold tracking-wide leading-tight mt-4 mb-3"
                  >
                    <span className="block text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Airdrie Web Design & Development
                    </span>
                    <span className="block text-3xl sm:text-4xl md:text-5xl">
                      <GradientText 
                        colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                        animationSpeed={6}
                      >
                        that converts Visitors Into Clients
                      </GradientText>
                    </span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[15px] text-[#AAAAAA] leading-relaxed mb-5 pr-16"
                  >
                    Most websites look fine. Fewer move the business. We plan and build a site around your sales story so visitors know what to do and why it matters.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col gap-3 items-start pr-16"
                  >
                    <Link href="/contact-edmonton-web-design">
                      <a className="maverick-button maverick-button-primary inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-medium self-start mr-16">
                        Get Free Consultation
                      </a>
                    </Link>
                    <ShinyBorderButton 
                      href={ROUTES.PRICING.WEB_DESIGN}
                      lightColor="#F15A29"
                      duration={6}
                      lightWidth={200}
                      borderWidth={1}
                      className="maverick-button maverick-button-outline rounded-full px-6 py-3 text-base self-start mr-16"
                    >
                      Web Design Pricing
                    </ShinyBorderButton>
                  </motion.div>
                </div>

                <motion.div 
                  className="absolute bottom-6 sm:bottom-24 md:bottom-16 left-0 right-0 flex justify-center pointer-events-none"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <TechCube3D />
                </motion.div>

                {/* ambient accents */}
                <div className="absolute -top-6 -left-8 w-24 h-24 bg-maverick-orange/20 rounded-full blur-2xl" aria-hidden="true"></div>
                <div className="absolute -bottom-6 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl" aria-hidden="true"></div>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                <div className="pr-20 sm:pr-24 md:pr-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="font-heading font-extrabold tracking-wide leading-tight text-left mb-4 mt-16 sm:mt-0">
                       <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[56px] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                         Airdrie Web Design & Development
                       </span>
                       <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[58px]">
                         <GradientText 
                           colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                           animationSpeed={6}
                         >
                           that converts Visitors Into Clients
                         </GradientText>
                       </span>
                     </h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-[#AAAAAA] max-w-2xl leading-relaxed sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 sm:mb-6 md:mb-8"
                    >
                      Most websites look fine. Fewer move the business. We plan and build a site around your sales story so visitors know what to do and why it matters.
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-start items-start mb-6 sm:mb-8"
                    >
                       <Link href="/contact-edmonton-web-design">
                         <a className="maverick-button maverick-button-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-base sm:px-7 sm:py-3.5 sm:text-base md:px-8 md:py-4 md:text-lg font-medium">
                           Get Free Consultation
                         </a>
                       </Link>
                      <ShinyBorderButton 
                        href={ROUTES.PRICING.WEB_DESIGN}
                        lightColor="#F15A29"
                        duration={6}
                        lightWidth={200}
                        borderWidth={1}
                        className="maverick-button maverick-button-outline rounded-full px-5 py-3 text-base sm:px-6 sm:py-3 sm:text-base md:px-6 md:py-4 md:text-lg"
                      >
                        Web Design Pricing
                      </ShinyBorderButton>
                    </motion.div>
                    <div className="hidden md:flex items-center gap-6 text-sm text-[#AAAAAA]">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>100+ Airdrie Projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>5-Star Client Reviews</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Local Support Team</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Desktop cube - positioned in grid */}
                <motion.div 
                  className="hidden lg:block relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <TechCube3D />
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollFadeSection>



        {/* Service Cascade Cards (from homepage) */}
        <LazySection threshold={0.1} rootMargin="50px">
          <ScrollFadeSection
            id="service-cascade"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={1}
            fadeOutDuration={1.8}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
          >
            <section className="bg-black">
              <WebServicesCascadeSection />
            </section>
          </ScrollFadeSection>
        </LazySection>

        {/* Specialized Services */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Specialized Website Development
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
                Advanced solutions for specific business needs and platforms
              </p>
            </motion.div>

            {/* Specialized Services - Creative Layout */}
            <div className="space-y-32 mt-20">
              {/* Web Portals & Multi-Tenant Platforms */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-maverick-orange to-orange-600 rounded-2xl flex items-center justify-center">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Web Portals, Membership & Multi-Tenant Platforms</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-maverick-orange to-orange-600 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-[#AAAAAA] leading-relaxed">
                      We build secure, scalable platforms for organizations that need to serve multiple user groups or communities.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Member portals with role-based access and secure authentication (perfect for associations, nonprofits, and educational institutions)",
                        "Scalable subscription platforms with tiered access to premium content, gated communities, or online courses",
                        "Multi-tenant SaaS solutions where each client gets their own branded dashboard or workspace",
                        "Automated billing cycles with retry logic, payment integrations, and revenue tracking",
                        "Member analytics showing engagement, churn risk, and lifetime value"
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-maverick-orange to-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-[#CCCCCC] leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Enhanced background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/20 to-orange-600/20 rounded-3xl blur-3xl"></div>
                    <motion.div 
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: "radial-gradient(circle at 30% 20%, rgba(255, 86, 48, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 138, 80, 0.1) 0%, transparent 50%)"
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-8 border border-gray-800 overflow-hidden">
                      {/* Animated circuit pattern overlay */}
                      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300" preserveAspectRatio="none">
                        <defs>
                          <pattern id="circuitPattern" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
                            <path d="M0,15 L10,15 L10,10 L20,10 L20,20 L30,20 L30,15 L40,15" stroke="currentColor" strokeWidth="1" fill="none" className="text-maverick-orange"/>
                            <path d="M5,0 L5,30 M15,0 L15,30 M25,0 L25,30 M35,0 L35,30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-maverick-orange"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
                      </svg>
                      
                      <div className="space-y-6 relative z-10">
                        {/* Enhanced header with pulsing status */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.div 
                              className="relative"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              <motion.div 
                                className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full"
                                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>
                            <span className="text-sm text-gray-400">Secure Portal</span>
                          </div>
                          <motion.div 
                            className="text-xs text-gray-500 px-2 py-1 bg-gray-800/50 rounded-full"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            Multi-tenant
                          </motion.div>
                        </div>
                        
                        {/* User Authentication Mockup */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="bg-gray-900/80 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
                        >
                          <div className="space-y-4">
                            {/* Login Form Header */}
                            <div className="text-center">
                              <motion.div
                                className="w-12 h-12 bg-gradient-to-br from-maverick-orange to-orange-600 rounded-xl mx-auto mb-3 flex items-center justify-center"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                <Shield className="w-6 h-6 text-white" />
                              </motion.div>
                              <h4 className="text-lg font-semibold text-white">Member Portal Access</h4>
                              <p className="text-xs text-gray-400">Secure authentication required</p>
                            </div>
                            
                            {/* Login Form */}
                            <div className="space-y-3">
                              <div>
                                <label className="text-xs text-gray-400 mb-1 block">Email Address</label>
                                <motion.div
                                  className="bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-600/50"
                                  whileFocus={{ borderColor: "#FF5630" }}
                                >
                                  <input 
                                    type="email" 
                                    placeholder="member@organization.com"
                                    className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                                    disabled
                                  />
                                </motion.div>
                              </div>
                              
                              <div>
                                <label className="text-xs text-gray-400 mb-1 block">Password</label>
                                <motion.div
                                  className="bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-600/50 flex items-center"
                                  whileFocus={{ borderColor: "#FF5630" }}
                                >
                                  <input 
                                    type="password" 
                                    placeholder="••••••••"
                                    className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                                    disabled
                                  />
                                  <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    <Eye className="w-4 h-4 text-gray-400" />
                                  </motion.div>
                                </motion.div>
                              </div>
                              
                              {/* Role Selection */}
                              <div>
                                <label className="text-xs text-gray-400 mb-1 block">Access Level</label>
                                <motion.div
                                  className="bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-600/50"
                                  whileFocus={{ borderColor: "#FF5630" }}
                                >
                                  <select className="w-full bg-transparent text-sm text-white outline-none" disabled>
                                    <option>Admin</option>
                                    <option>Member</option>
                                    <option>Guest</option>
                                  </select>
                                </motion.div>
                              </div>
                            </div>
                            
                            {/* Login Button */}
                            <motion.button
                              className="w-full bg-gradient-to-r from-maverick-orange to-orange-600 text-white py-3 rounded-lg font-medium text-sm relative overflow-hidden"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              disabled
                            >
                              <motion.div
                                className="absolute inset-0 bg-white/20"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              />
                              <span className="relative z-10">Authenticate</span>
                            </motion.button>
                            
                            {/* Security Features */}
                            <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                              <div className="flex items-center gap-1">
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <Shield className="w-3 h-3 text-green-400" />
                                </motion.div>
                                <span>2FA Enabled</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                >
                                  <Lock className="w-3 h-3 text-blue-400" />
                                </motion.div>
                                <span>SSL Encrypted</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Enhanced metrics with animated counters */}
                        <div className="grid grid-cols-2 gap-4">
                          <motion.div 
                            className="bg-gray-800/50 rounded-lg p-3 relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-maverick-orange/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="text-xs text-gray-400 mb-1">Active Users</div>
                            <motion.div 
                              className="text-lg font-bold text-white"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.8 }}
                            >
                              <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1 }}
                              >
                                2,847
                              </motion.span>
                            </motion.div>
                            <motion.div 
                              className="text-xs text-green-400 mt-1"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              +12% this month
                            </motion.div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-gray-800/50 rounded-lg p-3 relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="text-xs text-gray-400 mb-1">Revenue</div>
                            <motion.div 
                              className="text-lg font-bold text-green-400"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.8 }}
                            >
                              <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                              >
                                $47.2K
                              </motion.span>
                            </motion.div>
                            <motion.div 
                              className="text-xs text-green-400 mt-1"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            >
                              +8% growth
                            </motion.div>
                          </motion.div>
                        </div>
                        
                        {/* Enhanced service modules with staggered animations */}
                        <div className="space-y-2">
                          {["Admin Dashboard", "Member Portal", "Billing System", "Analytics Hub"].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20, scale: 0.95 }}
                              whileInView={{ opacity: 1, x: 0, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                duration: 0.5, 
                                delay: 1.5 + i * 0.15,
                                type: "spring",
                                stiffness: 100
                              }}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                            >
                              <motion.div 
                                className="w-2 h-2 bg-maverick-orange rounded-full relative"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  delay: i * 0.3
                                }}
                              >
                                <motion.div 
                                  className="absolute inset-0 w-2 h-2 bg-maverick-orange rounded-full"
                                  animate={{ 
                                    scale: [1, 2, 1], 
                                    opacity: [0.3, 0, 0.3] 
                                  }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    delay: i * 0.3
                                  }}
                                />
                              </motion.div>
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">{item}</span>
                              <motion.div 
                                className="ml-auto text-xs text-gray-500"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ 
                                  duration: 3, 
                                  repeat: Infinity,
                                  delay: i * 0.5
                                }}
                              >
                                Online
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI-Powered Business Automation */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="relative order-2 lg:order-1">
                    {/* Enhanced AI background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/20 to-orange-600/20 rounded-3xl blur-3xl"></div>
                    <motion.div 
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: "radial-gradient(circle at 20% 30%, rgba(255, 86, 48, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 138, 80, 0.15) 0%, transparent 50%)"
                      }}
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-8 border border-gray-800 overflow-hidden">
                      {/* AI Neural Network Pattern */}
                      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 300" preserveAspectRatio="none">
                        <defs>
                          <pattern id="neuralPattern" x="0" y="0" width="50" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="2" fill="currentColor" className="text-maverick-orange"/>
                            <circle cx="30" cy="15" r="2" fill="currentColor" className="text-maverick-orange"/>
                            <circle cx="20" cy="30" r="2" fill="currentColor" className="text-maverick-orange"/>
                            <path d="M10,10 L30,15 L20,30 L10,10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-maverick-orange"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#neuralPattern)" />
                      </svg>
                      
                      <div className="space-y-6 relative z-10">
                        {/* Enhanced AI Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.div 
                              className="relative"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <div className="w-3 h-3 bg-maverick-orange rounded-full"></div>
                              <motion.div 
                                className="absolute inset-0 w-3 h-3 bg-maverick-orange rounded-full"
                                animate={{ 
                                  scale: [1, 3, 1], 
                                  opacity: [0.6, 0, 0.6] 
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>
                            <span className="text-sm text-gray-400">AI Assistant</span>
                          </div>
                          <motion.div 
                            className="text-xs text-gray-500 px-2 py-1 bg-gray-800/50 rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Processing
                          </motion.div>
                        </div>
                        
                        {/* AI Chat Interface Mockup */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="bg-gray-900/80 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
                        >
                          <div className="space-y-4">
                            {/* Chat Header */}
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-700/50">
                              <motion.div
                                className="w-8 h-8 bg-gradient-to-br from-maverick-orange to-orange-600 rounded-full flex items-center justify-center"
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              >
                                <Wand2 className="w-4 h-4 text-white" />
                              </motion.div>
                              <div>
                                <h4 className="text-sm font-semibold text-white">AI Business Assistant</h4>
                                <p className="text-xs text-gray-400">Analyzing customer interactions</p>
                              </div>
                              <motion.div
                                className="ml-auto flex items-center gap-1"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-xs text-gray-400">Online</span>
                              </motion.div>
                            </div>
                            
                            {/* Chat Messages */}
                            <div className="space-y-3">
                              {/* Customer Message */}
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-start gap-2"
                              >
                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-xs text-white">C</span>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg px-3 py-2 max-w-[80%]">
                                  <p className="text-sm text-gray-300">"I'm interested in your premium package but need to know about pricing for my team of 15 people."</p>
                                  <span className="text-xs text-gray-500">2:34 PM</span>
                                </div>
                              </motion.div>
                              
                              {/* AI Response */}
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="flex items-start gap-2 justify-end"
                              >
                                <div className="bg-gradient-to-r from-maverick-orange to-orange-600 rounded-lg px-3 py-2 max-w-[80%]">
                                  <p className="text-sm text-white">"I'd be happy to help with pricing for your team! Let me pull up our enterprise options and schedule a call with our sales team."</p>
                                  <span className="text-xs text-orange-200">2:34 PM</span>
                                </div>
                                <div className="w-6 h-6 bg-gradient-to-br from-maverick-orange to-orange-600 rounded-full flex items-center justify-center">
                                  <Wand2 className="w-3 h-3 text-white" />
                                </div>
                              </motion.div>
                            </div>
                            
                            {/* AI Analysis Panel */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 1.5 }}
                              className="bg-gray-800/30 rounded-lg p-4 space-y-3"
                            >
                              <div className="text-xs text-gray-400 mb-2">AI Analysis</div>
                              
                              {/* Sentiment Analysis */}
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs">
                                  <span className="text-gray-400">Sentiment Score</span>
                                  <span className="text-green-400">Positive (94%)</span>
                                </div>
                                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                  <motion.div 
                                    className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "94%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                  />
                                </div>
                              </div>
                              
                              {/* Intent Classification */}
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                  <span className="text-gray-400">Intent:</span>
                                  <span className="text-white">Pricing Inquiry</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                  <span className="text-gray-400">Priority:</span>
                                  <span className="text-white">High</span>
                                </div>
                              </div>
                            </motion.div>
                            
                            {/* Action Items */}
                            <div className="space-y-2">
                              <div className="text-xs text-gray-400 mb-2">Automated Actions</div>
                              {["Lead scored: 87/100", "Sales team notified", "Follow-up scheduled", "CRM updated"].map((item, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: 10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: 2 + i * 0.1 }}
                                  className="flex items-center gap-2 text-xs text-gray-300"
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                  >
                                    <CheckCircle className="w-3 h-3 text-green-400" />
                                  </motion.div>
                                  {item}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-8 order-1 lg:order-2">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-maverick-orange to-orange-600 rounded-2xl flex items-center justify-center">
                        <Wand2 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">AI-Powered Business Automation</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-maverick-orange to-orange-600 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-[#AAAAAA] leading-relaxed">
                      Intelligent systems that handle routine tasks, qualify leads, and provide instant customer support while you focus on growth.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Smart chatbots that understand context and escalate complex queries to human agents seamlessly",
                        "Automated lead scoring and qualification based on behavior patterns and engagement metrics",
                        "Dynamic content personalization that adapts messaging based on user preferences and past interactions",
                        "Predictive analytics for inventory management, customer churn prevention, and revenue forecasting",
                        "Voice-activated business tools that integrate with your existing workflow and CRM systems"
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-maverick-orange to-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-[#CCCCCC] leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Real-Time Data & IoT Integration */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-maverick-orange to-orange-600 rounded-2xl flex items-center justify-center">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">Real-Time Data & IoT Integration</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-maverick-orange to-orange-600 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-[#AAAAAA] leading-relaxed">
                      Connect physical devices, sensors, and data streams to create intelligent systems that respond instantly to real-world conditions.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Live dashboards that visualize sensor data, equipment status, and environmental conditions in real-time",
                        "Automated alerts and notifications triggered by threshold breaches, equipment failures, or unusual patterns",
                        "Predictive maintenance systems that analyze historical data to prevent downtime before it happens",
                        "Integration with existing business systems (ERP, CRM) to create unified data ecosystems",
                        "Edge computing solutions that process data locally for faster response times and reduced latency"
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-maverick-orange to-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-[#CCCCCC] leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Enhanced IoT background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/20 to-orange-600/20 rounded-3xl blur-3xl"></div>
                    <motion.div 
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: "radial-gradient(circle at 40% 20%, rgba(255, 86, 48, 0.18) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(255, 138, 80, 0.12) 0%, transparent 50%)"
                      }}
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.01, 1]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-8 border border-gray-800 overflow-hidden">
                      
                      <div className="space-y-6 relative z-10">
                        {/* Enhanced IoT Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.div 
                              className="relative"
                              animate={{ 
                                scale: [1, 1.3, 1],
                                opacity: [0.8, 1, 0.8]
                              }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                            >
                              <div className="w-3 h-3 bg-maverick-orange rounded-full"></div>
                              <motion.div 
                                className="absolute inset-0 w-3 h-3 bg-maverick-orange rounded-full"
                                animate={{ 
                                  scale: [1, 2.5, 1], 
                                  opacity: [0.4, 0, 0.4] 
                                }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                              />
                            </motion.div>
                            <span className="text-sm text-gray-400">Live Data Stream</span>
                          </div>
                          <motion.div 
                            className="text-xs text-gray-500 px-2 py-1 bg-gray-800/50 rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                          >
                            2.3ms latency
                          </motion.div>
                        </div>
                        
                        {/* IoT Dashboard Mockup */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="bg-gray-900/80 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
                        >
                          <div className="space-y-4">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between pb-3 border-b border-gray-700/50">
                              <div className="flex items-center gap-3">
                                <motion.div
                                  className="w-8 h-8 bg-gradient-to-br from-maverick-orange to-orange-600 rounded-lg flex items-center justify-center"
                                  animate={{ rotate: [0, 5, -5, 0] }}
                                  transition={{ duration: 4, repeat: Infinity }}
                                >
                                  <Database className="w-4 h-4 text-white" />
                                </motion.div>
                                <div>
                                  <h4 className="text-sm font-semibold text-white">IoT Control Center</h4>
                                  <p className="text-xs text-gray-400">Real-time monitoring</p>
                                </div>
                              </div>
                              <motion.div
                                className="flex items-center gap-1"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-xs text-gray-400">All Systems Online</span>
                              </motion.div>
                            </div>
                            
                            {/* Sensor Data Grid */}
                            <div className="grid grid-cols-2 gap-3">
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-gray-800/50 rounded-lg p-3 relative overflow-hidden"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-maverick-orange/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="text-xs text-gray-400 mb-1">Temperature</div>
                                <motion.div 
                                  className="text-lg font-bold text-maverick-orange"
                                  animate={{ 
                                    textShadow: ["0 0 0px #FF5630", "0 0 10px #FF5630", "0 0 0px #FF5630"]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  23.4°C
                                </motion.div>
                                <div className="text-xs text-green-400 mt-1">Normal Range</div>
                              </motion.div>
                              
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="bg-gray-800/50 rounded-lg p-3 relative overflow-hidden"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="text-xs text-gray-400 mb-1">Humidity</div>
                                <motion.div 
                                  className="text-lg font-bold text-blue-400"
                                  animate={{ 
                                    textShadow: ["0 0 0px #60A5FA", "0 0 10px #60A5FA", "0 0 0px #60A5FA"]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                >
                                  67%
                                </motion.div>
                                <div className="text-xs text-green-400 mt-1">Optimal</div>
                              </motion.div>
                            </div>
                            
                            {/* Device Network Map */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 1 }}
                              className="bg-gray-800/30 rounded-lg p-4"
                            >
                              <div className="text-xs text-gray-400 mb-3">Device Network</div>
                              <div className="grid grid-cols-2 gap-2">
                                {[
                                  { name: "Sensor A1", status: "Online", signal: 95 },
                                  { name: "Sensor B2", status: "Online", signal: 87 },
                                  { name: "Gateway", status: "Connected", signal: 100 },
                                  { name: "Cloud Sync", status: "Active", signal: 92 }
                                ].map((device, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                                    className="flex items-center justify-between text-xs"
                                  >
                                    <div className="flex items-center gap-2">
                                      <motion.div
                                        className="w-1.5 h-1.5 bg-maverick-orange rounded-full"
                                        animate={{ 
                                          scale: [1, 1.3, 1],
                                          opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{ 
                                          duration: 2, 
                                          repeat: Infinity,
                                          delay: i * 0.3
                                        }}
                                      />
                                      <span className="text-gray-300">{device.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <div className="text-green-400">{device.status}</div>
                                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                            
                            {/* Real-time Data Visualization */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 1.5 }}
                              className="bg-gray-800/30 rounded-lg p-4"
                            >
                              <div className="text-xs text-gray-400 mb-3">Data Flow Visualization</div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>0s</span>
                                  <span>5s</span>
                                  <span>10s</span>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
                                  <motion.div 
                                    className="h-full bg-gradient-to-r from-maverick-orange to-orange-600 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 3, delay: 0.5 }}
                                  />
                                  <motion.div
                                    className="absolute inset-0 bg-white/20 rounded-full"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                  />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                  <span>Data packets: 1,247</span>
                                  <span>Throughput: 2.3MB/s</span>
                                </div>
                              </div>
                            </motion.div>
                            
                            {/* Alert System */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 2 }}
                              className="bg-gray-800/30 rounded-lg p-4"
                            >
                              <div className="text-xs text-gray-400 mb-3">System Alerts</div>
                              <div className="space-y-2">
                                {[
                                  { type: "info", message: "All sensors operating normally", time: "2 min ago" },
                                  { type: "success", message: "Data sync completed successfully", time: "5 min ago" }
                                ].map((alert, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 2.2 + i * 0.1 }}
                                    className="flex items-center gap-2 text-xs"
                                  >
                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                      alert.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                                    }`}></div>
                                    <span className="text-gray-300 flex-1">{alert.message}</span>
                                    <span className="text-gray-500">{alert.time}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            <div className="mt-20">
              <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                logoHeight={48}
                gap={48}
                pauseOnHover={false}
                forceMotion
                scaleOnHover
                fadeOut
                fadeOutColor="#121212"
                ariaLabel="Featured partners and technologies"
              />
            </div>

            
          </div>
        </section>

        {/* Enhanced Process Section */}
        <LazySection threshold={0.1} rootMargin="50px">
          <ScrollFadeSection
            id="process"
            fadeInPoint={0.5}
            fadeOutPoint={0.65}
            fadeInDuration={0.9}
            fadeOutDuration={1.8}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
          >
            <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
              <div className="container mx-auto">
                <motion.div 
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                    Our Website Design & Development Process
                  </h2>
                  <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
                    A proven methodology that delivers exceptional results for Alberta businesses. 
                    From discovery to launch and beyond.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-maverick-orange bg-opacity-20 rounded-xl flex items-center justify-center border border-maverick-orange group-hover:bg-maverick-orange group-hover:text-black transition-all duration-300">
                            <span className="text-2xl font-bold text-maverick-orange group-hover:text-black transition-colors duration-300">
                              {step.number}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                          <p className="text-[#AAAAAA] mb-4 leading-relaxed">{step.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                                <span>{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="absolute left-8 top-20 h-full w-px bg-gradient-to-b from-maverick-orange to-transparent opacity-30 lg:block hidden"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollFadeSection>
        </LazySection>

        {/* Client Testimonials - Live Google Reviews */}
        <LazySection threshold={0.1} rootMargin="50px">
          <ScrollFadeSection
            id="testimonials"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={1}
            fadeOutDuration={1.8}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
          >
            <GoogleReviews />
          </ScrollFadeSection>
        </LazySection>

        {/* FAQ Section */}
        <LazySection threshold={0.1} rootMargin="50px">
          <ScrollFadeSection
            id="faq"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={0.9}
            fadeOutDuration={1.8}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
          >
            <section className="py-24 px-5 md:px-10 bg-[#121212]">
              <div className="container mx-auto">
                <motion.div 
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                    Airdrie Website Design FAQ
                  </h2>
                  <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
                    Answers to common questions about process, timing, and value.
                  </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                  {faqItems.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-6 border border-gray-800 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex justify-between items-center w-full p-6 text-left bg-[#1A1A1A] hover:bg-[#202020] transition-colors duration-300"
                      >
                        <h3 className="text-xl font-semibold text-white pr-8">
                          {faq.question}
                        </h3>
                        <div className={`transition-transform duration-300 flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}>
                          <ChevronDown className="h-6 w-6 text-maverick-orange" />
                        </div>
                      </button>

                      {openFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-[#0F0F0F] border-t border-gray-800"
                        >
                          <div className="p-6">
                            <p className="text-[#CCCCCC] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="text-[#AAAAAA] mb-6">
                    Still have questions? We are happy to help you pick the right next step.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-[#888888]">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-maverick-orange" />
                      <span>Local Airdrie Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-maverick-orange" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-maverick-orange" />
                      <span>Transparent Pricing</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </ScrollFadeSection>
        </LazySection>

        {/* Enhanced CTA Section */}
        <LazySection threshold={0.1} rootMargin="50px">
          <ScrollFadeSection
            id="cta"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={0.9}
            fadeOutDuration={1.6}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
          >
            <section className="py-24 px-5 md:px-10 bg-gradient-to-r from-maverick-orange to-orange-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="container mx-auto relative z-10">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
                    Ready to turn traffic into customers?
                  </h2>
                  <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                    Join the Airdrie teams who ship fast, clear websites with us. Get a free consult and a clear plan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/contact-edmonton-web-design">
                      <a className="bg-white text-maverick-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                        Start Your Project Today
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Link>
                    <div className="flex items-center">
                      <span className="mr-2 text-white">📞</span>
                      <a href="tel:+12508838849" className="font-medium text-white hover:text-white/80 transition-colors" style={{color: 'white'}}>
                        (250) 883-8849
                      </a>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">24-48h</div>
                      <div className="text-white/80 text-sm">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">Free</div>
                      <div className="text-white/80 text-sm">Initial Consultation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">Local</div>
                      <div className="text-white/80 text-sm">Airdrie Support</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </ScrollFadeSection>
        </LazySection>

        <LazySection threshold={0.1} rootMargin="50px">
          <ScrollFadeSection
            id="contact"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={0.9}
            fadeOutDuration={1.6}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
          >
            <ContactSection />
          </ScrollFadeSection>
        </LazySection>
      </motion.div>
    </div>
  );
}
