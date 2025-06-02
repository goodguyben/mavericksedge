
import { motion } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-12 h-12 text-white" />,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      accentColor: "#f59e0b",
      bgPattern: "efficiency"
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you'll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-12 h-12 text-white" />,
      gradient: "from-pink-400 via-rose-500 to-red-500",
      accentColor: "#ec4899",
      bgPattern: "transparency"
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We're passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-12 h-12 text-white" />,
      gradient: "from-purple-400 via-indigo-500 to-blue-500",
      accentColor: "#8b5cf6",
      bgPattern: "innovation"
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There's no 'one size fits all' approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-12 h-12 text-white" />,
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      accentColor: "#10b981",
      bgPattern: "research"
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don't always go as planned, and we're here to make sure you're never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-12 h-12 text-white" />,
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      accentColor: "#06b6d4",
      bgPattern: "empathy"
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-12 h-12 text-white" />,
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
      accentColor: "#6366f1",
      bgPattern: "partnership"
    }
  ];

  return (
    <section className="relative py-32 px-5 md:px-10 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient meshes */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `linear-gradient(45deg, ${reasons[i % reasons.length].accentColor}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Why Choose{" "}
            <motion.span 
              className="bg-gradient-to-r from-maverick-orange via-yellow-400 to-red-500 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Mavericks Edge
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-maverick-orange to-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That's why our services are flexible, transparent, and built around long-term sustainability.
          </motion.p>
        </motion.div>

        {/* Flowing Content Sections */}
        <div className="space-y-32">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <motion.div
                  className="flex items-center gap-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.div 
                    className="p-4 rounded-2xl relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${reason.gradient})`
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 30px ${reason.accentColor}40`,
                        `0 0 50px ${reason.accentColor}60`,
                        `0 0 30px ${reason.accentColor}40`
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {reason.icon}
                    </motion.div>
                    
                    {/* Icon background effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `radial-gradient(circle, ${reason.accentColor}20, transparent)`
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    whileHover={{
                      backgroundImage: `linear-gradient(135deg, ${reason.gradient})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {reason.title}
                  </motion.h3>
                </motion.div>

                <motion.p 
                  className="text-gray-300 text-lg md:text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {reason.description}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  className="w-24 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${reason.gradient})`
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </div>

              {/* Visual Side */}
              <div className="flex-1 relative">
                <motion.div
                  className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, ${reason.gradient})`
                    }}
                    animate={{
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    {reason.bgPattern === "efficiency" && (
                      <motion.div className="grid grid-cols-6 gap-2 p-8 h-full">
                        {[...Array(24)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-white/30 rounded"
                            animate={{
                              opacity: [0.3, 1, 0.3],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.1,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                    
                    {reason.bgPattern === "transparency" && (
                      <motion.div className="relative h-full flex items-center justify-center">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute border-2 border-white/30 rounded-full"
                            style={{
                              width: `${(i + 1) * 80}px`,
                              height: `${(i + 1) * 80}px`
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                    
                    {reason.bgPattern === "innovation" && (
                      <motion.div className="h-full flex items-center justify-center">
                        <motion.div
                          className="w-32 h-32 border-4 border-white/40"
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
                          }}
                        />
                      </motion.div>
                    )}

                    {reason.bgPattern === "research" && (
                      <motion.div className="grid grid-cols-4 gap-4 p-8 h-full">
                        {[...Array(16)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-white/20 rounded-lg"
                            animate={{
                              height: [`${Math.random() * 50 + 20}%`, `${Math.random() * 80 + 20}%`]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              delay: i * 0.1,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    )}

                    {reason.bgPattern === "empathy" && (
                      <motion.div className="h-full flex items-center justify-center">
                        <motion.div
                          className="w-40 h-40 relative"
                          animate={{
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-3 h-3 bg-white/40 rounded-full"
                              style={{
                                top: "50%",
                                left: "50%",
                                transformOrigin: "0 0"
                              }}
                              animate={{
                                rotate: [i * 45, (i * 45) + 360],
                                scale: [1, 1.5, 1]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </motion.div>
                      </motion.div>
                    )}

                    {reason.bgPattern === "partnership" && (
                      <motion.div className="h-full flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-8 h-8 bg-white/40 rounded-full"
                              style={{
                                top: i < 2 ? "20%" : "70%",
                                left: i % 2 === 0 ? "20%" : "70%"
                              }}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.4, 0.8, 0.4]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                          <motion.div
                            className="absolute inset-0 border-2 border-white/30 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                    animate={{
                      translateX: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full opacity-60"
                  style={{
                    background: `radial-gradient(circle, ${reason.accentColor}, transparent)`
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full opacity-40"
                  style={{
                    background: `linear-gradient(45deg, ${reason.accentColor}, transparent)`
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-maverick-orange to-yellow-400 rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <p className="text-gray-400 text-lg">
            Ready to experience the Mavericks Edge difference?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
