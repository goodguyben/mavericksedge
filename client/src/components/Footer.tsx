
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Logo from "@/components/Logo";
import { Mail, MapPin, Phone, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { contactInfo, services } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
    // You would add actual subscription functionality here
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0D0D0D] to-[#151515] text-white pt-16 pb-8 px-5 md:px-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>
      <div className="absolute -top-[250px] -right-[250px] w-[500px] h-[500px] bg-maverick-orange/5 rounded-full blur-[120px] z-0"></div>
      <div className="absolute -bottom-[350px] -left-[350px] w-[700px] h-[700px] bg-maverick-orange/5 rounded-full blur-[150px] z-0"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Footer Top - Main Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Company Information */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center mb-6">
              <Logo size="small" showText={false} noLink={true} />
              <span className="font-logo font-bold text-2xl text-maverick-orange ml-3">
                Mavericks Edge
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Digital solutions that elevate your business. Web development, marketing, and AI integration services designed for growth.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mt-auto">
              <h4 className="text-white font-medium mb-3">Stay in the loop</h4>
              <form onSubmit={handleSubscribe} className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1A1A1A] text-white border border-gray-700 rounded-l-md px-4 py-2 flex-grow focus:outline-none focus:border-maverick-orange transition-colors"
                  required
                />
                <button type="submit" className="bg-maverick-orange hover:bg-maverick-orange/90 text-white px-4 py-2 rounded-r-md transition-colors">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
          
          {/* Mobile Accordion Navigation */}
          {isMobile ? (
            <div className="lg:col-span-8 space-y-3">
              {/* Quick Links Section */}
              <div className="border-b border-gray-800">
                <button 
                  onClick={() => toggleSection('quickLinks')}
                  className="w-full flex justify-between items-center py-3 text-left"
                >
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${openSection === 'quickLinks' ? 'rotate-180' : ''}`} 
                    size={18} 
                  />
                </button>
                {openSection === 'quickLinks' && (
                  <div className="py-3 grid grid-cols-2 gap-y-3 gap-x-2 pl-4">
                    <Link href="/" className="text-gray-400 hover:text-maverick-orange transition-colors">Home</Link>
                    <Link href="/about" className="text-gray-400 hover:text-maverick-orange transition-colors">About</Link>
                    <Link href="/services" className="text-gray-400 hover:text-maverick-orange transition-colors">Services</Link>
                    <Link href="/work" className="text-gray-400 hover:text-maverick-orange transition-colors">Work</Link>
                    <Link href="/pricing" className="text-gray-400 hover:text-maverick-orange transition-colors">Pricing</Link>
                    <Link href="/contact" className="text-gray-400 hover:text-maverick-orange transition-colors">Contact</Link>
                  </div>
                )}
              </div>
              
              {/* Services Section */}
              <div className="border-b border-gray-800">
                <button 
                  onClick={() => toggleSection('services')}
                  className="w-full flex justify-between items-center py-3 text-left"
                >
                  <h3 className="text-lg font-semibold">Services</h3>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${openSection === 'services' ? 'rotate-180' : ''}`} 
                    size={18} 
                  />
                </button>
                {openSection === 'services' && (
                  <div className="py-3 grid grid-cols-1 gap-y-3 pl-4">
                    <Link href="/services/web" className="text-gray-400 hover:text-maverick-orange transition-colors">Web & Digital Solutions</Link>
                    <Link href="/services/marketing" className="text-gray-400 hover:text-maverick-orange transition-colors">Marketing & Creative</Link>
                    <Link href="/services/ai" className="text-gray-400 hover:text-maverick-orange transition-colors">AI Integration & Automation</Link>
                  </div>
                )}
              </div>
              
              {/* Contact Section */}
              <div className="border-b border-gray-800">
                <button 
                  onClick={() => toggleSection('contact')}
                  className="w-full flex justify-between items-center py-3 text-left"
                >
                  <h3 className="text-lg font-semibold">Contact Us</h3>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${openSection === 'contact' ? 'rotate-180' : ''}`} 
                    size={18} 
                  />
                </button>
                {openSection === 'contact' && (
                  <div className="py-3 space-y-4 pl-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-maverick-orange mr-3 mt-1" />
                      <span className="text-gray-400">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-maverick-orange mr-3 mt-1" />
                      <span className="text-gray-400">{contactInfo.email}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-maverick-orange mr-3 mt-1" />
                      <div className="text-gray-400">
                        <p>{contactInfo.address.line1}</p>
                        <p>{contactInfo.address.line2}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Legal Section */}
              <div className="border-b border-gray-800">
                <button 
                  onClick={() => toggleSection('legal')}
                  className="w-full flex justify-between items-center py-3 text-left"
                >
                  <h3 className="text-lg font-semibold">Legal</h3>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${openSection === 'legal' ? 'rotate-180' : ''}`} 
                    size={18} 
                  />
                </button>
                {openSection === 'legal' && (
                  <div className="py-3 grid grid-cols-1 gap-y-3 pl-4">
                    <Link href="/privacy" className="text-gray-400 hover:text-maverick-orange transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-gray-400 hover:text-maverick-orange transition-colors">Terms of Service</Link>
                    <Link href="/cookies" className="text-gray-400 hover:text-maverick-orange transition-colors">Cookie Policy</Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Desktop Sections
            <>
              {/* Quick Links Section */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-6 relative inline-block">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-maverick-orange"></span>
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-gray-400 hover:text-maverick-orange transition-colors inline-flex items-center">Home</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-maverick-orange transition-colors inline-flex items-center">About</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-maverick-orange transition-colors inline-flex items-center">Services</Link></li>
                  <li><Link href="/work" className="text-gray-400 hover:text-maverick-orange transition-colors inline-flex items-center">Work</Link></li>
                  <li><Link href="/pricing" className="text-gray-400 hover:text-maverick-orange transition-colors inline-flex items-center">Pricing</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-maverick-orange transition-colors inline-flex items-center">Contact</Link></li>
                </ul>
              </div>

              {/* Services Section */}
              <div className="lg:col-span-3">
                <h3 className="text-lg font-semibold mb-6 relative inline-block">
                  Our Services
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-maverick-orange"></span>
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/services/web" className="text-gray-400 hover:text-maverick-orange transition-colors group inline-flex items-center">Web & Digital Solutions <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                  <li><Link href="/services/marketing" className="text-gray-400 hover:text-maverick-orange transition-colors group inline-flex items-center">Marketing & Creative <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                  <li><Link href="/services/ai" className="text-gray-400 hover:text-maverick-orange transition-colors group inline-flex items-center">AI Integration & Automation <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="lg:col-span-3">
                <h3 className="text-lg font-semibold mb-6 relative inline-block">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-maverick-orange"></span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-maverick-orange mr-3 mt-0.5" />
                    <span className="text-gray-400">{contactInfo.phone}</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-maverick-orange mr-3 mt-0.5" />
                    <span className="text-gray-400">{contactInfo.email}</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-maverick-orange mr-3 mt-0.5" />
                    <div className="text-gray-400">
                      <p className="m-0">{contactInfo.address.line1}</p>
                      <p className="m-0">{contactInfo.address.line2}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Mavericks Edge. All rights reserved.
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-maverick-orange hover:bg-maverick-orange/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-maverick-orange hover:bg-maverick-orange/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-maverick-orange hover:bg-maverick-orange/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-maverick-orange hover:bg-maverick-orange/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
