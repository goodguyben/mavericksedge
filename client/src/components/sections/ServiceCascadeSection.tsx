
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, PenTool, Brain } from "lucide-react";

export default function ServiceCascadeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-5 md:px-10 bg-[#121212] relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-gradient-to-tr from-maverick-orange/10 to-transparent opacity-30 blur-3xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
          x: useTransform(scrollYProgress, [0, 0.5, 1], [50, -50, 50]),
        }}
      />

      <div className="container mx-auto relative z-10">
        {services.map((service, serviceIndex) => (
          <div key={service.id} className="mb-32 last:mb-0">
            {/* Service Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-maverick-orange/10 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {service.title}
              </h3>
            </motion.div>

            {/* Cascading Items */}
            {service.id === "web-development" ? (
              // Stacked layout for Web Design & Development
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Images Stack - Left Side */}
                <div className="relative h-[600px] lg:sticky lg:top-20">
                  {service.items.map((item, itemIndex) => {
                    const { scrollYProgress: itemScrollProgress } = useScroll({
                      target: sectionRef,
                      offset: [`${itemIndex * 30}% end`, `${(itemIndex + 1) * 30}% start`],
                    });
                    
                    const yOffset = useTransform(
                      itemScrollProgress,
                      [0, 1],
                      [0, -100 * itemIndex]
                    );
                    
                    const scale = useTransform(
                      itemScrollProgress,
                      [0, 0.5, 1],
                      [0.9, 1, 0.95]
                    );

                    return (
                      <motion.div
                        key={itemIndex}
                        className="absolute inset-0 w-full"
                        style={{
                          y: yOffset,
                          scale,
                          zIndex: service.items.length - itemIndex,
                        }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-200px" }}
                        transition={{
                          duration: 0.8,
                          delay: itemIndex * 0.2,
                          ease: "easeOut"
                        }}
                      >
                        <div className="relative overflow-hidden rounded-2xl h-full group bg-[#1a1a1a] shadow-2xl">
                          <motion.img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: itemIndex * 0.2 + 0.4
                            }}
                          />
                          
                          {/* Card title overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                            <h4 className="text-xl font-bold text-white mb-2">
                              {item.title}
                            </h4>
                          </div>
                          
                          {/* Decorative border */}
                          <motion.div
                            className="absolute inset-0 border-2 border-maverick-orange/30 rounded-2xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: itemIndex * 0.2 + 0.8
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Content Stack - Right Side */}
                <div className="space-y-32">
                  {service.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="space-y-6"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{
                        duration: 0.7,
                        delay: itemIndex * 0.3,
                        ease: "easeOut"
                      }}
                    >
                      <div className="space-y-4">
                        <motion.div
                          className="inline-block px-4 py-2 bg-maverick-orange/10 border border-maverick-orange/20 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: itemIndex * 0.3 + 0.2
                          }}
                        >
                          <span className="text-maverick-orange text-sm font-medium">
                            {String(itemIndex + 1).padStart(2, '0')}
                          </span>
                        </motion.div>
                        
                        <h4 className="text-3xl md:text-4xl font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-[#AAAAAA] text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Decorative element */}
                      <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: itemIndex * 0.3 + 0.6
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              // Original alternating layout for other services
              <div className="space-y-24 md:space-y-32">
                {service.items.map((item, itemIndex) => {
                  const isEven = itemIndex % 2 === 0;
                  const isLeft = isEven;

                  return (
                    <motion.div
                      key={itemIndex}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-150px" }}
                      transition={{
                        duration: 0.8,
                        delay: itemIndex * 0.2,
                        ease: "easeOut"
                      }}
                    >
                      {/* Content Block */}
                      <motion.div
                        className={`${isLeft ? 'lg:order-1' : 'lg:order-2'} space-y-6`}
                        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 0.7,
                          delay: itemIndex * 0.2 + 0.3,
                          ease: "easeOut"
                        }}
                      >
                        <div className="space-y-4">
                          <h4 className="text-2xl md:text-3xl font-bold text-white">
                            {item.title}
                          </h4>
                          <p className="text-[#AAAAAA] text-lg leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Decorative element */}
                        <motion.div
                          className="w-16 h-1 bg-gradient-to-r from-maverick-orange to-maverick-amber rounded-full"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: itemIndex * 0.2 + 0.6
                          }}
                        />
                      </motion.div>

                      {/* Image Block */}
                      <motion.div
                        className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} relative`}
                        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 0.7,
                          delay: itemIndex * 0.2 + 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <div className="relative overflow-hidden rounded-2xl group">
                          <motion.img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: itemIndex * 0.2 + 0.4
                            }}
                          />
                          
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Decorative border */}
                          <motion.div
                            className="absolute inset-0 border-2 border-maverick-orange/20 rounded-2xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: itemIndex * 0.2 + 0.8
                            }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
