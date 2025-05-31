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
            transition={{ 
              duration: 0.4, 
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-40 flex flex-col md:hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(30, 30, 30, 0.9) 50%, rgba(18, 18, 18, 0.95) 100%)',
              backdropFilter: 'blur(32px) saturate(200%) brightness(1.1)',
              WebkitBackdropFilter: 'blur(32px) saturate(200%) brightness(1.1)',
              borderLeft: '1px solid rgba(255, 86, 48, 0.2)',
              boxShadow: `
                -20px 0 60px rgba(0, 0, 0, 0.8),
                -10px 0 30px rgba(255, 86, 48, 0.1),
                inset 1px 0 0 rgba(255, 255, 255, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.05)
              `
            }}
            role="dialog"
            aria-modal="true" 
            aria-label="Main Menu"
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(45deg, rgba(255, 86, 48, 0.1) 0%, transparent 30%, transparent 70%, rgba(255, 215, 75, 0.05) 100%)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Top accent line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 86, 48, 0.6) 50%, transparent 100%)'
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Content container */}
            <div className="flex flex-col h-full relative z-10">
              {/* Header section with logo */}
              <motion.div
                className="flex items-center justify-center py-8 px-6 border-b border-white/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3">
                  <Logo size="small" noLink={true} showText={false} />
                  <span className="text-white font-heading font-bold text-lg">
                    Mavericks Edge
                  </span>
                </div>
              </motion.div>

              {/* Navigation content */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-2"
                  role="navigation"
                  aria-label="Mobile Navigation"
                >
                  {/* Home */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <Link 
                      href="/" 
                      className={`group flex items-center py-4 px-4 rounded-xl transition-all duration-300 ${
                        isCurrentPath('/') 
                          ? 'bg-maverick-orange/20 text-maverick-orange border border-maverick-orange/30' 
                          : 'text-white hover:bg-white/5 hover:text-maverick-orange border border-transparent hover:border-white/10'
                      }`}
                      onClick={closeMenu}
                      aria-current={isCurrentPath('/') ? 'page' : undefined}
                    >
                      <span className="text-lg font-medium">Home</span>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </motion.div>

                  {/* Services */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        const dropdown = document.getElementById('mobile-services-dropdown');
                        const chevron = document.getElementById('mobile-services-chevron');
                        if (dropdown) {
                          const isExpanded = dropdown.classList.contains('max-h-96');
                          dropdown.classList.toggle('max-h-0');
                          dropdown.classList.toggle('max-h-96');
                          dropdown.classList.toggle('opacity-0');
                          dropdown.classList.toggle('opacity-100');
                          if (chevron) {
                            chevron.classList.toggle('rotate-180');
                          }
                          e.currentTarget.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
                        }
                      }}
                      className={`group w-full flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
                        isCurrentPath('/services') || isCurrentPath('/services/web') || isCurrentPath('/services/marketing') || isCurrentPath('/services/ai')
                          ? 'bg-maverick-orange/20 text-maverick-orange border border-maverick-orange/30' 
                          : 'text-maverick-orange hover:bg-white/5 border border-transparent hover:border-white/10'
                      }`}
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-controls="mobile-services-dropdown"
                    >
                      <span className="text-lg font-medium">Services</span>
                      <ChevronDown 
                        id="mobile-services-chevron" 
                        className="w-4 h-4 transition-transform duration-300" 
                        aria-hidden="true" 
                      />
                    </button>
                    <div 
                      id="mobile-services-dropdown" 
                      className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out ml-4"
                      role="menu"
                      aria-labelledby="services-mobile-menu-button"
                    >
                      <div className="space-y-1 py-2 border-l border-white/10 pl-4">
                        <Link 
                          href="/services" 
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/services') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`} 
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/services') ? 'page' : undefined}
                        >
                          All Services
                        </Link>
                        <Link 
                          href="/services/web" 
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/services/web') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`} 
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/services/web') ? 'page' : undefined}
                        >
                          Web Design & Development
                        </Link>
                        <Link 
                          href="/services/marketing" 
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/services/marketing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`} 
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/services/marketing') ? 'page' : undefined}
                        >
                          Marketing & Creative
                        </Link>
                        <Link 
                          href="/services/ai" 
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/services/ai') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`} 
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/services/ai') ? 'page' : undefined}
                        >
                          AI Integration & Automation
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* Pricing */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        const dropdown = document.getElementById('mobile-pricing-dropdown');
                        const chevron = document.getElementById('mobile-pricing-chevron');
                        if (dropdown) {
                          const isExpanded = dropdown.classList.contains('max-h-96');
                          dropdown.classList.toggle('max-h-0');
                          dropdown.classList.toggle('max-h-96');
                          dropdown.classList.toggle('opacity-0');
                          dropdown.classList.toggle('opacity-100');
                          if (chevron) {
                            chevron.classList.toggle('rotate-180');
                          }
                          e.currentTarget.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
                        }
                      }}
                      className={`group w-full flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
                        isCurrentPath('/pricing') || isCurrentPath('/pricing/web') || isCurrentPath('/pricing/marketing') || isCurrentPath('/pricing/ai')
                          ? 'bg-maverick-orange/20 text-maverick-orange border border-maverick-orange/30' 
                          : 'text-maverick-orange hover:bg-white/5 border border-transparent hover:border-white/10'
                      }`}
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-controls="mobile-pricing-dropdown"
                    >
                      <span className="text-lg font-medium">Pricing</span>
                      <ChevronDown 
                        id="mobile-pricing-chevron" 
                        className="w-4 h-4 transition-transform duration-300" 
                        aria-hidden="true" 
                      />
                    </button>
                    <div 
                      id="mobile-pricing-dropdown" 
                      className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out ml-4"
                      role="menu"
                      aria-labelledby="pricing-mobile-menu-button"
                    >
                      <div className="space-y-1 py-2 border-l border-white/10 pl-4">
                        <Link 
                          href="/pricing" 
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/pricing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`} 
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/pricing') ? 'page' : undefined}
                        >
                          All Pricing Plans
                        </Link>
                        <Link 
                          href="/pricing/web" 
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/pricing/web') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`} 
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/pricing/web') ? 'page' : undefined}
                        >
                          Web Design & Development
                        </Link>
                        <Link 
                          href="/pricing/marketing" 
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/pricing/marketing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`} 
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/pricing/marketing') ? 'page' : undefined}
                        >
                          Marketing & Creative
                        </Link>
                        <Link 
                          href="/pricing/ai" 
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/pricing/ai') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`} 
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/pricing/ai') ? 'page' : undefined}
                        >
                          AI Integration & Automation
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* About */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <Link 
                      href="/about" 
                      className={`group flex items-center py-4 px-4 rounded-xl transition-all duration-300 ${
                        isCurrentPath('/about') 
                          ? 'bg-maverick-orange/20 text-maverick-orange border border-maverick-orange/30' 
                          : 'text-white hover:bg-white/5 hover:text-maverick-orange border border-transparent hover:border-white/10'
                      }`}
                      onClick={closeMenu}
                      aria-current={isCurrentPath('/about') ? 'page' : undefined}
                    >
                      <span className="text-lg font-medium">About</span>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.nav>
              </div>

              {/* Footer section with contact button */}
              <motion.div
                className="p-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full py-4 text-lg font-medium bg-gradient-to-r from-maverick-orange to-yellow-500 hover:from-maverick-orange/90 hover:to-yellow-500/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-maverick-orange/25"
                  onClick={closeMenu}
                  aria-current={isCurrentPath('/contact') ? 'page' : undefined}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Floating particles animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-maverick-orange/40 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Enhanced backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(18, 18, 18, 0.8) 50%, rgba(0, 0, 0, 0.6) 100%)',
              backdropFilter: 'blur(12px) saturate(150%)',
              WebkitBackdropFilter: 'blur(12px) saturate(150%)'
            }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}