import { ReactNode } from "react";

interface ProcessCardProps {
  step: {
    id: string;
    step: number;
    title: string;
    description: string;
    icon: ReactNode;
  };
}

export default function ProcessCard({ step }: ProcessCardProps) {
  const stepFormatted = step.step.toString().padStart(2, '0');
  
  return (
    <div className="bg-[#121212] p-8 rounded-xl min-w-[280px] md:min-w-[350px] flex-shrink-0 border border-gray-800">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg">
          {step.icon}
        </div>
        <span className="text-5xl font-bold text-maverick-orange opacity-30">{stepFormatted}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 font-heading">{step.title}</h3>
      <p className="text-[#AAAAAA]">{step.description}</p>
    </div>
  );
}
