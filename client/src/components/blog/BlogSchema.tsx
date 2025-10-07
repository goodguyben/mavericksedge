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
      "itemListElement": []
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