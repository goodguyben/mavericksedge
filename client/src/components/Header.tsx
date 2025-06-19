import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-maverick-orange transition-colors duration-200 px-3 py-2 text-base font-medium"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-[#1A1A1A]/95 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800/50 shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const NavMenu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-xl flex justify-center space-x-4 px-8 py-3"
    >
      {children}
    </nav>
  );
};

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => {
  return (
    <Link href={href}>
      <motion.span
        className={`cursor-pointer px-3 py-2 text-base font-medium transition-colors duration-200 ${
          isActive ? 'text-maverick-orange' : 'text-white hover:text-maverick-orange'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

const DropdownLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link href={href}>
      <motion.div
        className="block px-4 py-3 text-white hover:text-maverick-orange hover:bg-maverick-orange/10 rounded-lg transition-all duration-200 cursor-pointer"
        onClick={onClick}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
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
    setActive(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isMobileMenuOpen]);

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
        className="sticky top-0 left-0 w-full py-3 px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300 backdrop-blur-md border-b border-maverick-orange/10 bg-[#12121226]"
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
            <Logo size="medium-small" noLink={true} showText={false} />
            <h1 className="font-heading font-bold text-maverick-orange whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl ml-[0px] mr-[0px] mt-[16px] mb-[16px]" style={{ letterSpacing: '-0.02em' }}>
              Mavericks Edge
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavMenu setActive={setActive}>
              <NavLink href="/" isActive={isCurrentPath('/')}>
                Home
              </NavLink>

              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-2 min-w-[240px]">
                  <DropdownLink href="/services" onClick={() => setActive(null)}>
                    All Services
                  </DropdownLink>
                  <DropdownLink href="/services/web" onClick={() => setActive(null)}>
                    Web Design & Development
                  </DropdownLink>
                  <DropdownLink href="/services/marketing" onClick={() => setActive(null)}>
                    Marketing & Creative
                  </DropdownLink>
                  <DropdownLink href="/services/ai" onClick={() => setActive(null)}>
                    AI Integration & Automation
                  </DropdownLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Pricing">
                <div className="flex flex-col space-y-2 min-w-[240px]">
                  <DropdownLink href="/pricing" onClick={() => setActive(null)}>
                    All Pricing Plans
                  </DropdownLink>
                  <DropdownLink href="/pricing/web" onClick={() => setActive(null)}>
                    Web Design & Development
                  </DropdownLink>
                  <DropdownLink href="/pricing/marketing" onClick={() => setActive(null)}>
                    Marketing & Creative
                  </DropdownLink>
                  <DropdownLink href="/pricing/ai" onClick={() => setActive(null)}>
                    AI Integration & Automation
                  </DropdownLink>
                </div>
              </MenuItem>

              <NavLink href="/about" isActive={isCurrentPath('/about')}>
                About
              </NavLink>

              <NavLink href="/contact" isActive={isCurrentPath('/contact')}>
                Contact
              </NavLink>
            </NavMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="block lg:hidden p-3 rounded-full transition-colors duration-200 min-h-[44px] min-w-[44px] touch-manipulation"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99998,
                height: '100dvh',
                width: '100vw'
              }}
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
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm flex flex-col lg:hidden"
              style={{
                position: 'fixed',
                zIndex: 99999,
                height: '100dvh',
                backdropFilter: 'blur(32px) saturate(200%)',
                WebkitBackdropFilter: 'blur(32px) saturate(200%)',
                background: 'linear-gradient(135deg, rgba(18, 18, 18, 0.98) 0%, rgba(20, 20, 20, 0.95) 100%)',
                borderLeft: '1px solid rgba(255, 86, 0, 0.4)',
                boxShadow: `-20px 0 80px rgba(0, 0, 0, 0.6), 
                           inset 1px 0 0 rgba(255, 255, 255, 0.08),
                           0 0 40px rgba(255, 86, 0, 0.1)`,
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {/* Header */}
              <div className="relative">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3 mt-[16px] mb-[16px]">
                    <div className="w-2 h-8 bg-gradient-to-b from-maverick-orange to-yellow-500 rounded-full"></div>
                    <h2 className="text-xl text-white font-bold tracking-wide mt-[8px] mb-[8px]">Navigation</h2>
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
                <nav className="space-y-2 mt-[23px] mb-[23px]">
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
                  </Link>

                  <Link 
                    href="/services" 
                    className={`group flex items-center px-4 py-4 rounded-xl min-h-[56px] touch-manipulation transition-all duration-300 relative overflow-hidden ${
                      isCurrentPath('/services') 
                        ? 'text-maverick-orange bg-gradient-to-r from-maverick-orange/15 to-yellow-500/10 border border-maverick-orange/20' 
                        : 'text-white hover:bg-white/8 hover:text-maverick-orange border border-transparent hover:border-white/10'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {isCurrentPath('/services') && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-maverick-orange to-yellow-500 rounded-r-full"></div>
                    )}
                    <span className="text-lg font-semibold relative z-10">Services</span>
                  </Link>

                  <Link 
                    href="/pricing" 
                    className={`group flex items-center px-4 py-4 rounded-xl min-h-[56px] touch-manipulation transition-all duration-300 relative overflow-hidden ${
                      isCurrentPath('/pricing') 
                        ? 'text-maverick-orange bg-gradient-to-r from-maverick-orange/15 to-yellow-500/10 border border-maverick-orange/20' 
                        : 'text-white hover:bg-white/8 hover:text-maverick-orange border border-transparent hover:border-white/10'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {isCurrentPath('/pricing') && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-maverick-orange to-yellow-500 rounded-r-full"></div>
                    )}
                    <span className="text-lg font-semibold relative z-10">Pricing</span>
                  </Link>

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
                  </Link>

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