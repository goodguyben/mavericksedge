
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 sm:py-5",
        isScrolled || isOpen ? "bg-maverick-charcoal shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="z-10">
          <Logo className="h-14 w-auto" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-8 w-8 text-maverick-cream" />
          ) : (
            <Menu className="h-8 w-8 text-maverick-cream" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/work">Our Work</NavLink>
          <NavLink href="/pricing-comparison">Pricing</NavLink>
          <NavLink href="/about">About</NavLink>
          <Link href="/contact">
            <a className="maverick-button maverick-button-primary">
              Contact Us
            </a>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-maverick-charcoal transform transition-transform ease-in-out duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-5`}
        >
          <div className="flex flex-col items-center space-y-8">
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/work">Our Work</MobileNavLink>
            <MobileNavLink href="/pricing-comparison">Pricing</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <Link href="/contact">
              <a className="maverick-button maverick-button-primary text-xl">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href || (href !== '/' && location.startsWith(href));

  return (
    <Link href={href}>
      <a className={cn(
        "text-maverick-cream font-medium hover:text-maverick-orange transition-colors relative",
        isActive && "text-maverick-orange"
      )}>
        {children}
        {isActive && (
          <div className="absolute h-1 w-full bg-maverick-orange bottom-[-5px] rounded-full" />
        )}
      </a>
    </Link>
  );
};

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [location] = useLocation();
  const isActive = location === href || (href !== '/' && location.startsWith(href));

  return (
    <Link href={href}>
      <a className={cn(
        "text-2xl font-medium",
        isActive ? "text-maverick-orange" : "text-maverick-cream"
      )}>
        {children}
      </a>
    </Link>
  );
};

// Add default export
export default Header;
