import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  icon?: React.ComponentType<any>;
  title?: string;
  description?: string;
  borderColorClass?: string;
  cardNumber?: number;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, icon: Icon, title, description, borderColorClass = "border-white", cardNumber, ...rest }, ref) => {

    const getCardVideo = (title: string, cardNumber?: number) => {
      // Use cardNumber if provided, otherwise derive from title
      let videoNumber = cardNumber;
      if (!videoNumber) {
        switch (title) {
          case "Mobile Responsive":
            videoNumber = 1;
            break;
          case "Human-Centered Design":
            videoNumber = 2;
            break;
          case "Google Ranked":
            videoNumber = 3;
            break;
          case "Affordable":
            videoNumber = 4;
            break;
          default:
            videoNumber = 1;
        }
      }

      // Map each card to optimized WebM videos
      const videoMap: { [key: number]: string } = {
        1: "/attached_assets/1.webm", // Mobile Responsive
        2: "/attached_assets/2.webm", // Human-Centered Design  
        3: "/attached_assets/3.webm", // Google Ranked
        4: "/attached_assets/4.webm"  // Affordable
      };

      const videoFileName = videoMap[videoNumber] || videoMap[1];
      return videoFileName;
    };

    return (
      <div
        ref={ref}
        {...rest}
        className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black text-white [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] flex flex-col overflow-hidden ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
      >
        {/* Title section with macOS controls and icon */}
        <div className="bg-black xxs:p-2 xxs-plus:p-2 xs:p-2 xs-plus:p-2 sm:p-2 sm-plus:p-2 phone:p-3 md:p-3 lg:p-3 tab:p-3 galaxy-tab:p-3 pad:p-3 air:p-3 pro:p-3 tab-large:p-3 xl:p-3 2xl:p-4 flex items-center justify-start xxs:space-x-1 xxs-plus:space-x-1 xs:space-x-1 xs-plus:space-x-1 sm:space-x-1 sm-plus:space-x-1 phone:space-x-2 md:space-x-2 lg:space-x-2 tab:space-x-2 galaxy-tab:space-x-2 pad:space-x-2 air:space-x-2 pro:space-x-2 tab-large:space-x-2 xl:space-x-2 2xl:space-x-2">
          {/* macOS Window Controls */}
          <div className="flex xxs:space-x-1 xxs-plus:space-x-1 xs:space-x-1 xs-plus:space-x-1 sm:space-x-1 sm-plus:space-x-1 phone:space-x-2 md:space-x-2 lg:space-x-2 tab:space-x-2 galaxy-tab:space-x-2 pad:space-x-2 air:space-x-2 pro:space-x-2 tab-large:space-x-2 xl:space-x-2 2xl:space-x-2">
            <div className="xxs:w-2 xxs:h-2 xxs-plus:w-2 xxs-plus:h-2 xs:w-2 xs:h-2 xs-plus:w-2 xs-plus:h-2 sm:w-2 sm:h-2 sm-plus:w-2 sm-plus:h-2 phone:w-3 phone:h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 tab:w-3 tab:h-3 galaxy-tab:w-3 galaxy-tab:h-3 pad:w-3 pad:h-3 air:w-3 air:h-3 pro:w-3 pro:h-3 tab-large:w-3 tab-large:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 rounded-full bg-red-500"></div>
            <div className="xxs:w-2 xxs:h-2 xxs-plus:w-2 xxs-plus:h-2 xs:w-2 xs:h-2 xs-plus:w-2 xs-plus:h-2 sm:w-2 sm:h-2 sm-plus:w-2 sm-plus:h-2 phone:w-3 phone:h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 tab:w-3 tab:h-3 galaxy-tab:w-3 galaxy-tab:h-3 pad:w-3 pad:h-3 air:w-3 air:h-3 pro:w-3 pro:h-3 tab-large:w-3 tab-large:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 rounded-full bg-yellow-500"></div>
            <div className="xxs:w-2 xxs:h-2 xxs-plus:w-2 xxs-plus:h-2 xs:w-2 xs:h-2 xs-plus:w-2 xs-plus:h-2 sm:w-2 sm:h-2 sm-plus:w-2 sm-plus:h-2 phone:w-3 phone:h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 tab:w-3 tab:h-3 galaxy-tab:w-3 galaxy-tab:h-3 pad:w-3 pad:h-3 air:w-3 air:h-3 pro:w-3 pro:h-3 tab-large:w-3 tab-large:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 rounded-full bg-green-500"></div>
          </div>

          {title && (
            <div className="flex items-center xxs:space-x-1 xxs-plus:space-x-1 xs:space-x-1 xs-plus:space-x-1 sm:space-x-1 sm-plus:space-x-1 phone:space-x-2 md:space-x-2 lg:space-x-2 tab:space-x-2 galaxy-tab:space-x-2 pad:space-x-2 air:space-x-2 pro:space-x-2 tab-large:space-x-2 xl:space-x-2 2xl:space-x-2 xxs:ml-[6px] xxs-plus:ml-[6px] xs:ml-[8px] xs-plus:ml-[8px] sm:ml-[8px] sm-plus:ml-[8px] phone:ml-[12px] md:ml-[12px] lg:ml-[12px] tab:ml-[12px] galaxy-tab:ml-[12px] pad:ml-[12px] air:ml-[12px] pro:ml-[12px] tab-large:ml-[12px] xl:ml-[12px] 2xl:ml-[16px] xxs:mr-[6px] xxs-plus:mr-[6px] xs:mr-[8px] xs-plus:mr-[8px] sm:mr-[8px] sm-plus:mr-[8px] phone:mr-[12px] md:mr-[12px] lg:mr-[12px] tab:mr-[12px] galaxy-tab:mr-[12px] pad:mr-[12px] air:mr-[12px] pro:mr-[12px] tab-large:mr-[12px] xl:mr-[12px] 2xl:mr-[16px] xxs:pl-[5px] xxs-plus:pl-[5px] xs:pl-[6px] xs-plus:pl-[6px] sm:pl-[6px] sm-plus:pl-[6px] phone:pl-[10px] md:pl-[10px] lg:pl-[10px] tab:pl-[10px] galaxy-tab:pl-[10px] pad:pl-[10px] air:pl-[10px] pro:pl-[10px] tab-large:pl-[10px] xl:pl-[10px] 2xl:pl-[12px] xxs:pr-[5px] xxs-plus:pr-[5px] xs:pr-[6px] xs-plus:pr-[6px] sm:pr-[6px] sm-plus:pr-[6px] phone:pr-[10px] md:pr-[10px] lg:pr-[10px] tab:pr-[10px] galaxy-tab:pr-[10px] pad:pr-[10px] air:pr-[10px] pro:pr-[10px] tab-large:pr-[10px] xl:pr-[10px] 2xl:pr-[12px]">
              {/* Animated icon next to title */}
              {title === "Mobile Responsive" && (
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="xxs:w-3 xxs:h-3 xxs-plus:w-3 xxs-plus:h-3 xs:w-3 xs:h-3 xs-plus:w-3 xs-plus:h-3 sm:w-3 sm:h-3 sm-plus:w-3 sm-plus:h-3 phone:w-4 phone:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 tab:w-4 tab:h-4 galaxy-tab:w-4 galaxy-tab:h-4 pad:w-4 pad:h-4 air:w-4 air:h-4 pro:w-4 pro:h-4 tab-large:w-4 tab-large:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 19H7V5h10v14zm2-16c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3z"/>
                  </svg>
                </motion.div>
              )}
              {title === "Human-Centered Design" && (
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="xxs:w-3 xxs:h-3 xxs-plus:w-3 xxs-plus:h-3 xs:w-3 xs:h-3 xs-plus:w-3 xs-plus:h-3 sm:w-3 sm:h-3 sm-plus:w-3 sm-plus:h-3 phone:w-4 phone:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 tab:w-4 tab:h-4 galaxy-tab:w-4 galaxy-tab:h-4 pad:w-4 pad:h-4 air:w-4 air:h-4 pro:w-4 pro:h-4 tab-large:w-4 tab-large:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5V14L21 13.5V12.5M21 16V14L15 14.5V16M9 7L3 7.5V9L9 8.5V7ZM9 14.5V16L3 15.5V14L9 14.5ZM9 11.5V14L3 13.5V12.5L9 11.5ZM12 7.5C11.5 7.5 11 7.95 11 8.5V15.5C11 16.05 11.45 16.5 12 16.5S13 16.05 13 15.5V8.5C13 7.95 12.55 7.5 12 7.5Z"/>
                  </svg>
                </motion.div>
              )}
              {title === "Google Ranked" && (
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg className="xxs:w-3 xxs:h-3 xxs-plus:w-3 xxs-plus:h-3 xs:w-3 xs:h-3 xs-plus:w-3 xs-plus:h-3 sm:w-3 sm:h-3 sm-plus:w-3 sm-plus:h-3 phone:w-4 phone:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 tab:w-4 tab:h-4 galaxy-tab:w-4 galaxy-tab:h-4 pad:w-4 pad:h-4 air:w-4 air:h-4 pro:w-4 pro:h-4 tab-large:w-4 tab-large:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </motion.div>
              )}
              {title === "Affordable" && (
                <motion.div
                  animate={{ 
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="xxs:w-3 xxs:h-3 xxs-plus:w-3 xxs-plus:h-3 xs:w-3 xs:h-3 xs-plus:w-3 xs-plus:h-3 sm:w-3 sm:h-3 sm-plus:w-3 sm-plus:h-3 phone:w-4 phone:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 tab:w-4 tab:h-4 galaxy-tab:w-4 galaxy-tab:h-4 pad:w-4 pad:h-4 air:w-4 air:h-4 pro:w-4 pro:h-4 tab-large:w-4 tab-large:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </motion.div>
              )}
              <span className="font-medium text-white xxs:text-[10px] xxs-plus:text-[11px] xs:text-[12px] xs-plus:text-[13px] sm:text-[13px] sm-plus:text-[14px] phone:text-[14px] md:text-[15px] lg:text-[15px] tab:text-[16px] galaxy-tab:text-[15px] pad:text-[15px] air:text-[15px] pro:text-[16px] tab-large:text-[16px] xl:text-[16px] 2xl:text-[18px]">{title}</span>
            </div>
          )}
        </div>
        {/* White divider line */}
        <div className="border-t border-white"></div>
        {/* Content area with optimized video */}
        <div className="flex-1 bg-black overflow-hidden">
          {title && (
            <video 
              src={getCardVideo(title, cardNumber)}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              preload="metadata"
            />
          )}
          {rest.children}
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const isInViewRef = useRef(false);
  const hasStartedRef = useRef(false);
  
  // Performance optimization config
  const animationConfig = useMemo(() => ({
    duration: easing === "elastic" ? 1.2 : 0.8,
    ease: easing === "elastic" ? "elastic.out(1, 0.5)" : "power2.inOut",
    stagger: 0.1,
  }), [easing]);

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr]
  );

  const orderRef = useRef<number[]>([]);

  useEffect(() => {
    const total = refs.length;
    orderRef.current = Array.from({ length: total }, (_, i) => i);
    
    // Initial card positioning
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(
          r.current,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount
        );
      }
    });

    // Animation swap function
    const swap = () => {
      if (!isInViewRef.current || refs.length < 2) return;
      
      const newOrder = [...orderRef.current];
      newOrder.push(newOrder.shift()!);
      orderRef.current = newOrder;

      tlRef.current = gsap.timeline();
      
      newOrder.forEach((originalIdx, newPosition) => {
        const el = refs[originalIdx].current;
        if (el) {
          const slot = makeSlot(newPosition, cardDistance, verticalDistance, total);
          tlRef.current!.to(
            el,
            {
              ...slot,
              skewY: skewAmount,
              ...animationConfig,
            },
            0
          );
        }
      });
    };

    // Set up intersection observer for performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
          if (entry.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true;
            // Start animation after a short delay
            setTimeout(() => {
              swap();
              intervalRef.current = window.setInterval(swap, delay);
            }, 500);
          } else if (!entry.isIntersecting && intervalRef.current) {
            clearInterval(intervalRef.current);
            hasStartedRef.current = false;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Pause on hover functionality
    const container = containerRef.current;
    if (container && pauseOnHover) {
      const handleMouseEnter = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        if (tlRef.current) {
          tlRef.current.pause();
        }
      };

      const handleMouseLeave = () => {
        if (tlRef.current) {
          tlRef.current.resume();
        }
        if (isInViewRef.current) {
          intervalRef.current = window.setInterval(swap, delay);
        }
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        observer.disconnect();
      };
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      observer.disconnect();
    };
  }, [cardDistance, verticalDistance, skewAmount, refs.length, delay, pauseOnHover, animationConfig]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          cardNumber: i + 1,
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible xxs:translate-x-[25%] xxs:translate-y-[25%] xxs:scale-[0.4] xxs-plus:translate-x-[25%] xxs-plus:translate-y-[25%] xxs-plus:scale-[0.5] xs:translate-x-[25%] xs:translate-y-[25%] xs:scale-[0.55] xs-plus:translate-x-[25%] xs-plus:translate-y-[25%] xs-plus:scale-[0.55] sm:translate-x-[25%] sm:translate-y-[25%] sm:scale-[0.65] sm-plus:translate-x-[25%] sm-plus:translate-y-[25%] sm-plus:scale-[0.7] phone:translate-x-[25%] phone:translate-y-[25%] phone:scale-[0.75] md:translate-x-[15%] md:translate-y-[22%] md:scale-[0.8] lg:translate-x-[5%] lg:translate-y-[20%] lg:scale-[1] tab:translate-x-[5%] tab:translate-y-[20%] tab:scale-[1] galaxy-tab:translate-x-[10%] galaxy-tab:translate-y-[22%] galaxy-tab:scale-[0.9] pad:translate-x-[10%] pad:translate-y-[22%] pad:scale-[0.85] air:translate-x-[10%] air:translate-y-[22%] air:scale-[0.9] pro:translate-x-[5%] pro:translate-y-[20%] pro:scale-[0.95] tab-large:translate-x-[5%] tab-large:translate-y-[20%] tab-large:scale-[1] xl:translate-x-[5%] xl:translate-y-[20%] xl:scale-[1] 2xl:translate-x-[5%] 2xl:translate-y-[20%] 2xl:scale-[1.05]"
      style={{ width, height, pointerEvents: 'auto' }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;