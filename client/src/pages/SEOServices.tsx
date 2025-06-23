import { motion } from "framer-motion";
import { Search, TrendingUp, Target, BarChart3, Globe, MapPin, Users, Clock, CheckCircle, ArrowRight, Star, Award, Zap, Eye, Mouse, Phone, MessageCircle, Shield, Lightbulb, Rocket, HeartHandshake, ChevronDown, ChevronUp } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { generateBreadcrumbSchema } from "@/components/StructuredData";
import Layout from "@/components/Layout";

export default function SEOServices() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  useEffect(() => {
    console.log("SEO Services page viewed");
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://mavericksedge.ca/" },
    { name: "Services", url: "https://mavericksedge.ca/services-edmonton-alberta" },
    { name: "SEO Services", url: "https://mavericksedge.ca/seo-services-edmonton" }
  ];

  const seoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services Edmonton",
    "description": "Professional search engine optimization services in Edmonton, Alberta. Local SEO, technical SEO, content optimization, and digital marketing to help Edmonton businesses rank higher on Google.",
    "provider": {
      "@type": "Organization",
      "name": "Mavericks Edge",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6908 100 Ave NW, Suite B",
        "addressLocality": "Edmonton",
        "addressRegion": "Alberta",
        "postalCode": "T6A 0G2",
        "addressCountry": "Canada"
      },
      "telephone": "+1-250-883-8849",
      "email": "info@mavericksedge.ca"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Edmonton, Alberta, Canada"
    },
    "serviceType": "Search Engine Optimization",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$497 - $2,997"
    }
  };

  const painPoints = [
    "Your website is buried on page 2+ of Google search results",
    "Local customers can't find your business when they search online",
    "Competitors are stealing your potential customers with better rankings",
    "Your Google My Business profile is incomplete or poorly optimized",
    "You're spending money on ads but not showing up organically",
    "Your website traffic has plateaued or is declining"
  ];

  const seoServices = [
    {
      icon: MapPin,
      title: "Local Edmonton SEO",
      description: "Dominate local search results for Edmonton-specific keywords. We optimize your Google My Business, local citations, and location-based content.",
      features: ["Google My Business optimization", "Local citation building", "Edmonton keyword targeting", "Location-based content creation"]
    },
    {
      icon: Search,
      title: "Technical SEO Audit",
      description: "Comprehensive website analysis to identify and fix technical issues that prevent search engines from properly indexing your site.",
      features: ["Site speed optimization", "Mobile responsiveness check", "Schema markup implementation", "Crawl error resolution"]
    },
    {
      icon: Target,
      title: "Keyword Research & Strategy", 
      description: "Data-driven keyword research to identify high-value search terms your Edmonton customers are actually using.",
      features: ["Competitor keyword analysis", "Search volume assessment", "Long-tail keyword discovery", "Content gap analysis"]
    },
    {
      icon: BarChart3,
      title: "Content Optimization",
      description: "Transform your existing content into SEO powerhouses that rank higher and convert better for Edmonton searches.",
      features: ["On-page SEO optimization", "Meta tag enhancement", "Content structure improvement", "Internal linking strategy"]
    }
  ];

  const results = [
    { metric: "Average Ranking Improvement", value: "15+ positions", description: "within 90 days" },
    { metric: "Local Search Visibility", value: "340%", description: "increase on average" },
    { metric: "Organic Traffic Growth", value: "180%", description: "within 6 months" },
    { metric: "Edmonton Businesses Helped", value: "127+", description: "since 2023" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      business: "Edmonton Dental Clinic",
      quote: "Mavericks Edge transformed our online presence. We went from page 3 to the top 3 for 'Edmonton dentist' in just 4 months. Our new patient bookings increased by 250%.",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      business: "Rodriguez Plumbing Services",
      quote: "As a local plumber, I was struggling to compete with the big companies. Their local SEO strategy put us on the map - literally. Now we're booked solid with local Edmonton customers.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      business: "Park & Associates Law",
      quote: "The ROI has been incredible. We're now ranking #1 for multiple legal keywords in Edmonton, and our consultation requests have tripled. Best investment we've made.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results in Edmonton?",
      answer: "Most Edmonton businesses start seeing improved rankings within 60-90 days, with significant traffic increases by month 4-6. Local SEO can show faster results, often within 30-60 days for Google My Business optimization."
    },
    {
      question: "Do you guarantee first page rankings on Google?",
      answer: "While we can't guarantee specific rankings (no ethical SEO company can), we do guarantee measurable improvements in your search visibility, organic traffic, and local presence. Our track record speaks for itself with 90%+ of clients seeing significant ranking improvements."
    },
    {
      question: "What makes Edmonton SEO different from general SEO?",
      answer: "Edmonton SEO focuses on local search optimization, understanding the competitive landscape in Alberta, and targeting keywords that Edmonton residents actually use. We know the local market, seasonal trends, and how to make your business visible to Edmonton customers."
    },
    {
      question: "How much do your SEO services cost?",
      answer: "Our SEO packages start at $497/month for local businesses and scale based on your needs and competition level. We offer transparent pricing with no long-term contracts - just month-to-month service that delivers results."
    },
    {
      question: "Can you help with Google My Business optimization?",
      answer: "Absolutely! Google My Business optimization is a cornerstone of our local Edmonton SEO strategy. We'll optimize your profile, manage reviews, post regular updates, and ensure you appear in the local map pack for relevant searches."
    },
    {
      question: "What if my website is built on WordPress/Shopify/Wix?",
      answer: "We work with all major platforms including WordPress, Shopify, Wix, Squarespace, and custom-built websites. Our SEO strategies are platform-agnostic and tailored to maximize your site's potential regardless of the technology stack."
    }
  ];

  const competitorInsights = [
    "Many Edmonton SEO agencies use outdated tactics that can actually hurt your rankings",
    "Local businesses are missing huge opportunities in 'near me' searches",
    "Most competitors ignore technical SEO issues that limit their growth",
    "Edmonton has unique search patterns that generic SEO companies miss"
  ];

  return (
    <Layout>
      <SEOHead 
        title="Edmonton SEO Services | Top Local Search Rankings | Mavericks Edge"
        description="Dominate Edmonton search results with our proven SEO strategies. Local SEO, technical optimization, and content marketing that gets your business found by Edmonton customers. Free SEO audit available."
        keywords="Edmonton SEO, SEO services Edmonton, Edmonton search engine optimization, local SEO Edmonton, Google My Business Edmonton, Edmonton digital marketing, SEO company Edmonton, search ranking Edmonton, Edmonton SEO consultant, Alberta SEO services"
        canonicalUrl="https://mavericksedge.ca/seo-services-edmonton"
        ogTitle="Edmonton SEO Services | Dominate Local Search Results"
        ogDescription="Transform your Edmonton business with proven SEO strategies that deliver real results. Free SEO audit and competitive analysis available."
        ogImage="https://mavericksedge.ca/assets/logo-transparent-thumb4x.png"
        ogType="website"
      />
      
      <StructuredData data={seoServiceSchema} />
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
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
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
                    <TrendingUp className="w-4 h-4 mr-2" />
                    #1 Edmonton SEO Agency
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
                  Dominate Edmonton Search Results
                  <span className="text-maverick-orange block">Get Found First</span>
                </h1>
                
                <p className="text-xl text-[#AAAAAA] max-w-2xl mb-8 leading-relaxed">
                  Tired of watching competitors steal your customers from Google's first page? Our proven Edmonton SEO strategies get local businesses found by the customers who matter most - those searching for your services right here in Alberta.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact-edmonton-seo">
                    <motion.div
                      className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Free SEO Audit - See What's Holding You Back
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                  <Link href="#case-studies">
                    <motion.div
                      className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      See Edmonton Success Stories
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
                    <span>Results in 60-90 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Edmonton-focused</span>
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
                    <h3 className="text-2xl font-bold text-white mb-2">Edmonton Business Reality Check</h3>
                    <p className="text-gray-400">Are you losing customers to these common problems?</p>
                  </div>
                  <div className="space-y-4">
                    {painPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border-l-2 border-red-500/20"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-maverick-orange font-semibold">Sound familiar? You're not alone.</p>
                    <p className="text-gray-400 text-sm mt-1">Let's fix this together.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-5 md:px-10 bg-[#0F0F0F]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Real Edmonton SEO Results
                <span className="text-maverick-orange block">That Speak for Themselves</span>
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                Don't just take our word for it. Here's what happens when Edmonton businesses partner with us for SEO success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-gray-800/50"
                >
                  <div className="text-4xl font-bold text-maverick-orange mb-2">{result.value}</div>
                  <div className="text-white font-semibold mb-1">{result.metric}</div>
                  <div className="text-gray-400 text-sm">{result.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Comprehensive Edmonton SEO Services
                <span className="text-maverick-orange block">Everything You Need to Dominate Local Search</span>
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                Our SEO strategies are specifically designed for Edmonton businesses, incorporating local market knowledge and proven techniques that work in the Alberta market.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800/50 hover:border-maverick-orange/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-maverick-orange/10 group-hover:bg-maverick-orange/20 transition-colors">
                      <service.icon className="w-8 h-8 text-maverick-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="case-studies" className="py-20 px-5 md:px-10 bg-[#0F0F0F]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Edmonton Success Stories
                <span className="text-maverick-orange block">Real Businesses, Real Results</span>
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                See how we've helped Edmonton businesses transform their online presence and dominate local search results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-gray-800/50"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gray-800 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-maverick-orange text-sm">{testimonial.business}</div>
                  </div>
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
                Edmonton SEO Questions
                <span className="text-maverick-orange block">Get the Answers You Need</span>
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                Everything you need to know about SEO for Edmonton businesses, answered by our local experts.
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
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-maverick-orange flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
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
                Ready to Dominate Edmonton Search Results?
              </h2>
              <p className="text-xl text-[#AAAAAA] mb-8 leading-relaxed">
                Stop letting competitors steal your customers. Get a free SEO audit and see exactly what's holding your Edmonton business back from ranking #1 on Google.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact-edmonton-seo">
                  <motion.div
                    className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Your Free SEO Audit Now
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
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-maverick-orange" />
                  <span>Proven Edmonton results</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-blue-400" />
                  <span>Local support team</span>
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