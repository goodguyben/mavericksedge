import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/custom-button"
import { VideoIcon } from "lucide-react"
import GradientText from "@/components/ui/GradientText"

// Using project videos and images
const VIDEOS_1 = [
  "/videos/services/Custom Interactive Websites 1.mp4",
  "/videos/services/Next-Gen E-Commerce 1.mp4",
  "/videos/services/Productivity & Management Web Applications 1.mp4",
  "/videos/services/Social Media Management.mp4",
]

const VIDEOS_2 = [
  "/videos/services/Custom Interactive Websites 2.mp4",
  "/videos/services/Next-Gen E-Commerce 2.mp4",
  "/videos/services/Custom Interactive Websites 3.mp4",
  "/videos/services/Productivity & Management Web Applications 3.mp4",
]

const IMAGES_3 = [
  "/videos/services/Custom AI Solutions.jpg",
  "/videos/services/Productivity & Management Web Applications 2.png",
  "/images/manus-ai-logo.png",
  "/images/telus-logo.png",
]

export default function ShowcaseGallery() {
  return (
    <div className="relative bg-[#000000] py-12 md:py-16 pt-[120px] pb-[120px]">
      <ContainerStagger className="relative z-[9999] place-self-center px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 xs:pt-10 sm:pt-12">
        <div className="max-w-6xl mx-auto">
          {/* Creative Title Layout */}
          <ContainerAnimated>
            <div className="text-center mb-16 xs:mb-20 sm:mb-24 md:mb-28 lg:mb-32">
              <div className="font-serif font-semibold leading-tight">
                {/* "Your" - positioned top left */}
                <div className="flex justify-start mb-4 xs:mb-6 sm:mb-8">
                  <span className="text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                    Your
                  </span>
                </div>
                
                {/* "one source" - centered and gradient */}
                <div className="text-center mb-4 xs:mb-6 sm:mb-8">
                  <span className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] underline decoration-maverick-orange decoration-4 xs:decoration-6 sm:decoration-8">
                    <GradientText 
                      colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                      animationSpeed={5}
                    >
                      one source
                    </GradientText>
                  </span>
                </div>
                
                {/* "for all your digital solutions" - positioned bottom right */}
                <div className="flex justify-end">
                  <span className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-right max-w-lg">
                    for all your digital solutions
                  </span>
                </div>
              </div>
            </div>
          </ContainerAnimated>

          {/* Redesigned Subtitle */}
          <ContainerAnimated>
            <div className="text-center">
              <div className="relative">
                {/* Left accent line */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 xs:w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-maverick-orange to-transparent"></div>
                
                {/* Main text */}
                <div className="px-16 xs:px-20 sm:px-24 md:px-28">
                  <p className="text-[#CCCCCC] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light">
                    <span className="text-maverick-orange font-medium">No waste</span> of time and money
                  </p>
                  <p className="text-[#AAAAAA] text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 xs:mt-6 sm:mt-8">
                    we provide you with a 
                    <span className="text-white font-medium"> collection of services </span>
                    to power your next project
                  </p>
                </div>
                
                {/* Right accent line */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 xs:w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-l from-maverick-orange to-transparent"></div>
              </div>
            </div>
          </ContainerAnimated>
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
          <GalleryContainer className="-mt-4">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {VIDEOS_1.map((videoUrl, index) => (
                <video
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onCanPlay={() => {
                    console.log(`Showcase video ready: ${videoUrl}`);
                  }}
                  onError={(e) => {
                    console.warn(`Failed to play showcase video: ${videoUrl}`, e);
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {VIDEOS_2.map((videoUrl, index) => (
                <video
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onCanPlay={() => {
                    console.log(`Showcase video ready: ${videoUrl}`);
                  }}
                  onError={(e) => {
                    console.warn(`Failed to play showcase video: ${videoUrl}`, e);
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow-lg"
                  src={imageUrl}
                  alt="showcase item"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  );
}