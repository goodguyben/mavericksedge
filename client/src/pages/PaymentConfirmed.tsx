
import { motion } from "framer-motion";
import { CheckCircle, Download, Mail, Calendar, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function PaymentConfirmed() {
  const [orderNumber, setOrderNumber] = useState("");
  
  useEffect(() => {
    // Generate a random order number on load
    const randomOrder = Math.floor(10000000 + Math.random() * 90000000).toString();
    setOrderNumber(randomOrder);
    
    // Verify this is a secure context - for a real implementation this would check a token
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    
    if (!token) {
      // In a real implementation, redirect to home if no valid token
      // window.location.href = '/';
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] pt-10 pb-20 px-5"
    >
      <div className="max-w-4xl mx-auto mt-10">
        {/* Success Animation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2
          }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 rounded-full bg-maverick-orange opacity-20"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <div className="relative z-10 flex">
              <CheckCircle className="h-24 w-24 text-maverick-orange" />
              <motion.div
                initial={{ scale: 0, x: -15 }}
                animate={{ scale: 1, x: -15 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <Heart className="h-8 w-8 text-maverick-orange absolute top-0 right-0" fill="#FF5630" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Main Content Card */}
        <motion.div 
          className="bg-[#1E1E1E] rounded-2xl p-8 md:p-12 border border-gray-800 relative overflow-hidden"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-maverick-orange opacity-5"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Woohoo! <span className="text-maverick-orange">You're All Set!</span>
            </motion.h1>
            
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-xl text-maverick-cream">
                Thank you SO much for trusting us with your business! We're absolutely thrilled to work with you and can't wait to get started on your journey! ✨
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#121212] p-6 rounded-xl mb-8 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Your Awesome Order</h2>
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-700">
                <span className="text-[#AAAAAA]">Order Number:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-700">
                <span className="text-[#AAAAAA]">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#AAAAAA]">Payment Status:</span>
                <span className="text-maverick-orange font-medium">Confirmed & Ready to Rock!</span>
              </div>
            </motion.div>
            
            {/* Next Steps */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold mb-6">What's Next? Let's Get This Party Started!</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div 
                  className="bg-[#121212] p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center"
                  whileHover={{ y: -5, borderColor: "#FF5630" }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="h-10 w-10 text-maverick-orange mb-4" />
                  <h3 className="text-lg font-medium mb-2">Check Your Inbox</h3>
                  <p className="text-[#AAAAAA] text-sm">We've sent a special welcome pack to your email - it's filled with goodies!</p>
                </motion.div>
                
                <motion.div 
                  className="bg-[#121212] p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center"
                  whileHover={{ y: -5, borderColor: "#FF5630" }}
                  transition={{ duration: 0.3 }}
                >
                  <Calendar className="h-10 w-10 text-maverick-orange mb-4" />
                  <h3 className="text-lg font-medium mb-2">Let's Meet Soon!</h3>
                  <p className="text-[#AAAAAA] text-sm">Our amazing team will reach out within 24 hours to schedule our first adventure together!</p>
                </motion.div>
                
                <motion.div 
                  className="bg-[#121212] p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center"
                  whileHover={{ y: -5, borderColor: "#FF5630" }}
                  transition={{ duration: 0.3 }}
                >
                  <Download className="h-10 w-10 text-maverick-orange mb-4" />
                  <h3 className="text-lg font-medium mb-2">Exclusive Resources</h3>
                  <p className="text-[#AAAAAA] text-sm">Unlock your special client materials - we've prepared everything just for you!</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Testimonial/Personal Touch */}
            <motion.div 
              className="bg-[#252525] p-6 rounded-xl mb-10 border border-gray-700 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="absolute top-3 right-4 opacity-30">
                <Heart className="h-20 w-20 text-maverick-orange" fill="#FF5630" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-medium mb-3">A Personal Note From Our Team</h3>
                <p className="text-[#DDDDDD] italic">
                  "We're beyond excited to welcome you to the Mavericks Edge family! Your trust means the world to us, and we promise to pour our hearts into creating something truly special for you. This is the beginning of an amazing journey together!"
                </p>
                <p className="text-maverick-orange font-medium mt-4">— The Entire Mavericks Edge Team</p>
              </div>
            </motion.div>
            
            {/* Return to home button */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.a 
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-maverick-orange hover:bg-maverick-orange/90 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home (But We'll Be In Touch Soon!)
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Legal disclaimer with heart */}
        <motion.div 
          className="text-center mt-8 text-[#777777] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="flex items-center justify-center gap-2">
            This is a secure transaction. Your payment details are protected with 
            <Heart className="h-3 w-3 text-maverick-orange" fill="#FF5630" />
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Mavericks Edge. All rights reserved. Made with 💖 for our amazing clients!</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
