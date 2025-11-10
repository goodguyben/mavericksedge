import { useState } from "react";
import BlurText from "@/components/ui/blur-text";
import { RotateCcw } from "lucide-react";

export default function BlurTextDemo() {
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="relative flex h-full min-h-[360px] w-full flex-col items-center justify-center bg-gradient-to-br from-neutral-900 via-black to-neutral-800 px-8 py-12 text-center">
      <button
        onClick={handleReload}
        className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all"
        title="Reload animation"
      >
        <RotateCcw className="w-4 h-4" />
        Reload
      </button>
      <BlurText
        key={key}
        text="Welcome to the future of web design"
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mx-4"
        delay={120}
        animateBy="words"
        easing={[0.22, 1, 0.36, 1]}
        stepDuration={0.45}
      />
    </div>
  );
}
