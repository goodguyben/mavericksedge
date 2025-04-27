import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronRight, ExternalLink, Code, Rocket, Sparkles } from "lucide-react";

// Portfolio items - 20 modern websites and 10 AI-powered apps
const portfolioItems = [
  // Modern Websites (20)
  {
    id: "web1",
    title: "Immersive Storytelling Platform",
    description: "Interactive narratives with 3D elements",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Three.js", "GSAP", "React"],
    color: "#FF5630"
  },
  {
    id: "web2",
    title: "Minimalist E-Commerce",
    description: "Clean design with intuitive user journeys",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Vue.js", "Shopify", "Tailwind CSS"],
    color: "#36B37E"
  },
  {
    id: "web3",
    title: "Photography Portfolio",
    description: "Elegant showcase with parallax scrolling",
    image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Next.js", "Framer Motion", "Prismic CMS"],
    color: "#FF991F"
  },
  {
    id: "web4",
    title: "Architectural Studio",
    description: "Sophisticated layout with immersive galleries",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["WebGL", "GSAP", "Barba.js"],
    color: "#6554C0"
  },
  {
    id: "web5",
    title: "Digital Magazine",
    description: "Editorial design with advanced typography",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Gatsby", "GraphQL", "CSS Grid"],
    color: "#FF5630"
  },
  {
    id: "web6",
    title: "Travel Experience Platform",
    description: "Immersive destinations with video integration",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["React", "Mapbox", "Contentful"],
    color: "#00B8D9"
  },
  {
    id: "web7",
    title: "Product Design Agency",
    description: "Portfolio with creative micro-interactions",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Locomotive Scroll", "SVG Animation", "Canvas"],
    color: "#6554C0"
  },
  {
    id: "web8",
    title: "Luxury Fashion Brand",
    description: "Elegant interface with premium aesthetics",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Nuxt.js", "Sanity.io", "Greensock"],
    color: "#FF991F"
  },
  {
    id: "web9",
    title: "Culinary Experience",
    description: "Food platform with sensory-rich interface",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["WebGL", "Svelte", "Custom Animations"],
    color: "#36B37E"
  },
  {
    id: "web10",
    title: "Music Festival",
    description: "Interactive event platform with audio integration",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Web Audio API", "React", "Three.js"],
    color: "#FF5630"
  },
  {
    id: "web11",
    title: "Interior Design Portfolio",
    description: "Spatial showcases with 3D visualization",
    image: "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["WebGL", "GSAP", "Astro"],
    color: "#00B8D9"
  },
  {
    id: "web12",
    title: "Sustainability Platform",
    description: "Educational site with data visualization",
    image: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["D3.js", "SVG Animation", "TypeScript"],
    color: "#36B37E"
  },
  {
    id: "web13",
    title: "Film Production Studio",
    description: "Cinematic website with video integration",
    image: "https://images.unsplash.com/photo-1500210600179-5bc6d3b8ae3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Video.js", "GSAP", "React"],
    color: "#FF991F"
  },
  {
    id: "web14",
    title: "Digital Health Platform",
    description: "Accessible interface for wellness management",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["React", "SVG Animation", "Tailwind CSS"],
    color: "#6554C0"
  },
  {
    id: "web15",
    title: "Contemporary Art Gallery",
    description: "Minimalist design with immersive exhibitions",
    image: "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Framer Motion", "Next.js", "Sanity.io"],
    color: "#FF5630"
  },
  {
    id: "web16",
    title: "Innovation Lab",
    description: "R&D portfolio with interactive case studies",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Vue.js", "Lottie Animations", "ScrollTrigger"],
    color: "#00B8D9"
  },
  {
    id: "web17",
    title: "Urban Planning Project",
    description: "Mapping interface with 3D city visualization",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Mapbox GL", "Three.js", "React"],
    color: "#6554C0"
  },
  {
    id: "web18",
    title: "Luxury Timepieces",
    description: "Premium e-commerce with detailed product views",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["WebGL", "GSAP", "Next.js"],
    color: "#FF991F"
  },
  {
    id: "web19",
    title: "Independent Publisher",
    description: "Literary platform with enhanced typography",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Gatsby", "Typography.js", "Motion Layout"],
    color: "#36B37E"
  },
  {
    id: "web20",
    title: "Design System",
    description: "Component library with interactive documentation",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "website",
    tech: ["Storybook", "React", "TypeScript"],
    color: "#FF5630"
  },
  
  // AI-Powered Apps (10)
  {
    id: "ai1",
    title: "AI Image Generator",
    description: "Create artwork from text descriptions",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["Stable Diffusion", "React", "Python"],
    color: "#6554C0"
  },
  {
    id: "ai2",
    title: "Smart Content Editor",
    description: "AI-assisted writing and editing tool",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["GPT-4", "NLP", "Next.js"],
    color: "#00B8D9"
  },
  {
    id: "ai3",
    title: "Voice Transcription",
    description: "Convert speech to text with high accuracy",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["Whisper AI", "WebRTC", "React"],
    color: "#FF991F"
  },
  {
    id: "ai4",
    title: "Recommendation Engine",
    description: "Personalized content discovery platform",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["ML Models", "Collaborative Filtering", "Vue.js"],
    color: "#36B37E"
  },
  {
    id: "ai5",
    title: "Code Assistant",
    description: "AI-powered coding companion",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["Codex", "TypeScript", "VSCode Extension"],
    color: "#FF5630"
  },
  {
    id: "ai6",
    title: "Financial Forecasting",
    description: "Predictive analytics for investment",
    image: "https://images.unsplash.com/photo-1639576439551-b41d420a377a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["Time Series Analysis", "TensorFlow", "D3.js"],
    color: "#6554C0"
  },
  {
    id: "ai7",
    title: "Smart Photo Editor",
    description: "AI-enhanced image editing tools",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["Computer Vision", "WebGL", "React"],
    color: "#00B8D9"
  },
  {
    id: "ai8",
    title: "Chatbot Platform",
    description: "Conversational AI for customer service",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["NLP", "Dialog Management", "Vue.js"],
    color: "#FF991F"
  },
  {
    id: "ai9",
    title: "Data Visualization",
    description: "AI-driven insights with interactive charts",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["ML for Pattern Detection", "D3.js", "React"],
    color: "#36B37E"
  },
  {
    id: "ai10",
    title: "Language Translator",
    description: "Real-time multilingual communication",
    image: "https://images.unsplash.com/photo-1546349851-64285be8e9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    type: "ai",
    tech: ["NMT", "WebSpeech API", "Next.js"],
    color: "#FF5630"
  }
];

export default function CreativeWorkSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  
  // Set up automatic scrolling
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Add event listeners for mouse interaction
    scrollContainer.addEventListener('mouseenter', () => setIsAutoScrollEnabled(false));
    scrollContainer.addEventListener('mouseleave', () => setIsAutoScrollEnabled(true));
    
    // Clone the items to create a seamless loop
    const doubleItems = () => {
      const items = scrollContainer.querySelectorAll('.portfolio-item');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    };
    
    doubleItems();
    
    // Automatic scrolling animation
    const autoScroll = () => {
      if (scrollContainer && isAutoScrollEnabled) {
        // If we've scrolled to the end of the original items, reset to start
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1; // Slow scrolling speed
        }
      }
    };
    
    const scrollInterval = setInterval(autoScroll, 20); // Adjust timing for scroll speed
    
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', () => setIsAutoScrollEnabled(false));
      scrollContainer.removeEventListener('mouseleave', () => setIsAutoScrollEnabled(true));
    };
  }, [isAutoScrollEnabled]);
  
  // Categorize items for filter tabs
  const websites = portfolioItems.filter(item => item.type === 'website');
  const aiApps = portfolioItems.filter(item => item.type === 'ai');

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
        
        {/* Portfolio category tabs */}
        <div className="flex justify-center mb-8 gap-4">
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center px-5 py-2 bg-[#1A1A1A] border-2 border-maverick-orange text-maverick-orange rounded-full font-medium">
              <Code className="w-4 h-4 mr-2" />
              <span>20 Modern Websites</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-5 py-2 bg-[#1A1A1A] border-2 border-[#6554C0] text-[#6554C0] rounded-full font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>10 AI-Powered Apps</span>
            </div>
          </motion.div>
        </div>
        
        {/* Horizontal scrolling portfolio */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                className={`portfolio-item flex-shrink-0 w-80 h-96 rounded-lg overflow-hidden relative group cursor-pointer ${
                  item.type === 'ai' ? 'border-2 border-[#6554C0]/30' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Type indicator icon */}
                <div className="absolute top-4 right-4 z-20">
                  {item.type === 'ai' ? (
                    <div className="bg-[#6554C0] p-2 rounded-full shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="bg-maverick-orange p-2 rounded-full shadow-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                
                {/* Gradient overlay with dynamic color based on the item */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(to top, ${item.color}aa, rgba(0,0,0,0.2) 70%, transparent)` 
                  }}
                ></div>
                
                {/* Content container with slide-up animation */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 transform"
                  initial={{ y: 60 }}
                  animate={{ 
                    y: hoveredItem === item.id ? 0 : 30
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white text-sm mb-4 opacity-90">{item.description}</p>
                  
                  {/* Tech stack tags that appear on hover */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div 
                        className="flex flex-wrap gap-2 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.tech.map((tech, index) => (
                          <span 
                            key={index}
                            className="inline-block px-2 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-md text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* View button that appears on hover */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div 
                        className="mt-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center text-white font-medium">
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Interactive hover overlay with animated gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(45deg, ${item.color}33, transparent 70%)` 
                  }}
                  animate={{
                    background: hoveredItem === item.id 
                      ? [
                          `linear-gradient(45deg, ${item.color}33, transparent 70%)`,
                          `linear-gradient(225deg, ${item.color}33, transparent 70%)`,
                          `linear-gradient(45deg, ${item.color}33, transparent 70%)`
                        ]
                      : `linear-gradient(45deg, ${item.color}33, transparent 70%)`
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Overlay gradients for scroll effect */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10"></div>
        </div>
        
        {/* CTA button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="/work" 
            className="inline-flex items-center px-8 py-4 bg-maverick-orange text-white font-bold rounded-md hover:bg-maverick-orange/90 transition-colors duration-300 group"
          >
            <span>View All Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            >
              <ChevronRight className="w-5 h-5 ml-2 group-hover:ml-3 transition-all duration-300" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}