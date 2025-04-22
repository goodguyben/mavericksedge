import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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

  const headerClasses = `fixed top-0 left-0 w-full py-6 px-5 md:px-10 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-[#121212] bg-opacity-80 backdrop-blur-md shadow-md"
      : "bg-transparent"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Mavericks<span className="text-[#8C54FF]">Edge</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="hover-link">
            Services
          </Link>
          <Link href="/work" className="hover-link">
            Work
          </Link>
          <Link href="/pricing" className="hover-link">
            Pricing
          </Link>
          <Link href="/about" className="hover-link">
            About
          </Link>
          <Link
            href="/contact"
            className="bg-[#8C54FF] text-white px-5 py-2 rounded-full transition duration-300 hover:bg-opacity-80"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#121212] bg-opacity-95 z-50 flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-10 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              className="flex flex-col items-center space-y-6 text-xl"
            >
              <Link href="/services" className="hover-link py-2">
                Services
              </Link>
              <Link href="/work" className="hover-link py-2">
                Work
              </Link>
              <Link href="/pricing" className="hover-link py-2">
                Pricing
              </Link>
              <Link href="/about" className="hover-link py-2">
                About
              </Link>
              <Link
                href="/contact"
                className="bg-[#8C54FF] text-white px-5 py-2 rounded-full mt-4 transition duration-300 hover:bg-opacity-80"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
