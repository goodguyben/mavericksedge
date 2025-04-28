import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      
      // Reset form after 5 seconds for demo purposes
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="newsletter-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="newsletter-content"
      >
        <motion.h3 
          className="text-2xl font-bold text-maverick-orange mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Stay Ahead of the Curve
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 mb-4 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Subscribe to our newsletter for the latest industry trends, technological innovations, 
          and exclusive deals tailored to empower your digital journey.
        </motion.p>
        
        <AnimatePresence mode="wait">
          {!isSubscribed ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="newsletter-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 w-full bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-maverick-orange transition-all duration-300 text-white"
                    disabled={isSubmitting}
                  />
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-sm mt-1 absolute"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-maverick-orange text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap ${
                    isSubmitting ? 'bg-opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div 
                      className="h-5 w-5 border-2 border-t-transparent border-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    />
                  ) : (
                    <>
                      Subscribe <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-green-900/30 py-4 px-6 rounded-lg border border-green-700 text-green-300 max-w-md"
            >
              <div className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="bg-green-500 rounded-full p-1 mr-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </motion.div>
                <p>Thanks for subscribing! We'll keep you posted.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          className="mt-4 flex items-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-maverick-orange">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          We respect your privacy and will never share your information.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Newsletter;