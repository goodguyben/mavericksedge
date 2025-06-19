import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { BarChart3, PieChart, Megaphone, Mail, Globe, Send, Award, Calendar, TrendingUp, Users } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import SplitText from "@/components/ui/SplitText";
import { Link } from "wouter";
import { useEffect } from "react";

export default function MarketingServices() {
  // Track page view for analytics
  useEffect(() => {
    console.log("Marketing Services page viewed");
  }, []);
  
  const services = [
    {
      icon: <TrendingUp className="h-10 w-10 text-maverick-orange" />,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals, target audience, and industry landscape."
    },
    {
      icon: <Award className="h-10 w-10 text-maverick-orange" />,
      title: "Brand & Identity Development",
      description: "Professional branding services including logo design, style guides, brand messaging, and visual identity creation."
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "SEO & PPC Advertising",
      description: "Search engine optimization and pay-per-click advertising to improve visibility, drive targeted traffic, and increase conversions."
    },
    {
      icon: <Users className="h-10 w-10 text-maverick-orange" />,
      title: "Social Media Strategy & Management",
      description: "Effective social media strategies and daily management to build community, increase engagement, and drive brand awareness."
    },
    {
      icon: <Mail className="h-10 w-10 text-maverick-orange" />,
      title: "Email Marketing Campaigns",
      description: "Strategic email marketing campaigns that nurture leads, engage customers, and drive conversions with personalized content."
    },
    {
      icon: <Megaphone className="h-10 w-10 text-maverick-orange" />,
      title: "Content Creation & Marketing",
      description: "High-quality content creation and distribution strategies that establish your brand authority and attract your target audience."
    },
    {
      icon: <Calendar className="h-10 w-10 text-maverick-orange" />,
      title: "Event Marketing & Management",
      description: "Comprehensive event planning, promotion, and management services for both in-person and virtual events."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-maverick-orange" />,
      title: "Marketing Analytics & Reporting",
      description: "Data-driven marketing analytics and detailed reporting to track performance, measure ROI, and optimize your marketing efforts."
    },
    {
      icon: <PieChart className="h-10 w-10 text-maverick-orange" />,
      title: "Market Research & Analysis",
      description: "In-depth market research and competitor analysis to identify opportunities and inform strategic marketing decisions."
    },
    {
      icon: <Send className="h-10 w-10 text-maverick-orange" />,
      title: "Public Relations & Media Outreach",
      description: "Strategic public relations and media outreach to enhance brand reputation and increase visibility in your industry."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Marketing Services | Brand & Digital Marketing Solutions | Mavericks Edge</title>
        <meta name="description" content="Strategic marketing and creative solutions for SMBs and nonprofits. Boost brand visibility, engage your audience, and drive measurable growth with our tailored marketing services." />
        <link rel="canonical" href="https://mavericksedge.com/services/marketing" />
        <meta name="keywords" content="digital marketing strategy, brand development, SEO services, PPC management, social media marketing, email campaigns, event planning, marketing analytics" />
        
        {/* Open Graph data */}
        <meta property="og:title" content="Marketing Services | Brand & Digital Marketing Solutions | Mavericks Edge" />
        <meta property="og:description" content="Strategic marketing solutions to boost your brand visibility, engage your audience, and drive business growth for small businesses and nonprofits." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavericksedge.com/services/marketing" />
        <meta property="og:image" content="/images/logo-transparent-thumb4x.png" />
      </Helmet>
      
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
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                <SplitText
                  text="Marketing & Creative Services"
                  className="text-5xl md:text-7xl font-bold font-heading"
                  delay={200}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />
              </h1>
              <div className="text-xl text-[#AAAAAA] max-w-3xl mb-8">
                <SplitText
                  text="Strategic marketing and creative solutions to boost your brand visibility, engage your audience, and drive business growth."
                  className="text-xl text-[#AAAAAA]"
                  delay={500}
                  duration={0.4}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  stagger={0.03}
                />
              </div>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                  Get a free consultation
                </a>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-[#1A1A1A] p-1 rounded-lg border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Marketing Services" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Marketing Services</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We offer a comprehensive range of marketing services to help you grow your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
              >
                <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">{service.title}</h3>
                <p className="text-[#AAAAAA] group-hover:text-[#DDDDDD] transition-all duration-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Success Stories</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              See how our marketing strategies have helped businesses achieve their goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Brand Transformation",
                category: "Retail",
                stats: "250% increase in social engagement"
              },
              {
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Digital Campaign",
                category: "Healthcare",
                stats: "320% ROI on PPC advertising"
              },
              {
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Event Management",
                category: "Nonprofit",
                stats: "35% increase in donations"
              }
            ].map((casestudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-gray-800 hover:border-maverick-orange transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={casestudy.image} 
                    alt={casestudy.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <div className="text-maverick-orange mb-1">{casestudy.category}</div>
                  <h3 className="text-2xl font-semibold mb-3">{casestudy.title}</h3>
                  <p className="text-[#AAAAAA] group-hover:text-[#DDDDDD] transition-all duration-300 font-bold">
                    {casestudy.stats}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/work">
              <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md md:py-3 md:text-lg md:px-8">
                View all case studies
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Marketing Approach</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We follow a data-driven, results-oriented approach to marketing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "Research & Analysis",
                description: "We start by thoroughly understanding your business, target audience, competitors, and industry landscape to develop informed marketing strategies.",
                steps: ["Market Research", "Competitor Analysis", "Audience Segmentation", "SWOT Analysis"]
              },
              {
                title: "Strategy Development",
                description: "Based on our research, we create a comprehensive marketing strategy tailored to your specific business goals and budget constraints.",
                steps: ["Goal Setting", "Channel Selection", "Messaging Framework", "Budget Allocation"]
              },
              {
                title: "Implementation & Management",
                description: "Our team expertly executes the marketing strategy across all selected channels, managing campaigns with precision and attention to detail.",
                steps: ["Content Creation", "Campaign Launch", "Daily Management", "Stakeholder Updates"]
              },
              {
                title: "Measurement & Optimization",
                description: "We continuously monitor campaign performance, analyze results, and make data-driven optimizations to maximize your marketing ROI.",
                steps: ["Performance Tracking", "Analytics Review", "A/B Testing", "Iterative Improvements"]
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121212] rounded-xl p-8 border border-gray-800"
              >
                <h3 className="text-2xl font-semibold mb-4">{approach.title}</h3>
                <p className="text-[#AAAAAA] mb-6">{approach.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {approach.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-maverick-orange mr-2"></div>
                      <span>{step}</span>
                    </div>
                  ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Find answers to common questions about our marketing services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do you measure marketing success?",
                answer: "We track key performance indicators (KPIs) aligned with your business goals, such as website traffic, conversion rates, lead generation, social engagement, and ROI. We provide regular reports and analytics dashboards to show the impact of our marketing efforts."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have experience working with various industries, with a particular focus on SMBs and nonprofits. Our team has expertise in retail, healthcare, education, financial services, technology, and community organizations."
              },
              {
                question: "How long does it take to see results from marketing efforts?",
                answer: "The timeline for results varies depending on the marketing channels and strategies used. Some tactics like PPC advertising can show immediate results, while SEO and content marketing typically take 3-6 months to gain significant traction. We'll provide realistic expectations based on your specific situation."
              },
              {
                question: "Do you offer customized marketing packages?",
                answer: "Yes, we create tailored marketing packages based on your specific business needs, goals, and budget. We don't believe in one-size-fits-all solutions and will work with you to develop a marketing approach that aligns with your unique situation."
              },
              {
                question: "How often will we receive marketing reports?",
                answer: "We typically provide monthly comprehensive reports with in-depth analysis of your marketing performance. However, we can adjust the reporting frequency based on your preferences. We also schedule regular strategy meetings to discuss results and adjust tactics as needed."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 border-b border-gray-800 pb-6 last:border-b-0"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-[#AAAAAA]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      </motion.div>
    </div>
  );
}