
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Check, Shield, Tool, BarChart, Zap, Target, Brain } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

const PricingComparison = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Compare Our <span className="text-maverick-orange">Solutions</span></h1>
            <p className="text-xl text-[#AAAAAA] mb-8">
              We've made it easy to compare our packages and find the perfect fit for your needs. No hidden fees or confusing terms – just clear, transparent pricing.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Edge Packages Comparison */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E] overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Edge Packages <span className="text-maverick-orange">Comparison</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Our Edge packages are designed to grow with your business, from getting started to becoming an industry leader.
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="min-w-[900px]"
            >
              <div className="grid grid-cols-4 gap-4">
                {/* Headers */}
                <div className="p-6 rounded-tl-xl bg-[#121212] border-b border-gray-800">
                  <h3 className="text-2xl font-semibold text-maverick-orange">Feature Comparison</h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 bg-[#121212] border-b border-gray-800 text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">EdgeStart</h3>
                  <p className="text-maverick-orange mb-2">Getting Started</p>
                  <p className="text-2xl font-bold">$850</p>
                  <p className="text-[#AAAAAA] text-sm">One-time</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 bg-[#121212] border-b border-maverick-orange text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                    Popular
                  </div>
                  <h3 className="text-xl font-semibold mb-2">EdgeGrow</h3>
                  <p className="text-maverick-orange mb-2">Business Growth</p>
                  <p className="text-2xl font-bold">$1,850</p>
                  <p className="text-[#AAAAAA] text-sm">One-time</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 bg-[#121212] border-b border-gray-800 text-center rounded-tr-xl"
                >
                  <h3 className="text-xl font-semibold mb-2">EdgeLead</h3>
                  <p className="text-maverick-orange mb-2">Enterprise Level</p>
                  <p className="text-2xl font-bold">$3,750+</p>
                  <p className="text-[#AAAAAA] text-sm">Starting from</p>
                </motion.div>

                {/* Web Pages */}
                <div className="p-6 bg-[#121212] border-b border-gray-800">
                  <p className="font-medium">Web Pages</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Up to 6 pages</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Up to 20 pages</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Custom web app</p>
                </div>

                {/* Design */}
                <div className="p-6 bg-[#121212] border-b border-gray-800">
                  <p className="font-medium">Design</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Mobile-responsive</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Mobile-first responsive</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Custom user interface</p>
                </div>

                {/* Forms */}
                <div className="p-6 bg-[#121212] border-b border-gray-800">
                  <p className="font-medium">Forms & Interaction</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Basic contact form</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Advanced forms with calendar</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>User accounts & dashboards</p>
                </div>

                {/* SEO */}
                <div className="p-6 bg-[#121212] border-b border-gray-800">
                  <p className="font-medium">SEO</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Basic SEO setup</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Full on-page SEO</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Comprehensive SEO strategy</p>
                </div>

                {/* Integrations */}
                <div className="p-6 bg-[#121212] border-b border-gray-800">
                  <p className="font-medium">Integrations</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Google Analytics</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>CRM & 3rd party integration</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Custom API integration</p>
                </div>

                {/* Support */}
                <div className="p-6 bg-[#121212] border-b border-gray-800">
                  <p className="font-medium">Post-Launch Support</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>Basic support</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>30 days support</p>
                </div>
                <div className="p-6 bg-[#121212] border-b border-gray-800 text-center">
                  <p>60 days support</p>
                </div>

                {/* CTA Buttons */}
                <div className="p-6 bg-[#121212] rounded-bl-xl">
                  <p className="font-medium">Ideal For</p>
                </div>
                <div className="p-6 bg-[#121212] text-center">
                  <p className="mb-4 text-[#AAAAAA]">Startups & small organizations</p>
                  <Link href="/web-pricing">
                    <a className="maverick-button maverick-button-outline inline-block px-4 py-2 text-sm rounded-md">Learn More</a>
                  </Link>
                </div>
                <div className="p-6 bg-[#121212] text-center">
                  <p className="mb-4 text-[#AAAAAA]">Growing businesses</p>
                  <Link href="/web-pricing">
                    <a className="maverick-button maverick-button-primary inline-block px-4 py-2 text-sm rounded-md">Learn More</a>
                  </Link>
                </div>
                <div className="p-6 bg-[#121212] text-center rounded-br-xl">
                  <p className="mb-4 text-[#AAAAAA]">Advanced business needs</p>
                  <Link href="/web-pricing">
                    <a className="maverick-button maverick-button-outline inline-block px-4 py-2 text-sm rounded-md">Learn More</a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Care Plans Comparison */}
      <section className="py-24 px-5 md:px-10 bg-[#121212] overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Website Care <span className="text-maverick-orange">Retainers</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Keep your digital presence secure, up-to-date, and performing at its best with our ongoing care plans.
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="min-w-[900px]"
            >
              <div className="grid grid-cols-4 gap-4">
                {/* Headers */}
                <div className="p-6 rounded-tl-xl bg-[#1A1A1A] border-b border-gray-800">
                  <h3 className="text-2xl font-semibold text-maverick-orange">Feature Comparison</h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center"
                >
                  <Shield className="h-8 w-8 text-maverick-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">EdgeCare</h3>
                  <p className="text-maverick-orange mb-2">Basic Security</p>
                  <p className="text-2xl font-bold">$75</p>
                  <p className="text-[#AAAAAA] text-sm">per month</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 bg-[#1A1A1A] border-b border-maverick-orange text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                    Popular
                  </div>
                  <Tool className="h-8 w-8 text-maverick-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">EdgeAdvance</h3>
                  <p className="text-maverick-orange mb-2">Growth Support</p>
                  <p className="text-2xl font-bold">$175</p>
                  <p className="text-[#AAAAAA] text-sm">per month</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center rounded-tr-xl"
                >
                  <BarChart className="h-8 w-8 text-maverick-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">EdgePro</h3>
                  <p className="text-maverick-orange mb-2">Strategic Oversight</p>
                  <p className="text-2xl font-bold">$400+</p>
                  <p className="text-[#AAAAAA] text-sm">per month</p>
                </motion.div>

                {/* Updates */}
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800">
                  <p className="font-medium">Content Updates</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>1 hour/month</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>3 hours/month</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>10 hours/month</p>
                </div>

                {/* Security */}
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800">
                  <p className="font-medium">Security</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Basic monitoring</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Enhanced monitoring</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Proactive security</p>
                </div>

                {/* SEO */}
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800">
                  <p className="font-medium">SEO & Performance</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Basic monitoring</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Ongoing technical SEO</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Proactive optimization</p>
                </div>

                {/* Strategy */}
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800">
                  <p className="font-medium">Strategy</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Not included</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Quarterly strategy check-ins</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Monthly strategy review</p>
                </div>

                {/* Support */}
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800">
                  <p className="font-medium">Support</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Email (48-hour response)</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Priority (24-hour response)</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 text-center">
                  <p>Dedicated support</p>
                </div>

                {/* CTA Buttons */}
                <div className="p-6 bg-[#1A1A1A] rounded-bl-xl">
                  <p className="font-medium">Ideal For</p>
                </div>
                <div className="p-6 bg-[#1A1A1A] text-center">
                  <p className="mb-4 text-[#AAAAAA]">Basic website maintenance</p>
                  <Link href="/web-pricing">
                    <a className="maverick-button maverick-button-outline inline-block px-4 py-2 text-sm rounded-md">Learn More</a>
                  </Link>
                </div>
                <div className="p-6 bg-[#1A1A1A] text-center">
                  <p className="mb-4 text-[#AAAAAA]">Growing businesses</p>
                  <Link href="/web-pricing">
                    <a className="maverick-button maverick-button-primary inline-block px-4 py-2 text-sm rounded-md">Learn More</a>
                  </Link>
                </div>
                <div className="p-6 bg-[#1A1A1A] text-center rounded-br-xl">
                  <p className="mb-4 text-[#AAAAAA]">Strategic businesses</p>
                  <Link href="/web-pricing">
                    <a className="maverick-button maverick-button-outline inline-block px-4 py-2 text-sm rounded-md">Learn More</a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Category Links */}
      <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Explore All Our <span className="text-maverick-orange">Services</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Discover detailed pricing for each of our service categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#121212] rounded-xl overflow-hidden group relative"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Web Services" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <Zap className="h-10 w-10 text-maverick-orange mb-4" />
                <h3 className="text-2xl font-semibold mb-2 font-heading">Web & Digital Solutions</h3>
                <p className="text-[#AAAAAA] mb-6">Websites, web apps, and digital platforms tailored to your needs.</p>
                <Link href="/web-pricing">
                  <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md transition-all duration-300 w-full text-center">
                    View Web Pricing
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* Marketing Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#121212] rounded-xl overflow-hidden group relative"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Marketing Services" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <Target className="h-10 w-10 text-maverick-orange mb-4" />
                <h3 className="text-2xl font-semibold mb-2 font-heading">Marketing & Creative</h3>
                <p className="text-[#AAAAAA] mb-6">Strategic marketing to boost your brand visibility and engagement.</p>
                <Link href="/marketing-pricing">
                  <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md transition-all duration-300 w-full text-center">
                    View Marketing Pricing
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* AI Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#121212] rounded-xl overflow-hidden group relative"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Services" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <Brain className="h-10 w-10 text-maverick-orange mb-4" />
                <h3 className="text-2xl font-semibold mb-2 font-heading">AI Integration & Automation</h3>
                <p className="text-[#AAAAAA] mb-6">Harness AI to streamline operations and enhance experiences.</p>
                <Link href="/ai-pricing">
                  <a className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md transition-all duration-300 w-full text-center">
                    View AI Pricing
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Promise <span className="text-maverick-orange">To You</span></h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Working with us means more than just getting a service – it means having a partner who truly cares about your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-[#1A1A1A] p-2 rounded-lg border border-gray-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-maverick-orange rounded-full z-0 blur-[60px] opacity-60"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-semibold mb-6 font-heading">What Makes Us <span className="text-maverick-orange">Different</span></h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Transparent Pricing",
                    description: "No hidden fees or surprise costs – just honest, clear pricing you can count on."
                  },
                  {
                    title: "Human Connection",
                    description: "We build real relationships with our clients based on trust, respect, and genuine care."
                  },
                  {
                    title: "Results-Focused",
                    description: "We measure our success by the tangible results we deliver for your business."
                  },
                  {
                    title: "Growth Partners",
                    description: "We're invested in your long-term success, not just completing a transaction."
                  }
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    className="flex items-start"
                  >
                    <Heart className="h-6 w-6 text-maverick-orange mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                      <p className="text-[#AAAAAA]">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
};

export default PricingComparison;
