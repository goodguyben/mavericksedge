import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, ChevronDown, CheckCircle, ArrowRight, Shield, Zap, Globe, Target, BarChart3, Users, ShoppingCart, Search, TrendingUp, Tag } from "lucide-react";
import CyclingVideoPlayer from "../ui/CyclingVideoPlayer";
import lottie from "lottie-web";

interface CascadeItem {
  id: string;
  title: string;
  description: string;
  videos?: string[];
  images?: string[];
  videoDurations?: number[];
  zoomEffects?: ("zoom-out" | "zoom-in" | "none")[];
  gradient: string;
}

interface ServiceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: CascadeItem[];
}

interface SubsectionProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

interface PriceTagProps {
  price: string;
  label?: string;
}

function PriceTag({ price, label = "Starting from" }: PriceTagProps) {
  return (
    <motion.div
      className="inline-flex items-center gap-3 bg-gradient-to-r from-maverick-orange/20 to-orange-500/20 border border-maverick-orange/40 rounded-full px-4 py-2 mb-4 text-white shadow-lg backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div className="flex items-center gap-2">
        <div className="w-5 h-5">
          <Tag className="h-5 w-5 text-maverick-orange" />
        </div>
        <span className="text-maverick-orange/90 text-sm font-semibold">{label}</span>
      </div>
      <motion.span
        className="font-bold text-lg"
        initial={{ y: 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {price}
      </motion.span>
    </motion.div>
  );
}

function Subsection({ title, description, features, icon, isOpen, onToggle }: SubsectionProps) {
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-colors duration-200 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-maverick-orange bg-opacity-20 rounded-lg">
            {icon}
          </div>
          <h4 className="text-lg font-semibold text-white">{title}</h4>
        </div>
        <ChevronDown 
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0a0a0a] border-t border-gray-700"
        >
          <div className="p-6">
            <p className="text-base text-gray-300 mb-4 leading-relaxed">{description}</p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-maverick-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function ServiceCard({ item, index }: { item: CascadeItem; index: number }) {
  const isEven = index % 2 === 0; // even index: video right, content left
  const [openSubsections, setOpenSubsections] = useState<number[]>([]);

  const toggleSubsection = (subsectionIndex: number) => {
    setOpenSubsections(prev => 
      prev.includes(subsectionIndex) 
        ? prev.filter(i => i !== subsectionIndex)
        : [...prev, subsectionIndex]
    );
  };

  const getSubsections = () => {
    switch (item.id) {
      case "websites":
        return [
                      {
              title: "Conversion-Focused UX/UI",
              description: "We build websites with conversion paths tailored to your business goals — whether that's lead capture for professional services, online bookings for wellness centers, or direct sales for retailers.",
              features: [
                "Heatmap analysis to track where visitors actually click and scroll",
                "A/B testing for location-specific messaging and local testimonials",
                "Mobile-first design optimized for 73% of mobile web traffic",
                "Local trust signals including business licenses and Chamber membership"
              ],
            icon: <Target className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "Interactive & Story-Driven Features",
            description: "Beyond static layouts, we incorporate scroll-triggered storytelling, 3D product showcases, and immersive animations that align with your brand's personality.",
            features: [
              "Retail & E-commerce: 360° product views and virtual try-ons with Canadian measurements",
              "Fitness & Wellness: Before/after galleries and virtual facility tours",
              "Hospitality: Interactive floor plans and seasonal menu reveals",
              "Professional Services: Process visualizations and interactive case studies"
            ],
            icon: <Zap className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "AI-Powered Web Development Tools",
            description: "We leverage cutting-edge AI development tools to accelerate development, improve code quality, and deliver faster results while maintaining high standards.",
            features: [
              "Replit AI for rapid prototyping and code generation with real-time collaboration",
              "Onlook for visual code editing and AI-powered design-to-code translation",
              "Figma AI for automated design iterations and component generation",
              "Vercel AI for intelligent deployment optimization and performance insights"
            ],
            icon: <Code className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "Accessibility, Security & Compliance",
            description: "Your website meets WCAG 2.2 AA accessibility standards and implements robust security measures, ensuring usability for all customers while protecting data and reducing legal risk.",
            features: [
              "Screen reader optimization with semantic HTML and proper heading hierarchy",
              "SSL/TLS encryption and secure data transmission protocols",
              "Color contrast minimum 4.5:1 ratio for readability in bright sunlight",
              "GDPR and PIPEDA compliance with privacy by design principles"
            ],
            icon: <Shield className="h-5 w-5 text-maverick-orange" />
          }
        ];
      
      case "web-applications":
        return [
          {
            title: "Business Process Automation",
            description: "We design custom dashboards and tools that automate repetitive tasks like scheduling, invoicing, or reporting, freeing up time for revenue-generating activities.",
            features: [
              "Automated scheduling with Google Calendar integration and SMS reminders",
              "Smart invoicing with time tracking and automated follow-ups for overdue accounts",
              "Performance dashboards with real-time KPIs and automated weekly reports",
              "Workflow automation for lead qualification and project milestone tracking"
            ],
            icon: <Zap className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "Technology Stack",
            description: "We leverage modern, scalable technologies and AI-powered development tools to build robust, high-performance web applications that grow with your business.",
            features: [
              "AI Tools: Cursor AI and GitHub Copilot for intelligent code assistance",
              "Front-End: React + Next.js, Vue.js, and Tailwind CSS for responsive UIs",
              "Back-End: Node.js and FastAPI (Python) for scalable server architecture",
              "Database: PostgreSQL + Supabase, MongoDB, and Firebase for data management"
            ],
            icon: <Code className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "Secure Data Management & Integrations",
            description: "From PIPEDA-compliant client portals to secure payment processing, we build applications that handle sensitive data safely with Canadian data sovereignty.",
            features: [
              "Canadian data centers ensuring your data stays in Canada (Toronto, Montreal, Calgary)",
                              "PIPEDA compliance with privacy by design and consent management",
                "Secure integrations with QuickBooks, Xero, Stripe, and Moneris",
                "Healthcare-ready HIPAA-equivalent security for health practitioners"
            ],
            icon: <Shield className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "Scalable Cloud Architecture",
            description: "Your app grows as you grow. We build on AWS Canada Central, Azure Canada East, or Google Cloud Toronto with auto-scaling capabilities.",
            features: [
              "Auto-scaling to handle Black Friday traffic or seasonal rushes automatically",
              "Performance monitoring with 24/7 uptime tracking and automatic failover",
              "Load testing to stress-test before launch and handle 10x current traffic",
              "Cost optimization paying only for resources used, scaling down during quiet periods"
            ],
            icon: <Globe className="h-5 w-5 text-maverick-orange" />
          }
        ];
      
      case "next-gen-ecommerce":
        return [
          {
            title: "Optimized Checkout & Payments",
            description: "We streamline the checkout process with one-click payments, saved carts, and support for Canadian payment preferences to boost conversion rates.",
            features: [
              "Interac integration preferred by 67% of Canadian online shoppers",
              "Digital wallets including Apple Pay, Google Pay, and PayPal for mobile conversion",
              "Guest checkout with no forced account creation — 34% cart abandonment reduction",
              "Auto-tax calculation for HST/GST/PST by province with automatic updates"
            ],
            icon: <ShoppingCart className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "Smart Inventory & Fulfillment",
            description: "Real-time sync with POS, 3PLs, and Canadian carriers ensures accurate availability and delivery estimates to prevent overselling.",
            features: [
              "POS integration with Square, Shopify POS, and Lightspeed for real-time inventory sync",
              "Canada Post API for accurate shipping rates, tracking, and delivery estimates",
              "Multi-location inventory to ship from closest warehouse/store to customer",
              "Backorder management with clear ETAs and automatic notifications"
            ],
            icon: <BarChart3 className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "AI-Powered Personalization",
            description: "With built-in recommendation engines, customers see the right products at the right time, increasing average order value for Canadian retailers.",
            features: [
              "Product recommendations with 'Frequently bought together' increasing AOV by 15-35%",
              "Seasonal optimization with weather-based suggestions for Canadian climate",
              "Abandoned cart recovery with personalized email sequences and SMS reminders",
              "Dynamic pricing with inventory-based discounts and competitor monitoring"
            ],
            icon: <Target className="h-5 w-5 text-maverick-orange" />
          }
        ];
      
      case "seo":
        return [
                      {
              title: "Generative Engine Optimization (GEO)",
              description: "We optimize your content for AI-driven platforms like Google's AI Overviews and ChatGPT, ensuring your business is cited in AI answers.",
              features: [
                "AI-quotable content structured for featured snippets and AI citations",
                "Entity optimization with clear connections between your business and location",
                "Schema markup with rich snippets that AI systems can easily parse",
                "Authority building with high-quality backlinks from Chamber and local newspapers"
              ],
            icon: <TrendingUp className="h-5 w-5 text-maverick-orange" />
          },
                                {
            title: "Quality Backlink Building",
            description: "Strategic link building from authoritative sources that signal trust to search engines and drive qualified traffic to your business.",
            features: [
              "Chamber of Commerce and local business directory citations",
              "Industry-specific backlinks from trade publications and professional associations",
              "Local news coverage and press release distribution for brand mentions",
              "Partnership link building with complementary local businesses"
            ],
            icon: <Users className="h-5 w-5 text-maverick-orange" />
          },
          {
            title: "Local Citations & Map Pack Optimization",
            description: "For Leduc businesses, we focus on Google Business Profile optimization and hyper-local landing pages to dominate the local map pack.",
            features: [
              "Google Business Profile complete optimization with regular posts and Q&A management",
              "Local keywords targeting 'Leduc,' neighborhood-specific terms, and 'near me' searches",
              "Citation building on YellowPages.ca, Leduc Chamber, and industry directories",
              "Review strategy with automated review requests and response management"
            ],
            icon: <Search className="h-5 w-5 text-maverick-orange" />
          }
        ];
      
      default:
        return [];
    }
  };

  const getPriceInfo = (id: string) => {
    switch (id) {
      case "websites":
        return { price: "$850", label: "Starting from" };
      case "web-applications":
        return { price: "$3,750+", label: "Starting from" };
      case "next-gen-ecommerce":
        return { price: "$3,750+", label: "Starting from" };
      case "seo":
        return { price: "$300+", label: "Starting from" };
      default:
        return { price: "$850", label: "Starting from" };
    }
  };

  const subsections = getSubsections();
  const priceInfo = getPriceInfo(item.id);

  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 sm:gap-6 lg:gap-12">
        {/* Video/Image Section */}
        <div className={`${isEven ? "lg:order-2" : "lg:order-1"} lg:w-1/2`}>
          <div className="lg:sticky lg:top-12 h-auto lg:h-[calc(100vh-6rem)] flex items-center z-10">
            <div className="relative aspect-[16/9] w-[calc(100%-2rem)] rounded-2xl overflow-hidden mx-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <CyclingVideoPlayer
                  videos={item.videos || []}
                  images={item.images || []}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  cycleDuration={7000}
                  videoDurations={item.videoDurations}
                  zoomEffects={item.zoomEffects}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`${isEven ? "lg:order-1" : "lg:order-2"} lg:w-1/2 p-5 sm:p-6 md:p-8 space-y-6 pb-12 sm:pb-16 md:pb-24`}>
          <h3
            className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight"
          >
            {item.title}
          </h3>

          <PriceTag price={priceInfo.price} label={priceInfo.label} />

          <p
            className="text-base lg:text-lg text-gray-300 leading-relaxed"
          >
            {item.description}
          </p>

          {/* Interactive Subsections */}
          <div
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Service Highlights</h4>
            {subsections.map((subsection, subsectionIndex) => (
              <Subsection
                key={subsectionIndex}
                title={subsection.title}
                description={subsection.description}
                features={subsection.features}
                icon={subsection.icon}
                isOpen={openSubsections.includes(subsectionIndex)}
                onToggle={() => toggleSubsection(subsectionIndex)}
              />
            ))}
          </div>
        </div>
      </div>
  );
}

export default function WebServicesCascadeSectionLeduc() {
  const services: ServiceSection[] = [
    {
      id: "web-applications",
      title: "Web Design Services for Leduc Businesses",
      icon: <Code className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          id: "websites",
          title: "Custom Website Design",
          description:
            "We design custom websites that range from clean, professional layouts to immersive 3D and interactive experiences. Each crafted to engage, captivate, and convert. Whether you're looking for a straightforward, elegant website or a dynamic, story-driven journey with scroll-triggered animations, spatial design, or product showcases, our team of expert website builders brings your vision to life with clarity and creativity. For high-quality website design Leduc businesses can rely on, we deliver results that make a lasting impact.",
          videos: [
            "https://mavericksedge.ca/videos/Portfolio_Video_3.webm",
            "https://mavericksedge.ca/videos/Portfolio_Video_2.webm",
            "https://mavericksedge.ca/videos/Portfolio_Video_5.webm",
          ],
          videoDurations: [11000, 7000, 11000],
          zoomEffects: ["none", "none", "none"],
          gradient: "from-orange-500/20 to-yellow-500/20",
        },
        {
          id: "web-applications",
          title: "Custom Web Application Development",
          description:
            "We specialize in custom web application development designed to solve your unique operational challenges and streamline complex data management. Our web application development services cover everything from CRM software and asset management systems to interactive dashboards. Leveraging scalable, cloud-based web application development frameworks and advanced AI-driven insights, our user-friendly solutions offer low-code adaptability and seamless API integration web application capabilities.",
          videos: [
            "https://mavericksedge.ca/videos/Portfolio_Video_6.webm",
            "https://mavericksedge.ca/videos/Portfolio_Video_17.webm",
            "https://mavericksedge.ca/videos/Portfolio_Video_14.webm",
            "https://mavericksedge.ca/videos/Portfolio_Video_13.webm",
          ],
          gradient: "from-yellow-500/20 to-orange-500/20",
        },
        {
          id: "next-gen-ecommerce",
          title: "Next-Gen E-Commerce",
          description:
            "Launch and grow your online store with expertly crafted e-commerce sites on Shopify and WooCommerce. We build fast, secure storefronts with optimized checkout, seamless payment integration, inventory syncing, and built-in analytics to help you sell smarter. With AI-powered product recommendations built in, your customers discover what they want faster, boosting engagement and increasing sales.",
          videos: [
            "https://mavericksedge.ca/videos/Portfolio_Video_9.webm",
            "https://mavericksedge.ca/videos/Portfolio_Video_8.webm",
          ],
          gradient: "from-emerald-500/20 to-teal-500/20",
        },
        {
          id: "seo",
          title: "SEO Services and Performance",
          description:
            "As a leading Leduc SEO agency, we enhance your website's speed, mobile responsiveness, and Core Web Vitals to deliver a seamless user experience. Our strategies leverage Generative Engine Optimization (GEO) to position your content in AI-generated responses on platforms like Google's AI Overviews and ChatGPT. By focusing on structured data, semantic clarity, and user-centric design, we improve both your traditional search rankings and visibility in AI-driven results, increasing engagement and conversions.",
          videos: ["https://mavericksedge.ca/videos/Portfolio_Video_27.webm"],
          gradient: "from-orange-500/20 to-red-500/20",
        },
      ],
    },
  ];

  return (
    <div className="py-24 px-5 md:px-10 bg-black">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="block sm:hidden">Leduc Web Design Services</span>
            <span className="hidden sm:block">{services[0].title}</span>
          </h2>
          <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
            Comprehensive web development solutions tailored for Alberta businesses
          </p>
        </motion.div>

        {/* Cards Stack */}
        <div className="space-y-12">
          {services[0].items.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
