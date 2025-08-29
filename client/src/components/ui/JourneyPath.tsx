import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type JourneyStep = {
  id: string;
  label: string;
  title: string;
  body: string;
};

interface JourneyPathProps {
  steps: JourneyStep[];
}

export default function JourneyPath({ steps }: JourneyPathProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.35]);

  return (
    <div ref={containerRef} className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="sticky top-28">
            <div className="relative h-full">
              <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-800 rounded"></div>
              <motion.div
                className="absolute left-3 top-0 w-[2px] bg-maverick-orange rounded"
                style={{ height: progressHeight }}
              />
              <motion.div
                className="absolute left-0 right-0 top-0 mx-auto blur-2xl rounded-full"
                style={{ opacity: glowOpacity }}
              >
                <div className="h-16 bg-maverick-orange/30" />
              </motion.div>
              <div className="pl-10">
                <h3 className="text-3xl font-bold mb-3 font-heading">From visit to value</h3>
                <p className="text-[#BBBBBB]">
                  A guided path that removes friction and makes next steps obvious. Built for real people on real devices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-[1.3rem] top-2 w-6 h-6 rounded-full border border-maverick-orange bg-[#0F0F0F] flex items-center justify-center">
                <span className="text-[10px] text-maverick-orange font-semibold">{step.label}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-[#CCCCCC] leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


