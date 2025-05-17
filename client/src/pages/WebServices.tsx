import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { Code, Monitor, Database, Layout, ShoppingCart, Globe, Shield, Gauge, Bookmark, Users } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";
import { Link } from "wouter";
import { useEffect } from "react";

export default function WebServices() {
  // Track page view for analytics
  useEffect(() => {
    console.log("Web Services page viewed");
  }, []);
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-maverick-orange" />,
      title: "Custom Website Design & Development",
      description: "Tailored website solutions that align with your brand identity and business objectives. We create responsive, user-friendly websites that drive results."
    },
    {
      icon: <Database className="h-10 w-10 text-maverick-orange" />,
      title: "CMS Development & Customization",
      description: "Custom Content Management System solutions that make it easy for you to update and manage your website content without technical expertise."
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-maverick-orange" />,
      title: "E-commerce Platform Development",
      description: "Full-featured online stores built on platforms like Shopify or WooCommerce, designed to maximize sales and provide seamless shopping experiences."
    },
    {
      icon: <Code className="h-10 w-10 text-maverick-orange" />,
      title: "Custom Web Application Development",
      description: "Bespoke web applications tailored to your specific business needs, automating processes and enhancing efficiency."
    },
    {
      icon: <Monitor className="h-10 w-10 text-maverick-orange" />,
      title: "UX/UI Design",
      description: "User-centric design that enhances the user experience, creates intuitive interfaces, and increases conversion rates."
    },
    {
      icon: <Globe className="h-10 w-10 text-maverick-orange" />,
      title: "Third-Party API Integrations",
      description: "Seamless integration of third-party services and APIs to extend your website's functionality and provide a better user experience."
    },
    {
      icon: <Bookmark className="h-10 w-10 text-maverick-orange" />,
      title: "Website Hosting & Maintenance",
      description: "Reliable hosting solutions and regular maintenance to ensure your website remains secure, up-to-date, and performs optimally."
    },
    {
      icon: <Gauge className="h-10 w-10 text-maverick-orange" />,
      title: "Performance & Speed Optimization",
      description: "Optimization services that enhance your website's loading speed and overall performance, improving user experience and SEO rankings."
    },
    {
      icon: <Shield className="h-10 w-10 text-maverick-orange" />,
      title: "Website Security Audits & Hardening",
      description: "Comprehensive security audits and implementation of protective measures to safeguard your website against potential threats."
    },
    {
      icon: <Users className="h-10 w-10 text-maverick-orange" />,
      title: "CMS Training & Documentation",
      description: "Detailed training and documentation to empower your team to manage and update your website effectively."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Web Development Services | Custom Website Design & Solutions | Mavericks Edge</title>
        <meta name="description" content="Professional web design and development services for SMBs and nonprofits. Create responsive, user-friendly websites that drive results with our custom web solutions." />
        <link rel="canonical" href="https://mavericksedge.com/services/web" />
        <meta name="keywords" content="web design services, custom website development, CMS development, e-commerce solutions, web application development, UI/UX design, responsive website design" />
        
        {/* Open Graph data */}
        <meta property="og:title" content="Web Development Services | Custom Website Design & Solutions | Mavericks Edge" />
        <meta property="og:description" content="Professional web design and development services for SMBs and nonprofits. Create responsive, user-friendly websites that drive results with our custom web solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mavericksedge.com/services/web" />
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Web & Digital Solutions</h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mb-8">
                Elevate your online presence with our comprehensive web development and digital solutions tailored specifically for SMBs and nonprofits.
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
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Web Development" 
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Web Development Services</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We offer a wide range of web development services to help you establish a strong online presence
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

      {/* Process Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Web Development Process</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We follow a systematic approach to ensure your web project is delivered successfully
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description: "We start by understanding your business goals, target audience, and project requirements to create a strategic plan for your website."
              },
              {
                number: "02",
                title: "Design & Prototyping",
                description: "Our designers create wireframes and visual designs that align with your brand identity and provide an optimal user experience."
              },
              {
                number: "03",
                title: "Development",
                description: "Our experienced developers bring the designs to life, creating a functional website with clean, efficient code."
              },
              {
                number: "04",
                title: "Testing & Quality Assurance",
                description: "We rigorously test your website across various browsers and devices to ensure it performs flawlessly."
              },
              {
                number: "05",
                title: "Launch & Deployment",
                description: "After your approval, we deploy your website to your chosen hosting environment and ensure everything is working correctly."
              },
              {
                number: "06",
                title: "Ongoing Support & Maintenance",
                description: "We provide ongoing support and maintenance to keep your website secure, up-to-date, and performing optimally."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-maverick-orange opacity-70">{step.number}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-[#AAAAAA]">{step.description}</p>
                  </div>
                </div>
                {index < 5 && (
                  <div className="absolute left-4 top-16 h-full w-px bg-gradient-to-b from-maverick-orange to-transparent opacity-30 md:block hidden"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Web Projects</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Explore some of our recent web development projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "E-commerce Platform",
                category: "Retail"
              },
              {
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Nonprofit Website",
                category: "Community Services"
              },
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Financial Dashboard",
                category: "Finance"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-[#121212] border border-gray-800 group-hover:border-maverick-orange transition-all duration-300">
                  <div className="aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-maverick-orange">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/work">
              <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md md:py-3 md:text-lg md:px-8">
                View all projects
              </a>
            </Link>
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
              Find answers to common questions about our web development services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to develop a website?",
                answer: "The timeline for website development varies depending on the complexity and scope of the project. A simple informational website might take 4-6 weeks, while a complex e-commerce platform could take 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "What is your web development process?",
                answer: "Our web development process includes discovery and planning, design and prototyping, development, testing and quality assurance, launch and deployment, and ongoing support and maintenance. We keep you involved at every step to ensure your vision is realized."
              },
              {
                question: "Do you provide website maintenance services?",
                answer: "Yes, we offer comprehensive website maintenance services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, backups, and performance optimization."
              },
              {
                question: "Can you redesign my existing website?",
                answer: "Absolutely! We specialize in website redesigns that improve user experience, enhance brand presence, and drive better results. We'll analyze your current website and develop a strategy to modernize its design and functionality."
              },
              {
                question: "What technologies do you use for web development?",
                answer: "We use modern, industry-standard technologies that ensure your website is fast, secure, and scalable. Depending on your needs, we may use HTML5, CSS3, JavaScript, React, Node.js, and various content management systems like WordPress or custom solutions."
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