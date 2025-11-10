import { useState } from "react";
import TextType from "@/components/ui/text-type";
import { RotateCcw } from "lucide-react";

export default function TextTypeDemo() {
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
      <TextType
        key={key}
        text="Welcome to the future of web design"
        className="mx-4 text-3xl sm:text-4xl font-semibold text-white"
        pauseDuration={2200}
        typingSpeed={60}
        deletingSpeed={35}
        variableSpeed={{ min: 40, max: 90 }}
        textColors={["#ffffff"]}
        cursorCharacter={<span className="text-orange-400">|</span>}
        loop={false}
        showCursor
      />
    </div>
  );
}
