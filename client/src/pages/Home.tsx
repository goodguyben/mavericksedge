import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import Hero from "@/components/sections/Hero";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import CreativeWorkSection from "@/components/sections/CreativeWorkSection";
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
          
          {/* Main site sections - Reordered as requested */}
          <WhatWeDoSection />
          <CreativeWorkSection />
          <WhyChooseUsSection />
          <ProcessSection />
          <ContactSection />
        </article>
      </motion.div>
    </>
  );
}
