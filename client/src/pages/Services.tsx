import { motion } from "framer-motion";
import { Monitor, PenTool, Lightbulb, Database, Zap, PieChart, Cog, ArrowRight, Play } from "lucide-react";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/custom-button";
import { Link } from "wouter";

const solutions = [
  {
    id: "web",
    title: "Web & Digital Solutions",
    description: "We create responsive, high-performance websites and web applications tailored to your specific business needs.",
    icon: <Monitor className="w-12 h-12 text-maverick-orange" />,
    details: [
      "Custom front-end development",
      "Responsive design",
      "E-commerce solutions",
      "Progressive web apps"
    ],
    link: "/solutions/web",
    bgImage: "bg-gradient-to-br from-maverick-dark-slate to-maverick-slate"
  },
  {
    id: "creative-design",
    title: "Creative Design",
    description: "Our design team delivers stunning visuals that enhance your brand and create memorable user experiences.",
    icon: <PenTool className="w-12 h-12 text-maverick-orange" />,
    details: [
      "UI/UX design",
      "Brand identity",
      "Motion graphics",
      "Illustration"
    ],
    link: "/solutions/design",
    bgImage: "bg-gradient-to-br from-maverick-dark-brown to-maverick-slate"
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "We help you develop comprehensive digital strategies that drive growth and enhance your online presence.",
    icon: <Lightbulb className="w-12 h-12 text-maverick-orange" />,
    details: [
      "Market research",
      "Competitive analysis",
      "SEO optimization",
      "Content strategy"
    ],
    link: "/solutions/strategy",
    bgImage: "bg-gradient-to-br from-maverick-slate to-maverick-dark-slate"
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Leverage the power of artificial intelligence to automate processes and gain valuable insights from your data.",
    icon: <Database className="w-12 h-12 text-maverick-orange" />,
    details: [
      "AI readiness assessment",
      "Custom API integrations",
      "Workflow automation",
      "Data analysis & insights"
    ],
    link: "/solutions/ai",
    bgImage: "bg-gradient-to-br from-maverick-slate to-maverick-dark-brown"
  }
];

const featuredSolutions = [
  {
    id: "automation",
    title: "Business Process Automation",
    description: "Streamline operations and reduce manual tasks with intelligent automation solutions.",
    icon: <Cog className="w-10 h-10 text-maverick-orange" />,
    imagePlaceholder: "Process automation visualization",
    link: "/solutions/automation"
  },
  {
    id: "growth",
    title: "Growth Marketing",
    description: "Data-driven marketing strategies that drive customer acquisition and revenue growth.",
    icon: <PieChart className="w-10 h-10 text-maverick-orange" />,
    imagePlaceholder: "Marketing funnel visualization",
    link: "/solutions/growth-marketing"
  },
  {
    id: "innovation",
    title: "Digital Innovation",
    description: "Cutting-edge solutions that keep your business ahead of the competition.",
    icon: <Zap className="w-10 h-10 text-maverick-orange" />,
    imagePlaceholder: "Innovation concept visualization",
    link: "/solutions/innovation"
  }
];

export default function Solutions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-28 pb-24 px-5 md:px-10 bg-[#121212] relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-maverick-orange opacity-10 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-maverick-amber opacity-10 blur-3xl bottom-40 right-60"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Digital <span className="text-maverick-orange">Solutions</span> for Modern Business
              </motion.h1>
              
              <motion.p 
                className="text-xl text-maverick-cream/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Comprehensive digital solutions designed to help your business thrive in the digital landscape.
                From web development to marketing and AI integration, we've got you covered.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button variant="primary" href="#solutions">
                  Explore Solutions
                </Button>
                <Button variant="outline" href="/contact">
                  Schedule a Consultation
                </Button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              {/* Video placeholder */}
              <motion.div 
                className="rounded-xl overflow-hidden bg-maverick-slate/20 border border-maverick-slate/30 aspect-video relative group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-maverick-orange/20 flex items-center justify-center">
                    <Play className="w-8 h-8 text-maverick-orange" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maverick-charcoal to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-maverick-cream/70">Solutions overview video</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Solutions Grid */}
      <section id="solutions" className="py-24 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Core Solutions</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              Transformative digital solutions designed to solve your business challenges 
              and accelerate your growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden"
              >
                <div className={`p-8 ${solution.bgImage} h-full flex flex-col`}>
                  <div className="flex items-start mb-6">
                    <div className="p-4 bg-maverick-orange bg-opacity-10 rounded-lg mr-4">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                      <p className="text-[#DDDDDD]">{solution.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {solution.details.map((detail, idx) => (
                      <li key={idx} className="text-[#DDDDDD] flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-maverick-orange mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Link 
                      href={solution.link}
                      className="inline-flex items-center text-maverick-orange hover:text-maverick-light-orange transition-colors group"
                    >
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Case Studies */}
      <section className="py-24 px-5 md:px-10 bg-[#121212]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Featured Case Studies</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              See how our solutions have helped real businesses achieve their goals
            </p>
          </motion.div>
          
          {/* Case Study Carousel Placeholder */}
          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto space-x-6 pb-8 no-scrollbar">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item} 
                  className="min-w-[320px] md:min-w-[400px] bg-maverick-slate/20 rounded-xl p-6 border border-maverick-slate/30 flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                >
                  <div className="w-full h-[200px] bg-maverick-slate/30 rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-maverick-cream/50">Case study image {item}</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Client Success Story {item}</h3>
                  <p className="text-maverick-cream/70 mb-4">
                    Brief description of the challenge, solution, and results achieved for this client.
                  </p>
                  <Link 
                    href={`/case-studies/${item}`}
                    className="inline-flex items-center text-maverick-orange hover:text-maverick-light-orange transition-colors group"
                  >
                    <span className="mr-2">Read case study</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Solutions */}
      <section className="py-24 px-5 md:px-10 bg-[#1A1A1A]">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Featured Solutions</h2>
            <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
              Specialized services designed to address specific business challenges
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-maverick-dark-slate rounded-xl overflow-hidden"
              >
                <div className="h-[200px] bg-maverick-slate/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-maverick-cream/50">{solution.imagePlaceholder}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-maverick-orange bg-opacity-10 rounded-lg mr-3">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>
                  
                  <p className="text-maverick-cream/70 mb-6">
                    {solution.description}
                  </p>
                  
                  <Link 
                    href={solution.link}
                    className="inline-flex items-center text-maverick-orange hover:text-maverick-light-orange transition-colors group"
                  >
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ProcessSection />
      <ContactSection />
    </motion.div>
  );
}
