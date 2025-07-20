
import { motion } from "framer-motion";
import { 
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  MapPin,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Zap,
  Eye,
  DollarSign,
  Clock,
  Shield,
  Star,
  Phone,
  Mail
} from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import SEOHead from "@/components/SEOHead";
import { generateServiceStructuredData } from "@/lib/seo";

export default function SEOServices() {

  const seoServices = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local SEO Optimization",
      description: "Dominate Edmonton local search results and attract nearby customers",
      features: ["Google My Business Optimization", "Local Citation Building", "Review Management", "Local Schema Markup"],
      pricing: "Starting at $850/month"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Technical SEO Audit",
      description: "Comprehensive website analysis and optimization for search engines",
      features: ["Site Speed Optimization", "Mobile-First Indexing", "Core Web Vitals", "Schema Implementation"],
      pricing: "Starting at $1,200"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Keyword Research & Strategy",
      description: "Data-driven keyword targeting for maximum visibility and ROI",
      features: ["Competitor Analysis", "Search Volume Research", "Long-tail Keywords", "Content Strategy"],
      pricing: "Starting at $600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Content SEO",
      description: "High-quality, SEO-optimized content that ranks and converts",
      features: ["Blog Writing", "Page Optimization", "Content Audits", "Topic Clusters"],
      pricing: "Starting at $400/post"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "SEO Analytics & Reporting",
      description: "Transparent reporting with actionable insights and recommendations",
      features: ["Monthly Reports", "Rank Tracking", "Traffic Analysis", "ROI Measurement"],
      pricing: "Included with all packages"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "E-commerce SEO",
      description: "Specialized optimization for online stores and product pages",
      features: ["Product Optimization", "Category Structure", "Shopping Feed", "Conversion Tracking"],
      pricing: "Starting at $1,500/month"
    }
  ];

  const seoResults = [
    {
      metric: "300%+",
      description: "Average increase in organic traffic",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      metric: "85%",
      description: "Keywords ranking on page 1",
      icon: <Target className="h-6 w-6" />
    },
    {
      metric: "200%+",
      description: "Increase in qualified leads",
      icon: <Users className="h-6 w-6" />
    },
    {
      metric: "150%+",
      description: "Boost in online revenue",
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const seoProcess = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your website's current SEO performance, technical issues, and opportunities.",
      deliverables: ["Technical SEO audit", "Competitor analysis", "Keyword research", "Action plan"]
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom SEO strategy tailored to your business goals, target audience, and local Edmonton market.",
      deliverables: ["SEO strategy document", "Keyword targeting plan", "Content calendar", "Timeline & milestones"]
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description: "Execute the SEO strategy with on-page optimization, technical fixes, and content creation.",
      deliverables: ["On-page optimization", "Technical fixes", "Content creation", "Local SEO setup"]
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "Continuous monitoring, analysis, and optimization based on performance data and algorithm updates.",
      deliverables: ["Monthly reports", "Rank tracking", "Performance analysis", "Strategy adjustments"]
    }
  ];

  const localSEOBenefits = [
    {
      title: "Increased Local Visibility",
      description: "Appear in local search results when Edmonton customers search for your services",
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Higher Quality Traffic",
      description: "Attract customers who are actively searching for your products or services",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Better ROI",
      description: "SEO provides long-term results with better ROI than paid advertising",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Build Trust & Authority",
      description: "Higher rankings establish credibility and trust with potential customers",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const clientTestimonials = [
    {
      name: "Sarah Mitchell",
      business: "Edmonton Law Firm",
      quote: "Our website traffic increased by 400% in just 6 months. We're now ranking #1 for 'Edmonton personal injury lawyer'.",
      rating: 5
    },
    {
      name: "Mike Chen",
      business: "Local Restaurant Chain",
      quote: "Mavericks Edge helped us dominate local search results. Our online orders increased by 250%.",
      rating: 5
    },
    {
      name: "Jennifer Adams",
      business: "Healthcare Clinic",
      quote: "Professional, results-driven team. They delivered exactly what they promised - first page rankings for all our target keywords.",
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Edmonton SEO Services | Local SEO Experts | #1 Rankings | Mavericks Edge"
        description="Professional SEO services in Edmonton. Dominate local search results, increase website traffic, and grow your business. Guaranteed results with transparent reporting."
        keywords="Edmonton SEO services, local SEO Edmonton, search engine optimization Alberta, SEO company Edmonton, Google rankings Edmonton, digital marketing SEO"
        canonicalUrl="/seo-services-edmonton"
        ogTitle="Edmonton SEO Services | Local SEO Experts | #1 Rankings | Mavericks Edge"
        ogDescription="Professional SEO services in Edmonton. Dominate local search results, increase website traffic, and grow your business."
        ogImage="https://mavericksedge.ca/images/logo-transparent-thumb4x.png"
        ogType="website"
        structuredData={generateServiceStructuredData(
          "SEO Services Edmonton",
          "Professional SEO services in Edmonton including local SEO, technical optimization, and content marketing for improved search rankings",
          "https://mavericksedge.ca/seo-services-edmonton",
          "$850 - $3000"
        )}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div className="pt-44 md:pt-48 pb-24 px-5 md:px-10 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
          <div className="container mx-auto relative">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    5-Star Rated SEO Agency in Edmonton
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 font-heading">
                  Edmonton 
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> SEO Services</span>
                  <br />That Get Results
                </h1>
                <p className="text-xl md:text-2xl text-[#AAAAAA] mb-12 max-w-4xl leading-relaxed">
                  Dominate Google search results and attract more local customers with our proven SEO strategies. 
                  We help Edmonton businesses achieve first-page rankings and increase organic traffic by 300%+.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <motion.button
                    className="px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3"
                    style={{
                      background: `linear-gradient(90deg, #10B981 0%, #3B82F6 100%)`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Free SEO Audit <Search className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-600 hover:border-green-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '#case-studies'}
                  >
                    View Case Studies
                  </motion.button>
                </div>
                <div className="flex flex-wrap gap-8 text-sm text-[#AAAAAA]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Guaranteed First Page Rankings
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    300%+ Traffic Increase
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Transparent Monthly Reporting
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Results Stats */}
        <section className="py-16 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {seoResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-green-400 mb-4 flex justify-center">
                    {result.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{result.metric}</div>
                  <div className="text-[#AAAAAA]">{result.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Services Grid */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Comprehensive SEO Services
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                From local SEO to technical optimization, we provide everything you need 
                to dominate Edmonton search results and grow your business online.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1E1E1E] p-8 rounded-lg border border-gray-800 hover:border-green-400 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-green-400/10 text-green-400 px-3 py-1 text-sm font-medium">
                    {service.pricing}
                  </div>
                  <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-[#AAAAAA] mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-green-400/20 text-green-400 py-3 rounded-lg font-medium hover:bg-green-400/30 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO Benefits */}
        <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading">
                  Why Edmonton Businesses Need Local SEO
                </h2>
                <p className="text-xl text-[#AAAAAA] mb-8">
                  Local SEO helps your business appear in "near me" searches and Google Map results, 
                  connecting you with customers in Edmonton who are ready to buy.
                </p>
                <div className="space-y-6">
                  {localSEOBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-green-400/20 p-3 rounded-lg">
                        <div className="text-green-400">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-[#AAAAAA]">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-[#121212] p-8 rounded-lg border border-gray-800">
                  <h3 className="text-2xl font-bold mb-6 text-center">Local Search Stats</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span>Mobile local searches</span>
                      <span className="text-green-400 font-bold">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Visit business within 24hrs</span>
                      <span className="text-green-400 font-bold">46%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Make purchase same day</span>
                      <span className="text-green-400 font-bold">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Trust online reviews</span>
                      <span className="text-green-400 font-bold">91%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEO Process */}
        <section className="py-24 px-5 md:px-10 bg-[#121212]">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Our Proven SEO Process
              </h2>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
                We follow a systematic approach that has helped hundreds of Edmonton businesses 
                achieve first-page rankings and increase their organic traffic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#1E1E1E] p-8 rounded-lg border border-gray-800 relative"
                >
                  <div className="absolute -top-4 -left-4 bg-green-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 mt-4">{step.title}</h3>
                  <p className="text-[#AAAAAA] mb-6">{step.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-400">Deliverables:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Success Stories from Edmonton Businesses
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#121212] p-8 rounded-lg border border-gray-800"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#AAAAAA] mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-green-400">{testimonial.business}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-5 md:px-10 bg-gradient-to-r from-green-500 to-blue-600">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading">
                Ready to Dominate Edmonton Search Results?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get your free SEO audit and discover how we can help you outrank your competitors 
                and attract more customers than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/contact'}
                >
                  <Search className="h-5 w-5" />
                  Get Free SEO Audit
                </motion.button>
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = 'tel:+12508838849'}
                >
                  <Phone className="h-5 w-5" />
                  Call (250) 883-8849
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </motion.div>
    </>
  );
}
