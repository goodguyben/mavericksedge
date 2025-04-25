import { useEffect, useRef } from 'react';
import '../styles/footer.css';

// Declare global interface for window
declare global {
  interface Window {
    initFooter?: () => void;
  }
}

export default function FooterWrapper() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the footer HTML content
    const loadFooterContent = async () => {
      try {
        const response = await fetch('/src/components/footer.html');
        const html = await response.text();
        
        if (footerRef.current) {
          footerRef.current.innerHTML = html;
          
          // Create script element to load the footer JavaScript
          const script = document.createElement('script');
          script.src = '/src/components/footer.js';
          script.type = 'module';
          script.onload = () => {
            // If global function is available, call it
            if (typeof window.initFooter === 'function') {
              window.initFooter();
            }
          };
          document.body.appendChild(script);
        }
      } catch (error) {
        console.error('Error loading footer:', error);
      }
    };

    loadFooterContent();
    
    // Cleanup function
    return () => {
      const script = document.querySelector('script[src="/src/components/footer.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return <div ref={footerRef} className="footer-container"></div>;
}