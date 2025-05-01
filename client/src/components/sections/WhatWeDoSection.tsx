import { motion } from "framer-motion";
import { Code, PenTool, Brain, Database } from "lucide-react";

export default function WhatWeDoSection() {
  const services = [
    {
      id: "web-development",
      title: "Web & Digital Solutions",
      description: "Transform your online presence with custom websites that convert visitors into customers and reduce operational costs.",
      icon: <Code className="w-12 h-12 text-maverick-orange" />,
      details: "Elevate your business with responsive websites that load in under 2 seconds, improving SEO rankings and customer retention. Our accessible, secure platforms integrate seamlessly with your existing systems, enabling 24/7 online sales and reducing customer support inquiries by up to 35%. Experience faster time-to-market with our streamlined development process, getting your digital products to customers before your competitors."
    },
    {
      id: "creative-design",
      title: "Marketing & Creative Services",
      description: "Amplify your brand voice and reach new audiences with data-driven marketing strategies that deliver measurable ROI.",
      icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
      details: "Break through digital noise with distinctive brand messaging that resonates with your target audience. Our comprehensive marketing approach combines SEO, content, and paid advertising to create multiple touchpoints with potential customers, increasing conversion rates by up to 40%. Track campaign performance in real-time with our analytics dashboard, allowing for agile strategy adjustments that maximize your marketing budget and generate qualified leads."
    },
    {
      id: "digital-strategy",
      title: "AI Integration & Automation",
      description: "Unleash productivity and uncover insights with AI solutions that automate repetitive tasks and enhance decision-making.",
      icon: <Brain className="w-12 h-12 text-maverick-orange" />,
      details: "Reclaim valuable staff time by automating routine processes, allowing your team to focus on creative and strategic initiatives. Gain competitive advantage through AI-powered data analysis that identifies patterns humans might miss, enabling more informed business decisions. Enhance customer experience with personalized interactions through chatbots and recommendation engines, increasing satisfaction and loyalty while reducing operational costs."
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