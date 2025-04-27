import { useEffect, useRef } from 'react';
import '../styles/footer.css';
import Logo from './Logo';

// Define a simple Footer component that uses the same Logo component as the header
export default function FooterWrapper() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      // Update year in footer
      const currentYearElement = footerRef.current.querySelector('#currentYear');
      if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear().toString();
      }
    }
  }, []);

  return (
    <footer ref={footerRef} className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-top">
          {/* Logo & About Section */}
          <div className="footer-logo-section">
            <div className="footer-logo">
              {/* Use the Logo component from the header */}
              <Logo size="medium" noLink={true} showText={false} />
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-maverick-orange ml-0 mt-6 sm:mt-4 sm:ml-0">
                Mavericks Edge
              </h2>
            </div>
          </div>

          {/* Navigation Links Container - wraps the three nav sections */}
          <div className="footer-nav-container">
            {/* Services Links */}
            <div className="footer-nav">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="/services">Web Development</a></li>
                <li className="footer-link"><a href="/services">Digital Marketing</a></li>
                <li className="footer-link"><a href="/services">AI Integration</a></li>
                <li className="footer-link"><a href="/services">Content Creation</a></li>
                <li className="footer-link"><a href="/services">SEO Optimization</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="footer-nav">
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="/blog">Blog</a></li>
                <li className="footer-link"><a href="/case-studies">Case Studies</a></li>
                <li className="footer-link"><a href="/guides">Guides</a></li>
                <li className="footer-link"><a href="/faq">FAQ</a></li>
                <li className="footer-link"><a href="/support">Support</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="footer-nav">
              <h3 className="footer-heading">Legal</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="/privacy">Privacy Policy</a></li>
                <li className="footer-link"><a href="/terms">Terms of Service</a></li>
                <li className="footer-link"><a href="/cookies">Cookie Policy</a></li>
                <li className="footer-link"><a href="/gdpr">GDPR Compliance</a></li>
                <li className="footer-link"><a href="/accessibility">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; <span id="currentYear">2025</span> Mavericks Edge. All rights reserved.
          </div>
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}