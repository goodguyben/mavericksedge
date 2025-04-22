import { motion } from "framer-motion";
import ProcessCard from "@/components/cards/ProcessCard";
import { Search, Settings, Paintbrush, Code, Shield } from "lucide-react";

const processSteps = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery",
    description: "We start by understanding your business goals, audience, and challenges to develop a comprehensive strategy.",
    icon: <Search className="h-6 w-6 text-[#8C54FF]" />
  },
  {
    id: "strategy",
    step: 2,
    title: "Strategy",
    description: "Based on our findings, we create a tailored strategy and roadmap to achieve your specific objectives.",
    icon: <Settings className="h-6 w-6 text-[#8C54FF]" />
  },
  {
    id: "design",
    step: 3,
    title: "Design",
    description: "Our creative team designs visually appealing and user-friendly solutions that align with your brand identity.",
    icon: <Paintbrush className="h-6 w-6 text-[#8C54FF]" />
  },
  {
    id: "development",
    step: 4,
    title: "Development",
    description: "We build robust, scalable, and secure digital solutions using the latest technologies and best practices.",
    icon: <Code className="h-6 w-6 text-[#8C54FF]" />
  },
  {
    id: "launch",
    step: 5,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.",
    icon: <Shield className="h-6 w-6 text-[#8C54FF]" />
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
            A collaborative approach to delivering exceptional results for your business
          </p>
        </motion.div>

        <div className="horizontal-scroll-container py-8 mask-image md:px-10">
          <div className="inline-flex space-x-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProcessCard step={step} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
