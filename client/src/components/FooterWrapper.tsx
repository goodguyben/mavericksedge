import { useEffect, useRef } from 'react';
import '../styles/footer.css';
import Newsletter from './Newsletter';

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
    <footer ref={footerRef} className="footer-container" role="contentinfo" aria-label="Site Footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          {/* Newsletter Subscription Section */}
          <div className="footer-logo-section">
            <Newsletter />
          </div>

          {/* Navigation Links Container - wraps the three nav sections */}
          <div className="footer-nav-container">
            {/* Services Links */}
            <nav className="footer-nav" aria-label="Services Navigation">
              <h2 className="footer-heading">Services</h2>
              <ul className="footer-links">
                <li className="footer-link"><a href="/services/web" title="Web Design & Development Services">Web Development</a></li>
                <li className="footer-link"><a href="/services/marketing" title="Digital Marketing Services">Digital Marketing</a></li>
                <li className="footer-link"><a href="/services/ai" title="AI Integration Services">AI Integration</a></li>
                <li className="footer-link"><a href="/services/content" title="Content Creation Services">Content Creation</a></li>
                <li className="footer-link"><a href="/services/seo" title="SEO Optimization Services">SEO Optimization</a></li>
              </ul>
            </nav>

            {/* Resources Links */}
            <nav className="footer-nav" aria-label="Resources Navigation">
              <h2 className="footer-heading">Resources</h2>
              <ul className="footer-links">
                <li className="footer-link"><a href="/blog" title="Read our latest articles">Blog</a></li>
                <li className="footer-link"><a href="/case-studies" title="View our success stories">Case Studies</a></li>
                <li className="footer-link"><a href="/guides" title="Free guides and resources">Guides</a></li>
                <li className="footer-link"><a href="/faq" title="Frequently asked questions">FAQ</a></li>
                <li className="footer-link"><a href="/support" title="Get customer support">Support</a></li>
              </ul>
            </nav>

            {/* Legal Links */}
            <nav className="footer-nav" aria-label="Legal Navigation">
              <h2 className="footer-heading">Legal</h2>
              <ul className="footer-links">
                <li className="footer-link"><a href="/privacy" title="Our privacy policy">Privacy Policy</a></li>
                <li className="footer-link"><a href="/terms" title="Terms of service">Terms of Service</a></li>
                <li className="footer-link"><a href="/cookies" title="Cookie policy information">Cookie Policy</a></li>
                <li className="footer-link"><a href="/gdpr" title="GDPR compliance information">GDPR Compliance</a></li>
                <li className="footer-link"><a href="/accessibility" title="Accessibility statement">Accessibility</a></li>
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
            <address className="mt-2 text-sm text-gray-400">
              6908 100 Ave NW, Suite B, Edmonton, AB T6A 0G2, Canada<br />
              <a href="tel:+15551234567" className="hover:text-maverick-orange">+1 (250) 883-8849</a> • 
              <a href="mailto:info@mavericksedge.com" className="hover:text-maverick-orange ml-1">info@mavericksedge.com</a>
            </address>
          </div>
          <div className="footer-social">
            <h2 className="sr-only">Social Media Links</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="https://twitter.com/mavericksedge" title="Follow us on Twitter" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://facebook.com/mavericksedge" title="Like us on Facebook" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/mavericksedge" title="Follow us on Instagram" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/mavericksedge" title="Connect with us on LinkedIn" target="_blank" rel="noopener noreferrer" className="social-icon">
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
    </footer>
  );
}