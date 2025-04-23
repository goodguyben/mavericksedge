import { useState } from "react";
import { motion } from "framer-motion";

interface WorkCardProps {
  item: {
    id: string;
    title: string;
    category: string;
    image: string;
    alt: string;
  };
}

export default function WorkCard({ item }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group rounded-xl overflow-hidden cursor-pointer relative service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-maverick-orange via-maverick-orange/50 to-transparent z-10 flex items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-white/80 mt-2">{item.category}</p>
        </div>
      </motion.div>
      <motion.img
        src={item.image}
        alt={item.alt}
        className="w-full h-80 object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
