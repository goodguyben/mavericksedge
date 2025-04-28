
import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Mail, Send, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-white py-12 sm:py-16 px-5 md:px-10">
      <div className="container mx-auto">
        {/* Newsletter Subscription Section */}
        <div className="mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-3">
              <div className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg mr-3">
                <Mail className="h-5 w-5 text-maverick-orange" />
              </div>
              <h3 className="text-xl font-semibold text-white">Stay in the Loop</h3>
            </div>
            
            <p className="text-[#AAAAAA] mb-6">
              Subscribe to our newsletter for the latest tech trends, industry insights, and exclusive deals. No spam, just valuable content delivered to your inbox.
            </p>
            
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form 
                  key="subscribe-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-1">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full p-3 pl-4 bg-[#1E1E1E] border border-gray-700 rounded-lg focus:outline-none focus:border-maverick-orange transition duration-300"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="bg-maverick-orange hover:bg-maverick-orange/90 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
                  >
                    Subscribe <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#1E1E1E] p-4 rounded-lg border border-maverick-orange/50 text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-maverick-orange">
                    <Send className="h-5 w-5" />
                    <span className="font-medium">Thanks for subscribing!</span>
                  </div>
                  <p className="text-sm text-[#AAAAAA] mt-1">We'll keep you updated with our latest news and offers.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
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
