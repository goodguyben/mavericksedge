
import { motion } from "framer-motion";
import { Code, Monitor, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Gauge, Bookmark, Users, Smartphone, Search, Zap, Award, Star, MapPin, Clock, CheckCircle, ArrowRight, Lightbulb, Rocket, Handshake, TrendingUp, Phone, DollarSign, Timer, Heart, Target, Building2, Megaphone } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { webDevelopmentServiceSchema, generateBreadcrumbSchema } from "@/components/StructuredData";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

export default function WebServices() {
  useEffect(() => {
    console.log("Web Services page viewed");
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://mavericksedge.ca/" },
    { name: "Services", url: "https://mavericksedge.ca/services-edmonton-alberta" },
    { name: "Web Development", url: "https://mavericksedge.ca/web-design-services-edmonton" }
  ];

  const painPoints = [
    { icon: <Timer className="h-6 w-6 text-red-400" />, text: "Your current website loads slower than your competitors" },
    { icon: <Smartphone className="h-6 w-6 text-red-400" />, text: "Mobile visitors can't navigate your site easily" },
    { icon: <Search className="h-6 w-6 text-red-400" />, text: "Potential customers can't find you on Google" },
    { icon: <Target className="h-6 w-6 text-red-400" />, text: "Visitors leave without contacting you or making a purchase" },
    { icon: <Building2 className="h-6 w-6 text-red-400" />, text: "Your website doesn't reflect your business's true quality" },
    { icon: <DollarSign className="h-6 w-6 text-red-400" />, text: "You're losing revenue to businesses with better online presence" }
  ];

  const solutions = [
    {
      title: "Lightning-Fast Websites That Convert",
      subtitle: "Edmonton's Speed & Performance Specialists",
      description: "We build websites that load in under 3 seconds and convert visitors into customers. Using cutting-edge technology and proven UX principles, every site we create is optimized for Edmonton's competitive market. No more losing customers to slow load times.",
      offerings: [
        "Sub-3-second load times guaranteed",
        "Mobile-first responsive design",
        "Conversion-optimized layouts",
        "Advanced caching & CDN setup",
        "Core Web Vitals optimization"
      ],
      icon: <Zap className="h-12 w-12 text-maverick-orange" />,
      gradient: "from-yellow-500/20 to-orange-500/20",
      caseStudy: {
        client: "Local Edmonton Restaurant",
        result: "300% increase in online orders after redesign",
        metric: "Average load time: 1.8 seconds"
      }
    },
    {
      title: "Search Engine Domination",
      subtitle: "Get Found by Edmonton Customers",
      description: "We don't just build beautiful websites—we build websites that get found. Our Edmonton SEO specialists ensure your business appears when locals search for your services. Combine stunning design with search visibility that drives real business growth.",
      offerings: [
        "Local Edmonton SEO optimization",
        "Google My Business integration",
        "Schema markup & structured data",
        "Keyword-optimized content strategy",
        "Monthly SEO performance reports"
      ],
      icon: <Search className="h-12 w-12 text-maverick-orange" />,
      gradient: "from-green-500/20 to-blue-500/20",
      caseStudy: {
        client: "Edmonton Law Firm",
        result: "First page rankings for 15+ keywords",
        metric: "250% increase in qualified leads"
      }
    },
    {
      title: "Accessibility-First Development",
      subtitle: "Websites That Welcome Everyone",
      description: "We believe every visitor deserves an exceptional experience. Our accessibility-first approach ensures your website works perfectly for users with disabilities while improving usability for everyone. Meet WCAG standards and expand your customer base.",
      offerings: [
        "WCAG 2.1 AA compliance",
        "Screen reader optimization",
        "Keyboard navigation support",
        "High contrast & readable design",
        "Accessibility audit & testing"
      ],
      icon: <Heart className="h-12 w-12 text-maverick-orange" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      caseStudy: {
        client: "Edmonton Nonprofit",
        result: "40% increase in donation conversions",
        metric: "100% accessibility compliance achieved"
      }
    }
  ];

  const whyUsPoints = [
    {
      title: "Edmonton Roots, Global Standards",
      description: "Born and raised in Edmonton, we understand local business challenges. We combine Prairie practicality with world-class web development standards to give you a competitive edge in the YEG market.",
      icon: <MapPin className="h-8 w-8 text-maverick-orange" />,
      stat: "100+ Edmonton businesses served"
    },
    {
      title: "2-Week Launch Guarantee",
      description: "While others take months, we deliver professional websites in 14 days or less. Our streamlined process gets you online fast without sacrificing quality—because every day offline is money lost.",
      icon: <Rocket className="h-8 w-8 text-maverick-orange" />,
      stat: "Average delivery: 10 days"
    },
    {
      title: "AI-Powered Efficiency",
      description: "We leverage cutting-edge AI tools to build smarter, faster, and more effective websites. From automated testing to intelligent content optimization, technology works for your success.",
      icon: <Zap className="h-8 w-8 text-maverick-orange" />,
      stat: "50% faster development"
    },
    {
      title: "Transparent Pricing, Zero Surprises",
      description: "What we quote is what you pay. No hidden fees, no scope creep charges, no surprise bills. We believe honest pricing builds lasting relationships with Edmonton businesses.",
      icon: <CheckCircle className="h-8 w-8 text-maverick-orange" />,
      stat: "Fixed-price guarantee"
    }
  ];

  const processSteps = [
    {
      step: "Week 1",
      title: "Discovery & Strategy",
      description: "We start with a deep dive into your business goals, target audience, and competitive landscape. This isn't just web design—it's business strategy.",
      icon: <Lightbulb className="h-8 w-8 text-maverick-orange" />,
      tasks: ["Business goals workshop", "Competitor analysis", "User journey mapping", "Content strategy planning"]
    },
    {
      step: "Week 2", 
      title: "Design & Development",
      description: "Our team builds your website using proven frameworks and cutting-edge technology. You'll see progress daily through our client portal.",
      icon: <Code className="h-8 w-8 text-maverick-orange" />,
      tasks: ["Custom design creation", "Responsive development", "Performance optimization", "SEO implementation"]
    },
    {
      step: "Launch",
      title: "Testing & Go-Live",
      description: "Before launch, we rigorously test every function, optimize for speed, and ensure perfect performance across all devices and browsers.",
      icon: <Rocket className="h-8 w-8 text-maverick-orange" />,
      tasks: ["Quality assurance testing", "Speed optimization", "SEO verification", "Launch & monitoring"]
    },
    {
      step: "Ongoing",
      title: "Growth & Support",
      description: "Your website is a growth engine, not a static brochure. We provide ongoing optimization, security updates, and strategic improvements.",
      icon: <TrendingUp className="h-8 w-8 text-maverick-orange" />,
      tasks: ["Performance monitoring", "Security updates", "Content optimization", "Growth consulting"]
    }
  ];

  const testimonials = [
    {
      quote: "Mavericks Edge transformed our online presence completely. Our new website generated 3x more leads in the first month, and we're finally ranking on Google for Edmonton searches.",
      client: "Sarah Chen",
      company: "Edmonton Dental Clinic",
      industry: "Healthcare",
      result: "300% increase in leads",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b900?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The team delivered exactly what they promised—a beautiful, fast website in just 10 days. Our nonprofit finally has a professional online presence that matches our mission.",
      client: "Michael Rodriguez",
      company: "Edmonton Food Bank",
      industry: "Nonprofit",
      result: "40% more online donations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "As a small business owner, I was overwhelmed by web development. Mavericks Edge made it simple, affordable, and stress-free. Best investment I've made for my business.",
      client: "Jennifer Park",
      company: "YEG Consulting Services", 
      industry: "Professional Services",
      result: "250% increase in inquiries",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const pricingPackages = [
    {
      name: "Startup Special",
      price: "$2,500",
      description: "Perfect for new Edmonton businesses",
      features: [
        "5-page professional website",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "2-week delivery",
        "3 months free hosting"
      ],
      popular: false
    },
    {
      name: "Business Growth",
      price: "$4,500",
      description: "Most popular for established businesses",
      features: [
        "Up to 15 pages",
        "Advanced SEO package",
        "E-commerce ready",
        "CMS training included",
        "Analytics setup",
        "6 months free support"
      ],
      popular: true
    },
    {
      name: "Enterprise Pro",
      price: "$8,500",
      description: "Complete digital transformation",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Priority support",
        "Performance monitoring",
        "12 months free maintenance"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How quickly can you build my Edmonton business website?",
      answer: "Most business websites are completed within 10-14 days. We've streamlined our process to deliver professional results quickly without compromising quality. Larger e-commerce or custom applications may take 3-4 weeks."
    },
    {
      question: "What makes your web development different from other Edmonton agencies?",
      answer: "We combine local market knowledge with cutting-edge technology. Our accessibility-first approach, 2-week delivery guarantee, and transparent pricing set us apart. Plus, we use AI tools to work more efficiently, passing savings to our clients."
    },
    {
      question: "Do you help with SEO for Edmonton local search?",
      answer: "Absolutely! Every website includes basic Edmonton SEO optimization. We also offer advanced local SEO services to help you dominate Google searches for your industry in the Edmonton area."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes! We specialize in website redesigns that improve performance, user experience, and search rankings. We'll analyze your current site, identify improvement opportunities, and create a modern, conversion-focused design."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. Your website is an investment we help protect and grow."
    },
    {
      question: "Do you work with Edmonton nonprofits?",
      answer: "We love working with Edmonton nonprofits! We offer special pricing for registered nonprofits and understand the unique challenges of mission-driven organizations. Many of our nonprofit clients have seen significant increases in donations and volunteer signups."
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Edmonton Web Design & Development | Fast, Affordable Websites That Convert"
        description="Edmonton's premier web design agency specializing in fast, conversion-optimized websites for small businesses and nonprofits. 2-week delivery, transparent pricing, local expertise."
        keywords="Edmonton web design, web development Edmonton, affordable web development Edmonton, nonprofit website builder Edmonton, responsive web design Edmonton, local web designer Edmonton"
        canonicalUrl="https://mavericksedge.ca/web-design-services-edmonton"
        ogTitle="Edmonton Web Design & Development | Mavericks Edge"
        ogDescription="Fast, affordable websites that convert. Edmonton's trusted web design partner for small businesses and nonprofits."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
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
        <section className="pt-44 md:pt-48 pb-24 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/10 via-transparent to-purple-500/5"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-maverick-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
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
                  <MapPin className="h-6 w-6 text-maverick-orange" />
                  <span className="text-maverick-orange font-semibold">Edmonton's Web Design Specialists</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
                  Stop Losing Customers to 
                  <span className="text-maverick-orange block">Slow, Outdated Websites</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We build lightning-fast, conversion-optimized websites that turn Edmonton visitors into loyal customers. 
                  <strong className="text-white"> 2-week delivery guaranteed.</strong>
                </p>
                
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4 mb-8">
                  <p className="text-gray-300">
                    <strong className="text-red-400">Reality check:</strong> If your website takes more than 3 seconds to load, 
                    you're losing 40% of potential customers before they even see your content.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact-edmonton-web-design">
                    <motion.div
                      className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Your Free Website Audit
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
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-maverick-orange">2 Weeks</div>
                    <div className="text-sm text-gray-400">Average Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-maverick-orange">100+</div>
                    <div className="text-sm text-gray-400">Edmonton Businesses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-maverick-orange">3x</div>
                    <div className="text-sm text-gray-400">Average ROI</div>
                  </div>
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
                    alt="Edmonton Web Development Success" 
                    className="rounded-xl w-full h-auto" 
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold">Load Time: 1.8s</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold">98% Mobile Score</div>
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
                Is Your Website Costing You Money Every Day?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                These common website problems are silently killing Edmonton businesses:
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
                      <h3 className="font-semibold text-white">Problem #{index + 1}</h3>
                    </div>
                    <p className="text-gray-300">{point.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12 p-6 bg-gradient-to-r from-maverick-orange/20 to-yellow-500/20 border border-maverick-orange/30 rounded-xl max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-lg text-white font-medium">
                  Sound familiar? You're not alone. These issues plague 80% of Edmonton small business websites.
                  <span className="block mt-2 text-maverick-orange">But there's a solution...</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
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
                Edmonton Web Solutions That Actually Work
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't just build websites. We build revenue-generating digital assets.
              </p>
            </motion.div>

            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`p-6 bg-gradient-to-br ${solution.gradient} rounded-xl inline-block mb-6`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 font-heading">{solution.title}</h3>
                    <h4 className="text-xl text-maverick-orange mb-4">{solution.subtitle}</h4>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.offerings.map((offering, offeringIndex) => (
                        <li key={offeringIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-maverick-orange mr-3 flex-shrink-0" />
                          {offering}
                        </li>
                      ))}
                    </ul>

                    {/* Case Study */}
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-green-400" />
                        <span className="font-semibold text-green-400">Success Story</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        <strong>{solution.caseStudy.client}:</strong> {solution.caseStudy.result}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{solution.caseStudy.metric}</p>
                    </div>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-1 rounded-2xl border border-gray-700 shadow-2xl">
                      <img 
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1460925895917-afdab827c52f' : index === 1 ? '1552664730-d307ca884978' : '1563013544-824ae1b704d3'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                        alt={solution.title}
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                Why Edmonton Businesses Choose Mavericks Edge
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another web agency. We're your digital growth partners.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg">
                      {point.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-maverick-orange">{point.stat}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Our Proven 2-Week Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From concept to launch in 14 days. Here's exactly how we do it:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-6 border border-gray-700 h-full">
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
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-maverick-orange to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                Real Results from Real Edmonton Businesses
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
                  className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] rounded-xl p-6 border border-gray-800 relative"
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
                      <p className="text-xs text-maverick-orange">{testimonial.result}</p>
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
                Transparent Pricing for Edmonton Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                No surprises, no hidden fees. Choose the package that fits your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-8 border ${
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
                    <div className="text-4xl font-bold text-maverick-orange">{pkg.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-maverick-orange mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact-edmonton-web-design">
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
                Frequently Asked Questions
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
                  className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] rounded-xl p-6 border border-gray-700 hover:border-maverick-orange/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-maverick-orange">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-br from-maverick-orange/10 via-transparent to-purple-500/10">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Ready to Transform Your Edmonton Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join 100+ Edmonton businesses that have transformed their online presence with Mavericks Edge. 
                Fast delivery, transparent pricing, guaranteed results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/contact-edmonton-web-design">
                  <motion.div
                    className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your 2-Week Website Project
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
                Free consultation • 2-week delivery guarantee • No hidden fees
              </p>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </div>
  );
}
