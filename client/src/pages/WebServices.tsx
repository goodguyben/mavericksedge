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
      title: "Discovery & Research",
      description: "Deep dive into your business objectives, target audience analysis, competitor research, and technical requirements gathering. We create detailed user personas and define project scope.",
      icon: <Search className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      details: ["Business Analysis", "User Research", "Competitor Audit", "Technical Planning"]
    },
    {
      step: "02", 
      title: "Architecture & Wireframing",
      description: "Information architecture design, user flow mapping, and detailed wireframing. We create the structural blueprint that ensures optimal user experience and functionality.",
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-500 to-violet-500", 
      bgColor: "bg-purple-500/10",
      details: ["Site Architecture", "User Flow Design", "Wireframe Creation", "Content Strategy"]
    },
    {
      step: "03",
      title: "Visual Design & Prototyping",
      description: "High-fidelity design creation with brand integration, interactive prototypes, and responsive design mockups. Every pixel is crafted for maximum impact.",
      icon: <Palette className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10", 
      details: ["Visual Design", "Brand Integration", "Interactive Prototypes", "Mobile Optimization"]
    },
    {
      step: "04",
      title: "Development & Integration",
      description: "Full-stack development using modern technologies, API integrations, database setup, and CMS implementation. Rigorous testing ensures flawless functionality.",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      details: ["Frontend Development", "Backend Systems", "API Integration", "Quality Assurance"]
    },
    {
      step: "05",
      title: "Launch & Growth Optimization",
      description: "Strategic launch execution, performance optimization, SEO implementation, and ongoing analytics setup. We ensure your site performs at peak efficiency from day one.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      details: ["Site Launch", "Performance Tuning", "SEO Setup", "Analytics & Monitoring"]
    }
  ];

  const portfolioHighlights = [
    {
      title: "NorthShore Commerce",
      description: "Luxury retail e-commerce platform with AI recommendations",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "/videos/services/Next-Gen E-Commerce 2.mp4",
      category: "E-Commerce"
    },
    {
      title: "Apex Consulting Group",
      description: "Professional corporate website with dynamic CMS",
      tech: ["WordPress", "Custom Theme", "SEO", "Analytics"],
      image: "/videos/services/Custom Interactive Websites 1.mp4",
      category: "Corporate Website"
    },
    {
      title: "TaskFlow Pro",
      description: "Advanced project management web application",
      tech: ["Vue.js", "Express", "PostgreSQL", "AWS"],
      image: "/videos/services/Productivity & Management Web Applications 3.mp4",
      category: "Web Application"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Edmonton's #1 Web Agency",
      description: "5.0-star Google rating from 37+ local businesses. Award-winning designs that drive real results for Alberta companies.",
      stats: "5.0★ Rating",
      color: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-500/10 to-yellow-500/10"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning-Fast Delivery", 
      description: "Most Edmonton businesses get their websites in 2-8 weeks. No delays, no excuses - just results when you need them.",
      stats: "2-8 Weeks",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Local Market Expertise",
      description: "Deep understanding of Edmonton's business landscape. We know what works for Alberta companies and their customers.",
      stats: "350+ Local Sites",
      color: "from-green-500 to-emerald-500", 
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Proven ROI Results",
      description: "Our clients see average 300% increase in online leads within 6 months. Data-driven strategies that boost your bottom line.",
      stats: "300% ROI Avg",
      color: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security protocols, SSL certificates, and 99.9% uptime guarantee. Your business data stays protected 24/7.",
      stats: "99.9% Uptime",
      color: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "White-Glove Support",
      description: "Dedicated Edmonton-based support team. Get help when you need it, speak with real people who understand your business.",
      stats: "24/7 Support",
      color: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/10 to-cyan-500/10"
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

        {/* Compact Stats Section */}
        <section className="py-12 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {/* Google Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 relative overflow-hidden group hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                {/* Colorful Google logo */}
                <div className="absolute top-2 right-2 w-6 h-6">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-[#FBBC05] fill-current" />
                      ))}
                    </div>
                  </div>
                  <motion.div 
                    className="text-2xl font-bold text-white mb-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    5.0
                  </motion.div>
                  <div className="text-xs text-gray-300 font-medium">Google Reviews</div>
                  <div className="text-xs text-gray-400 mt-0.5">37 reviews</div>
                </div>
              </motion.div>

              {/* Projects Built */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-emerald-500/15 to-green-600/15 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/20 relative overflow-hidden group hover:border-emerald-400/40 transition-all duration-300 hover:scale-105"
              >
                {/* Animated dots */}
                <div className="absolute inset-0">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-2"
                    whileHover={{ rotate: 5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-emerald-400 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    350+
                  </motion.div>
                  <div className="text-xs text-emerald-300 font-medium">Websites Built</div>
                  <div className="text-xs text-emerald-200/60 mt-0.5">Successfully delivered</div>
                </div>
              </motion.div>

              {/* Delivery Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-500/15 to-cyan-600/15 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20 relative overflow-hidden group hover:border-blue-400/40 transition-all duration-300 hover:scale-105"
              >
                {/* Minimal clock */}
                <div className="absolute top-2 right-2">
                  <motion.div
                    className="w-5 h-5 rounded-full border border-blue-400/40 relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0.5 left-1/2 w-px h-1.5 bg-blue-400 origin-bottom -translate-x-0.5"></div>
                  </motion.div>
                </div>
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Clock className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-blue-400 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    2-8
                  </motion.div>
                  <div className="text-xs text-blue-300 font-medium">Week Delivery</div>
                  <div className="text-xs text-blue-200/60 mt-0.5">Fast turnaround</div>
                </div>
              </motion.div>

              {/* Years of Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-500/15 to-violet-600/15 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20 relative overflow-hidden group hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                {/* Pulse effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-purple-400/10"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.05, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-br from-purple-400 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Trophy className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-purple-400 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    10+
                  </motion.div>
                  <div className="text-xs text-purple-300 font-medium">Years Experience</div>
                  <div className="text-xs text-purple-200/60 mt-0.5">Purposeful web design</div>
                </div>
              </motion.div>
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

        {/* Enhanced Process Section */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 via-transparent to-maverick-orange/5"></div>
          <div className="container mx-auto relative">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Our 5-Stage Development Process
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                From concept to launch, our proven methodology ensures your website or web application 
                is delivered on time, on budget, and exceeds your expectations.
              </p>
            </motion.div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Content Side */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <motion.div 
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div className="ml-6">
                        <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className={`${step.bgColor} border border-gray-700 rounded-lg p-3 text-sm font-medium flex items-center`}
                        >
                          <CheckCircle className={`h-4 w-4 mr-2 bg-gradient-to-r ${step.color} bg-clip-text`} />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="flex-1 relative">
                    <motion.div
                      className={`w-full h-80 rounded-2xl ${step.bgColor} border border-gray-700 relative overflow-hidden`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>

                      {/* Step-specific content */}
                      <div className="absolute inset-6 flex items-center justify-center">
                        <motion.div
                          className="text-center"
                          animate={{ y: [-5, 5, -5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-20 mx-auto mb-4`}></div>
                          <div className="text-white/80 font-medium">Step {step.step}</div>
                          <div className="text-white/60 text-sm mt-2">{step.title}</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 -bottom-8 w-px h-16 bg-gradient-to-b from-maverick-orange to-transparent hidden lg:block"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
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
                  className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
                  whileHover={{ y: -10 }}
                >
                  <div className="aspect-video bg-gray-800 relative overflow-hidden">
                    <video 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                    <div className="absolute top-4 left-4">
                      <span className="bg-maverick-orange/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-maverick-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#AAAAAA] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <motion.span 
                          key={idx} 
                          className="bg-maverick-orange/20 text-maverick-orange px-3 py-1 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-maverick-orange/5 via-transparent to-transparent"></div>
          <div className="container mx-auto relative">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Why Edmonton Businesses Choose 
                <span className="bg-gradient-to-r from-maverick-orange to-orange-600 bg-clip-text text-transparent"> Mavericks Edge</span>
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                Join 350+ successful Edmonton businesses who trust us with their digital presence. 
                Here's what sets us apart in Alberta's competitive market.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-gradient-to-br ${reason.bgGradient} backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Stats badge */}
                  <motion.div 
                    className={`absolute top-4 right-4 bg-gradient-to-r ${reason.color} px-3 py-1 rounded-full text-white text-xs font-bold`}
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {reason.stats}
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 text-white shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {reason.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-[#AAAAAA] group-hover:text-gray-300 transition-colors leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Hover effect overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                    initial={false}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg text-[#AAAAAA] mb-6">
                Ready to join Edmonton's most successful businesses?
              </p>
              <motion.button
                className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-maverick-orange hover:bg-maverick-orange transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
              >
                Get Your Free Consultation
              </motion.button>
            </motion.div>
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

        {/* Technology Partners Section */}
        <section className="py-24 px-5 md:px-10 bg-[#121212] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 via-transparent to-maverick-orange/5"></div>
          <div className="container mx-auto relative">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Trusted Technology 
                <span className="bg-gradient-to-r from-maverick-orange to-orange-600 bg-clip-text text-transparent"> Partners</span>
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                We collaborate with industry leaders to deliver cutting-edge solutions 
                that power Edmonton's most successful businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              {/* Google */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col items-center group"
              >
                <motion.div
                  className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-20 h-20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-maverick-orange transition-colors">Google</h3>
                <p className="text-[#AAAAAA] text-center text-sm">Cloud Platform & Analytics</p>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Telus */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center group relative"
              >
                <motion.div
                  className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg overflow-hidden p-6"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src="/images/telus-logo.svg" 
                      alt="Telus Logo" 
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        console.log("Telus logo failed to load, showing fallback");
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) {
                          e.currentTarget.style.display = 'none';
                          fallback.style.display = 'flex';
                        }
                      }}
                      onLoad={() => console.log("Telus logo loaded successfully")}
                    />
                    <div 
                      className="w-full h-full bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                      style={{ display: 'none' }}
                    >
                      TELUS
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-maverick-orange transition-colors">Telus</h3>
                <p className="text-[#AAAAAA] text-center text-sm">Telecommunications & Connectivity</p>
                
                {/* Network effect animation */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-40 h-40 border border-blue-500/20 rounded-full"></div>
                    <div className="w-32 h-32 border border-green-500/20 rounded-full absolute top-4 left-4"></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Manus AI */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center group relative"
              >
                <motion.div
                  className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg p-6"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src="/images/manus-ai-logo.svg" 
                      alt="Manus AI Logo" 
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        console.log("Manus AI logo failed to load, showing fallback");
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) {
                          e.currentTarget.style.display = 'none';
                          fallback.style.display = 'flex';
                        }
                      }}
                      onLoad={() => console.log("Manus AI logo loaded successfully")}
                    />
                    <div 
                      className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm text-center"
                      style={{ display: 'none' }}
                    >
                      MANUS AI
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-maverick-orange transition-colors">Manus AI</h3>
                <p className="text-[#AAAAAA] text-center text-sm">Artificial Intelligence Solutions</p>
                
                {/* AI neural network animation */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${25 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                      d="M50,50 Q75,25 100,50 Q125,75 150,50"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>
            </div>

            
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </>
  );
}