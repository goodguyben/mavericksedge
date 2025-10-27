
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noindex?: boolean;
}

export default function SEOHead({
  title = "Mavericks Edge | Digital Marketing and Website Design Edmonton",
  description = "Affordable Digital marketing, SEO, and website design in Edmonton that businesses rely on to grow their brand and reach customers. Free consultation available.",
  keywords = "edmonton web design, website design edmonton, edmonton website builders, web design company in edmonton, ai services edmonton, seo services edmonton, ai integration services, edmonton seo, social media marketing edmonton, digital marketing ads agency, digital marketing agency",
  canonicalUrl = "https://mavericksedge.ca",
  ogTitle,
  ogDescription,
  ogImage = "/images/logo-transparent-thumb4x.png",
  ogType = "website",
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false
}: SEOHeadProps) {
  
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalTwitterTitle = twitterTitle || title;
  const finalTwitterDescription = twitterDescription || description;
  const finalTwitterImage = twitterImage || ogImage;
  
  // Ensure absolute URL for ogImage
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `https://mavericksedge.ca${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="Mavericks Edge" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:site" content="@mavericksedge" />
      <meta name="twitter:creator" content="@mavericksedge" />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Mavericks Edge" />
      <meta name="language" content="en-CA" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Google Analytics 4 - Page View Tracking */}
      <script>
        {`
          if (typeof gtag !== 'undefined') {
            gtag('config', 'G-ZKE1PD024S', {
              page_title: '${title}',
              page_location: '${canonicalUrl}',
              page_path: window.location.pathname
            });
          }
        `}
      </script>
    </Helmet>
  );
}
