import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/blocks/animated-gallery"
import { OptimizedVideo, VideoGalleryWrapper } from "@/components/blocks/optimized-video"
import { useMemo } from 'react';
import { Button } from "@/components/ui/custom-button"
import { VideoIcon } from "lucide-react"
import GradientText from "@/components/ui/GradientText"

// CDN-hosted portfolio videos - WebM format for optimal performance
const CDN_VIDEOS = [
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_1.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_1.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_2.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_2.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_3.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_3.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_4.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_4.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_5.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_5.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_6.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_6.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_7.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_7.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_8.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_8.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_9.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_9.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_10.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_10.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_11.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_11.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_12.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_12.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_13.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_13.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_14.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_14.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_15.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_15.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_16.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_16.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_17.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_17.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_18.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_18.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_19.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_19.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_20.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_20.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_21.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_21.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_22.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_22.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_23.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_23.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_24.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_24.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_25.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_25.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_26.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_26.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_27.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_27.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_28.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_28.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_29.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_29.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_30.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_30.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_31.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_31.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_32.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_32.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_33.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_33.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_34.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_34.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_35.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_35.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_36.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_36.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_37.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_37.mp4" },
  { webm: "https://mavericksedge.ca/videos/Portfolio_Video_38.webm", mp4: "https://mavericksedge.ca/videos/Portfolio_Video_38.mp4" }
];

export default function ShowcaseGallery() {
  // Performance optimization: Load fewer videos initially
  const INITIAL_VIDEOS = 3; // Reduced to 3 videos initially for better LCP
  const VIDEOS_PER_COLUMN = 2; // Display only 2 videos per column initially
  
  // Create a more efficient distribution
  const createOptimizedDistribution = () => {
    // For initial load, only use first 12 videos
    const initialSet = CDN_VIDEOS.slice(0, INITIAL_VIDEOS * 2);
    // Rest will be loaded lazily
    const lazySet = CDN_VIDEOS.slice(INITIAL_VIDEOS * 2);
    
    return { initialSet, lazySet };
  };

  const { initialSet, lazySet } = createOptimizedDistribution();

  // Split initial videos into three columns (4 per column)
  const VIDEOS_1 = initialSet.slice(0, VIDEOS_PER_COLUMN);
  const VIDEOS_2 = initialSet.slice(VIDEOS_PER_COLUMN, VIDEOS_PER_COLUMN * 2);
  const IMAGES_3 = initialSet.slice(VIDEOS_PER_COLUMN * 2, VIDEOS_PER_COLUMN * 3);
  
  // Lazy load the rest
  const LAZY_VIDEOS_1 = lazySet.slice(0, 8);
  const LAZY_VIDEOS_2 = lazySet.slice(8, 16);
  const LAZY_VIDEOS_3 = lazySet.slice(16, 24);
  return (
    <div className="relative bg-[#000000] py-12 md:py-16 pt-[120px] pb-[120px] performance-optimized">
      <ContainerStagger className="relative z-10 place-self-center px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 xs:pt-10 sm:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side - True Partnership Philosophy */}
            <div className="lg:col-span-7">
              <ContainerAnimated>
                <div className="text-left">
                  <div className="font-serif font-semibold leading-tight mb-8">
                    {/* Main Partnership Title */}
                    <h2 className="xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 text-[70px]">
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
                      <p className="text-sm text-[#AAAAAA] mt-2">— Henry Kimsey-House</p>
                    </div>

                    <p className="text-lg xs:text-xl sm:text-2xl text-[#CCCCCC] leading-relaxed max-w-2xl">
                      We believe in walking beside you every step of the way. The best results come from 
                      <span className="text-white font-medium"> mutual effort</span>, not transactional exchanges.
                    </p>
                  </div>
                </div>
              </ContainerAnimated>
            </div>

            {/* Right Side - Metrics Dashboard */}
            <div className="lg:col-span-5">
              <ContainerAnimated>
                <div className="space-y-6">
                  {/* Google Reviews Metric */}
                  <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#2a2a2a]/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {/* Actual Google Logo */}
                        <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-sm text-gray-400 font-medium">Google Reviews</span>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-white">5.0</span>
                      <span className="text-xl text-gray-300">from</span>
                      <span className="text-2xl font-semibold text-maverick-orange">37 reviews</span>
                    </div>
                  </div>

                  {/* Experience Metric */}
                  <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#2a2a2a]/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400 font-medium">Years of Excellence</span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-maverick-orange to-yellow-400 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-white">10+</span>
                      <span className="text-xl text-gray-300">years crafting digital experiences</span>
                    </div>
                  </div>

                  {/* Partnership Success Metric */}
                  <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#2a2a2a]/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400 font-medium">Long-term Partnerships</span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-white">92%</span>
                      <span className="text-xl text-gray-300">clients continue working with us</span>
                    </div>
                    <div className="mt-3 bg-gray-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-[92%]"></div>
                    </div>
                  </div>

                  {/* Collaborative Approach Metric */}
                  <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#2a2a2a]/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400 font-medium">Collaborative Success</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-maverick-orange rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      </div>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-white">100%</span>
                      <span className="text-xl text-gray-300">transparent communication</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Weekly check-ins, shared goals, mutual success</p>
                  </div>

                  {/* Partnership Values */}
                  <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#2a2a2a]/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400 font-medium">Partnership Values</span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-maverick-orange to-yellow-400 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Trust & Transparency</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Shared Accountability</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Mutual Growth</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </ContainerAnimated>
            </div>
          </div>
        </div>
      </ContainerStagger>
      <div className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: "linear-gradient(to right, #FF5630, #8B5CF6, #3B82F6)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      />
      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh bg-[#0000009e] -mt-8">
          <VideoGalleryWrapper maxConcurrentVideos={3}>
            <GalleryContainer className="-mt-4">
              <GalleryCol yRange={["-10%", "2%"]} className="mt-[90px] mb-[90px]">
                {/* Priority load first 2 videos */}
                {VIDEOS_1.map((videoSource, index) => (
                  <OptimizedVideo
                    key={`initial-1-${index}`}
                    src={videoSource}
                    className="block aspect-video w-full rounded-md shadow-lg overflow-hidden"
                    priority={index < 2}
                  />
                ))}
                {/* Lazy load remaining videos */}
                {LAZY_VIDEOS_1.map((videoSource, index) => (
                  <OptimizedVideo
                    key={`lazy-1-${index}`}
                    src={videoSource}
                    className="block aspect-video w-full rounded-md shadow-lg overflow-hidden"
                    priority={false}
                  />
                ))}
              </GalleryCol>
              <GalleryCol className="mt-[40px] mb-[120px]" yRange={["0%", "-5%"]}>
                {/* No priority for middle column */}
                {VIDEOS_2.map((videoSource, index) => (
                  <OptimizedVideo
                    key={`initial-2-${index}`}
                    src={videoSource}
                    className="block aspect-video w-full rounded-md shadow-lg overflow-hidden"
                    priority={false}
                  />
                ))}
                {/* Lazy load remaining videos */}
                {LAZY_VIDEOS_2.map((videoSource, index) => (
                  <OptimizedVideo
                    key={`lazy-2-${index}`}
                    src={videoSource}
                    className="block aspect-video w-full rounded-md shadow-lg overflow-hidden"
                    priority={false}
                  />
                ))}
              </GalleryCol>
              <GalleryCol yRange={["-10%", "2%"]} className="mt-[85px] mb-[85px]">
                {/* No priority for third column */}
                {IMAGES_3.map((videoSource, index) => (
                  <OptimizedVideo
                    key={`initial-3-${index}`}
                    src={videoSource}
                    className="block aspect-video w-full rounded-md shadow-lg overflow-hidden"
                    priority={false}
                  />
                ))}
                {/* Lazy load remaining videos */}
                {LAZY_VIDEOS_3.map((videoSource, index) => (
                  <OptimizedVideo
                    key={`lazy-3-${index}`}
                    src={videoSource}
                    className="block aspect-video w-full rounded-md shadow-lg overflow-hidden"
                    priority={false}
                  />
                ))}
              </GalleryCol>
            </GalleryContainer>
          </VideoGalleryWrapper>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  );
}