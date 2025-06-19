import { SERVICE_KEYWORDS } from './constants';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  image?: string;
  type?: string;
  locale?: string;
  siteName?: string;
}

export function generateSEOTags({
  title,
  description,
  keywords,
  canonical,
  image = "/images/logo-transparent-thumb4x.png",
  type = "website",
  locale = "en_CA",
  siteName = "Mavericks Edge"
}: SEOConfig) {
  const baseUrl = "https://mavericksedge.ca";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    canonical: fullCanonical,
    openGraph: {
      title,
      description,
      type,
      url: fullCanonical,
      image: fullImage,
      locale,
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image: fullImage,
      site: "@mavericksedge"
    }
  };
}

// Edmonton-focused structured data
export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mavericks Edge",
    "alternateName": "Mavericks Edge Digital Solutions",
    "description": "Edmonton's premier web design, digital marketing, and AI integration company serving small businesses and nonprofits across Alberta.",
    "url": "https://mavericksedge.ca",
    "logo": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png",
    "image": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png",
    "telephone": "+1-250-883-8849",
    "email": "info@mavericksedge.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6908 100 Ave NW, Suite B",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "postalCode": "T6A 0G2",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.5461",
      "longitude": "-113.4938"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Edmonton",
        "sameAs": "https://en.wikipedia.org/wiki/Edmonton"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Alberta",
        "sameAs": "https://en.wikipedia.org/wiki/Alberta"
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
        "@type": "City",
        "name": "Lethbridge"
      },
      {
        "@type": "City",
        "name": "Medicine Hat"
      }
    ],
    "priceRange": "$850 - $5000",
    "paymentAccepted": "Cash, Credit Card, Debit Card, E-Transfer, PayPal",
    "currenciesAccepted": "CAD",
    "openingHours": "Mo-Fr 09:00-17:00",
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": "Mavericks Edge Team"
    },
    "numberOfEmployees": "5-10",
    "slogan": "Digital solutions that elevate your business",
    "knowsAbout": [
      "Web Design",
      "Web Development",
      "Digital Marketing",
      "SEO",
      "AI Integration",
      "E-commerce Development",
      "Brand Strategy",
      "Social Media Marketing",
      "Content Creation",
      "Local SEO",
      "WordPress Development",
      "Shopify Development"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "53.5461",
        "longitude": "-113.4938"
      },
      "geoRadius": "500000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design and Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Design",
            "description": "Professional website design and development services for Edmonton businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Search engine optimization to improve your Edmonton business visibility online"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing strategies for Edmonton small businesses"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/mavericksedge",
      "https://www.linkedin.com/company/mavericksedge",
      "https://x.com/mavericksedge",
      "https://www.instagram.com/mavericksedge"
    ]
  };
}

export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mavericksedge.ca/#organization",
    "name": "Mavericks Edge",
    "image": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png",
    "telephone": "+1-250-883-8849",
    "email": "info@mavericksedge.ca",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$850-$5000",
    "servesCuisine": null,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mavericks Edge",
    "alternateName": "Mavericks Edge Digital Solutions",
    "url": "https://mavericksedge.ca",

    "sameAs": [
      "https://www.facebook.com/mavericksedge",
      "https://www.linkedin.com/company/mavericksedge",
      "https://x.com/mavericksedge",
      "https://www.instagram.com/mavericksedge"
    ]
  };
}

export function generateServiceStructuredData(serviceName: string, serviceDescription: string, serviceUrl: string, price?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "provider": {
      "@type": "Organization",
      "name": "Mavericks Edge",
      "url": "https://mavericksedge.ca",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6908 100 Ave NW, Suite B",
        "addressLocality": "Edmonton",
        "addressRegion": "Alberta",
        "postalCode": "T6A 0G2",
        "addressCountry": "Canada"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Edmonton",
      "sameAs": "https://en.wikipedia.org/wiki/Edmonton"
    },
    "hasOfferCatalog": price ? {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    } : undefined
  };
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
}

// SEO keywords by service - Edmonton focused
export const SERVICE_KEYWORDS = {
  web: "Edmonton web development, Edmonton web design, custom websites Edmonton, responsive web design Alberta, Edmonton website development company, web applications Edmonton, e-commerce development Edmonton, WordPress development Edmonton, Shopify development Edmonton, website redesign Edmonton",
  marketing: "Edmonton digital marketing, Edmonton SEO services, social media marketing Edmonton, Edmonton marketing agency, local SEO Edmonton, digital advertising Edmonton, content marketing Edmonton, brand strategy Edmonton, online marketing Edmonton, Edmonton marketing consultant",
  ai: "Edmonton AI integration, artificial intelligence Edmonton, automation solutions Edmonton, AI chatbots Edmonton, machine learning Edmonton, AI consulting Edmonton, business automation Edmonton, AI development Edmonton, smart automation Alberta, AI implementation Edmonton"
};

// Generate Edmonton-specific FAQ structured data
export function generateFAQStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide web design services in Edmonton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mavericks Edge provides comprehensive web design and development services throughout Edmonton and surrounding Alberta communities. We specialize in custom websites, e-commerce solutions, and responsive design for local businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What digital marketing services do you offer in Edmonton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer complete digital marketing services including SEO, social media marketing, content creation, local search optimization, Google Ads management, and brand strategy specifically tailored for Edmonton businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How much do web design services cost in Edmonton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Edmonton web design services start at $850 for basic websites and range up to $5000+ for complex e-commerce and custom applications. We offer transparent pricing and free consultations to discuss your specific needs."
        }
      }
    ]
  };
}