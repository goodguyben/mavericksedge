
import { motion } from "framer-motion";
import { CheckCircle, Download, Mail, Calendar } from "lucide-react";
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
            <CheckCircle className="h-24 w-24 text-maverick-orange relative z-10" />
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
              Payment <span className="text-maverick-orange">Confirmed</span>
            </motion.h1>
            
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-xl text-maverick-cream">
                Thank you for your business! Your payment has been successfully processed.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-[#121212] p-6 rounded-xl mb-8 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
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
                <span className="text-maverick-orange font-medium">Confirmed</span>
              </div>
            </motion.div>
            
            {/* Next Steps */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div 
                  className="bg-[#121212] p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center"
                  whileHover={{ y: -5, borderColor: "#FF5630" }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="h-10 w-10 text-maverick-orange mb-4" />
                  <h3 className="text-lg font-medium mb-2">Check Your Email</h3>
                  <p className="text-[#AAAAAA] text-sm">A receipt has been sent to your email address</p>
                </motion.div>
                
                <motion.div 
                  className="bg-[#121212] p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center"
                  whileHover={{ y: -5, borderColor: "#FF5630" }}
                  transition={{ duration: 0.3 }}
                >
                  <Calendar className="h-10 w-10 text-maverick-orange mb-4" />
                  <h3 className="text-lg font-medium mb-2">Schedule Meeting</h3>
                  <p className="text-[#AAAAAA] text-sm">Our team will contact you soon to schedule your first meeting</p>
                </motion.div>
                
                <motion.div 
                  className="bg-[#121212] p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center"
                  whileHover={{ y: -5, borderColor: "#FF5630" }}
                  transition={{ duration: 0.3 }}
                >
                  <Download className="h-10 w-10 text-maverick-orange mb-4" />
                  <h3 className="text-lg font-medium mb-2">Download Resources</h3>
                  <p className="text-[#AAAAAA] text-sm">Access to relevant materials and resources</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Return to home button */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-maverick-orange hover:bg-maverick-orange/90 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Return to Home
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Legal disclaimer */}
        <motion.div 
          className="text-center mt-8 text-[#777777] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p>This is a secure transaction. Your payment details are protected.</p>
          <p className="mt-2">© {new Date().getFullYear()} Mavericks Edge. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
