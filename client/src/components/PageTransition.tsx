import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function PageTransition() {
  const [location] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    if (location !== prevLocation) {
      setIsTransitioning(true);
      setTimeout(() => {
        setPrevLocation(location);
        setIsTransitioning(false);
      }, 600);
    }
  }, [location, prevLocation]);

  return null;
}
