
import { useState } from "react";
import { Link } from "wouter";
import Logo from "@/components/Logo";
import { ChevronDown } from "lucide-react";
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
        {/* Logo Section - Stays Centered */}
        <div className="text-center mb-10">
          <div className="mb-4 flex justify-center items-center">
            <div className="w-40 h-40">
              <Logo size={isMobile ? "small" : "large"} showText={false} noLink={true} />
            </div>
            <span className="font-logo font-bold text-xl sm:text-2xl text-maverick-orange ml-2">
              Mavericks Edge
            </span>
          </div>
        </div>

        {/* Mobile Accordion Navigation */}
        {isMobile ? (
          <div className="mb-10 space-y-3">
            {/* Navigation Section */}
            <div className="border-b border-maverick-slate/20">
              <button 
                onClick={() => toggleSection('navigation')}
                className="w-full flex justify-between items-center py-3 text-left"
              >
                <h3 className="text-lg font-semibold">Navigation</h3>
                <ChevronDown 
                  className={`transition-transform ${openSection === 'navigation' ? 'rotate-180' : ''}`} 
                  size={18} 
                />
              </button>
              {openSection === 'navigation' && (
                <div className="py-3 pl-4 space-y-3">
                  <div><Link href="/" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Home</Link></div>
                  <div><Link href="/about" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">About</Link></div>
                  <div><Link href="/services" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Services</Link></div>
                  <div><Link href="/contact" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Contact</Link></div>
                </div>
              )}
            </div>
            
            {/* Legal Section */}
            <div className="border-b border-maverick-slate/20">
              <button 
                onClick={() => toggleSection('legal')}
                className="w-full flex justify-between items-center py-3 text-left"
              >
                <h3 className="text-lg font-semibold">Legal</h3>
                <ChevronDown 
                  className={`transition-transform ${openSection === 'legal' ? 'rotate-180' : ''}`}
                  size={18}
                />
              </button>
              {openSection === 'legal' && (
                <div className="py-3 pl-4 space-y-3">
                  <div><Link href="/privacy" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Privacy Policy</Link></div>
                  <div><Link href="/terms" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Terms of Service</Link></div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Desktop Navigation & Legal Sections Wrapper
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-lg mx-auto">
            {/* Navigation Section Column */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 inline-block">Navigation</h3>
              <div className="h-0.5 w-12 bg-maverick-orange mb-4 mx-auto md:mx-0"></div>
              <ul className="space-y-3">
                <li><Link href="/" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">About</Link></li>
                <li><Link href="/services" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Section Column */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 inline-block">Legal</h3>
              <div className="h-0.5 w-12 bg-maverick-orange mb-4 mx-auto md:mx-0"></div>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        )}

        {/* Copyright Section - Stays Centered */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-[#888888] text-sm">
          <p>© {currentYear} Mavericks Edge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
