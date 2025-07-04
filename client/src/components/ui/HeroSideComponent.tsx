import { motion } from "framer-motion";
import { Monitor, Search, Bot } from "lucide-react";
import CardSwap, { Card } from './CardSwap';

export default function HeroSideComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="relative h-full min-h-[400px] lg:min-h-[500px]"
    >
      <CardSwap
        cardDistance={30}
        verticalDistance={40}
        delay={4000}
        pauseOnHover={true}
        className="w-full h-full"
      >
        <Card>
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-lg rounded-2xl border border-maverick-orange/20 p-6 lg:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-maverick-orange/20 to-maverick-orange/10 rounded-xl">
                <Monitor className="h-6 w-6 lg:h-7 lg:w-7 text-maverick-orange" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-maverick-cream">
                  Web Design
                </h3>
                <p className="text-maverick-cream/70 text-sm">
                  Custom Solutions
                </p>
              </div>
            </div>
            <p className="text-maverick-cream/80 text-sm lg:text-base leading-relaxed mb-4">
              Beautiful, responsive websites that convert visitors into customers. Built with modern technologies for optimal performance.
            </p>
            <div className="space-y-2">
              {["Responsive Design", "Fast Loading", "SEO Optimized"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-maverick-orange rounded-full" />
                  <span className="text-maverick-cream/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-lg rounded-2xl border border-maverick-orange/20 p-6 lg:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-maverick-orange/20 to-maverick-orange/10 rounded-xl">
                <Search className="h-6 w-6 lg:h-7 lg:w-7 text-maverick-orange" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-maverick-cream">
                  Digital Marketing
                </h3>
                <p className="text-maverick-cream/70 text-sm">
                  Growth Focused
                </p>
              </div>
            </div>
            <p className="text-maverick-cream/80 text-sm lg:text-base leading-relaxed mb-4">
              Comprehensive digital marketing strategies to boost your online presence and drive qualified leads to your business.
            </p>
            <div className="space-y-2">
              {["SEO Optimization", "Social Media", "Content Strategy"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-maverick-orange rounded-full" />
                  <span className="text-maverick-cream/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-lg rounded-2xl border border-maverick-orange/20 p-6 lg:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-maverick-orange/20 to-maverick-orange/10 rounded-xl">
                <Bot className="h-6 w-6 lg:h-7 lg:w-7 text-maverick-orange" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-maverick-cream">
                  AI Integration
                </h3>
                <p className="text-maverick-cream/70 text-sm">
                  Future Ready
                </p>
              </div>
            </div>
            <p className="text-maverick-cream/80 text-sm lg:text-base leading-relaxed mb-4">
              Smart AI solutions to automate processes, enhance user experience, and give your business a competitive edge.
            </p>
            <div className="space-y-2">
              {["Chatbots", "Automation", "Analytics"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-maverick-orange rounded-full" />
                  <span className="text-maverick-cream/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </CardSwap>
    </motion.div>
  );
}