import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "lucide-react"

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
    <div className="relative bg-white mt-[-4px] mb-[-4px]">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight md:text-5xl">
            Your{" "}
            <span className="font-serif font-extralight text-indigo-600">
              one source
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-serif text-4xl font-extralight md:text-5xl">
            for all your digital solutions
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-4">
          <p className="leading-normal tracking-tight text-muted-foreground">
            We design beautiful websites, improve your online visibility,
            <br /> and offer smart AI integration for your business growth.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <Button
            className="gap-1 bg-indigo-700"
          >
            Book free call <VideoIcon className="size-4" />
          </Button>
          <Button variant={"link"} className="text-secondary">
            About Us
          </Button>
        </ContainerAnimated>
      </ContainerStagger>
      <div className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: "linear-gradient(to right, gray, rebeccapurple, blue)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      />
      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
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
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
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