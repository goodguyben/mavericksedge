import { motion } from "framer-motion";
import { Zap, Heart, Flask, Clock, SmileIcon, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We optimize processes and leverage cutting-edge technology to deliver results faster and more cost-effectively.",
      icon: <Zap className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in open communication and keeping you informed throughout every step of the process.",
      icon: <Heart className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We stay at the forefront of technology trends to provide cutting-edge solutions that give you a competitive edge.",
      icon: <Flask className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "timeliness",
      title: "Timeliness",
      description: "We respect your time and deliver projects on schedule without compromising on quality or attention to detail.",
      icon: <Clock className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We understand the challenges you face and design solutions with your specific needs and constraints in mind.",
      icon: <SmileIcon className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals.",
      icon: <Users className="w-10 h-10 text-maverick-orange" />
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-[#141414] relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-maverick-orange">Mavericks Edge</span></h2>
          <p className="text-[#BBBBBB] text-xl max-w-2xl mx-auto">
            We bring your digital vision to life with precision, creativity, and technical excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800 h-full hover:border-maverick-orange transition-all duration-300 hover-card relative"
            >
              <div className="mb-5 bg-maverick-orange bg-opacity-10 p-4 rounded-full inline-block">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-[#AAAAAA]">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated elements */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-maverick-orange opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-maverick-amber opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}