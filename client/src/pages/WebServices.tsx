import { motion } from "framer-motion";
import { 
  Code, Monitor, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Gauge, 
  Bookmark, Users, Smartphone, Search, Target, Zap, Award, CheckCircle, ArrowRight,
  Star, MapPin, Clock, TrendingUp, Building, Heart, Lightbulb
} from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import { Link } from "wouter";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { webDevelopmentServiceSchema, generateBreadcrumbSchema } from "@/components/StructuredData";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

export default function WebServices() {
  // Track page view for analytics
  useEffect(() => {
    console.log("Web Services page viewed");
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://mavericksedge.ca/" },
    { name: "Services", url: "https://mavericksedge.ca/services-edmonton-alberta" },
    { name: "Web Design Edmonton", url: "https://mavericksedge.ca/web-design-services-edmonton" }
  ];

  const coreServices = [
    {
      icon: <LayoutIcon className="h-12 w-12 text-maverick-orange" />,
      title: "Custom Web Design Edmonton",
      description: "Stunning, responsive websites designed specifically for Edmonton businesses. We create unique digital experiences that reflect your brand and convert visitors into customers.",
      features: ["Mobile-First Design", "Brand Integration", "User Experience Focus", "Conversion Optimization"]
    },
    {
      icon: <Code className="h-12 w-12 text-maverick-orange" />,
      title: "Professional Web Development",
      description: "Custom web applications and dynamic websites built with modern technologies. From simple business sites to complex web applications for Edmonton companies.",
      features: ["React & Modern Frameworks", "Custom Functionality", "Database Integration", "API Development"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-maverick-orange" />,
      title: "E-commerce Solutions Edmonton",
      description: "Complete online store development for Edmonton retailers. Shopify, WooCommerce, and custom e-commerce platforms that drive sales and grow your business.",
      features: ["Shopify Development", "Payment Integration", "Inventory Management", "Mobile Commerce"]
    },
    {
      icon: <Search className="h-12 w-12 text-maverick-orange" />,
      title: "SEO Web Design Edmonton",
      description: "Websites built for search engine success. Our Edmonton SEO web design ensures your site ranks well on Google and attracts local customers.",
      features: ["Local SEO Optimization", "Technical SEO", "Content Strategy", "Google My Business Integration"]
    }
  ];

  const additionalServices = [
    {
      icon: <Database className="h-10 w-10 text-maverick-orange" />,
      title: "WordPress Development Edmonton",
      description: "Custom WordPress websites and themes for Edmonton businesses. Easy-to-manage content management systems that you can update yourself."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-maverick-orange" />,
      title: "Mobile-Responsive Design",
      description: "Websites that look perfect on all devices. Mobile-first design approach ensuring your Edmonton customers have a great experience on any screen size."
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "Website Redesign Services",
      description: "Transform your outdated website into a modern digital asset. Complete website makeovers for Edmonton businesses ready to upgrade their online presence."
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Website Security & Maintenance",
      description: "Comprehensive website security audits and ongoing maintenance. Keep your Edmonton business website secure, fast, and up-to-date."
    },
    {
      icon: <Gauge className="h-10 w-10 text-maverick-orange" />,
      title: "Website Speed Optimization",
      description: "Lightning-fast websites that improve user experience and SEO rankings. Performance optimization services for Edmonton businesses."
    },
    {
      icon: <Users className="h-10 w-10 text-maverick-orange" />,
      title: "Training & Support",
      description: "Comprehensive training for your team to manage your new website. Ongoing support to help your Edmonton business succeed online."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start with a comprehensive consultation to understand your Edmonton business goals, target audience, and competitive landscape. This foundation ensures we build a website that drives real results.",
      icon: <Target className="h-8 w-8 text-maverick-orange" />
    },
    {
      number: "02", 
      title: "Design & User Experience",
      description: "Our Edmonton web designers create stunning visual designs and intuitive user experiences. We focus on local market preferences and conversion optimization.",
      icon: <Lightbulb className="h-8 w-8 text-maverick-orange" />
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Expert developers bring your design to life with clean, efficient code. Rigorous testing ensures your website works flawlessly across all devices and browsers.",
      icon: <Code className="h-8 w-8 text-maverick-orange" />
    },
    {
      number: "04",
      title: "SEO & Local Optimization",
      description: "We optimize your website for Edmonton searches and implement local SEO strategies to help your business rank higher in Google search results.",
      icon: <Search className="h-8 w-8 text-maverick-orange" />
    },
    {
      number: "05",
      title: "Launch & Go-Live",
      description: "Careful deployment and launch of your new website. We handle all technical aspects to ensure a smooth transition with zero downtime.",
      icon: <Zap className="h-8 w-8 text-maverick-orange" />
    },
    {
      number: "06",
      title: "Growth & Optimization",
      description: "Ongoing support, analytics tracking, and continuous optimization to help your Edmonton business website achieve maximum performance and ROI.",
      icon: <TrendingUp className="h-8 w-8 text-maverick-orange" />
    }
  ];

  const edmontonFocusAreas = [
    {
      icon: <Building className="h-8 w-8 text-maverick-orange" />,
      title: "Local Edmonton Businesses",
      description: "Restaurants, retail stores, professional services, and small businesses throughout Edmonton and surrounding areas."
    },
    {
      icon: <Heart className="h-8 w-8 text-maverick-orange" />,
      title: "Healthcare & Wellness",
      description: "Medical practices, dental clinics, wellness centers, and healthcare providers serving Edmonton communities."
    },
    {
      icon: <Award className="h-8 w-8 text-maverick-orange" />,
      title: "Professional Services",
      description: "Law firms, accounting practices, consulting companies, and other professional service providers in Edmonton."
    },
    {
      icon: <Users className="h-8 w-8 text-maverick-orange" />,
      title: "Non-Profit Organizations",
      description: "Community organizations, charities, and non-profits making a difference in Edmonton and Alberta."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Edmonton Wellness Center",
      quote: "Mavericks Edge transformed our online presence. Our new website perfectly captures our brand and has increased our client bookings by 40%.",
      rating: 5
    },
    {
      name: "Mike Chen",
      business: "Local Edmonton Restaurant",
      quote: "The team understood our local market and created a website that truly represents our Edmonton restaurant. Online orders have tripled!",
      rating: 5
    },
    {
      name: "Jennifer Adams",
      business: "Edmonton Law Firm",
      quote: "Professional, responsive, and results-driven. Our new website has significantly improved our client acquisition in the Edmonton legal market.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How much does web design cost in Edmonton?",
      answer: "Web design costs in Edmonton vary based on your project's complexity and requirements. Our custom websites typically range from $2,500 for basic business sites to $15,000+ for complex e-commerce or web applications. We offer transparent pricing and work with businesses of all sizes to find solutions that fit your budget."
    },
    {
      question: "How long does it take to build a website in Edmonton?",
      answer: "Most Edmonton web design projects take 4-8 weeks from start to launch. Simple business websites can be completed in 3-4 weeks, while complex e-commerce sites or custom web applications may take 8-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide SEO services with web design?",
      answer: "Yes! All our Edmonton web design projects include basic SEO optimization. We build websites with proper technical SEO, local Edmonton optimization, and search engine best practices. We also offer comprehensive SEO services to help your business rank higher in Google searches."
    },
    {
      question: "Can you help with website maintenance after launch?",
      answer: "Absolutely! We provide ongoing website maintenance, security updates, content updates, and technical support for all our Edmonton clients. Our maintenance plans ensure your website stays secure, fast, and up-to-date."
    },
    {
      question: "Do you work with small businesses in Edmonton?",
      answer: "Yes, we specialize in helping small and medium-sized businesses in Edmonton establish a strong online presence. We understand local market needs and offer flexible solutions that work for businesses of all sizes."
    },
    {
      question: "What makes your Edmonton web design different?",
      answer: "We combine local Edmonton market knowledge with cutting-edge web technologies. Our focus on conversion optimization, local SEO, and user experience ensures your website not only looks great but drives real business results for your Edmonton company."
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Edmonton Web Design Company | Professional Website Development | Mavericks Edge"
        description="Leading Edmonton web design company specializing in custom websites, e-commerce, and SEO optimization. Professional web development services for local businesses, nonprofits, and entrepreneurs in Edmonton, Alberta."
        keywords="Edmonton web design, web design Edmonton, Edmonton website design, web development Edmonton, Edmonton web designer, website design Edmonton Alberta, responsive web design Edmonton, SEO web design Edmonton, e-commerce Edmonton, WordPress development Edmonton"
        canonicalUrl="https://mavericksedge.ca/web-design-services-edmonton"
        ogTitle="Edmonton Web Design Company | Professional Website Development | Mavericks Edge"
        ogDescription="Leading Edmonton web design company specializing in custom websites, e-commerce, and SEO optimization. Professional web development services for local businesses in Edmonton, Alberta."
        ogImage="https://mavericksedge.ca/logo.png"
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
        <div className="relative pt-44 md:pt-48 pb-20 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 to-transparent"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <MapPin className="h-5 w-5 text-maverick-orange" />
                  <span className="text-maverick-orange font-medium">Edmonton Web Design Company</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight"
                >
                  Professional Web Design in <span className="text-maverick-orange">Edmonton</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-[#CCCCCC] max-w-2xl mb-8 leading-relaxed"
                >
                  Transform your Edmonton business with a custom website that drives results. We specialize in responsive web design, e-commerce solutions, and SEO optimization for local businesses, nonprofits, and entrepreneurs.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <Link href="/contact-edmonton-web-design">
                    <div className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md group cursor-pointer">
                      Get Your Free Quote
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                  <Link href="#portfolio">
                    <div className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md cursor-pointer">
                      View Our Work
                    </div>
                  </Link>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-6 text-sm text-[#AAAAAA]"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>100% Custom Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>SEO Optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Mobile Responsive</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] p-2 rounded-xl border border-gray-800 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Edmonton Web Design Services" 
                    className="rounded-lg w-full h-auto" 
                  />
                  <div className="absolute -bottom-4 -right-4 bg-maverick-orange text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                    Edmonton Based
                  </div>
                </div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-maverick-orange rounded-full z-0 blur-[80px] opacity-30"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-maverick-orange rounded-full z-0 blur-[80px] opacity-30"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-5 md:px-10 bg-[#0F0F0F] border-y border-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Websites Created", icon: <Globe className="h-6 w-6" /> },
                { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
                { number: "5+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
                { number: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-3 text-maverick-orange">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.number}</div>
                  <div className="text-[#AAAAAA] text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Edmonton Web Design Services</h2>
              <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto leading-relaxed">
                Comprehensive web design and development solutions tailored for Edmonton businesses. From stunning designs to powerful functionality, we deliver websites that drive growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] rounded-2xl p-8 border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300 group"
                >
                  <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-xl inline-block mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-maverick-orange transition-colors duration-300">{service.title}</h3>
                  <p className="text-[#CCCCCC] mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-[#AAAAAA]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">{service.title}</h3>
                  <p className="text-[#AAAAAA] group-hover:text-[#CCCCCC] transition-colors duration-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Our Web Design Process</h2>
              <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
                A proven methodology that ensures your Edmonton business gets a website that delivers exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#1E1E1E] to-[#171717] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300 group h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl font-bold text-maverick-orange opacity-70">{step.number}</div>
                      <div className="p-2 bg-maverick-orange bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 font-heading">{step.title}</h3>
                    <p className="text-[#AAAAAA] group-hover:text-[#CCCCCC] transition-colors duration-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Edmonton Focus Areas */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Industries We Serve in Edmonton</h2>
              <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
                Specialized web design solutions for diverse Edmonton businesses and organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {edmontonFocusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300 group text-center"
                >
                  <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-xl inline-block mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-heading">{area.title}</h3>
                  <p className="text-[#AAAAAA] text-sm group-hover:text-[#CCCCCC] transition-colors duration-300">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">What Edmonton Clients Say</h2>
              <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
                Real feedback from Edmonton businesses we've helped grow online
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1E1E1E] to-[#171717] rounded-xl p-8 border border-gray-800"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#CCCCCC] mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-maverick-orange">{testimonial.business}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-r from-maverick-orange/10 to-maverick-orange/5">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Ready to Transform Your Edmonton Business Online?</h2>
              <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto mb-8">
                Get a custom web design quote tailored to your Edmonton business needs. Free consultation included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-edmonton-web-design">
                  <div className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md group cursor-pointer">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
                <a href="tel:+1-780-123-4567" className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md">
                  Call (250) 883-8849
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Edmonton Web Design FAQ</h2>
              <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
                Common questions about our web design services in Edmonton
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#121212] rounded-xl border border-gray-800 overflow-hidden"
                  >
                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-4 text-white">{faq.question}</h3>
                      <p className="text-[#CCCCCC] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Contact Section */}
        <ContactSection />
      </motion.div>
    </div>
  );
}