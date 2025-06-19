
import { motion } from "framer-motion";
import { Code, Monitor, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Gauge, Bookmark, Users, Smartphone, Search, Zap, Award, Star, MapPin, Clock, CheckCircle, ArrowRight, Lightbulb, Rocket, Handshake, TrendingUp, Phone } from "lucide-react";
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

  const painPoints = [
    "Outdated aesthetics that deter potential customers",
    "Poor mobile performance leading to lost sales",
    "Difficulty being found on Google by local clients",
    "Lack of clear calls-to-action hindering conversions",
    "Generic online presence that doesn't reflect your brand's unique value",
    "Feeling overwhelmed by the technical complexities of online growth"
  ];

  const solutions = [
    {
      title: "Digital Foundations: Custom Web Design & Development",
      subtitle: "Crafting Visually Stunning & High-Performing Websites",
      description: "Beyond aesthetics, we build robust, secure, and lightning-fast websites tailored to your brand's unique identity and business goals. From engaging user experiences to intuitive navigation, every element is designed to convert visitors into loyal customers.",
      offerings: [
        "Responsive Web Design (Mobile-First Approach)",
        "Custom Website Development (WordPress, etc.)",
        "UI/UX Design & User Flow Optimization",
        "Website Redesigns & Updates",
        "E-commerce Solutions (Online Stores)"
      ],
      icon: <LayoutIcon className="h-12 w-12 text-maverick-orange" />
    },
    {
      title: "Online Visibility & Growth: SEO & Digital Strategy",
      subtitle: "Ensuring Your Business Gets Found Online",
      description: "A beautiful website is only effective if people can find it. We implement strategic SEO and digital marketing practices to boost your search rankings, drive targeted traffic, and expand your online reach specifically within the Edmonton market.",
      offerings: [
        "Local SEO Optimization",
        "Keyword Research & Content Strategy",
        "Technical SEO Audits",
        "Google My Business Optimization",
        "Digital Marketing Consulting"
      ],
      icon: <Search className="h-12 w-12 text-maverick-orange" />
    },
    {
      title: "Ongoing Support & Evolution: Maintenance & Security",
      subtitle: "Keeping Your Digital Presence Secure and Up-to-Date",
      description: "Your website is an active asset. We provide continuous maintenance, security monitoring, and performance optimization services to ensure your site remains fast, secure, and always performing at its peak, protecting your investment.",
      offerings: [
        "Website Hosting & Domain Management",
        "Security Updates & Malware Removal",
        "Performance Optimization & Speed Enhancements",
        "Regular Backups & Disaster Recovery"
      ],
      icon: <Shield className="h-12 w-12 text-maverick-orange" />
    }
  ];

  const whyUsPoints = [
    {
      title: "Local Expertise, Global Standards",
      description: "As a proud Edmonton-based company, we understand the local market nuances. We combine this local insight with global best practices in web design and development to give you a competitive edge.",
      icon: <MapPin className="h-8 w-8 text-maverick-orange" />
    },
    {
      title: "Results-Driven Approach",
      description: "Your success is our success. We don't just build websites; we build digital assets designed to deliver tangible results: more leads, better engagement, and a stronger online presence.",
      icon: <TrendingUp className="h-8 w-8 text-maverick-orange" />
    },
    {
      title: "Transparent Communication & Support",
      description: "No jargon, no surprises. We believe in clear, consistent communication throughout the entire process, providing dedicated support and guidance every step of the way.",
      icon: <Users className="h-8 w-8 text-maverick-orange" />
    },
    {
      title: "Tailored & Future-Proof Solutions",
      description: "Cookie-cutter doesn't cut it. We craft custom solutions that align perfectly with your specific business goals, ensuring your website is scalable and adaptable for future growth.",
      icon: <Zap className="h-8 w-8 text-maverick-orange" />
    },
    {
      title: "Full-Service Partnership",
      description: "From initial concept to launch and ongoing maintenance, we offer a comprehensive suite of services, becoming your long-term digital growth partner.",
      icon: <Handshake className="h-8 w-8 text-maverick-orange" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your vision, goals, and target audience. This collaborative phase lays the foundation for a truly effective digital strategy.",
      icon: <Lightbulb className="h-8 w-8 text-maverick-orange" />
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Bringing your vision to life! We create intuitive designs and robust code, ensuring your website is both beautiful and highly functional.",
      icon: <Code className="h-8 w-8 text-maverick-orange" />
    },
    {
      step: "03",
      title: "Review & Refine",
      description: "Your feedback is crucial. We present our progress, incorporate your insights, and fine-tune every detail to perfection.",
      icon: <CheckCircle className="h-8 w-8 text-maverick-orange" />
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "The exciting moment! We securely launch your new website and implement SEO best practices to ensure it's ready to attract and engage your audience.",
      icon: <Rocket className="h-8 w-8 text-maverick-orange" />
    },
    {
      step: "05",
      title: "Support & Grow",
      description: "Our partnership continues beyond launch. We provide ongoing maintenance, security, and strategic advice to ensure your site continues to thrive.",
      icon: <TrendingUp className="h-8 w-8 text-maverick-orange" />
    }
  ];

  const testimonials = [
    {
      quote: "Working with Mavericks Edge was a game-changer for our restaurant in Edmonton. Our new website has significantly increased our online orders by 40%!",
      client: "Sarah Johnson",
      company: "Local Restaurant Owner",
      industry: "Hospitality"
    },
    {
      quote: "The team delivered exactly what we needed - a professional website that showcases our services and generates quality leads consistently.",
      client: "Mike Thompson",
      company: "Thompson Law Firm", 
      industry: "Legal Services"
    },
    {
      quote: "Our e-commerce site built by Mavericks Edge has transformed our business. Online sales have doubled in just 6 months!",
      client: "Lisa Chen",
      company: "Edmonton Boutique",
      industry: "Retail"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most business websites are completed within 4-8 weeks. Simple brochure sites can be done in 3-4 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "How much does a professional website cost in Edmonton?",
      answer: "Our web design services start at $2,500 for basic business websites and go up to $15,000+ for complex e-commerce or custom applications. Factors influencing cost include complexity, features, and customization level. We offer free consultations to provide accurate estimates."
    },
    {
      question: "Do you provide website maintenance services after launch?",
      answer: "Yes! We offer comprehensive maintenance packages including security monitoring, regular updates, backups, performance optimization, and ongoing support to keep your website running smoothly."
    },
    {
      question: "What is responsive web design?",
      answer: "Responsive web design ensures your website looks and functions perfectly on all devices - desktops, tablets, and smartphones. With mobile traffic dominating, this is essential for user experience and search rankings."
    },
    {
      question: "Why is SEO important for my Edmonton business?",
      answer: "SEO helps your business get found online by potential customers in Edmonton and surrounding areas. Good SEO increases visibility in Google searches, drives targeted traffic, and helps you compete effectively in local markets."
    },
    {
      question: "Can I update the website myself?",
      answer: "Yes! We build websites on user-friendly content management systems like WordPress, and provide comprehensive training so you can easily update content, add pages, and manage your site independently."
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Transform Your Vision into a Thriving Digital Presence | Edmonton Web Design & Development"
        description="Edmonton's trusted web design partner for growth-focused businesses. We build more than websites - we craft powerful online experiences that attract customers and elevate your brand."
        keywords="Edmonton web design, web development Edmonton, website design Edmonton Alberta, custom websites Edmonton, digital growth partner Edmonton, professional web design Edmonton, Edmonton website company"
        canonicalUrl="https://mavericksedge.ca/web-design-services-edmonton"
        ogTitle="Transform Your Vision into a Thriving Digital Presence | Edmonton Web Design"
        ogDescription="Edmonton's trusted web design partner for growth-focused businesses. We craft powerful online experiences that drive real results."
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
        {/* Section 1: Hero Section - The Problem & The Promise */}
        <section className="pt-44 md:pt-48 pb-24 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/10 via-transparent to-purple-500/5"></div>
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
                  <span className="text-maverick-orange font-semibold">Your Digital Growth Partner in Edmonton</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
                  Transform Your Vision into a <span className="text-maverick-orange">Thriving Digital Presence</span>
                </h1>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We build more than websites; we craft powerful online experiences that attract customers and elevate your brand in Edmonton and beyond.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Frustrated with an outdated website? Struggling to stand out online? We partner with Edmonton businesses to create bespoke, high-performing websites that drive real results – from increased leads to enhanced brand authority.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact-edmonton-web-design">
                    <motion.div
                      className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Launch Your Digital Success - Get Free Consultation!
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Link>
                  <Link href="/portfolio-edmonton-web-design">
                    <motion.div
                      className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Our Work
                    </motion.div>
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-400">
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
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-1 rounded-2xl border border-gray-700 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Edmonton Web Development Success" 
                    className="rounded-xl w-full h-auto" 
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-maverick-orange rounded-full z-0 blur-[80px] opacity-40"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-500 rounded-full z-0 blur-[60px] opacity-30"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: The Core Challenge */}
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
                Is Your Website Working Hard Enough for Your Edmonton Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Many Edmonton businesses struggle with these common online challenges:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6"
                  >
                    <p className="text-gray-300">{point}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="text-lg text-maverick-orange font-medium mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                If any of these resonate, you're in the right place.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Your Strategic Solutions */}
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
                Tailored Web Solutions Designed for Edmonton's Business Landscape
              </h2>
            </motion.div>

            <div className="space-y-20">
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
                    <div className="p-6 bg-maverick-orange bg-opacity-10 rounded-xl inline-block mb-6">
                      {solution.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 font-heading">{solution.title}</h3>
                    <h4 className="text-xl text-maverick-orange mb-4">{solution.subtitle}</h4>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.offerings.map((offering, offeringIndex) => (
                        <li key={offeringIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-maverick-orange mr-3 flex-shrink-0" />
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-1 rounded-2xl border border-gray-700 shadow-2xl">
                      <img 
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1547658719-da2b51169166' : index === 1 ? '1460925895917-afdab827c52f' : '1563013544-824ae1b704d3'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
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

        {/* Section 4: Why Us */}
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
                Why Edmonton Businesses Trust Mavericks Edge for Their Digital Future
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300"
                >
                  <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Our Proven Process */}
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
                Our Simplified Path to Your Online Success
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-maverick-orange via-maverick-orange/50 to-transparent hidden lg:block"></div>
              
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                  >
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2 lg:text-left' : 'lg:text-right'}`}>
                      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-8 border border-gray-700 relative">
                        <div className="text-5xl font-bold text-maverick-orange/30 mb-4">{step.step}</div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Client Success Stories */}
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
                Edmonton Businesses Thriving Online, Thanks to Mavericks Edge
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#121212] to-[#1A1A1A] rounded-xl p-6 border border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.client}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                    <p className="text-xs text-maverick-orange">{testimonial.industry}</p>
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
                  See More of Our Work
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
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
                Your Questions, Answered: Insights into Web Design & Development
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

        {/* Section 8: Final CTA */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-br from-maverick-orange/10 via-transparent to-purple-500/10">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Your Digital Journey Starts Here. Let's Build Something Remarkable.
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Whether you're starting fresh or looking to revitalize your online presence, our Edmonton team is ready to help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/contact-edmonton-web-design">
                  <motion.div
                    className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Your Free Digital Strategy Session!
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
                    Call Us Directly: (250) 883-8849
                  </motion.div>
                </a>
              </div>
              <p className="text-sm text-gray-400">
                Free consultation • No obligation • Fast response within 24 hours
              </p>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </div>
  );
}
