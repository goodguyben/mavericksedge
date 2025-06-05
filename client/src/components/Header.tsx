
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
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setServicesDropdownOpen(false);
        setPricingDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen || pricingDropdownOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
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

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 w-full z-[9999] transition-all duration-300"
        role="banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.6,
          delay: isHomePage ? 4.0 : 0,
          ease: "easeInOut"
        }}
      >
        {/* Main header with frosted glass background */}
        <div className="relative backdrop-blur-md bg-black/20 border-b border-maverick-orange/10">
          {/* Logo Corner Cutout - Top Left */}
          <div className="absolute top-0 left-0 z-20">
            <div 
              className="bg-black px-6 py-4 relative shadow-2xl"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)'
              }}
            >
              <Link 
                href="/" 
                className="flex items-center touch-manipulation group" 
                aria-label="Mavericks Edge Home"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Logo size="medium-small" noLink={true} showText={false} />
                </div>
                <div className="ml-3">
                  <h1 className="font-heading font-bold text-maverick-orange whitespace-nowrap text-lg sm:text-xl md:text-2xl transition-all duration-300 group-hover:text-maverick-light-orange" 
                      style={{ letterSpacing: '-0.02em' }}>
                    Mavericks Edge
                  </h1>
                </div>
              </Link>
            </div>
          </div>

          {/* Centered Navigation Container */}
          <div className="container mx-auto flex justify-center items-center py-6 px-4 sm:px-6 lg:px-8 max-w-7xl min-h-[80px]">
            
            {/* Desktop Navigation - Perfectly Centered */}
            <nav className="hidden lg:flex items-center justify-center space-x-12 xl:space-x-16" role="navigation" aria-label="Main Navigation">
              
              {/* Home Link */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href="/" 
                  className={`relative px-6 py-3 min-h-[44px] rounded-full text-base font-semibold transition-all duration-300 touch-manipulation flex items-center group ${
                    isCurrentPath('/') 
                      ? 'text-maverick-orange bg-maverick-orange/10 shadow-lg' 
                      : 'text-white hover:text-maverick-orange hover:bg-white/5'
                  }`} 
                  aria-current={isCurrentPath('/') ? 'page' : undefined}
                >
                  Home
                  {isCurrentPath('/') && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-maverick-orange rounded-full"
                      initial={{ scale: 0, x: '-50%' }}
                      animate={{ scale: 1 }}
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>

              {/* Services Dropdown */}
              <div className="relative dropdown-container">
                <motion.button 
                  type="button"
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }}
                  className="px-6 py-3 min-h-[44px] rounded-full text-base font-semibold transition-all duration-300 inline-flex items-center touch-manipulation text-white hover:text-maverick-orange hover:bg-white/5 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Services</span>
                  <ChevronDown className={`ml-2 h-4 w-4 transition-all duration-300 ${
                    servicesDropdownOpen ? 'rotate-180 text-maverick-orange' : 'group-hover:text-maverick-orange'
                  }`} />
                </motion.button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-72 z-50"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="py-4 bg-black/95 backdrop-blur-xl border border-maverick-orange/30 rounded-2xl shadow-2xl" role="menu">
                        <Link 
                          href="/services" 
                          className={`block px-6 py-4 min-h-[44px] text-base font-medium touch-manipulation transition-all duration-200 ${
                            isCurrentPath('/services') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                          }`} 
                          role="menuitem"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          All Services
                        </Link>
                        <Link 
                          href="/services/web" 
                          className={`block px-6 py-4 min-h-[44px] text-base font-medium touch-manipulation transition-all duration-200 ${
                            isCurrentPath('/services/web') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                          }`} 
                          role="menuitem"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          Web Design & Development
                        </Link>
                        <Link 
                          href="/services/marketing" 
                          className={`block px-6 py-4 min-h-[44px] text-base font-medium touch-manipulation transition-all duration-200 ${
                            isCurrentPath('/services/marketing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                          }`} 
                          role="menuitem"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          Marketing & Creative
                        </Link>
                        <Link 
                          href="/services/ai" 
                          className={`block px-6 py-4 min-h-[44px] text-base font-medium touch-manipulation transition-all duration-200 ${
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
              <div className="relative dropdown-container">
                <motion.button 
                  type="button"
                  aria-expanded={pricingDropdownOpen}
                  aria-haspopup="true"
                  onMouseEnter={() => setPricingDropdownOpen(true)}
                  onMouseLeave={() => setPricingDropdownOpen(false)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPricingDropdownOpen(!pricingDropdownOpen);
                  }}
                  className="px-6 py-3 min-h-[44px] rounded-full text-base font-semibold transition-all duration-300 inline-flex items-center touch-manipulation text-white hover:text-maverick-orange hover:bg-white/5 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Pricing</span>
                  <ChevronDown className={`ml-2 h-4 w-4 transition-all duration-300 ${
                    pricingDropdownOpen ? 'rotate-180 text-maverick-orange' : 'group-hover:text-maverick-orange'
                  }`} />
                </motion.button>

                <AnimatePresence>
                  {pricingDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-72 z-50"
                      onMouseEnter={() => setPricingDropdownOpen(true)}
                      onMouseLeave={() => setPricingDropdownOpen(false)}
                    >
                      <div className="py-4 bg-black/95 backdrop-blur-xl border border-maverick-orange/30 rounded-2xl shadow-2xl" role="menu">
                        <Link 
                          href="/pricing" 
                          className={`block px-6 py-4 min-h-[44px] text-base font-medium touch-manipulation transition-all duration-200 ${
                            isCurrentPath('/pricing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                          }`} 
                          role="menuitem"
                          onClick={() => setPricingDropdownOpen(false)}
                        >
                          All Pricing Plans
                        </Link>
                        <Link 
                          href="/pricing/web" 
                          className={`block px-6 py-4 min-h-[44px] text-base font-medium touch-manipulation transition-all duration-200 ${
                            isCurrentPath('/pricing/web') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                          }`} 
                          role="menuitem"
                          onClick={() => setPricingDropdownOpen(false)}
                        >
                          Web Design & Development
                        </Link>
                        <Link 
                          href="/pricing/marketing" 
                          className={`block px-6 py-4 min-h-[44px] text-base font-medium touch-manipulation transition-all duration-200 ${
                            isCurrentPath('/pricing/marketing') ? 'text-maverick-orange bg-maverick-orange/10' : 'text-white hover:bg-maverick-orange/10 hover:text-maverick-orange'
                          }`} 
                          role="menuitem"
                          onClick={() => setPricingDropdownOpen(false)}
                        >
                          Marketing & Creative
                        </Link>
                        <Link 
                          href="/pricing/ai" 
                          className={`block px-6 py-4 min-h-[44px] text-base font-medium touch-manipulation transition-all duration-200 ${
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
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href="/about" 
                  className={`relative px-6 py-3 min-h-[44px] rounded-full text-base font-semibold transition-all duration-300 touch-manipulation flex items-center group ${
                    isCurrentPath('/about') 
                      ? 'text-maverick-orange bg-maverick-orange/10 shadow-lg' 
                      : 'text-white hover:text-maverick-orange hover:bg-white/5'
                  }`} 
                  aria-current={isCurrentPath('/about') ? 'page' : undefined}
                >
                  About
                  {isCurrentPath('/about') && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-maverick-orange rounded-full"
                      initial={{ scale: 0, x: '-50%' }}
                      animate={{ scale: 1 }}
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>

              {/* Contact Link */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href="/contact" 
                  className={`relative px-6 py-3 min-h-[44px] rounded-full text-base font-semibold transition-all duration-300 touch-manipulation flex items-center group ${
                    isCurrentPath('/contact') 
                      ? 'text-maverick-orange bg-maverick-orange/10 shadow-lg' 
                      : 'text-white hover:text-maverick-orange hover:bg-white/5'
                  }`} 
                  aria-current={isCurrentPath('/contact') ? 'page' : undefined}
                >
                  Contact
                  {isCurrentPath('/contact') && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-maverick-orange rounded-full"
                      initial={{ scale: 0, x: '-50%' }}
                      animate={{ scale: 1 }}
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button - Positioned to the right */}
            <div className="absolute right-6 lg:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="p-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] touch-manipulation bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-maverick-orange/30"
                aria-label="Toggle mobile navigation menu"
                aria-expanded={isMobileMenuOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-maverick-orange" />
                  ) : (
                    <Menu className="h-6 w-6 text-white" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Navigation Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 250,
                duration: 0.5 
              }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 flex flex-col lg:hidden"
              style={{
                backdropFilter: 'blur(32px) saturate(200%)',
                WebkitBackdropFilter: 'blur(32px) saturate(200%)',
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(20, 20, 20, 0.95) 100%)',
                borderLeft: '1px solid rgba(255, 86, 0, 0.4)',
                boxShadow: `-20px 0 80px rgba(0, 0, 0, 0.8), 
                           inset 1px 0 0 rgba(255, 255, 255, 0.08),
                           0 0 40px rgba(255, 86, 0, 0.15)`,
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {/* Header */}
              <div className="relative">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-maverick-orange to-yellow-500 rounded-full"></div>
                    <h2 className="text-xl text-white font-bold tracking-wide">Navigation</h2>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2.5 rounded-xl hover:bg-white/10 text-white transition-all duration-200 min-h-[44px] min-w-[44px] touch-manipulation group"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maverick-orange/30 to-transparent"></div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <nav className="space-y-2">
                  {/* Home */}
                  <Link 
                    href="/" 
                    className={`group flex items-center px-4 py-4 rounded-xl min-h-[56px] touch-manipulation transition-all duration-300 relative overflow-hidden ${
                      isCurrentPath('/') 
                        ? 'text-maverick-orange bg-gradient-to-r from-maverick-orange/15 to-yellow-500/10 border border-maverick-orange/20' 
                        : 'text-white hover:bg-white/8 hover:text-maverick-orange border border-transparent hover:border-white/10'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {isCurrentPath('/') && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-maverick-orange to-yellow-500 rounded-r-full"></div>
                    )}
                    <span className="text-lg font-semibold relative z-10">Home</span>
                    <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>

                  {/* Services Dropdown */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="group flex items-center justify-between w-full px-4 py-4 rounded-xl min-h-[56px] touch-manipulation transition-all duration-300 text-white hover:bg-white/8 hover:text-maverick-orange border border-transparent hover:border-white/10"
                    >
                      <span className="text-lg font-semibold">Services</span>
                      <ChevronDown className={`w-5 h-5 transition-all duration-300 ${
                        servicesDropdownOpen ? 'rotate-180 text-maverick-orange' : 'text-white'
                      }`} />
                    </button>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="ml-6 space-y-1 overflow-hidden border-l border-white/10 pl-4"
                        >
                          <Link 
                            href="/services" 
                            className={`block px-4 py-3 rounded-lg min-h-[44px] touch-manipulation transition-all duration-200 ${
                              isCurrentPath('/services') 
                                ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-base font-medium">All Services</span>
                          </Link>
                          <Link 
                            href="/services/web" 
                            className={`block px-4 py-3 rounded-lg min-h-[44px] touch-manipulation transition-all duration-200 ${
                              isCurrentPath('/services/web') 
                                ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-base font-medium">Web Design & Development</span>
                          </Link>
                          <Link 
                            href="/services/marketing" 
                            className={`block px-4 py-3 rounded-lg min-h-[44px] touch-manipulation transition-all duration-200 ${
                              isCurrentPath('/services/marketing') 
                                ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-base font-medium">Marketing & Creative</span>
                          </Link>
                          <Link 
                            href="/services/ai" 
                            className={`block px-4 py-3 rounded-lg min-h-[44px] touch-manipulation transition-all duration-200 ${
                              isCurrentPath('/services/ai') 
                                ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-base font-medium">AI Integration & Automation</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Pricing Dropdown */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => setPricingDropdownOpen(!pricingDropdownOpen)}
                      className="group flex items-center justify-between w-full px-4 py-4 rounded-xl min-h-[56px] touch-manipulation transition-all duration-300 text-white hover:bg-white/8 hover:text-maverick-orange border border-transparent hover:border-white/10"
                    >
                      <span className="text-lg font-semibold">Pricing</span>
                      <ChevronDown className={`w-5 h-5 transition-all duration-300 ${
                        pricingDropdownOpen ? 'rotate-180 text-maverick-orange' : 'text-white'
                      }`} />
                    </button>

                    <AnimatePresence>
                      {pricingDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="ml-6 space-y-1 overflow-hidden border-l border-white/10 pl-4"
                        >
                          <Link 
                            href="/pricing" 
                            className={`block px-4 py-3 rounded-lg min-h-[44px] touch-manipulation transition-all duration-200 ${
                              isCurrentPath('/pricing') 
                                ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-base font-medium">All Pricing Plans</span>
                          </Link>
                          <Link 
                            href="/pricing/web" 
                            className={`block px-4 py-3 rounded-lg min-h-[44px] touch-manipulation transition-all duration-200 ${
                              isCurrentPath('/pricing/web') 
                                ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-base font-medium">Web Design & Development</span>
                          </Link>
                          <Link 
                            href="/pricing/marketing" 
                            className={`block px-4 py-3 rounded-lg min-h-[44px] touch-manipulation transition-all duration-200 ${
                              isCurrentPath('/pricing/marketing') 
                                ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-base font-medium">Marketing & Creative</span>
                          </Link>
                          <Link 
                            href="/pricing/ai" 
                            className={`block px-4 py-3 rounded-lg min-h-[44px] touch-manipulation transition-all duration-200 ${
                              isCurrentPath('/pricing/ai') 
                                ? 'text-maverick-orange bg-maverick-orange/10 border border-maverick-orange/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            <span className="text-base font-medium">AI Integration & Automation</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* About */}
                  <Link 
                    href="/about" 
                    className={`group flex items-center px-4 py-4 rounded-xl min-h-[56px] touch-manipulation transition-all duration-300 relative overflow-hidden ${
                      isCurrentPath('/about') 
                        ? 'text-maverick-orange bg-gradient-to-r from-maverick-orange/15 to-yellow-500/10 border border-maverick-orange/20' 
                        : 'text-white hover:bg-white/8 hover:text-maverick-orange border border-transparent hover:border-white/10'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {isCurrentPath('/about') && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-maverick-orange to-yellow-500 rounded-r-full"></div>
                    )}
                    <span className="text-lg font-semibold relative z-10">About</span>
                    <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>

                  {/* Contact */}
                  <Link 
                    href="/contact" 
                    className={`group flex items-center px-4 py-4 rounded-xl min-h-[56px] touch-manipulation transition-all duration-300 relative overflow-hidden ${
                      isCurrentPath('/contact') 
                        ? 'text-maverick-orange bg-gradient-to-r from-maverick-orange/15 to-yellow-500/10 border border-maverick-orange/20' 
                        : 'text-white hover:bg-white/8 hover:text-maverick-orange border border-transparent hover:border-white/10'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {isCurrentPath('/contact') && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-maverick-orange to-yellow-500 rounded-r-full"></div>
                    )}
                    <span className="text-lg font-semibold relative z-10">Contact</span>
                    <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <div className="w-6 h-px bg-gradient-to-r from-transparent via-maverick-orange to-transparent"></div>
                  <span className="text-sm font-medium">Mavericks Edge</span>
                  <div className="w-6 h-px bg-gradient-to-r from-transparent via-maverick-orange to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
