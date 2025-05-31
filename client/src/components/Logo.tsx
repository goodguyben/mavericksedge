
import { Link } from "wouter";
import logoPath from "@assets/logo-transparent-thumb4x.png";

interface LogoProps {
  size?: "small" | "medium" | "large" | "extra-small" | "mobile-large";
  showText?: boolean;
  noLink?: boolean;
}

export default function Logo({ size = "medium", showText = true, noLink = false }: LogoProps) {
  const sizeClasses = {
    small: "w-12 h-12", 
    medium: "w-24 h-24",
    large: "w-32 h-32",
    "extra-small": "w-10 h-10",
    "mobile-large": "w-16 h-16"
  };

  const LogoContent = () => (
    <>
      <img 
        src={logoPath}
        alt="Mavericks Edge Logo" 
        className={`${sizeClasses[size]} object-contain`}
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
