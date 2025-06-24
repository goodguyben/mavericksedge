import { 
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/blocks/animated-gallery"
import { Button } from "@/components/ui/button"
import { VideoIcon, ArrowRight } from "lucide-react"

// High-quality web development and digital marketing images
const IMAGES_1 = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
]

const IMAGES_2 = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
]

const IMAGES_3 = [
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
]

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
        <ContainerAnimated>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Your{" "}
            <span className="font-heading font-bold text-maverick-orange">
              digital edge
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            for business growth
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-4">
          <p className="leading-normal tracking-tight text-gray-300 max-w-2xl mx-auto text-lg">
            Edmonton-based digital solutions agency specializing in web development,
            <br className="hidden sm:block" /> 
            marketing automation, and AI integration for SMBs and nonprofits.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              className="gap-2 bg-maverick-orange hover:bg-maverick-orange/90 text-white px-6 py-3 text-lg"
              asChild
            >
              <a href="/contact">
                Book Free Call <VideoIcon className="size-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black px-6 py-3 text-lg"
              asChild
            >
              <a href="/services">
                Our Services <ArrowRight className="size-4 ml-1" />
              </a>
            </Button>
          </div>
        </ContainerAnimated>
      </ContainerStagger>
      
      {/* Animated gradient overlay */}
      <div 
        className="pointer-events-none absolute z-10 h-[70vh] w-full opacity-30"
        style={{
          background: "linear-gradient(135deg, #FF5630, #FF8A50, #1a1a1a)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      />

      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="p-4">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-lg object-cover shadow-lg"
                  src={imageUrl}
                  alt={`Web development showcase ${index + 1}`}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-lg object-cover shadow-lg"
                  src={imageUrl}
                  alt={`Digital marketing showcase ${index + 1}`}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-lg object-cover shadow-lg"
                  src={imageUrl}
                  alt={`AI integration showcase ${index + 1}`}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}