import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import { optimizeLoading, webVitalsOptimization } from "./lib/performance";

// Initialize performance optimizations
optimizeLoading();
webVitalsOptimization.preventLayoutShift();
webVitalsOptimization.optimizeAnimations();

// Use concurrent features for better performance
const root = createRoot(document.getElementById("root")!, {
  // Enable concurrent features
  unstable_strictMode: true,
});

root.render(
  <AnimatePresence mode="wait">
    <App />
  </AnimatePresence>
);
