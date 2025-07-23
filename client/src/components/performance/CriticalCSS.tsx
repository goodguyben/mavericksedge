import React from 'react';

export const CriticalCSS: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical above-the-fold styles */
        body { 
          margin: 0; 
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
          background: #0D0D0D; 
          color: #fff; 
          line-height: 1.6;
        }
        
        /* Critical layout */
        .container { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 0 1rem; 
        }
        
        /* Critical hero styles */
        .hero-container { 
          min-height: 100vh; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          background: linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%);
        }
        
        .hero-text { 
          font-size: 2rem; 
          font-weight: bold; 
          text-align: center; 
          color: #fff;
        }
        
        /* Critical button styles */
        .btn-primary { 
          background: #ff6b35; 
          color: white; 
          padding: 0.75rem 1.5rem; 
          border-radius: 0.5rem; 
          text-decoration: none; 
          display: inline-block; 
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        
        .btn-primary:hover {
          background: #e55a2b;
        }
        
        /* Critical loading states */
        .loading { 
          opacity: 0; 
          transition: opacity 0.3s ease; 
        }
        
        .loaded { 
          opacity: 1; 
        }
        
        /* Critical logo styles */
        .logo {
          width: 200px;
          height: 60px;
          object-fit: contain;
        }
        
        /* Critical navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(13, 13, 13, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
        }
        
        /* Critical responsive */
        @media (max-width: 768px) {
          .hero-text {
            font-size: 1.5rem;
          }
          
          .container {
            padding: 0 0.5rem;
          }
        }
        
        /* Critical animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        /* Critical font loading fallback */
        .font-loading {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        /* Critical focus styles for accessibility */
        .btn-primary:focus,
        a:focus {
          outline: 2px solid #ff6b35;
          outline-offset: 2px;
        }
      `
    }} />
  );
}; 