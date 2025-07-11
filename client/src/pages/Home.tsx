import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";
import Hero from "../components/sections/Hero";
import ShowcaseGallery from "../components/sections/ShowcaseGallery";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import { generateOrganizationStructuredData, generateWebsiteStructuredData, generateFAQStructuredData } from '../lib/seo';
import LocalSEO from '../components/LocalSEO';
import MobileOptimizations from '../components/MobileOptimized';
import CreativeWorkSection from '../components/sections/CreativeWorkSection';
import ProcessSection from '../components/sections/ProcessSection';
import ScrollFadeSection from '../components/ui/scroll-fade-section';
import SEOHead from '../components/SEOHead';
import StructuredData, { organizationSchema, localBusinessSchema, websiteSchema, faqSchema } from '../components/StructuredData';

// Lazy load non-critical components
const ServiceCascadeSection = lazy(() => import("../components/sections/ServiceCascadeSection"));
const WhyChooseUsSection = lazy(() => import("../components/sections/WhyChooseUsSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

export default function Home() {
  // Track page view for analytics purposes
  useEffect(() => {
    // This would typically include analytics tracking code
    console.log("Home page viewed");
  }, []);

  return (
    <>
      {/* Enhanced SEO with Structured Data */}
      <SEOHead 
        title="Edmonton Web Design & Digital Marketing Agency | Mavericks Edge"
        description="Premier Edmonton web design and digital marketing agency. Custom websites, SEO, AI integration for small businesses across Alberta. Free consultation available."
        keywords="Edmonton web design, Edmonton digital marketing, web development Edmonton, SEO Edmonton, AI integration Edmonton, custom websites Edmonton, small business web design Alberta, nonprofit web design Edmonton, responsive web design Alberta, ecommerce development Edmonton"
        canonicalUrl="https://mavericksedge.ca/"
        ogTitle="Edmonton Web Design & Digital Marketing Agency | Mavericks Edge"
        ogDescription="Premier Edmonton web design and digital marketing agency. Custom websites, SEO, AI integration for small businesses across Alberta."
        ogImage="https://mavericksedge.ca/logo.png"
        ogType="website"
      />
      
      {/* Comprehensive Structured Data */}
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={faqSchema} />

      <LocalSEO page="home" location="Edmonton" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="home-page-wrapper"
      >
        <article>
          <MobileOptimizations />
          {/* Main hero section - H1 heading for SEO is inside this component */}
          <Hero />

          {/* Showcase Gallery between hero and what we do */}
          <ScrollFadeSection
            id="showcase-gallery"
            fadeInPoint={0.4}
            fadeOutPoint={0.6}
            fadeInDuration={1.2}
            fadeOutDuration={1.6}
            initialOpacity={0}
            minOpacity={0.1}
          >
            <ShowcaseGallery />
          </ScrollFadeSection>

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
            <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse" />}>
              <ServiceCascadeSection />
            </Suspense>
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
            <Suspense fallback={<div className="h-64 bg-gray-900 animate-pulse" />}>
              <WhyChooseUsSection />
            </Suspense>
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
            <Suspense fallback={<div className="h-64 bg-gray-900 animate-pulse" />}>
              <ProcessSection />
            </Suspense>
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
            <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse" />}>
              <ContactSection />
            </Suspense>
          </ScrollFadeSection>
        </article>
      </motion.div>
    </>
  );
}