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
      <ContainerStagger className="relative z-[9999] place-self-center px-6 pt-12 text-center mt-[130px] mb-[130px]">
        <ContainerAnimated>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-2 font-semibold text-center md:text-left">
            <span className="text-white px-2 py-1 rounded bg-[#ff563100] font-semibold">Building</span>{" "}
            <span className="underline decoration-maverick-orange font-semibold">
              <GradientText 
                colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                animationSpeed={5}
              >
                resilience
              </GradientText>
            </span> with
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 font-semibold md:text-left text-center">
            innovation and heart
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="mb-8">
          <p className="text-base sm:text-lg md:text-xl text-[#AAAAAA] leading-relaxed tracking-tight max-w-4xl mx-auto md:text-left px-4 sm:px-0 text-center">
            We're Edmonton-based creators who design beautiful websites, improve
            <span className="hidden md:inline"><br /></span>
            <span className="md:hidden"> </span>your online visibility, and offer smart AI integration so you can focus on
            <span className="hidden md:inline"><br /></span>
            <span className="md:hidden"> </span>growing your business
          </p>
        </ContainerAnimated>

        <ContainerAnimated className="text-center md:text-right">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-3 sm:gap-4 pt-[0px] pb-[0px] px-4 sm:px-0 md:pl-[124px] md:pr-[124px]">
            <Button className="px-6 py-3 sm:px-8 sm:py-3 bg-maverick-orange hover:bg-maverick-orange/90 text-white font-medium rounded-full text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
              Explore Services
            </Button>
            <Button variant="outline" className="px-6 py-3 sm:px-8 sm:py-3 border-maverick-orange text-maverick-orange hover:bg-maverick-orange/10 font-medium rounded-full text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
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