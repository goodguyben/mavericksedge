import { useRef } from "react";
import ScrollFloat from "@/components/ui/scroll-float";
import { ChevronDown } from "lucide-react";

export default function ScrollFloatDemo() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-full w-full overflow-y-auto bg-gradient-to-br from-neutral-900 via-black to-neutral-800 px-8"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Scroll Down Indicator - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <span className="text-lg text-neutral-500 font-bold mb-2">Scroll Down</span>
        <ChevronDown className="w-7 h-7 text-neutral-500 animate-bounce" />
      </div>

      <div className="pt-[360px] pb-12 space-y-96">
        <ScrollFloat
          scrollContainerRef={scrollContainerRef}
          containerClassName="text-white"
          textClassName="text-white !text-[clamp(0.8rem,2vw,1.5rem)]"
          animationDuration={1.8}
          ease="back.out(1.7)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=10%"
          stagger={0.06}
        >
          Crafting digital experiences requires vision and precision. Every element must harmonize to create something truly memorable.
        </ScrollFloat>

        <ScrollFloat
          scrollContainerRef={scrollContainerRef}
          containerClassName="text-white"
          textClassName="text-white !text-[clamp(0.8rem,2vw,1.5rem)]"
          animationDuration={1.8}
          ease="back.out(1.7)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=10%"
          stagger={0.06}
        >
          Modern web design blends artistry with technology. The result transforms how users interact with your brand.
        </ScrollFloat>
      </div>
    </div>
  );
}

