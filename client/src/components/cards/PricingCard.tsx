import { Check } from "lucide-react";
import { Button } from "@/components/ui/custom-button";

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
      {/* Most popular label removed */}
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
      <Button
        href="/contact"
        variant="primary"
        className="inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 bg-maverick-orange hover:bg-opacity-90 text-white"
      >
        Get Started
      </Button>
    </div>
  );
}