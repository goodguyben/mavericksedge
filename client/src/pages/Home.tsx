import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import ServiceCascadeSection from '../components/sections/ServiceCascadeSection';
import CreativeWorkSection from '../components/sections/CreativeWorkSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';
import ScrollFadeSection from '../components/ui/scroll-fade-section';
import SEOHead from '../components/SEOHead';
import LocalSEO from '../components/LocalSEO';
import { generateOrganizationStructuredData, generateWebsiteStructuredData, generateFAQStructuredData } from '../lib/seo';
import { useEffect } from "react";

export default function Home() {
  // Track page view for analytics purposes
  useEffect(() => {
    // This would typically include analytics tracking code
    console.log("Home page viewed");
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Edmonton Web Design & Digital Marketing Agency | Mavericks Edge</title>
        <meta name="description" content="Premier Edmonton web design and digital marketing agency. Custom websites, SEO, AI integration for small businesses across Alberta. Free consultation available." />
        <meta name="keywords" content="Edmonton web design, Edmonton digital marketing, web development Edmonton, SEO Edmonton, AI integration Edmonton, custom websites Edmonton, small business web design Alberta, nonprofit web design Edmonton, responsive web design Alberta, ecommerce development Edmonton" />
        <link rel="canonical" href="https://mavericksedge.com/" />

        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Edmonton Web Design & Digital Marketing Agency | Mavericks Edge" />
        <meta property="og:description" content="Premier Edmonton web design and digital marketing agency. Custom websites, SEO, AI integration for small businesses across Alberta." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavericksedge.com/" />
        <meta property="og:image" content="https://mavericksedge.com/images/logo-transparent-thumb4x.png" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Mavericks Edge" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mavericksedge" />
        <meta name="twitter:title" content="Edmonton Web Design & Digital Marketing Agency | Mavericks Edge" />
        <meta name="twitter:description" content="Premier Edmonton web design and digital marketing agency. Custom websites, SEO, AI integration for small businesses across Alberta." />
        <meta name="twitter:image" content="https://mavericksedge.com/images/logo-transparent-thumb4x.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateOrganizationStructuredData())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateWebsiteStructuredData())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQStructuredData())}
        </script>
      </Helmet>

      <LocalSEO page="home" location="Edmonton" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="home-page-wrapper"
      >
        <article>
          {/* Main hero section - H1 heading for SEO is inside this component */}
          <Hero />

          {/* Main site sections - Reordered and wrapped with scroll fade effect */}
          <ScrollFadeSection
            id="what-we-do"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={1}
            fadeOutDuration={1.8}
            initialOpacity={0}
            minOpacity={0.1}
          >
            <WhatWeDoSection />
          </ScrollFadeSection>

          {/* Service Cascade Section */}
          <ScrollFadeSection
            id="service-cascade"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={1}
            fadeOutDuration={1.8}
            initialOpacity={0}
            minOpacity={0.1}
          >
            <ServiceCascadeSection />
          </ScrollFadeSection>

          <ScrollFadeSection
            id="creative-work"
            fadeInPoint={0.55}
            fadeOutPoint={0.65}
            fadeInDuration={1}
            fadeOutDuration={1.7}
            initialOpacity={0}
            minOpacity={0.1}
          >
            <CreativeWorkSection />
          </ScrollFadeSection>

          <ScrollFadeSection
            id="why-choose-us"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={1}
            fadeOutDuration={1.9}
            initialOpacity={0}
            minOpacity={0.1}
          >
            <WhyChooseUsSection />
          </ScrollFadeSection>

          <ScrollFadeSection
            id="process"
            fadeInPoint={0.5}
            fadeOutPoint={0.65}
            fadeInDuration={0.9}
            fadeOutDuration={1.8}
            initialOpacity={0}
            minOpacity={0.1}
          >
            <ProcessSection />
          </ScrollFadeSection>

          <ScrollFadeSection
            id="contact"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={0.9}
            fadeOutDuration={1.6}
            initialOpacity={0}
            minOpacity={0.1}
          >
            <ContactSection />
          </ScrollFadeSection>
        </article>
      </motion.div>
    </>
  );
}