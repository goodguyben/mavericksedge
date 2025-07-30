import React from 'react';
import { Helmet } from 'react-helmet-async';

export const BlogSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Mavericks Edge Digital Marketing & Web Design Blog",
    "description": "Expert insights on web design Edmonton, SEO services Edmonton, AI automation, and digital marketing. Stay ahead with our latest industry trends and actionable tips.",
    "url": "https://mavericksedge.ca/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Mavericks Edge",
      "url": "https://mavericksedge.ca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mavericksedge.ca/attached_assets/logo-transparent-thumb4x.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "BlogPosting",
            "headline": "The Complete 2025 Guide to AI Automation: How Edmonton Businesses Are Transforming Operations",
            "description": "Discover how AI automation is revolutionizing business operations in Edmonton. From customer service to marketing automation, learn the strategies that are driving real results for local businesses.",
            "author": {
              "@type": "Organization",
              "name": "Mavericks Edge Team"
            },
            "datePublished": "2025-07-15",
            "dateModified": "2025-07-15",
            "publisher": {
              "@type": "Organization",
              "name": "Mavericks Edge"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mavericksedge.ca/blog/ai-automation-2025-guide"
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://mavericksedge.ca/attached_assets/ai-automation-guide.jpg"
            },
            "keywords": "AI automation services, business automation Edmonton, AI automation Edmonton, digital transformation, process automation",
            "articleSection": "AI Automation",
            "wordCount": 2500
          }
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mavericksedge.ca/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}; 