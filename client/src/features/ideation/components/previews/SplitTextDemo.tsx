import { useState } from "react";
import SplitText from "@/components/ui/split-text";
import { RotateCcw } from "lucide-react";

export default function SplitTextDemo() {
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="relative flex min-h-[360px] w-full items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 p-8">
      <button
        onClick={handleReload}
        className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all"
        title="Reload animation"
      >
        <RotateCcw className="w-4 h-4" />
        Reload
      </button>
      <SplitText
        key={key}
        text="Welcome to the future of web design"
        tag="h1"
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
        delay={50}
        duration={0.8}
        splitType="chars"
        from={{ opacity: 0, y: 50, rotateX: -90 }}
        to={{ opacity: 1, y: 0, rotateX: 0 }}
        threshold={0.3}
      />
    </div>
  );
}

