import { useRef } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ChevronDown } from "lucide-react";

export default function ScrollRevealDemo() {
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

      <div className="pt-[360px] pb-12 space-y-64">
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          enableBlur
          baseOpacity={0}
          baseRotation={5}
          blurStrength={8}
          containerClassName="text-white"
          textClassName="text-white !text-[clamp(0.8rem,2vw,1.5rem)]"
          rotationEnd="top 30%"
          wordAnimationEnd="top 20%"
        >
          Crafting digital experiences requires vision and precision. Every element must harmonize to create something truly memorable.
        </ScrollReveal>

        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          enableBlur
          baseOpacity={0}
          baseRotation={5}
          blurStrength={8}
          containerClassName="text-white"
          textClassName="text-white !text-[clamp(0.8rem,2vw,1.5rem)]"
          rotationEnd="top 30%"
          wordAnimationEnd="top 20%"
        >
          Modern web design blends artistry with technology. The result transforms how users interact with your brand.
        </ScrollReveal>
      </div>
    </div>
  );
}

