import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { 
  ChevronDown, Check, ArrowRight, Megaphone, PieChart, PenTool, Share2, 
  MessageCircle, Users, BarChart, Zap, LineChart, Star, UserPlus, 
  HelpCircle, Calendar, HeartHandshake, Sparkles, MessageSquare
} from 'lucide-react';
import ContactSection from '@/components/sections/ContactSection';

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
      staggerChildren: 0.1,
    },
  },
};


interface PricingPackage {
  id: string;
  name: string;
  description: string;
  focus: string;
  price: string;
  priceRange?: string;
  period?: string;
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

const PricingCard = ({ plan }: { plan: PricingPackage }) => {
  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-[#1A1A1A] rounded-xl overflow-hidden border ${
        plan.popular ? 'border-maverick-orange' : 'border-gray-800'
      }`}
    >
      <div className="p-8 border-b border-gray-800">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg ${
            plan.popular ? 'bg-maverick-orange' : 'bg-maverick-orange bg-opacity-10'
          }`}>
            <div className={plan.popular ? 'text-white' : 'text-maverick-orange'}>
              {plan.icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold ml-4">{plan.name}</h3>
        </div>

        <div className="mb-4">
          <span className="text-3xl font-bold">{plan.price}</span>
          {plan.oneTime && <span className="text-[#AAAAAA] ml-2">one-time</span>}
        </div>

        <p className="text-[#AAAAAA] mb-4">{plan.description}</p>

        <div className="bg-[#121212] p-3 rounded-lg text-sm">
          <span className="italic text-white">{plan.focus}</span>
        </div>
      </div>

      <div className="p-8">
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (idx * 0.05), duration: 0.3 }}
              className="flex items-start"
            >
              <Check className="h-5 w-5 text-maverick-orange shrink-0 mt-0.5 mr-3" />
              <span className="text-[#DDDDDD]">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {plan.highlightFeatures && (
          <div className="mb-6 space-y-2">
            <p className="text-sm font-medium text-maverick-orange">Key Benefits:</p>
            <div className="flex flex-wrap gap-2">
              {plan.highlightFeatures.map((highlight, idx) => (
                <span 
                  key={idx}
                  className="inline-block px-3 py-1 bg-maverick-orange bg-opacity-10 text-maverick-orange text-xs font-medium rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link href="/contact">
          <motion.a 
            className="inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 30px rgba(255, 86, 48, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Started
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
};


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

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
              Marketing <span className="text-maverick-orange">Pricing</span>
            </h1>

            <p className="text-xl text-[#AAAAAA] mb-10 max-w-3xl mx-auto">
              Transparent, value-driven marketing solutions designed to help your organization build brand awareness, connect with your audience, and drive meaningful growth.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <button
                onClick={() => scrollToSection("strategic")}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeTab === "strategic" 
                    ? "bg-maverick-orange text-white" 
                    : "bg-maverick-orange bg-opacity-10 text-white hover:bg-opacity-20"
                }`}
              >
                Strategic Packages
              </button>

              <button
                onClick={() => scrollToSection("ongoing")}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeTab === "ongoing" 
                    ? "bg-maverick-orange text-white" 
                    : "bg-maverick-orange bg-opacity-10 text-white hover:bg-opacity-20"
                }`}
              >
                Ongoing Marketing Plans
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-maverick-orange rounded-full filter blur-[180px] opacity-10"></div>
        <div className="absolute -bottom-20 left-0 w-80 h-80 bg-purple-600 rounded-full filter blur-[180px] opacity-5"></div>
      </section>

      {/* Strategic Packages */}
      <section 
        id="strategic" 
        ref={strategicRef}
        className="py-24 px-5 md:px-10 bg-[#151515] relative overflow-hidden"
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
              <LineChart className="h-5 w-5 text-maverick-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Strategic Marketing Packages</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              One-time marketing foundations and brand-building initiatives to get your organization's marketing off the ground.
            </p>
          </motion.div>

          {/* Package Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16"
          >
            {strategicPackages.map((pkg) => (
              <PricingCard
                key={pkg.id}
                plan={pkg}
              />
            ))}
          </motion.div>

          {/* Compare Packages Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-6 md:p-8 bg-[#1A1A1A] border-b border-gray-800">
              <h3 className="text-2xl font-bold mb-2">Compare Strategic Packages</h3>
              <p className="text-[#AAAAAA]">A side-by-side comparison to help you choose the right marketing foundation.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[768px]">
                <thead>
                  <tr className="bg-[#121212]">
                    <th className="text-left p-4 border-b border-gray-800">Feature</th>
                    <th className="text-center p-4 border-b border-gray-800">EdgeIgnite Marketing</th>
                    <th className="text-center p-4 border-b border-gray-800">EdgeBrand Identity</th>
                    <th className="text-center p-4 border-b border-gray-800">EdgeReach Core</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">Starting Price</td>
                    <td className="p-4 text-center border-b border-gray-800">$1,800+</td>
                    <td className="p-4 text-center border-b border-gray-800">$1,100+</td>
                    <td className="p-4 text-center border-b border-gray-800">$1,600+</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">Strategic Focus</td>
                    <td className="p-4 text-center border-b border-gray-800">Comprehensive Marketing Strategy</td>
                    <td className="p-4 text-center border-b border-gray-800">Brand Identity & Messaging</td>
                    <td className="p-4 text-center border-b border-gray-800">Local Digital Presence</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">Audience Targeting</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-gray-500/20 rounded-full mx-auto">
                        <span className="block h-2 w-2 bg-gray-500 rounded-full"></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">Content Creation</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-gray-500/20 rounded-full mx-auto">
                        <span className="block h-2 w-2 bg-gray-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">Visual Brand Assets</td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                    <td className="p-4 text-center border-b border-gray-800">Comprehensive</td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">SEO Implementation</td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-gray-500/20 rounded-full mx-auto">
                        <span className="block h-2 w-2 bg-gray-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">Advanced</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">Local Listings</td>
                    <td className="p-4 text-center border-b border-gray-800">Basic</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-gray-500/20 rounded-full mx-auto">
                        <span className="block h-2 w-2 bg-gray-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">Comprehensive</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">Analytics Setup</td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <div className="inline-flex items-center justify-center h-5 w-5 bg-gray-500/20 rounded-full mx-auto">
                        <span className="block h-2 w-2 bg-gray-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-800">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-gray-800 text-[#AAAAAA]">Ideal For</td>
                    <td className="p-4 text-center border-b border-gray-800">Businesses needing a complete marketing foundation</td>
                    <td className="p-4 text-center border-b border-gray-800">New businesses or rebrands</td>
                    <td className="p-4 text-center border-b border-gray-800">Local businesses focusing on online visibility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Marketing Plans */}
      <section 
        id="ongoing" 
        ref={ongoingRef}
        className="py-24 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#151515] relative overflow-hidden"
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
              <BarChart className="h-5 w-5 text-maverick-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Ongoing Marketing Plans</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Consistent marketing support to maintain momentum, build audience relationships, and drive sustainable growth.
            </p>
          </motion.div>

          {/* Ongoing Plans Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
            {ongoingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-[#1A1A1A] rounded-xl overflow-hidden border ${
                  plan.popular ? 'border-maverick-orange' : 'border-gray-800'
                }`}
              >
                {/* Most popular mention removed */}

                <div className="p-8 border-b border-gray-800">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${
                      plan.popular ? 'bg-maverick-orange' : 'bg-maverick-orange bg-opacity-10'
                    }`}>
                      <div className={plan.popular ? 'text-white' : 'text-maverick-orange'}>
                        {plan.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold ml-4">{plan.name}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-[#AAAAAA] ml-2">{plan.period}</span>
                  </div>

                  <p className="text-[#AAAAAA] mb-4">{plan.description}</p>

                  <div className="bg-[#121212] p-3 rounded-lg text-sm">
                    <span className="italic text-white">{plan.focus}</span>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + (idx * 0.05), duration: 0.3 }}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-maverick-orange shrink-0 mt-0.5 mr-3" />
                        <span className="text-[#DDDDDD]">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <motion.a 
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 30px rgba(255, 86, 48, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      Get Started
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Customization Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#1A1A1A] to-[#202020] rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 bg-maverick-orange bg-opacity-10 rounded-xl flex items-center justify-center text-maverick-orange">
                  <Sparkles className="h-8 w-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">Custom Marketing Solutions</h3>
                  <p className="text-[#AAAAAA] mb-6 max-w-2xl">
                    Don't see the perfect fit? We can tailor a custom monthly plan or project package incorporating services from multiple categories to meet your specific marketing goals and budget.
                  </p>

                  <Link href="/contact">
                    <a className="inline-flex items-center text-maverick-orange hover:underline">
                      Contact us for a custom marketing solution <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Why Choose Us For Your Marketing</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              We believe in marketing that feels genuine, builds authentic connections, and drives real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-maverick-orange" />,
                title: "Human-Centered Approach",
                description: "We focus on creating meaningful connections between your brand and your audience through empathetic, value-driven content."
              },
              {
                icon: <PieChart className="h-8 w-8 text-maverick-orange" />,
                title: "Data-Informed Strategy",
                description: "We blend creativity with analytics to develop marketing strategies that are both emotionally resonant and measurably effective."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-maverick-orange" />,
                title: "Clear Communication",
                description: "We believe in transparent reporting and collaborative processes that keep you informed and involved every step of the way."
              },
              {
                icon: <Zap className="h-8 w-8 text-maverick-orange" />,
                title: "Agile Implementation",
                description: "Our flexible approach allows us to adapt quickly to changing market conditions and emerging opportunities for your brand."
              },
              {
                icon: <UserPlus className="h-8 w-8 text-maverick-orange" />,
                title: "Long-Term Partnership",
                description: "We view ourselves as an extension of your team, committed to your success with sustainable, long-term marketing strategies."
              },
              {
                icon: <BarChart className="h-8 w-8 text-maverick-orange" />,
                title: "ROI-Focused Results",
                description: "Every recommendation and campaign is designed with clear business outcomes and return on investment in mind."
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
                <p className="text-[#AAAAAA]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5 md:px-10 bg-[#151515]">
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
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Find answers to common questions about our marketing services and approach.
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
                      <p className="pt-4 text-[#AAAAAA]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
            className="bg-gradient-to-r from-[#1A1A1A] to-[#202020] rounded-2xl overflow-hidden border border-gray-800"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center text-maverick-orange">
                  <HeartHandshake className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Special Pricing for Nonprofits</h3>
                  <p className="text-[#AAAAAA] mb-6 max-w-2xl">
                    We believe in supporting organizations making positive impacts in our communities. Registered nonprofits and charities qualify for special discounted rates on our services – typically 15% off our standard pricing for both project work and monthly plans.
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
      <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#151515]">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Elevate Your <span className="text-maverick-orange">Marketing</span>?
            </h2>
            <p className="text-xl text-[#AAAAAA] mb-10">
              Let's create authentic connections with your audience and drive meaningful growth for your organization.
            </p>
            <Link href="/contact">
              <motion.a 
                className="inline-flex items-center justify-center px-8 py-4 border border-maverick-orange text-maverick-orange font-medium rounded-lg hover:bg-maverick-orange hover:bg-opacity-10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(255, 86, 48, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Start Your Marketing Journey
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
}