import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import ContactSection from "@/components/sections/ContactSection";
import { useEffect } from "react";
import { contactInfo } from "@/lib/constants";

export default function Contact() {
  // Track page view for analytics
  useEffect(() => {
    console.log("Contact page viewed");
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Contact Mavericks Edge | Request a Free Consultation</title>
        <meta name="description" content="Get in touch with Mavericks Edge to discuss your web design, digital marketing, or AI integration needs. Request a free consultation and take the first step toward transforming your online presence." />
        <link rel="canonical" href="https://mavericksedge.com/contact" />
        <meta name="keywords" content="contact digital agency, web design consultation, request quote, SMB digital solutions, affordable web services" />
        
        {/* Open Graph data */}
        <meta property="og:title" content="Contact Mavericks Edge | Request a Free Consultation" />
        <meta property="og:description" content="Reach out to our team for a free consultation on your web design, digital marketing, or AI integration project. We're here to answer your questions and help you succeed online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavericksedge.com/contact" />
        <meta property="og:image" content="/images/logo-transparent-thumb4x.png" />
        
        {/* Structured data for LocalBusiness */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mavericks Edge",
              "image": "https://mavericksedge.com/images/logo-transparent-thumb4x.png",
              "url": "https://mavericksedge.com",
              "telephone": "+1-555-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Digital Way",
                "addressLocality": "Tech City",
                "addressRegion": "CA",
                "postalCode": "94103",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.7749,
                "longitude": -122.4194
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
              <p className="text-3xl text-[#AAAAAA] max-w-3xl">
                We'd love to know more about your goals and how we can design and build a solution that meets your needs.
              </p>
            </div>
          </section>
          
          <section itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Mavericks Edge" />
            <ContactSection fullPage />
          </section>
        </article>
      </motion.div>
    </>
  );
}
