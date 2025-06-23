import { motion } from "framer-motion";
import { Code, Monitor, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Gauge, Bookmark, Users, Smartphone, Search, Zap, Award, Star, MapPin, Clock, CheckCircle, ArrowRight, Lightbulb, Rocket, Handshake, TrendingUp, Phone, Heart, Eye, MessageCircle, Target } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { webDevelopmentServiceSchema, generateBreadcrumbSchema } from "@/components/StructuredData";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

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

  const commonProblems = [
    "Website looks outdated and unprofessional",
    "Slow loading times losing potential customers", 
    "Not showing up in Google searches",
    "Difficult to update or maintain",
    "Poor mobile experience on phones/tablets",
    "No clear way for customers to contact or buy"
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Business Websites",
      description: "Professional websites that reflect your brand and convert visitors into customers. Perfect for service businesses, restaurants, and local companies.",
      features: ["Responsive design", "SEO optimization", "Contact forms", "Google Maps integration"],
      price: "Starting at $1,497"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that make selling simple. From product catalogs to secure payments, we handle everything.",
      features: ["Secure payments", "Inventory management", "Mobile checkout", "Analytics dashboard"],
      price: "Starting at $2,997"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nonprofit Websites",
      description: "Compelling websites that help nonprofits tell their story, attract donors, and engage volunteers effectively.",
      features: ["Donation integration", "Event management", "Volunteer portal", "Impact showcases"],
      price: "Starting at $997"
    }
  ];

  const successStories = [
    {
      name: "Mountain View Dental",
      industry: "Healthcare",
      challenge: "Outdated website with poor mobile experience",
      solution: "Complete redesign with patient portal and online booking",
      results: ["65% increase in online bookings", "40% more new patient inquiries", "Improved Google ranking to #2"],
      quote: "Our new website has transformed how patients interact with our practice. Online bookings have increased dramatically."
    },
    {
      name: "Edmonton Food Bank",
      industry: "Nonprofit",
      challenge: "Difficult donation process and outdated volunteer system",
      solution: "Streamlined donation flow and volunteer management portal",
      results: ["180% increase in online donations", "300% more volunteer registrations", "25% reduction in admin time"],
      quote: "The new website has made it so much easier for people to support our cause. We're reaching more people than ever."
    },
    {
      name: "Northern Plumbing Co.",
      industry: "Service Business",
      challenge: "Not showing up in local searches",
      solution: "SEO-optimized website with local business features",
      results: ["Top 3 ranking for 'Edmonton plumber'", "90% increase in service calls", "50% growth in revenue"],
      quote: "We went from invisible online to the top of Google. Our phone hasn't stopped ringing since the new site launched."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business, customers, and goals. No cookie-cutter solutions - every website is tailored to your unique needs.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "We create wireframes and designs that prioritize user experience and conversion. You'll see exactly what your website will look like before we build it.",
      duration: "Week 2-3"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers bring the design to life with clean, fast code. We test everything to ensure it works perfectly on all devices and browsers.",
      duration: "Week 4-6"
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We launch your website and monitor performance closely. Plus, we provide training and ongoing support to keep everything running smoothly.",
      duration: "Week 7-8"
    }
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
    },
    {
      question: "Can you help with SEO so people can find my website?",
      answer: "Yes! All our websites include basic SEO optimization. We also offer advanced SEO services to help you rank higher in Google searches for Edmonton-specific keywords."
    },
    {
      question: "What if I need changes or updates to my website?",
      answer: "We build websites that are easy to update, and we provide training on how to make basic changes yourself. For larger updates, our team is always available to help."
    },
    {
      question: "How much does a website cost?",
      answer: "Our websites start at $997 for nonprofits and $1,497 for business websites. The final cost depends on your specific needs and features. We provide transparent, upfront pricing with no surprises."
    }
  ];

  return (
    <Layout>
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
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maverick-orange/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

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

                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  <strong>Tired of watching potential customers leave your site within seconds?</strong> Fed up with websites that look great but don't convert? We specialize in human-centric design that turns visitors into customers - with lightning-fast turnaround and ongoing Edmonton support.
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
                  <Link href="#success-stories">
                    <motion.div
                      className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      See Real Results
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
                    {commonProblems.map((problem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border-l-2 border-red-500/20"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">{problem}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-maverick-orange font-semibold">We fix all of this. And more.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-5 md:px-10 bg-[#0F0F0F]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Web Design Services Built for
                <span className="text-maverick-orange block">Edmonton Businesses</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a local service business, nonprofit, or retail store, we have the perfect solution to get you online and growing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-gray-800/50 hover:border-maverick-orange/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-maverick-orange/10 text-maverick-orange mb-6 group-hover:bg-maverick-orange/20 transition-colors w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-800 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-maverick-orange font-bold text-lg">{service.price}</span>
                      <Link href="/contact-edmonton-web-design">
                        <motion.button
                          className="px-4 py-2 bg-maverick-orange/10 text-maverick-orange rounded-lg hover:bg-maverick-orange/20 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success-stories" className="py-20 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Real Edmonton Success Stories
                <span className="text-maverick-orange block">Businesses Just Like Yours</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how we've helped local Edmonton businesses transform their online presence and achieve real, measurable growth.
              </p>
            </motion.div>

            <div className="space-y-12">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800/50"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">{story.name}</h3>
                      <span className="px-3 py-1 bg-maverick-orange/10 text-maverick-orange rounded-full text-sm">
                        {story.industry}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2">The Challenge</h4>
                        <p className="text-gray-400">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2">Our Solution</h4>
                        <p className="text-gray-400">{story.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-4">The Results</h4>
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                          <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                    <blockquote className="border-l-4 border-maverick-orange pl-4 italic text-gray-300">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-5 md:px-10 bg-[#0F0F0F]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Our Proven Process
                <span className="text-maverick-orange block">From Idea to Launch in 4-8 Weeks</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                No surprises, no delays. Here's exactly how we'll transform your online presence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-maverick-orange/10 border-2 border-maverick-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-maverick-orange font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-maverick-orange text-sm font-medium">{step.duration}</div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-maverick-orange/50 to-transparent -translate-x-1/2"></div>
                  )}
                </motion.div>
              ))}
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
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF5630" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
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
    </Layout>
  );
}