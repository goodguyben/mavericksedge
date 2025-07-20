import { Check } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface PricingCardProps {
  plan: {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    priceRange?: string;
    period?: string;
    currency?: string;
    oneTime: boolean;
    popular: boolean;
    features: string[];
    icon?: React.ReactNode;
    focusStatement?: string;
    color?: string;
    extras?: string;
  };
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div 
      className={`pricing-card bg-[#1A1A1A] rounded-xl overflow-hidden border-2 ${
        plan.popular ? 'border-maverick-orange' : 
        plan.id.includes('launch') ? 'border-emerald-500' : 
        plan.id.includes('business') ? 'border-blue-500' : 
        plan.id.includes('professional') ? 'border-purple-500' : 
        plan.id.includes('foundation') ? 'border-pink-500' : 
        plan.id.includes('digital') ? 'border-cyan-500' : 
        plan.id.includes('content') ? 'border-amber-500' : 
        plan.id.includes('readiness') ? 'border-teal-500' : 
        plan.id.includes('monitoring') ? 'border-indigo-500' : 
        plan.id.includes('support') ? 'border-rose-500' : 
        plan.id.includes('edgeautomate') ? 'border-blue-400' : 
        plan.id.includes('custom-integration') ? 'border-violet-500' : 
        plan.color || 'border-gray-800'
      } flex flex-col h-full`}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        boxShadow: plan.popular ? '0 25px 50px rgba(255, 86, 48, 0.3)' : 
                  plan.id.includes('launch') ? '0 25px 50px rgba(16, 185, 129, 0.3)' : 
                  plan.id.includes('business') ? '0 25px 50px rgba(59, 130, 246, 0.3)' : 
                  plan.id.includes('professional') ? '0 25px 50px rgba(168, 85, 247, 0.3)' : 
                  plan.id.includes('foundation') ? '0 25px 50px rgba(236, 72, 153, 0.3)' : 
                  plan.id.includes('digital') ? '0 25px 50px rgba(34, 211, 238, 0.3)' : 
                  plan.id.includes('content') ? '0 25px 50px rgba(245, 158, 11, 0.3)' : 
                  plan.id.includes('readiness') ? '0 25px 50px rgba(20, 184, 166, 0.3)' : 
                  plan.id.includes('monitoring') ? '0 25px 50px rgba(99, 102, 241, 0.3)' : 
                  plan.id.includes('support') ? '0 25px 50px rgba(244, 63, 94, 0.3)' : 
                  plan.id.includes('edgeautomate') ? '0 25px 50px rgba(96, 165, 250, 0.3)' : 
                  plan.id.includes('custom-integration') ? '0 25px 50px rgba(139, 92, 246, 0.3)' : 
                  '0 25px 50px rgba(255, 86, 48, 0.3)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-6 border-b border-gray-800">
        {plan.icon && (
          <motion.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              plan.popular ? 'bg-maverick-orange' : 'bg-maverick-orange bg-opacity-10'
            }`}>
              {plan.icon}
            </div>
            <h3 className="text-2xl font-bold ml-4">{plan.title}</h3>
          </motion.div>
        )}

        {!plan.icon && (
          <motion.h3 
            className="text-2xl font-bold mb-2 font-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {plan.title}
          </motion.h3>
        )}

        <p className="text-[#AAAAAA] mb-4">{plan.subtitle || plan.focusStatement}</p>

        <div className="mb-4">
          <span className="text-3xl font-bold">{plan.price}</span>
          {plan.priceRange && <span className="text-2xl font-bold">{plan.priceRange}</span>}
          {plan.period && <span className="text-[#AAAAAA] ml-2">{plan.period}</span>}
          {plan.oneTime && !plan.period && <span className="text-[#AAAAAA] ml-2">one-time</span>}
          {plan.currency && <span className="text-[#AAAAAA] ml-2">{plan.currency}</span>}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <ul className="mb-6 space-y-3 flex-grow">
          {plan.features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (index * 0.05), duration: 0.3 }}
              className="flex items-start"
              whileHover={{ x: 5 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Check className="h-5 w-5 text-maverick-orange shrink-0 mt-0.5 mr-3" />
              </motion.div>
              <span className="text-[#DDDDDD]">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <Link href="/contact">
          <motion.a 
            className="inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 30px rgba(255, 86, 48, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Started
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
}