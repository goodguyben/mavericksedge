import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import ShowcaseGallery from "@/components/sections/ShowcaseGallery";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import { generateOrganizationStructuredData, generateWebsiteStructuredData, generateFAQStructuredData } from '@/lib/seo';
import LocalSEO from '@/components/LocalSEO';
import MobileOptimizations from '@/components/MobileOptimized';
import CreativeWorkSection from '@/components/sections/CreativeWorkSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ScrollFadeSection from '@/components/ui/scroll-fade-section';
import SEOHead from '@/components/SEOHead';
import StructuredData, { organizationSchema, localBusinessSchema, websiteSchema, faqSchema } from '@/components/StructuredData';
import { LazySection } from '@/components/performance/LazySection';
import { measurePerformance, initializeProductionOptimizations } from '@/lib/performance';
import { analytics } from '@/lib/logger';

// Lazy load non-critical components
const ServiceCascadeSection = lazy(() => import("@/components/sections/ServiceCascadeSection"));
const WhyChooseUsSection = lazy(() => import("@/components/sections/WhyChooseUsSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

// Optimized fallback component
const SectionFallback = ({ height = "h-64" }: { height?: string }) => (
  <div className={`${height} bg-gray-900/50 animate-pulse rounded-lg`} />
);

export default function Home() {
  // Initialize performance optimizations
  useEffect(() => {
    measurePerformance('HomePage-Mount', () => {
      analytics.log("Home page viewed");
      initializeProductionOptimizations();
    });
  }, []);

  return (
    <>
      {/* Enhanced SEO with Structured Data */}
      <SEOHead 
        title="Mavericks Edge | Digital Marketing and Website Design Edmonton"
        description="Affordable Digital marketing, SEO, and website design in Edmonton that businesses rely on to grow their brand and reach customers. Free consultation available."
        keywords="Edmonton web design, Edmonton digital marketing, web development Edmonton, SEO Edmonton, AI integration Edmonton, custom websites Edmonton, small business web design Alberta, nonprofit web design Edmonton, responsive web design Alberta, ecommerce development Edmonton"
        canonicalUrl="https://mavericksedge.ca/"
        ogTitle="Mavericks Edge | Digital Marketing and Website Design Edmonton"
        ogDescription="Affordable Digital marketing, SEO, and website design in Edmonton that businesses rely on to grow their brand and reach customers."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
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
        transition={{ duration: 0.3 }} // Reduced duration for faster page transitions
        className="home-page-wrapper"
      >
        <article>
          <MobileOptimizations />
          {/* Main hero section - Critical above-fold content */}
          <Hero />

          {/* Showcase Gallery - Progressive loading */}
          <LazySection threshold={0.2} rootMargin="100px" className="relative">
            <ScrollFadeSection
              id="showcase-gallery"
              fadeInPoint={0.4}
              fadeOutPoint={0.6}
              fadeInDuration={1.2}
              fadeOutDuration={1.6}
              initialOpacity={0}
              minOpacity={0.1}
              useFallback={true} // Use original implementation for now
            >
              <ShowcaseGallery />
            </ScrollFadeSection>
          </LazySection>

          {/* Progressive loading for below-fold sections */}
          <LazySection threshold={0.1} rootMargin="50px">
            <ScrollFadeSection
              id="what-we-do"
              fadeInPoint={0.5}
              fadeOutPoint={0.6}
              fadeInDuration={1}
              fadeOutDuration={1.8}
              initialOpacity={0}
              minOpacity={0.1}
              useFallback={true} // Use original implementation for now
            >
              <WhatWeDoSection />
            </ScrollFadeSection>
          </LazySection>

          {/* Service Cascade Section with lazy loading */}
          <LazySection threshold={0.1} rootMargin="50px">
            <ScrollFadeSection
              id="service-cascade"
              fadeInPoint={0.5}
              fadeOutPoint={0.6}
              fadeInDuration={1}
              fadeOutDuration={1.8}
              initialOpacity={0}
              minOpacity={0.1}
              useFallback={true} // Use original implementation for now
            >
              <Suspense fallback={<SectionFallback height="h-96" />}>
                <ServiceCascadeSection />
              </Suspense>
            </ScrollFadeSection>
          </LazySection>

          <LazySection threshold={0.1} rootMargin="50px">
            <ScrollFadeSection
              id="why-choose-us"
              fadeInPoint={0.5}
              fadeOutPoint={0.6}
              fadeInDuration={1}
              fadeOutDuration={1.9}
              initialOpacity={0}
              minOpacity={0.1}
              useFallback={true} // Use original implementation for now
            >
              <Suspense fallback={<SectionFallback />}>
                <WhyChooseUsSection />
              </Suspense>
            </ScrollFadeSection>
          </LazySection>

          <LazySection threshold={0.1} rootMargin="50px">
            <ScrollFadeSection
              id="process"
              fadeInPoint={0.5}
              fadeOutPoint={0.65}
              fadeInDuration={0.9}
              fadeOutDuration={1.8}
              initialOpacity={0}
              minOpacity={0.1}
              useFallback={true} // Use original implementation for now
            >
              <Suspense fallback={<SectionFallback />}>
                <ProcessSection />
              </Suspense>
            </ScrollFadeSection>
          </LazySection>

          <LazySection threshold={0.1} rootMargin="50px">
            <ScrollFadeSection
              id="contact"
              fadeInPoint={0.5}
              fadeOutPoint={0.6}
              fadeInDuration={0.9}
              fadeOutDuration={1.6}
              initialOpacity={0}
              minOpacity={0.1}
              useFallback={true} // Use original implementation for now
            >
              <Suspense fallback={<SectionFallback height="h-96" />}>
                <ContactSection />
              </Suspense>
            </ScrollFadeSection>
          </LazySection>
        </article>
      </motion.div>
    </>
  );
}