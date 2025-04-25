
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Check, PieChart, Award, Calendar, BarChart } from "lucide-react";
import PricingCard from "@/components/cards/PricingCard";
import { Button } from "@/components/ui/custom-button";

const marketingPricing = [
  {
    id: "marketing-foundation",
    title: "Marketing Foundation Package",
    subtitle: "Launch your digital marketing",
    price: "$1,400",
    priceRange: "+",
    currency: "CAD",
    oneTime: true,
    popular: true,
    features: [
      "Strategy Workshop",
      "Digital Presence Audit",
      "Competitor Snapshot",
      "Setup of 2-3 Key Channels",
      "Basic Conversion Tracking Setup",
      "Mini AI Marketing Opportunity Scan",
      "45-Day Action Plan"
    ]
  },
  {
    id: "brand-identity",
    title: "Brand Identity Package",
    subtitle: "Full brand foundation",
    price: "$900",
    priceRange: "+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Discovery & Brand Strategy Session",
      "2-3 Initial Brand Concepts",
      "Final Logo Suite",
      "Comprehensive Style Guide",
      "Key Collateral Design Concepts"
    ]
  },
  {
    id: "content-engine",
    title: "Strategic Content Engine",
    subtitle: "Build authority with content",
    price: "$1,600",
    priceRange: "+",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "Content Strategy Session",
      "Audience/Keyword Research",
      "AI-Assisted Topic Ideation",
      "Core Content Piece Creation",
      "Multi-Channel Repurposing Plan",
      "Basic Content Performance Tracking"
    ]
  }
];

const monthlyPlans = [
  {
    id: "digital-presence",
    title: "Digital Presence Starter",
    subtitle: "Establish core online presence",
    price: "$400",
    priceRange: "/mo",
    currency: "CAD",
    oneTime: false,
    popular: false,
    features: [
      "Google Business Profile Management",
      "Local Citation Management",
      "Monthly Performance Report",
      "Check-in Call",
      "Social Media Profile Management (1 platform)",
      "8-12 Social Posts/Month"
    ]
  },
  {
    id: "content-community",
    title: "Integrated Content & Community",
    subtitle: "Build engaged audience",
    price: "$1,100",
    priceRange: "/mo",
    currency: "CAD",
    oneTime: false,
    popular: true,
    features: [
      "4 Hours Monthly Strategy Session",
      "Audience/Keyword Research",
      "Content Calendar Planning",
      "4-6 SEO-Optimized Content Pieces/Month",
      "Social Media Management (4 platforms)",
      "40-50 Social Posts/Month",
      "Integrated Performance Report"
    ]
  },
  {
    id: "design-support",
    title: "Graphic Design Support",
    subtitle: "Flexible design resources",
    price: "$240",
    currency: "CAD",
    oneTime: true,
    popular: false,
    features: [
      "4-Hour Design Support Block",
      "Social Media Graphics",
      "Marketing Collateral Updates",
      "Presentation Visuals",
      "Web Graphics",
      "Additional Hours Available"
    ]
  }
];

export default function MarketingPricing() {
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
          <div className="absolute w-96 h-96 rounded-full bg-maverick-amber opacity-10 blur-3xl -top-20 right-[20%]"></div>
          <div className="absolute w-72 h-72 rounded-full bg-maverick-orange opacity-10 blur-3xl bottom-20 -right-20"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <Link href="/pricing" className="inline-flex items-center text-maverick-cream hover:text-maverick-orange mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to all pricing
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
            <div className="md:w-2/3">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Marketing & Creative Services</h1>
              <p className="text-xl text-[#AAAAAA] max-w-3xl">
                Strategic marketing solutions that boost your brand visibility, engage your audience, 
                and drive meaningful conversions.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-end">
              <div className="p-5 bg-maverick-slate rounded-xl border border-maverick-slate/50">
                <div className="flex items-center mb-3">
                  <PieChart className="h-6 w-6 text-maverick-orange mr-3" />
                  <h3 className="text-xl font-semibold">Key Benefits</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Data-driven strategies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>Multi-channel approach</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2 shrink-0" />
                    <span>ROI-focused campaigns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Case Study Carousel Placeholder */}
          <div className="w-full overflow-hidden rounded-xl mb-16">
            <div className="flex overflow-x-auto pb-8 space-x-6 no-scrollbar">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="min-w-[350px] md:min-w-[400px] h-[300px] bg-maverick-slate/30 rounded-xl relative flex-shrink-0 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-maverick-charcoal via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-maverick-orange mb-2 text-sm uppercase tracking-wider">Case Study {item}</span>
                    <h3 className="text-xl font-semibold mb-2">Client Success Story</h3>
                    <p className="text-maverick-cream/80 mb-4 text-sm">Dynamic case study content</p>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Strategy & Creative Packages */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Strategy & Creative Packages</h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl">
                One-time packages to establish your marketing foundation, brand identity, and content strategy.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center bg-maverick-slate/30 rounded-full px-4 py-2">
                <Award className="h-5 w-5 text-maverick-orange mr-2" />
                <span className="text-sm text-maverick-cream">Results-driven</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingPricing.map((plan, index) => (
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
      
      {/* Client testimonial section */}
      <section className="py-16 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-maverick-dark-slate to-maverick-slate rounded-xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Dynamic image placeholder */}
            <div className="absolute top-0 right-0 w-[300px] h-full bg-maverick-slate/20 rounded-l-xl hidden md:block">
              <div className="w-full h-full flex items-center justify-center text-maverick-cream/30">
                Client Image
              </div>
            </div>
            
            <div className="md:max-w-[60%]">
              <div className="text-4xl text-maverick-orange mb-6">"</div>
              <blockquote className="text-xl md:text-2xl mb-8 italic text-maverick-cream/90">
                The marketing strategy developed by Mavericks Edge transformed our online presence. 
                Our engagement increased by 200% and we saw a significant boost in qualified leads.
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-maverick-slate/50 mr-4"></div>
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-sm text-maverick-cream/70">CEO, TechStartup Inc.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Monthly Plans */}
      <section className="py-20 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Monthly Marketing Plans</h2>
              <p className="text-[#AAAAAA] text-xl max-w-2xl">
                Consistent, ongoing marketing support to build and maintain your digital presence.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center bg-maverick-slate/30 rounded-full px-4 py-2">
                <Calendar className="h-5 w-5 text-maverick-orange mr-2" />
                <span className="text-sm text-maverick-cream">No long-term contracts</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyPlans.map((plan, index) => (
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
      
      {/* Marketing results section */}
      <section className="py-20 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Real Results For Our Clients</h2>
              <p className="text-[#AAAAAA] text-xl mb-8">
                We measure our success by the tangible outcomes we deliver for our clients.
                Here are some of the results we've achieved:
              </p>
              
              <div className="space-y-8">
                <div className="bg-maverick-slate/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-6 w-6 text-maverick-orange mr-3" />
                    <h3 className="text-xl font-semibold">E-commerce Success</h3>
                  </div>
                  <p className="text-maverick-cream/80 mb-4">
                    For an online retailer, our integrated content and social media strategy resulted in:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-maverick-orange">185%</p>
                      <p className="text-sm text-maverick-cream/70">Increase in traffic</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-maverick-orange">78%</p>
                      <p className="text-sm text-maverick-cream/70">More conversions</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-maverick-slate/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-6 w-6 text-maverick-orange mr-3" />
                    <h3 className="text-xl font-semibold">Nonprofit Impact</h3>
                  </div>
                  <p className="text-maverick-cream/80 mb-4">
                    For a local nonprofit organization, our strategy helped achieve:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-maverick-orange">320%</p>
                      <p className="text-sm text-maverick-cream/70">Donation increase</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-maverick-orange">5x</p>
                      <p className="text-sm text-maverick-cream/70">Volunteer signups</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              {/* Live Campaign Dashboard Placeholder */}
              <div className="w-full bg-maverick-slate/20 rounded-xl overflow-hidden">
                <div className="bg-maverick-slate/50 p-4">
                  <h3 className="text-lg font-semibold">Live Campaign Performance</h3>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-maverick-cream/70">Campaign Metrics</span>
                    <span className="text-sm bg-maverick-orange/20 text-maverick-orange rounded-full px-3 py-1">
                      Updated dynamically
                    </span>
                  </div>
                  
                  {/* Mock chart placeholders */}
                  <div className="space-y-8">
                    <div>
                      <p className="text-sm mb-2">Engagement Rate</p>
                      <div className="w-full h-10 bg-maverick-slate/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-maverick-orange to-maverick-amber w-[75%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm mb-2">Conversion Rate</p>
                      <div className="w-full h-10 bg-maverick-slate/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-maverick-orange to-maverick-amber w-[42%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm mb-2">Brand Awareness</p>
                      <div className="w-full h-10 bg-maverick-slate/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-maverick-orange to-maverick-amber w-[90%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-maverick-slate/30">
                      <p className="text-center text-maverick-cream/50">Dynamic data visualization placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="primary" href="/contact">Schedule a Strategy Call</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
