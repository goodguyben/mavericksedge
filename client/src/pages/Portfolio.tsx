
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

// Portfolio items
const portfolioItems = [
  {
    id: "ecommerce",
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    tags: ["web", "ecommerce", "ui"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Complete redesign of an e-commerce platform focused on improving user experience and conversion rates. Implemented responsive design and modern checkout flow.",
    year: "2023"
  },
  {
    id: "nonprofit",
    title: "Nonprofit Digital Transformation",
    category: "AI Integration",
    tags: ["nonprofit", "ai", "web"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Digital transformation for a nonprofit organization including AI-powered donor management system and automated reporting dashboards.",
    year: "2023"
  },
  {
    id: "marketing",
    title: "Marketing Campaign Launch",
    category: "Digital Marketing",
    tags: ["marketing", "creative", "campaign"],
    image: "https://images.unsplash.com/photo-1529101091422-b54b8ef3dbb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "End-to-end marketing campaign strategy and execution for product launch, resulting in 40% increase in brand awareness and 25% boost in new customer acquisition.",
    year: "2022"
  },
  {
    id: "ai",
    title: "AI-Powered Customer Service",
    category: "AI Integration",
    tags: ["ai", "automation", "customer-service"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Implementation of AI chatbot and automated workflow system for customer service, reducing response time by 60% and improving customer satisfaction scores.",
    year: "2023"
  },
  {
    id: "educational",
    title: "Educational Platform",
    category: "Web Development",
    tags: ["web", "education", "ui"],
    image: "https://images.unsplash.com/photo-1620912189875-3471929162de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    description: "Interactive learning platform with personalized learning paths, progress tracking, and collaborative features for students and educators.",
    year: "2022"
  },
  {
    id: "health",
    title: "Health & Wellness App",
    category: "Mobile App",
    tags: ["mobile", "health", "ui"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    description: "Comprehensive health and wellness app with fitness tracking, nutrition planning, and personalized coaching features.",
    year: "2021"
  },
  {
    id: "finance",
    title: "Financial Dashboard",
    category: "Web Development",
    tags: ["web", "finance", "dashboard"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    description: "Custom financial management dashboard with real-time data visualization, predictive analytics, and automated reporting features.",
    year: "2022"
  },
  {
    id: "realestate",
    title: "Real Estate Platform",
    category: "Web Development",
    tags: ["web", "real-estate", "ui"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    description: "Innovative real estate platform with virtual property tours, AI-powered property recommendations, and streamlined transaction processing.",
    year: "2021"
  }
];

// Portfolio page component
export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Categories for filtering
  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));

  // Filter items based on category and search query
  useEffect(() => {
    let items = portfolioItems;
    
    if (selectedCategory) {
      items = items.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredItems(items);
  }, [selectedCategory, searchQuery]);

  // Open detail modal
  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close detail modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-5 md:px-10 bg-[#121212] relative">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
        <motion.div 
          className="container mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="text-maverick-orange">Work</span></h1>
          <p className="text-xl text-[#AAAAAA] max-w-3xl">
            Discover our portfolio of innovative digital solutions that have transformed businesses and delighted users. 
            Each project represents our expertise, creativity, and commitment to excellence.
          </p>
        </motion.div>
      </section>
      
      {/* Filter Section */}
      <section className="py-10 px-5 md:px-10 bg-[#0D0D0D] sticky top-0 z-20 border-b border-gray-800 backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-auto flex-grow md:max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-maverick-orange focus:border-transparent text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto">
              <Filter className="text-gray-400 h-5 w-5 flex-shrink-0" />
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === null 
                    ? "bg-maverick-orange text-white" 
                    : "bg-[#1A1A1A] text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category 
                      ? "bg-maverick-orange text-white" 
                      : "bg-[#1A1A1A] text-gray-300 hover:bg-gray-800"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-16 px-5 md:px-10 bg-[#121212] min-h-screen">
        <div className="container mx-auto">
          <AnimatePresence>
            {filteredItems.length === 0 ? (
              <motion.div
                className="flex flex-col items-center justify-center py-20 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-3xl text-gray-500 mb-4">No projects found</div>
                <p className="text-gray-400 max-w-md">Try adjusting your filters or search criteria to find what you're looking for.</p>
              </motion.div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    className="portfolio-card bg-[#1A1A1A] rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => openModal(item)}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <motion.img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-70"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-maverick-orange/80 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold group-hover:text-maverick-orange transition-colors">{item.title}</h3>
                        <span className="text-sm text-gray-400">{item.year}</span>
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-[#2A2A2A] rounded-full text-gray-300">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#121212] max-w-4xl w-full rounded-xl overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-maverick-orange transition-colors"
                onClick={closeModal}
              >
                ✕
              </button>
              
              <div className="h-80 relative overflow-hidden">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-maverick-orange/80 rounded-full text-xs font-medium">
                      {selectedItem.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedItem.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    {selectedItem.tags.map((tag: string) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-[#2A2A2A] rounded-full text-gray-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{selectedItem.year}</span>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedItem.description}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {["React", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion"].map((tech) => (
                      <span key={tech} className="px-3 py-2 bg-[#2A2A2A] rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="px-6 py-3 bg-maverick-orange text-white rounded-lg font-medium hover:bg-maverick-orange/90 transition-colors">
                    View Live Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <ContactSection />
    </motion.div>
  );
}
