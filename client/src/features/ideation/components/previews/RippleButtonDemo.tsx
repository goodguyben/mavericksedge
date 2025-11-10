import { RippleButton } from "@/components/ui/ripple-button";

function RippleButtonDemo() {
  return (
    <RippleButton 
      rippleColor="#ADD8E6" 
      className="bg-white border-white/20 text-gray-800 hover:bg-gray-50"
    >
      Click me
    </RippleButton>
  );
}

export default RippleButtonDemo;

