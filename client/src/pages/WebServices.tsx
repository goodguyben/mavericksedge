import { motion } from "framer-motion";
import { Code, Monitor, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Gauge, Bookmark, Users, Smartphone, Search, Zap, Award, Star, MapPin, Clock, CheckCircle, ArrowRight, Lightbulb, Rocket, Handshake, TrendingUp, Phone, Heart, Eye, MessageCircle, Target } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { webDevelopmentServiceSchema, generateBreadcrumbSchema } from "@/components/StructuredData";

export default function WebServices() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    console.log("Web Services page viewed");
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://mavericksedge.ca/" },
    { name: "Services", url: "https://mavericksedge.ca/services-edmonton-alberta" },
    { name: "Web Development", url: "https://mavericksedge.ca/web-design-services-edmonton" }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites are completed in 4-8 weeks, depending on complexity. We provide a detailed timeline during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely! We offer maintenance packages starting at $97/month that include security updates, backups, and technical support. We're here when you need us."
    },
    {
      question: "Will my website work on mobile phones and tablets?",
      answer: "Yes, every website we build is fully responsive and optimized for mobile devices. With over 60% of web traffic coming from mobile, this is essential for your success."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Edmonton Web Design & Development | Affordable Websites That Work | Mavericks Edge"
        description="Stop losing customers to outdated websites. Edmonton's trusted web design team creates fast, mobile-friendly websites that actually convert visitors into customers. Free consultation available."
        keywords="Edmonton web design, affordable web development Edmonton, nonprofit website builder Edmonton, custom websites Edmonton, responsive web design Alberta, Edmonton website design company, web design services Edmonton, small business websites Edmonton, web development Edmonton, website design Edmonton"
        canonicalUrl="https://mavericksedge.ca/web-design-services-edmonton"
        ogTitle="Edmonton Web Design That Actually Works | Mavericks Edge"
        ogDescription="Transform your online presence with websites built for real Edmonton businesses. Fast turnaround, human-centric design, local support."
        ogImage="https://mavericksedge.ca/assets/logo-transparent-thumb4x.png"
        ogType="website"
      />
      
      <StructuredData data={webDevelopmentServiceSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="pt-44 md:pt-48 pb-24 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212] relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-maverick-orange/10 text-maverick-orange text-sm font-medium border border-maverick-orange/20">
                    <MapPin className="w-4 h-4 mr-2" />
                    Edmonton's Web Design Experts
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
                  Stop Losing Customers to 
                  <span className="text-maverick-orange block">Outdated Websites</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl mb-6 leading-relaxed">
                  Your website should be your best salesperson, not your biggest obstacle. We help Edmonton small businesses and nonprofits get the professional, fast-loading websites they deserve.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact-edmonton-web-design">
                    <motion.div
                      className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Your Free Website Strategy Session
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-maverick-orange" />
                    <span>4-8 week delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>Local support</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-8 rounded-2xl border border-gray-800/50 backdrop-blur-sm">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Sound Familiar?</h3>
                    <p className="text-gray-400">Common problems Edmonton businesses face</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border-l-2 border-red-500/20">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">Website looks outdated and unprofessional</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border-l-2 border-red-500/20">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">Slow loading times losing potential customers</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border-l-2 border-red-500/20">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">Not showing up in Google searches</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-maverick-orange font-semibold">We fix all of this. And more.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Your Questions Answered
                <span className="text-maverick-orange block">Everything You Need to Know</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've been building websites for Edmonton businesses for years. Here are the questions we hear most often.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left p-6 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800/50 hover:border-maverick-orange/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        {expandedFaq === index ? (
                          <div className="w-6 h-6 rounded-full bg-maverick-orange/20 flex items-center justify-center">
                            <div className="w-3 h-0.5 bg-maverick-orange"></div>
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                            <div className="w-3 h-0.5 bg-gray-400"></div>
                            <div className="w-0.5 h-3 bg-gray-400 absolute"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-5 md:px-10 bg-gradient-to-br from-maverick-orange/10 via-[#1A1A1A] to-[#121212] relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                Ready to Stop Losing Customers?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your competitors already have great websites. Don't let them win by default. Get a free strategy session and see how we can transform your online presence in just 4-8 weeks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact-edmonton-web-design">
                  <motion.div
                    className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Your Free Strategy Session
                    <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
                <Link href="tel:+12508838849">
                  <motion.div
                    className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (250) 883-8849
                  </motion.div>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-maverick-orange" />
                  <span>4-8 week delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Handshake className="w-5 h-5 text-blue-400" />
                  <span>Local Edmonton team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </>
  );
}