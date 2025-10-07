import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Maximize2, Calendar, User, Tag, ArrowRight, Search, MapPin, Users, TrendingUp } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ContactSection from '@/components/sections/ContactSection';

export default function CaseStudyPixelBlueCollege() {
  return (
    <>
      <SEOHead
        title="Pixel Blue College Website Design Case Study | Edmonton Digital Arts School Online Platform"
        description="Discover how Mavericks Edge transformed Pixel Blue College's digital presence with a modern educational platform featuring course catalogs, student portfolios, and enrollment systems. See the results."
        keywords="Pixel Blue College website design, Edmonton digital arts school website, educational platform design, college website development Alberta, student portfolio system, course catalog website"
        canonicalUrl="https://mavericksedge.ca/case-studies/pixel-blue-college"
        ogTitle="Pixel Blue College Website Design Case Study | Mavericks Edge"
        ogDescription="How we transformed Edmonton's premier digital arts college with a modern educational platform and student showcase system"
        ogImage="https://mavericksedge.ca/images/case-studies/pixel-blue-college-preview.jpg"
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
                  Pixel Blue College
                </span>
                <span className="text-maverick-orange">
                  Educational Platform
                </span>
              </h1>
              <p className="text-xl text-[#AAAAAA] max-w-4xl mx-auto mb-8">
                Transforming Edmonton's premier digital arts college into a modern educational platform that showcases student creativity while streamlining enrollment and course management.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-[#AAAAAA]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Completed 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Digital Arts College</span>
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
                  https://www.pixelblue.ca/
                </div>
                <a
                  href="https://www.pixelblue.ca/"
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
                  src="https://www.pixelblue.ca/"
                  className="w-full h-full border-0"
                  title="Pixel Blue College Website"
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
                    Pixel Blue College, Edmonton's leading digital arts institution, needed a comprehensive digital transformation that would showcase their innovative programs while providing seamless enrollment experiences. Their existing website struggled to highlight student work and streamline the application process.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The challenge was creating an educational platform that would attract prospective students, showcase graduate portfolios effectively, and provide administrative tools for course management while maintaining the creative energy that defines their programs.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    We designed a dynamic educational platform that celebrates creativity while providing practical functionality for students, faculty, and administrators. The website features immersive student portfolio galleries, comprehensive course catalogs, and streamlined enrollment systems.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The design emphasizes vibrant colors and interactive elements that reflect the creative nature of their programs. Mobile optimization ensures prospective students can explore programs and apply from any device, while faculty can easily manage course content and student progress.
                  </p>

                  <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Student Portfolio Showcase</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Dynamic galleries highlighting graduate work across all digital arts programs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Interactive Course Catalog</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Comprehensive program information with detailed curriculum breakdowns</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Streamlined Enrollment</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Simplified application process with document upload and progress tracking</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-maverick-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Faculty Dashboard</h3>
                        <p className="text-[#AAAAAA] leading-relaxed">Administrative tools for course management and student progress tracking</p>
                      </div>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-white mb-6">Results</h2>
                  <p className="text-[#AAAAAA] leading-relaxed mb-6">
                    The new Pixel Blue College website has become a powerful recruitment tool, showcasing the quality of their programs through impressive student portfolios. The streamlined enrollment process has significantly improved application completion rates.
                  </p>
                  <p className="text-[#AAAAAA] leading-relaxed mb-8">
                    The platform has strengthened their position as Edmonton's premier digital arts college, attracting students from across Alberta and beyond. Faculty efficiency has improved through better administrative tools, while prospective students can now easily visualize their educational journey.
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
                      <p className="text-[#AAAAAA] text-sm">Education</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Services</h4>
                      <p className="text-[#AAAAAA] text-sm">Educational Platform, Portfolio System, Enrollment Portal</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Technologies</h4>
                      <p className="text-[#AAAAAA] text-sm">Custom CMS, Student Portal, Course Management</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-maverick-orange mb-1">Timeline</h4>
                      <p className="text-[#AAAAAA] text-sm">16 weeks</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <a
                      href="https://www.pixelblue.ca/"
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
