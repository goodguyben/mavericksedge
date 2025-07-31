import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import WebVitalsMonitor from "@/components/ui/WebVitalsMonitor";
import { generateOrganizationStructuredData, generateWebsiteStructuredData, generateFAQStructuredData } from '@/lib/seo';
import LocalSEO from '@/components/LocalSEO';
import MobileOptimizations from '@/components/MobileOptimized';
import ScrollFadeSection from '@/components/ui/scroll-fade-section';
import SEOHead from '@/components/SEOHead';
import StructuredData, { organizationSchema, localBusinessSchema, websiteSchema, faqSchema } from '@/components/StructuredData';
import { LazySection } from '@/components/performance/LazySection';
import { measurePerformance, initializeProductionOptimizations } from '@/lib/performance';
import { analytics } from '@/lib/logger';

// Lazy load non-critical components
const ShowcaseGallery = lazy(() => import("@/components/sections/ShowcaseGallery"));
const ServiceCascadeSection = lazy(() => import("@/components/sections/ServiceCascadeSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));
const WhyChooseUsSection = lazy(() => import("@/components/sections/WhyChooseUsSection"));
const CreativeWorkSection = lazy(() => import("@/components/sections/CreativeWorkSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));

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

      <div className="home-page-wrapper">
        <article>
          <WebVitalsMonitor />
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
              <Suspense fallback={<SectionFallback height="h-96" />}>
                <ShowcaseGallery />
              </Suspense>
            </ScrollFadeSection>
          </LazySection>

          {/* Progressive loading for below-fold sections */}
          <LazySection threshold={0.1} rootMargin="50px">
            <section id="what-we-do" className="relative">
              <WhatWeDoSection />
            </section>
          </LazySection>

          {/* Service Cascade Section */}
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
              <Suspense fallback={<SectionFallback />}>
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
              <Suspense fallback={<SectionFallback />}>
                <ContactSection />
              </Suspense>
            </ScrollFadeSection>
          </LazySection>
        </article>
      </div>
    </>
  );
}