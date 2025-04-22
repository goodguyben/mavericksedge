
import { Link } from "wouter";
import logoPath from "@assets/logo_dyn-thumb2x.png";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
  noLink?: boolean;
}

export default function Logo({ size = "medium", showText = true, noLink = false }: LogoProps) {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-16 h-16"
  };

  const LogoContent = () => (
    <>
      {showText && (
        <span className={`font-heading font-bold text-maverick-orange ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          
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
