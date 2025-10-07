import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Maximize2, Calendar, User, Tag, ArrowRight, Search, MapPin, Users, TrendingUp } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ContactSection from '@/components/sections/ContactSection';

export default function CaseStudyNextArchitecture() {
  return (
    <>
      <SEOHead
        title="Next Architecture Website Design Case Study | Edmonton Architecture Firm Digital Portfolio"
        description="Discover how Mavericks Edge modernized Next Architecture's digital presence with a sophisticated portfolio showcase, project galleries, and career portal. See the transformation results."
        keywords="Next Architecture website design, Edmonton architecture firm website, architecture portfolio website, architectural firm web design Alberta, project showcase website, architecture career portal"
        canonicalUrl="https://mavericksedge.ca/case-studies/next-architecture"
        ogTitle="Next Architecture Website Design Case Study | Mavericks Edge"
        ogDescription="How we modernized Edmonton's premier architecture firm with a sophisticated digital portfolio and career portal"
        ogImage="https://mavericksedge.ca/images/case-studies/next-architecture-preview.jpg"
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
                  Next Architecture
                </span>
                <span className="text-maverick-orange">
                  Digital Modernization
                </span>
              </h1>
              <p className="text-xl text-[#AAAAAA] max-w-4xl mx-auto mb-8">
                Modernizing Edmonton's premier architecture firm with a sophisticated digital portfolio that honors their 87-year legacy while showcasing cutting-edge design capabilities.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-[#AAAAAA]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>87-Year Legacy Firm</span>
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
                  https://www.nextarchitecture.ca/
                </div>
                <a
                  href="https://www.nextarchitecture.ca/"
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
                  src="https://www.nextarchitecture.ca/"
                  className="w-full h-full border-0"
                  title="Next Architecture Website"
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
                    Next Architecture, established in 1938 as Rule Wynn and Rule, needed a digital transformation that would honor their rich heritage while positioning them as a forward-thinking firm. Their existing website failed to showcase their extensive portfolio and modern capabilities effectively.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The challenge was creating a platform that would attract top talent, impress potential clients, and demonstrate their evolution from traditional practices to cutting-edge architectural solutions while maintaining their respected reputation in Edmonton's design community.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    We designed a sophisticated digital experience that balances their storied history with contemporary design principles. The website features an immersive project gallery, comprehensive team profiles, and a streamlined career portal that attracts architectural talent.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The design emphasizes clean lines and spatial awareness, reflecting architectural principles in the digital realm. Interactive elements allow visitors to explore projects in detail, while the career section highlights their commitment to diversity and inclusion in the workplace.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Immersive Project Gallery</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Interactive portfolio showcasing 87 years of architectural excellence</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Team & Culture Showcase</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Comprehensive staff profiles highlighting expertise and diversity</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Career Portal</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Streamlined application process attracting top architectural talent</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Heritage Integration</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Timeline and history section honoring their 87-year legacy</p>
                      </div>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">Results</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    The new Next Architecture website has successfully positioned them as a modern, inclusive firm while honoring their rich heritage. The project gallery has become a powerful tool for client presentations, while the career portal has attracted high-quality candidates.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The digital transformation has strengthened their brand presence in Edmonton's competitive architecture market, helping them secure larger projects and attract talent that aligns with their values of respect, diversity, and innovation.
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
                      <p className="text-[#AAAAAA] text-sm">Architecture</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Services</h4>
                      <p className="text-[#AAAAAA] text-sm">Website Design, Portfolio System, Career Portal</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Technologies</h4>
                      <p className="text-[#AAAAAA] text-sm">React, Modern Design, Interactive Gallery</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Timeline</h4>
                      <p className="text-[#AAAAAA] text-sm">12 weeks</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <a
                      href="https://www.nextarchitecture.ca/"
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
