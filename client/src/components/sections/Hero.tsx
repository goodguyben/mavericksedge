
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
      <ContainerStagger className="relative z-[9999] place-self-center 
        px-3 
        xs:px-4 
        sm:px-5 
        md:px-6 
        lg:px-8 
        xl:px-12 
        2xl:px-16 
        pt-6 
        xs:pt-8 
        sm:pt-10 
        md:pt-12 
        lg:pt-16 
        xl:pt-20 
        2xl:pt-24 
        text-center 
        mt-[100px] 
        xs:mt-[110px] 
        sm:mt-[120px] 
        md:mt-[130px] 
        lg:mt-[140px] 
        xl:mt-[150px] 
        2xl:mt-[160px] 
        mb-[70px] 
        xs:mb-[75px] 
        sm:mb-[80px] 
        md:mb-[90px] 
        lg:mb-[100px] 
        xl:mb-[110px] 
        2xl:mb-[120px]">
        
        <ContainerAnimated>
          {/* Hero Headline (H1) - Responsive Typography */}
          <h1 className="font-serif font-semibold text-center xs:text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[72px] mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-9 text-[34px]">
            <span className="text-white font-semibold">Building</span>{" "}
            <span className="underline decoration-maverick-orange font-semibold">
              <GradientText 
                colors={["#FF5630", "#FF8A50", "#FFB899", "#FF5630"]}
                animationSpeed={5}
              >
                resilience
              </GradientText>
            </span>{" "}
            <span className="text-white font-semibold">with innovation</span>
            <br className="hidden md:block" />
            <span className="text-white font-semibold md:ml-0 ml-1">and heart</span>
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="
          mb-4 
          xs:mb-5 
          sm:mb-6 
          md:mb-7 
          lg:mb-8 
          xl:mb-10 
          2xl:mb-12">
          {/* Hero Subheadline - Responsive Typography */}
          <p className="text-[#AAAAAA] leading-relaxed tracking-tight text-center 
            text-sm 
            xs:text-[15px] 
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            xl:text-2xl 
            2xl:text-2xl 
            3xl:text-3xl
            max-w-[280px] 
            xs:max-w-[320px] 
            sm:max-w-[400px] 
            md:max-w-[500px] 
            lg:max-w-[600px] 
            xl:max-w-[700px] 
            2xl:max-w-[800px] 
            3xl:max-w-[900px] 
            mx-auto 
            px-2 
            xs:px-3 
            sm:px-4 
            md:px-6 
            lg:px-8">
            We're Edmonton-based creators who design beautiful websites, improve your online visibility, and offer smart AI integration so you can focus on growing your business
          </p>
        </ContainerAnimated>

        <ContainerAnimated className="text-center">
          {/* Button Layout - Stack on mobile, side-by-side on desktop */}
          <div className="flex 
            flex-col 
            xs:flex-col 
            sm:flex-col 
            md:flex-col 
            lg:flex-row 
            xl:flex-row 
            2xl:flex-row 
            justify-center items-center 
            gap-3 
            xs:gap-3 
            sm:gap-4 
            md:gap-4 
            lg:gap-5 
            xl:gap-6 
            2xl:gap-8 
            px-4 
            xs:px-5 
            sm:px-6 
            md:px-8 
            lg:px-10 
            xl:px-12 
            2xl:px-16">
            
            {/* Primary CTA Button */}
            <Button className="
              w-full 
              xs:w-full 
              sm:w-4/5 
              md:w-3/5 
              lg:w-auto 
              xl:w-auto 
              2xl:w-auto
              px-4 
              xs:px-5 
              sm:px-6 
              md:px-7 
              lg:px-8 
              xl:px-10 
              2xl:px-12
              py-2.5 
              xs:py-3 
              sm:py-3 
              md:py-3.5 
              lg:py-4 
              xl:py-4 
              2xl:py-5
              text-sm 
              xs:text-sm 
              sm:text-base 
              md:text-base 
              lg:text-lg 
              xl:text-xl 
              2xl:text-xl
              bg-maverick-orange hover:bg-maverick-orange/90 
              text-white font-medium rounded-lg
              min-h-[44px] 
              xs:min-h-[46px] 
              sm:min-h-[48px] 
              md:min-h-[50px] 
              lg:min-h-[52px] 
              xl:min-h-[56px] 
              2xl:min-h-[60px]
              transition-all duration-200 ease-in-out
              shadow-md hover:shadow-lg">
              Explore Services
            </Button>
            
            {/* Secondary CTA Button */}
            <Button variant="outline" className="
              w-full 
              xs:w-full 
              sm:w-4/5 
              md:w-3/5 
              lg:w-auto 
              xl:w-auto 
              2xl:w-auto
              px-4 
              xs:px-5 
              sm:px-6 
              md:px-7 
              lg:px-8 
              xl:px-10 
              2xl:px-12
              py-2.5 
              xs:py-3 
              sm:py-3 
              md:py-3.5 
              lg:py-4 
              xl:py-4 
              2xl:py-5
              text-sm 
              xs:text-sm 
              sm:text-base 
              md:text-base 
              lg:text-lg 
              xl:text-xl 
              2xl:text-xl
              border-maverick-orange text-maverick-orange 
              hover:bg-maverick-orange/10 font-medium rounded-lg
              min-h-[44px] 
              xs:min-h-[46px] 
              sm:min-h-[48px] 
              md:min-h-[50px] 
              lg:min-h-[52px] 
              xl:min-h-[56px] 
              2xl:min-h-[60px]
              transition-all duration-200 ease-in-out
              shadow-sm hover:shadow-md">
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
        <ContainerSticky className="h-svh bg-[#0000009e] -mt-16 top-1/2 -translate-y-1/2 lg:top-0 lg:translate-y-0">
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
