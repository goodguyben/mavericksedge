import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
            Our Partners
          </h2>
          <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
            Trusted and verified by industry-leading platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
        >
          <a
            href="https://www.designrush.com/agency/website-design-development/ca/edmonton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 duration-300"
          >
            <img
              src="https://mavericksedge.ca/videos/designrush-verified-badge.png"
              alt="Mavericks Edge's rating on DesignRush, the industry-leading B2B Marketplace connecting brands with agencies"
              className="h-24 md:h-32 w-auto"
              loading="lazy"
            />
          </a>
          
          <a
            href="https://www.manus.im/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 duration-300"
          >
            <div className="bg-white rounded-xl px-8 py-4 md:px-10 md:py-5">
              <img
                src="https://mavericksedge.ca/videos/manus-ai-logo.png"
                alt="Manus AI - The World's First Universal AI Agent"
                className="h-20 md:h-24 w-auto"
                loading="lazy"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

