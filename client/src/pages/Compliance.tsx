
import { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { motion } from 'framer-motion';

export default function Compliance() {
  useEffect(() => {
    // Page view tracking can be added here if needed
  }, []);

  return (
    <>
      <SEOHead
        title="Compliance & Standards | Mavericks Edge"
        description="Learn about Mavericks Edge's compliance standards, industry certifications, and commitment to maintaining the highest levels of security and quality in our web development, marketing, and AI services."
      />
      <div className="min-h-screen bg-maverick-black text-maverick-cream">
        <div className="container mx-auto px-4 py-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-maverick-orange to-yellow-500 bg-clip-text text-transparent">
              Compliance & Standards
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 text-center">
              At Mavericks Edge, we maintain the highest standards of compliance, security, and quality across all our services.
            </p>

            <div className="space-y-12">
              {/* Industry Standards */}
              <section className="pt-[0px] pb-[0px]">
                <h2 className="text-2xl font-semibold mb-6 text-maverick-orange">Industry Standards & Certifications</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We adhere to industry-leading standards and best practices in all aspects of our business operations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Web Development:</strong> WCAG 2.1 accessibility guidelines, W3C standards, and responsive design principles</li>
                    <li><strong>Security:</strong> OWASP security guidelines, SSL/TLS encryption, and secure coding practices</li>
                    <li><strong>Data Protection:</strong> GDPR compliance, data minimization, and privacy by design</li>
                    <li><strong>Quality Assurance:</strong> ISO 9001 quality management principles and continuous improvement processes</li>
                  </ul>
                </div>
              </section>

              {/* Security Compliance */}
              <section className="pt-[0px] pb-[0px]">
                <h2 className="text-2xl font-semibold mb-6 text-maverick-orange">Security & Privacy Compliance</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our commitment to security and privacy extends across all client projects and internal operations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Encrypted data transmission and storage</li>
                    <li>Access controls and authentication protocols</li>
                    <li>Incident response and breach notification procedures</li>
                    <li>Staff training on security best practices and data handling</li>
                  </ul>
                </div>
              </section>

              {/* Development Standards */}
              <section className="pt-[0px] pb-[0px]">
                <h2 className="text-2xl font-semibold mb-6 text-maverick-orange">Development & Project Standards</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We follow rigorous development standards to ensure consistency, reliability, and maintainability:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Agile development methodologies with regular client communication</li>
                    <li>Version control and code review processes</li>
                    <li>Automated testing and continuous integration</li>
                    <li>Performance optimization and scalability planning</li>
                    <li>Documentation and knowledge transfer protocols</li>
                  </ul>
                </div>
              </section>

              {/* AI & Data Ethics */}
              <section className="pt-[0px] pb-[0px]">
                <h2 className="text-2xl font-semibold mb-6 text-maverick-orange">AI Ethics & Responsible Data Use</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our AI services are developed and deployed with ethical considerations and responsible data practices:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Transparent AI decision-making processes</li>
                    <li>Bias detection and mitigation strategies</li>
                    <li>Explainable AI implementations where applicable</li>
                    <li>Responsible data collection and usage practices</li>
                    <li>Regular algorithm auditing and performance monitoring</li>
                  </ul>
                </div>
              </section>

              {/* Environmental Responsibility */}
              <section className="pt-[0px] pb-[0px]">
                <h2 className="text-2xl font-semibold mb-6 text-maverick-orange">Environmental & Social Responsibility</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We are committed to sustainable business practices and positive social impact:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Green hosting solutions and energy-efficient development practices</li>
                    <li>Carbon footprint reduction initiatives</li>
                    <li>Support for diversity and inclusion in technology</li>
                    <li>Community outreach and pro bono work for nonprofits</li>
                    <li>Ethical supplier and partner selection</li>
                  </ul>
                </div>
              </section>

              {/* Continuous Improvement */}
              <section className="pt-[0px] pb-[0px]">
                <h2 className="text-2xl font-semibold mb-6 text-maverick-orange">Continuous Improvement & Updates</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We regularly review and update our compliance standards to stay current with evolving regulations and best practices:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Quarterly compliance audits and policy reviews</li>
                    <li>Staff training and certification programs</li>
                    <li>Industry conference participation and knowledge sharing</li>
                    <li>Client feedback integration and service improvement</li>
                    <li>Technology stack updates and security patches</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-white/5 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-maverick-orange">Questions About Our Compliance?</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about our compliance standards, certifications, or would like to discuss specific requirements for your project, we're here to help.
                </p>
                <p className="text-gray-300">
                  Contact us at <a href="mailto:compliance@mavericksedge.ca" className="text-maverick-orange hover:underline">compliance@mavericksedge.ca</a> or through our general <a href="/contact" className="text-maverick-orange hover:underline">contact form</a>.
                </p>
              </section>

              <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-8">
                <p>Last updated: January 2025</p>
                <p className="mt-2">
                  This compliance statement is regularly reviewed and updated to reflect current standards and practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
