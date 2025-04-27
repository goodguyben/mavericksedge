import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverElements = () => {
      const hoverableElements = document.querySelectorAll(
        "a, button, .service-card, .pricing-card, .hover-cursor"
      );

      hoverableElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });

      return () => {
        hoverableElements.forEach((el) => {
          el.removeEventListener("mouseenter", () => setIsHovering(true));
          el.removeEventListener("mouseleave", () => setIsHovering(false));
        });
      };
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const cleanup = handleHoverElements();

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cleanup();
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: isVisible ? (isHovering ? "0.4" : "0.7") : "0",
    width: isHovering ? "30px" : "20px",
    height: isHovering ? "30px" : "20px",
    transform: `translate(-50%, -50%) ${isClicking ? "scale(0.5)" : "scale(1)"}`,
  };

  return <div className="cursor-follower" style={cursorStyle}></div>;
}
