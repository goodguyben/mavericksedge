
import { motion } from "framer-motion";
import { Search, TrendingUp, Target, MapPin, Clock, CheckCircle, ArrowRight, Phone, BarChart, Eye, Users, Globe, Zap, Award, Star, DollarSign, Calendar, Lightbulb, Rocket } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";

export default function SEOServices() {
  useEffect(() => {
    console.log("SEO Services page viewed");
  }, []);

  const seoStats = [
    { number: "93%", label: "of online experiences start with search engines" },
    { number: "75%", label: "of users never scroll past the first page" },
    { number: "3x", label: "more traffic from organic search vs social media" },
    { number: "14.6%", label: "average close rate for SEO leads" }
  ];

  const painPoints = [
    { icon: <Eye className="h-6 w-6 text-red-400" />, text: "Your competitors appear first when Edmonton customers search for your services" },
    { icon: <TrendingUp className="h-6 w-6 text-red-400" />, text: "Your website traffic has plateaued or is declining" },
    { icon: <Target className="h-6 w-6 text-red-400" />, text: "You're not showing up in local 'near me' searches" },
    { icon: <DollarSign className="h-6 w-6 text-red-400" />, text: "You're spending too much on paid ads with little ROI" },
    { icon: <Users className="h-6 w-6 text-red-400" />, text: "Website visitors aren't converting into customers" },
    { icon: <Globe className="h-6 w-6 text-red-400" />, text: "Your Google My Business isn't optimized for local searches" }
  ];

  const services = [
    {
      title: "Local Edmonton SEO Domination",
      subtitle: "Own Your Local Search Market",
      description: "We help Edmonton businesses dominate local search results. When someone searches for your services + Edmonton, Alberta, or 'near me', your business appears first. Our local SEO strategies are specifically designed for the Edmonton market.",
      features: [
        "Google My Business optimization",
        "Local keyword targeting",
        "Edmonton-specific content strategy",
        "Local citation building",
        "Review management system",
        "Geo-targeted landing pages"
      ],
      icon: <MapPin className="h-12 w-12 text-maverick-orange" />,
      gradient: "from-blue-500/20 to-green-500/20",
      caseStudy: {
        client: "Edmonton HVAC Company",
        result: "300% increase in service calls",
        detail: "Ranked #1 for 'HVAC repair Edmonton' in 3 months"
      }
    },
    {
      title: "Technical SEO & Site Optimization",
      subtitle: "Make Google Love Your Website",
      description: "Technical SEO is the foundation of search success. We optimize your website's technical infrastructure to ensure search engines can crawl, understand, and rank your content effectively.",
      features: [
        "Page speed optimization",
        "Mobile-first indexing setup",
        "Schema markup implementation",
        "XML sitemap optimization",
        "Core Web Vitals improvement",
        "SSL and security optimization"
      ],
      icon: <Zap className="h-12 w-12 text-maverick-orange" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      caseStudy: {
        client: "Edmonton E-commerce Store",
        result: "85% improvement in page speed",
        detail: "Organic traffic increased 150% in 6 months"
      }
    },
    {
      title: "Content Strategy & Link Building",
      subtitle: "Content That Ranks and Converts",
      description: "We create SEO-optimized content that Edmonton customers actually want to read. Our content strategy combines keyword research with genuine value, building authority and trust in your industry.",
      features: [
        "Keyword research & strategy",
        "SEO-optimized blog writing",
        "Local content creation",
        "High-quality link building",
        "Competitor content analysis",
        "Content calendar planning"
      ],
      icon: <Target className="h-12 w-12 text-maverick-orange" />,
      gradient: "from-yellow-500/20 to-orange-500/20",
      caseStudy: {
        client: "Edmonton Law Firm",
        result: "First page rankings for 20+ keywords",
        detail: "Monthly organic leads increased 400%"
      }
    }
  ];

  const process = [
    {
      step: "Week 1",
      title: "SEO Audit & Strategy",
      description: "Comprehensive analysis of your current SEO performance and competitive landscape",
      tasks: [
        "Technical SEO audit",
        "Keyword research",
        "Competitor analysis",
        "Local search assessment"
      ],
      icon: <Search className="h-8 w-8 text-maverick-orange" />
    },
    {
      step: "Week 2-4",
      title: "Technical Implementation",
      description: "Fix technical issues and implement foundational SEO improvements",
      tasks: [
        "Site speed optimization",
        "Mobile optimization",
        "Schema markup",
        "Google My Business setup"
      ],
      icon: <Zap className="h-8 w-8 text-maverick-orange" />
    },
    {
      step: "Month 2-3",
      title: "Content & Link Building",
      description: "Create high-quality content and build authoritative backlinks",
      tasks: [
        "SEO content creation",
        "Local link building",
        "Citation management",
        "Content optimization"
      ],
      icon: <Target className="h-8 w-8 text-maverick-orange" />
    },
    {
      step: "Ongoing",
      title: "Monitor & Optimize",
      description: "Continuous monitoring, reporting, and optimization for sustained growth",
      tasks: [
        "Performance tracking",
        "Monthly reporting",
        "Strategy refinement",
        "Competitive monitoring"
      ],
      icon: <BarChart className="h-8 w-8 text-maverick-orange" />
    }
  ];

  const packages = [
    {
      name: "Local SEO Starter",
      price: "$850",
      period: "/month",
      description: "Perfect for Edmonton small businesses",
      features: [
        "Google My Business optimization",
        "5 local keywords targeting",
        "Monthly content creation",
        "Basic link building",
        "Monthly reporting",
        "3-month minimum"
      ],
      popular: false,
      bestFor: "New businesses or those just starting with SEO"
    },
    {
      name: "SEO Growth Pro",
      price: "$1,450",
      period: "/month",
      description: "Most popular for established businesses",
      features: [
        "15+ keyword targeting",
        "Technical SEO optimization",
        "Weekly content creation",
        "Advanced link building",
        "Competitor analysis",
        "Bi-weekly strategy calls"
      ],
      popular: true,
      bestFor: "Businesses ready to dominate their market"
    },
    {
      name: "Enterprise SEO",
      price: "$2,500",
      period: "/month",
      description: "Complete SEO domination",
      features: [
        "Unlimited keyword targeting",
        "Full technical optimization",
        "Daily content creation",
        "Premium link building",
        "Custom strategy development",
        "Weekly reporting & calls"
      ],
      popular: false,
      bestFor: "Large businesses or competitive industries"
    }
  ];

  const testimonials = [
    {
      quote: "Before Mavericks Edge, we were invisible online. Now we're ranking #1 for multiple Edmonton keywords and our phone won't stop ringing with new customers.",
      client: "David Kumar",
      company: "Edmonton Plumbing Solutions",
      result: "500% increase in organic leads",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Their local SEO strategy completely transformed our business. We went from page 3 to position 1 for 'dental clinic Edmonton' in just 4 months.",
      client: "Dr. Sarah Wong",
      company: "Smile Dental Edmonton",
      result: "300% more appointment bookings",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The ROI from their SEO work has been incredible. We're now getting more qualified leads from organic search than all our paid advertising combined.",
      client: "Mark Thompson",
      company: "YEG Marketing Agency",
      result: "400% ROI on SEO investment",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results in Edmonton?",
      answer: "Most clients see initial improvements within 2-3 months, with significant results by month 6. Local SEO often shows faster results than national campaigns. We provide monthly reports so you can track progress every step of the way."
    },
    {
      question: "What makes Edmonton SEO different from general SEO?",
      answer: "Edmonton SEO focuses on local search intent, geographic modifiers, and local business directories. We understand Edmonton's market dynamics, seasonal trends, and local competition to create targeted strategies that work specifically for YEG businesses."
    },
    {
      question: "Do you guarantee first page rankings?",
      answer: "While we can't guarantee specific rankings (no ethical SEO company can), we do guarantee measurable improvements in organic traffic, local visibility, and lead generation. Our track record speaks for itself with 95% of clients seeing significant improvements."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track keyword rankings, organic traffic growth, local visibility, conversion rates, and most importantly - business impact like leads, calls, and revenue. Monthly reports show exactly how SEO is contributing to your bottom line."
    },
    {
      question: "Can you help with Google My Business optimization?",
      answer: "Absolutely! Google My Business optimization is a core part of our local SEO service. We optimize your profile, manage reviews, post regular updates, and ensure your business shows up in local map results."
    },
    {
      question: "What if I'm already working with another SEO company?",
      answer: "We offer free SEO audits to show you exactly where your current strategy might be falling short. Many clients come to us after disappointing results elsewhere. We're confident in our Edmonton-focused approach and transparent reporting."
    }
  ];

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Edmonton SEO Services",
    "description": "Professional SEO services for Edmonton businesses. Local SEO, technical optimization, and content strategy to dominate search results.",
    "provider": {
      "@type": "Organization",
      "name": "Mavericks Edge",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Edmonton",
        "addressRegion": "Alberta",
        "addressCountry": "Canada"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Edmonton"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CAD",
      "price": "850",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "850",
        "priceCurrency": "CAD",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": "1",
          "unitCode": "MON"
        }
      }
    }
  };

  return (
    <div>
      <SEOHead 
        title="Edmonton SEO Services | Dominate Local Search Results | Mavericks Edge"
        description="Edmonton's leading SEO agency helping businesses dominate local search results. Proven strategies, transparent reporting, guaranteed results. Get more customers from Google."
        keywords="Edmonton SEO, SEO services Edmonton, local SEO Edmonton, search engine optimization Edmonton, Google rankings Edmonton, Edmonton digital marketing"
        canonicalUrl="https://mavericksedge.ca/seo-services-edmonton"
        ogTitle="Edmonton SEO Services | Dominate Local Search Results"
        ogDescription="Edmonton's leading SEO agency. Proven strategies to dominate local search results and get more customers from Google."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
        ogType="website"
      />
      
      <StructuredData data={seoSchema} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="pt-44 md:pt-48 pb-24 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/10 via-transparent to-blue-500/5"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-maverick-orange/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Search className="h-6 w-6 text-maverick-orange" />
                  <span className="text-maverick-orange font-semibold">Edmonton's SEO Specialists</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
                  Dominate Edmonton Search Results
                  <span className="text-maverick-orange block">Get Found First</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Stop losing customers to competitors who show up first on Google. Our Edmonton SEO specialists help local businesses 
                  <strong className="text-white"> rank #1 for searches that matter.</strong>
                </p>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-lg p-4 mb-8">
                  <p className="text-gray-300">
                    <strong className="text-blue-400">Local fact:</strong> 46% of all Google searches are looking for local information. 
                    If you're not showing up in Edmonton searches, you're invisible to half your potential customers.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact-edmonton-seo">
                    <motion.div
                      className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Free SEO Audit
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                  <a href="tel:+1-250-883-8849">
                    <motion.div
                      className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call: (250) 883-8849
                    </motion.div>
                  </a>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-center">
                  {seoStats.map((stat, index) => (
                    <div key={index} className="bg-[#1A1A1A] rounded-lg p-3">
                      <div className="text-lg font-bold text-maverick-orange">{stat.number}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-1 rounded-2xl border border-gray-700 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Edmonton SEO Success Dashboard" 
                    className="rounded-xl w-full h-auto" 
                  />
                </div>
                
                {/* Floating SEO Metrics */}
                <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold">Rank #1</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold">+300% Traffic</div>
                </div>
                <div className="absolute top-1/2 -right-6 bg-maverick-orange text-white px-3 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold">400% ROI</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Is Your Business Invisible on Google?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                These search visibility problems are costing Edmonton businesses thousands in lost revenue:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {point.icon}
                      <h3 className="font-semibold text-white">Search Problem #{index + 1}</h3>
                    </div>
                    <p className="text-gray-300">{point.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12 p-6 bg-gradient-to-r from-maverick-orange/20 to-blue-500/20 border border-maverick-orange/30 rounded-xl max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-lg text-white font-medium">
                  If your Edmonton business isn't on the first page of Google, you're practically invisible to potential customers.
                  <span className="block mt-2 text-maverick-orange">Let's fix that...</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Edmonton SEO Services That Drive Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive SEO strategies designed specifically for Edmonton's competitive market.
              </p>
            </motion.div>

            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`p-6 bg-gradient-to-br ${service.gradient} rounded-xl inline-block mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 font-heading">{service.title}</h3>
                    <h4 className="text-xl text-maverick-orange mb-4">{service.subtitle}</h4>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-maverick-orange mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Case Study */}
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-green-400" />
                        <span className="font-semibold text-green-400">Client Success</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        <strong>{service.caseStudy.client}:</strong> {service.caseStudy.result}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{service.caseStudy.detail}</p>
                    </div>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-1 rounded-2xl border border-gray-700 shadow-2xl">
                      <img 
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1551288049-bebda4e38f71' : index === 1 ? '1460925895917-afdab827c52f' : '1552664730-d307ca884978'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                        alt={service.title}
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Our Proven SEO Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From audit to domination - here's how we get Edmonton businesses to rank #1:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] rounded-xl p-6 border border-gray-700 h-full">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-maverick-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {step.icon}
                      </div>
                      <div className="text-maverick-orange font-bold text-lg">{step.step}</div>
                      <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start text-xs text-gray-400">
                          <div className="w-2 h-2 bg-maverick-orange rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-maverick-orange to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Edmonton Businesses Dominating Search Results
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-6 border border-gray-800 relative"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.client}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.client}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {testimonial.result}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Edmonton SEO Pricing That Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent, results-driven SEO packages designed for Edmonton businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-[#121212] to-[#1A1A1A] rounded-xl p-8 border ${
                    pkg.popular ? 'border-maverick-orange' : 'border-gray-700'
                  } relative ${pkg.popular ? 'scale-105' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-maverick-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-maverick-orange">
                      {pkg.price}<span className="text-lg text-gray-400">{pkg.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{pkg.bestFor}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-maverick-orange mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact-edmonton-seo">
                    <motion.div
                      className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 ${
                        pkg.popular 
                          ? 'bg-maverick-orange text-white hover:bg-maverick-orange/90'
                          : 'border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Edmonton SEO Questions Answered
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-6 border border-gray-700 hover:border-maverick-orange/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-maverick-orange">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-br from-maverick-orange/10 via-transparent to-blue-500/10">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Ready to Dominate Edmonton Search Results?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the Edmonton businesses that trust Mavericks Edge to get them found first on Google. 
                Proven strategies, transparent reporting, guaranteed results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/contact-edmonton-seo">
                  <motion.div
                    className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Your Free SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
                <a href="tel:+1-250-883-8849">
                  <motion.div
                    className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call: (250) 883-8849
                  </motion.div>
                </a>
              </div>
              
              <p className="text-sm text-gray-400">
                Free SEO audit • No long-term contracts • Results guaranteed
              </p>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </div>
  );
}
