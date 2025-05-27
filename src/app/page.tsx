import { Carousel } from "@/components/carousel/carousel"
import { EnviosBanner } from "@/components/envios-banner/envios-banner"
import { InstagramBanner } from "@/components/instagram-banner/instagram-banner"
import { Services } from "@/components/services/services"
import { RecentWorks } from "@/components/recent-works/recent-works"
import { Features } from "@/components/features/features"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { InstructivoBanner } from "@/components/instructivo-banner/instructivo-banner"
import { CTASection } from "@/components/cta-section/cta-section"
import { Contact } from "@/components/contact/contact"
import Link from "next/link"

export default function Home() {
  const carouselImages = [
    {
      src: "/hero/image-hero-1.jpg",
      alt: "Producto gráfico 1",
    },
    {
      src: "/hero/image-hero-2.jpg",
      alt: "Producto gráfico 2",
    },
    {
      src: "/hero/image-hero-3.jpg",
      alt: "Producto gráfico 3",
    },
    {
      src: "/hero/image-hero-4.jpg",
      alt: "Producto gráfico 4",
    },
    {
      src: "/hero/image-hero-5.jpg",
      alt: "Producto gráfico 5",
    },
    {
      src: "/hero/image-hero-6.jpg",
      alt: "Producto gráfico 6",
    },
    {
      src: "/hero/image-hero-7.jpg",
      alt: "Producto gráfico 7",
    },
    {
      src: "/hero/image-hero-8.jpg",
      alt: "Producto gráfico 8",
    },
    {
      src: "/hero/image-hero-9.jpg",
      alt: "Producto gráfico 9",
    },
    {
      src: "/hero/image-hero-10.jpg",
      alt: "Producto gráfico 10",
    },
    {
      src: "/hero/image-hero-11.jpg",
      alt: "Producto gráfico 11",
    },
    {
      src: "/hero/image-hero-12.jpg",
      alt: "Producto gráfico 12",
    },
    {
      src: "/hero/image-hero-13.jpg",
      alt: "Producto gráfico 13",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col pt-[140px] md:pt-[160px]">
      <section className="relative w-full h-[65vh] max-lg:h-[80vh]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 px-4 md:px-6 items-center">
          <div className="space-y-6 max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight">
              La <span className="text-primary">Calidad</span> que tu
              <br />
              Empresa Merece
            </h1>
            <p className="text-base md:text-2xl font-light tracking-tight">
              Brindando Soluciones Gráficas para Empresas desde 1998
            </p>
            <Link href="/#contact">
              <Button
                variant="default"
                size="lg"
                className="mt-4 bg-primary hover:bg-primary/90 cursor-pointer group"
              >
                Contactar Asesor Comercial
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>

          <div className="relative h-[500px] w-full max-md:h-[400px]">
            <Carousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* Banner de Instagram */}
      <EnviosBanner />
      <InstagramBanner />
      <RecentWorks />
      {/* <LegislaturaBanner /> */}
      <Features />
      {/* <CertificacionBanner /> */}
      <Services />
      <InstructivoBanner />
      <CTASection />
      <Contact />
    </main>
  )
}
