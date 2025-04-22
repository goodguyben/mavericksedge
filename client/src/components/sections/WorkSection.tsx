import { motion } from "framer-motion";
import WorkCard from "@/components/cards/WorkCard";
import { Link } from "wouter";

interface WorkSectionProps {
  fullPage?: boolean;
}

const workItems = [
  {
    id: "ecommerce",
    title: "E-commerce Platform Redesign",
    category: "Web Development, UX/UI",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "E-commerce website design"
  },
  {
    id: "nonprofit",
    title: "Nonprofit Digital Transformation",
    category: "AI Integration, Web Development",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Digital transformation project"
  },
  {
    id: "marketing",
    title: "Marketing Campaign Launch",
    category: "Digital Marketing, Creative Services",
    image: "https://images.unsplash.com/photo-1529101091422-b54b8ef3dbb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Marketing campaign visuals"
  },
  {
    id: "ai",
    title: "AI-Powered Customer Service",
    category: "AI Integration, Automation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "AI technology visualization"
  }
];

export default function WorkSection({ fullPage = false }: WorkSectionProps) {
  return (
    <section id="work" className="py-24 px-5 md:px-10 bg-[#121212]">
      <div className="container mx-auto">
        {!fullPage && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-[#AAAAAA] text-xl max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions that have helped businesses achieve their goals
            </p>
          </motion.div>
        )}

        <div className={`grid grid-cols-1 ${fullPage ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WorkCard item={item} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/contact" className="inline-block bg-[#8C54FF] hover:bg-opacity-80 text-white px-8 py-3 rounded-full font-medium transition duration-300">
            Start your project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
