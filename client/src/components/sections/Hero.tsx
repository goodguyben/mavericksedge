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
    <div className="relative mt-[-4px] mb-[-4px] bg-[#000000] min-h-screen flex flex-col justify-center">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-4 sm:px-6 pt-8 sm:pt-12 text-center">
        <ContainerAnimated>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-2 font-semibold">
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
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 font-semibold">
            innovation and heart
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="mb-8">
          <p className="text-lg sm:text-xl text-[#AAAAAA] leading-relaxed tracking-tight max-w-4xl mx-auto px-2">
            We're Edmonton-based creators who design beautiful websites, improve
            <span className="hidden sm:inline"><br /></span>
            <span className="sm:hidden"> </span>your online visibility, and offer smart AI integration so you can focus on
            <span className="hidden sm:inline"><br /></span>
            <span className="sm:hidden"> </span>growing your business
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12">
            <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-maverick-orange hover:bg-maverick-orange/90 text-white font-medium rounded-full">
              Explore Services
            </Button>
            <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-3 border-maverick-orange text-maverick-orange hover:bg-maverick-orange/10 font-medium rounded-full">
              Book Free Consultation
            </Button>
          </div>
        </ContainerAnimated>
        
        <ContainerAnimated>
          <div className="relative max-w-6xl mx-auto px-2">
            {/* Mobile: Single column carousel-like layout */}
            <div className="md:hidden bg-[#0000009e] rounded-xl p-3 overflow-hidden">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {[...VIDEOS_1.slice(0, 2), ...VIDEOS_2.slice(0, 1)].map((videoUrl, index) => (
                  <div key={index} className="flex-shrink-0 w-72">
                    <video
                      className="aspect-video w-full rounded-lg object-cover shadow-lg"
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
                  </div>
                ))}
                {IMAGES_3.slice(0, 1).map((imageUrl, index) => (
                  <div key={`img-${index}`} className="flex-shrink-0 w-72">
                    <img
                      className="aspect-video w-full rounded-lg object-cover shadow-lg"
                      src={imageUrl}
                      alt="gallery item"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Multi-column grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#0000009e] rounded-2xl p-6">
              <div className="flex flex-col gap-3">
                {VIDEOS_1.slice(0, 2).map((videoUrl, index) => (
                  <video
                    key={index}
                    className="aspect-video w-full rounded-lg object-cover shadow-lg"
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
              </div>
              <div className="flex flex-col gap-3 lg:mt-8">
                {VIDEOS_2.slice(0, 2).map((videoUrl, index) => (
                  <video
                    key={index}
                    className="aspect-video w-full rounded-lg object-cover shadow-lg"
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
              </div>
              <div className="hidden lg:flex flex-col gap-3">
                {IMAGES_3.slice(0, 2).map((imageUrl, index) => (
                  <img
                    key={index}
                    className="aspect-video w-full rounded-lg object-cover shadow-lg"
                    src={imageUrl}
                    alt="gallery item"
                  />
                ))}
              </div>
            </div>
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
    </div>
  );
}