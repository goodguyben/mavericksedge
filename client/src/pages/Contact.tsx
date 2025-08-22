import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";
import { contactInfo } from "@/lib/constants";
import { analytics } from '@/lib/logger';

export default function Contact() {
  // Track page view for analytics
  useEffect(() => {
    analytics.log("Contact page viewed");
  }, []);

  return (
    <>
      <SEOHead 
        title="Contact Mavericks Edge | Request a Free Consultation"
        description="Get in touch with Mavericks Edge to discuss your web design, digital marketing, or AI integration needs. Request a free consultation and take the first step toward transforming your online presence."
        keywords="contact digital agency, web design consultation, request quote, SMB digital solutions, affordable web services"
        canonicalUrl="https://mavericksedge.ca/contact"
        ogTitle="Contact Mavericks Edge | Request a Free Consultation"
        ogDescription="Reach out to our team for a free consultation on your web design, digital marketing, or AI integration project. We're here to answer your questions and help you succeed online."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Mavericks Edge",
          "image": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png",
          "url": "https://mavericksedge.ca",
          "telephone": "+1-250-883-8849",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6908 100 Ave NW, Suite B",
            "addressLocality": "Edmonton",
            "addressRegion": "Alberta",
            "postalCode": "T6A 0G2",
            "addressCountry": "Canada"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 53.5461,
            "longitude": -113.4938
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
              <p className="text-3xl text-[#AAAAAA] max-w-3xl">
                We'd love to know more about your goals and how we can design and build a solution that meets your needs.
              </p>
            </div>
          </section>
          
          <section
            itemScope
            itemType="https://schema.org/Organization"
            className="pt-[0px] pb-[0px]">
            <meta itemProp="name" content="Mavericks Edge" />
            <ContactSection fullPage />
          </section>
        </article>
      </motion.div>
    </>
  );
}
