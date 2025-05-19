import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Sample portfolio items - in a real application, this would come from a CMS or API
const portfolioItems = [
  {
    id: "work1",
    title: "E-Commerce Platform",
    description: "Modern shopping experience with intuitive UX",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "work2",
    title: "Financial Dashboard",
    description: "Data-driven insights with elegant visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "work3",
    title: "Health & Wellness App",
    description: "Intuitive mobile experience for better living",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "work4",
    title: "Real Estate Platform",
    description: "Immersive property browsing experience",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "work5",
    title: "Educational Portal",
    description: "Interactive learning environment for students",
    image: "https://images.unsplash.com/photo-1620912189875-3471929162de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "work6",
    title: "SaaS Application",
    description: "Cloud-based enterprise management solution",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "work7",
    title: "Travel Booking Platform",
    description: "Seamless booking experience for travelers",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: "work8",
    title: "Social Community App",
    description: "Connecting like-minded individuals worldwide",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  }
];

export default function CreativeWorkSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Set up automatic scrolling
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Clone the items to create a seamless loop
    const doubleItems = () => {
      const items = scrollContainer.querySelectorAll('.portfolio-item');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    };
    
    doubleItems();
    
    // Check if it's not a mobile device before setting up auto-scroll
    const isMobile = window.innerWidth < 768;
    let scrollInterval: NodeJS.Timeout | null = null;
    
    if (!isMobile) {
      // Automatic scrolling animation for desktop only
      const autoScroll = () => {
        if (scrollContainer) {
          // If we've scrolled to the end of the original items, reset to start
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 3; // Increased scrolling speed
          }
        }
      };
      
      scrollInterval = setInterval(autoScroll, 10); // Decreased interval for faster scrolling
    }
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="py-24 px-5 md:px-10 bg-[#0D0D0D] relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-maverick-orange">Creative Work</span></h2>
          <p className="text-[#BBBBBB] text-xl max-w-3xl mx-auto">
            Explore our portfolio of innovative designs and digital experiences
          </p>
        </motion.div>
        
        {/* Horizontal scrolling portfolio */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-8 touch-pan-x"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                className="portfolio-item flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-maverick-orange text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Overlay gradients for scroll effect */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10"></div>
          
          {/* Mobile scroll indicator */}
          <div className="md:hidden text-center mt-4 text-maverick-orange text-sm">
            <span>← Swipe to explore →</span>
          </div>
        </div>
        
        {/* Button removed */}
      </div>
    </section>
  );
}