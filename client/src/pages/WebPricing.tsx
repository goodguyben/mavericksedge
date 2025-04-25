
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Check, Monitor, Gift, Shield, Zap } from "lucide-react";
import PricingCard from "@/components/cards/PricingCard";
import { Button } from "@/components/ui/custom-button";

const webPricing = [
  {
    id: "launch-pad",
    title: "Launch Pad",
    subtitle: "Perfect for startups & small businesses",
    price: "$750",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Up to 5 core pages",
      "Basic contact form",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Security essentials",
      "Google Analytics 4 setup",
      "Accessibility basics check",
      "Performance check & report"
    ]
  },
  {
    id: "business-growth",
    title: "Business Growth Builder",
    subtitle: "For businesses ready to scale",
    price: "$1,650",
    currency: "CAD",
    oneTime: true,
    popular: true,
    features: [
      "Everything in Launch Pad",
      "Up to 10 pages total",
      "Booking system & advanced forms",
      "Enhanced SEO strategy & setup",
      "Resource Hub / Learning Center",
      "Blog setup",
      "Google Analytics 4 w/ Goal Tracking",
      "Enhanced Security Setup"
    ]
  },
  {
    id: "professional",
    title: "Professional / E-commerce",
    subtitle: "For established businesses",
    price: "$3,350+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Everything in Business Growth",
      "E-commerce functionality",
      "Advanced integrations",
      "Membership & subscription features",
      "AI-Powered Product Recommendations",
      "Advanced AI chatbot integration",
      "Customer Data Platform integration",
      "Custom reporting dashboard"
    ]
  }
];

const carePackages = [
  {
    id: "essentials-care",
    title: "Essentials Care Plan",
    subtitle: "Foundational security & upkeep",
    price: "$75",
    currency: "CAD/mo",
    oneTime: false,
    popular: false,
    features: [
      "Core CMS, Plugin & Theme Updates",
      "Up to 1 Hr/Month Support Time",
      "Regular Security Monitoring",
      "Daily Cloud Backups",
      "Uptime Monitoring (24/7)",
      "Database Optimization Check"
    ]
  },
  {
    id: "business-growth-care",
    title: "Business Growth Plan",
    subtitle: "Maintaining site health + support",
    price: "$145",
    currency: "CAD/mo",
    oneTime: false,
    popular: true,
    features: [
      "All Essentials Care Plan features",
      "Up to 2 Hrs/Month Support Time",
      "Minor edits & content updates",
      "Priority Support Queue",
      "Basic SEO Rank Tracking (10 keywords)",
      "Monthly Website Health Report"
    ]
  },
  {
    id: "performance-pro",
    title: "Performance Pro Plan",
    subtitle: "Proactive optimization & strategy",
    price: "$400+",
    currency: "CAD/mo",
    oneTime: false,
    popular: false,
    features: [
      "All Business Growth Plan features",
      "Up to 6 Hrs/Month Support Time",
      "Proactive Performance Checks",
      "Enhanced Security Monitoring",
      "Staging Site Access",
      "Monthly Performance Review Call (2h)"
    ]
  }
];

export default function WebPricing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-28 pb-16 px-5 md:px-10 relative bg-[#121212] overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-maverick-orange opacity-10 blur-3xl -top-20 right-[20%]"></div>
          <div className="absolute w-72 h-72 rounded-full bg-maverick-amber opacity-10 blur-3xl top-40 -right-20"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <Link href="/pricing" className="inline-flex items-center text-maverick-cream hover:text-maverick-orange mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to all pricing
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
            <div className="md:w-2/3">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Web & Digital Solutions</h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl">
                From simple landing pages to complex e-commerce platforms, we build responsive,
                high-performance websites that convert visitors into customers.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-end">
              <div className="p-5 bg-maverick-slate rounded-xl border border-maverick-slate/50">
                <div className="flex items-center mb-3">
                  <Monitor className="h-6 w-6 text-maverick-orange mr-3" />
                  <h3 className="text-xl font-semibold">Quick Facts</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Mobile-first responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>SEO optimized for better visibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Secure & fast-loading websites</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className="w-full h-[400px] bg-maverick-slate/30 rounded-xl mb-16 overflow-hidden relative flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-r from-maverick-charcoal via-transparent to-maverick-charcoal opacity-60"></div>
            <p className="text-maverick-cream/50 absolute">Website showcase image</p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="primary">View Gallery</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* One-time project pricing */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Project-Based Services</h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl">
                One-time website development projects to get your business online with a professional web presence.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center bg-maverick-slate/30 rounded-full px-4 py-2">
                <Gift className="h-5 w-5 text-maverick-orange mr-2" />
                <span className="text-sm text-maverick-cream">Payment plans available</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webPricing.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>
          
          {/* Enhancement package */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-maverick-dark-slate to-maverick-slate p-8 rounded-xl border border-maverick-slate/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-3">Website Enhancement Package</h3>
                <p className="text-maverick-cream/80 mb-4">
                  Have an existing website that needs targeted improvements? Our enhancement package
                  is designed to modernize and optimize your current web presence.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Performance audit & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Design refresh consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Content review</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Basic technical SEO check</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Accessibility review</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Call-to-action improvements</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex flex-col items-center justify-center p-6 bg-maverick-slate/50 rounded-xl">
                <p className="text-sm uppercase tracking-wider text-maverick-cream/70 mb-2">Starting at</p>
                <p className="text-4xl font-bold mb-2">$200<span className="text-xl font-normal text-maverick-cream/70">+</span></p>
                <p className="text-sm text-maverick-cream/70 mb-4">Project-based quote</p>
                <Button variant="primary" href="/contact" className="w-full">Get a Quote</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Website Care Plans */}
      <section className="py-20 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Website Care Plans</h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl">
                Ongoing maintenance and support to keep your website secure, up-to-date, and performing at its best.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center bg-maverick-slate/30 rounded-full px-4 py-2">
                <Shield className="h-5 w-5 text-maverick-orange mr-2" />
                <span className="text-sm text-maverick-cream">Cancel anytime</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carePackages.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Web Application Development */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Custom Web Application Development</h2>
              <p className="text-[#AAAAAA] text-xl mb-8">
                For businesses requiring unique features or workflows not met by off-the-shelf solutions,
                we offer custom web application development services.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-maverick-orange flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">In-depth Discovery</h4>
                      <p className="text-[#AAAAAA]">We thoroughly understand your business needs and technical requirements.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-maverick-orange flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom UX/UI Design</h4>
                      <p className="text-[#AAAAAA]">We design intuitive interfaces tailored to your users and objectives.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-maverick-orange flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">Bespoke Development</h4>
                      <p className="text-[#AAAAAA]">Our developers build your application with clean, efficient code.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-maverick-orange flex items-center justify-center shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold mb-1">Testing & Deployment</h4>
                      <p className="text-[#AAAAAA]">We rigorously test and deploy your application to ensure reliability.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Button variant="primary" href="/contact">Get Started</Button>
            </div>
            
            <div className="md:w-1/2">
              {/* Video placeholder */}
              <div className="w-full h-[350px] bg-maverick-slate/30 rounded-xl mb-8 overflow-hidden relative flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-maverick-charcoal opacity-60"></div>
                <Zap className="h-16 w-16 text-maverick-orange" />
                <p className="text-maverick-cream/50 absolute">Custom app demo video</p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="primary">Watch Demo</Button>
                </div>
              </div>
              
              <div className="bg-maverick-slate/20 rounded-xl p-8 border border-maverick-slate/30">
                <h3 className="text-2xl font-semibold mb-4">Price Guide</h3>
                <p className="text-[#AAAAAA] mb-4">
                  Custom web application development pricing varies based on complexity,
                  features, and integrations required.
                </p>
                <div className="flex items-center justify-between mb-2">
                  <span>Starting price:</span>
                  <span className="font-semibold text-xl">$4,500+ CAD</span>
                </div>
                <p className="text-[#AAAAAA] text-sm">
                  For detailed pricing, please contact us for a consultation and custom quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
