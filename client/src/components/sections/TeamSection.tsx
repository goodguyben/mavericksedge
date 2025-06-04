import { motion } from "framer-motion";
import TeamCard from "@/components/cards/TeamCard";

interface TeamSectionProps {
  fullPage?: boolean;
}

const teamMembers = [
  {
    id: "alex",
    name: "Alex Morgan",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Alex Morgan portrait"
  },
  {
    id: "michael",
    name: "Michael Chen",
    position: "Lead Web Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Michael Chen portrait"
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Sarah Johnson portrait"
  },
  {
    id: "david",
    name: "David Kim",
    position: "AI Integration Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "David Kim portrait"
  }
];

export default function TeamSection({ fullPage = false }: TeamSectionProps) {
  return (
    <section id="about" className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
      <div className="container mx-auto">
        {!fullPage && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Meet the experts behind Mavericks Edge
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 max-w-4xl mx-auto bg-[#121212] p-8 rounded-xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">About Mavericks Edge</h3>
          <p className="text-[#AAAAAA] mb-4">
            Mavericks Edge is a digital solutions agency specializing in web development, marketing, and AI integration services for SMBs and nonprofits. Our mission is to provide accessible, high-quality digital services that empower businesses to thrive in the digital landscape.
          </p>
          <p className="text-[#AAAAAA]">
            Founded on the principles of innovation, transparency, and results-driven solutions, we work closely with our clients to understand their unique challenges and develop customized strategies that drive real business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}