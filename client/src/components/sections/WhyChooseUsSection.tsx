import { motion } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users, ArrowRight, Star } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      accentColor: "#f59e0b",
      stats: "3x faster delivery"
    },
    {
      id: "transparency", 
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication.",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-pink-400 via-rose-500 to-red-500",
      accentColor: "#ec4899",
      stats: "100% visibility"
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We're passionate about staying ahead of the curve with the latest tech solutions.",
      icon: <FlaskConical className="w-8 h-8" />,
      gradient: "from-purple-400 via-indigo-500 to-blue-500",
      accentColor: "#8b5cf6",
      stats: "Cutting-edge tech"
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors.",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      accentColor: "#10b981",
      stats: "Data-driven insights"
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We understand your challenges and design solutions that fit within your scope and budget.",
      icon: <SmileIcon className="w-8 h-8" />,
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      accentColor: "#06b6d4",
      stats: "Client satisfaction"
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively towards success.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
      accentColor: "#6366f1",
      stats: "Long-term growth"
    }
  ];

  return (
    <section className="relative py-24 px-5 md:px-10 bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 md:grid-cols-16 gap-1 h-full">
          {[...Array(128)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-maverick-orange"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-maverick-orange rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-maverick-orange/30 bg-maverick-orange/5 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-maverick-orange" />
            <span className="text-maverick-orange text-sm font-medium">Why Choose Us</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">The </span>
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-maverick-orange via-yellow-400 to-red-500 bg-clip-text text-transparent">
                Mavericks Edge
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-maverick-orange to-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.span>
            <br />
            <span className="text-white">Difference</span>
          </motion.h2>

          <motion.p 
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We partner with passionate people building meaningful work — delivering flexible, transparent solutions built around long-term sustainability.
          </motion.p>
        </motion.div>

        {/* Hexagonal Grid Layout */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Hexagonal Grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8 mb-8">
              {/* Top Row */}
              {reasons.slice(0, 3).map((reason, index) => (
                <HexagonCard key={reason.id} reason={reason} index={index} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-8" style={{ marginLeft: '12.5%' }}>
              {/* Bottom Row - Offset */}
              {reasons.slice(3, 6).map((reason, index) => (
                <HexagonCard key={reason.id} reason={reason} index={index + 3} />
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Grid */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <HexagonCard key={reason.id} reason={reason} index={index} />
            ))}
          </div>
        </div>

        {/* Central Connection Hub */}
        <motion.div
          className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-maverick-orange to-yellow-400 flex items-center justify-center shadow-2xl border-4 border-black"
            animate={{
              boxShadow: [
                "0 0 30px rgba(249, 115, 22, 0.5)",
                "0 0 50px rgba(249, 115, 22, 0.8)",
                "0 0 30px rgba(249, 115, 22, 0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-maverick-orange to-yellow-400 text-black font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Experience the Difference</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function HexagonCard({ reason, index }: { reason: any; index: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Hexagon Container */}
      <div className="relative w-full aspect-square max-w-80 mx-auto">
        {/* Background Hexagon */}
        <motion.div
          className="absolute inset-4 rounded-3xl border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
          style={{
            clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
          }}
          whileHover={{
            borderColor: reason.accentColor,
            transition: { duration: 0.3 }
          }}
        >
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${reason.gradient})`
            }}
          />

          {/* Content */}
          <div className="relative p-8 h-full flex flex-col justify-center items-center text-center z-10">
            {/* Icon */}
            <motion.div
              className="mb-6 p-4 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${reason.gradient})`
              }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-white">
                {reason.icon}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3 
              className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
              style={{
                "--tw-gradient-from": reason.accentColor + "80",
                "--tw-gradient-to": reason.accentColor
              } as any}
            >
              {reason.title}
            </motion.h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
              {reason.description}
            </p>

            {/* Stats Badge */}
            <motion.div
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: reason.accentColor + "20",
                borderColor: reason.accentColor + "40",
                color: reason.accentColor
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {reason.stats}
            </motion.div>
          </div>

          {/* Hover Effect Lines */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${reason.accentColor}40, transparent)`
            }}
          />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60"
          style={{ backgroundColor: reason.accentColor }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        />

        <motion.div
          className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full opacity-40"
          style={{ backgroundColor: reason.accentColor }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3
          }}
        />
      </div>
    </motion.div>
  );
}