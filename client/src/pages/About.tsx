import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import TeamSection from "@/components/sections/TeamSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import { useEffect } from "react";

export default function About() {
  // Track page view for analytics
  useEffect(() => {
    console.log("About page viewed");
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>About Mavericks Edge | Our Team & Mission</title>
        <meta name="description" content="Mavericks Edge is a digital solutions agency specializing in web development, marketing, and AI integration for SMBs and nonprofits. Meet our expert team and learn about our mission." />
        <link rel="canonical" href="https://mavericksedge.com/about" />
        <meta name="keywords" content="digital agency team, web development experts, marketing professionals, AI integration specialists, SMB digital solutions" />
        
        {/* Open Graph data */}
        <meta property="og:title" content="About Mavericks Edge | Our Team & Mission" />
        <meta property="og:description" content="Meet the team behind Mavericks Edge and learn about our mission to empower small businesses and nonprofits with accessible digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavericksedge.com/about" />
        <meta property="og:image" content="/images/logo-transparent-thumb4x.png" />
        
        {/* Structured data for Organization */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mavericks Edge",
              "url": "https://mavericksedge.com",
              "logo": "https://mavericksedge.com/images/logo-transparent-thumb4x.png",
              "description": "Digital solutions agency specializing in web development, marketing, and AI integration services for SMBs and nonprofits.",
              "foundingDate": "2022",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Jane Smith",
                  "jobTitle": "CEO & Founder"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Digital Way",
                "addressLocality": "Tech City",
                "addressRegion": "CA",
                "postalCode": "94103",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+1-555-123-4567",
                "email": "info@mavericksedge.com"
              },
              "sameAs": [
                "https://www.facebook.com/mavericksedge",
                "https://www.twitter.com/mavericksedge",
                "https://www.linkedin.com/company/mavericksedge",
                "https://www.instagram.com/mavericksedge"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <article>
          <section className="pt-44 md:pt-48 pb-16 px-5 md:px-10 bg-[#121212]">
            <div className="container mx-auto pl-0 md:pl-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
              <div className="text-xl text-[#AAAAAA] max-w-3xl" itemScope itemType="https://schema.org/Organization">
                <p>
                  <span itemProp="name">Mavericks Edge</span> is a digital solutions agency specializing in 
                  <span itemProp="description"> web development, marketing, and AI integration services for SMBs and nonprofits</span>.
                  Our mission is to provide accessible, high-quality digital services that empower businesses to thrive in the digital landscape.
                </p>
              </div>
            </div>
          </section>
          
          <TeamSection fullPage />
          <ProcessSection />
          <ContactSection />
        </article>
      </motion.div>
    </>
  );
}
