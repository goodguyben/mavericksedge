import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { 
  ChevronDown, Check, ArrowRight, Zap, Shield, Clock, Rocket, 
  Laptop, Award, Code, Globe, Database, Server, Monitor, HeartHandshake,
  RefreshCcw, LineChart, Calendar, HelpCircle, Compass, Star, BarChartBig,
  Settings, Wrench
} from 'lucide-react';
import ContactSection from '@/components/sections/ContactSection';
import PricingCard from '@/components/cards/PricingCard';
import { cn } from '@/lib/utils';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Package data from the document
const projectPackages = [
  {
    id: "edgestart",
    title: "EdgeStart Package",
    subtitle: "Perfect for startups and small businesses that need a clean online presence fast",
    price: "$850",
    oneTime: true,
    popular: false,
    features: [
      "Up to 6 core pages",
      "Basic contact form",
      "Mobile-responsive design", 
      "On-Page SEO & Schema Markup implementation",
      "Security essentials (SSL/TSL Certificate, DDoS Protection)",
      "Google Analytics 4 setup",
      "Google Business Profile & Apple Business Connect setup",
      "Accessibility basics (WCAG 2.1 Level AA)",
      "Performance check & report"
    ],
    icon: <Rocket size={24} className={`text-maverick-orange`} />,
    color: "border-maverick-orange"
  },
  {
    id: "edgegrow",
    title: "EdgeGrow Package",
    subtitle: "For established organizations that need a strategic, scalable digital platform",
    price: "$1,850",
    oneTime: true,
    popular: true,
    features: [
      "Up to 20 custom-designed pages",
      "Advanced multi-step/contact forms with calendar and file upload options",
      "Mobile-first responsive design with modern UI/UX",
      "Full On-Page SEO implementation with structured content and internal linking",
      "Advanced Schema Markup (services, FAQs, reviews, locations)",
      "WCAG 2.2 Level AA accessibility enhancements",
      "Core Web Vitals performance optimization (LCP, CLS, TTFB)",
      "Security suite (SSL/TSL Certificate, DDoS Protection, bot filtering)",
      "Google Analytics 4 with conversion tracking",
      "Goal funnels and event tracking setup",
      "Comprehensive Google Business presence with posts schedule",
      "Basic content creation guidance and templates"
    ],
    icon: <LineChart size={24} className="text-white" />,
    color: "border-blue-500"
  },
  {
    id: "edgelead",
    title: "EdgeLead Package",
    subtitle: "Custom web apps & e-commerce solutions with advanced functionality",
    price: "Starting at $3,750+",
    oneTime: true,
    popular: false,
    features: [
      "Full-featured web application or e-commerce build",
      "Authentication & file uploads",
      "Secure user accounts and dashboard features",
      "Headless CMS integration (e.g., Sanity, Strapi)",
      "Payment gateway setup (Stripe, Square, etc.)",
      "API integration (booking, CRM, inventory, or 3rd-party tools)",
      "On-Page SEO & full Schema implementation",
      "Core Web Vitals & performance optimization (Lighthouse standards)",
      "Accessibility compliance (WCAG 2.2 AA+)",
      "Google Analytics 4 with e-commerce/conversion setup",
      "Complete performance monitoring system",
      "Staging environment for testing and QA"
    ],
    icon: <Database size={24} className="text-white" />,
    color: "border-green-400"
  },
  {
    id: "edgeboost",
    title: "EdgeBoost Package",
    subtitle: "Targeted improvements for existing websites without a full rebuild",
    price: "Starting at $300+",
    oneTime: true,
    popular: false,
    features: [
      "Website performance audit & speed optimization",
      "Design refresh (layout, spacing, and visual hierarchy)",
      "Content clarity & messaging improvements",
      "On-Site & technical SEO implementation",
      "Accessibility enhancements based on WCAG 2.1 standards",
      "Conversion & call-to-action optimization",
      "Mobile responsiveness and usability improvements",
      "Custom scope tailored to site needs during consultation"
    ],
    icon: <Zap size={24} className="text-maverick-orange" />,
    color: "border-purple-400"
  }
];

const carePackages = [
  {
    id: "edgecare",
    title: "EdgeCare Plan",
    subtitle: "Foundational security & upkeep for peace of mind",
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
    icon: <Shield size={24} className="text-maverick-orange" />,
    color: "border-maverick-orange"
  },
  {
    id: "edgeadvance",
    title: "EdgeAdvance Plan",
    subtitle: "Maintaining site health + dedicated support time for growth",
    price: "$175",
    period: "per month",
    popular: true,
    features: [
      "All Essentials Care Plan features",
      "Additional 2 hours of dedicated support (total 3 hours)",
      "Covers: edits, content updates, troubleshooting",
      "Ongoing technical SEO, keyword rank tracking",
      "Core Web Vitals tuning and 1 SEO content",
      "Light CRM/email automation and 3rd party integration maintenance",
      "Priority phone/email support (24-hour response)",
      "Monthly Website Health Report Summary",
      "Quarterly strategy check-ins (analytics insights + roadmap)"
    ],
    icon: <RefreshCcw size={24} className="text-white" />,
    color: "border-blue-500"
  },
  {
    id: "edgepro",
    title: "EdgePro Plan",
    subtitle: "Proactive optimization, enhanced support & strategic oversight",
    price: "$400+",
    period: "per month",
    popular: false,
    features: [
      "All Business Growth Plan features",
      "Up to 10 hours/month of development, design, or consulting",
      "UX enhancements, new feature development, or API integrations",
      "Proactive performance deep dives (SEO, speed, caching, behavior tracking)",
      "Staging Site Access (for testing updates)",
      "Monthly Performance & Strategy Review Call (2 hours)",
      "Quarterly competitor & SERP audit report"
    ],
    icon: <BarChartBig size={24} className="text-white" />,
    color: "border-green-400"
  },
  {
    id: "consultation",
    title: "Consultation Rate",
    subtitle: "For web development, design, technical support",
    price: "$85",
    period: "per hour",
    popular: false,
    extras: {
      title: "Support Block",
      description: "4 hours for $300"
    },
    features: [
      "Expert assistance when you need it",
      "Web development and technical solutions",
      "Design updates and improvements",
      "Training on website management",
      "SEO and performance consulting",
      "Technical troubleshooting",
      "Website structure and architecture planning"
    ],
    icon: <Calendar size={24} className="text-maverick-orange" />,
    color: "border-purple-400"
  }
];

// FAQs
const faqs = [
  {
    question: "What's the process for building my website?",
    answer: "Our website development process is collaborative and transparent. We start with a discovery call to understand your goals and requirements. Next, we create a sitemap and wireframes for your approval. Then, we develop the design concepts and refine them based on your feedback. Once the design is approved, we build the website with all functionality, implement SEO best practices, and thoroughly test everything. Before launch, we'll train you on using your new website. After launch, we offer ongoing support through our care plans to ensure your site remains secure, updated, and performing well."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Project timelines vary based on your specific needs and project scope. Generally, an EdgeStart package can be completed in 2-3 weeks, EdgeGrow projects typically take 4-6 weeks, and EdgeLead custom solutions may require 8-12 weeks or more depending on complexity. During our initial consultation, we'll provide you with a realistic timeline specific to your project needs. We pride ourselves on clear communication throughout the process and sticking to agreed-upon deadlines."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look fantastic and function perfectly on all devices – smartphones, tablets, laptops, and desktop computers. We use responsive design techniques that automatically adjust your site's layout based on screen size. During our testing phase, we thoroughly check your website on multiple devices and browsers to guarantee a seamless experience for all visitors, regardless of how they access your site."
  },
  {
    question: "Do you provide website hosting?",
    answer: "Yes, all our care plans include reliable, high-performance hosting on our optimized servers. Our hosting infrastructure is specifically designed for the technologies we build with, ensuring maximum security, speed, and uptime. This approach allows us to provide comprehensive support and maintenance since we have full access to manage your site environment. If you have an existing hosting provider you'd prefer to use, we can discuss this option during our initial consultation, though we recommend our hosting for the best performance and support experience."
  },
  {
    question: "Will I be able to update the website myself?",
    answer: "Yes! We build all our websites on user-friendly content management systems (CMS) that make it easy for you to update content, add pages, and make basic changes. We provide training and documentation tailored to your specific website, showing you exactly how to make the updates you'll need most frequently. For more complex updates or technical changes, our care plans include support hours, or you can purchase additional support time as needed. We believe in empowering you to manage your digital presence while offering expert support when you need it."
  },
  {
    question: "What payment options do you offer?",
    answer: "We offer flexible payment options to accommodate your needs. For project-based work (EdgeStart, EdgeGrow, and EdgeLead packages), we typically require a 50% deposit to begin work, with the remaining balance due upon completion. For larger projects, we can structure a phased payment plan aligned with project milestones. Our care plans are billed monthly, with discounts available for annual commitments. We accept payments via credit card, direct bank transfer, and e-transfers. If you have specific payment requirements, let us know during our initial discussions, and we'll work to find a solution that works for you."
  },
  {
    question: "Do you offer special pricing for nonprofits?",
    answer: "Yes, we're proud to support organizations making positive impacts in our communities. Registered nonprofits and charities qualify for special discounted rates on our services – typically 15% off our standard pricing for both project work and care plans. Additionally, we provide enhanced support for grant applications and offer flexible payment terms aligned with funding cycles. Please mention your nonprofit status during our initial consultation, and we'll be happy to discuss how we can best support your organization's digital needs while respecting budget constraints."
  }
];

export default function WebPricing() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("projects");
  const projectsRef = useRef<HTMLDivElement>(null);
  const careRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  };

  const scrollToSection = (section: string) => {
    setActiveTab(section);

    if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "care" && careRef.current) {
      careRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (projectsRef.current && careRef.current) {
        const projectsPosition = projectsRef.current.offsetTop;
        const carePosition = careRef.current.offsetTop;

        if (scrollPosition >= carePosition) {
          setActiveTab("care");
        } else if (scrollPosition >= projectsPosition) {
          setActiveTab("projects");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212]"
    >
      {/* Hero Section */}
      <section className="pt-44 md:pt-48 pb-20 px-5 md:px-10 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center p-3 rounded-full bg-maverick-orange bg-opacity-10 mb-5"
            >
              <Globe className="h-6 w-6 text-maverick-orange" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 font-heading"
            >
              Web Solutions <span className="text-maverick-orange">Pricing</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-[#DDDDDD] mb-10 max-w-3xl mx-auto"
            >
              Transparent, value-driven pricing for websites and digital solutions that help your organization thrive online. From simple brochure sites to custom web applications, we've got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  activeTab === "projects" 
                    ? "bg-maverick-orange" 
                    : "bg-maverick-orange bg-opacity-10 hover:bg-opacity-20"
                }`}
              >
                Project-Based Packages
              </button>

              <button
                onClick={() => scrollToSection("care")}
                className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  activeTab === "care" 
                    ? "bg-maverick-orange" 
                    : "bg-maverick-orange bg-opacity-10 hover:bg-opacity-20"
                }`}
              >
                Website Care Plans
              </button>
            </motion.div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-maverick-orange rounded-full filter blur-[180px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[180px] opacity-5"></div>
      </section>

      {/* Project-Based Packages */}
      <section 
        ref={projectsRef} 
        id="projects"
        className="py-24 px-5 md:px-10 bg-[#151515] relative"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-maverick-orange bg-opacity-10 mb-4">
              <Laptop className="h-5 w-5 text-maverick-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Project-Based Packages</h2>
            <p className="text-xl text-[#DDDDDD] max-w-2xl mx-auto">
              One-time website design and development solutions tailored to your organization's size, goals, and growth stage.
            </p>
          </motion.div>

          {/* Packages Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {projectPackages.map((pkg, index) => (
              <PricingCard 
                key={pkg.id} 
                plan={pkg} 
              />
            ))}
          </motion.div>

          {/* Compare Packages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-[#1A1A1A] border border-gray-800 overflow-hidden"
          >
            <div className="p-8 border-b border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Compare Project Packages</h3>
              <p className="text-[#DDDDDD]">A side-by-side comparison of our website project packages to help you choose the right fit.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[768px] border-collapse">
                <thead>
                  <tr className="bg-[#161616]">
                    <th className="p-4 text-left border-b border-gray-800">Feature</th>
                    <th className="p-4 text-center border-b border-gray-800">EdgeStart</th>
                    <th className="p-4 text-center border-b border-gray-800">EdgeGrow</th>
                    <th className="p-4 text-center border-b border-gray-800">EdgeLead</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Price</td>
                    <td className="p-4 text-center border-b border-gray-800">$850</td>
                    <td className="p-4 text-center border-b border-gray-800">$1,850</td>
                    <td className="p-4 text-center border-b border-gray-800">From $3,750+</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Pages</td>
                    <td className="p-4 text-center border-b border-gray-800">Up to 6</td>
                    <td className="p-4 text-center border-b border-gray-800">Up to 20</td>
                    <td className="p-4 text-center border-b border-gray-800">Custom</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Design Complexity</td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                    <td className="p-4 text-center border-b border-gray-800">Advanced</td>
                    <td className="p-4 text-center border-b border-gray-800">Premium</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">E-commerce</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-red-500/10 rounded-full">
                        <span className="block h-2 w-2 bg-red-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                    <td className="p-4 text-center border-b border-gray-800">Full-featured</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">User Accounts</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-red-500/10 rounded-full">
                        <span className="block h-2 w-2 bg-red-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                    <td className="p-4 text-center border-b border-gray-800">Advanced</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Custom Functionality</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-red-500/10 rounded-full">
                        <span className="block h-2 w-2 bg-red-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                    <td className="p-4 text-center border-b border-gray-800">Advanced</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">SEO Implementation</td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                    <td className="p-4 text-center border-b border-gray-800">Advanced</td>
                    <td className="p-4 text-center border-b border-gray-800">Comprehensive</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Timeline</td>
                    <td className="p-4 text-center border-b border-gray-800">2-3 weeks</td>
                    <td className="p-4 text-center border-b border-gray-800">4-6 weeks</td>
                    <td className="p-4 text-center border-b border-gray-800">8-12+ weeks</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Ideal For</td>
                    <td className="p-4 text-center border-b border-gray-800">Small businesses, startups, solo entrepreneurs</td>
                    <td className="p-4 text-center border-b border-gray-800">Growing SMBs, nonprofits, established organizations</td>
                    <td className="p-4 text-center border-b border-gray-800">E-commerce, membership sites, custom applications</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Care Plans */}
      <section 
        ref={careRef}
        id="care"
        className="py-24 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#151515]"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-maverick-orange bg-opacity-10 mb-4">
              <HeartHandshake className="h-5 w-5 text-maverick-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Website Care Plans</h2>
            <p className="text-xl text-[#DDDDDD] max-w-2xl mx-auto">
              Ongoing support and maintenance to keep your website secure, up-to-date, and continually improving.
            </p>
          </motion.div>

          {/* Care Plans Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {carePackages.map((plan, index) => (
              <PricingCard 
                key={plan.id} 
                plan={{
                  ...plan,
                  extras: plan.extras ? `${plan.extras.title}: ${plan.extras.description}` : undefined
                }} 
              />
            ))}
          </motion.div>

          {/* Compare Care Plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-[#1A1A1A] border border-gray-800 overflow-hidden"
          >
            <div className="p-8 border-b border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Compare Care Plans</h3>
              <p className="text-[#DDDDDD]">See how our website care plans stack up to find your perfect support solution.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[768px] border-collapse">
                <thead>
                  <tr className="bg-[#161616]">
                    <th className="p-4 text-left border-b border-gray-800">Feature</th>
                    <th className="p-4 text-center border-b border-gray-800">EdgeCare</th>
                    <th className="p-4 text-center border-b border-gray-800">EdgeAdvance</th>
                    <th className="p-4 text-center border-b border-gray-800">EdgePro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Monthly Price</td>
                    <td className="p-4 text-center border-b border-gray-800">$75</td>
                    <td className="p-4 text-center border-b border-gray-800">$175</td>
                    <td className="p-4 text-center border-b border-gray-800">From $400+</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Support Hours</td>
                    <td className="p-4 text-center border-b border-gray-800">1 hour</td>
                    <td className="p-4 text-center border-b border-gray-800">3 hours</td>
                    <td className="p-4 text-center border-b border-gray-800">Up to 10 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Response Time</td>
                    <td className="p-4 text-center border-b border-gray-800">48 hours</td>
                    <td className="p-4 text-center border-b border-gray-800">24 hours</td>
                    <td className="p-4 text-center border-b border-gray-800">Same day</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Core Software Updates</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Security Monitoring</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Daily Backups</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">SEO Optimization</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-red-500/10 rounded-full">
                        <span className="block h-2 w-2 bg-red-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Analytics Reports</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-red-500/10 rounded-full">
                        <span className="block h-2 w-2 bg-red-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">Monthly</td>
                    <td className="p-4 text-center border-b border-gray-800">Monthly + Quarterly</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#DDDDDD]">Strategy Sessions</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-red-500/10 rounded-full">
                        <span className="block h-2 w-2 bg-red-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">Quarterly</td>
                    <td className="p-4 text-center border-b border-gray-800">Monthly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Why Choose Our Web Solutions?</h2>
            <p className="text-xl text-[#DDDDDD] max-w-2xl mx-auto">
              We build websites that work as hard as you do, driving real business results through thoughtful design and strategic functionality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="h-8 w-8 text-maverick-orange" />,
                title: "Strategic Approach",
                description: "We build websites with purpose, aligning every design choice and feature with your specific business goals and audience needs."
              },
              {
                icon: <Code className="h-8 w-8 text-maverick-orange" />,
                title: "Clean, Efficient Code",
                description: "Our development practices ensure your site loads quickly, functions smoothly, and remains secure and maintainable for the long term."
              },
              {
                icon: <Monitor className="h-8 w-8 text-maverick-orange" />,
                title: "Responsive By Default",
                description: "Every website we build looks and works perfectly on all devices, from smartphones to large desktop screens."
              },
              {
                icon: <Star className="h-8 w-8 text-maverick-orange" />,
                title: "User Experience Focus",
                description: "We craft intuitive, engaging experiences that guide visitors toward meaningful actions while feeling natural and effortless."
              },
              {
                icon: <Award className="h-8 w-8 text-maverick-orange" />,
                title: "SEO-Optimized Foundation",
                description: "Built-in search engine optimization helps your site rank better and attract more organic traffic from day one."
              },
              {
                icon: <Wrench className="h-8 w-8 text-maverick-orange" />,
                title: "Easy Content Management",
                description: "User-friendly admin interfaces make it simple for you to update content without technical expertise or additional costs."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800"
              >
                <div className="bg-maverick-orange bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-[#DDDDDD]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-5 md:px-10 bg-[#151515]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Our Web Development Process</h2>
            <p className="text-xl text-[#DDDDDD] max-w-2xl mx-auto">
              From concept to launch, our collaborative process ensures your website exceeds expectations and achieves your goals.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery & Strategy",
                description: "We start by understanding your goals, audience, and requirements to create a strategic roadmap for your website."
              },
              {
                number: "02",
                title: "Planning & Architecture",
                description: "We develop site structure, wireframes, and user flows to ensure an intuitive, effective website experience."
              },
              {
                number: "03",
                title: "Design & Prototyping",
                description: "We create beautiful, brand-aligned visual designs and interactive prototypes for your approval."
              },
              {
                number: "04",
                title: "Development & CMS Integration",
                description: "We build your site with clean, efficient code and set up intuitive content management systems."
              },
              {
                number: "05",
                title: "Testing & Quality Assurance",
                description: "We rigorously test functionality, performance, accessibility, and user experience across all devices."
              },
              {
                number: "06",
                title: "Launch & Post-Launch Support",
                description: "We handle the technical aspects of launch and provide ongoing support through our care plans."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative mb-12 last:mb-0 pl-16"
              >
                <div className="flex items-start">
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                    <span className="font-bold">{step.number}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-[#DDDDDD]">{step.description}</p>
                  </div>
                </div>

                {index < 5 && (
                  <div className="absolute left-5 top-12 h-full w-0.5 bg-gradient-to-b from-maverick-orange/30 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-maverick-orange bg-opacity-10 mb-4">
              <HelpCircle className="h-5 w-5 text-maverick-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Frequently Asked Questions</h2>
            <p className="text-xl text-[#DDDDDD] max-w-2xl mx-auto">
              Find answers to common questions about our web development services and process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`border-b border-gray-800 py-6 ${
                  index === faqs.length - 1 ? 'mb-0 border-b-0' : 'mb-2'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-xl font-medium pr-8">{faq.question}</h3>
                  <div className={`transition-transform duration-300 ${
                    selectedFaq === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="h-5 w-5 text-maverick-orange" />
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
                      <p className="pt-4 text-[#DDDDDD]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nonprofit Section */}
      <section className="py-16 px-5 md:px-10 bg-[#151515]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#1E1E1E] to-[#262626] rounded-2xl overflow-hidden border border-gray-800"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 font-heading">Special Pricing for Nonprofits</h3>
                  <p className="text-[#DDDDDD] mb-6 max-w-2xl">
                    We're proud to support organizations making positive impacts in our communities. Registered nonprofits and charities qualify for special discounted rates on our services – typically 15% off our standard pricing for both project work and care plans.
                  </p>
                  <Link href="/contact">
                    <a className="inline-flex items-center text-maverick-orange hover:underline">
                      Contact us to learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-[#151515] to-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Build Your <span className="text-maverick-orange">Dream Website?</span>
            </h2>
            <p className="text-xl text-[#DDDDDD] mb-10">
              Let's create a website that works as hard as you do. Schedule a free consultation to discuss your project and find the perfect solution for your needs.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-maverick-orange hover:bg-opacity-90 text-white rounded-lg font-medium transition-all duration-300">
                Get Started Today
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
}