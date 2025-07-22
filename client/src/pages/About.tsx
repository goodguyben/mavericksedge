import { motion } from "framer-motion";
import TeamSection from "@/components/sections/TeamSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";

export default function About() {
  // Track page view for analytics
  useEffect(() => {
    // Page view tracking can be added here if needed
  }, []);

  return (
    <>
      <SEOHead 
        title="About Mavericks Edge | Our Team & Mission"
        description="Mavericks Edge is a digital solutions agency specializing in web development, marketing, and AI integration for SMBs and nonprofits. Meet our expert team and learn about our mission."
        keywords="digital agency team, web development experts, marketing professionals, AI integration specialists, SMB digital solutions"
        canonicalUrl="/about"
        ogTitle="About Mavericks Edge | Our Team & Mission"
        ogDescription="Meet the team behind Mavericks Edge and learn about our mission to empower small businesses and nonprofits with accessible digital solutions."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Mavericks Edge",
          "url": "https://mavericksedge.ca",
          "logo": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png",
          "description": "Digital solutions agency specializing in web development, marketing, and AI integration services for SMBs and nonprofits.",
          "foundingDate": "2014",
          "founders": [
            {
              "@type": "Person",
              "name": "Bezal Benny",
              "jobTitle": "CEO & Founder"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6908 100 Ave NW",
            "addressLocality": "Edmonton",
            "addressRegion": "AB",
            "postalCode": "T6A 0G2",
            "addressCountry": "CA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+1-250-883-8849",
            "email": "info@mavericksedge.ca"
          },
          "sameAs": [
            "https://www.facebook.com/mavericksedge",
            "https://x.com/mavericksedge",
            "https://www.linkedin.com/company/mavericks-edge/",
            "https://www.instagram.com/mavericksedge"
          ]
        }}
      />
      
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
          
          <ProcessSection />
          <ContactSection />
        </article>
      </motion.div>
    </>
  );
}
