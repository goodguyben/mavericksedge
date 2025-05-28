
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, PenTool, Brain, ArrowRight, Sparkles } from "lucide-react";

export default function ServiceCascadeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const services = [
    {
      id: "web-development",
      title: "Web Design & Development",
      icon: <Code className="w-8 h-8 text-maverick-orange" />,
      gradient: "from-maverick-orange via-orange-500 to-red-500",
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
      gradient: "from-purple-500 via-pink-500 to-maverick-orange",
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
      gradient: "from-blue-500 via-cyan-500 to-maverick-orange",
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

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-5 md:px-10 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#1A1A1A] overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-tr from-maverick-orange/20 to-transparent opacity-40 blur-3xl"
        style={{ y: y1, scale, rotate }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-gradient-to-bl from-purple-500/20 to-transparent opacity-30 blur-3xl"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/15 to-transparent opacity-25 blur-3xl"
        style={{ y: y3, x: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-maverick-orange/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto relative z-10">
        {/* Creative Section Header */}
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-maverick-orange/20 to-purple-500/20 rounded-full mb-8 backdrop-blur-sm border border-maverick-orange/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-5 h-5 text-maverick-orange" />
            <span className="text-maverick-orange font-semibold">Our Service Deep Dive</span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-maverick-orange to-purple-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital
            <br />
            Excellence
          </motion.h2>
          
          <motion.p
            className="text-xl text-[#AAAAAA] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover how our innovative solutions transform businesses through cutting-edge technology,
            creative excellence, and strategic thinking.
          </motion.p>
        </motion.div>

        {/* Services */}
        {services.map((service, serviceIndex) => (
          <motion.div
            key={service.id}
            className="mb-40 last:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: serviceIndex * 0.2 }}
          >
            {/* Service Header with Creative Design */}
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${service.gradient} p-0.5 mb-8`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
              </motion.div>
              
              <motion.h3
                className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {service.title}
              </motion.h3>
            </motion.div>

            {/* Creative Service Items Layout */}
            <div className="space-y-32">
              {service.items.map((item, itemIndex) => {
                const isEven = itemIndex % 2 === 0;
                
                return (
                  <motion.div
                    key={itemIndex}
                    className="relative"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{
                      duration: 1,
                      delay: itemIndex * 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {/* Connecting Line */}
                    {itemIndex < service.items.length - 1 && (
                      <motion.div
                        className="absolute left-1/2 -bottom-16 w-0.5 h-16 bg-gradient-to-b from-maverick-orange to-transparent z-0"
                        initial={{ height: 0 }}
                        whileInView={{ height: 64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: itemIndex * 0.3 + 0.5 }}
                      />
                    )}

                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                      {/* Content Block */}
                      <motion.div
                        className={`space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: itemIndex * 0.3 + 0.2,
                          ease: "easeOut"
                        }}
                      >
                        <div className="relative">
                          <motion.div
                            className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-full opacity-20 blur-lg`}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: itemIndex * 0.5,
                            }}
                          />
                          
                          <motion.div
                            className="text-6xl font-bold text-maverick-orange/10 mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.3 + 0.4 }}
                          >
                            0{itemIndex + 1}
                          </motion.div>
                          
                          <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            {item.title}
                          </h4>
                          
                          <p className="text-[#AAAAAA] text-lg leading-relaxed mb-8">
                            {item.description}
                          </p>
                        </div>

                        {/* Interactive CTA */}
                        <motion.button
                          className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-maverick-orange/10 to-transparent rounded-full border border-maverick-orange/30 hover:border-maverick-orange/60 transition-all duration-300"
                          whileHover={{ scale: 1.05, x: 10 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-maverick-orange font-medium">Explore Solution</span>
                          <ArrowRight className="w-4 h-4 text-maverick-orange group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </motion.div>

                      {/* Enhanced Image Block */}
                      <motion.div
                        className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: itemIndex * 0.3 + 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <div className="relative group cursor-pointer">
                          {/* Glow Effect */}
                          <motion.div
                            className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: itemIndex * 0.7,
                            }}
                          />
                          
                          <motion.div
                            className="relative overflow-hidden rounded-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                          >
                            <motion.img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-80 md:h-96 object-cover"
                              initial={{ scale: 1.1, filter: "brightness(0.8)" }}
                              whileInView={{ scale: 1, filter: "brightness(1)" }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.2,
                                delay: itemIndex * 0.3 + 0.3
                              }}
                            />
                            
                            {/* Overlay with Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                            
                            {/* Floating Elements */}
                            <motion.div
                              className="absolute top-4 right-4 w-3 h-3 bg-maverick-orange rounded-full"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: itemIndex * 0.4,
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
