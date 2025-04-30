import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Star, ArrowRight, MessageCircle, PieChart, BarChart3, Share2, Megaphone, Users, Mail, PenTool, HelpCircle } from 'lucide-react';
import { Link } from 'wouter';
import ContactSection from '@/components/sections/ContactSection';

// Animation variants
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface PricingPackage {
  id: string;
  name: string;
  description: string;
  focus: string;
  price: string;
  priceRange?: string;
  oneTime: boolean;
  popular: boolean;
  features: string[];
  icon: JSX.Element;
  highlightFeatures?: string[];
}

const strategicPackages: PricingPackage[] = [
  {
    id: "edgeignite",
    name: "EdgeIgnite Marketing",
    description: "All-in-one marketing infrastructure and content system for SMBs ready to grow with clarity, authority, and smart automation.",
    focus: "Perfect for organizations needing a complete marketing foundation to build upon",
    price: "$1,800+",
    oneTime: true,
    popular: true,
    features: [
      "Strategy and positioning workshop",
      "Audience persona development",
      "Competitive snapshot with AI-powered insights",
      "Digital presence audit (web, SEO, social, listings)",
      "Google Business Profile and social media setup (up to 3 platforms)",
      "GA4 and Meta Pixel setup with goal tracking",
      "Mini AI marketing opportunity scan",
      "First-party data capture setup",
      "Content strategy playbook",
      "Creation of high-value content assets",
      "Multi-platform content distribution strategy"
    ],
    highlightFeatures: [
      "Complete marketing foundation",
      "Audience-focused strategy",
      "Multi-channel approach"
    ],
    icon: <PieChart size={24} />
  },
  {
    id: "edgebrand",
    name: "EdgeBrand Identity",
    description: "Complete brand foundation that creates a cohesive visual identity and messaging framework to stand out in your market.",
    focus: "Perfect for new businesses or rebrands needing a professional, consistent identity",
    price: "$1,100+",
    oneTime: true,
    popular: false,
    features: [
      "Discovery session and competitive scan",
      "Brand positioning and strategy alignment",
      "2–3 initial brand concept directions with revisions",
      "Final logo suite in multiple formats (print, digital, social)",
      "Visual identity system with color palette, typography, and image direction",
      "Tone-of-voice and messaging guide",
      "Social media branding assets and sample post templates",
      "Key collateral design mockups"
    ],
    highlightFeatures: [
      "Professional brand identity",
      "Consistent visual system",
      "Strategic messaging framework"
    ],
    icon: <PenTool size={24} />
  },
  {
    id: "edgereach",
    name: "EdgeReach Core",
    description: "Built for organizations that need a future-ready, locally optimized digital presence — fast.",
    focus: "Perfect for local businesses needing to improve visibility online",
    price: "$1,600+",
    oneTime: true,
    popular: false,
    features: [
      "Google Business Profile setup and optimization",
      "Local listings on Google, Apple, Bing, and 10+ directories",
      "Social profile optimization (Facebook, Instagram, Pinterest)",
      "On-page SEO for up to 4 service or location pages",
      "Local schema markup (Organization, LocalBusiness, FAQ, Services)",
      "Geo-tagged media optimization",
      "Embedded reviews with schema",
      "CRM-integrated lead capture setup",
      "Email nurture flow",
      "Meta and Google ad retargeting setup"
    ],
    highlightFeatures: [
      "Local search visibility",
      "Multi-channel exposure",
      "Lead capture & nurturing"
    ],
    icon: <Share2 size={24} />
  }
];

const ongoingPlans: PricingPackage[] = [
  {
    id: "edgenurture",
    name: "EdgeNurture Presence",
    description: "Maintaining local visibility, nurturing leads, and driving consistent digital performance",
    focus: "Perfect for small businesses wanting consistent local visibility",
    price: "$335",
    period: "per month",
    oneTime: false,
    popular: false,
    features: [
      "Google Business Profile upkeep: post 2–3 updates/month",
      "Review response & Q&A monitoring",
      "Directory listings check & info refresh",
      "1 SEO blog post/month with local keywords",
      "On-page SEO tweaks for up to 2 existing pages",
      "Schema update for seasonal/service changes",
      "Review embed refresh with schema",
      "Email nurture flow tune-up",
      "Meta/Google retargeting pixel maintenance",
      "Basic analytics snapshot & reporting"
    ],
    icon: <MessageCircle size={24} />
  },
  {
    id: "edgeengage",
    name: "EdgeEngage Content & Community",
    description: "Building an engaged community and establishing a content rhythm using integrated social media and content marketing tactics",
    focus: "Perfect for businesses wanting active audience engagement",
    price: "$1,850",
    period: "per month",
    oneTime: false,
    popular: true,
    features: [
      "Up to 4 Hours Unified Monthly Content & Social Strategy Session",
      "Audience/Keyword Research for Social & Content Topics",
      "Content Calendar Planning",
      "Creation of up to 4-6 Core SEO-Optimized Content Pieces/Month",
      "Social Media Management (up to 4 platforms)",
      "Creation & Scheduling of Social Posts (using core content + curation)",
      "2–3 email communications/month",
      "Community engagement services",
      "Polls, Q&As, and story-based engagement campaigns",
      "Integrated Monthly Performance Report"
    ],
    icon: <Users size={24} />
  },
  {
    id: "graphicdesign",
    name: "Graphic Design Support",
    description: "Flexible access to professional graphic design for your ongoing marketing needs",
    focus: "Perfect for businesses needing consistent design support",
    price: "$240",
    period: "for 4 hours",
    oneTime: true,
    popular: false,
    features: [
      "Pre-paid package for flexible graphic design time",
      "Social media graphics",
      "Marketing collateral updates",
      "Presentation design",
      "Web graphics and banners",
      "Ad creative for digital campaigns",
      "Basic photo editing and enhancement",
      "Quick turnaround on small design projects",
      "Up to 2 revision rounds per design",
      "Source files provided upon request"
    ],
    icon: <PenTool size={24} />
  }
];

// FAQ data
const faqs = [
  {
    question: "What's included in the EdgeIgnite Marketing package?",
    answer: "The EdgeIgnite package is a comprehensive marketing launchpad that includes a strategy workshop, audience persona development, competitor analysis, digital presence audit across web/SEO/social platforms, setup of Google Business Profile and social media channels, analytics installation with goal tracking, AI marketing opportunities assessment, first-party data capture configuration, content strategy development, creation of cornerstone content assets, and a multi-platform distribution strategy. It provides everything a growing business needs to build a solid marketing foundation."
  },
  {
    question: "How does the EdgeEngage Content & Community plan work?",
    answer: "EdgeEngage is our integrated content and social media management solution. Each month begins with a strategy session to align content with your business goals. Our team then conducts audience and keyword research, develops a detailed content calendar, creates 4-6 SEO-optimized content pieces, manages your social media presence across up to 4 platforms, schedules strategic posts, sends email communications, and implements engagement campaigns. You'll receive a comprehensive monthly performance report showing the impact of these activities on your digital presence."
  },
  {
    question: "Do you offer one-time projects or only ongoing services?",
    answer: "We offer both! Our EdgeIgnite, EdgeBrand, and EdgeReach packages are one-time strategic projects that build your marketing foundation, while our EdgeNurture and EdgeEngage plans provide ongoing support. Many clients start with a foundational package and then transition to monthly support, but we can accommodate either approach based on your needs. We also offer Graphic Design Support blocks for flexible access to design services without a long-term commitment."
  },
  {
    question: "What types of businesses do you typically work with?",
    answer: "We specialize in working with small-to-medium businesses, nonprofits, professional service providers, and growth-focused startups. Our clients typically recognize the importance of digital marketing but don't have the internal resources for consistent execution. We're particularly experienced in local business marketing, B2B service providers, mission-driven organizations, and businesses in competitive digital landscapes that need to differentiate themselves through strategic content and engagement."
  },
  {
    question: "How do you measure the success of your marketing efforts?",
    answer: "We establish clear KPIs at the beginning of our engagement based on your business goals. Depending on your priorities, these might include website traffic growth, lead generation metrics, engagement rates, conversion improvements, local search visibility, or content performance. All our ongoing services include regular reporting that tracks these metrics, and we schedule review sessions to analyze results, identify trends, and adjust strategies accordingly. We're committed to data-informed marketing that delivers measurable business impact."
  },
  {
    question: "Do you offer discounts for nonprofit organizations?",
    answer: "Yes, we offer special pricing for registered nonprofit and charitable organizations. We believe in supporting organizations making a positive impact and our nonprofit rates reflect this commitment. Please mention your nonprofit status during our initial consultation, and we'll be happy to discuss the special rates available for your marketing needs."
  }
];

export default function MarketingPricing() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("strategic");
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const strategicRef = useRef<HTMLDivElement>(null);
  const ongoingRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  };

  const scrollToSection = (section: string) => {
    setActiveTab(section);
    if (section === "strategic" && strategicRef.current) {
      strategicRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "ongoing" && ongoingRef.current) {
      ongoingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      if (strategicRef.current && ongoingRef.current) {
        const strategicPosition = strategicRef.current.offsetTop;
        const ongoingPosition = ongoingRef.current.offsetTop;
        
        if (scrollPosition >= ongoingPosition) {
          setActiveTab("ongoing");
        } else if (scrollPosition >= strategicPosition) {
          setActiveTab("strategic");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimationTriggered(true);
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-maverick-orange bg-opacity-10 mb-6">
              <Megaphone className="h-6 w-6 text-maverick-orange" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Marketing & Creative <span className="text-maverick-orange">Pricing</span></h1>
            <p className="text-xl text-[#AAAAAA] mb-8 max-w-3xl mx-auto">
              Strategic marketing solutions that deliver real business results for SMBs, nonprofits, and growing organizations.
            </p>
            
            {/* Tab Navigation */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-8">
              <button 
                onClick={() => scrollToSection("strategic")}
                className="flex items-center gap-2 group"
              >
                <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTab === "strategic" ? "bg-maverick-orange" : "bg-gray-700 group-hover:bg-maverick-orange group-hover:bg-opacity-50"
                }`}></span>
                <span className={`text-lg font-medium transition-all duration-300 ${
                  activeTab === "strategic" ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                }`}>Strategic Packages</span>
              </button>
              
              <button 
                onClick={() => scrollToSection("ongoing")}
                className="flex items-center gap-2 group"
              >
                <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTab === "ongoing" ? "bg-maverick-orange" : "bg-gray-700 group-hover:bg-maverick-orange group-hover:bg-opacity-50"
                }`}></span>
                <span className={`text-lg font-medium transition-all duration-300 ${
                  activeTab === "ongoing" ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                }`}>Ongoing Plans</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute -top-20 right-0 w-96 h-96 bg-maverick-orange rounded-full filter blur-[180px] opacity-5"></div>
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-maverick-orange rounded-full filter blur-[150px] opacity-5"></div>
      </section>

      {/* Strategic Packages Section */}
      <section 
        ref={strategicRef}
        className="py-16 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#161616]"
      >
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Strategic Marketing Packages</h2>
            <p className="text-xl text-[#AAAAAA]">
              Foundation-building packages that set up your marketing for long-term success
            </p>
          </motion.div>
          
          {/* Packages Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {strategicPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-maverick-orange' : 'ring-1 ring-gray-800'
                }`}
              >
                {/* Card Header with Gradient */}
                <div className={`p-6 ${pkg.popular ? 'bg-gradient-to-r from-maverick-orange/20 to-maverick-orange/5' : 'bg-[#1A1A1A]'}`}>
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-maverick-orange px-3 py-1 rounded-full">
                      <Star className="h-3 w-3 text-white" fill="white" />
                      <span className="text-xs font-semibold">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                      {pkg.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  </div>
                  
                  <p className="text-[#AAAAAA] mb-3">{pkg.description}</p>
                  <p className="text-sm text-maverick-orange font-medium mb-5">{pkg.focus}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    {pkg.oneTime && <span className="text-[#AAAAAA] ml-2">one-time</span>}
                  </div>
                  
                  {/* Highlight Features */}
                  {pkg.highlightFeatures && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.highlightFeatures.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-maverick-orange/10 text-maverick-orange border border-maverick-orange/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Card Body */}
                <div className="p-6 bg-[#1E1E1E]">
                  <h4 className="text-lg font-medium mb-3">What's included:</h4>
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
                  
                  <Link href="/contact">
                    <a className={`block text-center w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
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
          
          {/* Consulting Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A1A1A] rounded-xl p-8 border border-gray-800"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Marketing Consulting</h3>
                <p className="text-[#AAAAAA] max-w-xl">
                  Need specialized marketing expertise for strategy sessions, campaign planning, or marketing audits? Our consulting service gives you access to senior marketing strategists.
                </p>
              </div>
              <div className="min-w-[200px] flex flex-col gap-3">
                <div className="bg-[#121212] p-4 rounded-lg border border-gray-800">
                  <span className="text-[#AAAAAA] text-sm">Hourly Rate</span>
                  <p className="text-2xl font-bold">$100-$175<span className="text-sm text-[#AAAAAA] font-normal">/hour</span></p>
                </div>
                <Link href="/contact">
                  <a className="text-center py-3 px-6 rounded-lg font-medium bg-transparent border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10 transition-all duration-300">
                    Book a Consultation
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Plans Section */}
      <section 
        ref={ongoingRef}
        className="py-24 px-5 md:px-10 bg-[#121212]"
      >
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Ongoing Marketing Plans</h2>
            <p className="text-xl text-[#AAAAAA]">
              Consistent marketing support that drives continuous growth and engagement
            </p>
          </motion.div>
          
          {/* Ongoing Plans - Card Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {ongoingPlans.map((plan, index) => {
              // Make the popular plan span more columns
              const colSpan = plan.popular ? "lg:col-span-6" : "lg:col-span-3";
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${colSpan} ${
                    plan.popular ? 'bg-gradient-to-br from-[#1A1A1A] to-[#262626]' : 'bg-[#1A1A1A]'
                  } rounded-xl ${
                    plan.popular ? 'border-2 border-maverick-orange' : 'border border-gray-800'
                  } overflow-hidden relative`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                    </div>
                    
                    <p className="text-[#AAAAAA] mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-[#AAAAAA] ml-2">{plan.period}</span>}
                    </div>
                    
                    {/* Features in 1 or 2 columns based on popularity */}
                    <div className={`mb-8 ${plan.popular ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3' : 'space-y-3'}`}>
                      {plan.features.map((feature, idx) => (
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
                    
                    <Link href="/contact">
                      <a className={`block text-center w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-maverick-orange hover:bg-opacity-90 text-white' 
                          : 'border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10'
                      }`}>
                        Get Started
                      </a>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Custom Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden bg-gradient-to-r from-[#1A1A1A] to-[#262626] border border-gray-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">Need a Custom Marketing Solution?</h3>
                <p className="text-[#AAAAAA] mb-6">
                  Don't see the perfect fit for your organization's unique needs? We specialize in creating custom marketing packages that align with your specific goals, audience, and budget.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Tailored strategy based on your business goals",
                    "Flexible service combinations",
                    "Custom scope and deliverables",
                    "Scaled to your budget requirements",
                    "Adaptable to your industry's specific challenges"
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-3" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center py-3 px-8 rounded-lg font-medium bg-maverick-orange hover:bg-opacity-90 text-white transition-all duration-300">
                    Request Custom Package
                  </a>
                </Link>
              </div>
              
              <div className="bg-[#121212] p-8 md:p-10 flex flex-col justify-center">
                <h4 className="text-xl font-semibold mb-6">Popular Custom Solutions Include:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Event Marketing Package",
                      description: "Comprehensive promotion for conferences, fundraisers, and launches",
                      icon: <Users className="h-6 w-6 text-maverick-orange" />
                    },
                    {
                      title: "Email Marketing Strategy",
                      description: "List growth, automation, and campaign management",
                      icon: <Mail className="h-6 w-6 text-maverick-orange" />
                    },
                    {
                      title: "Social Growth Campaign",
                      description: "Focused audience building and engagement strategy",
                      icon: <Share2 className="h-6 w-6 text-maverick-orange" />
                    },
                    {
                      title: "Marketing Analytics Setup",
                      description: "Data tracking, dashboards, and insights reporting",
                      icon: <BarChart3 className="h-6 w-6 text-maverick-orange" />
                    }
                  ].map((solution, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-maverick-orange bg-opacity-10 flex-shrink-0 flex items-center justify-center">
                        {solution.icon}
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">{solution.title}</h5>
                        <p className="text-sm text-[#AAAAAA]">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1A1A1A]">
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
            <h2 className="text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-[#AAAAAA] max-w-2xl mx-auto">
              Find answers to common questions about our marketing services
            </p>
          </motion.div>
          
          {/* FAQ Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`border-b border-gray-800 py-6 ${index === faqs.length - 1 ? 'mb-0 border-b-0' : 'mb-2'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-xl font-medium pr-8">{faq.question}</h3>
                  <div className={`transition-transform duration-300 ${selectedFaq === index ? 'rotate-180' : ''}`}>
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
                      <p className="pt-4 text-[#AAAAAA]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nonprofit Section */}
      <section className="py-16 px-5 md:px-10 bg-[#121212]">
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
                <div className="w-16 h-16 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
                    <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
                    <rect x="7" y="7" width="10" height="10" rx="1"></rect>
                    <path d="m16 11-4 4-2-2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 font-heading">Special Pricing for Nonprofits</h3>
                  <p className="text-[#AAAAAA] mb-6 max-w-2xl">
                    As part of our commitment to community impact, we offer special discounted rates for registered nonprofit organizations and charities.
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
      <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#1A1A1A] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to <span className="text-maverick-orange">Amplify</span> Your Marketing?
            </h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto mb-10">
              Schedule a free consultation to discuss your marketing goals and discover the right approach for your organization.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center py-4 px-8 rounded-lg text-lg font-medium bg-maverick-orange hover:bg-opacity-90 text-white transition-all duration-300">
                Start Your Marketing Journey
              </a>
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-maverick-orange rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-maverick-orange rounded-full filter blur-[120px] opacity-5"></div>
      </section>

      <ContactSection />
    </motion.div>
  );
}