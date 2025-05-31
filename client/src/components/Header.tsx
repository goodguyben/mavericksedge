import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";

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
        className="fixed top-0 left-0 w-full py-3 px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300 backdrop-blur-md border-b border-maverick-orange/10 bg-[#12121226]"
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
            <Logo size="medium" noLink={true} showText={false} />
            <h1 className="font-heading font-bold text-maverick-orange ml-3 whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl text-[42px] mt-[12px] mb-[12px]" style={{ letterSpacing: '-0.02em' }}>
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
                  isCurrentPath('/services') || isCurrentPath('/services/web') || isCurrentPath('/services/marketing') || isCurrentPath('/services/ai') 
                    ? 'text-maverick-orange' 
                    : 'text-white hover:text-maverick-orange'
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
                  isCurrentPath('/pricing') || isCurrentPath('/pricing/web') || isCurrentPath('/pricing/marketing') || isCurrentPath('/pricing/ai') 
                    ? 'text-maverick-orange' 
                    : 'text-white hover:text-maverick-orange'
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Navigation Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300,
                duration: 0.4 
              }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 z-50 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-200 min-h-[44px] min-w-[44px] touch-manipulation"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-4 px-4">
                <nav className="space-y-2">
                  <Link 
                    href="/" 
                    className={`flex items-center space-x-3 p-4 rounded-lg min-h-[56px] touch-manipulation transition-all duration-200 ${
                      isCurrentPath('/') ? 'bg-maverick-orange text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <span className="text-lg font-medium">Home</span>
                  </Link>

                  <div className="space-y-1">
                    <div className="text-gray-400 px-4 py-2 text-sm font-medium">Services</div>
                    <Link 
                      href="/services" 
                      className={`flex items-center space-x-3 p-4 ml-4 rounded-lg min-h-[48px] touch-manipulation transition-all duration-200 ${
                        isCurrentPath('/services') ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-base font-medium">All Services</span>
                    </Link>
                    <Link 
                      href="/services/web" 
                      className={`flex items-center space-x-3 p-4 ml-4 rounded-lg min-h-[48px] touch-manipulation transition-all duration-200 ${
                        isCurrentPath('/services/web') ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-base font-medium">Web Design & Development</span>
                    </Link>
                    <Link 
                      href="/services/marketing" 
                      className={`flex items-center space-x-3 p-4 ml-4 rounded-lg min-h-[48px] touch-manipulation transition-all duration-200 ${
                        isCurrentPath('/services/marketing') ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-base font-medium">Marketing & Creative</span>
                    </Link>
                    <Link 
                      href="/services/ai" 
                      className={`flex items-center space-x-3 p-4 ml-4 rounded-lg min-h-[48px] touch-manipulation transition-all duration-200 ${
                        isCurrentPath('/services/ai') ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-base font-medium">AI Integration & Automation</span>
                    </Link>
                  </div>

                  <div className="space-y-1">
                    <div className="text-gray-400 px-4 py-2 text-sm font-medium">Pricing</div>
                    <Link 
                      href="/pricing" 
                      className={`flex items-center space-x-3 p-4 ml-4 rounded-lg min-h-[48px] touch-manipulation transition-all duration-200 ${
                        isCurrentPath('/pricing') ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-base font-medium">All Pricing Plans</span>
                    </Link>
                    <Link 
                      href="/pricing/web" 
                      className={`flex items-center space-x-3 p-4 ml-4 rounded-lg min-h-[48px] touch-manipulation transition-all duration-200 ${
                        isCurrentPath('/pricing/web') ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-base font-medium">Web Design & Development</span>
                    </Link>
                    <Link 
                      href="/pricing/marketing" 
                      className={`flex items-center space-x-3 p-4 ml-4 rounded-lg min-h-[48px] touch-manipulation transition-all duration-200 ${
                        isCurrentPath('/pricing/marketing') ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-base font-medium">Marketing & Creative</span>
                    </Link>
                    <Link 
                      href="/pricing/ai" 
                      className={`flex items-center space-x-3 p-4 ml-4 rounded-lg min-h-[48px] touch-manipulation transition-all duration-200 ${
                        isCurrentPath('/pricing/ai') ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-base font-medium">AI Integration & Automation</span>
                    </Link>
                  </div>

                  <Link 
                    href="/about" 
                    className={`flex items-center space-x-3 p-4 rounded-lg min-h-[56px] touch-manipulation transition-all duration-200 ${
                      isCurrentPath('/about') ? 'bg-maverick-orange text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <span className="text-lg font-medium">About</span>
                  </Link>

                  <Link 
                    href="/contact" 
                    className={`flex items-center space-x-3 p-4 rounded-lg min-h-[56px] touch-manipulation transition-all duration-200 ${
                      isCurrentPath('/contact') ? 'bg-maverick-orange text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <span className="text-lg font-medium">Contact</span>
                  </Link>
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-700/50">
                <div className="text-center">
                  <p className="text-sm text-gray-400">Mavericks Edge</p>
                  <p className="text-xs text-gray-500 mt-1">Web Design & Digital Marketing</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}