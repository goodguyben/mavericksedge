import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Maximize2, Calendar, User, Tag, ArrowRight, Search, MapPin, Users, TrendingUp } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ContactSection from '@/components/sections/ContactSection';

export default function CaseStudyTailoredInterior() {
  return (
    <>
      <SEOHead
        title="Tailored Interior Website Design Case Study | Edmonton Interior Design Firm Digital Showcase"
        description="Discover how Mavericks Edge transformed Tailored Interior's digital presence with a sophisticated portfolio platform featuring project galleries, design consultations, and client testimonials. See the results."
        keywords="Tailored Interior website design, Edmonton interior design firm website, interior design portfolio website, home design showcase Alberta, interior design consultation platform, design firm web development"
        canonicalUrl="https://mavericksedge.ca/case-studies/tailored-interior"
        ogTitle="Tailored Interior Website Design Case Study | Mavericks Edge"
        ogDescription="How we transformed Edmonton's premier interior design firm with a sophisticated portfolio platform and consultation system"
        ogImage="https://mavericksedge.ca/images/case-studies/tailored-interior-preview.jpg"
        ogType="article"
      />

      <div className="min-h-screen bg-[#121212]">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Search className="h-6 w-6 text-maverick-orange" />
                <span className="text-maverick-orange font-semibold">Case Study</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white block mb-2">
                  Tailored Interior
                </span>
                <span className="text-maverick-orange">
                  Design Excellence
                </span>
              </h1>
              <p className="text-xl text-[#AAAAAA] max-w-4xl mx-auto mb-8">
                Elevating Edmonton's premier interior design firm with a sophisticated digital showcase that transforms how clients discover and connect with exceptional design services.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-[#AAAAAA]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Luxury Design Firm</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Edmonton, Alberta</span>
                </div>
              </div>
            </motion.div>

            {/* Live Website Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-2xl bg-white mb-16"
            >
              {/* Browser Chrome */}
              <div className="bg-[#E8E8E8] px-4 py-3 flex items-center gap-2 border-b border-gray-300">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-600 flex items-center gap-2">
                  <ExternalLink className="h-3 w-3" />
                  https://www.tailoredinterior.ca/
                </div>
                <a
                  href="https://www.tailoredinterior.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                  title="Open in new tab"
                >
                  <Maximize2 className="h-4 w-4" />
                </a>
              </div>

              {/* Live Website Iframe */}
              <div className="relative w-full h-[600px] bg-white">
                <iframe
                  src="https://www.tailoredinterior.ca/"
                  className="w-full h-full border-0"
                  title="Tailored Interior Website"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    Tailored Interior, Edmonton's leading luxury interior design firm, needed a digital transformation that would showcase their sophisticated design capabilities while attracting high-end clients. Their existing website failed to convey the premium quality and attention to detail that defines their work.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The challenge was creating a platform that would resonate with affluent clients seeking exceptional design services, while providing practical tools for consultation scheduling and project visualization that match their luxury brand positioning.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    We designed an elegant digital experience that mirrors the sophistication of their interior design work. The website features immersive project galleries, seamless consultation booking, and interactive design tools that help clients visualize their spaces.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The design emphasizes clean aesthetics and premium presentation, using high-quality imagery and smooth animations that reflect their attention to detail. Mobile optimization ensures clients can explore portfolios and schedule consultations from any device.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Luxury Portfolio Gallery</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Immersive showcase of high-end residential and commercial projects</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Consultation Booking System</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Streamlined scheduling with calendar integration and service selection</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Design Process Showcase</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Step-by-step visualization of their comprehensive design methodology</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Client Testimonial System</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Authentic reviews and case studies from satisfied luxury clients</p>
                      </div>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">Results</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    The new Tailored Interior website has successfully positioned them as Edmonton's premier luxury interior design firm. The sophisticated portfolio gallery has become a powerful tool for client presentations, while the streamlined consultation system has improved booking efficiency.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The digital transformation has attracted higher-value clients and streamlined their sales process. The platform now serves as a comprehensive showcase of their design excellence, helping them secure larger projects and maintain their position as Edmonton's most sought-after interior design firm.
                  </p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[#2A2A2A] rounded-xl p-6 sticky top-8"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Industry</h4>
                      <p className="text-[#AAAAAA] text-sm">Interior Design</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Services</h4>
                      <p className="text-[#AAAAAA] text-sm">Luxury Website Design, Portfolio System, Consultation Portal</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Technologies</h4>
                      <p className="text-[#AAAAAA] text-sm">Premium Design, Booking System, Interactive Gallery</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Timeline</h4>
                      <p className="text-[#AAAAAA] text-sm">10 weeks</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <a
                      href="https://www.tailoredinterior.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 min-h-[44px] rounded-lg text-base font-medium transition-all duration-300 touch-manipulation flex items-center justify-center gap-2 bg-[#FF5630] text-[#FFFFFF] hover:bg-[#FF5630]/90"
                      style={{ color: '#FFFFFF' }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Live Site
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-[#AAAAAA] mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your Edmonton business create a digital presence that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="maverick-button maverick-button-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium"
                >
                  Start Your Project
                </a>
                <a
                  href="/web-design-services-edmonton"
                  className="maverick-button maverick-button-outline inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}
