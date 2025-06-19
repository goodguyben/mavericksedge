
import { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import SplitText from '@/components/ui/SplitText';
import { motion } from 'framer-motion';

export default function Terms() {
  useEffect(() => {
    console.log('Terms of Service page viewed');
  }, []);

  return (
    <>
      <SEOHead 
        title="Terms of Service - Mavericks Edge"
        description="Our terms of service outline the rules and regulations for using our web development and digital marketing services."
        canonicalUrl="/terms"
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
              className="text-center mt-[42px] mb-[42px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <SplitText
                  text="Terms of"
                  className="inline-block mr-4"
                  delay={200}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />
                <span className="text-maverick-orange">
                  <SplitText
                    text="Service"
                    className="inline-block"
                    delay={400}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />
                </span>
              </h1>
              <div className="text-lg text-gray-300 max-w-2xl mx-auto">
                <SplitText
                  text="These terms govern your use of our services and establish the legal relationship between you and Mavericks Edge."
                  className="text-lg text-gray-300"
                  delay={600}
                  duration={0.4}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  stagger={0.03}
                />
              </div>
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
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Acceptance of Terms</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Service Description</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Mavericks Edge provides web development, digital marketing, AI integration, and related services including but not limited to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Custom website design and development</li>
                      <li>E-commerce solutions</li>
                      <li>Digital marketing campaigns</li>
                      <li>SEO optimization</li>
                      <li>AI integration and automation</li>
                      <li>Content creation and strategy</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Client Responsibilities</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>As a client, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and complete information necessary for project completion</li>
                      <li>Respond to requests for feedback and approval in a timely manner</li>
                      <li>Make payments according to the agreed schedule</li>
                      <li>Respect intellectual property rights</li>
                      <li>Use our services in compliance with applicable laws</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Payment Terms</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Payment terms will be specified in individual project agreements. Generally:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>A deposit may be required before work begins</li>
                      <li>Payments are due within 30 days of invoice date</li>
                      <li>Late payments may incur additional fees</li>
                      <li>Work may be suspended for overdue accounts</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Intellectual Property</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Upon full payment, clients receive ownership of custom code and content created specifically for their project. However:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Mavericks Edge retains rights to general methodologies and frameworks</li>
                      <li>Third-party components remain under their respective licenses</li>
                      <li>Mavericks Edge may showcase completed work in portfolios</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Limitation of Liability</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Mavericks Edge's liability is limited to the amount paid for services. We are not liable for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of profits or business opportunities</li>
                      <li>Third-party actions or service interruptions</li>
                      <li>Data loss (clients are responsible for backups)</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Termination</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Either party may terminate services with written notice. Upon termination:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Client pays for work completed to date</li>
                      <li>Mavericks Edge delivers completed work upon payment</li>
                      <li>Confidential information remains protected</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Warranty and Support</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We provide a 30-day warranty on custom development work for defects in functionality as originally specified. Support terms vary by project and will be outlined in individual agreements.</p>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Governing Law</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>These terms are governed by the laws of Alberta, Canada. Any disputes will be resolved in the courts of Alberta.</p>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Contact Information</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>For questions about these terms, please contact us:</p>
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <p><strong>Email:</strong> <a href="mailto:support@mavericksedge.ca" className="text-maverick-orange hover:underline">support@mavericksedge.ca</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+12508838849" className="text-maverick-orange hover:underline">+1 (250) 883-8849</a></p>
                      <p><strong>Address:</strong> 6908 100 Ave NW, Suite B, Edmonton, AB T6A 0G2, Canada</p>
                    </div>
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
