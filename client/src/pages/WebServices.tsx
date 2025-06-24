import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { 
  Monitor, 
  Smartphone, 
  Code, 
  Palette, 
  Globe, 
  ShoppingCart,
  Zap,
  BarChart3,
  Shield,
  Search,
  Users,
  Trophy,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target
} from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { generateSEOTags, generateServiceStructuredData } from "@/lib/seo";

export default function WebServices() {
  const seoConfig = generateSEOTags({
    title: "Edmonton Web Design & Development Services | Custom Websites | Mavericks Edge",
    description: "Professional web design and development services in Edmonton. Custom websites, e-commerce solutions, and responsive designs for Alberta businesses. Get your quote today!",
    keywords: "Edmonton web design, web development Edmonton, custom websites Edmonton, responsive web design Alberta, e-commerce development Edmonton, WordPress development Edmonton",
    canonical: "/web-design-services-edmonton"
  });

  const webServices = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Custom Website Design",
      description: "Bespoke websites tailored to your brand and business goals",
      features: ["Mobile-First Design", "Brand Integration", "User Experience Focus", "Conversion Optimization"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Complete web applications with modern technologies",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that drive sales and growth",
      features: ["Shopify Development", "WooCommerce", "Payment Integration", "Inventory Management"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Websites that work perfectly on all devices",
      features: ["Mobile Optimization", "Cross-Browser Testing", "Fast Loading", "Touch-Friendly Interface"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful interfaces that enhance user experience",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "CMS Development",
      description: "Easy-to-manage content management systems",
      features: ["WordPress Custom", "Headless CMS", "Content Strategy", "Training Included"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and competitive landscape to create a strategic foundation.",
      icon: <Search className="h-6 w-6" />
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our designers create stunning visuals and interactive prototypes that bring your vision to life.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers build your website using cutting-edge technologies, followed by rigorous testing.",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We launch your website and continue optimizing for performance, SEO, and user experience.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const portfolioHighlights = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "/videos/services/Next-Gen E-Commerce 1.mp4"
    },
    {
      title: "Business Website",
      description: "Professional corporate website with CMS",
      tech: ["WordPress", "Custom Theme", "SEO", "Analytics"],
      image: "/videos/services/Custom Interactive Websites 1.mp4"
    },
    {
      title: "Web Application",
      description: "Custom productivity tool for team management",
      tech: ["Vue.js", "Express", "PostgreSQL", "AWS"],
      image: "/videos/services/Productivity & Management Web Applications 1.mp4"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Award-Winning Design",
      description: "Our designs have won recognition for innovation and user experience"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Delivery", 
      description: "Most projects completed within 2-6 weeks without compromising quality"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "Dedicated support team available for maintenance and updates"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <link rel="canonical" href={seoConfig.canonical} />

        <meta property="og:title" content={seoConfig.openGraph.title} />
        <meta property="og:description" content={seoConfig.openGraph.description} />
        <meta property="og:type" content={seoConfig.openGraph.type} />
        <meta property="og:url" content={seoConfig.openGraph.url} />
        <meta property="og:image" content={seoConfig.openGraph.image} />

        <meta name="twitter:card" content={seoConfig.twitter.card} />
        <meta name="twitter:title" content={seoConfig.twitter.title} />
        <meta name="twitter:description" content={seoConfig.twitter.description} />
        <meta name="twitter:image" content={seoConfig.twitter.image} />

        <script type="application/ld+json">
          {JSON.stringify(generateServiceStructuredData(
            "Web Design & Development Services",
            "Professional web design and development services in Edmonton including custom websites, e-commerce solutions, and responsive designs",
            "https://mavericksedge.ca/web-design-services-edmonton",
            "$850 - $5000"
          ))}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div className="pt-44 md:pt-48 pb-24 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 via-transparent to-maverick-orange/5"></div>
          <div className="container mx-auto relative">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-maverick-orange/20 text-maverick-orange px-4 py-2 rounded-full text-sm font-medium">
                    #1 Web Design Company in Edmonton
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 font-heading">
                  Edmonton Web Design & 
                  <span className="bg-gradient-to-r from-maverick-orange to-orange-600 bg-clip-text text-transparent"> Development</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#AAAAAA] mb-12 max-w-3xl leading-relaxed">
                  Transform your business with stunning, high-performance websites that drive results. 
                  From custom designs to e-commerce solutions, we create digital experiences that convert visitors into customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.button
                    className="px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3"
                    style={{
                      background: `linear-gradient(90deg, #E04500 0%, #E57B00 100%)`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Free Quote <ArrowRight className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-600 hover:border-maverick-orange transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/work'}
                  >
                    View Our Work
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Websites Built" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "2-6", label: "Weeks Delivery" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-maverick-orange mb-2">{stat.number}</div>
                  <div className="text-[#AAAAAA]">{stat.label}</div>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Complete Web Solutions
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                From concept to launch, we provide end-to-end web development services 
                that help Edmonton businesses succeed online.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1E1E1E] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
                >
                  <div className="text-maverick-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-[#AAAAAA] mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-maverick-orange mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Our Proven Process
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                We follow a systematic approach to ensure your project is delivered on time, 
                on budget, and exceeds your expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="bg-maverick-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-maverick-orange mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-[#AAAAAA]">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="h-6 w-6 text-maverick-orange mx-auto" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Recent Projects
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                See how we've helped Edmonton businesses transform their online presence 
                with custom web solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioHighlights.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-800 hover:border-maverick-orange transition-all duration-300"
                >
                  <div className="aspect-video bg-gray-800 relative overflow-hidden">
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-[#AAAAAA] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-maverick-orange/20 text-maverick-orange px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Why Edmonton Businesses Choose Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-maverick-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-maverick-orange">
                      {reason.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-[#AAAAAA]">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-r from-maverick-orange to-orange-600">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free consultation and quote for your web design project. 
                Let's build something amazing together.
              </p>
              <motion.button
                className="bg-white text-maverick-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project Today
              </motion.button>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </>
  );
}