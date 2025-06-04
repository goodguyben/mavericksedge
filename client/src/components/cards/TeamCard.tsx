import { motion } from "framer-motion";

interface TeamCardProps {
  member: {
    id: string;
    name: string;
    position: string;
    image: string;
    alt: string;
  };
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div 
      className="team-card text-center"
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        boxShadow: "0 15px 30px rgba(255, 86, 48, 0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-xl overflow-hidden mb-4 relative service-card">
        <motion.img
          src={member.image}
          alt={member.alt}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-[#AAAAAA]">{member.position}</p>
    </motion.div>
  );
}