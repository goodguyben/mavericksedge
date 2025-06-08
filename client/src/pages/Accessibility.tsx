
import { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { motion } from 'framer-motion';

export default function Accessibility() {
  useEffect(() => {
    console.log('Accessibility Statement page viewed');
  }, []);

  return (
    <>
      <SEOHead 
        title="Website Accessibility Statement - Mavericks Edge"
        description="Mavericks Edge is committed to making our website accessible to all users. Learn about our accessibility features and compliance efforts."
        canonicalUrl="/accessibility"
      />
      <div className="min-h-screen bg-[#0D0D0D] text-white">
        <motion.div 
          className="container mx-auto px-5 md:px-10 py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Website <span className="text-maverick-orange">Accessibility</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Mavericks Edge is committed to ensuring digital accessibility for people with disabilities and continuously improving the user experience for everyone.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Last updated: January 1, 2025
              </p>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="prose prose-invert prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="space-y-12">
                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Our Commitment</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Mavericks Edge is committed to making our website accessible to all users, including those with disabilities. We believe that everyone should have equal access to information and functionality, and we strive to provide an inclusive digital experience for all our visitors.</p>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Accessibility Standards</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines help make web content more accessible to people with disabilities, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Visual impairments (blindness, low vision, color blindness)</li>
                      <li>Hearing impairments (deafness, hard of hearing)</li>
                      <li>Motor impairments (difficulty using a mouse, keyboard alternatives)</li>
                      <li>Cognitive impairments (learning disabilities, attention deficits)</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Accessibility Features</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Our website includes the following accessibility features:</p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Keyboard Navigation</h3>
                        <p className="text-sm">Full keyboard accessibility for users who cannot use a mouse</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Screen Reader Support</h3>
                        <p className="text-sm">Proper HTML structure and ARIA labels for screen readers</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Color Contrast</h3>
                        <p className="text-sm">High contrast ratios for better visibility</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Responsive Design</h3>
                        <p className="text-sm">Mobile-friendly design that works across all devices</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Alternative Text</h3>
                        <p className="text-sm">Descriptive alt text for all images and media</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Clear Navigation</h3>
                        <p className="text-sm">Consistent and logical navigation structure</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Accessibility in Our Services</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>As a web development and digital marketing agency, we also ensure accessibility in the projects we create for our clients:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Web Development:</strong> All custom websites are built with accessibility best practices</li>
                      <li><strong>E-commerce Solutions:</strong> Accessible online stores that serve all customers</li>
                      <li><strong>Content Creation:</strong> Alt text, captions, and accessible formatting for all content</li>
                      <li><strong>SEO Optimization:</strong> Semantic HTML and proper heading structures</li>
                      <li><strong>AI Integration:</strong> Accessible interfaces for AI-powered tools and features</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Ongoing Efforts</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We are continuously working to improve the accessibility of our website and services:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Regular accessibility audits and testing</li>
                      <li>Staff training on accessibility best practices</li>
                      <li>User testing with people with disabilities</li>
                      <li>Keeping up-to-date with the latest accessibility standards</li>
                      <li>Incorporating accessibility into our design and development process</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Known Issues</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We are currently working to address the following accessibility issues:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Some video content may not have complete audio descriptions</li>
                      <li>Complex animations may need additional controls for users with vestibular disorders</li>
                      <li>Some third-party integrations may have limited accessibility features</li>
                    </ul>
                    <p>We are committed to resolving these issues in future updates.</p>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Feedback and Support</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:</p>
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <p><strong>General Contact:</strong> <a href="mailto:info@mavericksedge.ca" className="text-maverick-orange hover:underline">info@mavericksedge.ca</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+12508838849" className="text-maverick-orange hover:underline">+1 (250) 883-8849</a></p>
                      <p><strong>Address:</strong> 6908 100 Ave NW, Suite B, Edmonton, AB T6A 0G2, Canada</p>
                    </div>
                    <p className="mt-4">We aim to respond to accessibility feedback within 2 business days and will work with you to provide the information or service you need in an accessible format.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Third-Party Content</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Some content on our website may be provided by third parties. While we strive to ensure all content meets accessibility standards, we cannot guarantee the accessibility of all third-party content. If you encounter accessibility issues with third-party content, please contact us and we will work to address the issue.</p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
