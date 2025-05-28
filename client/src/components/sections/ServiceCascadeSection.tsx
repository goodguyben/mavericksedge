
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const ServiceCascadeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const titleY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  const services = [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      color: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30',
      accentColor: 'text-blue-400',
      items: [
        {
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
          title: 'Custom Website Design',
          description: 'We create stunning, responsive websites that capture your brand\'s essence and convert visitors into customers. Our designs prioritize user experience while maintaining pixel-perfect aesthetics.',
          icon: '🎨'
        },
        {
          image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop',
          title: 'E-commerce Solutions',
          description: 'From simple online stores to complex marketplace platforms, we build robust e-commerce solutions that drive sales and integrate seamlessly with modern payment systems.',
          icon: '🛒'
        },
        {
          image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop',
          title: 'Web Application Development',
          description: 'We develop powerful, scalable web applications tailored to your business needs. Whether it\'s a customer portal or SaaS platform, we deliver solutions that perform flawlessly.',
          icon: '⚡'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing & Creative',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      accentColor: 'text-orange-400',
      items: [
        {
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
          title: 'Brand Strategy & Design',
          description: 'We craft compelling brand identities that resonate with your target audience and stand out in competitive markets with strategic positioning.',
          icon: '🎯'
        },
        {
          image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
          title: 'Digital Marketing Campaigns',
          description: 'Our data-driven marketing campaigns deliver measurable results across all digital channels, optimizing every touchpoint to maximize your ROI.',
          icon: '📈'
        },
        {
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
          title: 'Content Creation & SEO',
          description: 'We create engaging content that captivates your audience and ranks high on search engines, driving organic traffic and establishing authority.',
          icon: '✍️'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Integration & Automation',
      color: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-500/30',
      accentColor: 'text-green-400',
      items: [
        {
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
          title: 'AI-Powered Chatbots',
          description: 'Transform customer service with intelligent chatbots that provide instant, accurate responses 24/7, learning from interactions to improve satisfaction.',
          icon: '🤖'
        },
        {
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
          title: 'Process Automation',
          description: 'Streamline operations with custom automation solutions that eliminate repetitive tasks, reduce human error, and achieve maximum efficiency.',
          icon: '⚙️'
        },
        {
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
          title: 'Data Analytics & Insights',
          description: 'Unlock the power of your data with advanced analytics and machine learning algorithms that transform raw data into actionable business insights.',
          icon: '📊'
        }
      ]
    }
  ];

  // Floating particles animation
  const FloatingParticle = ({ delay = 0, size = 4, x = 0, y = 0 }) => (
    <motion.div
      className="absolute bg-maverick-orange/20 rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [-20, -60, -20],
        x: [-10, 10, -10],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );

  // Service section component
  const ServiceSection = ({ service, index }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-20%" });
    
    const { scrollYProgress: sectionProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });

    const sectionY = useTransform(sectionProgress, [0, 1], [100, -100]);
    const sectionScale = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);
    const sectionOpacity = useTransform(sectionProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

    return (
      <motion.div
        ref={sectionRef}
        style={{ 
          y: sectionY,
          scale: sectionScale,
          opacity: sectionOpacity
        }}
        className="relative mb-40"
      >
        {/* Background glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-3xl`}
          animate={isInView ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Service title with creative typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20 relative z-10"
        >
          <motion.h3
            className={`text-5xl lg:text-7xl font-bold mb-6 ${service.accentColor}`}
            animate={isInView ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: `linear-gradient(90deg, currentColor 0%, rgba(255,255,255,0.5) 50%, currentColor 100%)`,
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}
          >
            {service.title}
          </motion.h3>
          
          {/* Animated underline */}
          <motion.div
            className={`h-1 bg-gradient-to-r ${service.color.replace('/20', '/60')} mx-auto rounded-full`}
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Stacked cards container */}
        <div className="relative max-w-6xl mx-auto">
          {service.items.map((item, itemIndex) => {
            const cardProgress = useTransform(
              sectionProgress,
              [0.1 + itemIndex * 0.2, 0.3 + itemIndex * 0.2, 0.7 + itemIndex * 0.2, 0.9 + itemIndex * 0.2],
              [200, 0, 0, -200]
            );
            
            const cardScale = useTransform(
              sectionProgress,
              [0.1 + itemIndex * 0.2, 0.3 + itemIndex * 0.2, 0.7 + itemIndex * 0.2],
              [0.8, 1, 0.95]
            );
            
            const cardRotation = useTransform(
              sectionProgress,
              [0.1 + itemIndex * 0.2, 0.5 + itemIndex * 0.2],
              [itemIndex % 2 === 0 ? -5 : 5, 0]
            );

            return (
              <motion.div
                key={itemIndex}
                style={{
                  y: cardProgress,
                  scale: cardScale,
                  rotateZ: cardRotation,
                  zIndex: service.items.length - itemIndex
                }}
                className={`absolute inset-0 ${itemIndex > 0 ? 'mt-8' : ''}`}
              >
                <div className={`bg-[#1A1A1A]/80 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border ${service.borderColor} hover:border-maverick-orange/50 transition-all duration-500 shadow-2xl`}>
                  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Image with creative effects */}
                    <motion.div
                      className="w-full lg:w-1/2 relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl">
                        {/* Animated border */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-maverick-orange via-purple-500 to-maverick-orange rounded-2xl p-[2px]"
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          style={{ backgroundSize: "200% 100%" }}
                        >
                          <div className="w-full h-full bg-[#1A1A1A] rounded-2xl overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                        </motion.div>
                        
                        {/* Overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Floating icon */}
                        <motion.div
                          className="absolute top-4 right-4 text-4xl"
                          animate={{
                            y: [-5, 5, -5],
                            rotate: [-5, 5, -5]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {item.icon}
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Content with enhanced typography */}
                    <motion.div
                      className="w-full lg:w-1/2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + itemIndex * 0.1 }}
                    >
                      <motion.h4
                        className={`text-3xl lg:text-4xl font-bold mb-6 ${service.accentColor}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.h4>
                      
                      <motion.p
                        className="text-[#CCCCCC] text-lg leading-relaxed relative"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 + itemIndex * 0.1 }}
                      >
                        {item.description}
                        
                        {/* Animated accent line */}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${service.color.replace('/20', '/60')} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{ duration: 1.5, delay: 0.8 + itemIndex * 0.1 }}
                        />
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={containerRef} className="relative py-32 bg-[#121212] overflow-hidden min-h-[400vh]">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            size={Math.random() * 6 + 2}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
        
        {/* Gradient meshes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main title with parallax */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-32 sticky top-20"
        >
          <motion.h2
            className="text-6xl lg:text-8xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Our Service{" "}
            <motion.span
              className="text-maverick-orange inline-block"
              animate={{
                rotateY: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Deep Dive
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-2xl text-[#AAAAAA] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Immerse yourself in our comprehensive solutions across three transformative service domains
          </motion.p>
        </motion.div>

        {/* Service sections */}
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
    </section>
  );
};

export default ServiceCascadeSection;
