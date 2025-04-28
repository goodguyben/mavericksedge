
import { useState, useEffect } from "react";
import { Link } from "wouter";
import Logo from "@/components/Logo";
import { Mail, MapPin, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { contactInfo, services } from "@/lib/constants";
import { motion } from "framer-motion";

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
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-white">
      {/* Top curved border effect */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="none" className="w-full">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M0 0L60 4C120 8 240 16 360 20C480 24 600 24 720 20C840 16 960 8 1080 4C1200 0 1320 0 1380 0H1440V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0V0Z" 
            fill="#0D0D0D"
          />
        </svg>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-maverick-orange/5 rounded-full blur-[150px] z-0 opacity-30"></div>
      <div className="absolute -bottom-[400px] -left-[400px] w-[800px] h-[800px] bg-maverick-orange/5 rounded-full blur-[180px] z-0 opacity-30"></div>
      
      {/* Main footer content */}
      <div className="container mx-auto relative z-10 pt-20 pb-10 px-6 md:px-8">
        {/* Grid layout for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Company info and newsletter - takes 5 columns on desktop */}
          <div className="md:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              {/* Logo and company name */}
              <div className="flex items-center mb-6">
                <div className="w-40 h-40">
                  <Logo size="small" showText={false} noLink={true} />
                </div>
                <span className="font-logo font-bold text-2xl text-maverick-orange">
                  Mavericks Edge
                </span>
              </div>
              
              {/* Company description */}
              <p className="text-gray-400 mb-8 text-base leading-relaxed max-w-md">
                Empowering businesses with innovative digital solutions. We blend creativity with technology to elevate your brand and drive meaningful results.
              </p>
              
              {/* Newsletter subscription with modern design */}
              <div>
                <h4 className="text-white font-medium mb-3 text-lg">Stay Updated</h4>
                <p className="text-gray-400 mb-4 text-sm">Get the latest insights and updates directly to your inbox.</p>
                <form onSubmit={handleSubscribe} className="flex">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#232323] w-full text-white border border-gray-700 rounded-l-lg px-4 py-3 focus:outline-none focus:border-maverick-orange focus:ring-1 focus:ring-maverick-orange transition-colors"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-maverick-orange hover:bg-maverick-orange/90 text-white px-4 py-3 rounded-r-lg transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Navigation links - desktop view */}
          {!isMobile ? (
            <>
              {/* Quick Links - 2 columns */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-2"
              >
                <h3 className="text-lg font-medium mb-6 relative inline-block">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-maverick-orange"></span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-maverick-orange transition-colors inline-block pb-1 relative group">
                      <span>Home</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-maverick-orange transition-colors inline-block pb-1 relative group">
                      <span>About</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-maverick-orange transition-colors inline-block pb-1 relative group">
                      <span>Services</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/work" className="text-gray-300 hover:text-maverick-orange transition-colors inline-block pb-1 relative group">
                      <span>Work</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-gray-300 hover:text-maverick-orange transition-colors inline-block pb-1 relative group">
                      <span>Pricing</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-maverick-orange transition-colors inline-block pb-1 relative group">
                      <span>Contact</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Services - 3 columns */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2"
              >
                <h3 className="text-lg font-medium mb-6 relative inline-block">
                  Our Services
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-maverick-orange"></span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/web" className="text-gray-300 hover:text-maverick-orange transition-colors inline-flex items-center group pb-1 relative">
                      <span>Web Solutions</span>
                      <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/marketing" className="text-gray-300 hover:text-maverick-orange transition-colors inline-flex items-center group pb-1 relative">
                      <span>Marketing</span>
                      <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ai" className="text-gray-300 hover:text-maverick-orange transition-colors inline-flex items-center group pb-1 relative">
                      <span>AI Integration</span>
                      <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maverick-orange transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Contact Section - 3 columns */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-3"
              >
                <h3 className="text-lg font-medium mb-6 relative inline-block">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-maverick-orange"></span>
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="p-2 rounded-full bg-[#232323] mr-3">
                      <Phone className="h-4 w-4 text-maverick-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <p className="text-gray-200">{contactInfo.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 rounded-full bg-[#232323] mr-3">
                      <Mail className="h-4 w-4 text-maverick-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="text-gray-200">{contactInfo.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 rounded-full bg-[#232323] mr-3">
                      <MapPin className="h-4 w-4 text-maverick-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Address</p>
                      <p className="text-gray-200">{contactInfo.address.line1}</p>
                      <p className="text-gray-200">{contactInfo.address.line2}</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </>
          ) : (
            // Mobile accordion navigation 
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7"
            >
              {/* Quick Links Section */}
              <div className="border-b border-gray-800">
                <button 
                  onClick={() => toggleSection('quickLinks')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <h3 className="text-lg font-medium text-white">Quick Links</h3>
                  <div className={`w-5 h-5 relative transition-transform duration-300 ${openSection === 'quickLinks' ? 'transform rotate-45' : ''}`}>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-maverick-orange transform -translate-y-1/2"></span>
                    <span className={`absolute top-0 left-1/2 w-0.5 h-full bg-maverick-orange transform -translate-x-1/2 ${openSection === 'quickLinks' ? 'opacity-100' : 'opacity-100'}`}></span>
                  </div>
                </button>
                {openSection === 'quickLinks' && (
                  <div className="py-3 grid grid-cols-2 gap-y-3 gap-x-2 pl-4 mb-2">
                    <Link href="/" className="text-gray-300 hover:text-maverick-orange transition-colors">Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-maverick-orange transition-colors">About</Link>
                    <Link href="/services" className="text-gray-300 hover:text-maverick-orange transition-colors">Services</Link>
                    <Link href="/work" className="text-gray-300 hover:text-maverick-orange transition-colors">Work</Link>
                    <Link href="/pricing" className="text-gray-300 hover:text-maverick-orange transition-colors">Pricing</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-maverick-orange transition-colors">Contact</Link>
                  </div>
                )}
              </div>
              
              {/* Services Section */}
              <div className="border-b border-gray-800">
                <button 
                  onClick={() => toggleSection('services')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <h3 className="text-lg font-medium text-white">Services</h3>
                  <div className={`w-5 h-5 relative transition-transform duration-300 ${openSection === 'services' ? 'transform rotate-45' : ''}`}>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-maverick-orange transform -translate-y-1/2"></span>
                    <span className={`absolute top-0 left-1/2 w-0.5 h-full bg-maverick-orange transform -translate-x-1/2 ${openSection === 'services' ? 'opacity-100' : 'opacity-100'}`}></span>
                  </div>
                </button>
                {openSection === 'services' && (
                  <div className="py-3 grid grid-cols-1 gap-y-3 pl-4 mb-2">
                    <Link href="/services/web" className="text-gray-300 hover:text-maverick-orange transition-colors">Web & Digital Solutions</Link>
                    <Link href="/services/marketing" className="text-gray-300 hover:text-maverick-orange transition-colors">Marketing & Creative</Link>
                    <Link href="/services/ai" className="text-gray-300 hover:text-maverick-orange transition-colors">AI Integration & Automation</Link>
                  </div>
                )}
              </div>
              
              {/* Contact Section */}
              <div className="border-b border-gray-800">
                <button 
                  onClick={() => toggleSection('contact')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <h3 className="text-lg font-medium text-white">Contact Us</h3>
                  <div className={`w-5 h-5 relative transition-transform duration-300 ${openSection === 'contact' ? 'transform rotate-45' : ''}`}>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-maverick-orange transform -translate-y-1/2"></span>
                    <span className={`absolute top-0 left-1/2 w-0.5 h-full bg-maverick-orange transform -translate-x-1/2 ${openSection === 'contact' ? 'opacity-100' : 'opacity-100'}`}></span>
                  </div>
                </button>
                {openSection === 'contact' && (
                  <div className="py-4 space-y-4 pl-4 mb-2">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-[#232323] mr-3">
                        <Phone className="h-4 w-4 text-maverick-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Phone</p>
                        <p className="text-gray-200">{contactInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-[#232323] mr-3">
                        <Mail className="h-4 w-4 text-maverick-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email</p>
                        <p className="text-gray-200">{contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-[#232323] mr-3">
                        <MapPin className="h-4 w-4 text-maverick-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Address</p>
                        <p className="text-gray-200">{contactInfo.address.line1}</p>
                        <p className="text-gray-200">{contactInfo.address.line2}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Legal Section */}
              <div className="border-b border-gray-800">
                <button 
                  onClick={() => toggleSection('legal')}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <h3 className="text-lg font-medium text-white">Legal</h3>
                  <div className={`w-5 h-5 relative transition-transform duration-300 ${openSection === 'legal' ? 'transform rotate-45' : ''}`}>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-maverick-orange transform -translate-y-1/2"></span>
                    <span className={`absolute top-0 left-1/2 w-0.5 h-full bg-maverick-orange transform -translate-x-1/2 ${openSection === 'legal' ? 'opacity-100' : 'opacity-100'}`}></span>
                  </div>
                </button>
                {openSection === 'legal' && (
                  <div className="py-3 grid grid-cols-1 gap-y-3 pl-4 mb-2">
                    <Link href="/privacy" className="text-gray-300 hover:text-maverick-orange transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-gray-300 hover:text-maverick-orange transition-colors">Terms of Service</Link>
                    <Link href="/cookies" className="text-gray-300 hover:text-maverick-orange transition-colors">Cookie Policy</Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Divider with gradient effect */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-700 to-transparent opacity-20"></div>
          </div>
        </div>
        
        {/* Bottom section with copyright and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright notice */}
          <div className="text-gray-400 text-sm order-2 md:order-1">
            © {currentYear} <span className="text-maverick-orange">Mavericks Edge</span>. All rights reserved.
          </div>
          
          {/* Social icons with hover effects */}
          <div className="flex space-x-4 order-1 md:order-2">
            <a 
              href={contactInfo.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
              aria-label="Facebook"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 
                group-hover:text-white group-hover:border-maverick-orange group-hover:bg-maverick-orange/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
            </a>
            <a 
              href={contactInfo.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
              aria-label="Instagram"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 
                group-hover:text-white group-hover:border-maverick-orange group-hover:bg-maverick-orange/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </div>
            </a>
            <a 
              href={contactInfo.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
              aria-label="Twitter"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 
                group-hover:text-white group-hover:border-maverick-orange group-hover:bg-maverick-orange/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
            </a>
            <a 
              href={contactInfo.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
              aria-label="LinkedIn"
            >
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 
                group-hover:text-white group-hover:border-maverick-orange group-hover:bg-maverick-orange/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Legal links for desktop (hidden on mobile) */}
        {!isMobile && (
          <div className="flex justify-center mt-6 space-x-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-maverick-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-maverick-orange transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-maverick-orange transition-colors">Cookie Policy</Link>
          </div>
        )}
      </div>
    </footer>
  );
}
