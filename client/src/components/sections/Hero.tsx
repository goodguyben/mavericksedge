import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "lucide-react"
import GradientText from "@/components/ui/GradientText"

// Using your attached videos and images from public directory
const VIDEOS_1 = [
  "/videos/custom-website-1.mp4",
  "/videos/ecommerce-1.mp4",
  "/videos/productivity-1.mp4",
  "/videos/social-media.mp4",
]

const VIDEOS_2 = [
  "/videos/custom-website-2.mp4",
  "/videos/ecommerce-2.mp4",
  "/videos/custom-website-3.mp4",
  "/videos/productivity-3.mp4",
]

const IMAGES_3 = [
  "/images/ai-solutions.jpg",
  "/images/productivity-2.png",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
]

export default function Hero() {
  return (
    <div className="relative mt-[-4px] mb-[-4px] bg-[#000000] pt-[1px] pb-[1px]">
      <ContainerStagger className="relative z-[9999] place-self-center px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 xs:pt-10 sm:pt-12 text-center mt-[80px] xs:mt-[90px] sm:mt-[100px] md:mt-[110px] lg:mt-[120px] xl:mt-[130px] mb-[80px] xs:mb-[90px] sm:mb-[100px] md:mb-[110px] lg:mb-[120px] xl:mb-[130px]">
        <ContainerAnimated>
          <h1 className="font-serif xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 font-semibold text-center xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight text-[46px]">
            <span className="text-white font-semibold">Building</span>{" "}
            <span className="underline decoration-maverick-orange font-semibold">
              <GradientText 
                colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                animationSpeed={5}
              >
                resilience
              </GradientText>
            </span>{" "}
            <span className="text-white font-semibold">with innovation 
            and heart</span>
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-12">
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-[#AAAAAA] leading-relaxed tracking-tight max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center px-2 xs:px-4 sm:px-6">
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI integration so you can focus on growing your business
          </p>
        </ContainerAnimated>

        <ContainerAnimated className="text-center">
          <div className="flex flex-col xs:flex-col sm:flex-row justify-center items-center gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <Button className="w-full xs:w-full sm:w-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl bg-maverick-orange hover:bg-maverick-orange/90 text-white font-medium rounded-full min-h-[40px] xs:min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px] xl:min-h-[60px]">
              Explore Services
            </Button>
            <Button variant="outline" className="w-full xs:w-full sm:w-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl border-maverick-orange text-maverick-orange hover:bg-maverick-orange/10 font-medium rounded-full min-h-[40px] xs:min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px] xl:min-h-[60px]">
              Book Free Consultation
            </Button>
          </div>
        </ContainerAnimated>
      </ContainerStagger>
      <div className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: "linear-gradient(to right, gray, rebeccapurple, blue)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      />
      <ContainerScroll className="relative h-[200vh]">
        <ContainerSticky className="h-svh bg-[#0000009e] -mt-16">
          <GalleryContainer className="-mt-8">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-6">
              {VIDEOS_1.map((videoUrl, index) => (
                <video
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onCanPlay={() => {
                    console.log(`Video ready to play: ${videoUrl}`);
                  }}
                  onError={(e) => {
                    console.warn(`Failed to play video: ${videoUrl}`, e);
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-54%]" yRange={["15%", "5%"]}>
              {VIDEOS_2.map((videoUrl, index) => (
                <video
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onCanPlay={() => {
                    console.log(`Video ready to play: ${videoUrl}`);
                  }}
                  onError={(e) => {
                    console.warn(`Failed to play video: ${videoUrl}`, e);
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
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="gallery item"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  );
}