import { motion } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you’ll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We’re passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There’s no ‘one size fits all’ approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don’t always go as planned, and we’re here to make sure you’re never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
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
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That’s why our services are flexible, transparent, and built around long-term sustainability.
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