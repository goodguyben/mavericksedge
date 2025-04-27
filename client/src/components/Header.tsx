
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/custom-button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const headerClasses = `fixed top-0 left-0 w-full py-4 sm:py-6 px-4 sm:px-5 md:px-10 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-[#121212] bg-opacity-80 backdrop-blur-md shadow-md"
      : "bg-transparent"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo size={isMobile ? "small" : "large"} noLink={true} showText={false}/>
          <div className="flex flex-col ml-1">
            <span className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-maverick-orange leading-tight">
              Mavericks
            </span>
            <span className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-maverick-orange leading-none ml-6 sm:ml-8 -mt-1 relative">
              <span className="relative z-10 inline-block">
                Edge
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-maverick-orange/70 rounded-full transform -skew-x-6"></span>
              </span>
            </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none z-50 bg-maverick-charcoal/50 p-2 rounded-full backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="hover-link">
            Services
          </Link>
          <Link href="/pricing" className="hover-link">
            Pricing
          </Link>
          <Link href="/about" className="hover-link">
            About
          </Link>
          <Button
            href="/contact"
            variant="primary"
            className="px-5 py-2"
          >
            Contact
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation - Slide in from right */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-[70%] max-w-xs bg-maverick-charcoal border-l border-maverick-slate/20 z-40 flex flex-col"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center space-y-8 text-xl w-full px-5"
              >
                <Link href="/services" className="hover-link py-3 w-full text-center border-b border-maverick-slate/20">
                  Services
                </Link>
                <Link href="/pricing" className="hover-link py-3 w-full text-center border-b border-maverick-slate/20">
                  Pricing
                </Link>
                <Link href="/about" className="hover-link py-3 w-full text-center border-b border-maverick-slate/20">
                  About
                </Link>
                <Button
                  href="/contact"
                  variant="primary"
                  className="px-5 py-3 mt-4 w-full"
                >
                  Contact
                </Button>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
