
import React from 'react';

export default function SEOFooter() {
  const currentYear = new Date().getFullYear();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mavericks Edge",
    "url": "https://mavericksedge.ca",
    "logo": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-250-883-8849",
      "contactType": "customer service",
      "email": "info@mavericksedge.ca",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6908 100 Ave NW, Suite B",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "postalCode": "T6A 0G2",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.facebook.com/mavericksedge",
              "https://www.linkedin.com/company/mavericks-edge/",
      "https://x.com/mavericksedge",
      "https://www.instagram.com/mavericksedge"
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hidden SEO content for better context */}
      <div className="sr-only">
        <h2>Mavericks Edge - Digital Solutions Provider</h2>
        <p>
          Professional web development, digital marketing, and AI integration services 
          for small businesses and nonprofits in Edmonton, Alberta, Canada and beyond.
        </p>
        
        <h3>Our Services Include:</h3>
        <ul>
          <li>Custom Website Development and Design</li>
          <li>E-commerce Platform Development</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Digital Marketing Strategy</li>
          <li>Social Media Management</li>
          <li>AI Integration and Automation</li>
          <li>Content Management Systems</li>
          <li>Performance Optimization</li>
        </ul>
        
        <h3>Service Areas:</h3>
        <p>
          We proudly serve clients across Canada and the United States, with a focus on 
          Edmonton, Calgary, Vancouver, Toronto, and other major metropolitan areas.
        </p>
        
        <h3>Contact Information:</h3>
        <address>
          Mavericks Edge<br />
          6908 100 Ave NW, Suite B<br />
          Edmonton, AB T6A 0G2<br />
          Canada<br />
          Phone: +1 (250) 883-8849<br />
          Email: info@mavericksedge.ca
        </address>
      </div>
    </>
  );
}
