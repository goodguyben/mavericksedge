import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import { optimizeForMobile, preloadCriticalImages } from "./lib/performance";

// Initialize performance optimizations
optimizeForMobile();
preloadCriticalImages();

createRoot(document.getElementById("root")!).render(
  <AnimatePresence mode="wait">
    <App />
  </AnimatePresence>
);
