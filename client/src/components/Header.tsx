import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPricingDropdownOpen(false);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setServicesDropdownOpen(false);
      setPricingDropdownOpen(false);
    };

    if (servicesDropdownOpen || pricingDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [servicesDropdownOpen, pricingDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isCurrentPath = (path: string) => location === path;

  const getHeaderClasses = () => {
    return `fixed top-0 left-0 w-full py-3 px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300 backdrop-blur-md border-b border-maverick-orange/10 ${
      isScrolled ? 'bg-[#121212]/95' : 'bg-[#12121261]'
    }`;
  };

  return (
    <>
      <motion.header 
        className={getHeaderClasses()}
        role="banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.6,
          delay: isHomePage ? 4.0 : 0,
          ease: "easeInOut"
        }}
      >
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center justify-start min-h-[44px] touch-manipulation" 
            aria-label="Mavericks Edge Home"
          >
            <Logo size="mobile-xxl" noLink={true} showText={false} />
            <h1 className="font-heading font-bold text-maverick-orange whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl text-[64px] ml-[4px] mr-[4px] pl-[-6px] pr-[-6px] mt-[12px] mb-[12px]" style={{ letterSpacing: '-0.02em' }}>
              Mavericks Edge
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" role="navigation" aria-label="Main Navigation">
            {/* Home Link */}
            <Link 
              href="/" 
              className={`px-3 py-2 min-h-[44px] rounded-md text-base font-medium transition-colors duration-200 touch-manipulation flex items-center ${
                isCurrentPath('/') ? 'text-maverick-orange' : 'text-white hover:text-maverick-orange'
              }`} 
              aria-current={isCurrentPath('/') ? 'page' : undefined}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button 
                type="button"
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                className={`px-3 py-2 min-h-[44px] rounded-md text-base font-medium transition-colors duration-200 inline-flex items-center touch-manipulation ${
                  isCurrentPath('/services') || isCurrentPath('/services/web') || isCurrentPath('/services/marketing') || isCurrentPath('/services/ai') || location.startsWith('/services/')
                    ? 'text-maverick-orange' 
                    : 'text-maverick-orange hover:text-maverick-orange'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 z-50"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="py-2 bg-[#1A1A1A]/95 backdrop-blur-md border border-gray-800/50 rounded-lg shadow-xl" role="menu">
                      <Link 
                        href="/services" 
                        className={`block px-4 py-3 min-h-[44px] text-base touch-manipulation ${
                          isCurrentPath('/services') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                        }`} 
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        All Services
                      </Link>
                      <Link 
                        href="/services/web" 
                        className={`block px-4 py-3 min-h-[44px] text-base touch-manipulation ${
                          isCurrentPath('/services/web') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                        }`} 
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Web Design & Development
                      </Link>
                      <Link 
                        href="/services/marketing" 
                        className={`block px-4 py-3 min-h-[44px] text-base touch-manipulation ${
                          isCurrentPath('/services/marketing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                        }`} 
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Marketing & Creative
                      </Link>
                      <Link 
                        href="/services/ai" 
                        className={`block px-4 py-3 min-h-[44px] text-base touch-manipulation ${
                          isCurrentPath('/services/ai') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                        }`} 
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        AI Integration & Automation
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing Dropdown */}
            <div className="relative">
              <button 
                type="button"
                aria-expanded={pricingDropdownOpen}
                aria-haspopup="true"
                onMouseEnter={() => setPricingDropdownOpen(true)}
                onMouseLeave={() => setPricingDropdownOpen(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  setPricingDropdownOpen(!pricingDropdownOpen);
                }}
                className={`px-3 py-2 min-h-[44px] rounded-md text-base font-medium transition-colors duration-200 inline-flex items-center touch-manipulation ${
                  isCurrentPath('/pricing') || isCurrentPath('/pricing/web') || isCurrentPath('/pricing/marketing') || isCurrentPath('/pricing/ai') || location.startsWith('/pricing/')
                    ? 'text-maverick-orange' 
                    : 'text-maverick-orange hover:text-maverick-orange'
                }`}
              >
                <span>Pricing</span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  pricingDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {pricingDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 z-50"
                    onMouseEnter={() => setPricingDropdownOpen(true)}
                    onMouseLeave={() => setPricingDropdownOpen(false)}
                  >
                    <div className="py-2 bg-[#1A1A1A]/95 backdrop-blur-md border border-gray-800/50 rounded-lg shadow-xl" role="menu">
                      <Link 
                        href="/pricing" 
                        className={`block px-4 py-3 min-h-[44px] text-base touch-manipulation ${
                          isCurrentPath('/pricing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                        }`} 
                        role="menuitem"
                        onClick={() => setPricingDropdownOpen(false)}
                      >
                        All Pricing Plans
                      </Link>
                      <Link 
                        href="/pricing/web" 
                        className={`block px-4 py-3 min-h-[44px] text-base touch-manipulation ${
                          isCurrentPath('/pricing/web') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                        }`} 
                        role="menuitem"
                        onClick={() => setPricingDropdownOpen(false)}
                      >
                        Web Design & Development
                      </Link>
                      <Link 
                        href="/pricing/marketing" 
                        className={`block px-4 py-3 min-h-[44px] text-base touch-manipulation ${
                          isCurrentPath('/pricing/marketing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                        }`} 
                        role="menuitem"
                        onClick={() => setPricingDropdownOpen(false)}
                      >
                        Marketing & Creative
                      </Link>
                      <Link 
                        href="/pricing/ai" 
                        className={`block px-4 py-3 min-h-[44px] text-base touch-manipulation ${
                          isCurrentPath('/pricing/ai') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                        }`} 
                        role="menuitem"
                        onClick={() => setPricingDropdownOpen(false)}
                      >
                        AI Integration & Automation
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Link */}
            <Link 
              href="/about" 
              className={`px-3 py-2 min-h-[44px] rounded-md text-base font-medium transition-colors duration-200 touch-manipulation flex items-center ${
                isCurrentPath('/about') ? 'text-maverick-orange' : 'text-white hover:text-maverick-orange'
              }`} 
              aria-current={isCurrentPath('/about') ? 'page' : undefined}
            >
              About
            </Link>

            {/* Contact Link */}
            <Link 
              href="/contact" 
              className={`px-3 py-2 min-h-[44px] rounded-md text-base font-medium transition-colors duration-200 touch-manipulation flex items-center ${
                isCurrentPath('/contact') ? 'text-maverick-orange' : 'text-white hover:text-maverick-orange'
              }`} 
              aria-current={isCurrentPath('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="block lg:hidden p-3 rounded-full bg-maverick-charcoal/80 backdrop-blur-sm border border-maverick-slate/20 hover:bg-maverick-charcoal transition-colors duration-200 min-h-[44px] min-w-[44px] touch-manipulation"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6 text-white" />
            </motion.div>
          </button>
        </div>
      </motion.header>
      {/* Mobile Navigation Panel */}
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}