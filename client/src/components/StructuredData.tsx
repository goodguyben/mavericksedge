import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  data: any;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mavericks Edge",
  "url": "https://mavericksedge.ca",
  "logo": "https://mavericksedge.ca/logo.png",
  "description": "Leading Edmonton website builders and web design company. Professional web development, digital marketing, SEO services, and AI solutions in Edmonton, Alberta. Custom website design, marketing strategies, and intelligent automation for Alberta businesses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6908 100 Ave NW, Suite B",
    "addressLocality": "Edmonton",
    "addressRegion": "Alberta",
    "postalCode": "T6A 0G2",
    "addressCountry": "Canada"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@mavericksedge.ca"
  },
  "sameAs": [
    "https://www.linkedin.com/company/mavericksedge",
    "https://twitter.com/mavericksedge"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Edmonton, Alberta, Canada"
  }
};

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mavericks Edge",
  "image": "https://mavericksedge.ca/logo.png",
  "description": "Edmonton website builders and web design company serving Alberta businesses. Leading web development, digital marketing, SEO services, and AI solutions provider in Edmonton. Specializing in custom website design, strategic marketing, and intelligent business automation for SMBs and nonprofits.",
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
    "latitude": "53.5444",
    "longitude": "-113.4909"
  },
  "url": "https://mavericksedge.ca",
  "telephone": "+1-250-883-8849",
  "email": "info@mavericksedge.ca",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "53.5444",
      "longitude": "-113.4909"
    },
    "geoRadius": "50000"
  }
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mavericks Edge",
  "url": "https://mavericksedge.ca",
  "description": "Professional web development, digital marketing, and AI solutions in Edmonton, Alberta",
  "publisher": {
    "@type": "Organization",
    "name": "Mavericks Edge"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mavericksedge.ca/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Service Schemas
export const webDevelopmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Edmonton Web Design & Development Services",
  "description": "Edmonton website builders providing custom website development, web applications, e-commerce solutions, and responsive web design services. Leading web design company in Edmonton, Alberta serving local businesses with professional website design and development.",
  "provider": {
    "@type": "Organization",
    "name": "Mavericks Edge"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Edmonton, Alberta, Canada"
  },
  "serviceType": "Web Development",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$750 - $25,000"
  }
};

export const marketingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Edmonton SEO & Digital Marketing Services",
  "description": "Edmonton SEO agency providing comprehensive digital marketing solutions including SEO services, social media marketing, content strategy, and online advertising. Leading SEO company in Edmonton serving Alberta businesses with professional digital marketing and SEO optimization.",
  "provider": {
    "@type": "Organization",
    "name": "Mavericks Edge"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Edmonton, Alberta, Canada"
  },
  "serviceType": "Digital Marketing",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$400 - $15,000"
  }
};

export const aiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Solutions & Automation",
  "description": "Intelligent business automation, AI-powered solutions, machine learning implementations, and process optimization services in Edmonton, Alberta.",
  "provider": {
    "@type": "Organization",
    "name": "Mavericks Edge"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Edmonton, Alberta, Canada"
  },
  "serviceType": "Artificial Intelligence",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$1,000 - $50,000"
  }
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What web design services do you offer in Edmonton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As Edmonton website builders, we offer custom website design Edmonton, web development, e-commerce solutions, responsive web design, CMS development, and website maintenance. Our Edmonton web design company specializes in creating professional websites for Alberta businesses."
      }
    },
    {
      "@type": "Question",
      "name": "Are you an Edmonton SEO company offering digital marketing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are a leading Edmonton SEO agency providing comprehensive digital marketing services including SEO services, social media marketing, content strategy, PPC advertising, and online brand management. Our Edmonton SEO company specializes in helping Alberta businesses improve their search rankings and online visibility."
      }
    },
    {
      "@type": "Question",
      "name": "What AI solutions do you develop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We develop custom AI solutions including business process automation, chatbots, machine learning implementations, data analysis tools, and intelligent workflow optimization."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Edmonton website builders over DIY website builder tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional Edmonton website builders offer custom website design, SEO optimization, responsive design, and ongoing support that DIY website builder tools cannot match. Our web design company in Edmonton creates unique, optimized websites tailored to your business needs, unlike generic templates from website builder platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve clients outside Edmonton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While we're based in Edmonton, Alberta, we serve clients across Canada and internationally through remote collaboration and digital project delivery."
      }
    }
  ]
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});