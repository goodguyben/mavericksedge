import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export type StoryItem = {
  id: string;
  eyebrow?: string;
  title: string;
  body: string;
  mediaUrl?: string;
  mediaAlt?: string;
};

interface StoryScrollerProps {
  items: StoryItem[];
  className?: string;
}

export default function StoryScroller({ items, className }: StoryScrollerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll<HTMLElement>("[data-story-step]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -50% 0px", threshold: 0.1 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-2 sticky top-28">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#121212] border border-gray-800 rounded-2xl p-6"
          >
            {items[activeIndex]?.eyebrow && (
              <div className="text-maverick-orange mb-2 text-sm tracking-wide">
                {items[activeIndex].eyebrow}
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-3">{items[activeIndex]?.title}</h3>
            <p className="text-[#CCCCCC] leading-relaxed">{items[activeIndex]?.body}</p>
          </motion.div>
        </div>

        <div className="lg:col-span-3 space-y-10">
          {items.map((item, index) => (
            <motion.section
              key={item.id}
              data-story-step
              data-index={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.4 }}
              className={`relative border border-gray-800 rounded-2xl overflow-hidden ${
                index === activeIndex ? "ring-1 ring-maverick-orange/40" : ""
              }`}
            >
              {item.mediaUrl ? (
                <img
                  src={item.mediaUrl}
                  alt={item.mediaAlt || item.title}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="p-8 bg-[#0F0F0F]">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-[#BBBBBB]">{item.body}</p>
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}


