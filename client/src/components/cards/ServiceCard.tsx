import { ReactNode } from "react";
import { Link } from "wouter";
import { Check } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
    features: string[];
    linkText: string;
    linkHref: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card bg-white rounded-xl p-6 border border-gray-200 h-full flex flex-col">
      <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg inline-block mb-6">
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 font-heading text-maverick-dark-brown">{service.title}</h3>
      <p className="text-maverick-dark-brown/80 mb-6">{service.description}</p>
      <ul className="mb-6 space-y-2 flex-grow">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-maverick-orange mt-0.5 mr-2" />
            <span className="text-maverick-dark-brown">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={service.linkHref} className="hover-link text-maverick-orange font-medium">
        {service.linkText} →
      </Link>
    </div>
  );
}