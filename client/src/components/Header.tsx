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
          <h1 className="font-heading font-bold text-maverick-orange ml-3 md:ml-2 whitespace-nowrap text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mt-0 md:mt-3" style={{ letterSpacing: '-0.02em' }}>
            Mavericks Edge
          </h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden focus:outline-none z-50 p-3"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 ml-[2px] mr-[2px] pl-[0px] pr-[0px]" role="navigation" aria-label="Main Navigation">
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
      {/* Mobile Navigation - Modern Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              duration: 0.4, 
              ease: [0.23, 1, 0.32, 1],
              type: "tween"
            }}
            className="fixed top-0 right-0 h-full w-[90%] max-w-sm bg-gradient-to-b from-[#1A1A1A] via-[#161616] to-[#121212] backdrop-blur-xl border-l border-maverick-orange/20 z-40 flex flex-col lg:hidden shadow-2xl"
            role="dialog"
            aria-modal="true" 
            aria-label="Main Menu"
          >
            {/* Header Section */}
            <motion.div 
              className="flex items-center justify-between p-6 border-b border-maverick-slate/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-maverick-orange to-maverick-light-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-white font-semibold text-lg">Menu</span>
              </div>
              <motion.button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-maverick-slate/20 hover:bg-maverick-slate/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>

            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto py-6">
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-6 space-y-2"
                role="navigation"
                aria-label="Mobile Navigation"
              >
                {/* Home Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link 
                    href="/" 
                    className={`group flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                      isCurrentPath('/') 
                        ? 'bg-gradient-to-r from-maverick-orange/20 to-maverick-light-orange/20 border border-maverick-orange/30' 
                        : 'hover:bg-maverick-slate/20'
                    }`}
                    onClick={closeMenu}
                    aria-current={isCurrentPath('/') ? 'page' : undefined}
                  >
                    <div className={`p-2 rounded-lg transition-colors ${
                      isCurrentPath('/') ? 'bg-maverick-orange text-white' : 'bg-maverick-slate/30 text-gray-400 group-hover:text-white'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                      </svg>
                    </div>
                    <span className={`font-medium ${isCurrentPath('/') ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      Home
                    </span>
                  </Link>
                </motion.div>

                {/* Services Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <div className={`group rounded-xl transition-all duration-200 ${
                    isCurrentPath('/services') || isCurrentPath('/services/web') || isCurrentPath('/services/marketing') || isCurrentPath('/services/ai')
                      ? 'bg-gradient-to-r from-maverick-orange/20 to-maverick-light-orange/20 border border-maverick-orange/30' 
                      : 'hover:bg-maverick-slate/20'
                  }`}>
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
                      className="w-full flex items-center justify-between p-4"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-controls="mobile-services-dropdown"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg transition-colors ${
                          isCurrentPath('/services') || isCurrentPath('/services/web') || isCurrentPath('/services/marketing') || isCurrentPath('/services/ai')
                            ? 'bg-maverick-orange text-white' 
                            : 'bg-maverick-slate/30 text-gray-400 group-hover:text-white'
                        }`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className={`font-medium ${
                          isCurrentPath('/services') || isCurrentPath('/services/web') || isCurrentPath('/services/marketing') || isCurrentPath('/services/ai')
                            ? 'text-white' 
                            : 'text-gray-300 group-hover:text-white'
                        }`}>
                          Services
                        </span>
                      </div>
                      <ChevronDown 
                        id="mobile-services-chevron" 
                        className="w-4 h-4 text-gray-400 transition-transform duration-300" 
                        aria-hidden="true" 
                      />
                    </button>
                    
                    <div 
                      id="mobile-services-dropdown" 
                      className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out"
                      role="menu"
                      aria-labelledby="services-mobile-menu-button"
                    >
                      <div className="px-4 pb-4 space-y-1">
                        <Link 
                          href="/services" 
                          className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/services') 
                              ? 'bg-maverick-orange/30 text-maverick-orange' 
                              : 'text-gray-400 hover:text-white hover:bg-maverick-slate/20'
                          }`}
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/services') ? 'page' : undefined}
                        >
                          All Services
                        </Link>
                        <Link 
                          href="/services/web" 
                          className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/services/web') 
                              ? 'bg-maverick-orange/30 text-maverick-orange' 
                              : 'text-gray-400 hover:text-white hover:bg-maverick-slate/20'
                          }`}
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/services/web') ? 'page' : undefined}
                        >
                          Web Development
                        </Link>
                        <Link 
                          href="/services/marketing" 
                          className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/services/marketing') 
                              ? 'bg-maverick-orange/30 text-maverick-orange' 
                              : 'text-gray-400 hover:text-white hover:bg-maverick-slate/20'
                          }`}
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/services/marketing') ? 'page' : undefined}
                        >
                          Digital Marketing
                        </Link>
                        <Link 
                          href="/services/ai" 
                          className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/services/ai') 
                              ? 'bg-maverick-orange/30 text-maverick-orange' 
                              : 'text-gray-400 hover:text-white hover:bg-maverick-slate/20'
                          }`}
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/services/ai') ? 'page' : undefined}
                        >
                          AI Integration
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Pricing Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-2"
                >
                  <div className={`group rounded-xl transition-all duration-200 ${
                    isCurrentPath('/pricing') || isCurrentPath('/pricing/web') || isCurrentPath('/pricing/marketing') || isCurrentPath('/pricing/ai')
                      ? 'bg-gradient-to-r from-maverick-orange/20 to-maverick-light-orange/20 border border-maverick-orange/30' 
                      : 'hover:bg-maverick-slate/20'
                  }`}>
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
                      className="w-full flex items-center justify-between p-4"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-controls="mobile-pricing-dropdown"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg transition-colors ${
                          isCurrentPath('/pricing') || isCurrentPath('/pricing/web') || isCurrentPath('/pricing/marketing') || isCurrentPath('/pricing/ai')
                            ? 'bg-maverick-orange text-white' 
                            : 'bg-maverick-slate/30 text-gray-400 group-hover:text-white'
                        }`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className={`font-medium ${
                          isCurrentPath('/pricing') || isCurrentPath('/pricing/web') || isCurrentPath('/pricing/marketing') || isCurrentPath('/pricing/ai')
                            ? 'text-white' 
                            : 'text-gray-300 group-hover:text-white'
                        }`}>
                          Pricing
                        </span>
                      </div>
                      <ChevronDown 
                        id="mobile-pricing-chevron" 
                        className="w-4 h-4 text-gray-400 transition-transform duration-300" 
                        aria-hidden="true" 
                      />
                    </button>
                    
                    <div 
                      id="mobile-pricing-dropdown" 
                      className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out"
                      role="menu"
                      aria-labelledby="pricing-mobile-menu-button"
                    >
                      <div className="px-4 pb-4 space-y-1">
                        <Link 
                          href="/pricing" 
                          className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/pricing') 
                              ? 'bg-maverick-orange/30 text-maverick-orange' 
                              : 'text-gray-400 hover:text-white hover:bg-maverick-slate/20'
                          }`}
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/pricing') ? 'page' : undefined}
                        >
                          All Pricing Plans
                        </Link>
                        <Link 
                          href="/pricing/web" 
                          className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/pricing/web') 
                              ? 'bg-maverick-orange/30 text-maverick-orange' 
                              : 'text-gray-400 hover:text-white hover:bg-maverick-slate/20'
                          }`}
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/pricing/web') ? 'page' : undefined}
                        >
                          Web Development
                        </Link>
                        <Link 
                          href="/pricing/marketing" 
                          className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/pricing/marketing') 
                              ? 'bg-maverick-orange/30 text-maverick-orange' 
                              : 'text-gray-400 hover:text-white hover:bg-maverick-slate/20'
                          }`}
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/pricing/marketing') ? 'page' : undefined}
                        >
                          Digital Marketing
                        </Link>
                        <Link 
                          href="/pricing/ai" 
                          className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                            isCurrentPath('/pricing/ai') 
                              ? 'bg-maverick-orange/30 text-maverick-orange' 
                              : 'text-gray-400 hover:text-white hover:bg-maverick-slate/20'
                          }`}
                          onClick={closeMenu}
                          role="menuitem"
                          aria-current={isCurrentPath('/pricing/ai') ? 'page' : undefined}
                        >
                          AI Integration
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* About Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link 
                    href="/about" 
                    className={`group flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                      isCurrentPath('/about') 
                        ? 'bg-gradient-to-r from-maverick-orange/20 to-maverick-light-orange/20 border border-maverick-orange/30' 
                        : 'hover:bg-maverick-slate/20'
                    }`}
                    onClick={closeMenu}
                    aria-current={isCurrentPath('/about') ? 'page' : undefined}
                  >
                    <div className={`p-2 rounded-lg transition-colors ${
                      isCurrentPath('/about') ? 'bg-maverick-orange text-white' : 'bg-maverick-slate/30 text-gray-400 group-hover:text-white'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className={`font-medium ${isCurrentPath('/about') ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      About
                    </span>
                  </Link>
                </motion.div>
              </motion.nav>
            </div>

            {/* Footer Section with CTA */}
            <motion.div 
              className="border-t border-maverick-slate/20 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                href="/contact"
                variant="primary"
                className="w-full py-4 text-center font-semibold bg-gradient-to-r from-maverick-orange to-maverick-light-orange hover:from-maverick-light-orange hover:to-maverick-orange transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={closeMenu}
                aria-current={isCurrentPath('/contact') ? 'page' : undefined}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              
              {/* Contact Info */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400 mb-2">Ready to discuss your project?</p>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span>hello@mavericksedge.ca</span>
                  </span>
                </div>
              </div>
            </motion.div>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}