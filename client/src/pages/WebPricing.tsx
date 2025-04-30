
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Check, Shield, Cpu, Tool, Clock, BarChart } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

const WebPricing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="pt-44 md:pt-48 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Web Solutions <span className="text-maverick-orange">That Grow With You</span></h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mb-8">
                We believe in building websites that do more than just look pretty – they're designed to connect with your audience and help your business thrive. No technical jargon, just friendly support and solutions that make sense for your needs.
              </p>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                  <Heart className="mr-2 h-5 w-5" /> Let's chat about your project
                </a>
              </Link>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-[#1A1A1A] p-2 rounded-lg border border-gray-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Web Design" 
                  className="rounded-lg w-full h-auto transform transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Website Solutions <span className="text-maverick-orange">You'll Love</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Our packages are crafted with heart and designed to give you exactly what you need – no more, no less.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* EdgeStart Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeStart Package</h3>
              <p className="text-maverick-orange mb-4 font-medium">Perfect for startups & small organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$850</span>
                <span className="text-[#AAAAAA] ml-2">CAD</span>
                <span className="block text-[#AAAAAA] mt-1">One-time payment</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Up to 6 core pages",
                  "Basic contact form",
                  "Mobile-responsive design",
                  "SEO & Schema Markup",
                  "Security essentials",
                  "Google Analytics 4 setup",
                  "Business profile setup",
                  "Accessibility basics",
                  "Performance report"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgeGrow Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#121212] rounded-xl p-8 border-2 border-maverick-orange shadow-lg shadow-maverick-orange/20 flex flex-col h-full relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeGrow Package</h3>
              <p className="text-maverick-orange mb-4 font-medium">For growing businesses & organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$1,850</span>
                <span className="text-[#AAAAAA] ml-2">CAD</span>
                <span className="block text-[#AAAAAA] mt-1">One-time payment</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Up to 20 custom-designed pages",
                  "Advanced forms with calendar",
                  "Mobile-first responsive design",
                  "Full on-page SEO implementation",
                  "Advanced Schema Markup",
                  "WCAG 2.2 Level AA accessibility",
                  "Core Web Vitals optimization",
                  "Security suite protection",
                  "CRM & 3rd party integrations",
                  "Blog or case study section",
                  "30 days post-launch support"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary w-full text-center py-3 rounded-md transition-all duration-300">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgeLead Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeLead Package</h3>
              <p className="text-maverick-orange mb-4 font-medium">For advanced business needs</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$3,750</span>
                <span className="text-[#AAAAAA] ml-2">CAD+</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Full-featured web application",
                  "Authentication & file uploads",
                  "User accounts and dashboards",
                  "Headless CMS integration",
                  "Payment gateway setup",
                  "API integration",
                  "On-Page SEO & full Schema",
                  "Accessibility compliance",
                  "Analytics with event tracking",
                  "Advanced security suite",
                  "CRM & email automation",
                  "60 days post-launch support"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>
          </div>

          {/* EdgeBoost */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeBoost Package</h3>
                <p className="text-maverick-orange mb-4 font-medium">Perfect for existing websites that need targeted improvements</p>
                <p className="text-[#AAAAAA] mb-6">
                  Already have a website but it needs some love? Our EdgeBoost package is designed to refresh and optimize your existing site without a full rebuild.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Starting at $300</span>
                  <span className="text-[#AAAAAA] ml-2">CAD+</span>
                </div>
                <Link href="/contact">
                  <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                    Learn More
                  </a>
                </Link>
              </div>
              <ul className="space-y-3">
                {[
                  "Website performance audit & speed optimization",
                  "Design refresh (layout, spacing, and visual hierarchy)",
                  "Content clarity & messaging improvements",
                  "On-Site & technical SEO implementation",
                  "Accessibility enhancements",
                  "Conversion & call-to-action optimization",
                  "Mobile responsiveness improvements"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Care Plans */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">We'll Take Care of Your <span className="text-maverick-orange">Digital Home</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Your website needs regular love and attention to stay secure, fast, and effective. Our care plans take the worry off your shoulders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* EdgeCare Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Shield className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeCare Plan</h3>
              <p className="text-maverick-orange mb-4 font-medium">Foundational security & upkeep</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">$75</span>
                <span className="text-[#AAAAAA] ml-2">CAD/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Core Software Updates",
                  "1 hour of content updates per month",
                  "Security Monitoring",
                  "Daily Cloud Backups",
                  "Basic Performance Monitoring",
                  "Uptime Monitoring (24/7)",
                  "Database Optimization Check",
                  "Email support (48-hour response)"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgeAdvance Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#121212] rounded-xl p-8 border-2 border-maverick-orange shadow-lg shadow-maverick-orange/20 flex flex-col h-full relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <Tool className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeAdvance Plan</h3>
              <p className="text-maverick-orange mb-4 font-medium">Maintaining site health + dedicated support</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">$175</span>
                <span className="text-[#AAAAAA] ml-2">CAD/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "All EdgeCare Plan features",
                  "Additional 2 hours of dedicated support (total 3 hours)",
                  "Ongoing technical SEO & keyword rank tracking",
                  "Core Web Vitals tuning & SEO content",
                  "CRM/email automation maintenance",
                  "Priority support (24-hour response)",
                  "Monthly Website Health Report",
                  "Quarterly strategy check-ins"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary w-full text-center py-3 rounded-md transition-all duration-300">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgePro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BarChart className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgePro Plan</h3>
              <p className="text-maverick-orange mb-4 font-medium">Proactive optimization & strategic oversight</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">$400</span>
                <span className="text-[#AAAAAA] ml-2">CAD+/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "All EdgeAdvance Plan features",
                  "Up to 10 hours/month of development or consulting",
                  "UX enhancements & new feature development",
                  "API integrations as needed",
                  "Proactive performance deep dives",
                  "Staging Site Access for testing",
                  "Monthly Performance & Strategy Review Call",
                  "Quarterly competitor & SERP audit report"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>
          </div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-[#1A1A1A] rounded-xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-6 font-heading">Need Additional Support?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Clock className="h-8 w-8 text-maverick-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Hourly Rate</h4>
                  <p className="text-[#AAAAAA] mb-2">
                    For web development, design, and technical support.
                  </p>
                  <p className="text-xl font-semibold text-maverick-orange">$85/hour</p>
                </div>
              </div>
              <div className="flex items-start">
                <Cpu className="h-8 w-8 text-maverick-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Support Block</h4>
                  <p className="text-[#AAAAAA] mb-2">
                    Pre-purchase a block of support hours at a discounted rate.
                  </p>
                  <p className="text-xl font-semibold text-maverick-orange">4 hours for $300</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-[#AAAAAA] mb-4">
                Don't see what you're looking for? We can create a custom solution just for you.
              </p>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  <Heart className="mr-2 h-5 w-5" /> Talk to us about your needs
                </a>
              </Link>
            </div>
          </motion.div>
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
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Why Our Clients <span className="text-maverick-orange">Love Working With Us</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We believe in building relationships, not just websites. Here's what makes us different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "We Speak Human",
                description: "No technical jargon, just clear communication that makes sense to you."
              },
              {
                title: "Your Success Is Our Success",
                description: "We measure our success by how well your website helps you achieve your goals."
              },
              {
                title: "We're In It For The Long Haul",
                description: "We build lasting relationships and are here to support you as you grow."
              },
              {
                title: "Attention To Detail",
                description: "The little things matter, and we pay attention to every pixel and interaction."
              },
              {
                title: "Transparent Pricing",
                description: "No hidden fees or surprises - just honest, upfront pricing."
              },
              {
                title: "We Care About Your Business",
                description: "We take the time to understand your business and your customers."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 h-full"
              >
                <h3 className="text-xl font-semibold mb-3 font-heading">{item.title}</h3>
                <p className="text-[#AAAAAA]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
};

export default WebPricing;
