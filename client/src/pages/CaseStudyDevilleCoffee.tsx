import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Maximize2, Calendar, User, Tag, ArrowRight, Search, MapPin, Users, TrendingUp } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ContactSection from '@/components/sections/ContactSection';

export default function CaseStudyDevilleCoffee() {
  return (
    <>
      <SEOHead
        title="Deville Coffee Website Design Case Study | Edmonton Coffee Chain Digital Transformation"
        description="Discover how Mavericks Edge transformed Deville Coffee's digital presence with a modern website featuring online ordering, location finder, and direct trade coffee showcase. See the results."
        keywords="Deville Coffee website design, Edmonton coffee chain website, online ordering system, coffee shop web design Edmonton, restaurant website development Alberta, direct trade coffee website"
        canonicalUrl="https://mavericksedge.ca/case-studies/deville-coffee"
        ogTitle="Deville Coffee Website Design Case Study | Mavericks Edge"
        ogDescription="How we transformed Edmonton's leading coffee chain with a modern website featuring online ordering and location finder"
        ogImage="https://mavericksedge.ca/images/case-studies/deville-coffee-preview.jpg"
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
                  Deville Coffee
                </span>
                <span className="text-maverick-orange">
                  Digital Transformation
                </span>
              </h1>
              <p className="text-xl text-[#AAAAAA] max-w-4xl mx-auto mb-8">
                Transforming Edmonton's leading coffee chain into a digital-first experience that connects coffee lovers with their perfect brew across multiple locations.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-[#AAAAAA]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Multi-location Chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Edmonton, Calgary, Kelowna, Vancouver</span>
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
                  https://www.devillecoffee.ca/
                </div>
                <a
                  href="https://www.devillecoffee.ca/"
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
                  src="https://www.devillecoffee.ca/"
                  className="w-full h-full border-0"
                  title="Deville Coffee Website"
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
                    Deville Coffee, Edmonton's premier coffee chain since 1999, needed a digital transformation that would match their commitment to direct trade coffee and community connection. Their existing website struggled to showcase their multiple locations, online ordering capabilities, and the story behind their carefully sourced beans.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The challenge was creating a platform that would serve both their loyal Edmonton customers and attract new visitors across their expanding network of locations in Calgary, Kelowna, and Vancouver.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    We designed a comprehensive digital experience that celebrates Deville's coffee culture while providing practical functionality for modern customers. The website features an intuitive location finder, seamless online ordering system, and immersive storytelling about their direct trade relationships.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The design emphasizes warmth and authenticity, using earthy tones and coffee-inspired imagery that reflects their brand values. Mobile optimization ensures customers can easily order ahead while on the go, a crucial feature for busy coffee lovers.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Multi-Location Management</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Dynamic location finder with individual cafe information, hours, and unique offerings</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Online Ordering System</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Streamlined ordering process with menu customization and pickup scheduling</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Direct Trade Storytelling</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Immersive content showcasing their relationships with coffee producers worldwide</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Mobile-First Design</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Optimized for on-the-go ordering and location discovery</p>
                      </div>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">Results</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    The new Deville Coffee website has become a central hub for their growing community of coffee enthusiasts. Online ordering has streamlined their operations, while the location finder helps customers discover their nearest Deville experience.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The storytelling elements have strengthened their brand narrative, helping customers understand the care and expertise that goes into every cup. This digital transformation supports their continued expansion while maintaining the personal touch that defines the Deville experience.
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
                      <p className="text-[#AAAAAA] text-sm">Food & Beverage</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Services</h4>
                      <p className="text-[#AAAAAA] text-sm">Website Design, E-commerce, Mobile Optimization</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Technologies</h4>
                      <p className="text-[#AAAAAA] text-sm">Custom CMS, Online Ordering, Location Management</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Timeline</h4>
                      <p className="text-[#AAAAAA] text-sm">8 weeks</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <a
                      href="https://www.devillecoffee.ca/"
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
