import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/custom-button";
import { ShinyBorderButton } from "@/components/ui/ShinyBorderButton";
import GradientText from "@/components/ui/GradientText";
import CardSwap, { Card } from "@/components/ui/CardSwap";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate opacity based on scroll position
      const scrollY = window.scrollY;
      const maxFade = 400; // Distance in pixels to complete fade
      const opacity = Math.max(0, 1 - (scrollY / maxFade));
      setHeroOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pro:h-screen flex items-center overflow-hidden bg-red-900">
      {/* TEST: Temporary red background to verify visibility */}
      <div className="absolute inset-0 bg-red-500 z-5" />
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 phone:bg-black/50 mt-[-10px] mb-[-10px]" />
      </div>
      {/* Content Container */}
      <div className="container mx-auto xxs:px-3 px-4 phone:px-6 md:px-8 lg:px-0 lgxl:px-0 mini:px-12 galaxy-tab:px-8 pad:px-12 air:px-12 pro:px-12 tab-large:px-14 xl:px-12 2xl:px-16 z-20 flex justify-start items-center w-full pointer-events-none relative">
        {/* Main Content - Left aligned and responsive */}
        <motion.div
          className="max-w-full lg:max-w-[60%] lg:ml-[2rem] lgxl:max-w-[50%] mini:max-w-[62%] galaxy-tab:max-w-[70%] galaxy-tab:ml-[-2rem] pad:max-w-[63%] air:max-w-[64%] pro:max-w-[65%] tab-large:max-w-[68%] xl:max-w-[55%] xl:ml-[-0.25rem] xl15:ml-[-4rem] 2xl:max-w-[50%] text-left w-full pointer-events-auto relative xxs:pt-2 xxs-plus:pt-0 xs-plus:pt-0 phone:pt-4 md:pt-0 lg:pt-0 xxs:mt-[5px] xxs-plus:mt-[-80px] xs-plus:mt-[-90px] mt-[45px] phone:mt-[55px] md:mt-[-200px] mini:mt-[-260px] mini:ml-[-8px] galaxy-tab:mt-[-340px] pad:mt-[-270px] pad:ml-[-20px] air:mt-[-275px] lg:mt-[84px] pro:mt-[-160px] tab-large:mt-[-100px] xxs:mb-[60px] xxs-plus:mb-[40px] xs-plus:mb-[30px] mb-[84px] xxs:pt-[40px] xxs-plus:pt-[5px] xs-plus:pt-[0px] pt-[20px] phone:pt-[25px] md:pt-0 mini:pt-[-70px] galaxy-tab:pt-[-95px] pad:pt-[-75px] air:pt-[-78px] pro:pt-[-30px] tab-large:pt-[-15px] xxs:pb-[20px] pb-[30px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroOpacity, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Location heading with metallic gradient */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center gap-2 xxs:text-xs xxs-plus:text-sm xs:text-base xs-plus:text-base sm:text-base sm-plus:text-base phone:text-lg md:text-xl lg:text-lg tab:text-xl galaxy-tab:text-lg tab-large:text-xl xl:text-xl 2xl:text-2xl font-heading font-medium xxs:mb-1 xxs-plus:mb-1 xs:mb-2 xs-plus:mb-2 sm:mb-2 sm-plus:mb-2 phone:mb-3 md:mb-4 lg:mb-4 tab:mb-4 galaxy-tab:mb-3 tab-large:mb-4 xl:mb-5 2xl:mb-6 justify-start"
          >
            <MapPin className="xxs:h-3 xxs:w-3 xxs-plus:h-3 xxs-plus:w-3 xs:h-4 xs:w-4 xs-plus:h-4 xs-plus:w-4 sm:h-4 sm:w-4 sm-plus:h-4 sm-plus:w-4 phone:h-5 phone:w-5 md:h-6 md:w-6 lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 text-maverick-orange/80 flex-shrink-0" />
            <span className="font-light">
              <GradientText 
                colors={["#A0A0A0", "#D0D0D0", "#F0F0F0", "#FFFFFF", "#F8F8F8", "#E0E0E0", "#B0B0B0", "#A0A0A0"]}
                animationSpeed={3}
                className="xxs:text-xs xxs-plus:text-sm xs:text-base xs-plus:text-base sm:text-base sm-plus:text-base phone:text-lg md:text-xl lg:text-lg tab:text-xl galaxy-tab:text-lg tab-large:text-xl xl:text-xl 2xl:text-2xl"
              >
                Edmonton Web Design & Development
              </GradientText>
            </span>
          </motion.h1>

          {/* Main heading - responsive text sizes */}
          <div className="xxs:text-lg text-xl phone:text-2xl md:text-3xl lg:text-4xl tab:text-5xl galaxy-tab:text-4xl tab-large:text-5xl xl:text-5xl 2xl:text-6xl font-heading font-extrabold tracking-wide leading-tight text-maverick-cream text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="block"
            >
              <span className="text-maverick-cream block font-extrabold xxs:text-2xl xs:text-3xl xs-plus:text-3xl text-3xl phone:text-5xl md:text-6xl lg:text-6xl tab:text-[52px] galaxy-tab:text-[48px] tab-large:text-[53px] xl:text-[56px]">Building resilience from</span>
              <span className="block xxs:text-2xl xs:text-3xl xs-plus:text-3xl text-3xl phone:text-5xl md:text-6xl lg:text-6xl tab:text-[54px] galaxy-tab:text-[50px] tab-large:text-[55px] xl:text-[58px]">
                <GradientText 
                  colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                  animationSpeed={6}
                >
                  river valley to digital valley
                </GradientText>
              </span>
            </motion.div>
          </div>

          {/* Description text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="xxs:text-xs text-sm phone:text-base md:text-lg lg:text-lg tab:text-xl galaxy-tab:text-lg tab-large:text-xl xl:text-xl 2xl:text-2xl text-maverick-cream/80 xxs:mt-2 phone:mt-4 md:mt-3 lg:mt-6 tab:mt-6 galaxy-tab:mt-4 tab-large:mt-6 xl:mt-7 2xl:mt-8 xxs:mb-4 phone:mb-6 md:mb-6 lg:mb-10 tab:mb-8 galaxy-tab:mb-6 tab-large:mb-8 xl:mb-12 2xl:mb-14 font-sans leading-relaxed text-left xxs:mt-[12px] mt-[16px] xxs:mb-[20px] mb-[24px]"
          >
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI Integration so you can focus on growing your business
          </motion.p>

          

          {/* Buttons - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex flex-col phone:flex-row xxs:gap-1 xxs-plus:gap-1 xs:gap-2 xs-plus:gap-2 sm:gap-2 sm-plus:gap-2 phone:gap-3 md:gap-4 lg:gap-4 tab:gap-4 galaxy-tab:gap-3 tab-large:gap-4 xl:gap-4 2xl:gap-5 justify-start items-start xxs:mt-[15px] xxs-plus:mt-[15px] xs:mt-[20px] xs-plus:mt-[20px] sm:mt-[20px] sm-plus:mt-[20px] phone:mt-[25px] md:mt-[30px] lg:mt-[30px] tab:mt-[30px] galaxy-tab:mt-[25px] tab-large:mt-[30px] xl:mt-[30px] 2xl:mt-[35px] xxs:mb-[15px] xxs-plus:mb-[15px] xs:mb-[20px] xs-plus:mb-[20px] sm:mb-[20px] sm-plus:mb-[20px] phone:mb-[25px] md:mb-[30px] lg:mb-[30px] tab:mb-[30px] galaxy-tab:mb-[25px] tab-large:mb-[30px] xl:mb-[30px] 2xl:mb-[35px]"
          >
            <Button 
              href="/services" 
              variant="primary"
            >
              Explore Services
            </Button>
            <ShinyBorderButton 
              href="/contact"
              lightColor="#F15A29"
              duration={6}
              lightWidth={200}
              borderWidth={1}
              className="maverick-button maverick-button-outline xxs:px-2 xxs:py-1 xxs:text-xs xxs-plus:px-4 xxs-plus:py-2 xxs-plus:text-sm xs:px-4 xs:py-2 xs:text-sm xs-plus:px-5 xs-plus:py-3 xs-plus:text-base sm:px-5 sm:py-3 sm:text-base sm-plus:px-6 sm-plus:py-3 sm-plus:text-base phone:px-6 phone:py-4 phone:text-base md:px-8 md:py-4 md:text-lg lg:px-8 lg:py-4 lg:text-lg tab:px-10 tab:py-4 tab:text-lg galaxy-tab:px-8 galaxy-tab:py-4 galaxy-tab:text-lg tab-large:px-10 tab-large:py-4 tab-large:text-lg xl:px-10 xl:py-4 xl:text-lg 2xl:px-12 2xl:py-5 2xl:text-xl"
            >
              Book Free Consultation
            </ShinyBorderButton>
          </motion.div>
        </motion.div>

        {/* CardSwap Component - Right side for desktop, moved down */}
        <div
          className="hidden lg:block absolute lg:right-[-40px] lgxl:right-[50px] xl15:right-[-20px] bottom-20 pointer-events-auto"
        >
          <CardSwap
            width={500}
            height={350}
            cardDistance={50}
            verticalDistance={60}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card 
              title="Mobile Responsive"
            />
            <Card 
              title="Human-Centered Design"
            />
            <Card 
              title="Google Ranked"
            />
            <Card 
              title="Affordable"
            />
          </CardSwap>
        </div>

        {/* CardSwap Component - iPad Pro and large tablets (pro breakpoint) */}
        <div
          className="hidden pro:block tab-large:hidden absolute bottom-[-160px] right-4 pointer-events-auto"
        >
          <CardSwap
            width={480}
            height={340}
            cardDistance={50}
            verticalDistance={55}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card 
              title="Mobile Responsive"
            />
            <Card 
              title="Human-Centered Design"
            />
            <Card 
              title="Google Ranked"
            />
            <Card 
              title="Affordable"
            />
          </CardSwap>
        </div>

        {/* CardSwap Component - Large tablets and small laptops (tab-large breakpoint) */}
        <div
          className="hidden tab-large:block lg:hidden absolute bottom-[-140px] right-6 pointer-events-auto"
        >
          <CardSwap
            width={460}
            height={330}
            cardDistance={48}
            verticalDistance={53}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card 
              title="Mobile Responsive"
            />
            <Card 
              title="Human-Centered Design"
            />
            <Card 
              title="Google Ranked"
            />
            <Card 
              title="Affordable"
            />
          </CardSwap>
        </div>

        {/* CardSwap Component - Galaxy Tab S7 (800px-809px) */}
        <div
          className="hidden galaxy-tab:block pad:hidden absolute bottom-[-340px] right-12 pointer-events-auto"
        >
          <CardSwap
            width={450}
            height={320}
            cardDistance={45}
            verticalDistance={50}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card 
              title="Mobile Responsive"
            />
            <Card 
              title="Human-Centered Design"
            />
            <Card 
              title="Google Ranked"
            />
            <Card 
              title="Affordable"
            />
          </CardSwap>
        </div>

        {/* CardSwap Component - iPad Mini (768px-809px) */}
        <div
          className="hidden mini:block galaxy-tab:hidden absolute bottom-[-160px] right-16 pointer-events-auto"
        >
          <CardSwap
            width={520}
            height={380}
            cardDistance={52}
            verticalDistance={56}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card
              title="Mobile Responsive"
            />
            <Card
              title="Human-Centered Design"
            />
            <Card
              title="Google Ranked"
            />
            <Card
              title="Affordable"
            />
          </CardSwap>
        </div>

        {/* CardSwap Component - Regular iPad (810px-833px) */}
        <div
          className="hidden pad:block air:hidden absolute bottom-[-280px] right-6 pointer-events-auto"
        >
          <CardSwap
            width={410}
            height={310}
            cardDistance={43}
            verticalDistance={49}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card
              title="Mobile Responsive"
            />
            <Card
              title="Human-Centered Design"
            />
            <Card
              title="Google Ranked"
            />
            <Card
              title="Affordable"
            />
          </CardSwap>
        </div>

        {/* CardSwap Component - iPad Air (834px-1023px) */}
        <div
          className="hidden air:block pro:hidden absolute bottom-[-260px] right-4 pointer-events-auto"
        >
          <CardSwap
            width={420}
            height={320}
            cardDistance={45}
            verticalDistance={50}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card
              title="Mobile Responsive"
            />
            <Card
              title="Human-Centered Design"
            />
            <Card
              title="Google Ranked"
            />
            <Card
              title="Affordable"
            />
          </CardSwap>
        </div>

        {/* CardSwap Component - Small mobile only */}
        <div
          className="mini:hidden absolute xxs:bottom-[70px] xxs-plus:bottom-[-60px] xs:bottom-[-50px] xs-plus:bottom-[-80px] bottom-4 right-16 pointer-events-auto"
        >
          <CardSwap
            width={500}
            height={340}
            cardDistance={55}
            verticalDistance={60}
            delay={5000}
            pauseOnHover={false}
            easing="elastic"
          >
            <Card 
              title="Mobile Responsive"
            />
            <Card 
              title="Human-Centered Design"
            />
            <Card 
              title="Google Ranked"
            />
            <Card 
              title="Affordable"
            />
          </CardSwap>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator cursor-pointer absolute xxs:bottom-4 bottom-6 phone:bottom-8 md:bottom-16 mini:bottom-14 galaxy-tab:bottom-12 pad:bottom-15 air:bottom-16 pro:bottom-12 tab-large:bottom-10 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto"
        animate={{
          opacity: scrolled ? 0 : 1,
          y: scrolled ? 10 : 0
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection("services")}
      >
        <ChevronDown className="xxs:h-4 xxs:w-4 h-5 w-5 phone:h-6 phone:w-6 animate-bounce text-maverick-orange" />
      </motion.div>
    </section>
  );
}