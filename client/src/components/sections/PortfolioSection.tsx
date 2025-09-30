import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const portfolioItems = [
  {
    id: 1,
    title: "Edmonton Healthcare Clinic",
    category: "Healthcare & Medical",
    description: "Modern, patient-focused website with online booking and telehealth integration",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "Custom Booking System", "HIPAA Compliance"],
    results: "65% increase in online appointments"
  },
  {
    id: 2,
    title: "Local Edmonton Restaurant",
    category: "Food & Beverage",
    description: "Appetizing website design with online ordering and reservation system",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["E-commerce", "POS Integration", "Mobile Ordering"],
    results: "200% increase in online orders"
  },
  {
    id: 3,
    title: "Edmonton Law Firm",
    category: "Professional Services",
    description: "Professional, trustworthy website showcasing legal expertise and client testimonials",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Custom CMS", "SEO Optimization", "Lead Generation"],
    results: "180% increase in consultation requests"
  },
  {
    id: 4,
    title: "Edmonton Nonprofit Organization",
    category: "Community & Nonprofit",
    description: "Impact-driven website with donation platform and volunteer management",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Donation Integration", "Volunteer Portal", "Event Management"],
    results: "300% increase in online donations"
  },
  {
    id: 5,
    title: "Edmonton Real Estate Agency",
    category: "Real Estate",
    description: "Dynamic property showcase with advanced search and virtual tours",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Property Management", "Virtual Tours", "MLS Integration"],
    results: "120% increase in property inquiries"
  },
  {
    id: 6,
    title: "Edmonton Fitness Studio",
    category: "Health & Wellness",
    description: "Energetic design with class scheduling and membership management",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Booking System", "Payment Processing", "Member Portal"],
    results: "150% increase in memberships"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Edmonton Web Design Portfolio</h2>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Real results for real Edmonton businesses. See how our custom web design solutions have helped local companies grow their online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#121212] rounded-xl overflow-hidden border border-gray-800 hover:border-maverick-orange/50 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-maverick-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-heading group-hover:text-maverick-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#AAAAAA] mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-maverick-orange/10 text-maverick-orange px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-green-500 font-semibold">{item.results}</span>
                    </div>
                    <div className="flex items-center gap-2 text-maverick-orange text-sm group-hover:gap-3 transition-all duration-300">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/work">
            <div className="maverick-button maverick-button-outline inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 cursor-pointer">
              View Complete Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}