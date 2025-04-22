
import { Link } from "wouter";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

export default function Logo({ size = "medium", showText = true }: LogoProps) {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-16 h-16"
  };

  return (
    <Link href="/" className="flex items-center cursor-pointer">
      <img 
        src="/attached_assets/logo_dyn-thumb2x.png" 
        alt="Mavericks Edge Logo" 
        className={`${sizeClasses[size]} ${showText ? 'mr-2' : ''}`}
      />
      {showText && (
        <span className={`font-heading font-bold text-maverick-orange ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          Mavericks Edge
        </span>
      )}
    </Link>
  );
}
