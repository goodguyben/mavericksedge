import { useState } from "react";
import ShinyText from "@/components/ui/shiny-text";

function ShinyTextDemo() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-8 py-3 rounded-full bg-black border border-[#b5b5b5a4] hover:border-gray-600 transition-all ${
        isClicked ? 'scale-95' : 'scale-100'
      } active:scale-95`}
    >
      <ShinyText text="Click me" speed={5} />
    </button>
  );
}

export default ShinyTextDemo;

