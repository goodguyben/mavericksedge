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
    <footer className="bg-[#0D0D0D] text-white py-12 xxs:py-14 xs:py-15 phone:py-16 sm:py-16 md:py-18 lg:py-20 lgxl:py-20 xl:py-20 xl2:py-20 2xl:py-24 px-5 xxs:px-6 xs:px-7 phone:px-8 sm:px-8 md:px-10 lg:px-12 lgxl:px-12 xl:px-12 xl2:px-12 2xl:px-16">
      <div className="container mx-auto">
        {/* Footer spacer - replacing logo section */}
        <div className="pt-6"></div>

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
                  <div><Link href="/cookie-policy" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Cookie Policy</Link></div>
                  <div><Link href="/gdpr-compliance" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">GDPR Compliance</Link></div>
                  <div><Link href="/accessibility" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Accessibility</Link></div>
                </div>
              )}
            </div>

            {/* Blog & RSS Section */}
            <div className="border-b border-maverick-slate/20">
              <button 
                onClick={() => toggleSection('blog')}
                className="w-full flex justify-between items-center py-3 text-left"
              >
                <h3 className="text-lg font-semibold">Blog & RSS</h3>
                <ChevronDown 
                  className={`transition-transform ${openSection === 'blog' ? 'rotate-180' : ''}`}
                  size={18}
                />
              </button>
              {openSection === 'blog' && (
                <div className="py-3 pl-4 space-y-3">
                  <div><Link href="/blog" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Blog</Link></div>
                  <div><a href="/rss.xml" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">RSS Feed</a></div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Desktop Navigation & Legal Sections Wrapper
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lgxl:grid-cols-3 xl:grid-cols-3 xl2:grid-cols-3 2xl:grid-cols-3 gap-x-8 xxs:gap-x-9 xs:gap-x-10 phone:gap-x-10 sm:gap-x-10 md:gap-x-10 lg:gap-x-12 lgxl:gap-x-12 xl:gap-x-12 xl2:gap-x-12 2xl:gap-x-14 gap-y-6 xxs:gap-y-7 xs:gap-y-8 phone:gap-y-8 sm:gap-y-8 md:gap-y-8 lg:gap-y-10 lgxl:gap-y-10 xl:gap-y-10 xl2:gap-y-10 2xl:gap-y-12 max-w-4xl mx-auto">
            {/* Navigation Section Column */}
            <div className="text-center md:text-left lg:text-left lgxl:text-left xl:text-left xl2:text-left 2xl:text-left">
              <h3 className="text-xl xxs:text-lg xs:text-lg phone:text-xl sm:text-xl md:text-xl lg:text-xl lgxl:text-xl xl:text-xl xl2:text-xl 2xl:text-xl font-semibold mb-2 inline-block">Navigation</h3>
              <div className="h-0.5 w-12 bg-maverick-orange mb-4 mx-auto md:mx-0 lg:mx-0 lgxl:mx-0 xl:mx-0 xl2:mx-0 2xl:mx-0"></div>
              <ul className="space-y-3">
                <li><Link href="/" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">About</Link></li>
                <li><Link href="/services" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Section Column */}
            <div className="text-center md:text-left lg:text-left lgxl:text-left xl:text-left xl2:text-left 2xl:text-left">
              <h3 className="text-xl xxs:text-lg xs:text-lg phone:text-xl sm:text-xl md:text-xl lg:text-xl lgxl:text-xl xl:text-xl xl2:text-xl 2xl:text-xl font-semibold mb-2 inline-block">Legal</h3>
              <div className="h-0.5 w-12 bg-maverick-orange mb-4 mx-auto md:mx-0 lg:mx-0 lgxl:mx-0 xl:mx-0 xl2:mx-0 2xl:mx-0"></div>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Terms of Service</Link></li>
                  <li><Link href="/cookie-policy" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Cookie Policy</Link></li>
                  <li><Link href="/gdpr-compliance" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">GDPR Compliance</Link></li>
                  <li><Link href="/accessibility" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Accessibility</Link></li>
              </ul>
            </div>

            {/* Blog & RSS Section Column */}
            <div className="text-center md:text-left lg:text-left lgxl:text-left xl:text-left xl2:text-left 2xl:text-left">
              <h3 className="text-xl xxs:text-lg xs:text-lg phone:text-xl sm:text-xl md:text-xl lg:text-xl lgxl:text-xl xl:text-xl xl2:text-xl 2xl:text-xl font-semibold mb-2 inline-block">Blog & RSS</h3>
              <div className="h-0.5 w-12 bg-maverick-orange mb-4 mx-auto md:mx-0 lg:mx-0 lgxl:mx-0 xl:mx-0 xl2:mx-0 2xl:mx-0"></div>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Blog</Link></li>
                <li><a href="/rss.xml" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">RSS Feed</a></li>
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