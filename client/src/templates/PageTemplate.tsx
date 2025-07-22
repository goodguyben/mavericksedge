import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { trackPageView } from '@/lib/analytics';

interface PageTemplateProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  children: React.ReactNode;
  noindex?: boolean;
  structuredData?: object;
}

export default function PageTemplate({
  title,
  description,
  canonicalUrl,
  keywords,
  children,
  noindex = false,
  structuredData
}: PageTemplateProps) {
  
  // Track page view for analytics
  useEffect(() => {
    trackPageView(title, window.location.pathname, canonicalUrl);
  }, [title, canonicalUrl]);

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        keywords={keywords}
        noindex={noindex}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-[#0D0D0D] text-white">
        <motion.div 
          className="container mx-auto px-5 md:px-10 py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}

// Example usage:
/*
import PageTemplate from '@/templates/PageTemplate';

export default function MyNewPage() {
  return (
    <PageTemplate
      title="My New Page - Mavericks Edge"
      description="Description of my new page for SEO purposes."
      canonicalUrl="https://mavericksedge.ca/my-new-page"
      keywords="keyword1, keyword2, keyword3"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My New <span className="text-maverick-orange">Page</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Your page content goes here...
        </p>
      </div>
    </PageTemplate>
  );
}
*/ 