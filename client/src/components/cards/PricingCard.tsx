import { Link } from "wouter";
import { Check } from "lucide-react";

interface PricingCardProps {
  plan: {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    priceRange?: string;
    currency: string;
    oneTime: boolean;
    popular: boolean;
    features: string[];
  };
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`pricing-card bg-[#1E1E1E] rounded-xl p-8 border ${plan.popular ? 'border-maverick-orange border-opacity-50' : 'border-gray-700'} flex flex-col relative`}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-maverick-orange text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <h4 className="text-2xl font-semibold mb-2 font-heading">{plan.title}</h4>
      <p className="text-[#AAAAAA] mb-6">{plan.subtitle}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold font-heading">{plan.price}</span>
        <span className="text-[#AAAAAA] ml-2">{plan.priceRange || ""} {plan.currency}</span>
      </div>
      <ul className="mb-8 space-y-3 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="text-center bg-maverick-orange hover:bg-opacity-80 text-white px-6 py-3 rounded-full font-medium transition duration-300"
      >
        Get started
      </Link>
    </div>
  );
}
