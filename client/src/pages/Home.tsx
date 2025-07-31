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

// Import components directly for now (will optimize later)
import ShowcaseGallery from "@/components/sections/ShowcaseGallery";
import ServiceCascadeSection from "@/components/sections/ServiceCascadeSection";
import ContactSection from "@/components/sections/ContactSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProcessSection from "@/components/sections/ProcessSection";

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

          {/* Showcase Gallery */}
          <ScrollFadeSection
            id="showcase-gallery"
            fadeInPoint={0.4}
            fadeOutPoint={0.6}
            fadeInDuration={1.2}
            fadeOutDuration={1.6}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
          >
            <ShowcaseGallery />
          </ScrollFadeSection>

          {/* What We Do Section */}
          <section id="what-we-do" className="relative">
            <WhatWeDoSection />
          </section>

          {/* Service Cascade Section */}
          <ScrollFadeSection
            id="service-cascade"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={1}
            fadeOutDuration={1.8}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
          >
            <ServiceCascadeSection />
          </ScrollFadeSection>

          <ScrollFadeSection
            id="why-choose-us"
            fadeInPoint={0.5}
            fadeOutPoint={0.6}
            fadeInDuration={1}
            fadeOutDuration={1.9}
            initialOpacity={0}
            minOpacity={0.1}
            useFallback={true}
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
            useFallback={true}
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
            useFallback={true}
          >
            <ContactSection />
          </ScrollFadeSection>
        </article>
      </div>
    </>
  );
}