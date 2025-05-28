import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import Hero from "@/components/sections/Hero";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import ServiceCascadeSection from "@/components/sections/ServiceCascadeSection";
import CreativeWorkSection from "@/components/sections/CreativeWorkSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollFadeSection from "@/components/ui/scroll-fade-section";
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
        <title>Mavericks Edge | Web Design, Marketing & AI Solutions for SMBs</title>
        <meta name="description" content="Mavericks Edge delivers custom web design, digital marketing & AI solutions tailored for small businesses. Transform your online presence with affordable, results-driven digital services." />
        <link rel="canonical" href="https://mavericksedge.com" />
        <meta name="keywords" content="web design, digital marketing, AI integration, small business solutions, affordable web development, SMB marketing, nonprofit digital services" />

        {/* Open Graph data */}
        <meta property="og:title" content="Web Design & Digital Marketing for Small Businesses | Mavericks Edge" />
        <meta property="og:description" content="Custom web design, digital marketing, and AI solutions that deliver measurable results for small businesses and nonprofits." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavericksedge.com" />
        <meta property="og:image" content="/images/logo-transparent-thumb4x.png" />

        {/* Twitter Card data */}
        <meta name="twitter:title" content="Web Design & Digital Marketing for Small Businesses | Mavericks Edge" />
        <meta name="twitter:description" content="Custom web design, digital marketing, and AI solutions that deliver measurable results for small businesses and nonprofits." />
      </Helmet>

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