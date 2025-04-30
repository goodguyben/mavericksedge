
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Check, BarChart2, Megaphone, Target, Mail, Users, TrendingUp } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

const MarketingPricing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Marketing That <span className="text-maverick-orange">Connects</span></h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl mb-8">
                We believe in marketing that builds genuine connections with your audience. No gimmicks, just authentic strategies that help you grow your brand with heart and purpose.
              </p>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                  <Heart className="mr-2 h-5 w-5" /> Let's grow your brand together
                </a>
              </Link>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-[#1A1A1A] p-2 rounded-lg border border-gray-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Marketing Services" 
                  className="rounded-lg w-full h-auto transform transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Strategy & Creative Packages */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Strategy & Creative <span className="text-maverick-orange">Packages</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Thoughtfully crafted packages to help you build a strong foundation for your marketing efforts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* EdgeIgnite Marketing Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Megaphone className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeIgnite Marketing Package</h3>
              <p className="text-maverick-orange mb-4 font-medium">All-in-one marketing infrastructure</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$1,800</span>
                <span className="text-[#AAAAAA] ml-2">CAD+</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Strategy and positioning workshop",
                  "Audience persona development",
                  "Competitive snapshot with AI insights",
                  "Digital presence audit",
                  "Google Business Profile setup",
                  "Social media setup (3 platforms)",
                  "Analytics setup with goal tracking",
                  "AI marketing opportunity scan",
                  "Content strategy playbook",
                  "High-value content assets creation",
                  "45-day marketing action roadmap"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgeBrand Identity Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#121212] rounded-xl p-8 border-2 border-maverick-orange shadow-lg shadow-maverick-orange/20 flex flex-col h-full relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <Target className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeBrand Identity Package</h3>
              <p className="text-maverick-orange mb-4 font-medium">Full brand foundation</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$1,100</span>
                <span className="text-[#AAAAAA] ml-2">CAD+</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Discovery session & competitive scan",
                  "Brand positioning & strategy alignment",
                  "2–3 initial brand concept directions",
                  "Final logo suite in multiple formats",
                  "Visual identity system",
                  "Color palette & typography",
                  "Tone-of-voice and messaging guide",
                  "Social media branding assets",
                  "Key collateral design mockups",
                  "Export-ready brand style guide"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary w-full text-center py-3 rounded-md transition-all duration-300">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgeReach Core Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <TrendingUp className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeReach Core Package</h3>
              <p className="text-maverick-orange mb-4 font-medium">Future-ready digital presence</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$1,600</span>
                <span className="text-[#AAAAAA] ml-2">CAD+</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <motion.ul 
                className="space-y-3 mb-8 flex-grow"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Google Business Profile setup & optimization",
                  "Local listings on multiple platforms",
                  "Social profile optimization (3 platforms)",
                  "On-page SEO for multiple pages",
                  "Local schema markup implementation",
                  "Geo-tagged media optimization",
                  "Embedded reviews with schema",
                  "CRM-integrated lead capture setup",
                  "Email nurture flow setup",
                  "2 SEO blog posts with strategy"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>
          </div>

          {/* EdgeReach Lean Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeReach Lean Package</h3>
                <p className="text-maverick-orange mb-4 font-medium">Foundational digital visibility</p>
                <p className="text-[#AAAAAA] mb-6">
                  A perfect starting point for small businesses and organizations looking to establish a basic yet effective online presence that customers can find.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">$950</span>
                  <span className="text-[#AAAAAA] ml-2">CAD</span>
                  <span className="block text-[#AAAAAA] mt-1">One-time payment</span>
                </div>
                <Link href="/contact">
                  <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                    Learn More
                  </a>
                </Link>
              </div>
              <ul className="space-y-3">
                {[
                  "Google Business Profile setup and basic optimization",
                  "Business listings on 10 key directories",
                  "On-page SEO setup for 3 core website pages",
                  "Basic schema markup for business type and location",
                  "Mobile performance check and SSL setup",
                  "One SEO blog or local update content template"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Monthly Marketing Plans */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Ongoing Marketing <span className="text-maverick-orange">Support</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Marketing isn't a one-time effort. Our monthly plans help you maintain momentum and consistently grow your brand presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EdgeNurture Presence Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-maverick-orange transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-maverick-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BarChart2 className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeNurture Presence Plan</h3>
              <p className="text-maverick-orange mb-4 font-medium">Maintaining local visibility</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">$335</span>
                <span className="text-[#AAAAAA] ml-2">CAD/mo</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Google Business Profile upkeep (2-3 updates/month)",
                  "Review response & Q&A monitoring",
                  "Directory listings check & refresh",
                  "1 SEO blog post/month with local keywords",
                  "On-page SEO tweaks for existing pages",
                  "Schema update for seasonal changes",
                  "Review embed refresh",
                  "Email nurture flow tune-up",
                  "Retargeting pixel maintenance",
                  "Basic analytics snapshot"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline w-full text-center py-3 rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  Get Started
                </a>
              </Link>
            </motion.div>

            {/* EdgeEngage Content & Community Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#121212] rounded-xl p-8 border-2 border-maverick-orange shadow-lg shadow-maverick-orange/20 flex flex-col h-full relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                Most Comprehensive
              </div>
              <Users className="h-12 w-12 text-maverick-orange mb-6" />
              <h3 className="text-2xl font-semibold mb-2 font-heading">EdgeEngage Integrated Content Plan</h3>
              <p className="text-maverick-orange mb-4 font-medium">Building an engaged community</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">$1,850</span>
                <span className="text-[#AAAAAA] ml-2">CAD/mo</span>
                <span className="block text-[#AAAAAA] mt-1">Starting from</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "4 Hours Unified Monthly Content & Social Strategy",
                  "Audience/Keyword Research",
                  "Content Calendar Planning",
                  "4-6 SEO-Optimized Content Pieces/Month",
                  "Social Media Management (4 platforms)",
                  "Creation & Scheduling of Social Posts",
                  "2-3 email communications/month",
                  "Community engagement services",
                  "Polls, Q&As, and story-based campaigns",
                  "Integrated Monthly Performance Report"
                ].map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-maverick-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#DDDDDD]">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <a className="maverick-button maverick-button-primary w-full text-center py-3 rounded-md transition-all duration-300">
                  Get Started
                </a>
              </Link>
            </motion.div>
          </div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-[#1A1A1A] rounded-xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-6 font-heading">Additional Marketing Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Mail className="h-8 w-8 text-maverick-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Hourly Rate</h4>
                  <p className="text-[#AAAAAA] mb-2">
                    For graphic design, social media content, and consultation.
                  </p>
                  <p className="text-xl font-semibold text-maverick-orange">$75/hour</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="h-8 w-8 text-maverick-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Support Block</h4>
                  <p className="text-[#AAAAAA] mb-2">
                    Pre-purchase a block of support hours at a discounted rate.
                  </p>
                  <p className="text-xl font-semibold text-maverick-orange">4 hours for $250</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-[#AAAAAA] mb-4">
                Need something specific? We can create a custom marketing plan tailored to your unique needs and goals.
              </p>
              <Link href="/contact">
                <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md transition-all duration-300 hover:bg-maverick-orange hover:text-white">
                  <Heart className="mr-2 h-5 w-5" /> Let's discuss your marketing goals
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Marketing With a <span className="text-maverick-orange">Human Touch</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              We approach marketing differently – with empathy, creativity, and a focus on genuine connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "We Focus on Your Audience",
                description: "We take the time to understand your audience and what matters to them."
              },
              {
                title: "Quality Over Quantity",
                description: "We believe in meaningful content that resonates, not just filling up feeds."
              },
              {
                title: "Data-Informed, Human-Centered",
                description: "We use data to guide our decisions, but never lose sight of the human element."
              },
              {
                title: "Authentic Storytelling",
                description: "We help you tell your story in a way that's genuine and connects with people."
              },
              {
                title: "No Cookie-Cutter Solutions",
                description: "Every business is unique, and your marketing strategy should be too."
              },
              {
                title: "We're Your Partners",
                description: "We're invested in your success and work alongside you to achieve your goals."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-maverick-orange transition-all duration-300 h-full"
              >
                <h3 className="text-xl font-semibold mb-3 font-heading">{item.title}</h3>
                <p className="text-[#AAAAAA]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
};

export default MarketingPricing;
