import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import { AnimatePresence } from "framer-motion";

// Performance optimizations
const enablePerformanceOptimizations = () => {
  // Enable paint optimization
  if ('paintWorklet' in CSS) {
    // CSS Paint API optimizations can be added here
  }

  // Optimize images loading
  if ('loading' in HTMLImageElement.prototype) {
    document.documentElement.classList.add('native-lazy-loading');
  }

  // Reduce motion for accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--motion-reduce', '1');
  }
};

// Initialize performance optimizations
enablePerformanceOptimizations();

const root = createRoot(document.getElementById("root")!);

root.render(
  <HelmetProvider>
    <AnimatePresence mode="wait">
      <App />
    </AnimatePresence>
  </HelmetProvider>
);