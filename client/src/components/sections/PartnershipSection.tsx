import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientText from "@/components/ui/GradientText";
import { OptimizedVideo } from "@/components/blocks/optimized-video";
import { createMemoryManager } from "@/lib/performance";
import { useOptimizedScroll } from "@/hooks/useExecutionOptimization";
import lottie, { AnimationItem } from "lottie-web";
import { HeartHandshake } from "lucide-react";

// Candidate handshake animations (public CDNs)
const HANDSHAKE_SOURCES: string[] = [
  // LottieFiles CDN candidates
  "https://assets9.lottiefiles.com/packages/lf20_p5yomj0b.json",
  "https://assets1.lottiefiles.com/packages/lf20_q5pk6p1k.json",
  "https://assets2.lottiefiles.com/private_files/lf30_uj8a6nrx.json"
];

const HandshakeLottie = memo(({ size = 40 }: { size?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadFromSources = async () => {
      for (const src of HANDSHAKE_SOURCES) {
        try {
          const response = await fetch(src, { cache: "force-cache" });
          if (!response.ok) continue;
          const json = await response.json();
          if (isCancelled || !containerRef.current) return;
          // Destroy any previous instance
          if (animationRef.current) {
            animationRef.current.destroy();
            animationRef.current = null;
          }
          const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: json
          });
          animationRef.current = anim;
          return; // success
        } catch (_err) {
          // try next
        }
      }
      if (!isCancelled) setFailed(true);
    };

    loadFromSources();

    return () => {
      isCancelled = true;
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, []);

  if (failed) {
    return (
      <div className="flex items-center justify-center" style={{ width: size, height: size }}>
        <HeartHandshake className="text-maverick-orange" style={{ width: size * 0.8, height: size * 0.8 }} />
      </div>
    );
  }

  return <div ref={containerRef} style={{ width: size, height: size }} />;
});

// Memoize the video array to prevent recreation on every render
const BENTO_VIDEOS = [
  "https://mavericksedge.ca/videos/Portfolio_Video_1.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_2.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_3.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_4.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_5.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_6.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_7.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_8.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_9.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_10.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_11.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_12.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_13.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_14.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_15.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_16.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_17.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_18.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_19.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_20.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_21.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_22.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_23.webm",
  "https://mavericksedge.ca/videos/Portfolio_Video_24.webm",
];

// Memoized video chunks to prevent recalculation
const createVideoChunks = () => ({
  row1: BENTO_VIDEOS.slice(0, 6),
  row2: BENTO_VIDEOS.slice(6, 12),
  row3: BENTO_VIDEOS.slice(12, 18),
  row4: BENTO_VIDEOS.slice(18, 24),
});

// Memoized star rating component
const StarRating = memo(({ count = 5 }: { count?: number }) => (
  <div className="flex space-x-1">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
));

// Memoized metric card component
const MetricCard = memo(({ 
  title, 
  value, 
  subtitle, 
  icon, 
  progress, 
  children 
}: {
  title: string;
  value: string;
  subtitle: string;
  icon?: React.ReactNode;
  progress?: number;
  children?: React.ReactNode;
}) => (
  <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#2a2a2a]/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-400 font-medium">{title}</span>
      {icon}
    </div>
    <div className="flex items-baseline space-x-2">
      <span className="text-4xl font-bold text-white">{value}</span>
      <span className="text-xl text-gray-300">{subtitle}</span>
    </div>
    {progress !== undefined && (
      <div className="mt-3 bg-gray-700/50 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full" 
          style={{ width: `${progress}%` }}
        />
      </div>
    )}
    {children}
  </div>
));

// New storytelling metric component
const StoryMetric = memo(({ 
  value, 
  story, 
  icon, 
  color = "orange",
  delay = 0 
}: {
  value: string;
  story: string;
  icon?: React.ReactNode;
  color?: "orange" | "blue" | "green" | "purple";
  delay?: number;
}) => {
  const colorClasses = {
    orange: "text-maverick-orange",
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="flex items-start gap-6 p-6 hover:bg-white/5 rounded-2xl transition-all duration-500">
        {icon && (
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
        )}
        
        <div className="flex-1 space-y-2">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
              {value}
            </span>
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorClasses[color]} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </div>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {story}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

// New storytelling journey component
const PartnershipJourney = memo(() => (
  <div className="space-y-8">
    {/* Journey Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center -mt-1">
          <HandshakeLottie size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white">Our Journey</h3>
      </div>
      <p className="text-gray-400 text-lg leading-relaxed">
        Every number tells a story of trust, collaboration, and shared success. Here's what we've built together.
      </p>
    </motion.div>

    {/* Story Metrics */}
    <div className="space-y-6">
      <StoryMetric
        value="5.0"
        story="5.0, five stars from 37 Google reviews. Clients trust our work and service."
        icon={
          <svg className="w-10 h-10" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        }
        color="orange"
        delay={0.1}
      />
      
      <StoryMetric
        value="10+"
        story="Over 10 years, now powered by AI. Lower costs, faster turnarounds, and world-class design and engineering."
        icon={
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#E04500] to-[#FF5630] flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        }
        color="orange"
        delay={0.2}
      />
      
      <StoryMetric
        value="92%"
        story="92% of clients stay with us. We build clear communication, steady results, and long-term relationships."
        icon={
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#E04500] to-[#FF5630] flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        }
        color="orange"
        delay={0.3}
      />
      
      <StoryMetric
        value="150+"
        story="150+ projects delivered. From small sites to complex apps, we solve problems and ship work that grows businesses."
        icon={
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#E04500] to-[#FF5630] flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        }
        color="orange"
        delay={0.4}
      />
    </div>
  </div>
));

// Memoized video item component
const VideoItem = memo(({ 
  video, 
  index, 
  priority = false 
}: {
  video: string;
  index: number;
  priority?: boolean;
}) => (
  <motion.div
    className="flex-shrink-0 relative group"
    style={{ width: 'auto', minWidth: '260px', height: '180px' }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
      <OptimizedVideo
        src={video}
        className="w-full h-full object-cover"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
));

function PartnershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const memoryManager = useMemo(() => createMemoryManager(), []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Memoize expensive calculations
  const videoChunks = useMemo(() => createVideoChunks(), []);
  
  // Transform from zoomed in (1.8) to normal (1.0) as user scrolls - more dramatic zoom
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.8, 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Memoize intersection observer callback
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  }, []);

  // Memoize observer options
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    memoryManager.addObserver(observer);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      memoryManager.cleanup();
    };
  }, [handleIntersection, observerOptions, memoryManager]);

  // Memoize CSS animations
  const cssAnimations = useMemo(() => `
    @keyframes scrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    @keyframes scrollRight {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
  `, []);

  // Memoize video row components
  const VideoRow = useCallback(({ 
    videos, 
    animationName, 
    duration, 
    direction = 'left' 
  }: {
    videos: string[];
    animationName: string;
    duration: number;
    direction?: 'left' | 'right';
  }) => (
    <motion.div 
      className="flex gap-6 overflow-hidden pb-2"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        width: '100%',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* First set of videos */}
      <div className="flex gap-6" style={{ 
        animationDuration: `${duration}s`,
        animationName,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }}>
        {videos.map((video, index) => (
          <VideoItem
            key={`${direction}-${index}`}
            video={video}
            index={index}
            priority={index === 0}
          />
        ))}
      </div>
      {/* Duplicate set for seamless loop */}
      <div className="flex gap-6" style={{ 
        animationDuration: `${duration}s`,
        animationName,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }}>
        {videos.map((video, index) => (
          <VideoItem
            key={`${direction}-duplicate-${index}`}
            video={video}
            index={index}
            priority={false}
          />
        ))}
      </div>
    </motion.div>
  ), []);

  return (
    <div className="relative bg-[#000000] py-12 md:py-16 pt-[120px] pb-[120px]">
      <style dangerouslySetInnerHTML={{
        __html: cssAnimations
      }} />

      <div className="relative z-10 place-self-center px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 xs:pt-10 sm:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side - True Partnership Philosophy */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-left">
                  <div className="font-serif font-semibold leading-tight mb-8">
                    {/* Main Partnership Title */}
                    <h2 className="partnership-title-xxs text-white mb-8">
                      Your
                      <span className="block mt-4">
                        <GradientText 
                          colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                          animationSpeed={5}
                        >
                          trusted partner
                        </GradientText>
                      </span>
                      <span className="text-maverick-orange block mt-4">in growth</span>
                    </h2>
                  </div>

                  {/* Partnership Philosophy Statement */}
                  <div className="space-y-8">
                    <p className="text-lg xs:text-xl sm:text-2xl text-[#AAAAAA] leading-relaxed max-w-2xl">
                      Every solution we build, from content strategy to backend systems, is grounded in co-created vision. As your web solutions agency, we measure success not by aesthetics alone but by alignment with your mission, audience, and growth.
                    </p>

                    <div className="border-l-4 border-maverick-orange pl-6">
                      <p className="text-lg xs:text-xl text-[#CCCCCC] italic leading-relaxed">
                        "Partnership is not just a contract. It's a way of doing things together, where both parties give more than they take."
                      </p>
                      <p className="text-sm text-[#AAAAAA] mt-2">Henry Kimsey-House</p>
                    </div>

                    <p className="text-lg xs:text-xl sm:text-2xl text-[#CCCCCC] leading-relaxed max-w-2xl">
                      We believe in walking beside you every step of the way. The best results come from 
                      <span className="text-white font-medium"> mutual effort</span>, not transactional exchanges.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Metrics Dashboard */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="space-y-12">
                  {/* Partnership Journey */}
                  <PartnershipJourney />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Video Grid Section */}
      <div 
        ref={containerRef}
        className="relative mt-48 overflow-hidden w-full"
      >
        {/* Container with zoom effect */}
        <motion.div
          className="w-full"
          style={{ scale, opacity }}
        >
          {/* Horizontal Scrolling Bento Grid */}
          <div className="space-y-6">
            {/* Row 1: Left to Right - Videos 1-6 with auto-scroll */}
            <VideoRow 
              videos={videoChunks.row1}
              animationName="scrollLeft"
              duration={30}
              direction="left"
            />

            {/* Row 2: Right to Left - Videos 7-12 with auto-scroll */}
            <VideoRow 
              videos={videoChunks.row2}
              animationName="scrollRight"
              duration={25}
              direction="right"
            />

            {/* Row 3: Left to Right - Videos 13-18 with auto-scroll */}
            <VideoRow 
              videos={videoChunks.row3}
              animationName="scrollLeft"
              duration={35}
              direction="left"
            />

            {/* Row 4: Left to Right - Videos 19-24 with auto-scroll */}
            <VideoRow 
              videos={videoChunks.row4}
              animationName="scrollRight"
              duration={28}
              direction="right"
            />
          </div>

        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-center mt-16"
      >
        <p className="text-lg text-gray-300 mb-6">
          Ready to see your project come to life?
        </p>
        <button className="bg-gradient-to-r from-[#E04500] via-[#FF5630] to-[#FF8A50] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Start Your Project
        </button>
      </motion.div>
      
      {/* Background gradient effect - positioned below metrics with overlap */}
      <div className="pointer-events-none absolute z-10 w-full hidden md:block"
        style={{
          background: "linear-gradient(to right, #FF5630, #8B5CF6, #3B82F6)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
          top: "35%",
          height: "50vh",
        }}
      />
      {/* Mobile-specific gradient positioning */}
      <div className="pointer-events-none absolute z-10 w-full md:hidden"
        style={{
          background: "linear-gradient(to right, #FF5630, #8B5CF6, #3B82F6)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
          top: "55%",
          height: "50vh",
        }}
      />
    </div>
  );
}

// Memoize the entire component
export default memo(PartnershipSection); 