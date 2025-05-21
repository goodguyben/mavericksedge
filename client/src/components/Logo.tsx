
import { Link } from "wouter";
import logoPath from "../assets/logo-transparent-thumb4x.png";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
  noLink?: boolean;
}

export default function Logo({ size = "medium", showText = true, noLink = false }: LogoProps) {
  const sizeClasses = {
    small: "w-20 h-20", 
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };

  const LogoContent = () => (
    <>
      <img 
        src={logoPath}
        alt="Mavericks Edge Logo" 
        className={`${sizeClasses[size]} ${showText ? 'mr-2' : ''}`}
      />
      {showText && (
        <span className={`font-heading font-bold text-maverick-orange ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          Mavericks Edge
        </span>
      )}
    </>
  );

  if (noLink) {
    return (
      <div className="flex items-center cursor-pointer">
        <LogoContent />
      </div>
    );
  }

  return (
    <Link href="/" className="flex items-center cursor-pointer">
      <LogoContent />
    </Link>
  );
}
