
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

export default function PricingComparison() {
  // Core service packages
  const corePackages = [
    {
      name: "EdgeStart",
      description: "Perfect for startups and small organizations ready to establish their online presence.",
      price: "$1,600",
      priceNote: "one-time fee",
      features: [
        "5-page responsive website",
        "Basic SEO setup",
        "Google Analytics integration",
        "Mobile optimization",
        "Contact form",
        "Social media links",
        "Basic brand integration",
      ],
      recommended: false,
      btnText: "Start Your Journey"
    },
    {
      name: "EdgeGrow",
      description: "For established businesses looking to expand their digital footprint and drive more results.",
      price: "$3,400",
      priceNote: "one-time fee",
      features: [
        "Up to 10 pages with custom design",
        "Advanced SEO implementation",
        "Content management system",
        "Blog/news section",
        "Email newsletter integration",
        "Basic e-commerce (up to 25 products)",
        "Advanced contact forms",
        "Social media feed integration",
        "Basic multimedia gallery"
      ],
      recommended: true,
      btnText: "Scale Your Presence"
    },
    {
      name: "EdgeLead",
      description: "Comprehensive digital solution for organizations seeking market leadership and maximum impact.",
      price: "$5,800+",
      priceNote: "one-time fee",
      features: [
        "Unlimited pages with premium design",
        "Comprehensive SEO strategy",
        "Advanced e-commerce capabilities",
        "Membership/login functionality",
        "Custom database integration",
        "Multi-language support",
        "Advanced analytics dashboard",
        "User account management",
        "Personalized content delivery",
        "Custom API integrations"
      ],
      recommended: false,
      btnText: "Dominate Your Market"
    }
  ];

  // Website care retainers
  const carePackages = [
    {
      name: "Essential Care",
      description: "Basic maintenance to keep your site secure and functioning.",
      price: "$95",
      priceNote: "per month",
      features: [
        "Weekly security updates",
        "Weekly backups",
        "Uptime monitoring",
        "Basic SEO monitoring",
        "Monthly performance report"
      ],
      recommended: false,
      btnText: "Keep Site Secure"
    },
    {
      name: "Growth Care",
      description: "Proactive maintenance plus continuous improvements to support your growth.",
      price: "$245",
      priceNote: "per month",
      features: [
        "Everything in Essential Care",
        "Priority support (24-hour response)",
        "Monthly content updates (2 hours)",
        "Monthly SEO optimization",
        "Performance optimization",
        "Google Analytics reporting",
        "Monthly strategy call"
      ],
      recommended: true,
      btnText: "Support Your Growth"
    },
    {
      name: "Premium Care",
      description: "Comprehensive management for businesses that rely heavily on their digital presence.",
      price: "$495",
      priceNote: "per month",
      features: [
        "Everything in Growth Care",
        "VIP support (same-day response)",
        "Monthly content updates (5 hours)",
        "Weekly backups & security scans",
        "Advanced SEO management",
        "Conversion rate optimization",
        "Monthly strategy & reporting call",
        "Unlimited small fixes"
      ],
      recommended: false,
      btnText: "Maximize Your Impact"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">Pricing Packages</h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Transparent, value-driven solutions designed specifically for small businesses,
            nonprofits, and startups who want to make a bigger impact with their digital presence.
          </p>
        </div>
      </div>

      {/* Core Service Packages */}
      <section className="py-20 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">Web Development Packages</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Custom-tailored digital solutions to establish your brand, grow your audience, 
              and lead your market with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePackages.map((pkg, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden border ${
                  pkg.recommended 
                    ? 'border-maverick-orange' 
                    : 'border-gray-700'
                } p-6 flex flex-col h-full bg-[#121212] relative`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 font-heading">{pkg.name}</h3>
                <p className="text-[#AAAAAA] mb-4 flex-grow">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-[#AAAAAA] ml-2">{pkg.priceNote}</span>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                      <span className="text-[#DDDDDD]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-auto w-full py-3 px-6 rounded-md font-medium transition-colors 
                  ${pkg.recommended 
                    ? 'bg-maverick-orange hover:bg-maverick-orange/90 text-white' 
                    : 'bg-transparent border border-maverick-orange text-maverick-orange hover:bg-maverick-orange/10'
                  }`}>
                  {pkg.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Care Retainers */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">Website Care Plans</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Ongoing support and maintenance to keep your digital assets secure, 
              up-to-date, and continuously improving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carePackages.map((pkg, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden border ${
                  pkg.recommended 
                    ? 'border-maverick-orange' 
                    : 'border-gray-700'
                } p-6 flex flex-col h-full bg-[#1A1A1A] relative`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 font-heading">{pkg.name}</h3>
                <p className="text-[#AAAAAA] mb-4 flex-grow">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-[#AAAAAA] ml-2">{pkg.priceNote}</span>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                      <span className="text-[#DDDDDD]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-auto w-full py-3 px-6 rounded-md font-medium transition-colors 
                  ${pkg.recommended 
                    ? 'bg-maverick-orange hover:bg-maverick-orange/90 text-white' 
                    : 'bg-transparent border border-maverick-orange text-maverick-orange hover:bg-maverick-orange/10'
                  }`}>
                  {pkg.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services section */}
      <section className="py-20 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">Specialized Services</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Custom solutions to address specific needs and challenges in your digital journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Marketing Services */}
            <div className="bg-[#121212] p-8 rounded-xl border border-gray-700 hover:border-maverick-orange transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 font-heading">Marketing & Brand Development</h3>
              <p className="text-[#AAAAAA] mb-6">
                Strategic marketing solutions to elevate your brand, reach your target audience, and drive meaningful engagement.
              </p>
              <div className="mb-6">
                <span className="text-xl font-semibold text-white">Starting at $1,400</span>
              </div>
              <ul className="mb-8 space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Brand identity development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Digital marketing strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Social media management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">SEO & content strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Email marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Analytics & performance tracking</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-transparent border border-maverick-orange text-maverick-orange hover:bg-maverick-orange/10 rounded-md font-medium transition-colors">
                Boost Your Brand
              </button>
            </div>

            {/* AI Integration */}
            <div className="bg-[#121212] p-8 rounded-xl border border-gray-700 hover:border-maverick-orange transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 font-heading">AI Integration & Automation</h3>
              <p className="text-[#AAAAAA] mb-6">
                Harness the power of artificial intelligence to streamline operations, enhance customer experiences, and gain competitive advantages.
              </p>
              <div className="mb-6">
                <span className="text-xl font-semibold text-white">Starting at $950</span>
              </div>
              <ul className="mb-8 space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">AI readiness assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Chatbot implementation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Process automation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Data analysis & insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">AI-powered content generation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-maverick-orange shrink-0 mr-3" />
                  <span className="text-[#DDDDDD]">Custom API integrations</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-transparent border border-maverick-orange text-maverick-orange hover:bg-maverick-orange/10 rounded-md font-medium transition-colors">
                Future-Proof Your Business
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Get answers to common questions about our services, process, and pricing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="p-6 bg-[#1A1A1A] rounded-lg">
                <h3 className="text-xl font-bold mb-3">What's included in the initial consultation?</h3>
                <p className="text-[#DDDDDD]">
                  Our complimentary consultation includes understanding your business goals, target audience, and digital needs. We'll discuss potential solutions, provide recommendations, and outline a roadmap for your digital success—all with no obligation.
                </p>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg">
                <h3 className="text-xl font-bold mb-3">How long does it take to complete a website project?</h3>
                <p className="text-[#DDDDDD]">
                  Project timelines vary based on complexity and requirements. Typically, our EdgeStart packages take 3-4 weeks, EdgeGrow packages 5-7 weeks, and EdgeLead packages 8-12 weeks. We'll provide a detailed timeline during our initial planning phase.
                </p>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Do you offer nonprofit discounts?</h3>
                <p className="text-[#DDDDDD]">
                  Yes! We're passionate about supporting nonprofits making a difference. We offer special nonprofit rates with up to 15% discount on our standard packages. Contact us to discuss your specific needs and how we can help amplify your mission.
                </p>
              </div>

              <div className="p-6 bg-[#1A1A1A] rounded-lg">
                <h3 className="text-xl font-bold mb-3">Can we update our own website after it's built?</h3>
                <p className="text-[#DDDDDD]">
                  Absolutely! We build all our websites on user-friendly content management systems that allow you to make updates yourself. We also provide training to ensure you're comfortable making changes. Our care plans are available if you prefer we handle updates for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
}
