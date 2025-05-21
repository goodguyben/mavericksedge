<h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-wide leading-normal text-maverick-cream text-center">
            <div className="inline-block">
              {/* Word-by-word animation for the heading */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="inline-block"
              >
                Building{" "}
              </motion.span>
              <span className="text-maverick-orange relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  resilience
                </motion.span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-maverick-orange"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                />
              </span>
              {" "}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.3 }}
                className="inline-block"
              >
                with{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.8 }}
                className="inline-block"
              >
                innovation{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.3 }}
                className="inline-block"
              >
                and{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.8 }}
                className="inline-block"
              >
                heart
              </motion.span>
            </div>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.3 }}
            className="text-xl md:text-2xl text-maverick-cream/80 mt-6 mb-10 max-w-2xl font-sans leading-relaxed mx-auto text-center"
          >
            Web development, marketing, and AI integration services tailored for
            SMBs and nonprofits
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          >
            <Button 
              href="/services" 
              variant="primary"
            >
              Explore Services
            </Button>
            <Button 
              href="/contact" 
              variant="outline"
            >
              Book Free Consultation
            </Button>
          </motion.div>
<div className="container mx-auto px-4 md:px-10 z-20 flex justify-center items-center w-full">
        <motion.div
          className="max-w-4xl text-center w-full"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.3 }}
        >