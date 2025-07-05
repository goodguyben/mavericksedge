import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users, Sparkles, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import GradientText from "@/components/ui/GradientText";

export default function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-8 h-8 text-maverick-orange" />,
      color: "#ff5630",
      gradient: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you'll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-8 h-8 text-maverick-orange" />,
      color: "#ff5630",
      gradient: "from-pink-400 via-red-400 to-orange-400"
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We're passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-8 h-8 text-maverick-orange" />,
      color: "#ff5630",
      gradient: "from-purple-400 via-violet-500 to-blue-500"
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There's no 'one size fits all' approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-8 h-8 text-maverick-orange" />,
      color: "#ff5630",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500"
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don't always go as planned, and we're here to make sure you're never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-8 h-8 text-maverick-orange" />,
      color: "#ff5630",
      gradient: "from-cyan-400 via-blue-500 to-indigo-500"
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-8 h-8 text-maverick-orange" />,
      color: "#ff5630",
      gradient: "from-indigo-400 via-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-40 px-5 md:px-10 bg-black overflow-hidden min-h-screen">
      {/* Dynamic Floating Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        {/* Animated Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-maverick-orange/10 to-purple-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ bottom: "20%", right: "15%" }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute w-2 h-32 bg-gradient-to-b from-maverick-orange/20 to-transparent"
          style={{ y: floatingY, rotateZ: 45, top: "25%", left: "80%" }}
          animate={{ rotateZ: [45, 225, 45] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-1 h-24 bg-gradient-to-b from-purple-500/15 to-transparent"
          style={{ y: floatingY, bottom: "30%", left: "5%" }}
          animate={{ rotateZ: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
      </motion.div>
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header Section - keeping specified formatting */}
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ rotateX }}
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="p-3 rounded-full bg-gradient-to-r from-maverick-orange/20 to-purple-500/20 backdrop-blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-maverick-orange" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Why Choose{" "}
            <GradientText 
              colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
              animationSpeed={5}
            >
              Mavericks Edge
            </GradientText>
          </motion.h2>

          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            As one of Edmonton's premier web design companies and SEO agencies, we partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That's why our Edmonton web design and digital marketing services are flexible, transparent, and built around long-term sustainability. Whether you need website design in Edmonton or comprehensive SEO services, we're here to help your business grow.
          </motion.p>
        </motion.div>

        {/* Creative Interactive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 place-items-center pl-[0px] pr-[0px] ml-[-32px] mr-[-32px]">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="group cursor-pointer w-full max-w-sm h-[28rem] md:h-[28rem]"
              initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredItem(reason.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* Floating Connection Lines */}
              <AnimatePresence>
                {hoveredItem === reason.id && (
                  <motion.div
                    className="absolute inset-0 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className={`absolute w-px h-32 bg-gradient-to-b ${reason.gradient} opacity-50`}
                      style={{ top: "-8rem", left: "50%" }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className={`absolute w-32 h-px bg-gradient-to-r ${reason.gradient} opacity-50`}
                      style={{ top: "50%", left: "-8rem" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Card */}
              <motion.div 
                className="relative p-6 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden h-full flex flex-col justify-between"
                whileHover={{ 
                  borderColor: reason.color + "40",
                  boxShadow: `0 20px 40px ${reason.color}20`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5`}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating Icon */}
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    boxShadow: `0 10px 30px ${reason.color}30`
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {reason.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>

                  <motion.p 
                    className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300"
                    transition={{ duration: 0.3 }}
                  >
                    {reason.description}
                  </motion.p>
                </div>

                {/* Decorative Corner Elements */}
                <motion.div
                  className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${reason.gradient} opacity-20 blur-xl`}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            </motion.div>
          ))}

          </div>

        {/* Bottom section with enhanced styling */}
        <motion.div
          className="text-center pt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-maverick-orange to-transparent" />
            <motion.div
              className="mx-4 p-2 rounded-full bg-maverick-orange/10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-maverick-orange" />
            </motion.div>
            <div className="h-px w-32 bg-gradient-to-r from-maverick-orange via-transparent to-transparent" />
          </motion.div>

          <motion.p 
            className="text-gray-400 text-xl font-medium"
            whileHover={{ 
              scale: 1.05,
              color: "#ffffff"
            }}
            transition={{ duration: 0.3 }}
          >
            Ready to experience the Mavericks Edge difference?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}