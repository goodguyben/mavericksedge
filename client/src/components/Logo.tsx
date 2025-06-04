
import { Link } from "wouter";
import logoPath from "@assets/logo-transparent-thumb4x.png";

interface LogoProps {
  size?: "small" | "medium-small" | "medium" | "large";
  showText?: boolean;
  noLink?: boolean;
}

export default function Logo({ size = "medium", showText = true, noLink = false }: LogoProps) {
  const sizeClasses = {
    small: "w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10", 
    "medium-small": "w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16",
    medium: "w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    large: "w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
  };

  const LogoContent = () => (
    <>
      <img 
        src={logoPath}
        alt="Mavericks Edge Logo" 
        className={`${sizeClasses[size]} object-contain animate-pulse`}
        style={{
          filter: 'drop-shadow(0 0 60px rgba(255, 86, 48, 1)) drop-shadow(0 0 120px rgba(255, 86, 48, 1)) drop-shadow(0 0 200px rgba(255, 86, 48, 0.8)) drop-shadow(0 0 300px rgba(255, 86, 48, 0.6))',
          animation: 'pulse-glow 3s ease-in-out infinite'
        }}
      />
      {showText && (
        <span 
          className={`font-heading font-bold text-maverick-orange ${size === 'large' ? 'text-2xl' : 'text-xl'}`}
          style={{
            textShadow: '0 0 50px rgba(255, 86, 48, 1), 0 0 100px rgba(255, 86, 48, 1), 0 0 200px rgba(255, 86, 48, 0.8), 0 0 300px rgba(255, 86, 48, 0.6)',
            animation: 'pulse-glow-text 3s ease-in-out infinite'
          }}
        >
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
