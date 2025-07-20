import { useEffect, useRef, useState } from 'react';
import '../styles/footer.css';
import Newsletter from './Newsletter';
import SEOFooter from './sections/SEOFooter';
import { motion } from 'framer-motion';

// Define a simple Footer component that uses the same Logo component as the header
export default function FooterWrapper() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure footer only becomes visible after a delay to prevent rendering before hero
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    if (footerRef.current) {
      // Update year in footer
      const currentYearElement = footerRef.current.querySelector('#currentYear');
      if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear().toString();
      }
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className={`footer-container transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      role="contentinfo" 
      aria-label="Site Footer"
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      <div className="footer-wrapper">
        <div className="footer-top">
          {/* Newsletter Subscription Section */}
          <div className="footer-logo-section">
            {isVisible && <Newsletter />}
          </div>

          {/* Navigation Links Container - wraps the three nav sections */}
          <div className="footer-nav-container">
            {/* Services Links */}
            <nav className="footer-nav" aria-label="Services Navigation">
              <h2 className="footer-heading">Services</h2>
              <ul className="footer-links">
                <li className="footer-link"><a href="/web-design-services-edmonton" title="Website Design Services Edmonton">Website Design</a></li>
                <li className="footer-link"><a href="/digital-marketing-services-edmonton" title="Edmonton Digital Marketing Services">Digital Marketing</a></li>
                <li className="footer-link"><a href="/ai-automation-services-edmonton" title="Edmonton AI Integration & Automation Services">AI Integration</a></li>
                <li className="footer-link"><a href="/services" title="All Services">All Services</a></li>
                <li className="footer-link"><a href="/pricing-edmonton-web-design-marketing" title="Service Pricing">Pricing</a></li>
              </ul>
            </nav>

            {/* Resources Links */}
            <nav className="footer-nav" aria-label="Resources Navigation">
              <h2 className="footer-heading">Company</h2>
              <ul className="footer-links">
                <li className="footer-link"><a href="/about" title="About Mavericks Edge">About Us</a></li>
                <li className="footer-link"><a href="/portfolio-edmonton-web-design" title="Our Work & Portfolio">Our Work</a></li>
                <li className="footer-link"><a href="/contact" title="Contact Mavericks Edge">Contact</a></li>
                <li className="footer-link"><a href="/pricing-edmonton-web-design-marketing" title="Service Pricing">Pricing</a></li>
                <li className="footer-link"><a href="/compliance" title="Compliance & Standards">Compliance</a></li>
              </ul>
            </nav>

            {/* Legal Links */}
            <nav className="footer-nav" aria-label="Legal Navigation">
              <h2 className="footer-heading">Legal</h2>
              <ul className="footer-links">
                <li className="footer-link"><a href="/privacy" title="Mavericks Edge Privacy Policy">Privacy Policy</a></li>
                <li className="footer-link"><a href="/terms" title="Web Design Services Terms of Service">Terms of Service</a></li>
                <li className="footer-link"><a href="/cookie-policy" title="Website Cookie Policy & Tracking Information">Cookie Policy</a></li>
                <li className="footer-link"><a href="/gdpr-compliance" title="GDPR Compliance & Data Protection">GDPR Compliance</a></li>
                <li className="footer-link"><a href="/accessibility" title="Website Accessibility Statement & Compliance">Accessibility</a></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" aria-hidden="true"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; <span id="currentYear">2025</span> Mavericks Edge. All rights reserved.</p>
            <div className="mt-4 text-sm">
              <div className="flex items-center flex-wrap gap-4 text-gray-300">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-maverick-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-maverick-orange">6908 100 Ave NW, Suite B, Edmonton, AB T6A 0G2, Canada</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-maverick-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15551234567" className="hover:text-maverick-orange transition-colors">+1 (250) 883-8849</a>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-maverick-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@mavericksedge.ca" className="hover:text-maverick-orange transition-colors">info@mavericksedge.ca</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <h2 className="sr-only">Social Media Links</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="https://x.com/mavericksedge" title="Follow us on X" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">X</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/mavericksedge" title="Like us on Facebook" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mavericksedge" title="Follow us on Instagram" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/mavericks-edge/" title="Connect with us on LinkedIn" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SEOFooter />
    </footer>
  );
}