import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Define the portfolio item type
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  size: "regular" | "large" | "tall" | "wide";
}

// Sample portfolio items - in a real application, this would come from a CMS or API
// Each item now has multiple images that will flip through
const portfolioItems: PortfolioItem[] = [
  {
    id: "work1",
    title: "E-Commerce Platform",
    description: "Modern shopping experience with intuitive UX",
    category: "Web Development",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1581318597099-84bbeec0fa0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    size: "large"
  },
  {
    id: "work2",
    title: "Financial Dashboard",
    description: "Data-driven insights with elegant visualization",
    category: "Web Application",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1553408226-03e243a2fdd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    size: "regular"
  },
  {
    id: "work3",
    title: "Health & Wellness App",
    description: "Intuitive mobile experience for better living",
    category: "Mobile App",
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1498509112969-1effd2d9b090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    size: "tall"
  },
  {
    id: "work4",
    title: "Real Estate Platform",
    description: "Immersive property browsing experience",
    category: "Web Platform",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    size: "regular"
  },
  {
    id: "work5",
    title: "Educational Portal",
    description: "Interactive learning environment for students",
    category: "Learning Platform",
    images: [
      "https://images.unsplash.com/photo-1620912189875-3471929162de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    size: "wide"
  },
  {
    id: "work6",
    title: "SaaS Application",
    description: "Cloud-based enterprise management solution",
    category: "Enterprise Software",
    images: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    size: "regular"
  },
  {
    id: "work7",
    title: "Travel Booking Platform",
    description: "Seamless booking experience for travelers",
    category: "Travel & Leisure",
    images: [
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    size: "large"
  }
];

// Component for individual bento grid item with flip animation
const BentoGridItem = ({ item }: { item: PortfolioItem }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  
  // Automatically flip through images every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
        );
        setIsFlipping(false);
      }, 500); // Half of the flip animation duration
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [item.images.length]);
  
  // Define size classes for different grid items
  const sizeClasses: Record<string, string> = {
    regular: "col-span-1 row-span-1",
    large: "col-span-2 row-span-2",
    tall: "col-span-1 row-span-2",
    wide: "col-span-2 row-span-1"
  };
  
  // Height classes to ensure proper aspect ratios
  const heightClasses: Record<string, string> = {
    regular: "h-64 md:h-72",
    large: "h-full min-h-[24rem]",
    tall: "h-full min-h-[36rem]",
    wide: "h-64 md:h-72"
  };
  
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-xl group ${sizeClasses[item.size]} ${heightClasses[item.size]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className={`w-full h-full relative transition-transform duration-1000 transform ${
          isFlipping ? 'scale-[1.05] blur-sm' : 'scale-100'
        }`}
      >
        <img 
          src={item.images[currentImageIndex]} 
          alt={`${item.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex flex-col space-y-1">
          <span className="text-maverick-orange font-medium text-sm">{item.category}</span>
          <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
          <p className="text-gray-300 text-sm mt-1 line-clamp-2">{item.description}</p>
        </div>
      </div>
      
      {/* Animation indicator dots */}
      <div className="absolute bottom-3 right-3 flex space-x-1">
        {item.images.map((_: string, idx: number) => (
          <div 
            key={idx} 
            className={`w-1.5 h-1.5 rounded-full ${
              idx === currentImageIndex 
                ? 'bg-maverick-orange' 
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function CreativeWorkSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our <span className="text-maverick-orange">Creative Work</span></h2>
          <p className="text-[#BBBBBB] text-xl max-w-3xl mx-auto">
            Explore our portfolio of innovative designs and digital experiences
          </p>
        </motion.div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item) => (
            <BentoGridItem key={item.id} item={item} />
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link href="/work" className="maverick-button maverick-button-outline inline-flex items-center justify-center px-6 py-2 text-base font-medium rounded-md md:py-3 md:text-lg md:px-8">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}