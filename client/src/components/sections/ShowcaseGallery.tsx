import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
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
    <div className="relative bg-[#000000] py-12 md:py-16">
      <ContainerStagger className="relative z-[9999] place-self-center px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 xs:pt-10 sm:pt-12 text-center">
        <ContainerAnimated>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8">
            <span className="text-white">Your</span>{" "}
            <span className="underline decoration-maverick-orange">
              <GradientText 
                colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                animationSpeed={5}
              >
                one source
              </GradientText>
            </span>
          </h2>
        </ContainerAnimated>
        
        <ContainerAnimated>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10">
            <span className="text-white">for all your digital solutions</span>
          </h2>
        </ContainerAnimated>

        <ContainerAnimated className="mb-8 xs:mb-9 sm:mb-10 md:mb-11 lg:mb-12">
          <p className="text-[#AAAAAA] leading-relaxed tracking-tight text-center text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl max-w-2xl xs:max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto px-4">
            No waste of time and money, we provide you with
            <br className="hidden sm:block" /> 
            a collection of services to power your next project.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <div className="flex flex-col xs:flex-col sm:flex-row justify-center items-center gap-4 xs:gap-4 sm:gap-6 md:gap-8 px-4">
            <Button className="w-3/4 xs:w-3/4 sm:w-auto px-6 xs:px-7 sm:px-8 md:px-10 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg md:text-xl bg-maverick-orange hover:bg-maverick-orange/90 text-white font-medium rounded-lg min-h-[48px] xs:min-h-[52px] sm:min-h-[56px] transition-all duration-200 ease-in-out shadow-md hover:shadow-lg gap-2">
              Book Free Call <VideoIcon className="w-4 h-4" />
            </Button>
            <Button variant="link" className="text-[#AAAAAA] hover:text-white underline-offset-4 hover:underline text-sm xs:text-base sm:text-lg md:text-xl">
              About Us
            </Button>
          </div>
        </ContainerAnimated>
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