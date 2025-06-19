
import { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import SplitText from '@/components/ui/SplitText';
import { motion } from 'framer-motion';

export default function Privacy() {
  useEffect(() => {
    console.log('Privacy Policy page viewed');
  }, []);

  return (
    <>
      <SEOHead 
        title="Privacy Policy - Mavericks Edge"
        description="Our privacy policy outlines how we collect, use, and protect your personal information when you use our services."
        canonicalUrl="/privacy"
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
              className="text-center pt-[0px] pb-[0px] mt-[46px] mb-[46px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <SplitText
                  text="Privacy"
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
                    text="Policy"
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
                  text="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
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
                <section className="mt-[0px] mb-[0px] pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Information We Collect</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fill out our contact forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request a quote or consultation</li>
                      <li>Communicate with us via email or phone</li>
                    </ul>
                    <p>This may include your name, email address, phone number, company name, and project details.</p>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">How We Use Your Information</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Send you newsletters and marketing communications (with your consent)</li>
                      <li>Improve our services and website functionality</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Information Sharing</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With your explicit consent</li>
                      <li>To trusted service providers who assist us in operating our website</li>
                      <li>When required by law or to protect our rights</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Data Security</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Cookies</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Your Rights</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and update your personal information</li>
                      <li>Request deletion of your data</li>
                      <li>Opt-out of marketing communications</li>
                      <li>File a complaint with relevant authorities</li>
                    </ul>
                  </div>
                </section>

                <section className="pt-[0px] pb-[0px]">
                  <h2 className="text-2xl font-semibold text-maverick-orange mb-4">Contact Us</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
