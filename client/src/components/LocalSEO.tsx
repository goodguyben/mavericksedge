
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalSEOProps {
  page?: string;
  service?: string;
  location?: string;
}

export default function LocalSEO({ 
  page = 'home', 
  service = '', 
  location = 'Edmonton' 
}: LocalSEOProps) {
  
  const generateLocalStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Mavericks Edge",
      "image": [
        "https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
      ],
      "telephone": "+1-250-883-8849",
      "email": "info@mavericksedge.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6908 100 Ave NW, Suite B",
        "addressLocality": "Edmonton",
        "addressRegion": "Alberta", 
        "postalCode": "T6A 0G2",
        "addressCountry": "Canada"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 53.5461,
        "longitude": -113.4938
      },
      "url": "https://mavericksedge.ca",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "priceRange": "$850-$5000",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "E-Transfer"],
      "currenciesAccepted": "CAD",
      "areaServed": [
        {
          "@type": "City",
          "name": "Edmonton",
          "sameAs": "https://en.wikipedia.org/wiki/Edmonton"
        },
        {
          "@type": "City", 
          "name": "Calgary"
        },
        {
          "@type": "City",
          "name": "Red Deer"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Alberta"
        }
      ]
    };

    if (service) {
      return {
        ...baseData,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${service} Services in ${location}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `${service} Services`,
                "description": `Professional ${service.toLowerCase()} services for ${location} businesses`,
                "areaServed": {
                  "@type": "City",
                  "name": location
                }
              }
            }
          ]
        }
      };
    }

    return baseData;
  };

  return (
    <Helmet>
      {/* Local Business Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateLocalStructuredData())}
      </script>

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="CA-AB" />
      <meta name="geo.placename" content={location} />
      <meta name="geo.position" content="53.5461;-113.4938" />
      <meta name="ICBM" content="53.5461, -113.4938" />

      {/* Local Search Keywords */}
      <meta name="location" content={`${location}, Alberta, Canada`} />
      <meta name="distribution" content="local" />
      
      {/* Additional Local SEO Meta */}
      {service && (
        <>
          <meta name="service-area" content={`${location}, Calgary, Red Deer, Alberta`} />
          <meta name="business-type" content="Digital Marketing Agency" />
        </>
      )}
    </Helmet>
  );
}
