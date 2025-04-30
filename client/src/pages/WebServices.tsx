import { motion } from "framer-motion";
import { 
  Code, Monitor, Database, Layout, ShoppingCart, Globe, Shield, 
  Gauge, Bookmark, Users, BarChart, Zap, Accessibility, Search, 
  RefreshCw, Headphones, Star, Server, Award
} from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";

export default function WebServices() {
  // Enhanced services with stronger benefit-driven descriptions
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-maverick-orange" />,
      title: "Strategic Website Design & Development",
      description: "Built-to-convert websites engineered for your specific audience and business goals. Our responsive, user-focused designs transform visitors into customers while strengthening your brand identity."
    },
    {
      icon: <Database className="h-10 w-10 text-maverick-orange" />,
      title: "Future-Proof CMS Solutions",
      description: "Gain complete control of your online presence with intuitive content management systems that empower your team to make updates without technical knowledge—saving time and reducing ongoing maintenance costs."
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-maverick-orange" />,
      title: "Revenue-Generating E-commerce",
      description: "Turn your products into profit with custom e-commerce solutions that deliver exceptional shopping experiences. We build stores that boost conversions, simplify inventory management, and scale with your business."
    },
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Efficiency-Boosting Web Applications",
      description: "Streamline operations and enhance productivity with custom web applications that automate repetitive tasks, improve workflow efficiency, and provide valuable business insights through tailored functionality."
    },
    {
      icon: <Monitor className="h-10 w-10 text-maverick-orange" />,
      title: "Conversion-Focused UX/UI Design",
      description: "Create seamless digital experiences that turn visitors into loyal customers. Our user-centric design approach reduces friction, enhances engagement, and boosts your bottom line through strategic conversion optimization."
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "Powerful Third-Party Integrations",
      description: "Multiply your website's capabilities without custom development costs. We seamlessly connect your site with the tools you already use—from CRM and payment gateways to marketing automation and analytics platforms."
    },
    {
      icon: <Gauge className="h-10 w-10 text-maverick-orange" />,
      title: "Speed & Performance Optimization",
      description: "Transform your website into a high-performance engine that loads instantly, ranks higher, and retains visitors. Our optimization techniques reduce bounce rates and boost conversions through lightning-fast experiences."
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Comprehensive Security Protection",
      description: "Protect your business reputation and customer data with enterprise-level security. Our proactive approach prevents breaches, detects vulnerabilities, and ensures compliance with data protection regulations."
    },
    {
      icon: <Accessibility className="h-10 w-10 text-maverick-orange" />,
      title: "Accessibility Compliance & Enhancement",
      description: "Expand your audience reach and meet legal requirements with WCAG-compliant websites. Our accessibility implementation helps you serve all users equally while avoiding potential legal complications."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-maverick-orange" />,
      title: "Ongoing Care & Maintenance",
      description: "Ensure your website remains a valuable business asset with our comprehensive care plans. We handle updates, security monitoring, performance optimization, and content updates so you can focus on your core business."
    }
  ];
  
  // Web services packages based on the business plan
  const webPackages = [
    {
      id: "edge-start",
      title: "EdgeStart Package",
      price: "$850",
      subtitle: "Fast-launch foundation for startups & small nonprofits",
      description: "Get online quickly with a professional, conversion-focused website that establishes your digital presence while staying within budget constraints.",
      idealFor: "Startups, solopreneurs, small nonprofits, and local businesses needing a professional online presence fast",
      features: [
        "Up to 6 core pages with modern design",
        "Mobile-responsive layout that works on all devices",
        "Professional contact form with validation",
        "Complete On-Page SEO & Schema Markup implementation",
        "Google Analytics 4 and Business Profile setup",
        "Security essentials including SSL/TSL certification",
        "Basic accessibility compliance (WCAG 2.1 Level AA)",
        "Performance optimization for fast loading"
      ]
    },
    {
      id: "edge-grow",
      title: "EdgeGrow Package",
      price: "$1,850",
      subtitle: "Comprehensive digital platform for established organizations",
      description: "Scale your online presence with a feature-rich, high-performance website designed to handle increased traffic, complex functionality, and strategic growth objectives.",
      idealFor: "Growing SMBs, professional service providers, established nonprofits, and organizations requiring more advanced digital capabilities",
      features: [
        "Up to 20 custom-designed pages with advanced layout options",
        "Sophisticated multi-step forms with calendar and file uploads",
        "Mobile-first responsive design with modern UI/UX principles",
        "Full On-Page SEO implementation with structured content",
        "Advanced Schema Markup for rich search results",
        "WCAG 2.2 Level AA accessibility enhancements",
        "Core Web Vitals performance optimization",
        "Enhanced security suite with DDoS Protection",
        "Custom branding and visual design system"
      ]
    },
    {
      id: "edge-lead",
      title: "EdgeLead Package",
      price: "$3,750+",
      subtitle: "Advanced web solutions for growing organizations",
      description: "Transform your digital operations with a custom web application or e-commerce platform built to your exact specifications, offering advanced functionality and scalability.",
      idealFor: "Funded startups, growing e-commerce brands, membership organizations, educational platforms, and businesses requiring complex functionality",
      features: [
        "Full-featured web application or e-commerce platform",
        "User authentication and dashboard functionality",
        "Headless CMS integration for content flexibility",
        "Payment gateway setup and configuration",
        "Custom API integration with your existing systems",
        "Comprehensive SEO and performance optimization",
        "Full accessibility compliance (WCAG 2.2 AA+)",
        "Advanced security protocols and implementation",
        "Custom application architecture and development"
      ]
    }
  ];
  
  // Website care plans
  const carePlans = [
    {
      id: "edge-care",
      title: "EdgeCare Plan",
      price: "$75",
      period: "/month",
      tagline: "Essential protection & maintenance",
      description: "Peace of mind with fundamental security and maintenance coverage that keeps your website secure, up-to-date, and functioning smoothly.",
      features: [
        "Core software updates and security patches",
        "1 hour of content updates per month",
        "Proactive security monitoring",
        "Daily cloud backups with retention",
        "Basic performance monitoring",
        "24/7 uptime monitoring",
        "Regular database optimization",
        "Email support (48-hour response)"
      ]
    },
    {
      id: "edge-advance",
      title: "EdgeAdvance Plan",
      price: "$175",
      period: "/month",
      tagline: "Growth-focused website management",
      description: "Strategic website management that not only maintains your site but actively improves it with ongoing SEO, content updates, and technical enhancements.",
      features: [
        "All EdgeCare Plan features",
        "3 hours of dedicated monthly support",
        "Ongoing technical SEO optimization",
        "Core Web Vitals monitoring and tuning",
        "Monthly SEO content creation",
        "CRM/email automation maintenance",
        "Priority support (24-hour response)",
        "Quarterly strategy and performance review"
      ]
    },
    {
      id: "edge-pro",
      title: "EdgePro Plan",
      price: "$400+",
      period: "/month",
      tagline: "Comprehensive digital evolution",
      description: "Proactive digital asset management with dedicated development time for continuous improvement, new features, and strategic digital evolution.",
      features: [
        "All EdgeAdvance Plan features",
        "Up to 10 hours of development/design monthly",
        "New feature development and UX enhancements",
        "Proactive performance optimization",
        "Staging environment for testing updates",
        "Monthly strategy and development planning",
        "Quarterly competitor & SERP audit",
        "VIP support and development priority"
      ]
    }
  ];
  
  // FAQ items for web services
  const faqItems = [
    {
      question: "How long does it take to build a website with Mavericks Edge?",
      answer: "Our timeline varies based on project complexity. The EdgeStart package typically takes 2-3 weeks, EdgeGrow 4-6 weeks, and EdgeLead 8-12 weeks. During our initial consultation, we'll provide a detailed timeline specific to your project scope and requirements."
    },
    {
      question: "Will my website work on mobile devices and tablets?",
      answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function flawlessly across all devices—smartphones, tablets, and desktops. We extensively test on multiple device types and screen sizes before launch."
    },
    {
      question: "Do you provide website hosting or do I need to arrange that separately?",
      answer: "We offer comprehensive hosting solutions as part of our website care plans. Our hosting is optimized for security, speed, and reliability. If you have existing hosting you'd prefer to use, we can also build your site to deploy on your chosen platform."
    },
    {
      question: "Can I update the website content myself after launch?",
      answer: "Yes! All our websites include a user-friendly content management system that allows you to easily update text, images, and other content without technical knowledge. We also provide training and documentation to ensure you're comfortable making updates."
    },
    {
      question: "What happens if something breaks on my website?",
      answer: "Our website care plans include monitoring and maintenance to prevent most issues before they occur. If something does break, our team is available to provide support based on your care plan level—from email support within 48 hours for EdgeCare to priority assistance for EdgePro clients."
    },
    {
      question: "Do you work with specific industries or business types?",
      answer: "We specialize in serving SMBs and nonprofits across various industries, including professional services, healthcare, education, retail, arts & entertainment, and community organizations. Our approach is tailored to each client's specific industry needs and challenges."
    },
    {
      question: "How are payments structured for website projects?",
      answer: "We typically structure payments in milestones: 50% deposit to commence work, 25% upon design approval, and 25% upon project completion. For larger projects, we offer additional milestone-based payment schedules. We also offer payment plans to help manage cash flow."
    },
    {
      question: "Will my website be optimized for search engines (SEO)?",
      answer: "Yes, all our website packages include on-page SEO implementation, which covers proper HTML structure, meta tags, schema markup, image optimization, and content organization. For more comprehensive SEO services, including keyword research and ongoing optimization, we offer specialized marketing packages."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="pt-44 md:pt-48 pb-20 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
                  Transform Your <span className="text-maverick-orange">Digital Presence</span> with Strategic Web Solutions
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mb-8 font-serif">
                  Create powerful, conversion-focused websites and applications that drive real business results. Our tailored digital solutions help SMBs and nonprofits build meaningful connections with their audiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <a className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-maverick-orange text-white hover:bg-maverick-orange/90 transition-all duration-300">
                      Get a free consultation
                    </a>
                  </Link>
                  <a href="#packages" className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-md md:py-4 md:text-lg md:px-10 border border-white/20 hover:border-maverick-orange/50 transition-all duration-300">
                    View pricing
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1A1A1A] p-1 rounded-lg border border-gray-800"
              >
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Web Development for SMBs and Nonprofits" 
                  className="rounded-lg w-full h-auto" 
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-maverick-orange rounded-full z-0 blur-[80px] opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-maverick-orange rounded-full z-0 blur-[80px] opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Expert Web Services Built for Results</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-serif">
              We offer comprehensive web solutions designed to maximize your digital impact and achieve measurable business outcomes
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
                className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group h-full"
              >
                <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-all duration-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Web Development Packages</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-serif">
              Tailored digital solutions to fit your business needs and budget, with clear pricing and straightforward value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#1A1A1A] rounded-xl overflow-hidden border ${
                  pkg.id === 'edge-grow' ? 'border-maverick-orange' : 'border-gray-800'
                } group h-full flex flex-col`}
              >
                {pkg.id === 'edge-grow' && (
                  <div className="bg-maverick-orange text-white py-2 text-center text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 font-heading">{pkg.title}</h3>
                    <p className="text-gray-400">{pkg.subtitle}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-400 ml-1">CAD</span>
                    <p className="text-gray-400 mt-2">One-time investment</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{pkg.description}</p>
                  
                  <div className="mb-8">
                    <p className="text-sm text-maverick-orange font-medium mb-3">IDEAL FOR:</p>
                    <p className="text-gray-300">{pkg.idealFor}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="text-maverick-orange mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="px-8 pb-8">
                  <Link href="/contact">
                    <a className={`w-full py-3 px-4 rounded-md font-medium text-center block ${
                      pkg.id === 'edge-grow' 
                        ? 'bg-maverick-orange text-white hover:bg-maverick-orange/90' 
                        : 'bg-transparent border border-gray-700 text-white hover:border-maverick-orange'
                    } transition-all duration-300`}>
                      Get started
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Plans Section */}
      <section id="care-plans" className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Website Care Plans</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-serif">
              Protect your digital investment with ongoing maintenance and support designed to keep your website secure, fresh, and performing at its best
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carePlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#121212] rounded-xl overflow-hidden border ${
                  plan.id === 'edge-advance' ? 'border-maverick-orange' : 'border-gray-800'
                } h-full flex flex-col`}
              >
                {plan.id === 'edge-advance' && (
                  <div className="bg-maverick-orange text-white py-2 text-center text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1 font-heading">{plan.title}</h3>
                    <p className="text-maverick-orange">{plan.tagline}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="text-maverick-orange mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="px-8 pb-8">
                  <Link href="/contact">
                    <a className={`w-full py-3 px-4 rounded-md font-medium text-center block ${
                      plan.id === 'edge-advance' 
                        ? 'bg-maverick-orange text-white hover:bg-maverick-orange/90' 
                        : 'bg-transparent border border-gray-700 text-white hover:border-maverick-orange'
                    } transition-all duration-300`}>
                      Select plan
                    </a>
                  </Link>
                </div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Proven Development Process</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-serif">
              We follow a systematic, transparent approach designed to deliver exceptional results on time and within budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                number: "01",
                title: "Discovery & Strategic Planning",
                description: "We start by understanding your business goals, target audience, and specific requirements to create a strategic roadmap aligned with your objectives."
              },
              {
                number: "02",
                title: "UX/UI Design & Prototyping",
                description: "Our designers create intuitive wireframes and visual designs that align with your brand identity and optimize for user experience and conversion."
              },
              {
                number: "03",
                title: "Development & Technical Implementation",
                description: "Our experienced developers bring the designs to life using clean, efficient code and best practices for performance and security."
              },
              {
                number: "04",
                title: "Comprehensive Testing & Quality Assurance",
                description: "We rigorously test across browsers, devices, and user scenarios to ensure your website performs flawlessly under all conditions."
              },
              {
                number: "05",
                title: "Launch & Deployment",
                description: "After your approval, we carefully deploy your website to your hosting environment with thorough checks to ensure a smooth transition."
              },
              {
                number: "06",
                title: "Proactive Support & Growth",
                description: "Our relationship continues with ongoing support, maintenance, and strategic advice to help your website evolve with your business needs."
              }
            ].map((step, index) => (
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
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 font-heading">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                {index < 5 && (
                  <div className="absolute left-4 top-16 h-full w-px bg-gradient-to-b from-maverick-orange to-transparent opacity-30 md:block hidden"></div>
                )}
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-serif">
              Find answers to common questions about our web development services and approach
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 last:mb-0 bg-[#121212] rounded-lg p-6 border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 font-heading">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-300 mb-8 font-serif">
              Let's create a website that works as hard as you do. Schedule a free consultation to discuss your project and explore how we can help you achieve your goals.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md bg-maverick-orange text-white hover:bg-maverick-orange/90 transition-all duration-300">
                Schedule a free consultation
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
}