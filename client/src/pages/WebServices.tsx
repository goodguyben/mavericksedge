
import { motion } from "framer-motion";
import { Code, Monitor, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Gauge, Bookmark, Users, Smartphone, Search, Zap, Award, Star, MapPin, Clock, CheckCircle } from "lucide-react";
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
      description: "Professional web design services that create stunning, responsive websites tailored to your brand. Our custom websites drive conversions and establish credibility in the competitive local market.",
      features: ["Mobile-responsive design", "Custom UI/UX", "Brand integration", "Performance optimization"]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-maverick-orange" />,
      title: "E-commerce Development",
      description: "Complete e-commerce solutions for local businesses. From Shopify to WooCommerce, we build online stores that sell 24/7 and compete with major retailers.",
      features: ["Shopify & WooCommerce", "Payment integration", "Inventory management", "Local delivery setup"]
    },
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Custom Web Application Development",
      description: "Bespoke web applications for companies looking to streamline operations. We build scalable solutions that grow with your business.",
      features: ["Custom functionality", "Database integration", "User management", "API development"]
    },
    {
      icon: <Search className="h-10 w-10 text-maverick-orange" />,
      title: "SEO Web Design",
      description: "SEO-optimized websites built for local search visibility. We combine technical SEO with user experience to rank higher on Google and attract local customers.",
      features: ["Local SEO optimization", "Google My Business integration", "Schema markup", "Core Web Vitals"]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-maverick-orange" />,
      title: "Mobile-First Web Design",
      description: "Mobile-optimized websites that perform flawlessly on all devices. With mobile traffic dominating, ensure your customers have a perfect experience.",
      features: ["Responsive design", "Touch optimization", "Fast loading", "App-like experience"]
    },
    {
      icon: <Database className="h-10 w-10 text-maverick-orange" />,
      title: "CMS Development & Training",
      description: "Easy-to-manage content management systems with comprehensive training. Take control of your website content without technical knowledge.",
      features: ["WordPress expertise", "Custom CMS", "Content training", "Admin dashboards"]
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "Website Redesign Services",
      description: "Transform your outdated website into a modern, high-performing digital asset. Our redesigns increase conversions and improve user engagement.",
      features: ["Modern design trends", "Performance improvements", "SEO enhancement", "Conversion optimization"]
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Website Security & Maintenance",
      description: "Comprehensive security and maintenance services to keep your business website secure, updated, and performing optimally.",
      features: ["Security monitoring", "Regular updates", "Backup solutions", "Performance monitoring"]
    },
    {
      icon: <Gauge className="h-10 w-10 text-maverick-orange" />,
      title: "Website Speed Optimization",
      description: "Lightning-fast websites that improve user experience and search rankings. Speed optimization that reduces bounce rates and increases conversions.",
      features: ["Core Web Vitals", "Image optimization", "Code optimization", "CDN implementation"]
    },
    {
      icon: <Zap className="h-10 w-10 text-maverick-orange" />,
      title: "Landing Page Development",
      description: "High-converting landing pages for marketing campaigns. Designed to capture leads and drive specific business objectives.",
      features: ["Conversion-focused design", "A/B testing ready", "Lead capture forms", "Analytics integration"]
    }
  ];

  const edmontonBenefits = [
    {
      icon: <MapPin className="h-8 w-8 text-maverick-orange" />,
      title: "Local Market Expertise",
      description: "We understand the local market, business needs, and what drives success in Alberta's capital city."
    },
    {
      icon: <Clock className="h-8 w-8 text-maverick-orange" />,
      title: "Fast Turnaround Times",
      description: "Quick project delivery without compromising quality. Most websites completed within 4-8 weeks."
    },
    {
      icon: <Award className="h-8 w-8 text-maverick-orange" />,
      title: "Proven Track Record",
      description: "Successfully helped 100+ local businesses establish their online presence and grow their revenue."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-maverick-orange" />,
      title: "Ongoing Support",
      description: "Comprehensive post-launch support including updates, maintenance, and digital marketing guidance."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Market Discovery",
      description: "We analyze your target market, competitors, and industry landscape to create a strategic web design plan.",
      timeline: "Week 1"
    },
    {
      number: "02",
      title: "Custom Design & Prototyping",
      description: "Our design team creates wireframes and visual designs that resonate with your local audience.",
      timeline: "Week 2-3"
    },
    {
      number: "03",
      title: "Development & SEO Integration",
      description: "Expert development with built-in SEO optimization to ensure local search visibility from day one.",
      timeline: "Week 4-6"
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across devices and browsers to ensure flawless performance for users.",
      timeline: "Week 7"
    },
    {
      number: "05",
      title: "Launch & Local Optimization",
      description: "Strategic launch with Google My Business integration and local directory submissions for maximum local visibility.",
      timeline: "Week 8"
    },
    {
      number: "06",
      title: "Growth & Maintenance",
      description: "Ongoing optimization, security updates, and digital marketing support to grow your business online.",
      timeline: "Ongoing"
    }
  ];

  const portfolioProjects = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Local Restaurant Website",
      category: "Hospitality",
      description: "Custom restaurant website with online ordering and reservation system",
      results: "40% increase in online orders"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Nonprofit Platform",
      category: "Community Services",
      description: "Comprehensive nonprofit website with donation system and volunteer portal",
      results: "300% increase in online donations"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Law Firm Website",
      category: "Professional Services",
      description: "Professional legal website with client portal and case management",
      results: "150% increase in qualified leads"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "E-commerce Store",
      category: "Retail",
      description: "Full-featured online store with local delivery integration",
      results: "200% increase in online sales"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Medical Practice Website",
      category: "Healthcare",
      description: "HIPAA-compliant medical website with patient portal",
      results: "80% reduction in admin calls"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Construction Company Website",
      category: "Construction",
      description: "Project showcase website with client testimonials and quote system",
      results: "120% increase in project inquiries"
    }
  ];

  const faqs = [
    {
      question: "How much does web design cost in Edmonton?",
      answer: "Our web design services start at $2,500 for basic business websites and go up to $15,000+ for complex e-commerce or custom applications. We offer transparent pricing and work with budgets of all sizes. Every project includes mobile optimization, basic SEO, and one year of support."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Most business websites are completed within 4-8 weeks. Simple brochure sites can be done in 3-4 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide SEO services with web design?",
      answer: "Yes! All our web design projects include fundamental SEO optimization: local keyword research, Google My Business integration, schema markup, and technical SEO. We also offer comprehensive SEO services for businesses looking to dominate local search results."
    },
    {
      question: "Can you redesign my existing business website?",
      answer: "Absolutely! We specialize in website redesigns for local businesses. Our redesign process improves user experience, search rankings, and conversion rates while maintaining your existing SEO value. We've helped dozens of companies modernize their online presence."
    },
    {
      question: "Do you work with small businesses and startups?",
      answer: "Yes, we're passionate about helping small businesses and startups succeed online. We offer flexible payment plans, startup-friendly pricing, and scalable solutions that grow with your business. Many of our clients started as small local businesses and have grown significantly with our support."
    },
    {
      question: "What makes your web design different from competitors?",
      answer: "Our deep understanding of the local market sets us apart. We know local consumer behavior, seasonal trends, and what works for Alberta businesses. Plus, we provide ongoing support, not just a one-time build. Our clients see measurable results: increased traffic, leads, and revenue."
    },
    {
      question: "Do you provide website hosting and maintenance?",
      answer: "Yes, we offer comprehensive hosting and maintenance packages specifically designed for local businesses. Our services include security monitoring, regular updates, backups, performance optimization, and local support. We keep your website running smoothly so you can focus on your business."
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Edmonton Web Design & Development | #1 Web Design Company Alberta | Mavericks Edge"
        description="Premier Edmonton web design and development services. Custom websites, e-commerce, and web applications for Alberta businesses. 100+ successful projects. Get your free consultation today!"
        keywords="Edmonton web design, web development Edmonton, website design Edmonton Alberta, custom websites Edmonton, e-commerce development Edmonton, responsive web design Alberta, SEO web design Edmonton, Edmonton website company, professional web design Edmonton, small business web design Edmonton"
        canonicalUrl="https://mavericksedge.ca/web-design-services-edmonton"
        ogTitle="Edmonton Web Design & Development | #1 Web Design Company Alberta | Mavericks Edge"
        ogDescription="Premier Edmonton web design and development services. Custom websites, e-commerce, and web applications for Alberta businesses. 100+ successful projects."
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
      <div className="pt-44 md:pt-48 pb-20 px-5 md:px-10 bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/5 to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-maverick-orange" />
                <span className="text-maverick-orange font-semibold">Edmonton Web Design Experts</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
                #1 Edmonton Web Design & Development
              </h1>
              <p className="text-xl text-[#AAAAAA] mb-8 leading-relaxed">
                Professional web design and development services for local businesses. We've helped 100+ Alberta companies grow their online presence with custom websites that convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact-edmonton-web-design">
                  <motion.div
                    className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Consultation
                  </motion.div>
                </Link>
                <Link href="/portfolio-edmonton-web-design">
                  <motion.div
                    className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Our Work
                  </motion.div>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-[#AAAAAA]">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span>5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>100+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span>4-8 Week Delivery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#1A1A1A] p-1 rounded-xl border border-gray-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Edmonton Web Development Services" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-maverick-orange rounded-full z-0 blur-[80px] opacity-40"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full z-0 blur-[60px] opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Edmonton Benefits Section */}
      <section className="py-20 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Why Choose Edmonton's Premier Web Design Agency?</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              We're not just another web design company. We're Edmonton business growth partners who understand the local market and deliver results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edmontonBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-xl inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-[#AAAAAA]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Complete Edmonton Web Design Services</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              From simple business websites to complex e-commerce platforms, we provide comprehensive web solutions for every Edmonton business need.
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
                className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group h-full flex flex-col"
              >
                <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">{service.title}</h3>
                <p className="text-[#AAAAAA] group-hover:text-[#DDDDDD] transition-all duration-300 mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#CCCCCC]">
                      <CheckCircle className="h-4 w-4 text-maverick-orange mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/web-design-pricing-edmonton">
              <motion.div
                className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing & Packages
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Proven Edmonton Web Design Process</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              A systematic approach refined through 100+ successful Edmonton web projects. Transparent, efficient, and results-driven.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-maverick-orange opacity-70">{step.number}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                      <span className="text-sm text-maverick-orange bg-maverick-orange bg-opacity-10 px-3 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-[#AAAAAA]">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-4 top-16 h-full w-px bg-gradient-to-b from-maverick-orange to-transparent opacity-30 md:block hidden"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact-edmonton-web-design">
              <motion.div
                className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project Today
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Successful Edmonton Web Projects</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Real results for real Edmonton businesses. See how our web design and development services have transformed local companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#1E1E1E] border border-gray-800 group-hover:border-maverick-orange transition-all duration-300">
                  <div className="aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <span className="text-maverick-orange text-sm mb-1">{project.category}</span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-[#CCCCCC] mb-2">{project.description}</p>
                    <div className="text-sm font-semibold text-green-400">{project.results}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio-edmonton-web-design">
              <motion.div
                className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Complete Portfolio
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 md:px-10 bg-gradient-to-r from-maverick-orange/10 to-maverick-orange/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Ready to Dominate the Digital Landscape?</h2>
            <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto mb-8">
              Join 100+ successful local businesses who've transformed their online presence with our web design expertise. Get your free consultation and project quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-edmonton-web-design">
                <motion.div
                  className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                </motion.div>
              </Link>
              <Link href="tel:+1-780-123-4567">
                <motion.div
                  className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call (780) 123-4567
                </motion.div>
              </Link>
            </div>
            <p className="text-sm text-[#AAAAAA] mt-4">
              Free consultation • No obligation • Fast response within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Edmonton Web Design FAQs</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Common questions about our Edmonton web design and development services, pricing, and process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 border border-gray-800 rounded-xl p-6 hover:border-maverick-orange transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-maverick-orange">{faq.question}</h3>
                <p className="text-[#AAAAAA] leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact-edmonton-web-design">
              <motion.div
                className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ask Your Question
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      </motion.div>
    </div>
  );
}
