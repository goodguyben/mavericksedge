
import { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
  useEffect(() => {
    console.log('Cookie Policy page viewed');
  }, []);

  return (
    <>
      <SEOHead 
        title="Cookie Policy - Mavericks Edge"
        description="Learn about how Mavericks Edge uses cookies and tracking technologies on our website to improve your browsing experience."
        canonical="/cookie-policy"
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
                Cookie <span className="text-maverick-orange">Policy</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                This policy explains how Mavericks Edge uses cookies and similar tracking technologies on our website.
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
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">What Are Cookies</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and improving site functionality.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">How We Use Cookies</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Essential Cookies:</strong> Required for basic website functionality and security</li>
                      <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                      <li><strong>Analytics Cookies:</strong> Collect anonymous data to improve our services</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Types of Cookies We Use</h2>
                  <div className="text-gray-300 space-y-6">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-maverick-orange mb-3">Essential Cookies</h3>
                      <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
                    </div>
                    
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-maverick-orange mb-3">Analytics Cookies</h3>
                      <p>We use analytics tools to understand how visitors use our site. This helps us improve our web development and digital marketing services.</p>
                    </div>
                    
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-maverick-orange mb-3">Marketing Cookies</h3>
                      <p>These cookies track your browsing habits to deliver relevant advertisements and measure campaign effectiveness.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Third-Party Cookies</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We may use third-party services that set their own cookies:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Google Analytics:</strong> For website performance analysis</li>
                      <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                      <li><strong>Video Providers:</strong> For embedded video content</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Managing Your Cookie Preferences</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>You can control cookies through:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
                      <li><strong>Opt-out Tools:</strong> Use industry opt-out mechanisms for advertising cookies</li>
                      <li><strong>Our Cookie Banner:</strong> Manage preferences when you first visit our site</li>
                    </ul>
                    <p className="mt-4">Note: Disabling certain cookies may affect website functionality and your user experience.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Contact Us</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>If you have questions about our cookie policy, please contact us:</p>
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
