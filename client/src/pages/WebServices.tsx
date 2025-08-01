
import { motion } from "framer-motion";
import { Code, Monitor, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Gauge, Bookmark, Users, Smartphone, Search, Zap, Star, CheckCircle, ArrowRight, Play, MapPin, Clock, Award, TrendingUp } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { webDevelopmentServiceSchema, generateBreadcrumbSchema } from "@/components/StructuredData";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

export default function WebServices() {
  const [activeTab, setActiveTab] = useState('custom');

  // Track page view for analytics
  useEffect(() => {
    console.log("Web Services page viewed");
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://mavericksedge.ca/" },
    { name: "Services", url: "https://mavericksedge.ca/services-edmonton-alberta" },
    { name: "Web Development", url: "https://mavericksedge.ca/web-design-services-edmonton" }
  ];

  const coreServices = [
    {
      icon: <LayoutIcon className="h-10 w-10 text-maverick-orange" />,
      title: "Custom Website Design & Development",
      description: "Bespoke Edmonton web design solutions that capture your brand essence and drive conversions. From concept to launch, we create responsive, user-centric websites that perform.",
      features: ["Mobile-First Design", "Performance Optimized", "SEO Foundation", "Conversion Focused"],
      price: "Starting at $1,200"
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-maverick-orange" />,
      title: "E-commerce Development Edmonton",
      description: "Complete online store solutions built for Alberta businesses. Shopify, WooCommerce, and custom e-commerce platforms that maximize sales and customer satisfaction.",
      features: ["Secure Payment Processing", "Inventory Management", "Mobile Shopping Experience", "Local Delivery Integration"],
      price: "Starting at $2,500"
    },
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Web Application Development",
      description: "Powerful web applications that streamline your Edmonton business operations. Custom dashboards, booking systems, and business automation tools.",
      features: ["Custom Functionality", "Database Integration", "User Management", "API Integrations"],
      price: "Starting at $3,500"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-maverick-orange" />,
      title: "Mobile-Responsive Design",
      description: "Websites that work flawlessly on all devices. With 60%+ of Edmonton web traffic coming from mobile, we ensure your site looks perfect everywhere.",
      features: ["Touch-Friendly Interface", "Fast Mobile Loading", "Cross-Device Testing", "Progressive Web App Ready"],
      price: "Included in all packages"
    }
  ];

  const specializedServices = [
    {
      icon: <Database className="h-10 w-10 text-maverick-orange" />,
      title: "WordPress Development Edmonton",
      description: "Custom WordPress solutions for Alberta businesses. From simple blogs to complex business websites with advanced functionality.",
      technologies: ["WordPress", "WooCommerce", "Custom Themes", "Plugin Development"]
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "Shopify Store Development",
      description: "Complete Shopify solutions for Edmonton retailers. Custom themes, app integrations, and optimization for Canadian e-commerce.",
      technologies: ["Shopify", "Liquid", "App Integration", "Payment Gateways"]
    },
    {
      icon: <Search className="h-10 w-10 text-maverick-orange" />,
      title: "SEO-Optimized Web Design",
      description: "Websites built for Edmonton search visibility. Technical SEO, local optimization, and Google-friendly architecture from day one.",
      technologies: ["Technical SEO", "Local Schema", "Core Web Vitals", "Edmonton Keywords"]
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Secure Web Hosting & Maintenance",
      description: "Canadian hosting with Edmonton support. SSL certificates, regular backups, security monitoring, and 24/7 uptime protection.",
      technologies: ["Canadian Hosting", "SSL Security", "Daily Backups", "24/7 Monitoring"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Edmonton Business Discovery",
      description: "We start with an in-depth consultation to understand your Edmonton market position, target audience, and business objectives. Our local expertise helps identify opportunities specific to Alberta's business landscape.",
      duration: "1-2 weeks",
      deliverables: ["Market Analysis", "Competitor Research", "Technical Requirements", "Project Roadmap"]
    },
    {
      number: "02",
      title: "Strategic Design & Prototyping",
      description: "Our Edmonton design team creates wireframes and visual concepts that resonate with your local audience while maintaining modern design standards. We focus on user experience and conversion optimization.",
      duration: "2-3 weeks",
      deliverables: ["Wireframes", "Visual Designs", "Interactive Prototype", "Brand Integration"]
    },
    {
      number: "03",
      title: "Development & Programming",
      description: "Using cutting-edge technologies and best practices, we bring your design to life with clean, efficient code. All websites are built mobile-first and optimized for Canadian hosting environments.",
      duration: "3-6 weeks",
      deliverables: ["Responsive Website", "CMS Integration", "Performance Optimization", "Security Implementation"]
    },
    {
      number: "04",
      title: "Edmonton SEO & Local Optimization",
      description: "We implement comprehensive SEO strategies targeting Edmonton and Alberta keywords. Local business schema, Google My Business optimization, and technical SEO ensure maximum visibility.",
      duration: "1-2 weeks",
      deliverables: ["On-Page SEO", "Local Schema", "Google Analytics", "Search Console Setup"]
    },
    {
      number: "05",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across all devices and browsers ensures your website performs flawlessly. We test for speed, accessibility, and user experience before launch.",
      duration: "1 week",
      deliverables: ["Cross-Browser Testing", "Mobile Testing", "Performance Report", "Accessibility Audit"]
    },
    {
      number: "06",
      title: "Launch & Ongoing Support",
      description: "We handle the complete launch process and provide ongoing maintenance. Our Edmonton-based support team ensures your website stays secure, updated, and performing optimally.",
      duration: "Ongoing",
      deliverables: ["Website Launch", "Training Materials", "Maintenance Plan", "Support Access"]
    }
  ];

  const portfolioProjects = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Edmonton Restaurant Website",
      category: "Local Restaurant",
      description: "Mobile-responsive website with online ordering and local SEO optimization",
      results: "150% increase in online orders"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Alberta Home Services Portal",
      category: "Service Business",
      description: "Custom web application with booking system and customer management",
      results: "300% improvement in lead conversion"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Edmonton Nonprofit Website",
      category: "Nonprofit Organization",
      description: "Donation-focused website with volunteer management system",
      results: "200% increase in online donations"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Alberta E-commerce Store",
      category: "Retail Business",
      description: "Custom Shopify store with local delivery integration",
      results: "180% growth in online sales"
    }
  ];

  const testimonials = [
    {
      quote: "Mavericks Edge transformed our online presence. Their understanding of the Edmonton market helped us reach more local customers than ever before.",
      author: "Sarah Chen",
      company: "Edmonton Wellness Center",
      rating: 5
    },
    {
      quote: "The website they built for our Alberta-based business has been instrumental in our growth. Professional, fast, and perfectly optimized for search.",
      author: "Mike Rodriguez",
      company: "Northern Alberta Construction",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How much does web design cost in Edmonton?",
      answer: "Our Edmonton web design services start at $1,200 for basic business websites and range up to $10,000+ for complex e-commerce and custom applications. We provide transparent pricing and free consultations to discuss your specific needs and budget."
    },
    {
      question: "How long does it take to build a website in Edmonton?",
      answer: "Most Edmonton business websites take 4-8 weeks from start to finish. Simple brochure sites can be completed in 2-3 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We provide detailed timelines during our discovery phase."
    },
    {
      question: "Do you provide website hosting for Edmonton businesses?",
      answer: "Yes, we offer Canadian web hosting specifically optimized for Alberta businesses. Our hosting includes SSL certificates, daily backups, security monitoring, and 24/7 Edmonton-based support. Plans start at $25/month."
    },
    {
      question: "Can you help with SEO for my Edmonton business website?",
      answer: "Absolutely! All our websites include basic SEO optimization with Edmonton and Alberta keyword targeting. We also offer comprehensive SEO services including local optimization, Google My Business management, and ongoing search marketing."
    },
    {
      question: "Do you redesign existing websites for Edmonton businesses?",
      answer: "Yes, we specialize in website redesigns that improve user experience, search rankings, and conversion rates. We can work with your existing content and branding or create a completely fresh approach."
    },
    {
      question: "What makes your Edmonton web design different from competitors?",
      answer: "Our deep understanding of the Edmonton and Alberta business landscape, combined with cutting-edge design and development practices, sets us apart. We focus on local SEO, mobile optimization, and conversion-driven design that gets results."
    }
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mavericks Edge Web Design Edmonton",
    "image": "https://mavericksedge.ca/logo.png",
    "telephone": "+1-250-883-8849",
    "email": "info@mavericksedge.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6908 100 Ave NW, Suite B",
      "addressLocality": "Edmonton",
      "addressRegion": "Alberta",
      "postalCode": "T6A 0G2",
      "addressCountry": "Canada"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.5461,
      "longitude": -113.4938
    },
    "url": "https://mavericksedge.ca/web-design-services-edmonton",
    "sameAs": [
      "https://www.facebook.com/mavericksedge",
      "https://www.linkedin.com/company/mavericksedge"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$1200-$10000",
    "areaServed": [
      "Edmonton",
      "Calgary",
      "Red Deer",
      "Lethbridge",
      "Alberta"
    ]
  };

  return (
    <div>
      <SEOHead 
        title="Edmonton Web Design & Development Services | Custom Websites Alberta | Mavericks Edge"
        description="Professional web design and development services in Edmonton, Alberta. Custom websites, e-commerce solutions, WordPress development, and mobile-responsive design for local businesses. Free consultation!"
        keywords="Edmonton web design, web development Edmonton, custom website design Edmonton, responsive web design Alberta, e-commerce development Edmonton, WordPress development Edmonton, Shopify development Alberta, web design company Edmonton, mobile website design Edmonton, SEO web design Alberta"
        canonicalUrl="https://mavericksedge.ca/web-design-services-edmonton"
        ogTitle="Edmonton Web Design & Development Services | Custom Websites Alberta"
        ogDescription="Professional web design and development services in Edmonton, Alberta. Custom websites, e-commerce solutions, and mobile-responsive design for local businesses."
        ogImage="https://mavericksedge.ca/logo.png"
        ogType="website"
      />
      
      <StructuredData data={webDevelopmentServiceSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={localSchema} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Enhanced Hero Section */}
        <div className="pt-32 md:pt-40 pb-20 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 to-transparent"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-maverick-orange" />
                    <span className="text-maverick-orange font-medium">Edmonton, Alberta</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Web Design &
                    </span>
                    <br />
                    <span className="text-maverick-orange">Development</span>
                  </h1>
                  <p className="text-xl text-[#AAAAAA] max-w-2xl mb-8 leading-relaxed">
                    Edmonton's premier web design agency creating custom websites that drive results. 
                    From responsive design to e-commerce solutions, we build digital experiences that 
                    help Alberta businesses thrive online.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link href="/contact-edmonton-web-design">
                      <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg">
                        Get Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Link>
                    <Link href="/portfolio-edmonton-web-design">
                      <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg">
                        <Play className="mr-2 h-5 w-5" />
                        View Our Work
                      </a>
                    </Link>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-[#AAAAAA]">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>100+ Edmonton Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>5-Star Client Reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Local Support Team</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-2 rounded-2xl border border-gray-700 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Edmonton Web Design Services" 
                    className="rounded-xl w-full h-auto" 
                  />
                  <div className="absolute -bottom-4 -right-4 bg-maverick-orange text-white p-4 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-sm">Websites Built</div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-maverick-orange rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Edmonton Web Design Services
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
                Comprehensive web development solutions tailored for Alberta businesses. 
                From concept to launch, we deliver websites that drive results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#121212] rounded-2xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-maverick-orange opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-xl inline-block mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 font-heading">{service.title}</h3>
                    <p className="text-[#AAAAAA] mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-maverick-orange mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-maverick-orange font-semibold text-lg">{service.price}</span>
                      <Link href="/contact-edmonton-web-design">
                        <a className="text-maverick-orange hover:text-white transition-colors duration-300 font-medium">
                          Learn More →
                        </a>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/pricing-edmonton-web-design">
                <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg">
                  View All Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Specialized Web Development
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
                Advanced solutions for specific business needs and platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
                >
                  <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-heading">{service.title}</h3>
                  <p className="text-[#AAAAAA] text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-maverick-orange bg-opacity-20 text-maverick-orange px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Our Edmonton Web Development Process
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
                A proven methodology that delivers exceptional results for Alberta businesses. 
                From discovery to launch and beyond.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-maverick-orange bg-opacity-20 rounded-xl flex items-center justify-center border border-maverick-orange group-hover:bg-maverick-orange group-hover:text-black transition-all duration-300">
                        <span className="text-2xl font-bold text-maverick-orange group-hover:text-black transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                        <div className="flex items-center text-sm text-maverick-orange">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                      <p className="text-[#AAAAAA] mb-4 leading-relaxed">{step.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 h-full w-px bg-gradient-to-b from-maverick-orange to-transparent opacity-30 lg:block hidden"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Edmonton Web Design Portfolio
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
                Real results for real Edmonton businesses. See how we've helped local companies succeed online.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-gray-800 group-hover:border-maverick-orange transition-all duration-300">
                    <div className="aspect-video relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-maverick-orange text-black px-2 py-1 rounded text-xs font-medium">
                          {project.category}
                        </span>
                        <div className="flex items-center text-green-400 text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {project.results}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-[#AAAAAA] text-sm">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/portfolio-edmonton-web-design">
                <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg">
                  View Complete Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                What Edmonton Businesses Say
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
                Don't just take our word for it. Hear from local businesses we've helped succeed online.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#121212] rounded-2xl p-8 border border-gray-800"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-maverick-orange text-sm">{testimonial.company}</div>
                  </div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Edmonton Web Design FAQ
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
                Common questions about our web design and development services in Edmonton
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 border-b border-gray-800 pb-8 last:border-b-0"
                >
                  <h3 className="text-xl font-semibold mb-4 text-maverick-orange">{faq.question}</h3>
                  <p className="text-[#AAAAAA] leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-r from-maverick-orange to-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
                Ready to Transform Your Edmonton Business Online?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Join 150+ Edmonton businesses that trust Mavericks Edge for their web design needs. 
                Get your free consultation and custom quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact-edmonton-web-design">
                  <a className="bg-white text-maverick-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                    Start Your Project Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Link>
                <div className="flex items-center text-white/90">
                  <span className="mr-2">📞</span>
                  <a href="tel:+12508838849" className="font-medium hover:text-white transition-colors">
                    (250) 883-8849
                  </a>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24-48h</div>
                  <div className="text-white/80 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Free</div>
                  <div className="text-white/80 text-sm">Initial Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Local</div>
                  <div className="text-white/80 text-sm">Edmonton Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </div>
  );
}
