import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ServiceCascadeSection: React.FC = () => {
  // Create refs for all sections at the top level
  const webDesignRef = useRef(null);
  const marketingRef = useRef(null);
  const aiRef = useRef(null);

  // Create all useInView hooks at the top level
  const webDesignInView = useInView(webDesignRef, { once: true, margin: "-20%" });
  const marketingInView = useInView(marketingRef, { once: true, margin: "-20%" });
  const aiInView = useInView(aiRef, { once: true, margin: "-20%" });

  const services = [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      ref: webDesignRef,
      inView: webDesignInView,
      items: [
        {
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          title: 'Custom Website Design',
          description: 'We create stunning, responsive websites that capture your brand\'s essence and convert visitors into customers. Our designs prioritize user experience while maintaining pixel-perfect aesthetics that work seamlessly across all devices.'
        },
        {
          image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop',
          title: 'E-commerce Solutions',
          description: 'From simple online stores to complex marketplace platforms, we build robust e-commerce solutions that drive sales. Our systems integrate seamlessly with payment gateways, inventory management, and analytics tools.'
        },
        {
          image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=400&fit=crop',
          title: 'Web Application Development',
          description: 'We develop powerful, scalable web applications tailored to your business needs. Whether it\'s a customer portal, internal management system, or SaaS platform, we deliver solutions that perform flawlessly under any load.'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing & Creative',
      ref: marketingRef,
      inView: marketingInView,
      items: [
        {
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
          title: 'Brand Strategy & Design',
          description: 'We craft compelling brand identities that resonate with your target audience and stand out in competitive markets. Our strategic approach ensures your brand tells a cohesive story across all touchpoints.'
        },
        {
          image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
          title: 'Digital Marketing Campaigns',
          description: 'Our data-driven marketing campaigns deliver measurable results across all digital channels. From social media management to PPC advertising, we optimize every touchpoint to maximize your ROI and grow your customer base.'
        },
        {
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
          title: 'Content Creation & SEO',
          description: 'We create engaging content that not only captivates your audience but also ranks high on search engines. Our SEO-optimized content strategy drives organic traffic and establishes your authority in your industry.'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Integration & Automation',
      ref: aiRef,
      inView: aiInView,
      items: [
        {
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
          title: 'AI-Powered Chatbots',
          description: 'Transform customer service with intelligent chatbots that provide instant, accurate responses 24/7. Our AI solutions learn from interactions to continuously improve customer satisfaction and reduce support costs.'
        },
        {
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
          title: 'Process Automation',
          description: 'Streamline your operations with custom automation solutions that eliminate repetitive tasks and reduce human error. From data processing to workflow management, we help you achieve maximum efficiency.'
        },
        {
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          title: 'Data Analytics & Insights',
          description: 'Unlock the power of your data with advanced analytics and machine learning algorithms. We transform raw data into actionable insights that drive strategic decisions and fuel business growth.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Service <span className="text-maverick-orange">Deep Dive</span>
          </h2>
          <p className="text-xl text-[#AAAAAA] max-w-3xl mx-auto">
            Explore the comprehensive solutions we provide across our three core service areas
          </p>
        </motion.div>

        {services.map((service, serviceIndex) => (
          <div key={service.id} ref={service.ref} className="mb-32">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={service.inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold mb-16 text-center"
            >
              {service.title}
            </motion.h3>

            <div className="space-y-24">
              {service.items.map((item, itemIndex) => {
                const isEven = itemIndex % 2 === 0;
                const delay = itemIndex * 0.3;

                return (
                  <div
                    key={itemIndex}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                  >
                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      animate={service.inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: delay }}
                      className="w-full lg:w-1/2"
                    >
                      <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      animate={service.inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: delay + 0.2 }}
                      className="w-full lg:w-1/2"
                    >
                      <div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-2xl border border-[#333] hover:border-maverick-orange/30 transition-colors duration-500">
                        <h4 className="text-2xl lg:text-3xl font-bold mb-6 text-maverick-orange">
                          {item.title}
                        </h4>
                        <p className="text-[#CCCCCC] text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCascadeSection;