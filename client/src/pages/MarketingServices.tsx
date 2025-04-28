
import { motion } from "framer-motion";
import { BarChart2, TrendingUp, PenTool, Calendar, Target, Mail, Search, MessageSquare, PieChart, Award } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";

export default function MarketingServices() {
  const services = [
    {
      icon: <TrendingUp className="h-10 w-10 text-maverick-orange" />,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals, target audience, and industry landscape."
    },
    {
      icon: <Award className="h-10 w-10 text-maverick-orange" />,
      title: "Brand & Identity Development",
      description: "Professional branding services including logo design, style guides, and brand messaging to establish a strong, cohesive identity."
    },
    {
      icon: <PenTool className="h-10 w-10 text-maverick-orange" />,
      title: "Graphic Design Services",
      description: "Creative graphic design for both web and print, ensuring consistent visual communication across all channels."
    },
    {
      icon: <Search className="h-10 w-10 text-maverick-orange" />,
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive SEO services including local, national, and technical optimization to improve your search engine rankings."
    },
    {
      icon: <Target className="h-10 w-10 text-maverick-orange" />,
      title: "PPC Advertising Management",
      description: "Strategic pay-per-click advertising campaigns on platforms like Google Ads and social media to drive targeted traffic."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-maverick-orange" />,
      title: "Social Media Strategy & Management",
      description: "Effective social media strategies and daily management to build community and increase brand awareness."
    },
    {
      icon: <Mail className="h-10 w-10 text-maverick-orange" />,
      title: "Email Marketing Campaigns",
      description: "Tailored email marketing campaigns and automation to nurture leads and maintain customer relationships."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-maverick-orange" />,
      title: "Marketing Analytics & Reporting",
      description: "Comprehensive analytics and regular reporting to track performance and make data-driven decisions."
    },
    {
      icon: <PieChart className="h-10 w-10 text-maverick-orange" />,
      title: "Conversion Rate Optimization",
      description: "Strategic analysis and optimization to improve your website's conversion rates and maximize ROI."
    },
    {
      icon: <Calendar className="h-10 w-10 text-maverick-orange" />,
      title: "Event Planning & Management",
      description: "Full-service event planning and execution for corporate events, conferences, galas, and private functions."
    }
  ];

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
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Marketing & Creative Services</h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mb-8">
                Strategic marketing and creative solutions to boost your brand visibility, engage your audience, and drive business growth.
              </p>
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
              We offer a comprehensive range of marketing and creative services to boost your brand's presence
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

      {/* Event Management Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-[#1A1A1A] p-1 rounded-lg border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Event Management" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
            </div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Event Management Excellence</h2>
              <p className="text-[#AAAAAA] text-lg mb-6">
                From corporate conferences to fundraising galas, our team brings creativity, precision, and flawless execution to every event we manage.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Full-service event planning and execution",
                  "Virtual and hybrid event production",
                  "Venue selection and management",
                  "Vendor sourcing and coordination",
                  "On-site event management",
                  "Post-event analysis and reporting"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-maverick-orange bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-maverick-orange"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md md:py-3 md:text-lg md:px-8">
                  Discuss your event
                </a>
              </Link>
            </motion.div>
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
              We follow a data-driven approach to deliver measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Research & Analysis",
                description: "We start by understanding your business, audience, and competitors to establish a solid foundation for your marketing strategy."
              },
              {
                number: "02",
                title: "Strategy Development",
                description: "Based on research insights, we create a comprehensive marketing strategy aligned with your business objectives."
              },
              {
                number: "03",
                title: "Implementation",
                description: "We execute the strategy across various channels, leveraging our expertise to maximize impact and reach."
              },
              {
                number: "04",
                title: "Measure & Optimize",
                description: "We continuously monitor performance, analyze results, and make data-driven optimizations to improve outcomes."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-7xl font-bold text-maverick-orange opacity-10 group-hover:opacity-20 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading relative z-10">{step.title}</h3>
                <p className="text-[#AAAAAA] group-hover:text-[#DDDDDD] transition-all duration-300 relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Case Studies</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Explore how our marketing strategies have driven success for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Brand Transformation",
                category: "Retail",
                metrics: "250% increase in social engagement"
              },
              {
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Digital Campaign",
                category: "Healthcare",
                metrics: "320% ROI on PPC advertising"
              },
              {
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Event Management",
                category: "Nonprofit",
                metrics: "Raised $2.5M in a single event"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-[#1A1A1A] border border-gray-800 group-hover:border-maverick-orange transition-all duration-300">
                  <div className="aspect-[4/3]">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-maverick-orange mb-2">{study.category}</div>
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-[#AAAAAA]">{study.metrics}</p>
                  </div>
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

      <ContactSection />
    </motion.div>
  );
}
