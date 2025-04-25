import { useEffect, useRef } from 'react';
import '../styles/footer.css';

const currentYear = new Date().getFullYear();

// Define a simple Footer component that doesn't rely on dynamic loading
export default function FooterWrapper() {
  return (
    <footer className="footer-container bg-maverick-charcoal text-maverick-cream py-16">
      <div className="container mx-auto px-4">
        
        {/* Logo and Company Name - Centered at the top */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            {/* Embedded SVG logo for reliable display */}
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 512 512" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle cx="128" cy="256" r="128" fill="#FF5630" />
                <circle cx="384" cy="256" r="128" fill="#A05C2C" />
                <circle cx="256" cy="128" r="128" fill="#FF8B33" />
                <circle cx="256" cy="384" r="128" fill="#D37D35" />
                <path d="M256 128 L384 256 L256 384 L128 256 Z" fill="#FFB84D" />
                <path d="M270 170 L342 242 L270 314 L198 242 Z" fill="#D37D35" />
                <path d="M198 178 C198 178 198 306 198 306 C198 306 240 350 240 350 C240 350 240 222 240 222 C240 222 198 178 198 178 Z" fill="#EEBB62" />
                <path d="M314 178 C314 178 314 306 314 306 C314 306 272 350 272 350 C272 350 272 222 272 222 C272 222 314 178 314 178 Z" fill="#FFA033" />
              </g>
            </svg>
            
            <span className="ml-4 text-3xl font-bold text-maverick-orange" style={{fontFamily: 'Sansation, sans-serif'}}>
              Mavericks Edge
            </span>
          </div>
        </div>
        
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-maverick-orange">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-maverick-orange transition-colors">Web Development</a></li>
              <li><a href="/services" className="hover:text-maverick-orange transition-colors">Digital Marketing</a></li>
              <li><a href="/services" className="hover:text-maverick-orange transition-colors">AI Integration</a></li>
              <li><a href="/services" className="hover:text-maverick-orange transition-colors">Content Creation</a></li>
              <li><a href="/services" className="hover:text-maverick-orange transition-colors">SEO Optimization</a></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-maverick-orange">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-maverick-orange transition-colors">Blog</a></li>
              <li><a href="/case-studies" className="hover:text-maverick-orange transition-colors">Case Studies</a></li>
              <li><a href="/guides" className="hover:text-maverick-orange transition-colors">Guides</a></li>
              <li><a href="/faq" className="hover:text-maverick-orange transition-colors">FAQ</a></li>
              <li><a href="/support" className="hover:text-maverick-orange transition-colors">Support</a></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-maverick-orange">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-maverick-orange transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-maverick-orange transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-maverick-orange transition-colors">Cookie Policy</a></li>
              <li><a href="/gdpr" className="hover:text-maverick-orange transition-colors">GDPR Compliance</a></li>
              <li><a href="/accessibility" className="hover:text-maverick-orange transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-maverick-light-orange/20 my-8"></div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Mavericks Edge. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-maverick-cream hover:text-maverick-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-maverick-cream hover:text-maverick-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-maverick-cream hover:text-maverick-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-maverick-cream hover:text-maverick-orange transition-colors">
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