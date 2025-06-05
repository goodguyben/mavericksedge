import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/custom-button";
import { ContactIcon } from "@/components/ui/icons";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background circle */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        
        {/* Secondary circles */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-20"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * 0.015,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-25"
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 35 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen pt-20 lg:pt-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200"
            >
              <ContactIcon className="w-4 h-4 text-maverick-orange" />
              <span className="text-sm font-medium text-gray-700">Contact Us</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900"
              >
                There is a
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-4"
              >
                {/* Stack icon similar to the reference */}
                <div className="w-12 h-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange to-orange-600 rounded transform rotate-3 opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange to-orange-500 rounded transform -rotate-2 opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange to-orange-400 rounded"></div>
                </div>
                <span className="text-5xl lg:text-7xl font-bold text-gray-900">Better Way</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900"
              >
                to Secure.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg text-gray-600 max-w-md leading-relaxed"
            >
              Mavericks Edge is an innovatively equipped web team that focuses cyber security, 
              web development to avoid costly code breaches.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Button 
                href="/contact" 
                variant="primary"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Main 3D Stack Element */}
            <div className="relative w-80 h-60 lg:w-96 lg:h-72">
              {/* Layered papers effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl transform rotate-6"
                animate={{
                  rotateY: mousePosition.x * 0.1 - 5,
                  rotateX: mousePosition.y * 0.05 - 2.5,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                style={{ transformPerspective: "1000px" }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl shadow-xl transform rotate-3"
                animate={{
                  rotateY: mousePosition.x * 0.08 - 4,
                  rotateX: mousePosition.y * 0.04 - 2,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                style={{ transformPerspective: "1000px" }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl shadow-lg transform -rotate-2"
                animate={{
                  rotateY: mousePosition.x * 0.06 - 3,
                  rotateX: mousePosition.y * 0.03 - 1.5,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                style={{ transformPerspective: "1000px" }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl"
                animate={{
                  rotateY: mousePosition.x * 0.04 - 2,
                  rotateX: mousePosition.y * 0.02 - 1,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                style={{ transformPerspective: "1000px" }}
              />

              {/* Floating Security Badge */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-maverick-orange to-orange-600 rounded-full flex items-center justify-center shadow-xl"
                animate={{
                  y: Math.sin(Date.now() * 0.001) * 10,
                  rotateZ: mousePosition.x * 0.05,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-maverick-orange rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}