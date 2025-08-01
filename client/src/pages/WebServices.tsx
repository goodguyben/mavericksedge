
import { motion } from "framer-motion";
import { Code, Monitor, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Gauge, Bookmark, Users, Search, Smartphone, Zap, Award, CheckCircle, ArrowRight, Star, Clock, DollarSign, Target } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
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
    { name: "Web Development", url: "https://mavericksedge.ca/web-design-services-edmonton" }
  ];

  const services = [
    {
      icon: <LayoutIcon className="h-10 w-10 text-maverick-orange" />,
      title: "Custom Website Design & Development",
      description: "Professional Edmonton web design services that create stunning, responsive websites tailored to your brand. Our custom web development ensures your site stands out in Alberta's competitive digital landscape.",
      features: ["Responsive mobile-first design", "Custom WordPress development", "Brand-focused UI/UX design", "Local Edmonton market optimization"]
    },
    {
      icon: <Database className="h-10 w-10 text-maverick-orange" />,
      title: "Content Management Systems (CMS)",
      description: "Easy-to-use CMS solutions including WordPress, Shopify, and custom platforms. Perfect for Edmonton businesses who want to manage their content independently while maintaining professional quality.",
      features: ["WordPress expertise", "Custom CMS development", "User-friendly admin panels", "Training and documentation"]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-maverick-orange" />,
      title: "E-commerce Development Edmonton",
      description: "Complete online store solutions built on Shopify, WooCommerce, and custom platforms. We help Edmonton retailers succeed online with conversion-optimized e-commerce websites.",
      features: ["Shopify Plus development", "WooCommerce customization", "Payment gateway integration", "Inventory management systems"]
    },
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Custom Web Application Development",
      description: "Bespoke web applications using React, Node.js, and modern frameworks. Our Edmonton development team creates scalable solutions that grow with your business needs.",
      features: ["React/Vue.js applications", "Node.js backend development", "API integrations", "Database design"]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-maverick-orange" />,
      title: "Mobile-Responsive Design",
      description: "Mobile-first web design ensuring perfect performance across all devices. Essential for Edmonton businesses targeting local mobile users and improving Google rankings.",
      features: ["Mobile-first approach", "Touch-friendly interfaces", "Fast loading speeds", "Cross-browser compatibility"]
    },
    {
      icon: <Search className="h-10 w-10 text-maverick-orange" />,
      title: "Edmonton SEO & Local Search Optimization",
      description: "Technical SEO implementation and local search optimization to help your Edmonton business rank higher in Google searches and attract more local customers.",
      features: ["Local SEO optimization", "Google My Business setup", "Schema markup implementation", "Core Web Vitals optimization"]
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "Third-Party API Integrations",
      description: "Seamless integration with payment processors, CRMs, marketing tools, and business systems. We connect your website to the tools your Edmonton business already uses.",
      features: ["Payment gateway integration", "CRM connections", "Marketing automation", "Social media APIs"]
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Website Security & SSL Implementation",
      description: "Comprehensive website security audits, SSL certificates, and protective measures to safeguard your Edmonton business from cyber threats and build customer trust.",
      features: ["SSL certificate setup", "Security audits", "Malware protection", "Regular security updates"]
    },
    {
      icon: <Gauge className="h-10 w-10 text-maverick-orange" />,
      title: "Performance Optimization",
      description: "Speed optimization services that enhance loading times, improve user experience, and boost SEO rankings. Critical for Edmonton businesses competing in local search results.",
      features: ["PageSpeed optimization", "Image compression", "CDN implementation", "Caching strategies"]
    },
    {
      icon: <Bookmark className="h-10 w-10 text-maverick-orange" />,
      title: "Website Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your Edmonton business website running smoothly and securely 24/7.",
      features: ["Regular backups", "Security monitoring", "Content updates", "Technical support"]
    },
    {
      icon: <Users className="h-10 w-10 text-maverick-orange" />,
      title: "Website Training & Documentation",
      description: "Comprehensive training sessions and detailed documentation to empower your Edmonton team to manage and update your website effectively.",
      features: ["CMS training sessions", "Video tutorials", "Written documentation", "Ongoing support"]
    },
    {
      icon: <Monitor className="h-10 w-10 text-maverick-orange" />,
      title: "Website Redesign Services",
      description: "Transform outdated websites into modern, conversion-optimized platforms. Perfect for established Edmonton businesses looking to refresh their online presence.",
      features: ["Modern design trends", "UX/UI improvements", "Conversion optimization", "Brand alignment"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-maverick-orange" />,
      title: "Edmonton Web Design Experts",
      description: "Local Edmonton team with deep understanding of Alberta market needs and consumer behavior."
    },
    {
      icon: <Clock className="h-8 w-8 text-maverick-orange" />,
      title: "Fast Turnaround Times",
      description: "Most websites delivered within 2-6 weeks, getting your Edmonton business online quickly."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-maverick-orange" />,
      title: "Transparent Pricing",
      description: "No hidden fees. Clear, upfront pricing starting at $850 for professional Edmonton websites."
    },
    {
      icon: <Target className="h-8 w-8 text-maverick-orange" />,
      title: "Results-Driven Design",
      description: "Conversion-focused designs that turn Edmonton website visitors into paying customers."
    }
  ];

  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Edmonton E-commerce Platform",
      category: "Retail & E-commerce",
      description: "Custom Shopify store with 300% increase in online sales"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Alberta Nonprofit Website",
      category: "Community & Nonprofit",
      description: "WordPress site increasing donations by 150%"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Edmonton Professional Services",
      category: "Legal & Professional",
      description: "Custom web application streamlining client management"
    },
    {
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Local Edmonton Restaurant",
      category: "Food & Hospitality",
      description: "Mobile-optimized site with online ordering system"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Alberta Healthcare Provider",
      category: "Healthcare & Medical",
      description: "HIPAA-compliant patient portal and booking system"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Edmonton Manufacturing",
      category: "Industrial & Manufacturing",
      description: "B2B portal with inventory management integration"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Edmonton Boutique Owner",
      text: "Mavericks Edge transformed our online presence. Our website traffic increased 400% and online sales are up 250% since launching our new Edmonton e-commerce site.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Alberta Construction LLC",
      text: "The team delivered exactly what we needed. Our new website generates 3x more leads and perfectly represents our Edmonton construction business.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Edmonton Nonprofit Director",
      text: "Professional, affordable, and incredibly responsive. They understood our mission and created a website that truly connects with our Edmonton community.",
      rating: 5
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Edmonton Web Design & Development Company | Custom Websites | Mavericks Edge"
        description="Leading Edmonton web design and development company. Custom websites, e-commerce, WordPress, Shopify development. Serving Alberta businesses since 2020. Free consultation!"
        keywords="Edmonton web design, web development Edmonton, custom websites Edmonton, Edmonton web design company, Shopify development Edmonton, WordPress development Edmonton, responsive web design Alberta, e-commerce development Edmonton, local web design Edmonton, professional website design Edmonton"
        canonicalUrl="https://mavericksedge.ca/web-design-services-edmonton"
        ogTitle="Edmonton Web Design & Development Company | Custom Websites | Mavericks Edge"
        ogDescription="Leading Edmonton web design and development company. Custom websites, e-commerce, WordPress, Shopify development. Serving Alberta businesses since 2020."
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
      {/* Enhanced Hero Section */}
      <div className="pt-44 md:pt-48 pb-20 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-maverick-orange/10 border border-maverick-orange/20 rounded-full px-4 py-2 mb-6">
                  <Award className="h-4 w-4 text-maverick-orange mr-2" />
                  <span className="text-sm text-maverick-orange font-medium">Edmonton's Premier Web Design Agency</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                  Edmonton Web Design & Development
                  <span className="text-maverick-orange block">Experts</span>
                </h1>
                <p className="text-xl text-[#AAAAAA] max-w-3xl mb-8 leading-relaxed">
                  Transform your Edmonton business with custom websites that drive results. From stunning design to powerful functionality, we create digital experiences that convert visitors into customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact-edmonton-web-design">
                    <motion.a 
                      className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md md:text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.a>
                  </Link>
                  <Link href="/portfolio-edmonton-web-design">
                    <motion.a 
                      className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md md:text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Our Work
                    </motion.a>
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-maverick-orange">50+</div>
                    <div className="text-sm text-[#AAAAAA]">Edmonton Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-maverick-orange">2-6</div>
                    <div className="text-sm text-[#AAAAAA]">Week Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-maverick-orange">24/7</div>
                    <div className="text-sm text-[#AAAAAA]">Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#1A1A1A] p-2 rounded-xl border border-gray-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Edmonton Web Development Services" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-maverick-orange rounded-full z-0 blur-[80px] opacity-60"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-maverick-orange rounded-full z-0 blur-[80px] opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Why Edmonton Businesses Choose Mavericks Edge</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Local expertise, proven results, and dedication to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="p-6 bg-maverick-orange bg-opacity-10 rounded-xl inline-block mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#AAAAAA]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Complete Edmonton Web Development Services</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              From custom design to ongoing maintenance, we provide everything your Edmonton business needs online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1E1E1E] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300 group h-full flex flex-col"
              >
                <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading flex-grow-0">{service.title}</h3>
                <p className="text-[#AAAAAA] mb-6 flex-grow">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-maverick-orange mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/pricing-edmonton-web-design">
              <motion.a 
                className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing & Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Proven Edmonton Web Development Process</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              A systematic approach refined through 50+ successful Edmonton projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                number: "01",
                title: "Discovery & Strategy Session",
                description: "We dive deep into your Edmonton business goals, target audience, and competitive landscape. This includes market research specific to Alberta consumers and local SEO opportunities.",
                deliverable: "Comprehensive project roadmap & strategy document"
              },
              {
                number: "02",
                title: "Custom Design & Prototyping",
                description: "Our Edmonton designers create wireframes and visual designs that reflect your brand and appeal to your local market. We focus on conversion optimization and user experience.",
                deliverable: "Interactive prototypes & design mockups"
              },
              {
                number: "03",
                title: "Development & Integration",
                description: "Our development team builds your website using modern technologies, ensuring fast loading speeds, mobile responsiveness, and seamless third-party integrations.",
                deliverable: "Fully functional website with all features"
              },
              {
                number: "04",
                title: "Edmonton SEO Optimization",
                description: "We implement technical SEO, local search optimization for Edmonton, and ensure your website meets Google's Core Web Vitals standards for better rankings.",
                deliverable: "SEO-optimized website ready for search engines"
              },
              {
                number: "05",
                title: "Testing & Quality Assurance",
                description: "Rigorous testing across devices, browsers, and user scenarios ensures your website performs flawlessly for all Edmonton visitors before launch.",
                deliverable: "Complete testing report & bug-free website"
              },
              {
                number: "06",
                title: "Launch & Ongoing Support",
                description: "We handle the technical launch and provide ongoing maintenance, security updates, and support to keep your Edmonton business website running smoothly.",
                deliverable: "Live website with maintenance plan"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-maverick-orange opacity-70 flex-shrink-0">{step.number}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-[#AAAAAA] mb-4">{step.description}</p>
                    <div className="inline-flex items-center bg-maverick-orange/10 rounded-full px-3 py-1">
                      <CheckCircle className="h-4 w-4 text-maverick-orange mr-2" />
                      <span className="text-sm text-maverick-orange font-medium">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Recent Edmonton Web Projects</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              See how we've helped Edmonton businesses succeed online with custom websites that drive real results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#1E1E1E] border border-gray-800 group-hover:border-maverick-orange/50 transition-all duration-300">
                  <div className="aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    <p className="text-maverick-orange mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                    <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio-edmonton-web-design">
              <motion.a 
                className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Complete Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">What Edmonton Clients Say</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Real results from real Edmonton businesses
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
                className="bg-[#121212] rounded-xl p-8 border border-gray-800"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-maverick-orange fill-current" />
                  ))}
                </div>
                <p className="text-[#AAAAAA] mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-maverick-orange">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Edmonton Web Design FAQ</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Common questions about our Edmonton web development services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "How much does web design cost in Edmonton?",
                answer: "Our Edmonton web design services start at $850 for basic websites and range up to $5,000+ for complex e-commerce and custom applications. Pricing depends on features, complexity, and timeline. We offer transparent pricing with no hidden fees and provide detailed quotes after understanding your specific needs."
              },
              {
                question: "How long does it take to build a website in Edmonton?",
                answer: "Most Edmonton websites are completed within 2-6 weeks. Simple informational sites typically take 2-3 weeks, while complex e-commerce platforms or custom applications may take 4-8 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
              },
              {
                question: "Do you provide SEO services for Edmonton businesses?",
                answer: "Yes! We include basic SEO optimization in all our websites, including local Edmonton SEO setup. This includes Google My Business optimization, local schema markup, and Edmonton-specific keyword optimization. We also offer advanced SEO packages for businesses wanting to dominate local search results."
              },
              {
                question: "Can you help with e-commerce websites in Edmonton?",
                answer: "Absolutely! We specialize in e-commerce development using platforms like Shopify, WooCommerce, and custom solutions. Our Edmonton e-commerce websites include payment processing, inventory management, shipping integration, and mobile optimization to maximize your online sales."
              },
              {
                question: "Do you provide ongoing website maintenance?",
                answer: "Yes, we offer comprehensive maintenance packages including regular backups, security updates, content changes, and technical support. Our Edmonton clients receive priority support and can choose from various maintenance plans based on their needs."
              },
              {
                question: "Will my website work on mobile devices?",
                answer: "All our websites are built mobile-first and fully responsive. With over 60% of Edmonton web traffic coming from mobile devices, we ensure your site looks and functions perfectly on smartphones, tablets, and desktops."
              },
              {
                question: "Do you work with businesses outside Edmonton?",
                answer: "While we're based in Edmonton and specialize in serving Alberta businesses, we work with clients across Canada and internationally. Our remote collaboration tools allow us to deliver the same high-quality service regardless of location."
              },
              {
                question: "What makes Mavericks Edge different from other Edmonton web designers?",
                answer: "Our combination of local Edmonton market knowledge, technical expertise, and focus on results sets us apart. We understand Alberta business culture, provide transparent pricing, deliver fast turnarounds, and focus on websites that actually generate leads and sales for our clients."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 bg-[#1E1E1E] rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3 text-maverick-orange">{faq.question}</h3>
                <p className="text-[#AAAAAA] leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-5 md:px-10 bg-gradient-to-r from-maverick-orange/10 to-maverick-orange/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Transform Your Edmonton Business Online?
            </h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto mb-8">
              Join 50+ successful Edmonton businesses who've increased their online presence with our web design services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-edmonton-web-design">
                <motion.a 
                  className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md md:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </Link>
              <Link href="/pricing-edmonton-web-design">
                <motion.a 
                  className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md md:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing
                </motion.a>
              </Link>
            </div>
            <p className="text-sm text-[#AAAAAA] mt-4">
              Free consultation • No obligation • 2-6 week delivery
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      </motion.div>
    </div>
  );
}
