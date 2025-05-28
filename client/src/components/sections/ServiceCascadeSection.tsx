
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, PenTool, Brain } from "lucide-react";

export default function ServiceCascadeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const services = [
    {
      id: "web-development",
      title: "Web Design & Development",
      icon: <Code className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Custom Website Design",
          description: "We create stunning, responsive websites that capture your brand's essence and convert visitors into customers. Our designs prioritize user experience while maintaining pixel-perfect aesthetics that work seamlessly across all devices."
        },
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "E-commerce Solutions",
          description: "Transform your business with powerful e-commerce platforms that drive sales and streamline operations. We build scalable online stores with secure payment processing, inventory management, and analytics to maximize your revenue potential."
        },
        {
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Performance Optimization",
          description: "Ensure your website loads lightning-fast and ranks high in search results with our technical optimization services. We implement best practices for speed, SEO, and accessibility to deliver exceptional user experiences that convert."
        }
      ]
    },
    {
      id: "marketing-creative",
      title: "Marketing & Creative",
      icon: <PenTool className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Brand Strategy & Identity",
          description: "Develop a compelling brand identity that resonates with your target audience and sets you apart from competitors. Our strategic approach encompasses visual design, messaging, and positioning to create memorable brand experiences that drive loyalty."
        },
        {
          image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Digital Marketing Campaigns",
          description: "Reach your ideal customers with data-driven marketing campaigns across multiple channels. We leverage social media, email marketing, and targeted advertising to amplify your message and generate measurable results that impact your bottom line."
        },
        {
          image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Creative Content Production",
          description: "Engage your audience with compelling visual and written content that tells your story authentically. From photography and videography to copywriting and graphic design, we create content that captures attention and drives engagement."
        }
      ]
    },
    {
      id: "ai-integration",
      title: "AI Integration & Automation",
      icon: <Brain className="w-8 h-8 text-maverick-orange" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Business Process Automation",
          description: "Streamline your operations with intelligent automation solutions that reduce manual work and increase efficiency. We implement AI-powered systems that handle repetitive tasks, allowing your team to focus on strategic initiatives that drive growth."
        },
        {
          image: "https://images.unsplash.com/photo-1590674899484-13b5a8a9d0af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Customer Experience Enhancement",
          description: "Deliver personalized customer experiences at scale with AI-driven solutions that anticipate needs and provide instant support. Our chatbots and recommendation engines create meaningful interactions that increase satisfaction and retention."
        },
        {
          image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Data Analytics & Insights",
          description: "Transform raw data into actionable business intelligence with advanced AI analytics platforms. We help you uncover hidden patterns, predict trends, and make informed decisions that drive competitive advantage and sustainable growth."
        }
      ]
    }
  ];

  // Handle scroll to update current index
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY;
      const progress = Math.max(0, Math.min(1, (scrollTop - sectionTop) / (sectionHeight - window.innerHeight)));
      
      // Calculate total items across all services
      const totalItems = services.reduce((acc, service) => acc + service.items.length, 0);
      const itemIndex = Math.floor(progress * totalItems);
      const clampedIndex = Math.min(itemIndex, totalItems - 1);
      
      setCurrentIndex(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services]);

  // Get current service and item based on index
  const getCurrentServiceAndItem = (index: number) => {
    let currentIndex = 0;
    for (const service of services) {
      if (index < currentIndex + service.items.length) {
        return {
          service,
          item: service.items[index - currentIndex],
          itemIndex: index - currentIndex
        };
      }
      currentIndex += service.items.length;
    }
    return {
      service: services[0],
      item: services[0].items[0],
      itemIndex: 0
    };
  };

  const currentData = getCurrentServiceAndItem(currentIndex);

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] bg-[#121212]"
      style={{ opacity }}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-maverick-orange/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Sticky content */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient effects */}
        <motion.div
          className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-gradient-to-tr from-maverick-orange/20 to-transparent opacity-30 blur-3xl"
          style={{
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
            x: useTransform(scrollYProgress, [0, 0.5, 1], [50, -50, 50]),
          }}
        />

        {/* Image stack */}
        <div className="relative w-1/2 h-[80vh] perspective-1000 flex items-center justify-center">
          <div className="relative w-full max-w-lg h-full">
            {services.flatMap(service => service.items).map((item, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              
              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    zIndex: isActive ? 10 : Math.max(0, 10 - Math.abs(offset)),
                  }}
                  animate={{
                    scale: isActive ? 1 : 1 - Math.abs(offset) * 0.05,
                    rotateY: offset * 5,
                    z: offset * -50,
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.6s ease',
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {/* Decorative border */}
                  <div className="absolute inset-0 border-2 border-maverick-orange/20 rounded-2xl" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Content area */}
        <div className="w-1/2 px-16 text-white relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Service icon and title */}
            <div className="flex items-center mb-6">
              <div className="p-3 bg-maverick-orange/10 rounded-full mr-4">
                {currentData.service.icon}
              </div>
              <span className="text-maverick-orange text-sm font-medium uppercase tracking-wider">
                {currentData.service.title}
              </span>
            </div>

            {/* Item content */}
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-maverick-orange to-maverick-amber bg-clip-text text-transparent">
              {currentData.item.title}
            </h2>
            
            <p className="text-xl leading-relaxed mb-8 text-gray-300">
              {currentData.item.description}
            </p>

            {/* CTA Button */}
            <motion.a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-maverick-orange to-maverick-amber text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>

            {/* Decorative line */}
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-full mt-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
          {services.flatMap((service, serviceIndex) => 
            service.items.map((_, itemIndex) => {
              const globalIndex = services.slice(0, serviceIndex).reduce((acc, s) => acc + s.items.length, 0) + itemIndex;
              return (
                <motion.div
                  key={globalIndex}
                  className="w-3 h-3 rounded-full my-2 cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: globalIndex === currentIndex ? '#FF5A00' : 'rgba(255, 255, 255, 0.3)',
                    transform: globalIndex === currentIndex ? 'scale(1.5)' : 'scale(1)',
                  }}
                  onClick={() => {
                    const sectionTop = sectionRef.current?.offsetTop || 0;
                    const sectionHeight = sectionRef.current?.offsetHeight || 0;
                    const totalItems = services.reduce((acc, service) => acc + service.items.length, 0);
                    const targetScroll = sectionTop + (globalIndex / (totalItems - 1)) * (sectionHeight - window.innerHeight);
                    
                    window.scrollTo({
                      top: targetScroll,
                      behavior: 'smooth'
                    });
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
