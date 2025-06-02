import { motion } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-6 h-6" />,
      color: "#f59e0b"
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you'll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-6 h-6" />,
      color: "#ec4899"
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We're passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-6 h-6" />,
      color: "#8b5cf6"
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There's no 'one size fits all' approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "#10b981"
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don't always go as planned, and we're here to make sure you're never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-6 h-6" />,
      color: "#06b6d4"
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-6 h-6" />,
      color: "#6366f1"
    }
  ];

  return (
    <section className="relative py-32 px-5 md:px-10 bg-black overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-64 bg-gradient-to-b from-maverick-orange/20 to-transparent rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-48 bg-gradient-to-b from-purple-500/15 to-transparent -rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-32 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        {/* Header Section - keeping specified formatting */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-maverick-orange via-yellow-400 to-red-500 bg-clip-text text-transparent">
              Mavericks Edge
            </span>
          </motion.h2>

          <motion.p 
            className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That's why our services are flexible, transparent, and built around long-term sustainability.
          </motion.p>
        </motion.div>

        {/* Minimalist grid layout */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300"
                  style={{ color: reason.color }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {reason.icon}
                </motion.div>

                <div className="flex-1 min-w-0">
                  <motion.h3 
                    className="text-2xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {reason.title}
                  </motion.h3>

                  <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Subtle underline that appears on hover */}
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          className="text-center pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-maverick-orange to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-gray-400 text-lg">
            Ready to experience the Mavericks Edge difference?
          </p>
        </motion.div>
      </div>
    </section>
  );
}