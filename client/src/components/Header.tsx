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
  const isHomePage = location === '/';

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

  const headerClasses = `fixed top-0 left-0 w-full py-3 sm:py-4 md:py-6 px-3 sm:px-4 md:px-10 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-[#121212] bg-opacity-80 backdrop-blur-md shadow-md"
      : "bg-transparent"
  }`;

  const isCurrentPath = (path: string) => {
    if (path === '/services' && (location === '/services/web' || location === '/services/marketing' || location === '/services/ai')) {
      return false;
    }
    if (path === '/pricing' && (location === '/pricing/web' || location === '/pricing/marketing' || location === '/pricing/ai')) {
      return false;
    }
    return location === path || location.startsWith(`${path}/`);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full py-2 md:py-2 px-3 sm:px-4 md:px-8 lg:px-10 z-50 transition-all duration-300 backdrop-blur-md border-b border-maverick-orange/10 bg-[#12121261]" 
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
        <Link href="/" className="flex items-center justify-start" aria-label="Mavericks Edge Home">
          <Logo size={isMobile ? "small" : "medium"} noLink={true} showText={false}/>
          <h1 className="font-heading font-bold text-maverick-orange ml-3 md:ml-2 whitespace-nowrap xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl md:mt-3 text-[42px] mt-[9.5px] mb-[9.5px]" style={{ letterSpacing: '-0.02em' }}>
            Mavericks Edge
          </h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none z-50 p-3"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-[2px] mr-[2px] pl-[0px] pr-[0px]" role="navigation" aria-label="Main Navigation">
          <Link href="/" className={`px-2 py-1.5 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${isCurrentPath('/') ? 'text-maverick-orange' : 'text-white hover:text-maverick-orange'}`} aria-current={isCurrentPath('/') ? 'page' : undefined}>
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button 
              type="button"
              aria-expanded="false"
              aria-haspopup="true"
              className={`px-2 py-1.5 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 inline-flex items-center ${
                isCurrentPath('/services') || isCurrentPath('/services/web') || isCurrentPath('/services/marketing') || isCurrentPath('/services/ai') 
                  ? 'text-maverick-orange' 
                  : 'text-maverick-orange hover:text-maverick-orange'
              }`}
              onClick={() => {}}  // Dropdown handled by hover
            >
              <span>Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 lg:h-4 lg:w-4 ml-1 transform transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-1 w-52 lg:w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-[-8px] transition-all duration-300 ease-in-out z-50">
              <div className="py-1 bg-[#1A1A1A]/95 backdrop-blur-md border border-gray-800/50 rounded-lg shadow-xl" role="menu" aria-orientation="vertical" aria-labelledby="services-menu">
                <Link href="/services" className={`block px-3 py-2 text-sm lg:text-base ${isCurrentPath('/services') ? 'text-maverick-orange' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'}`} role="menuitem" aria-current={isCurrentPath('/services') ? 'page' : undefined}>
                  All Services
                </Link>
                <Link href="/services/web" className={`block px-3 py-2 text-sm lg:text-base ${isCurrentPath('/services/web') ? 'text-maverick-orange' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'}`} role="menuitem" aria-current={isCurrentPath('/services/web') ? 'page' : undefined}>
                  Web Design & Development
                </Link>
                <Link href="/services/marketing" className={`block px-3 py-2 text-sm lg:text-base ${isCurrentPath('/services/marketing') ? 'text-maverick-orange' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'}`} role="menuitem" aria-current={isCurrentPath('/services/marketing') ? 'page' : undefined}>
                  Marketing & Creative
                </Link>
                <Link href="/services/ai" className={`block px-3 py-2 text-sm lg:text-base ${isCurrentPath('/services/ai') ? 'text-maverick-orange' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'}`} role="menuitem" aria-current={isCurrentPath('/services/ai') ? 'page' : undefined}>
                  AI Integration & Automation
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing dropdown */}
          <div className="relative group">
            <button 
              type="button"
              aria-expanded="false"
              aria-haspopup="true"
              className={`px-2 py-1.5 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 inline-flex items-center ${
                isCurrentPath('/pricing') || isCurrentPath('/pricing/web') || isCurrentPath('/pricing/marketing') || isCurrentPath('/pricing/ai') 
                  ? 'text-maverick-orange' 
                  : 'text-maverick-orange hover:text-maverick-orange'
              }`}
              onClick={() => {}}  // Dropdown handled by hover
            >
              <span>Pricing</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 lg:h-4 lg:w-4 ml-1 transform transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-1 w-52 lg:w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-[-8px] transition-all duration-300 ease-in-out z-50">
              <div className="py-1 bg-[#1A1A1A]/95 backdrop-blur-md border border-gray-800/50 rounded-lg shadow-xl" role="menu" aria-orientation="vertical" aria-labelledby="pricing-menu">
                <Link href="/pricing" className={`block px-3 py-2 text-sm lg:text-base ${isCurrentPath('/pricing') ? 'text-maverick-orange' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'}`} role="menuitem" aria-current={isCurrentPath('/pricing') ? 'page' : undefined}>
                  All Pricing Plans
                </Link>
                <Link href="/pricing/web" className={`block px-3 py-2 text-sm lg:text-base ${isCurrentPath('/pricing/web') ? 'text-maverick-orange' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'}`} role="menuitem" aria-current={isCurrentPath('/pricing/web') ? 'page' : undefined}>
                  Web Design & Development
                </Link>
                <Link href="/pricing/marketing" className={`block px-3 py-2 text-sm lg:text-base ${isCurrentPath('/pricing/marketing') ? 'text-maverick-orange' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'}`} role="menuitem" aria-current={isCurrentPath('/pricing/marketing') ? 'page' : undefined}>
                  Marketing & Creative
                </Link>
                <Link href="/pricing/ai" className={`block px-3 py-2 text-sm lg:text-base ${isCurrentPath('/pricing/ai') ? 'text-maverick-orange' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'}`} role="menuitem" aria-current={isCurrentPath('/pricing/ai') ? 'page' : undefined}>
                  AI Integration & Automation
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about" className={`px-2 py-1.5 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${isCurrentPath('/about') ? 'text-maverick-orange' : 'text-white hover:text-maverick-orange'}`} aria-current={isCurrentPath('/about') ? 'page' : undefined}>
            About
          </Link>
          <Link href="/contact" className={`px-2 py-1.5 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${isCurrentPath('/contact') ? 'text-maverick-orange' : 'text-white hover:text-maverick-orange'}`} aria-current={isCurrentPath('/contact') ? 'page' : undefined}>
            Contact
          </Link>
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
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-40 flex flex-col md:hidden"
            style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.06) 100%)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.4), inset 1px 0 0 rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRight: 'none'
            }}
            role="dialog"
            aria-modal="true" 
            aria-label="Main Menu"
          >
            <div className="flex flex-col h-full relative">
              {/* Header with logo */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Logo size="extra-small" noLink={true} showText={false}/>
                  <span className="text-white font-semibold text-lg">Mavericks Edge</span>
                </div>
              </div>

              {/* Navigation content */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <motion.nav
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex flex-col space-y-6 w-full"
                  role="navigation"
                  aria-label="Mobile Navigation"
                >
                <Link 
                  href="/" 
                  className={`group relative py-4 px-4 rounded-lg text-left text-lg font-medium transition-all duration-200 ${
                    isCurrentPath('/') 
                      ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                      : 'text-white hover:text-maverick-orange hover:bg-white/5 border border-transparent hover:border-white/10'
                  }`} 
                  onClick={closeMenu}
                  aria-current={isCurrentPath('/') ? 'page' : undefined}
                >
                  <span className="relative z-10">Home</span>
                  {isCurrentPath('/') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 to-maverick-orange/10 rounded-lg" />
                  )}
                </Link>

                {/* Services dropdown */}
                <div className="w-full">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      const dropdown = document.getElementById('mobile-services-dropdown');
                      const chevron = document.getElementById('mobile-services-chevron');
                      if (dropdown) {
                        const isExpanded = dropdown.classList.contains('max-h-48');
                        dropdown.classList.toggle('max-h-0');
                        dropdown.classList.toggle('max-h-48');
                        dropdown.classList.toggle('opacity-0');
                        dropdown.classList.toggle('opacity-100');
                        if (chevron) {
                          chevron.classList.toggle('rotate-180');
                        }
                        // Update aria-expanded attribute
                        e.currentTarget.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
                      }
                    }}
                    className="group relative py-4 px-4 rounded-lg text-left text-lg font-medium transition-all duration-200 text-maverick-orange hover:bg-white/5 border border-transparent hover:border-white/10 w-full flex items-center justify-between"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="mobile-services-dropdown"
                  >
                    <span>Services</span>
                    <ChevronDown id="mobile-services-chevron" className="h-4 w-4 transition-transform duration-300" aria-hidden="true" />
                  </button>
                  <div 
                    id="mobile-services-dropdown" 
                    className="max-h-0 mt-2 w-full overflow-hidden opacity-0 transition-all duration-300 ease-in-out ml-4"
                    role="menu"
                    aria-labelledby="services-mobile-menu-button"
                  >
                    <div className="space-y-2 border-l-2 border-white/10 pl-4">
                      <Link 
                        href="/services" 
                        className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                          isCurrentPath('/services') 
                            ? 'text-maverick-orange bg-maverick-orange/10' 
                            : 'text-gray-300 hover:text-maverick-orange hover:bg-white/5'
                        }`} 
                        onClick={closeMenu}
                        role="menuitem"
                        aria-current={isCurrentPath('/services') ? 'page' : undefined}
                      >
                        All Services
                      </Link>
                      <Link 
                        href="/services/web" 
                        className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                          isCurrentPath('/services/web') 
                            ? 'text-maverick-orange bg-maverick-orange/10' 
                            : 'text-gray-300 hover:text-maverick-orange hover:bg-white/5'
                        }`} 
                        onClick={closeMenu}
                        role="menuitem"
                        aria-current={isCurrentPath('/services/web') ? 'page' : undefined}
                      >
                        Web Design & Development
                      </Link>
                      <Link 
                        href="/services/marketing" 
                        className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                          isCurrentPath('/services/marketing') 
                            ? 'text-maverick-orange bg-maverick-orange/10' 
                            : 'text-gray-300 hover:text-maverick-orange hover:bg-white/5'
                        }`} 
                        onClick={closeMenu}
                        role="menuitem"
                        aria-current={isCurrentPath('/services/marketing') ? 'page' : undefined}
                      >
                        Marketing & Creative
                      </Link>
                      <Link 
                        href="/services/ai" 
                        className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                          isCurrentPath('/services/ai') 
                            ? 'text-maverick-orange bg-maverick-orange/10' 
                            : 'text-gray-300 hover:text-maverick-orange hover:bg-white/5'
                        }`} 
                        onClick={closeMenu}
                        role="menuitem"
                        aria-current={isCurrentPath('/services/ai') ? 'page' : undefined}
                      >
                        AI Integration & Automation
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Pricing dropdown */}
                <div className="w-full">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      const dropdown = document.getElementById('mobile-pricing-dropdown');
                      const chevron = document.getElementById('mobile-pricing-chevron');
                      if (dropdown) {
                        const isExpanded = dropdown.classList.contains('max-h-48');
                        dropdown.classList.toggle('max-h-0');
                        dropdown.classList.toggle('max-h-48');
                        dropdown.classList.toggle('opacity-0');
                        dropdown.classList.toggle('opacity-100');
                        if (chevron) {
                          chevron.classList.toggle('rotate-180');
                        }
                        // Update aria-expanded attribute
                        e.currentTarget.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
                      }
                    }}
                    className="group relative py-4 px-4 rounded-lg text-left text-lg font-medium transition-all duration-200 text-maverick-orange hover:bg-white/5 border border-transparent hover:border-white/10 w-full flex items-center justify-between"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="mobile-pricing-dropdown"
                  >
                    <span>Pricing</span>
                    <ChevronDown id="mobile-pricing-chevron" className="h-4 w-4 transition-transform duration-300" aria-hidden="true" />
                  </button>
                  <div 
                    id="mobile-pricing-dropdown" 
                    className="max-h-0 mt-2 w-full overflow-hidden opacity-0 transition-all duration-300 ease-in-out ml-4"
                    role="menu"
                    aria-labelledby="pricing-mobile-menu-button"
                  >
                    <div className="space-y-2 border-l-2 border-white/10 pl-4">
                      <Link 
                        href="/pricing" 
                        className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                          isCurrentPath('/pricing') 
                            ? 'text-maverick-orange bg-maverick-orange/10' 
                            : 'text-gray-300 hover:text-maverick-orange hover:bg-white/5'
                        }`} 
                        onClick={closeMenu}
                        role="menuitem"
                        aria-current={isCurrentPath('/pricing') ? 'page' : undefined}
                      >
                        All Pricing Plans
                      </Link>
                      <Link 
                        href="/pricing/web" 
                        className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                          isCurrentPath('/pricing/web') 
                            ? 'text-maverick-orange bg-maverick-orange/10' 
                            : 'text-gray-300 hover:text-maverick-orange hover:bg-white/5'
                        }`} 
                        onClick={closeMenu}
                        role="menuitem"
                        aria-current={isCurrentPath('/pricing/web') ? 'page' : undefined}
                      >
                        Web Design & Development
                      </Link>
                      <Link 
                        href="/pricing/marketing" 
                        className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                          isCurrentPath('/pricing/marketing') 
                            ? 'text-maverick-orange bg-maverick-orange/10' 
                            : 'text-gray-300 hover:text-maverick-orange hover:bg-white/5'
                        }`} 
                        onClick={closeMenu}
                        role="menuitem"
                        aria-current={isCurrentPath('/pricing/marketing') ? 'page' : undefined}
                      >
                        Marketing & Creative
                      </Link>
                      <Link 
                        href="/pricing/ai" 
                        className={`block py-2 px-3 rounded-md text-base font-medium transition-all duration-200 ${
                          isCurrentPath('/pricing/ai') 
                            ? 'text-maverick-orange bg-maverick-orange/10' 
                            : 'text-gray-300 hover:text-maverick-orange hover:bg-white/5'
                        }`} 
                        onClick={closeMenu}
                        role="menuitem"
                        aria-current={isCurrentPath('/pricing/ai') ? 'page' : undefined}
                      >
                        AI Integration & Automation
                      </Link>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/about" 
                  className={`group relative py-4 px-4 rounded-lg text-left text-lg font-medium transition-all duration-200 ${
                    isCurrentPath('/about') 
                      ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                      : 'text-white hover:text-maverick-orange hover:bg-white/5 border border-transparent hover:border-white/10'
                  }`} 
                  onClick={closeMenu}
                  aria-current={isCurrentPath('/about') ? 'page' : undefined}
                >
                  <span className="relative z-10">About</span>
                  {isCurrentPath('/about') && (
                    <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 to-maverick-orange/10 rounded-lg" />
                  )}
                </Link>
                </motion.nav>
              </div>

              {/* Bottom CTA section */}
              <div className="p-6 border-t border-white/10">
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-maverick-orange to-orange-600 hover:from-orange-600 hover:to-maverick-orange transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={closeMenu}
                  aria-current={isCurrentPath('/contact') ? 'page' : undefined}
                >
                  Get Started
                </Button>
                <p className="text-gray-400 text-sm text-center mt-3">
                  Ready to build something amazing?
                </p>
              </div>
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
            className="fixed inset-0 z-30 md:hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}