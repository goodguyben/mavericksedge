import { useState } from "react";
import { Link } from "wouter";
import Logo from "@/components/Logo";
import { ChevronDown, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#0D0D0D] text-white py-12 sm:py-16 px-5 md:px-10">
      <div className="container mx-auto">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <Logo size="large" showText={true} noLink={false} />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            
            {/* Address */}
            <div className="flex items-start space-x-3 group">
              <div className="flex-shrink-0 w-10 h-10 bg-maverick-orange/10 rounded-lg flex items-center justify-center group-hover:bg-maverick-orange/20 transition-colors">
                <MapPin className="w-5 h-5 text-maverick-orange" />
              </div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm leading-relaxed">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94025<br />
                  United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3 group">
              <div className="flex-shrink-0 w-10 h-10 bg-maverick-orange/10 rounded-lg flex items-center justify-center group-hover:bg-maverick-orange/20 transition-colors">
                <Phone className="w-5 h-5 text-maverick-orange" />
              </div>
              <div className="flex-1">
                <a href="tel:+15551234567" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 group">
              <div className="flex-shrink-0 w-10 h-10 bg-maverick-orange/10 rounded-lg flex items-center justify-center group-hover:bg-maverick-orange/20 transition-colors">
                <Mail className="w-5 h-5 text-maverick-orange" />
              </div>
              <div className="flex-1">
                <a href="mailto:hello@mavericksedge.com" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">
                  hello@mavericksedge.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Services</Link></li>
              <li><Link href="/work" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Our Work</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/web-services" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Web Development</Link></li>
              <li><Link href="/marketing-services" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Digital Marketing</Link></li>
              <li><Link href="/ai-services" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">AI Integration</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Social Media & Legal */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            
            {/* Social Media Links */}
            <div className="flex space-x-3 mb-6">
              <a href="https://twitter.com/mavericksedge" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-gray-800 hover:bg-maverick-orange rounded-lg flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/mavericksedge" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-gray-800 hover:bg-maverick-orange rounded-lg flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com/mavericksedge" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-gray-800 hover:bg-maverick-orange rounded-lg flex items-center justify-center transition-colors group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-maverick-orange transition-colors text-sm">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section - Stays Centered */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-[#888888] text-sm">
          <p>© {currentYear} Mavericks Edge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}