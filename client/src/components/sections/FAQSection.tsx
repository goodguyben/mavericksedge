
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How long does it take to build a website?",
    answer: "Typical websites take 2-6 weeks depending on complexity. Our Launch Pad sites take 2-3 weeks, while Professional/E-commerce sites take 4-6 weeks."
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer: "Yes, we offer comprehensive Website Care Plans starting at $75/month that include security updates, backups, performance monitoring, and content updates."
  },
  {
    question: "Can you help improve my website's Google ranking?",
    answer: "Absolutely! Our SEO services include keyword research, on-page optimization, technical SEO, and ongoing monitoring to improve your search engine visibility."
  },
  {
    question: "What makes your AI solutions different?",
    answer: "We focus on practical AI implementations that solve real business problems - from intelligent chatbots to workflow automation - rather than complex solutions you don't need."
  },
  {
    question: "Do you work with nonprofits?",
    answer: "Yes! We offer special pricing for qualified nonprofits and understand the unique challenges of mission-driven organizations."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-24 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-maverick-orange bg-opacity-10 mb-4">
              <HelpCircle className="h-5 w-5 text-maverick-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Frequently Asked Questions</h2>
            <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
              Get answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  borderColor: "#ff5630",
                  boxShadow: "0 5px 15px rgba(255, 86, 48, 0.1)"
                }}
              >
                <motion.button
                  whileHover={{ backgroundColor: "rgba(255, 86, 48, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#2A2A2A] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-maverick-orange flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-maverick-orange flex-shrink-0" />
                  )}
                </motion.button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-[#AAAAAA] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}