import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "lucide-react"

import customWebsite1 from "@assets/Custom Interactive Websites 1.mp4"
import customWebsite2 from "@assets/Custom Interactive Websites 2.mp4"
import customWebsite3 from "@assets/Custom Interactive Websites 3.mp4"
import ecommerce1 from "@assets/Next-Gen E-Commerce 1.mp4"
import ecommerce2 from "@assets/Next-Gen E-Commerce 2.mp4"
import productivity1 from "@assets/Productivity & Management Web Applications 1.mp4"
import productivity3 from "@assets/Productivity & Management Web Applications 3.mp4"
import socialMedia from "@assets/Social Media Management.mp4"
import aiSolutions from "@assets/Custom AI Solutions.jpg"
import productivity2 from "@assets/Productivity & Management Web Applications 2.png"
import screenshot1 from "@assets/Screenshot 2025-04-22 at 2.22.40 PM.png"
import screenshot2 from "@assets/Screenshot 2025-04-27 at 4.24.12 PM.png"

// Using your attached videos and images
const VIDEOS_1 = [
  customWebsite1,
  ecommerce1,
  productivity1,
  socialMedia,
]

const VIDEOS_2 = [
  customWebsite2,
  ecommerce2,
  customWebsite3,
  productivity3,
]

const IMAGES_3 = [
  aiSolutions,
  productivity2,
  screenshot1,
  screenshot2,
]

export default function Hero() {
  return (
    <div className="relative bg-white">
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
  )
}