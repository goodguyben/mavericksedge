
import { motion } from "framer-motion";
import { Code, Database, Layout as LayoutIcon, ShoppingCart, Globe, Shield, Smartphone, Search, Star, CheckCircle, ArrowRight, MapPin, ChevronDown, Gauge, Wand2 } from "lucide-react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
// Removed timeline import; replacing with creative web app tiles grid
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiShopify, SiWordpress, SiVercel, SiNetlify, SiWoocommerce, SiFigma, SiGithub, SiPostgresql, SiStripe } from 'react-icons/si';
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { webDevelopmentServiceSchema, generateBreadcrumbSchema } from "@/components/StructuredData";
import { ROUTES } from "@/lib/routes";

export default function WebServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Track page view for analytics
  useEffect(() => {
    console.log("Web Services page viewed");
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const breadcrumbs = [
    { name: "Home", url: "https://mavericksedge.ca/" },
    { name: "Services", url: "https://mavericksedge.ca/services-edmonton-alberta" },
    { name: "Web Development", url: "https://mavericksedge.ca/web-design-services-edmonton" }
  ];

  const coreServices = [
    {
      icon: <LayoutIcon className="h-10 w-10 text-maverick-orange" />,
      title: "Custom Website Design",
      description: "We start with your sales story and build the site around it. Clear paths, clean layouts, and fast pages that help people choose you.",
      features: ["Mobile first", "Fast on real devices", "Accessible by default", "Built to convert"],
      price: "From $1,200"
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-maverick-orange" />,
      title: "E‑commerce that sells",
      description: "Shopify and WooCommerce stores tuned for speed and trust. Fewer clicks to checkout and a smoother mobile flow.",
      features: ["Payments that just work", "Inventory and shipping", "Mobile checkout", "Local delivery options"],
      price: "From $2,500"
    },
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Web Application Development",
      description: "Dashboards, booking systems, internal tools. We design for the job to be done and integrate with your stack.",
      features: ["Custom features", "Database integration", "User roles", "API integrations"],
      price: "From $3,500"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-maverick-orange" />,
      title: "Mobile-Responsive Design",
      description: "Most visitors are on their phones. We design touch-first interfaces and test on real devices.",
      features: ["Touch friendly", "Fast on 4G", "Cross‑device testing", "PWA ready"],
      price: "Included in all packages"
    }
  ];

  const techLogos: LogoItem[] = [
    { node: <SiReact className="text-white transition-colors duration-300 group-hover/item:text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white transition-colors duration-300" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-white transition-colors duration-300 group-hover/item:text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-white transition-colors duration-300 group-hover/item:text-[#38BDF8]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiShopify className="text-white transition-colors duration-300 group-hover/item:text-[#95BF47]" />, title: "Shopify", href: "https://www.shopify.com" },
    { node: <SiWordpress className="text-white transition-colors duration-300 group-hover/item:text-[#21759B]" />, title: "WordPress", href: "https://wordpress.org" },
    { node: <SiVercel className="text-white transition-colors duration-300" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiNetlify className="text-white transition-colors duration-300 group-hover/item:text-[#00AD9F]" />, title: "Netlify", href: "https://www.netlify.com" },
    { node: <SiWoocommerce className="text-white transition-colors duration-300 group-hover/item:text-[#96588A]" />, title: "WooCommerce", href: "https://woocommerce.com" },
    { node: <SiFigma className="text-white transition-colors duration-300 group-hover/item:text-[#F24E1E]" />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiGithub className="text-white transition-colors duration-300" />, title: "GitHub", href: "https://github.com" },
    { node: <SiPostgresql className="text-white transition-colors duration-300 group-hover/item:text-[#336791]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiStripe className="text-white transition-colors duration-300 group-hover/item:text-[#635BFF]" />, title: "Stripe", href: "https://stripe.com" },
  ];

  const specializedServices = [
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Cursor & Replit builds",
      description: "Plan, design, and ship in Cursor with Replit previews. Clean code, polished UI, fast iteration.",
      technologies: ["Cursor", "Replit", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "Shopify stores",
      description: "Theme customization and app integrations with a focus on speed and trust.",
      technologies: ["Shopify", "Liquid", "App Integration", "Payment Gateways"]
    },
    {
      icon: <Search className="h-10 w-10 text-maverick-orange" />,
      title: "SEO‑ready by design",
      description: "Technical foundations, clean IA, and content guidance. Launch with the basics done right.",
      technologies: ["Technical SEO", "Local Schema", "Core Web Vitals", "Edmonton Keywords"]
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Hosting and care",
      description: "Canadian hosting, SSL, backups, and updates. Your site stays healthy and secure.",
      technologies: ["Canadian Hosting", "SSL Security", "Daily Backups", "24/7 Monitoring"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery that matters",
      description: "We learn how you win business today. What customers ask. Where deals stall. That shapes the plan.",
      deliverables: ["Market Analysis", "Competitor Research", "Technical Requirements", "Project Roadmap"]
    },
    {
      number: "02",
      title: "Strategic design",
      description: "Wireframes and flows first. Then the visuals. We keep the path to action short and obvious.",
      deliverables: ["Wireframes", "Visual Designs", "Interactive Prototype", "Brand Integration"]
    },
    {
      number: "03",
      title: "Development",
      description: "Modern frameworks, type safety, and performance budgets. Built for real devices and real traffic.",
      deliverables: ["Responsive Website", "CMS Integration", "Performance Optimization", "Security Implementation"]
    },
    {
      number: "04",
      title: "Search basics",
      description: "Clean HTML, fast loading, structured data, and content guidance. We set you up to earn rankings.",
      deliverables: ["On-Page SEO", "Local Schema", "Google Analytics", "Search Console Setup"]
    },
    {
      number: "05",
      title: "Testing",
      description: "Accessibility, browser, and device checks. We tune for speed and remove friction.",
      deliverables: ["Cross-Browser Testing", "Mobile Testing", "Performance Report", "Accessibility Audit"]
    },
    {
      number: "06",
      title: "Launch and support",
      description: "We launch, measure, and keep improving. You get a clear handover and a friendly support channel.",
      deliverables: ["Website Launch", "Training Materials", "Maintenance Plan", "Support Access"]
    }
  ];

  // Creative grid content inspired by Home cascade (web applications)
  const webAppTiles = [
    {
      id: "custom-sites",
      title: "Custom Website Design",
      blurb:
        "Clean, honest interfaces that make the next step obvious. Built for real visitors and real devices so your story lands and your pipeline grows.",
      media: "https://mavericksedge.ca/videos/Portfolio_Video_3.webm",
      points: [
        "Clear paths to action on every page",
        "Mobile‑first layouts tested on real devices",
        "Accessible by default (WCAG‑minded)",
        "Fast loads with image/video optimization",
        "Easy edits with your preferred CMS",
        "Built to scale as your content grows",
      ],
      icon: <Code className="w-5 h-5 text-maverick-orange" />,
    },
    {
      id: "web-apps",
      title: "Custom Web Applications",
      blurb:
        "Dashboards, portals, and internal tools that replace spreadsheets and remove the busywork. Clarity for your team, momentum for your operations.",
      media: "https://mavericksedge.ca/videos/Portfolio_Video_6.webm",
      points: [
        "Role‑based access and secure authentication",
        "Clean data views with filters and exports",
        "Workflow automation and approvals",
        "API integrations with your stack (CRM/ERP)",
        "Audit trails and activity history",
        "Type‑safe code for long‑term maintainability",
      ],
      icon: <Wand2 className="w-5 h-5 text-maverick-orange" />,
    },
    {
      id: "ecommerce",
      title: "Next‑Gen E‑commerce",
      blurb:
        "Shopify and WooCommerce storefronts tuned for speed, trust, and a checkout that feels effortless—especially on mobile.",
      media: "https://mavericksedge.ca/videos/Portfolio_Video_9.webm",
      points: [
        "Fast product pages with clean information design",
        "Trust signals and social proof where it matters",
        "Streamlined mobile checkout with fewer taps",
        "Payment, tax, and shipping integrations",
        "Inventory sync and order notifications",
        "Built‑in analytics to track what’s working",
      ],
      icon: <ShoppingCart className="w-5 h-5 text-maverick-orange" />,
    },
    {
      id: "seo-performance",
      title: "SEO & Performance Foundations",
      blurb:
        "Search‑ready from day one. Technical SEO, structured data, and Core Web Vitals tuned for real‑world devices and Edmonton search intent.",
      media: "https://mavericksedge.ca/videos/Portfolio_Video_27.webm",
      points: [
        "Edmonton‑relevant keyword mapping and titles",
        "Structured data (schema) for rich results",
        "Clean HTML and internal linking",
        "Core Web Vitals performance budgets",
        "Image/video compression and lazy loading",
        "GA4 + Search Console wired for insights",
      ],
      icon: <Gauge className="w-5 h-5 text-maverick-orange" />,
    },
  ] as const;

  const testimonials = [
    {
      quote: "Mavericks Edge transformed our online presence. Their understanding of the Edmonton market helped us reach more local customers than ever before.",
      author: "Sarah Chen",
      company: "Edmonton Wellness Center",
      rating: 5
    },
    {
      quote: "The website they built for our Alberta-based business has been instrumental in our growth. Professional, fast, and perfectly optimized for search.",
      author: "Mike Rodriguez",
      company: "Northern Alberta Construction",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How much does web design cost in Edmonton?",
      answer: "Our Edmonton web design services start at $850 for basic business websites and range up to $10,000+ for complex e-commerce and custom applications. We provide transparent pricing and free consultations to discuss your specific needs and budget."
    },
    {
      question: "How long does it take to build a website in Edmonton?",
      answer: "Most Edmonton business websites take 4-8 weeks from start to finish. Simple brochure sites can be completed in 2-3 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We provide detailed timelines during our discovery phase."
    },
    {
      question: "Do you provide website hosting for Edmonton businesses?",
      answer: "Yes, we offer Canadian web hosting specifically optimized for Alberta businesses. Our hosting includes SSL certificates, daily backups, security monitoring, and 24/7 Edmonton-based support. Plans start at $25/month."
    },
    {
      question: "Can you help with SEO for my Edmonton business website?",
      answer: "Absolutely! All our websites include basic SEO optimization with Edmonton and Alberta keyword targeting. We also offer comprehensive SEO services including local optimization, Google My Business management, and ongoing search marketing."
    },
    {
      question: "Do you redesign existing websites for Edmonton businesses?",
      answer: "Yes, we specialize in website redesigns that improve user experience, search rankings, and conversion rates. We can work with your existing content and branding or create a completely fresh approach."
    },
    {
      question: "What makes your Edmonton web design different from competitors?",
      answer: "Our deep understanding of the Edmonton and Alberta business landscape, combined with cutting-edge design and development practices, sets us apart. We focus on local SEO, mobile optimization, and conversion-driven design that gets results."
    }
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mavericks Edge Web Design Edmonton",
    "image": "https://mavericksedge.ca/images/logo-transparent-thumb4x.png",
    "telephone": "+1-250-883-8849",
    "email": "info@mavericksedge.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6908 100 Ave NW, Suite B",
      "addressLocality": "Edmonton",
      "addressRegion": "Alberta",
      "postalCode": "T6A 0G2",
      "addressCountry": "Canada"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.5461,
      "longitude": -113.4938
    },
    "url": "https://mavericksedge.ca/web-design-services-edmonton",
    "sameAs": [
      "https://x.com/mavericksedge",
      "https://www.facebook.com/mavericksedge",
      "https://www.instagram.com/mavericksedge",
      "https://www.linkedin.com/company/mavericks-edge/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$1200-$10000",
    "areaServed": [
      "Edmonton",
      "Calgary",
      "Red Deer",
      "Lethbridge",
      "Alberta"
    ]
  };

  // Dynamic FAQ schema from on-page content
  const faqSchemaDynamic = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } as const;

  return (
    <div>
      <SEOHead 
        title="Mavericks Edge | Edmonton Website Design and Development"
        description="Professional Edmonton website design. Build responsive, SEO-optimized websites that drive results and help your business grow. Free quote today!"
        keywords="Edmonton website design, website design Edmonton, Edmonton web design, web development Edmonton, Edmonton websites"
        canonicalUrl="https://mavericksedge.ca/web-design-services-edmonton"
        ogTitle="Mavericks Edge | Edmonton Website Design and Development"
        ogDescription="Affordable Edmonton website design for businesses that want to stand out online. Fast, responsive, and SEO-optimized websites that convert visitors into customers."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
        ogType="website"
      />
      
      <StructuredData data={webDevelopmentServiceSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={localSchema} />
      <StructuredData data={faqSchemaDynamic} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section with clearer narrative */}
        <div className="pt-32 md:pt-40 pb-20 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-maverick-orange/5 to-transparent"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-maverick-orange" />
                    <span className="text-maverick-orange font-medium">Edmonton, Alberta</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Edmonton Website Design
                    </span>
                    <br />
                    <span className="text-maverick-orange">built for results</span>
                  </h1>
                  <p className="text-xl text-[#AAAAAA] max-w-2xl mb-6 leading-relaxed">
                    Most websites look fine. Fewer move the business. We plan and build a site around your sales story so visitors know what to do and why it matters.
                  </p>
                  <div className="mb-8 text-sm text-[#AAAAAA]">
                    <Link href="/work">
                      <a className="text-maverick-orange hover:text-white transition-colors">See recent work</a>
                    </Link>
                    <span className="mx-2">•</span>
                    <Link href={ROUTES.PRICING.WEB_DESIGN}>
                      <a className="text-maverick-orange hover:text-white transition-colors">View web design pricing</a>
                    </Link>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link href="/contact-edmonton-web-design">
                      <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg">
                        Get Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Link>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-[#AAAAAA]">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>100+ Edmonton Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>5-Star Client Reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Local Support Team</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-2 rounded-2xl border border-gray-700 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Edmonton Web Design Services" 
                    className="rounded-xl w-full h-auto" 
                  />
                  <div className="absolute -bottom-4 -right-4 bg-maverick-orange text-white p-4 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-sm">Websites Built</div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-maverick-orange rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Edmonton Website Design: High-Impact Web Experiences */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">High‑Impact Web Experiences</h2>
              <p className="text-[#AAAAAA] text-lg max-w-3xl mx-auto">Edmonton website design that blends clarity, speed, and modern storytelling—without the fluff.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {webAppTiles.map((tile, idx) => (
                <motion.div
                  key={tile.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group bg-[#1A1A1A] rounded-2xl border border-gray-800 overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <video
                      src={tile.media}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1.5 rounded-full text-sm border border-white/10">
                      {tile.icon}
                      <span className="text-white/90">{tile.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#CCCCCC] leading-relaxed mb-4">{tile.blurb}</p>
                    {Array.isArray((tile as any).points) && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#BBBBBB] text-sm">
                        {((tile as any).points as string[]).map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Edmonton Website Design Services
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
                Comprehensive web development solutions tailored for Alberta businesses. 
                From concept to launch, we deliver websites that drive results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#121212] rounded-2xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-maverick-orange opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-xl inline-block mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 font-heading">{service.title}</h3>
                    <p className="text-[#AAAAAA] mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-maverick-orange mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-maverick-orange font-semibold text-lg">{service.price}</span>
                      <Link href="/contact-edmonton-web-design">
                        <a className="text-maverick-orange hover:text-white transition-colors duration-300 font-medium">
                          Learn More →
                        </a>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href={ROUTES.PRICING.WEB_DESIGN}>
                <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg">
                  View All Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Link>
            </div>

          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Specialized Website Development
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
                Advanced solutions for specific business needs and platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
                >
                  <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-heading">{service.title}</h3>
                  <p className="text-[#AAAAAA] text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-maverick-orange bg-opacity-20 text-maverick-orange px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20">
              <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                logoHeight={48}
                gap={48}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#121212"
                ariaLabel="Featured partners and technologies"
              />
            </div>

            
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Our Website Design & Development Process
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
                A proven methodology that delivers exceptional results for Alberta businesses. 
                From discovery to launch and beyond.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-maverick-orange bg-opacity-20 rounded-xl flex items-center justify-center border border-maverick-orange group-hover:bg-maverick-orange group-hover:text-black transition-all duration-300">
                        <span className="text-2xl font-bold text-maverick-orange group-hover:text-black transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-[#AAAAAA] mb-4 leading-relaxed">{step.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 h-full w-px bg-gradient-to-b from-maverick-orange to-transparent opacity-30 lg:block hidden"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                What Edmonton Businesses Say
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
                Don't just take our word for it. Hear from local businesses we've helped succeed online.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#121212] rounded-2xl p-8 border border-gray-800"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-maverick-orange text-sm">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Edmonton Website Design FAQ
              </h2>
              <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
                Answers to common questions about process, timing, and value.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full p-6 text-left bg-[#1A1A1A] hover:bg-[#202020] transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold text-white pr-8">
                      {faq.question}
                    </h3>
                    <div className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="h-6 w-6 text-maverick-orange" />
                    </div>
                  </button>

                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#0F0F0F] border-t border-gray-800"
                    >
                      <div className="p-6">
                        <p className="text-[#CCCCCC] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-[#AAAAAA] mb-6">
                Still have questions? We are happy to help you pick the right next step.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-[#888888]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-maverick-orange" />
                  <span>Local Edmonton Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-maverick-orange" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-maverick-orange" />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-r from-maverick-orange to-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
                Ready to turn traffic into customers?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Join the Edmonton teams who ship fast, clear websites with us. Get a free consult and a clear plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact-edmonton-web-design">
                  <a className="bg-white text-maverick-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                    Start Your Project Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Link>
                <div className="flex items-center">
                  <span className="mr-2 text-white">📞</span>
                  <a href="tel:+12508838849" className="font-medium text-white hover:text-white/80 transition-colors" style={{color: 'white'}}>
                    (250) 883-8849
                  </a>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24-48h</div>
                  <div className="text-white/80 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Free</div>
                  <div className="text-white/80 text-sm">Initial Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Local</div>
                  <div className="text-white/80 text-sm">Edmonton Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </div>
  );
}
