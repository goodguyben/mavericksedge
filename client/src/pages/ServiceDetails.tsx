
import { motion } from "framer-motion";
import { ArrowRight, Check, Globe, ShoppingCart, Code, PenTool, Database, Zap, Search, BarChart3, MessageSquare, Brain, Server, Shield } from "lucide-react";
import { Link } from "wouter";
import ContactSection from "@/components/sections/ContactSection";

export default function ServiceDetails() {
  const serviceCategories = [
    {
      id: "web",
      title: "Web & Digital Solutions",
      description: "From brand-focused websites to complex web applications, we create digital experiences that connect with your audience and drive real results.",
      icon: <Globe className="h-12 w-12 text-maverick-orange" />,
      services: [
        {
          icon: <PenTool className="h-8 w-8 text-maverick-orange" />,
          title: "Custom Website Design & Development",
          description: "Tailored websites that reflect your brand, engage your audience, and drive conversions. Our mobile-first approach ensures optimal performance across all devices.",
          features: [
            "Strategic UX/UI design for maximum engagement",
            "Responsive, mobile-optimized layouts",
            "Accessible, standards-compliant code",
            "Search engine optimization from the ground up",
            "Performance optimization for lightning-fast load times"
          ],
          price: "Starting at $1,600"
        },
        {
          icon: <Database className="h-8 w-8 text-maverick-orange" />,
          title: "Content Management Systems",
          description: "User-friendly CMS solutions that give you control over your content without technical headaches. Update text, images, and more with confidence.",
          features: [
            "WordPress, Webflow, or custom CMS options",
            "Intuitive admin interfaces tailored to your needs",
            "Custom post types and taxonomies",
            "User role management and permissions",
            "Training and documentation for your team"
          ],
          price: "Starting at $2,200"
        },
        {
          icon: <ShoppingCart className="h-8 w-8 text-maverick-orange" />,
          title: "E-commerce Solutions",
          description: "Feature-rich online stores that showcase your products and streamline the purchasing process, turning visitors into loyal customers.",
          features: [
            "Customized shopping experiences",
            "Secure payment processing integration",
            "Inventory and order management",
            "Product filtering and search functionality",
            "Abandoned cart recovery features"
          ],
          price: "Starting at $3,400"
        },
        {
          icon: <Code className="h-8 w-8 text-maverick-orange" />,
          title: "Custom Web Applications",
          description: "Bespoke web applications designed to solve your unique business challenges, streamline operations, and improve efficiency.",
          features: [
            "Custom database architecture",
            "User authentication and authorization",
            "Third-party API integrations",
            "Automated workflows and processes",
            "Comprehensive testing and quality assurance"
          ],
          price: "Starting at $5,800"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing & Creative Services",
      description: "Strategic marketing solutions that build brand recognition, drive engagement, and create lasting connections with your target audience.",
      icon: <BarChart3 className="h-12 w-12 text-maverick-orange" />,
      services: [
        {
          icon: <Search className="h-8 w-8 text-maverick-orange" />,
          title: "Search Engine Optimization (SEO)",
          description: "Comprehensive SEO strategies that improve your visibility in search results, drive targeted traffic, and help you outrank competitors.",
          features: [
            "Keyword research and competitive analysis",
            "On-page optimization and content strategy",
            "Technical SEO audit and implementation",
            "Local SEO for regional businesses",
            "Monthly performance reporting and strategy adjustments"
          ],
          price: "Starting at $800/month"
        },
        {
          icon: <PenTool className="h-8 w-8 text-maverick-orange" />,
          title: "Brand & Identity Development",
          description: "Strategic brand development that differentiates your organization and creates memorable, authentic connections with your audience.",
          features: [
            "Brand strategy and positioning",
            "Logo design and visual identity",
            "Brand voice and messaging guidelines",
            "Brand style guide creation",
            "Brand implementation across platforms"
          ],
          price: "Starting at $2,800"
        },
        {
          icon: <MessageSquare className="h-8 w-8 text-maverick-orange" />,
          title: "Social Media Management",
          description: "Strategic social media management that builds community, drives engagement, and extends your brand's reach across platforms.",
          features: [
            "Platform strategy and content calendar",
            "Content creation and curation",
            "Community management and engagement",
            "Performance analytics and reporting",
            "Paid social campaign management"
          ],
          price: "Starting at $650/month"
        }
      ]
    },
    {
      id: "ai",
      title: "AI Integration & Automation",
      description: "Harness the power of artificial intelligence to streamline operations, enhance customer experiences, and gain competitive advantages.",
      icon: <Brain className="h-12 w-12 text-maverick-orange" />,
      services: [
        {
          icon: <Zap className="h-8 w-8 text-maverick-orange" />,
          title: "AI Readiness Assessment",
          description: "Comprehensive evaluation of your business processes, systems, and data to identify the best AI implementation opportunities.",
          features: [
            "Process and workflow analysis",
            "Data readiness evaluation",
            "AI opportunity identification",
            "Implementation roadmap development",
            "ROI projections and planning"
          ],
          price: "Starting at $950"
        },
        {
          icon: <MessageSquare className="h-8 w-8 text-maverick-orange" />,
          title: "Conversational AI & Chatbots",
          description: "Intelligent chatbots and conversational interfaces that enhance customer service, streamline inquiries, and provide 24/7 support.",
          features: [
            "Custom chatbot development",
            "Natural language processing implementation",
            "Integration with existing systems",
            "Training and knowledge base development",
            "Ongoing optimization and learning"
          ],
          price: "Starting at $1,600"
        },
        {
          icon: <Server className="h-8 w-8 text-maverick-orange" />,
          title: "Workflow Automation",
          description: "AI-powered automation solutions that eliminate repetitive tasks, reduce errors, and free your team to focus on high-value activities.",
          features: [
            "Process mapping and optimization",
            "Custom automation development",
            "Integration with existing systems",
            "User training and documentation",
            "Performance monitoring and refinement"
          ],
          price: "Starting at $2,400"
        },
        {
          icon: <Shield className="h-8 w-8 text-maverick-orange" />,
          title: "AI Governance & Management",
          description: "Comprehensive frameworks for responsible AI implementation, ensuring ethical use, compliance, and effective management.",
          features: [
            "AI ethics and compliance guidelines",
            "Data privacy and security protocols",
            "Performance monitoring systems",
            "Staff training and awareness",
            "Continuous improvement processes"
          ],
          price: "Starting at $1,800"
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-44 md:pt-48 pb-16 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Our Services</h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Comprehensive digital solutions designed specifically for small businesses, nonprofits, and startups
            who want to make a bigger impact with their online presence.
          </p>
        </div>
      </div>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.id} id={category.id} className={`py-24 px-5 md:px-10 ${categoryIndex % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#121212]'}`}>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
              <div className="p-4 rounded-lg bg-maverick-orange bg-opacity-10">
                {category.icon}
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2 font-heading">{category.title}</h2>
                <p className="text-xl text-[#AAAAAA] max-w-2xl">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="space-y-16">
              {category.services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading">{service.title}</h3>
                    </div>
                    <p className="text-lg text-[#AAAAAA] mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-maverick-orange mt-1 shrink-0 mr-3" />
                          <span className="text-[#DDDDDD]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                      <div className="text-xl font-semibold text-white">
                        {service.price}
                      </div>
                      <Link href="/pricing-comparison" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-maverick-orange hover:bg-maverick-orange/90 transition-all duration-200">
                        View Pricing Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                    <div className="bg-[#121212] p-1 rounded-lg border border-gray-800">
                      <img 
                        src={`https://images.unsplash.com/photo-${1547658719 + index}-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                        alt={service.title} 
                        className="rounded-lg w-full h-auto" 
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
                  </div>
                </motion.div>
              ))}
              
              <div className="text-center mt-12">
                <Link href="/pricing-comparison" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-maverick-orange hover:bg-maverick-orange/90 transition-all duration-200">
                  See All Pricing Options
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-24 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">Why Choose Mavericks Edge</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              We're more than just a service provider—we're your strategic partner committed to your long-term success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121212] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">SMB & Nonprofit Focus</h3>
              <p className="text-[#AAAAAA]">
                We specialize in serving small to medium businesses and nonprofits, with solutions designed specifically for your unique challenges and budget realities.
              </p>
            </div>

            <div className="bg-[#121212] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Strategic Partnership</h3>
              <p className="text-[#AAAAAA]">
                We don't just build websites—we build relationships. Our team takes the time to understand your goals and create solutions that drive measurable results.
              </p>
            </div>

            <div className="bg-[#121212] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Transparent Process</h3>
              <p className="text-[#AAAAAA]">
                Our clear, collaborative approach ensures you're informed and involved throughout the entire process, from initial concept to final delivery.
              </p>
            </div>

            <div className="bg-[#121212] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Growth-Focused Solutions</h3>
              <p className="text-[#AAAAAA]">
                Every solution we create is designed to scale with your organization, providing a foundation that supports your growth for years to come.
              </p>
            </div>

            <div className="bg-[#121212] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-[#AAAAAA]">
                Our relationship doesn't end at launch. We offer comprehensive support and maintenance to ensure your digital assets continue to perform optimally.
              </p>
            </div>

            <div className="bg-[#121212] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Results-Driven Approach</h3>
              <p className="text-[#AAAAAA]">
                We measure our success by your success. Our solutions are designed with clear objectives and KPIs to track and optimize performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
}
