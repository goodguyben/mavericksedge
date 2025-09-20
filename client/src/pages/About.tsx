import { motion } from "framer-motion";
import TeamSection from "@/components/sections/TeamSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";

export default function About() {
  // Track page view for analytics
  useEffect(() => {
    console.log("About page viewed");
  }, []);

  return (
    <>
      <SEOHead 
        title="About Mavericks Edge | Our Team & Mission"
        description="Mavericks Edge is a digital solutions agency specializing in web development, marketing, and AI integration for SMBs and nonprofits. Meet our expert team and learn about our mission."
        keywords="digital agency team, web development experts, marketing professionals, AI integration specialists, SMB digital solutions"
        canonicalUrl="https://mavericksedge.ca/about"
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
              <div className="text-xl text-white max-w-4xl space-y-6" itemScope itemType="https://schema.org/Organization">
                <p>
                  <span itemProp="name">Mavericks Edge</span> was born in a tiny, cluttered apartment with nothing but a secondhand laptop, a stack of unpaid invoices, and a big idea: every small organization deserves access to the same tools and strategies that help large companies thrive. The early days were anything but smooth. We hustled through sleepless nights, struggling to figure out how to deliver value with almost no resources. Mistakes were made, projects fell through, and we learned the hard way that good intentions aren't enough.
                </p>
                
                <p>
                  Those challenging times taught us what service really means. We discovered that listening, adapting, and caring about the people we work with is just as important as technical expertise. Each setback became a lesson in humility and creativity, forcing us to find smarter, more human-centered ways to help our clients succeed.
                </p>
                
                <p>
                  Today, <span itemProp="description">Mavericks Edge helps organizations of all sizes streamline operations, cut costs, and unlock growth through tailored solutions. From building websites and branding to implementing automation and AI, we focus on practical strategies that produce real results</span>. Every project is personal because we remember what it was like to start with nothing.
                </p>
                
                <p>
                  At Mavericks Edge, we combine experience, empathy, and innovation to turn challenges into opportunities and ideas into growth.
                </p>
                
                <div className="text-3xl text-[#666666] mt-8">⸻</div>
              </div>
            </div>
          </section>
          
          <section className="py-16 px-5 md:px-10 bg-[#0F0F0F]">
            <div className="container mx-auto pl-0 md:pl-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About the Founder – Bezal John Benny</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="text-lg text-[#CCCCCC] space-y-6">
                  <p>
                    Bezal John Benny found his calling at the intersection of creativity and technology, where innovation meets impact. With a BSc in Music Technology from Birmingham City University and an MSc in Music Technology from the University of Victoria, he has spent over a decade turning ideas into real-world solutions, first in research and complex technical projects and now through Mavericks Edge, his consultancy for small businesses and nonprofits.
                  </p>
                  
                  <p>
                    Bezal's early career included large-scale technical and production projects such as theatrical and AV installations, capital replacement initiatives, and multi-venue event infrastructure. He thrives on tackling challenging problems with creativity and precision. He learned that behind every flawless performance or installation is careful planning, attention to detail, respect for the craft, and care for the people who make it possible.
                  </p>
                  
                  <p>
                    He also developed expertise in AI and machine learning, conducting graduate research on music emotion recognition and presenting his findings at international conferences, including the 146th AES Convention and the McGill Music Graduate Symposium. His master's project modeled algorithms capable of automatically classifying piano music, advancing computational audio analysis. These experiences reinforced his belief that technology should amplify human potential.
                  </p>
                  
                  <p>
                    Today, Bezal leads Mavericks Edge as a network of trusted freelance professionals including designers, developers, marketers, and AI specialists. This model allows the company to deliver custom, high-impact solutions while remaining flexible and focused on client outcomes.
                  </p>
                  
                  <p>
                    Bezal's approach begins with understanding each client's story. He builds strategies, workflows, and websites that capture the client's mission and vision. Every project is an opportunity to make an impact, spark growth, and help clients achieve what they thought was impossible.
                  </p>
                </div>
                
                <div className="flex justify-center lg:justify-end pt-24">
                  <div className="text-center">
                    <img 
                      src="https://mavericksedge.ca/videos/Bezal_Benny_Mavericks_Edge_Founder.jpeg" 
                      alt="Bezal John Benny, Founder of Mavericks Edge" 
                      className="w-full max-w-md rounded-full shadow-lg object-cover aspect-[4/5]"
                    />
                    <h3 className="text-xl font-semibold text-white mt-4">Bezal John Benny</h3>
                    <p className="text-[#CCCCCC] text-sm mt-1">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 px-5 md:px-10 bg-[#121212]">
            <div className="container mx-auto pl-0 md:pl-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Areas We Serve</h2>
              <p className="text-xl text-[#CCCCCC] mb-8 max-w-4xl">
                Mavericks Edge proudly serves clients across Alberta and beyond, bringing our expertise in web design, digital marketing, and AI integration to communities throughout the region.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                <a 
                  href="/web-design-services-edmonton" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Edmonton Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Edmonton</h3>
                </a>
                <a 
                  href="/web-design-services-sherwood-park" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Sherwood Park Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Sherwood Park</h3>
                </a>
                <a 
                  href="/web-design-services-leduc" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Leduc Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Leduc</h3>
                </a>
                <a 
                  href="/web-design-services-st-albert" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="St. Albert Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">St. Albert</h3>
                </a>
                <a 
                  href="/web-design-services-spruce-grove" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Spruce Grove Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Spruce Grove</h3>
                </a>
                <a 
                  href="/web-design-services-stony-plain" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Stony Plain Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Stony Plain</h3>
                </a>
                <a 
                  href="/web-design-services-fort-saskatchewan" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Fort Saskatchewan Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Fort Saskatchewan</h3>
                </a>
                <a 
                  href="/web-design-services-beaumont" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Beaumont Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Beaumont</h3>
                </a>
                <a 
                  href="/web-design-services-calgary" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Calgary Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Calgary</h3>
                </a>
                <a 
                  href="/web-design-services-airdrie" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Airdrie Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Airdrie</h3>
                </a>
                <a 
                  href="/web-design-services-lethbridge" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Lethbridge Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Lethbridge</h3>
                </a>
                <a 
                  href="/web-design-services-fort-mcmurray" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Fort McMurray Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Fort McMurray</h3>
                </a>
                <a 
                  href="/web-design-services-medicine-hat" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Medicine Hat Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Medicine Hat</h3>
                </a>
                <a 
                  href="/web-design-services-grande-prairie" 
                  className="group bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF5630] rounded-lg p-4 transition-all duration-300 text-center"
                  title="Grande Prairie Web Design Services"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF5630] transition-colors duration-300">Grande Prairie</h3>
                </a>
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
