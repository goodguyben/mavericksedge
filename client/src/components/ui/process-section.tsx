"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Lightbulb, 
  PenTool, 
  Palette, 
  Code, 
  Rocket,
  Users,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Grid3X3,
  Layers
} from 'lucide-react'

interface ProcessPhase {
  id: string
  title: string
  studioAction: string
  clientAction: string
  icon: React.ReactNode
  description: string
  deliverable: string
  duration: string
}

interface BlueprintElementProps {
  phase: ProcessPhase
  isActive: boolean
  onHover: (id: string | null) => void
  index: number
}

const BlueprintElement: React.FC<BlueprintElementProps> = ({ phase, isActive, onHover, index }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="relative mb-16 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => onHover(phase.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="text-maverick-orange">
          <defs>
            <pattern id={`grid-${phase.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${phase.id})`} />
        </svg>
      </div>

      {/* Main Process Flow */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Studio Side (Left) */}
        <motion.div
          className="relative"
          animate={isActive ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6 bg-[#1E1E1E]/80 backdrop-blur-sm border-gray-700/50 hover:border-maverick-orange/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <motion.div
                className="p-3 rounded-lg bg-maverick-orange/10 text-maverick-orange"
                animate={isActive ? { 
                  boxShadow: "0 0 20px rgba(255, 115, 0, 0.3)",
                  scale: 1.1 
                } : { 
                  boxShadow: "0 0 0px rgba(255, 115, 0, 0)",
                  scale: 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {phase.icon}
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-[#AAAAAA] mb-3">{phase.studioAction}</p>
                <Badge variant="outline" className="text-xs border-maverick-orange/30 text-maverick-orange">
                  Mavericks Edge
                </Badge>
              </div>
            </div>
          </Card>

          {/* Blueprint Sketch Animation */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <motion.div
                  className="w-full h-full border-2 border-maverick-orange/50 rounded"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    borderColor: ["rgba(255, 115, 0, 0.5)", "rgba(255, 115, 0, 0.8)", "rgba(255, 115, 0, 0.5)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Center Collaboration Point */}
        <div className="flex flex-col items-center justify-center relative">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-maverick-orange to-orange-600 flex items-center justify-center mb-4"
            animate={isActive ? { 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            } : { scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </motion.div>
          
          <motion.div
            className="text-center"
            animate={isActive ? { y: [-2, 2, -2] } : { y: 0 }}
            transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
          >
            <p className="text-sm font-medium text-white mb-1">Co-Creation</p>
          </motion.div>

          {/* Connecting Lines */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-maverick-orange/20 via-orange-500/40 to-maverick-orange/20" />
        </div>

        {/* Client Side (Right) */}
        <motion.div
          className="relative"
          animate={isActive ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6 bg-[#1E1E1E]/80 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <motion.div
                className="p-3 rounded-lg bg-orange-500/10 text-orange-500"
                animate={isActive ? { 
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                  scale: 1.1 
                } : { 
                  boxShadow: "0 0 0px rgba(249, 115, 22, 0)",
                  scale: 1 
                }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-5 h-5" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-2">Client Engagement</h3>
                <p className="text-sm text-[#AAAAAA] mb-3">{phase.clientAction}</p>
                <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-500">
                  Your Input
                </Badge>
              </div>
            </div>
          </Card>

          {/* Handwritten Annotation */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute -bottom-4 left-4 text-xs text-[#AAAAAA]"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <svg width="100" height="20" className="absolute -top-2 -left-2">
                  <motion.path
                    d="M5,15 Q25,5 45,15 T85,15"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                </svg>
                <span className="relative z-10 bg-[#121212] px-2">{phase.deliverable}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Phase Description */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="mt-8 p-6 bg-[#2A2A2A]/30 rounded-lg border border-gray-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-maverick-orange mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-white leading-relaxed">{phase.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#AAAAAA]" />
                  <span className="text-xs text-[#AAAAAA]">Deliverable: {phase.deliverable}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ProcessSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" })

  const phases: ProcessPhase[] = [
    {
      id: "strategy",
      title: "Strategy & Discovery",
      studioAction: "We dive deep into your vision, analyzing market positioning and technical requirements",
      clientAction: "Share your goals, challenges, and dreams with us through collaborative workshops",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "This is where magic begins. We don't just listen—we absorb, question, and explore every angle of your vision together. Through interactive sessions, we map out not just what you want, but what you need.",
      deliverable: "Strategic Blueprint & Project Roadmap",
      duration: "1-2 weeks"
    },
    {
      id: "wireframe",
      title: "Architecture & Wireframing",
      studioAction: "Crafting the structural foundation with user experience at the forefront",
      clientAction: "Review wireframes, test user flows, and refine the experience together",
      icon: <Grid3X3 className="w-5 h-5" />,
      description: "Like architects sketching blueprints, we build the skeleton of your digital experience. Every click, every scroll, every interaction is intentionally designed with your users in mind.",
      deliverable: "Interactive Wireframes & User Journey Maps",
      duration: "2-3 weeks"
    },
    {
      id: "design",
      title: "Visual Design & Branding",
      studioAction: "Bringing your brand to life through thoughtful design systems and visual storytelling",
      clientAction: "Collaborate on design decisions, provide feedback, and shape the visual narrative",
      icon: <Palette className="w-5 h-5" />,
      description: "This is where your brand finds its voice visually. We don't just make things pretty—we create design systems that tell your story and connect with your audience on an emotional level.",
      deliverable: "Design System & High-Fidelity Mockups",
      duration: "3-4 weeks"
    },
    {
      id: "development",
      title: "Development & Integration",
      studioAction: "Building robust, scalable solutions with clean code and optimal performance",
      clientAction: "Test features, provide feedback, and watch your vision come to life in real-time",
      icon: <Code className="w-5 h-5" />,
      description: "Code becomes craft. We build with precision, ensuring every line serves a purpose. You're involved throughout, testing features as they're built and seeing your project evolve daily.",
      deliverable: "Functional Platform & Testing Environment",
      duration: "4-8 weeks"
    },
    {
      id: "launch",
      title: "Launch & Optimization",
      studioAction: "Deploying your project with comprehensive testing and performance optimization",
      clientAction: "Celebrate the launch and plan for future growth and iterations",
      icon: <Rocket className="w-5 h-5" />,
      description: "Launch day isn't the end—it's the beginning. We ensure everything runs smoothly and set you up for continued success with analytics, monitoring, and growth strategies.",
      deliverable: "Live Platform & Growth Strategy",
      duration: "1-2 weeks"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-5 md:px-10 bg-gradient-to-b from-[#121212] to-[#1A1A1A] relative overflow-hidden"
    >
      {/* Background Blueprint Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" className="text-maverick-orange">
          <defs>
            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maverick-orange/10 text-maverick-orange text-sm font-medium mb-6"
            animate={{ 
              boxShadow: ["0 0 0px rgba(255, 115, 0, 0)", "0 0 20px rgba(255, 115, 0, 0.1)", "0 0 0px rgba(255, 115, 0, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <PenTool className="w-4 h-4" />
            Our Co-Creation Process
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Building Together,{" "}
            <span className="bg-gradient-to-r from-maverick-orange to-orange-600 bg-clip-text text-transparent">
              Step by Step
            </span>
          </h2>
          
          <p className="text-lg text-[#AAAAAA] max-w-3xl mx-auto leading-relaxed">
            This isn't a conveyor belt process—it's an unfolding collaboration where every idea 
            is shaped together in real time. Every phase is a shared moment of co-creation.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {phases.map((phase, index) => (
            <BlueprintElement
              key={phase.id}
              phase={phase}
              isActive={activePhase === phase.id}
              onHover={setActivePhase}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-maverick-orange/5 to-orange-500/5 border-gray-700/50">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-maverick-orange" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to Start Co-Creating?
                </h3>
                <p className="text-[#AAAAAA]">
                  Let's begin this journey together. Every great project starts with a conversation.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection