import { motion } from "framer-motion";
import { Star, Users, Award, Zap } from "lucide-react";

export default function HeroSideComponent() {
  const stats = [
    { icon: Star, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Zap, value: "24/7", label: "Support Available" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="relative"
    >
      {/* Background card */}
      <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-black/80 backdrop-blur-lg rounded-2xl border border-maverick-orange/20 p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-6"
        >
          <h3 className="text-xl lg:text-2xl font-bold text-maverick-cream mb-2">
            Why Choose Us?
          </h3>
          <p className="text-maverick-cream/70 text-sm lg:text-base">
            Trusted by Edmonton businesses
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
              className="text-center p-3 rounded-xl bg-gradient-to-br from-maverick-orange/10 to-transparent border border-maverick-orange/20"
            >
              <stat.icon className="h-5 w-5 lg:h-6 lg:w-6 text-maverick-orange mx-auto mb-2" />
              <div className="text-lg lg:text-xl font-bold text-maverick-cream">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-maverick-cream/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="space-y-3"
        >
          {[
            "Custom Web Design",
            "SEO Optimization",
            "AI Integration",
            "24/7 Support"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-maverick-orange rounded-full flex-shrink-0" />
              <span className="text-maverick-cream/80 text-sm lg:text-base">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-maverick-orange/20 to-transparent rounded-full blur-xl" />
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-maverick-orange/10 to-transparent rounded-full blur-lg" />
      </div>
    </motion.div>
  );
}