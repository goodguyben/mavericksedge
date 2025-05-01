import { motion } from "framer-motion";
import { Code, PenTool, Brain, Database } from "lucide-react";

export default function WhatWeDoSection() {
  const services = [
    {
      id: "web-development",
      title: "Web & Digital Solutions",
      description: "Reliable and scalable websites designed to support your business goals, transform your online presence and built to perform now and into the future.",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: "Our web design and development services go beyond aesthetics. We deliver scalable, secure, and accessible digital platforms that align with your unique business needs. Whether you’re launching an e-commerce store, streamlining internal workflows with custom web apps, or simply need reliable support and hosting, we ensure your site is optimized, compliant, and built to grow with you."
    },
    {
      id: "creative-design",
      title: "Marketing & Creative Services",
      description: "Elevate your brand with strategic execution that drives results and reach new audiences with data-driven marketing strategies that deliver measurable ROI.",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: "We enhance your online presence with tailored SEO strategies, from local to technical, and manage impactful PPC campaigns across Google Ads and social media. Our social media strategies foster meaningful connections, while email marketing and automation keep your brand at the forefront of your audience’s mind. Through Conversion Rate Optimization (CRO), we fine-tune every interaction to maximize engagement and ROI. With real-time data insights, we continuously optimize your marketing efforts to ensure maximum impact and efficiency.
"
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description: "Reclaim valuable time by automating routine tasks, allowing your team to focus on strategy, creativity, and growth.",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details: "Our AI strategy and integration services provide a custom roadmap, tool selection, and seamless implementation, from agent-powered workflow automation to personalized chatbots and recommendation engines. We empower smarter business decisions with AI-driven insights and ensure secure, privacy-first deployment. With comprehensive staff training and ongoing support, we guide your team through every step, ensuring smooth adoption, efficiency, and long-term success."
    },
    {
      id: "client-services",
      title: "Ongoing Support & Optimization",
      description: "Future-proof your digital investments with proactive maintenance that enhances performance and adapts to evolving needs.",
      icon: <Database className="w-12 h-12 text-maverick-orange" />,
      details: "Sleep soundly knowing your digital assets are monitored 24/7 with rapid response to security threats and performance issues before they impact your business. Continuously improve conversion rates through regular A/B testing and optimization based on user behavior analytics. Scale your digital solutions confidently as your business grows, with regular technology audits ensuring you stay ahead of industry trends and customer expectations."
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-[#121212]">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We <span className="text-maverick-orange">Do</span></h2>
          <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
            We deliver transformative digital solutions that drive growth, increase efficiency, and create meaningful customer experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Service Card */}
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800 hover:border-maverick-orange transition-all duration-300 hover-card relative h-full">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-[#AAAAAA] mb-4">{service.description}</p>
                    <p className="text-[#DDDDDD] leading-relaxed">{service.details}</p>
                  </div>
                </div>
              </div>

              {/* Animated border glow effect on hover */}
              <motion.div
                className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-maverick-orange via-maverick-amber to-maverick-orange blur-sm group-hover:blur"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}