
import { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { motion } from 'framer-motion';

export default function GDPRCompliance() {
  useEffect(() => {
    console.log('GDPR Compliance page viewed');
  }, []);

  return (
    <>
      <SEOHead 
        title="GDPR Compliance & Data Protection - Mavericks Edge"
        description="Learn about Mavericks Edge's commitment to GDPR compliance and data protection for our web development and digital marketing services."
        canonical="/gdpr-compliance"
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
                GDPR <span className="text-maverick-orange">Compliance</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our commitment to protecting your personal data and ensuring GDPR compliance in all our web development and digital marketing services.
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
                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Our GDPR Commitment</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Mavericks Edge is committed to protecting your personal data and respecting your privacy rights under the General Data Protection Regulation (GDPR). This applies to all residents of the European Union, regardless of where they are located when using our services.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Your Rights Under GDPR</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Under GDPR, you have the following rights regarding your personal data:</p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Right to Information</h3>
                        <p className="text-sm">Be informed about how your data is collected and used</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Right of Access</h3>
                        <p className="text-sm">Request access to your personal data we hold</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Right to Rectification</h3>
                        <p className="text-sm">Correct inaccurate or incomplete personal data</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Right to Erasure</h3>
                        <p className="text-sm">Request deletion of your personal data ("Right to be Forgotten")</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Right to Restrict Processing</h3>
                        <p className="text-sm">Limit how we process your personal data</p>
                      </div>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-maverick-orange mb-2">Right to Data Portability</h3>
                        <p className="text-sm">Receive your data in a structured, machine-readable format</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">How We Protect Your Data</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We implement appropriate technical and organizational measures to ensure data security:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Encryption:</strong> All data transmission is encrypted using industry-standard protocols</li>
                      <li><strong>Access Controls:</strong> Strict access controls limit who can view personal data</li>
                      <li><strong>Regular Audits:</strong> We conduct regular security audits and assessments</li>
                      <li><strong>Staff Training:</strong> Our team is trained on GDPR requirements and data protection</li>
                      <li><strong>Secure Infrastructure:</strong> Our hosting and storage solutions meet high security standards</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Legal Basis for Processing</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We process personal data based on the following legal grounds:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Consent:</strong> When you explicitly agree to our processing activities</li>
                      <li><strong>Contract:</strong> To fulfill our web development and digital marketing services</li>
                      <li><strong>Legitimate Interest:</strong> For business analytics and service improvement</li>
                      <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Data Processing for Our Services</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>In our web development and digital marketing services, we may process data for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Website Development:</strong> Creating custom websites and e-commerce solutions</li>
                      <li><strong>SEO Services:</strong> Optimizing content and analyzing website performance</li>
                      <li><strong>Digital Marketing:</strong> Managing social media campaigns and content strategy</li>
                      <li><strong>AI Integration:</strong> Implementing automation and intelligent solutions</li>
                      <li><strong>Analytics:</strong> Measuring website performance and user engagement</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">International Data Transfers</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We are based in Canada, which has been recognized by the European Commission as providing adequate protection for personal data. Any international transfers are conducted with appropriate safeguards in place.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Exercising Your Rights</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within 30 days.</p>
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <p><strong>Data Protection Officer:</strong> <a href="mailto:dpo@mavericksedge.com" className="text-maverick-orange hover:underline">dpo@mavericksedge.com</a></p>
                      <p><strong>General Inquiries:</strong> <a href="mailto:privacy@mavericksedge.com" className="text-maverick-orange hover:underline">privacy@mavericksedge.com</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+12508838849" className="text-maverick-orange hover:underline">+1 (250) 883-8849</a></p>
                      <p><strong>Address:</strong> 6908 100 Ave NW, Suite B, Edmonton, AB T6A 0G2, Canada</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Supervisory Authority</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>If you believe we have not adequately addressed your concerns, you have the right to lodge a complaint with your local supervisory authority or the Information Commissioner's Office (ICO) in the UK.</p>
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
