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
  };
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`pricing-card bg-[#1A1A1A] rounded-xl overflow-hidden border ${
        plan.popular ? 'border-maverick-orange' : 
        plan.id.includes('launch') || plan.id.includes('foundation') || plan.id.includes('readiness') ? 'border-maverick-yellow' : 
        plan.id.includes('business') || plan.id.includes('digital') || plan.id.includes('monitoring') ? 'border-maverick-amber' : 
        plan.id.includes('professional') || plan.id.includes('content') || plan.id.includes('support') ? 'border-maverick-light-orange' : 
        plan.color || 'border-gray-800'
      } flex flex-col h-full`}
      whileHover={{ 
        y: -8, 
        boxShadow: plan.popular ? '0 10px 25px -5px rgba(255, 86, 48, 0.25)' : 
                  plan.id.includes('launch') || plan.id.includes('foundation') || plan.id.includes('readiness') ? '0 10px 25px -5px rgba(255, 215, 75, 0.2)' : 
                  plan.id.includes('business') || plan.id.includes('digital') || plan.id.includes('monitoring') ? '0 10px 25px -5px rgba(255, 196, 61, 0.2)' :
                  plan.id.includes('professional') || plan.id.includes('content') || plan.id.includes('support') ? '0 10px 25px -5px rgba(255, 138, 80, 0.2)' :
                  '0 10px 25px -5px rgba(255, 86, 48, 0.25)',
        transition: { duration: 0.3 } 
      }}
    >
      <div className="p-6 border-b border-gray-800">
        {plan.icon && (
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              plan.popular ? 'bg-maverick-orange' : 'bg-maverick-orange bg-opacity-10'
            }`}>
              {plan.icon}
            </div>
            <h3 className="text-2xl font-bold ml-4">{plan.title}</h3>
          </div>
        )}

        {!plan.icon && <h3 className="text-2xl font-bold mb-2 font-heading">{plan.title}</h3>}

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
            >
              <Check className="h-5 w-5 text-maverick-orange shrink-0 mt-0.5 mr-3" />
              <span className="text-[#DDDDDD]">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <Link href="/contact">
          <a className="inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-maverick-orange text-maverick-orange hover:bg-maverick-orange hover:bg-opacity-10">
            Get Started
          </a>
        </Link>
      </div>
    </motion.div>
  );
}