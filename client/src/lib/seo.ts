
// SEO utility functions and structured data generators

export interface ServiceStructuredData {
  name: string;
  description: string;
  provider: string;
  areaServed?: string[];
  offers?: Array<{
    name: string;
    description: string;
    price?: string;
    priceCurrency?: string;
  }>;
}

export function generateServiceStructuredData(service: ServiceStructuredData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider,
      "url": "https://mavericksedge.com"
    },
    "areaServed": service.areaServed || ["Canada", "United States"],
    "hasOfferCatalog": service.offers ? {
      "@type": "OfferCatalog",
      "name": `${service.name} Packages`,
      "itemListElement": service.offers.map((offer, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description
        },
        "price": offer.price,
        "priceCurrency": offer.priceCurrency || "CAD"
      }))
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

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateArticleStructuredData(article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mavericks Edge",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mavericksedge.com/images/logo-transparent-thumb4x.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": article.image || "https://mavericksedge.com/images/logo-transparent-thumb4x.png"
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mavericks Edge",
    "alternateName": "Mavericks Edge Digital Solutions",
    "url": "https://mavericksedge.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mavericksedge.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.facebook.com/mavericksedge",
      "https://www.linkedin.com/company/mavericksedge",
      "https://x.com/mavericksedge",
      "https://www.instagram.com/mavericksedge"
    ]
  };
}

// SEO keywords by service
export const SERVICE_KEYWORDS = {
  web: "web development, custom websites, responsive design, e-commerce development, web applications, website design, frontend development, backend development, full-stack development",
  marketing: "digital marketing, SEO services, social media marketing, content marketing, brand strategy, online advertising, marketing campaigns, lead generation, conversion optimization",
  ai: "AI integration, artificial intelligence, machine learning, automation solutions, AI chatbots, data analytics, predictive analytics, business intelligence, AI consulting"
};

// Page-specific meta descriptions
export const META_DESCRIPTIONS = {
  home: "Transform your business with Mavericks Edge's comprehensive digital solutions. Expert web development, strategic marketing, and AI integration services for small businesses and nonprofits across Canada and the US.",
  services: "Explore our full range of digital services including custom web development, strategic marketing solutions, and cutting-edge AI integration. Tailored for SMBs and nonprofits.",
  web: "Professional web development services including custom websites, e-commerce platforms, and web applications. Responsive design, SEO optimization, and performance-focused solutions.",
  marketing: "Strategic digital marketing services to grow your business. SEO, social media management, content strategy, brand development, and conversion optimization.",
  ai: "Integrate AI into your business with our expert consulting and development services. Automation, analytics, chatbots, and custom AI solutions to optimize operations.",
  pricing: "Transparent pricing for web development, marketing, and AI services. Flexible packages designed for small businesses and nonprofits. Get started with affordable digital solutions.",
  about: "Learn about Mavericks Edge's mission to empower small businesses and nonprofits with cutting-edge digital solutions. Meet our team of experts in web development, marketing, and AI.",
  contact: "Get in touch with Mavericks Edge for your digital transformation needs. Free consultations available for web development, marketing, and AI integration projects."
};
