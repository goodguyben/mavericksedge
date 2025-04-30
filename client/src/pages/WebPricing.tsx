import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, ArrowRight, Info, Code, Shield, Zap, Clock, Users, Server, Gauge, HelpCircle } from 'lucide-react';
import { Link } from 'wouter';
import ContactSection from '@/components/sections/ContactSection';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  })
};

const packageOptions = [
  {
    id: "edgestart",
    name: "EdgeStart",
    description: "Perfect for startups, small businesses, solo entrepreneurs or small nonprofits/charities that need a clean online presence fast.",
    price: "$850",
    oneTime: true,
    popular: false,
    features: [
      "Up to 6 core pages",
      "Basic contact form",
      "Mobile-responsive design",
      "On-Page SEO & Schema Markup",
      "Security essentials (SSL/DDoS Protection)",
      "Google Analytics 4 setup",
      "Google Business Profile setup",
      "Apple Business Connect setup",
      "Accessibility basics (WCAG 2.1 Level AA)",
      "Performance check & report"
    ],
    icon: <Code size={24} />
  },
  {
    id: "edgegrow",
    name: "EdgeGrow",
    description: "Perfect for growing SMBs, professional service providers, nonprofits/charities, or established organizations that need a strategic, scalable, and high-performance digital platform.",
    price: "$1,850",
    oneTime: true,
    popular: true,
    features: [
      "Up to 20 custom-designed pages",
      "Advanced multi-step contact forms",
      "Calendar and file upload options",
      "Mobile-first responsive design with modern UI/UX",
      "Full On-Page SEO implementation",
      "Advanced Schema Markup",
      "WCAG 2.2 Level AA accessibility",
      "Core Web Vitals performance optimization",
      "Security suite (SSL, DDoS, bot filtering)",
      "Advanced Google Analytics setup"
    ],
    icon: <Zap size={24} />
  },
  {
    id: "edgelead",
    name: "EdgeLead",
    description: "Perfect for funded startups, growing e-commerce brands, membership-based organizations, educational platforms, SaaS providers, or any business needing a scalable, high-functionality website or custom web app.",
    price: "$3,750+",
    oneTime: true,
    popular: false,
    features: [
      "Full-featured web app or e-commerce build",
      "Authentication & file uploads",
      "Secure user accounts and dashboard features",
      "Headless CMS integration",
      "Payment gateway setup",
      "Advanced API integrations",
      "Full Schema implementation",
      "Core Web Vitals & performance optimization",
      "Accessibility compliance (WCAG 2.2 AA+)",
      "Google Analytics 4 with enhanced tracking"
    ],
    icon: <Server size={24} />
  }
];

const carePlans = [
  {
    id: "edgecare",
    name: "EdgeCare",
    description: "Foundational security & upkeep for peace of mind",
    price: "$75",
    period: "per month",
    popular: false,
    features: [
      "Core Software Updates",
      "1 hour of content updates per month",
      "Security Monitoring",
      "Daily Cloud Backups",
      "Basic Performance Monitoring",
      "Uptime Monitoring (24/7)",
      "Database Optimization Check",
      "Email support (48-hour response)"
    ],
    icon: <Shield size={24} />
  },
  {
    id: "edgeadvance",
    name: "EdgeAdvance",
    description: "Maintaining site health + dedicated support time for growth",
    price: "$175",
    period: "per month",
    popular: true,
    features: [
      "All EdgeCare Plan features",
      "3 hours total of dedicated support",
      "Ongoing technical SEO optimization",
      "Core Web Vitals tuning",
      "1 SEO content piece per month",
      "Light CRM/email integration maintenance",
      "Priority support (24-hour response)",
      "Monthly Website Health Report",
      "Quarterly strategy check-ins"
    ],
    icon: <Gauge size={24} />
  },
  {
    id: "edgepro",
    name: "EdgePro",
    description: "Proactive optimization, enhanced support & strategic oversight",
    price: "$400+",
    period: "per month",
    popular: false,
    features: [
      "All EdgeAdvance Plan features",
      "Up to 10 hours/month of development time",
      "UX enhancements & new feature development",
      "Deep performance optimization",
      "Staging Site for testing updates",
      "Monthly Strategy Review Call (2 hrs)",
      "Quarterly competitor & SERP audit report",
      "Priority phone & email support"
    ],
    icon: <Users size={24} />
  }
];

// FAQ Data
const faqs = [
  {
    question: "What's included in the EdgeStart package?",
    answer: "EdgeStart includes everything a small business or startup needs to establish a professional online presence. You'll get up to 6 core pages, mobile-responsive design, basic contact forms, essential SEO setup including schema markup, security fundamentals with SSL/DDoS protection, Google Analytics 4 setup, and Google/Apple Business listing setup. It's the perfect starting point for organizations that need a quality website without all the extras."
  },
  {
    question: "How long does it take to complete an EdgeGrow website?",
    answer: "An EdgeGrow website typically takes 4-6 weeks to complete from kickoff to launch. This timeline includes the discovery phase, design approvals, development, content integration, testing, and final refinements. We maintain transparent communication throughout the process with regular updates and milestones so you always know where your project stands."
  },
  {
    question: "Do I need ongoing website maintenance?",
    answer: "Yes, website maintenance is essential for security, performance, and keeping your site healthy over time. Without regular updates, websites become vulnerable to security threats, experience performance issues, and may develop compatibility problems with browsers and devices. Our EdgeCare plans provide different levels of ongoing support to ensure your website remains secure, fast, and functioning optimally."
  },
  {
    question: "Can you update my existing website instead of building a new one?",
    answer: "Absolutely! Our EdgeBoost package (starting at $300) is designed specifically for organizations with existing websites that need strategic improvements without a complete rebuild. After a thorough assessment, we'll enhance performance, design elements, content clarity, SEO implementation, accessibility standards, and conversion optimization—all customized to your specific needs."
  },
  {
    question: "What payment options do you offer for larger web projects?",
    answer: "For larger projects like EdgeGrow and EdgeLead, we offer flexible payment plans to make the investment more manageable. Typically, this includes a deposit to begin work, milestone payments during development, and a final payment upon project completion. We can customize a payment schedule that works for your organization's cash flow and budget constraints."
  },
  {
    question: "Do you offer discounts for nonprofit organizations?",
    answer: "Yes, we offer special pricing for registered nonprofit organizations and charities. We believe in supporting organizations that make a positive impact, and our nonprofit discounts reflect this commitment. Please mention your nonprofit status during our initial consultation, and we'll be happy to discuss the special rates available for your project."
  }
];

export default function WebPricing() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("packages");

  const toggleFaq = (index: number) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212]"
    >
      {/* Hero Section */}
      <section className="pt-44 md:pt-48 pb-20 px-5 md:px-10">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Web & Digital Solutions <span className="text-maverick-orange">Pricing</span></h1>
            <p className="text-xl text-[#AAAAAA] mb-8 max-w-3xl mx-auto">
              Strategic pricing designed for SMBs, startups, and nonprofits. Transparent packages to establish and grow your digital presence with confidence.
            </p>
            
            {/* Tab Selection */}
            <div className="inline-flex bg-[#1A1A1A] p-1 rounded-lg border border-gray-800 mb-12">
              <button 
                onClick={() => setActiveTab("packages")}
                className={`px-6 py-3 rounded-md text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === "packages" 
                    ? "bg-maverick-orange text-white" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Project Packages
              </button>
              <button 
                onClick={() => setActiveTab("care")}
                className={`px-6 py-3 rounded-md text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === "care" 
                    ? "bg-maverick-orange text-white" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Website Care Plans
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Pricing Section */}
      <AnimatePresence mode="wait">
        {activeTab === "packages" && (
          <motion.section
            key="packages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-10 px-5 md:px-10 pb-20"
          >
            <div className="container mx-auto">
              {/* Package Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {packageOptions.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    custom={index}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-2xl ${
                      pkg.popular 
                        ? 'border-2 border-maverick-orange' 
                        : 'border border-gray-800'
                    } bg-gradient-to-b from-[#1E1E1E] to-[#262626] shadow-xl`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="p-8">
                      {/* Package Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                          {pkg.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-heading">{pkg.name}</h3>
                      </div>
                      
                      <p className="text-[#AAAAAA] mb-6 h-24 md:h-32 lg:h-40">{pkg.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold">{pkg.price}</span>
                        {pkg.oneTime && <span className="text-[#AAAAAA] ml-2">one-time</span>}
                      </div>
                      
                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <Check className="h-5 w-5 text-maverick-orange shrink-0 mt-0.5 mr-3" />
                            <span className="text-[#DDDDDD]">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <Link href="/contact">
                        <a className={`block text-center w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                          pkg.popular 
                            ? 'bg-maverick-orange hover:bg-opacity-90 text-white' 
                            : 'border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10'
                        }`}>
                          Get Started
                        </a>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* EdgeBoost Package */}
              <motion.div
                variants={fadeIn}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-16 rounded-2xl bg-gradient-to-r from-[#1E1E1E] to-[#262626] border border-gray-800 p-8 lg:p-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                        <Gauge size={24} />
                      </div>
                      <h3 className="text-2xl font-bold font-heading">EdgeBoost</h3>
                    </div>
                    <p className="text-xl mb-3">Website Enhancement Package</p>
                    <p className="text-[#AAAAAA] mb-4 max-w-xl">
                      Perfect for organizations with an existing website that need targeted improvements without a full rebuild.
                    </p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">Starting at $300</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                      {[
                        "Website performance audit & optimization",
                        "Design refresh (layout, spacing, and visual hierarchy)",
                        "Content clarity & messaging improvements",
                        "On-Site & technical SEO implementation",
                        "Accessibility enhancements (WCAG 2.1)",
                        "Conversion & call-to-action optimization",
                        "Mobile responsiveness improvements",
                        "Custom scope based on site needs"
                      ].map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * idx, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <Check className="h-5 w-5 text-maverick-orange shrink-0 mt-0.5 mr-3" />
                          <span className="text-[#DDDDDD]">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:min-w-[200px]">
                    <Link href="/contact">
                      <a className="block text-center w-full py-4 px-6 rounded-lg font-medium bg-maverick-orange hover:bg-opacity-90 text-white transition-all duration-300">
                        Get a Quote
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              {/* Support Rate */}
              <motion.div
                variants={fadeIn}
                custom={5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 rounded-2xl bg-[#1A1A1A] border border-gray-800 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                        <Clock size={20} />
                      </div>
                      <h3 className="text-xl font-bold">Hourly Support</h3>
                    </div>
                    <p className="text-[#AAAAAA] mb-2">
                      For on-demand web development, design, and technical support needs
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                    <div>
                      <p className="text-sm text-[#AAAAAA]">Hourly Rate</p>
                      <p className="text-2xl font-bold">$85<span className="text-sm font-normal text-[#AAAAAA]">/hour</span></p>
                    </div>
                    <div>
                      <p className="text-sm text-[#AAAAAA]">Support Block</p>
                      <p className="text-2xl font-bold">$300<span className="text-sm font-normal text-[#AAAAAA]"> for 4 hours</span></p>
                    </div>
                    <Link href="/contact">
                      <a className="whitespace-nowrap text-center py-3 px-6 rounded-lg font-medium border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10 transition-all duration-300">
                        Get Support
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              {/* Custom Solutions */}
              <motion.div
                variants={fadeIn}
                custom={6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-maverick-orange bg-opacity-10 border border-maverick-orange border-opacity-30 mb-3">
                  <Info className="h-5 w-5 text-maverick-orange mr-2" />
                  <span>Need a custom solution?</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Don't see the perfect fit?</h3>
                <p className="text-[#AAAAAA] max-w-2xl mx-auto mb-6">
                  We can tailor a custom package incorporating services to meet your specific goals and budget requirements.
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center py-3 px-8 rounded-lg font-medium bg-maverick-orange hover:bg-opacity-90 text-white transition-all duration-300">
                    Request Custom Quote
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        )}
        
        {activeTab === "care" && (
          <motion.section
            key="care"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-10 px-5 md:px-10 pb-20"
          >
            <div className="container mx-auto">
              {/* Care Plan Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Website Care Plans</h2>
                <p className="text-[#AAAAAA] max-w-2xl mx-auto">
                  Ongoing support and maintenance to keep your website secure, up-to-date, and performing at its best.
                </p>
              </motion.div>
              
              {/* Comparison Table */}
              <div className="overflow-x-auto mb-16">
                <div className="min-w-[900px]">
                  <div className="grid grid-cols-4 gap-6">
                    {/* Table Header */}
                    <div className="col-span-1 pt-8">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-xl font-bold mb-4">Plan Features</h3>
                      </motion.div>
                      <div className="space-y-6">
                        {[
                          "Monthly Price",
                          "Support Time Included",
                          "Core Updates",
                          "Security Monitoring",
                          "Daily Backups",
                          "Performance Monitoring",
                          "SEO Maintenance",
                          "Content Updates",
                          "Response Time",
                          "Health Reports",
                          "Strategy Calls"
                        ].map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * idx, duration: 0.3 }}
                            className="h-12 flex items-center"
                          >
                            <span className="font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Plan Columns */}
                    {carePlans.map((plan, planIdx) => (
                      <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * planIdx, duration: 0.5 }}
                        className={`col-span-1 rounded-xl ${
                          plan.popular 
                            ? 'border-2 border-maverick-orange bg-[#1E1E1E]' 
                            : 'border border-gray-800 bg-[#1A1A1A]'
                        } p-6 relative`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-6 bg-maverick-orange text-white px-4 py-1 text-sm font-semibold rounded-b-lg">
                            Most Popular
                          </div>
                        )}
                        
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                              {plan.icon}
                            </div>
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                          </div>
                          <p className="text-sm text-[#AAAAAA] mb-4">{plan.description}</p>
                          <div className="mb-4">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-[#AAAAAA] ml-1">{plan.period}</span>
                          </div>
                          <Link href="/contact">
                            <a className={`block text-center w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                              plan.popular 
                                ? 'bg-maverick-orange hover:bg-opacity-90 text-white' 
                                : 'border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10'
                            }`}>
                              Choose Plan
                            </a>
                          </Link>
                        </div>
                        
                        {/* Plan Features */}
                        <div className="space-y-6 pt-2">
                          <div className="h-12 flex items-center justify-center text-lg font-bold">
                            {plan.price}<span className="text-sm font-normal text-[#AAAAAA] ml-1">/mo</span>
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            {plan.id === "edgecare" && <span>1 hour</span>}
                            {plan.id === "edgeadvance" && <span>3 hours</span>}
                            {plan.id === "edgepro" && <span>Up to 10 hours</span>}
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            <Check className="h-5 w-5 text-maverick-orange" />
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            <Check className="h-5 w-5 text-maverick-orange" />
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            <Check className="h-5 w-5 text-maverick-orange" />
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            {plan.id === "edgecare" && <span>Basic</span>}
                            {plan.id === "edgeadvance" && <span>Advanced</span>}
                            {plan.id === "edgepro" && <span>Comprehensive</span>}
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            {plan.id === "edgecare" && <span>—</span>}
                            {plan.id === "edgeadvance" && <span>Basic</span>}
                            {plan.id === "edgepro" && <span>Advanced</span>}
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            {plan.id === "edgecare" && <span>1 hour</span>}
                            {plan.id === "edgeadvance" && <span>3 hours</span>}
                            {plan.id === "edgepro" && <span>10 hours</span>}
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            {plan.id === "edgecare" && <span>48 hours</span>}
                            {plan.id === "edgeadvance" && <span>24 hours</span>}
                            {plan.id === "edgepro" && <span>Priority</span>}
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            {plan.id === "edgecare" && <span>—</span>}
                            {plan.id === "edgeadvance" && <span>Monthly</span>}
                            {plan.id === "edgepro" && <span>Comprehensive</span>}
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            {plan.id === "edgecare" && <span>—</span>}
                            {plan.id === "edgeadvance" && <span>Quarterly</span>}
                            {plan.id === "edgepro" && <span>Monthly</span>}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Additional Info Card */}
              <motion.div
                variants={fadeIn}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl bg-[#1E1E1E] border border-gray-800 p-8 lg:p-10 mb-12"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 font-heading">Need Additional Support?</h3>
                    <p className="text-[#AAAAAA] mb-6 lg:mb-0 max-w-xl">
                      Whether you need a quick task handled or have ongoing requirements outside our standard plans, we offer flexible support options.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#121212] p-6 rounded-xl border border-gray-800">
                      <h4 className="text-lg font-bold mb-1">Hourly Support</h4>
                      <p className="text-[#AAAAAA] text-sm mb-3">For quick, one-off tasks</p>
                      <p className="text-2xl font-bold mb-4">$85<span className="text-sm font-normal text-[#AAAAAA]">/hour</span></p>
                      <Link href="/contact">
                        <a className="inline-flex items-center text-maverick-orange hover:underline">
                          Get started <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Link>
                    </div>
                    
                    <div className="bg-[#121212] p-6 rounded-xl border border-gray-800">
                      <h4 className="text-lg font-bold mb-1">Support Block</h4>
                      <p className="text-[#AAAAAA] text-sm mb-3">Save with pre-purchased hours</p>
                      <p className="text-2xl font-bold mb-4">$300<span className="text-sm font-normal text-[#AAAAAA]"> for 4 hours</span></p>
                      <Link href="/contact">
                        <a className="inline-flex items-center text-maverick-orange hover:underline">
                          Get started <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Custom Care Plan */}
              <motion.div
                variants={fadeIn}
                custom={5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-maverick-orange bg-opacity-10 border border-maverick-orange border-opacity-30 mb-3">
                  <Info className="h-5 w-5 text-maverick-orange mr-2" />
                  <span>Need a custom care plan?</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Let's create a tailored support plan</h3>
                <p className="text-[#AAAAAA] max-w-2xl mx-auto mb-6">
                  We can customize a maintenance and support program specific to your organization's needs and website complexity.
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center py-3 px-8 rounded-lg font-medium bg-maverick-orange hover:bg-opacity-90 text-white transition-all duration-300">
                    Request Custom Plan
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="py-20 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-maverick-orange bg-opacity-10 mb-4">
              <HelpCircle className="h-5 w-5 text-maverick-orange" />
            </div>
            <h2 className="text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-[#AAAAAA] max-w-2xl mx-auto">
              Find answers to common questions about our web development packages and care plans
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`border-b border-gray-800 last:border-b-0 py-5 ${index === faqs.length - 1 ? 'mb-0' : 'mb-2'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-xl font-medium pr-8">{faq.question}</h3>
                  <div className={`transition-transform duration-300 ${selectedFaq === index ? 'rotate-90' : ''}`}>
                    <ChevronRight className="h-5 w-5 text-maverick-orange" />
                  </div>
                </button>
                <AnimatePresence>
                  {selectedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[#AAAAAA]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 md:px-10 bg-[#121212] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1.5 bg-gradient-to-r from-transparent via-maverick-orange to-transparent opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Build Your <span className="text-maverick-orange">Digital Presence</span>?
            </h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto mb-10">
              Schedule a free consultation to discuss your project needs and discover how we can help your organization thrive online.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center py-4 px-8 rounded-lg text-lg font-medium bg-maverick-orange hover:bg-opacity-90 text-white transition-all duration-300">
                Get Started Today
              </a>
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-maverick-orange rounded-full filter blur-[180px] opacity-10"></div>
        <div className="absolute top-20 left-0 w-60 h-60 bg-maverick-orange rounded-full filter blur-[120px] opacity-5"></div>
      </section>

      <ContactSection />
    </motion.div>
  );
}