import { motion } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you’ll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We’re passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There’s no ‘one size fits all’ approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don’t always go as planned, and we’re here to make sure you’re never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-10 h-10 text-maverick-orange" />
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-[#141414] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-maverick-orange">Mavericks Edge</span></h2>
          <p className="text-[#BBBBBB] text-xl max-w-2xl mx-auto">
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That’s why our services are flexible, transparent, and built around long-term sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800 h-full hover:border-maverick-orange transition-all duration-300 hover-card relative"
            >
              <div className="mb-5 bg-maverick-orange bg-opacity-10 p-4 rounded-full inline-block">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-[#AAAAAA]">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated elements */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-maverick-orange opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-maverick-amber opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}
```

```jsx
import AnimatedSection from "@/components/AnimatedSection";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you’ll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We’re passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There’s no ‘one size fits all’ approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don’t always go as planned, and we’re here to make sure you’re never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-10 h-10 text-maverick-orange" />
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-[#141414] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection 
          className="text-center mb-16"
          fadeDirection="up"
          threshold={0.2}
          distance={30}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-maverick-orange">Mavericks Edge</span></h2>
          <p className="text-[#BBBBBB] text-xl max-w-2xl mx-auto">
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That’s why our services are flexible, transparent, and built around long-term sustainability.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={reason.id}
              fadeDirection="up"
              threshold={0.1}
              delay={index * 0.1}
              distance={40}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800 h-full hover:border-maverick-orange transition-all duration-300 hover-card relative"
            >
              <div className="mb-5 bg-maverick-orange bg-opacity-10 p-4 rounded-full inline-block">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-[#AAAAAA]">{reason.description}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Animated elements */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-maverick-orange opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-maverick-amber opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}
```

```
import AnimatedSection from "@/components/AnimatedSection";

export default function WhyChooseUsSection() {
  const isMobile = useIsMobile();
  const features = [
    {
      title: "Tailored Solutions",
      description: "We craft custom digital experiences designed specifically for your unique business needs, ensuring your solution works for you, not the other way around.",
      icon: <Target className="w-14 h-14 text-maverick-orange" />,
      bgColor: "bg-maverick-orange/10"
    },
    {
      title: "Result-Focused",
      description: "Our strategies are built around measurable outcomes, focusing on the metrics that matter most to your business growth and success.",
      icon: <BarChart3 className="w-14 h-14 text-maverick-orange" />,
      bgColor: "bg-maverick-orange/10"
    },
    {
      title: "Cost-Effective",
      description: "We deliver enterprise-quality solutions at prices accessible to small and medium businesses, maximizing your ROI without breaking the bank.",
      icon: <Coins className="w-14 h-14 text-maverick-orange" />,
      bgColor: "bg-maverick-orange/10"
    }
  ];

  return (
    <section id="why-choose-us" className="py-28 px-5 md:px-10 bg-gradient-to-b from-[#0D0D0D] to-[#121212] relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <AnimatedSection 
          className="text-center mb-20"
          fadeDirection="up"
          threshold={0.2}
          distance={30}
        >
          <h2>Why Choose Us</h2>
          <p>Here are some reasons</p>
        </AnimatedSection>

        <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-8 md:gap-12`}>
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
              fadeDirection="up"
              threshold={0.1}
              delay={index * 0.1}
              distance={40}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
```

```jsx
import { motion } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you’ll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We’re passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There’s no ‘one size fits all’ approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don’t always go as planned, and we’re here to make sure you’re never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-10 h-10 text-maverick-orange" />
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-[#141414] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection 
          className="text-center mb-16"
          fadeDirection="up"
          threshold={0.2}
          distance={30}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-maverick-orange">Mavericks Edge</span></h2>
          <p className="text-[#BBBBBB] text-xl max-w-2xl mx-auto">
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That’s why our services are flexible, transparent, and built around long-term sustainability.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={reason.id}
              fadeDirection="up"
              threshold={0.1}
              delay={index * 0.1}
              distance={40}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800 h-full hover:border-maverick-orange transition-all duration-300 hover-card relative"
            >
              <div className="mb-5 bg-maverick-orange bg-opacity-10 p-4 rounded-full inline-block">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-[#AAAAAA]">{reason.description}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Animated elements */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-maverick-orange opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-maverick-amber opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}
```

```
import { motion } from "framer-motion";
import { Zap, Heart, FlaskConical, BookOpen, SmileIcon, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: "efficiency",
      title: "Efficiency",
      description: "We help you focus on what matters most by simplifying your workflows and letting AI take care of the rest, so you can save time, reduce costs, and drive growth.",
      icon: <Zap className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "transparency",
      title: "Transparency",
      description: "We believe in building strong relationships through open and honest communication, so you’ll always feel supported and in control at every stage of the process.",
      icon: <Heart className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "innovation",
      title: "Innovation",
      description: "We’re passionate about staying ahead of the curve with the latest tech, so you can count on us to bring you innovative solutions that give you a real edge in a fast-moving world.",
      icon: <FlaskConical className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "research",
      title: "Research",
      description: "We take the time to really understand your market, audience, and competitors. There’s no ‘one size fits all’ approach here. Our research allows us to develop strategies and tailored plans that are aligned with your needs.",
      icon: <BookOpen className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "empathy",
      title: "Empathy",
      description: "We get that things don’t always go as planned, and we’re here to make sure you’re never left in the dark. We take the time to truly understand your needs and limitations, designing solutions that fit within your scope and budget—without the surprise fees.",
      icon: <SmileIcon className="w-10 h-10 text-maverick-orange" />
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to achieve your business goals with trust and shared commitment to your long-term success.",
      icon: <Users className="w-10 h-10 text-maverick-orange" />
    }
  ];

  return (
    <section className="py-24 px-5 md:px-10 bg-[#141414] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection 
          className="text-center mb-16"
          fadeDirection="up"
          threshold={0.2}
          distance={30}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-maverick-orange">Mavericks Edge</span></h2>
          <p className="text-[#BBBBBB] text-xl max-w-2xl mx-auto">
            We partner with passionate people building meaningful work — SMBs, nonprofits, and early-stage teams doing a lot with a little. We get it: every dollar matters. That’s why our services are flexible, transparent, and built around long-term sustainability.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={reason.id}
              fadeDirection="up"
              threshold={0.1}
              delay={index * 0.1}
              distance={40}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800 h-full hover:border-maverick-orange transition-all duration-300 hover-card relative"
            >
              <div className="mb-5 bg-maverick-orange bg-opacity-10 p-4 rounded-full inline-block">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-[#AAAAAA]">{reason.description}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Animated elements */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-maverick-orange opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-maverick-amber opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}
```

The final code applies scroll fade animations to the WhyChooseUsSection component using the AnimatedSection component.