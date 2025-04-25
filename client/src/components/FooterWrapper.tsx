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
            </div>
            <p className="footer-tagline">
              Creative solutions for ambitious brands. Web development, marketing, and AI services designed for growth.
            </p>
          </div>

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

          {/* Company Links */}
          <div className="footer-nav">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="/about">About Us</a></li>
              <li className="footer-link"><a href="/work">Our Work</a></li>
              <li className="footer-link"><a href="/pricing">Pricing</a></li>
              <li className="footer-link"><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-info">
              <span className="icon">📍</span>
              <span>123 Innovation Ave, San Francisco, CA 94103</span>
            </div>
            <div className="footer-contact-info">
              <span className="icon">📱</span>
              <a href="tel:+14155550123">(415) 555-0123</a>
            </div>
            <div className="footer-contact-info">
              <span className="icon">✉️</span>
              <a href="mailto:hello@mavericksedge.com">hello@mavericksedge.com</a>
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