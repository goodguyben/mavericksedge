import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, ArrowRight, Bell } from 'lucide-react';

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

      // Reset form after 6 seconds for demo purposes
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 6000);
    }, 1500);
  };

  return (
    <section className="newsletter-container" aria-labelledby="newsletter-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="newsletter-content ml-[0px] mr-[0px] mt-[-120px] mb-[-120px] md:mt-[-120px] md:mb-[-120px] sm:mt-0 sm:mb-0"
      >
        <motion.div 
          className="flex items-center mb-2 gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <motion.div
            animate={{ 
              rotateZ: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatDelay: 3
            }}
            className="bg-maverick-orange bg-opacity-20 rounded-full p-2"
            aria-hidden="true"
          >
            <Bell size={22} className="text-maverick-orange" />
          </motion.div>
          <motion.h2 
            id="newsletter-heading"
            className="text-2xl md:text-3xl font-bold text-maverick-orange mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Stay Ahead of the Curve
          </motion.h2>
        </motion.div>

        <motion.p 
          className="text-gray-300 mb-5 max-w-lg font-serif text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Subscribe to our newsletter for the latest industry trends, technological innovations, 
          and exclusive deals to empower your digital journey. Be the first to receive insights 
          about emerging technologies and special promotions.
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
              aria-labelledby="newsletter-heading"
            >
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <div className="relative flex-grow">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-maverick-orange focus:ring-2 focus:ring-maverick-orange/20 transition-all duration-300 text-white"
                    disabled={isSubmitting}
                    required
                    aria-describedby={error ? "newsletter-error" : undefined}
                    autoComplete="email"
                  />
                  {error && (
                    <motion.p 
                      id="newsletter-error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-sm mt-1 absolute"
                      role="alert"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-maverick-orange text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-maverick-orange/90 whitespace-nowrap maverick-button-primary ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? (
                    <motion.div 
                      className="h-5 w-5 border-2 border-t-transparent border-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      aria-hidden="true"
                    />
                  ) : (
                    <>
                      Subscribe <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
              role="status"
              aria-live="polite"
            >
              <div className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1.2, 1],
                    rotate: [0, 20, 0]
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 10,
                    times: [0, 0.6, 1] 
                  }}
                  className="bg-green-500 rounded-full p-1 mr-3"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </motion.div>
                <p>Thanks for subscribing! We'll keep you updated with our latest insights.</p>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-maverick-orange" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span className="font-serif text-left">We respect your privacy and will never share your information.</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletter;