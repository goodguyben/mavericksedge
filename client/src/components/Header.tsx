
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <a className="flex items-center">
              <Logo className="h-8 w-auto sm:h-10" />
            </a>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={`text-sm font-medium transition-colors hover:text-maverick-orange ${
                location === item.href ? 'text-maverick-orange' : 'text-white'
              }`}>
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:text-maverick-orange transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 sm:top-20 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
            <div className="relative bg-[#121212] border-b border-gray-800">
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a className={`block text-lg font-medium transition-colors hover:text-maverick-orange ${
                      location === item.href ? 'text-maverick-orange' : 'text-white'
                    }`}>
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
