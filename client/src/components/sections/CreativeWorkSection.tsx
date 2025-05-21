
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/ui/custom-button";
import { ArrowRight, Star, Eye, Heart, MessageSquare, Share2 } from "lucide-react";

export default function CreativeWorkSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Sample portfolio items - you would replace these with your actual data
  const portfolioItems = [
    {
      id: "web-design-1",
      title: "Modern E-commerce Platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1552067175-c9e351c05ec9?q=80&w=1974&auto=format&fit=crop",
      client: "Artisan Goods Co.",
      description: "Fully responsive e-commerce platform with integrated AI product recommendations",
      stats: { likes: 142, views: 3782, comments: 28 }
    },
    {
      id: "marketing-1",
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1552581245-c34f4d69025a?q=80&w=2070&auto=format&fit=crop",
      client: "Eco Living Brand",
      description: "Multi-channel campaign focusing on sustainable lifestyle products",
      stats: { likes: 98, views: 2145, comments: 17 },
      featured: true
    },
    {
      id: "ai-integration-1",
      title: "AI-Powered Customer Support",
      category: "AI Integration",
      image: "https://images.unsplash.com/photo-1599338572588-5cd00bcdf943?q=80&w=1974&auto=format&fit=crop",
      client: "Tech Solutions Inc.",
      description: "Advanced chatbot with natural language processing and customer history integration",
      stats: { likes: 215, views: 4322, comments: 42 }
    },
    {
      id: "web-app-1",
      title: "Healthcare Patient Portal",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1601034913836-a1f43e143611?q=80&w=1964&auto=format&fit=crop",
      client: "Metro Health Center",
      description: "Secure, HIPAA-compliant portal for patient data management and telemedicine",
      stats: { likes: 87, views: 1943, comments: 12 }
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-[#0D0D0D] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-40 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-maverick-orange/15 to-transparent opacity-30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-bl from-maverick-amber/15 to-transparent opacity-20 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          y: [0, -30, 0] 
        }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-maverick-orange/10 rounded-full border border-maverick-orange/20 mb-6"
          >
            <span className="text-maverick-orange font-medium flex items-center">
              <Star className="w-4 h-4 mr-2" />
              Portfolio showcase
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-heading relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our <span className="text-maverick-orange">Creative Work</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-maverick-orange to-maverick-amber"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-[#BBBBBB] text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore our portfolio of innovative designs and digital experiences that have transformed brands and driven measurable business results
          </motion.p>
        </motion.div>
        
        {/* Enhanced Portfolio Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Featured badge if applicable */}
              {item.featured && (
                <motion.div 
                  className="absolute top-3 right-3 z-20 bg-maverick-orange text-white text-xs px-2 py-1 rounded-full flex items-center shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Star className="w-3 h-3 mr-1 fill-white" />
                  Featured
                </motion.div>
              )}

              {/* Image container with overlay */}
              <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                {/* Background image */}
                <motion.img 
                  src={item.image} 
                  alt={item.title}
                  className="object-cover w-full h-full transition-all duration-700"
                  whileHover={{ scale: 1.08 }}
                />
                
                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-5 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-maverick-orange text-sm mb-1">{item.category}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    
                    {/* Stats row */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1 text-pink-500" />
                        {item.stats.likes}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1 text-blue-400" />
                        {item.stats.views}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1 text-green-400" />
                        {item.stats.comments}
                      </div>
                      <div className="flex items-center">
                        <Share2 className="w-3 h-3 mr-1 text-purple-400" />
                      </div>
                    </div>
                    
                    <motion.button
                      className="w-full py-2 px-4 bg-maverick-orange text-white rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View details <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Item details below image */}
              <div className="mt-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg leading-tight group-hover:text-maverick-orange transition-colors">{item.title}</h3>
                    <p className="text-sm text-[#888888]">Client: {item.client}</p>
                  </div>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-gray-800"
                    whileHover={{ backgroundColor: "#FF5A00", rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
              
              {/* Animated bottom border line */}
              <motion.div 
                className="h-0.5 bg-maverick-orange mt-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: hoveredItem === item.id ? "100%" : "30%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            href="/work" 
            className="relative inline-flex items-center justify-center overflow-hidden px-8 py-4 bg-gradient-to-r from-maverick-orange/20 to-maverick-amber/20 rounded-xl text-white font-medium text-lg group"
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-maverick-orange to-maverick-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
            <span className="relative flex items-center">
              View all projects
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
