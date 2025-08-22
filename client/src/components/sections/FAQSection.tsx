// Adding micro-animations to FAQ items and chevron icons for enhanced user experience.
import { motion } from "framer-motion";
import { ChevronDown, CheckCircle } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does it cost to build a professional website for my Edmonton business?",
    answer: "Our website pricing starts at $850 for the EdgeStart package, which includes up to 6 core pages, mobile-responsive design, basic SEO, and essential features. The EdgeGrow package at $1,850 covers up to 20 custom-designed pages with advanced functionality. For complex e-commerce or custom applications, our EdgeLead package starts at $3,750+. We also offer the EdgeBoost package starting at $300 for targeted improvements to existing sites. All packages include Canadian hosting, SSL security, and local Edmonton SEO optimization."
  },
  {
    question: "How long does it take to design and build a website?",
    answer: "Timelines vary by project scope. EdgeStart packages typically take 2-3 weeks, EdgeGrow projects 4-6 weeks, and EdgeLead custom solutions 8-12 weeks. We provide detailed timelines during our discovery phase and stick to agreed-upon deadlines. For urgent projects, we can expedite delivery, though this may affect pricing. We also offer phased launches where you can go live with core functionality first, then add advanced features incrementally."
  },
  {
    question: "Do you offer website redesign services?",
    answer: "Yes, we specialize in website redesigns that improve user experience, search rankings, and conversion rates. Our EdgeBoost package starts at $300 and includes performance audits, design refreshes, content improvements, and SEO optimization. We can work with your existing content and branding or create a completely fresh approach. Many of our Edmonton clients choose redesigns to modernize their online presence without the cost of a full rebuild."
  },
  {
    question: "Can you integrate my website with third-party tools like CRMs or payment gateways?",
    answer: "Absolutely. We integrate websites with popular most business tools including HubSpot, Salesforce, Mailchimp, QuickBooks, and payment gateways like Stripe, Square, and PayPal. Our EdgeGrow and EdgeLead packages include API integrations and third-party tool connections. We also handle custom integrations for specialized business software used in various industries. All integrations are tested thoroughly and include training on how to use them effectively."
  },
  {
    question: "How do you use AI to streamline the design process to cut down on development time and costs?",
    answer: "We leverage AI-powered development tools like Replit and Cursor to accelerate design iterations, generate initial wireframes, and automate repetitive coding tasks. These AI-enhanced platforms help us create multiple design concepts faster, reduce the time spent on initial mockups, and streamline the development workflow. This allows us to focus on creative problem-solving and custom functionality rather than basic setup work. However, we maintain full creative control and human oversight to ensure your website reflects your business's unique character and meets your specific market needs."
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO results typically appear within 3-6 months for most Edmonton businesses. Local SEO can show faster results, often within 4-8 weeks for Google My Business optimization and local citations. Technical SEO improvements may show immediate benefits in site speed and user experience. We provide monthly reports tracking progress and can adjust strategies based on early performance data. For competitive Edmonton keywords, we set realistic expectations of 6-12 months for first-page rankings."
  },
  {
    question: "Can Google Ads and PPC campaigns really increase my website leads?",
    answer: "Yes, when properly managed, PPC campaigns consistently deliver qualified leads for Edmonton businesses. Our clients typically see 200-400% increases in website traffic and 150-300% improvements in lead generation. We focus on local Edmonton keywords and geo-targeting to ensure your ads reach customers in your service area. Our EdgeReach Core package includes Meta and Google ad retargeting setup, and we provide transparent reporting on cost-per-lead and conversion rates."
  },
  {
    question: "How do you track and report ROI from online marketing efforts?",
    answer: "We implement comprehensive tracking including Google Analytics 4, conversion goals, and custom event tracking. Monthly reports show traffic sources, conversion rates, lead quality, and revenue attribution. For local businesses, we track Google My Business insights, local search performance, and phone call tracking. Our EdgeEngage Content & Community plan includes integrated monthly performance reports with actionable insights. We also help you establish baseline metrics during onboarding to measure improvement over time."
  },
  {
    question: "Can you build AI chatbots to improve customer service?",
    answer: "Yes, we develop custom AI chatbots using platforms like OpenAI, Google Gemini, and Anthropic Claude. Our chatbots handle customer inquiries 24/7, qualify leads, and provide instant responses to common questions. We integrate them with your existing CRM and website to maintain conversation continuity. Pricing starts at $1,200 for basic chatbot implementation, with more advanced solutions including natural language processing and custom training data. Many Edmonton businesses see 60-80% reductions in response times and improved customer satisfaction scores."
  },
  {
    question: "Do you develop custom AI applications for unique business needs?",
    answer: "Absolutely. We build custom AI solutions for specific business challenges. Examples include AI-powered inventory management systems, automated customer segmentation tools, and predictive analytics dashboards. Our custom AI development starts at $3,500 and includes integration with your existing software. We focus on practical applications that deliver immediate business value rather than complex research projects. Each solution is tailored to your industry, workflow, and specific pain points."
  },
  {
    question: "How does your 100% money-back guarantee work for website and AI integration projects?",
    answer: "We offer a satisfaction guarantee on all our services. If you're not completely satisfied with the final deliverable within 30 days of project completion, we'll revise the work at no additional cost. If we still can't meet your expectations after reasonable revision attempts, we provide a full refund. This guarantee covers the quality of our work, adherence to project specifications, and meeting agreed-upon timelines. We've never had to issue a refund because we focus on clear communication and exceeding expectations from the start."
  },

];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-5 md:px-10 bg-[#121212]">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
            Get answers to common questions about our web design, AI integration, and digital marketing services for Edmonton businesses.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-6 text-left bg-[#1A1A1A] hover:bg-[#202020] transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <div className={`transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className="h-6 w-6 text-maverick-orange" />
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-[#0F0F0F] border-t border-gray-800"
                >
                  <div className="p-6">
                    <p className="text-[#CCCCCC] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-[#AAAAAA] mb-6">
            Still have questions? We're here to help Edmonton businesses succeed online.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-[#888888]">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-maverick-orange" />
              <span>Local Edmonton Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-maverick-orange" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-maverick-orange" />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}