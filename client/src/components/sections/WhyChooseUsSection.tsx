
import { motion } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-10 h-10 text-white" />,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgGradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
      iconBg: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you'll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-10 h-10 text-white" />,
      gradient: "from-pink-400 via-rose-500 to-red-500",
      bgGradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-500"
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We're passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-10 h-10 text-white" />,
      gradient: "from-purple-400 via-indigo-500 to-blue-500",
      bgGradient: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
      iconBg: "bg-gradient-to-br from-purple-400 to-indigo-500"
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There's no 'one size fits all' approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-10 h-10 text-white" />,
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500"
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don't always go as planned, and we're here to make sure you're never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-10 h-10 text-white" />,
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-10 h-10 text-white" />,
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
      bgGradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
      iconBg: "bg-gradient-to-br from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a1a] relative overflow-hidden">
      {/* Dynamic floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, 
                ${i % 6 === 0 ? '#f59e0b, #ef4444' : 
                  i % 6 === 1 ? '#ec4899, #8b5cf6' :
                  i % 6 === 2 ? '#8b5cf6, #3b82f6' :
                  i % 6 === 3 ? '#10b981, #06b6d4' :
                  i % 6 === 4 ? '#3b82f6, #06b6d4' :
                  '#6366f1, #ec4899'})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5]
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

      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(249, 115, 22, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)",
              "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(16, 185, 129, 0.1) 100%)",
              "linear-gradient(315deg, rgba(16, 185, 129, 0.1) 0%, transparent 50%, rgba(249, 115, 22, 0.1) 100%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose{" "}
            <motion.span 
              className="bg-gradient-to-r from-maverick-orange via-yellow-400 to-red-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Mavericks Edge
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-[#BBBBBB] text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That's why our services are flexible, transparent, and built around long-term sustainability.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative h-full"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${reason.gradient})`,
                  padding: "2px"
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full bg-[#1A1A1A] rounded-xl" />
              </motion.div>

              {/* Main card */}
              <div className="relative bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 h-full group-hover:border-transparent transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-100`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.5 }
                  }}
                />

                {/* Floating light effect */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 group-hover:opacity-40"
                  style={{
                    background: `radial-gradient(circle, ${reason.gradient})`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10">
                  {/* Animated icon container */}
                  <motion.div 
                    className={`mb-5 p-4 rounded-full inline-block ${reason.iconBg} shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -5, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0,0,0,0.3)",
                        `0 0 30px ${reason.gradient.includes('yellow') ? 'rgba(251, 191, 36, 0.4)' :
                          reason.gradient.includes('pink') ? 'rgba(236, 72, 153, 0.4)' :
                          reason.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.4)' :
                          reason.gradient.includes('emerald') ? 'rgba(16, 185, 129, 0.4)' :
                          reason.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.4)' :
                          'rgba(99, 102, 241, 0.4)'}`,
                        "0 0 20px rgba(0,0,0,0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {reason.icon}
                    </motion.div>
                  </motion.div>

                  {/* Title with gradient effect */}
                  <motion.h3 
                    className="text-2xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${reason.gradient})`
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {reason.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-[#AAAAAA] group-hover:text-[#CCCCCC] transition-colors duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  >
                    {reason.description}
                  </motion.p>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${reason.gradient})`
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.8 }}
                  style={{ 
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced animated elements */}
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #f59e0b, #ef4444, transparent)"
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #8b5cf6, #3b82f6, transparent)"
          }}
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [360, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Additional decorative floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-red-500 opacity-60"
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
            rotate: [0, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}
