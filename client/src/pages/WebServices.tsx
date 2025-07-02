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
import ProcessSection from "@/components/ui/process-section";
import { Link } from "wouter";
import { generateSEOTags, generateServiceStructuredData } from "@/lib/seo";

export default function WebServices() {
  const seoConfig = generateSEOTags({
    title: "Website Design Edmonton | #1 Web Design Company | Mavericks Edge",
    description: "Edmonton's top website design company creating stunning, high-converting websites for local businesses. Custom web design, SEO optimization, and mobile-first development. Get your free quote today!",
    keywords: "website design edmonton, web design edmonton, edmonton web design, website design company, web design company, edmonton website builders, website builders edmonton, web designing company, edmonton seo, seo company edmonton, web designers edmonton, website designers edmonton, edmonton website development, web development edmonton, seo services edmonton, edmonton seo agency, web design companies in edmonton, website designers in edmonton, web designer in edmonton, seo company services, edmonton seo company, seo companies in edmonton, website builders in canada",
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

  const collaborativeSteps = [
    {
      phase: "Blueprint",
      title: "Foundation Planning",
      agencyAction: "We Research & Strategize",
      clientAction: "You Share Your Vision",
      description: "Every great project starts with understanding. We dive deep into market research and technical planning while you share your business goals and brand vision.",
      icon: <Search className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      agencyDetails: ["Market Research", "Technical Analysis", "Strategy Development", "Resource Planning"],
      clientDetails: ["Business Goals", "Brand Vision", "Target Audience", "Success Metrics"]
    },
    {
      phase: "Architecture", 
      title: "Digital Foundation",
      agencyAction: "We Design the Structure",
      clientAction: "You Approve & Guide",
      description: "Our architects create the digital blueprint while you guide the user experience. Together we build the foundation that everything else relies on.",
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-500 to-violet-500",
      agencyDetails: ["Site Architecture", "User Flow Design", "Wireframe Creation", "Technical Planning"],
      clientDetails: ["UX Feedback", "Content Strategy", "Feature Priorities", "Flow Approval"]
    },
    {
      phase: "Design",
      title: "Visual Identity",
      agencyAction: "We Craft the Experience",
      clientAction: "You Refine & Perfect",
      description: "Our designers create stunning visuals that capture your brand essence. Your feedback shapes every detail until it's perfectly aligned with your vision.",
      icon: <Palette className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      agencyDetails: ["Visual Design", "Brand Integration", "Responsive Layouts", "Interactive Elements"],
      clientDetails: ["Design Review", "Brand Feedback", "Content Input", "Final Approval"]
    },
    {
      phase: "Development",
      title: "Digital Construction",
      agencyAction: "We Build & Integrate",
      clientAction: "You Test & Validate",
      description: "Our developers bring designs to life with cutting-edge technology. You test functionality and validate features, ensuring everything works perfectly.",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      agencyDetails: ["Frontend Development", "Backend Systems", "API Integration", "Quality Assurance"],
      clientDetails: ["Feature Testing", "Content Upload", "Workflow Validation", "User Acceptance"]
    },
    {
      phase: "Launch",
      title: "Going Live",
      agencyAction: "We Deploy & Optimize",
      clientAction: "You Celebrate & Grow",
      description: "We handle the technical launch and optimization while you focus on celebrating your new digital presence and growing your business.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      agencyDetails: ["Site Deployment", "Performance Optimization", "SEO Setup", "Analytics Implementation"],
      clientDetails: ["Launch Celebration", "Team Training", "Growth Planning", "Success Tracking"]
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
      icon: <Users className="h-6 w-6" />,
      title: "Local Trust & Real Collaboration",
      description: "We're not some faceless agency from Toronto. We're your Edmonton neighbors who actually show up to meetings, answer our phones, and treat your business like our own. Real partnership, not just vendor relationships.",
      stats: "Edmonton-Based",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Partnership, Not Just Service",
      description: "Other web designers Edmonton just build what you ask for. We dig deeper—understanding your customers, your competition, and your goals. Then we build websites that actually grow your business.",
      stats: "Results-Focused",
      color: "from-green-500 to-emerald-500", 
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Transparent Process, No Surprises",
      description: "Know exactly what's happening with your project, when it'll be done, and what it costs. No hidden fees, no scope creep, no designer drama. Just honest communication every step of the way.",
      stats: "100% Transparent",
      color: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-500/10 to-yellow-500/10"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Designs That Aren't Cookie-Cutter",
      description: "Your business is unique, so why should your website look like every other template online? We create custom designs that capture your brand personality and speak directly to your Edmonton customers.",
      stats: "100% Custom",
      color: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Our Money-Back Promise",
      description: "If you're not completely happy with your website design, we'll make it right or give you every penny back. That's how confident we are that you'll love working with our team.",
      stats: "100% Guarantee",
      color: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Support That Actually Supports You",
      description: "Questions after launch? Need content updates? Website acting weird? Call us. We're real humans who know your site inside and out, not a call center that puts you on hold.",
      stats: "Real Human Support",
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
                    #1 Website Design Company in Edmonton
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 font-heading">
                  Website Design Edmonton Trusted
                  <span className="bg-gradient-to-r from-maverick-orange to-orange-600 bg-clip-text text-transparent"> By Local Businesses</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#AAAAAA] mb-12 max-w-3xl leading-relaxed">
                  We're Edmonton's trusted web design company, crafting websites that turn visitors into customers. 
                  Our Edmonton website builders combine stunning design with smart SEO services to help your business grow online without the corporate jargon and fees.
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
                className="bg-gradient-to-br from-green-500/15 to-blue-600/15 backdrop-blur-sm p-4 rounded-xl border border-green-500/20 relative overflow-hidden group hover:border-green-400/40 transition-all duration-300 hover:scale-105"
              >
                {/* Animated dots */}
                <div className="absolute inset-0">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-green-400/30 rounded-full"
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
                    className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold text-green-400 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    5.0
                  </motion.div>
                  <div className="text-xs text-green-300 font-medium">Google Reviews</div>
                  <div className="text-xs text-green-200/60 mt-0.5">37 reviews</div>
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

              {/* Experience */}
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

        {/* Complete Web Solutions - Rebuilt */}
        <section className="py-24 px-5 md:px-10 bg-[#121212] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 via-transparent to-maverick-orange/5"></div>
          <div className="container mx-auto relative">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading">
                Why Edmonton Businesses Choose Our 
                <span className="bg-gradient-to-r from-maverick-orange to-orange-600 bg-clip-text text-transparent"> Web Design Services</span>
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-4xl mx-auto leading-relaxed">
                We're not your typical Edmonton web design company. While other agencies push templates and buzzwords, 
                we focus on what actually matters: websites that work for real Edmonton businesses and their customers.
              </p>
            </motion.div>

            {/* Design That Thinks First */}
            <motion.div
              className="mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <motion.div
                    className="w-full h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-4 border-2 border-dashed border-blue-400/30 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <Monitor className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                        <div className="text-sm text-blue-300 font-medium">User-First Design Process</div>
                      </div>
                    </div>
                    {/* Floating design elements */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                        style={{
                          left: `${20 + i * 12}%`,
                          top: `${30 + (i % 2) * 20}%`,
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                    Design That Thinks First
                  </h3>
                  <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">
                    Before we touch a pixel, we understand your customers. Our Edmonton web designers research your market, 
                    study your competition, and map out user journeys that actually make sense for Alberta businesses.
                  </p>
                  <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">
                    Take Sarah, who runs a local plumbing company. She came to us frustrated because her previous website design company 
                    built something "pretty" that generated zero leads. After understanding her customers' emergency mindset, we redesigned 
                    her site with clear pricing, instant contact options, and local trust signals. Result? 180% increase in phone calls within two months.
                  </p>
                  <p className="text-lg text-[#AAAAAA] mb-8 leading-relaxed">
                    That's the difference between generic website builders and strategic Edmonton web development that understands your actual business goals.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">User Research</span>
                    <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">Market Analysis</span>
                    <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">Brand-Smart Design</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Built for Real People */}
            <motion.div
              className="mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                    Built for Real People
                  </h3>
                  <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">
                    Your customers aren't web developers—they're busy people trying to solve problems. That's why our Edmonton website development 
                    focuses on speed, simplicity, and accessibility that actually works on all devices.
                  </p>
                  <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">
                    Consider this: if your website takes longer than 3 seconds to load, you've already lost 40% of your potential customers. 
                    In Edmonton's competitive market, that could mean the difference between a thriving business and struggling to stay afloat. 
                    Our web designer in Edmonton team obsesses over performance metrics that matter to your bottom line.
                  </p>
                  <p className="text-lg text-[#AAAAAA] mb-8 leading-relaxed">
                    We test every website on real Edmonton internet speeds, real mobile devices, and with real users who have disabilities. 
                    Because inclusive design isn't just good ethics—it's good business. When your site works for everyone, everyone becomes a potential customer.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm text-[#CCCCCC]">Mobile-First Always</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm text-[#CCCCCC]">Lightning Fast Loading</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm text-[#CCCCCC]">Accessibility Compliant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm text-[#CCCCCC]">Cross-Browser Tested</span>
                    </div>
                  </div>
                </div>
                <div>
                  <motion.div
                    className="w-full h-80 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl relative overflow-hidden flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-3 gap-4 p-8">
                      <motion.div
                        className="bg-green-400/20 rounded-lg p-4 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      >
                        <Smartphone className="h-8 w-8 text-green-400" />
                      </motion.div>
                      <motion.div
                        className="bg-green-400/20 rounded-lg p-4 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      >
                        <Monitor className="h-8 w-8 text-green-400" />
                      </motion.div>
                      <motion.div
                        className="bg-green-400/20 rounded-lg p-4 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      >
                        <Globe className="h-8 w-8 text-green-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* SEO-Ready from the Ground Up */}
            <motion.div
              className="mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <motion.div
                    className="w-full h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <Search className="h-20 w-20 text-orange-400" />
                        <motion.div
                          className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-xs font-bold text-white">#1</span>
                        </motion.div>
                      </div>
                    </div>
                    {/* SEO ranking indicators */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-orange-400/60 rounded-full"
                        style={{
                          left: `${15 + i * 15}%`,
                          bottom: `${20 + i * 8}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                    SEO-Ready from the Ground Up
                  </h3>
                  <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">
                    Forget paying extra for "SEO optimization" later. Our Edmonton SEO company builds search engine visibility 
                    into every website from day one. We're talking clean code, proper structure, and local SEO that helps Edmonton customers find you.
                  </p>
                  <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">
                    Here's what most Edmonton SEO companies won't tell you: 70% of local searches happen on mobile devices, and Google 
                    judges your entire site based on how it performs on phones. That's why our Edmonton website builders design mobile-first, 
                    then adapt up to desktop—not the other way around.
                  </p>
                  <p className="text-lg text-[#AAAAAA] mb-8 leading-relaxed">
                    When other web design companies in Edmonton bolt on SEO services as an afterthought, we bake it right into your site's foundation. 
                    The result? Higher rankings, more traffic, and customers who can actually find your business when they search for what you do.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-[#CCCCCC]">Technical SEO optimization built-in</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-[#CCCCCC]">Local Edmonton SEO strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-[#CCCCCC]">Google-friendly site structure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-[#CCCCCC]">Content strategy that ranks</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Support Beyond Launch */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                    Support Beyond Launch
                  </h3>
                  <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">
                    Your website launch isn't our finish line—it's your starting line. We provide training so you can manage your content, 
                    updates when you need them, and real humans you can call when things go sideways.
                  </p>
                  <p className="text-lg text-[#AAAAAA] mb-6 leading-relaxed">
                    Here's what our ongoing support includes: content management training that actually makes sense, security updates 
                    that keep your site safe, and strategic advice when you want to add new features or services. Plus, if Google changes 
                    their algorithm (which they do constantly), we adjust your SEO strategy to keep you ranking high.
                  </p>
                  <p className="text-lg text-[#AAAAAA] mb-8 leading-relaxed">
                    Unlike other website designers in Edmonton who disappear after launch, we stick around for the long haul. Because we know 
                    that a great website is just the beginning of growing your business online—and we want to be part of that growth story.
                  </p>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="h-6 w-6 text-purple-400" />
                      <span className="font-semibold text-white">Our Promise</span>
                    </div>
                    <p className="text-[#CCCCCC] leading-relaxed">
                      If you're not completely happy with your website design, we'll make it right or give you a 100% money-back guarantee. 
                      That's how confident we are in our work.
                    </p>
                  </div>
                </div>
                <div>
                  <motion.div
                    className="w-full h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl relative overflow-hidden flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <Users className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                      <div className="text-lg font-semibold text-white mb-2">24/7 Edmonton Support</div>
                      <div className="text-sm text-purple-300">Real humans, real help</div>
                    </div>
                    {/* Support connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="60"
                        stroke="url(#supportGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1, rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="40"
                        stroke="url(#supportGradient)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="5,3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1, rotate: -360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      />
                      <defs>
                        <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                          <stop offset="50%" stopColor="#EC4899" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Co-Create With Us Section */}
        <ProcessSection />

        {/* Why Edmonton Business Owners Work With Us - Scroll-Driven Cinematic Layout */}
        <section className="py-32 px-5 md:px-10 bg-[#1E1E1E] relative overflow-hidden">
          {/* Animated mesh gradient background */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  radial-gradient(circle at 20% 20%, rgba(255, 90, 0, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 90% 10%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)
                `
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="container mx-auto relative">
            {/* Hero intro */}
            <motion.div
              className="max-w-5xl mx-auto mb-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-5xl md:text-7xl font-bold font-heading mb-12 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Why Smart Edmonton Business Owners Work{" "}
                <motion.span 
                  className="bg-gradient-to-r from-maverick-orange via-orange-400 to-red-500 bg-clip-text text-transparent"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  With Us
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-2xl md:text-3xl text-[#AAAAAA] leading-relaxed max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Look, we get it. You've been burned by web agencies before. Promises that didn't deliver, projects that dragged on forever, 
                and websites that looked great but didn't bring in a single customer.{" "}
                <span className="text-white font-semibold">Here's why Edmonton businesses choose us differently.</span>
              </motion.p>
            </motion.div>

            {/* Flowing content sections */}
            <div className="space-y-40">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  {/* Floating number indicator */}
                  <motion.div
                    className="absolute -top-8 left-0 md:left-8"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center text-white font-bold text-xl shadow-2xl`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </motion.div>

                  {/* Dynamic layout based on index */}
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                    {/* Content side */}
                    <motion.div 
                      className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {/* Stats badge */}
                      <motion.div
                        className={`inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r ${reason.color} rounded-full text-white font-semibold shadow-lg`}
                        initial={{ scale: 0, y: -20 }}
                        whileInView={{ scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, type: "spring" }}
                      >
                        <div className="w-6 h-6">
                          {reason.icon}
                        </div>
                        {reason.stats}
                      </motion.div>

                      <motion.h3 
                        className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {reason.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-xl text-[#AAAAAA] leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {reason.description}
                      </motion.p>

                      {/* Visual emphasis line */}
                      <motion.div
                        className={`h-1 bg-gradient-to-r ${reason.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      />
                    </motion.div>

                    {/* Visual side */}
                    <motion.div 
                      className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                      initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="relative">
                        {/* Main visual container */}
                        <motion.div
                          className={`relative w-full h-80 bg-gradient-to-br ${reason.bgGradient} rounded-3xl overflow-hidden border border-gray-700/30`}
                          whileHover={{ scale: 1.02, rotateY: 5 }}
                          transition={{ duration: 0.3 }}
                          style={{ perspective: "1000px" }}
                        >
                          {/* Animated background pattern */}
                          <div className="absolute inset-0">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className={`absolute w-4 h-4 bg-gradient-to-br ${reason.color} rounded-full opacity-20`}
                                style={{
                                  left: `${(i % 4) * 25 + 10}%`,
                                  top: `${Math.floor(i / 4) * 30 + 15}%`,
                                }}
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.2, 0.4, 0.2],
                                  rotate: [0, 180, 360],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>

                          {/* Central icon */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{
                              y: [0, -10, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <motion.div
                              className={`w-24 h-24 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center text-white shadow-2xl`}
                              whileHover={{ 
                                rotate: [0, -10, 10, 0],
                                scale: 1.1 
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              <div className="w-12 h-12">
                                {reason.icon}
                              </div>
                            </motion.div>
                          </motion.div>

                          {/* Subtle glow effect */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 blur-xl`}
                            whileHover={{ opacity: 0.3 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>

                        {/* Floating accent elements */}
                        <motion.div
                          className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${reason.color} rounded-full shadow-lg`}
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <motion.div
                          className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br ${reason.color} rounded-full shadow-lg opacity-60`}
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [360, 180, 0],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Final CTA with cinematic reveal */}
            <motion.div
              className="mt-40 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold mb-8 font-heading"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Ready to Join These Smart Business Owners?
                </motion.h3>
                
                <motion.p 
                  className="text-xl text-[#AAAAAA] mb-12 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Sound like the kind of Edmonton web design company you want to work with? 
                  Let's have an honest conversation about your project.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <motion.button
                    className="relative px-12 py-6 text-xl font-semibold text-white overflow-hidden group"
                    style={{
                      background: "linear-gradient(45deg, #ff5a00, #ff7a30, #e04500)",
                      borderRadius: "16px",
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(255, 90, 0, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100"
                      style={{ borderRadius: "16px" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Let's Talk About Your Project</span>
                    
                    {/* Button sparkle effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-0 h-0 bg-white rounded-full opacity-50"
                      animate={{
                        width: ["0px", "100px", "0px"],
                        height: ["0px", "100px", "0px"],
                        x: "-50%",
                        y: "-50%",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
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