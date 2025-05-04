import { useState } from "react";
import { Link } from "wouter";
import Logo from "@/components/Logo";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#0D0D0D] text-white py-12 sm:py-16 px-5 md:px-10 relative overflow-hidden">
      {/* Laughing cat animation with attention-grabber */}
      <motion.div
        className="absolute bottom-16 right-16 w-20 h-20 rounded-full bg-maverick-orange/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-8 right-8 z-10 cursor-pointer"
        whileHover={{ scale: 1.2 }}
        animate={isHovered ? {
          rotate: [0, 5, -5, 5, 0],
          y: [0, -5, 0, -5, 0]
        } : {}}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg width="100" height="100" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            fill="#FF5630" 
            d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0zm0 34c-8.837 0-16-7.163-16-16S9.163 2 18 2s16 7.163 16 16-7.163 16-16 16z"
            animate={{ 
              scale: isHovered ? [1, 1.05, 1] : [1, 1.02, 1],
              fillOpacity: isHovered ? [0.8, 1, 0.8] : [0.8, 0.9, 0.8]
            }}
            style={{
              filter: "drop-shadow(0 0 8px rgba(255, 86, 48, 0.8))"
            }}
            transition={{ repeat: Infinity, duration: isHovered ? 1 : 2 }}
          />
          <motion.path 
            fill="#FF5630" 
            d="M25.5 11.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm-15 0c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
            animate={{ 
              scaleY: isHovered ? [1, 0.3, 1] : 1 
            }}
            transition={{ repeat: isHovered ? Infinity : 0, duration: 0.3, repeatDelay: 1 }}
          />
          <motion.path 
            fill="#FF5630" 
            d="M18 21c-3.623 0-6.027.422-9 1-.679.131-1 2-1 2 0 4.439 5.159 8 10 8s10-3.561 10-8c0 0-.321-1.869-1-2-2.973-.578-5.377-1-9-1z"
            animate={{ 
              d: isHovered ? 
                "M18 21c-3.623 0-6.027.422-9 1-.679.131-1 2-1 2 0 4.439 5.159 8 10 8s10-3.561 10-8c0 0-.321-1.869-1-2-2.973-.578-5.377-1-9-1z" : 
                "M18 25c-3.623 0-6.027-.422-9-1-.679-.131-1-2-1-2 0-4.439 5.159-8 10-8s10 3.561 10 8c0 0-.321 1.869-1 2-2.973.578-5.377 1-9 1z"
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.path 
            fill="#FFFFFF" 
            d="M15 24c.304 0 .591.064.923.172C16.58 24.46 17.287 24.5 18 24.5s1.42-.04 2.077-.328c.332-.108.619-.172.923-.172"
            animate={{ 
              opacity: isHovered ? [0, 1, 0] : 0,
              pathLength: isHovered ? [0, 1, 0] : 0
            }}
            transition={{ repeat: isHovered ? Infinity : 0, duration: 0.8, repeatDelay: 0.5 }}
          />
          {isHovered && (
            <motion.path 
              fill="#FFF" 
              d="M22 26c-.5 0-.5.5-1 1s-1.5 1-3 1-2.5-.5-3-1-.5-1-1-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          )}
        </svg>
      </motion.div>
      
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