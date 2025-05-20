import { Carousel } from "@/components/carousel/carousel"
import { CertificacionBanner } from "@/components/certificacion-banner/certificacion-banner"
import { EnviosBanner } from "@/components/envios-banner/envios-banner"
import { InstagramBanner } from "@/components/instagram-banner/instagram-banner"
import { Services } from "@/components/services/services"
import { LegislaturaBanner } from "@/components/legislatura-banner/lesgislatura-banner"
import { RecentWorks } from "@/components/recent-works/recent-works"
import { Features } from "@/components/features/features"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { InstructivoBanner } from "@/components/instructivo-banner/instructivo-banner"
import { CTASection } from "@/components/cta-section/cta-section"
import { Contact } from "@/components/contact/contact"

export default function Home() {
  const carouselImages = [
    {
      src: "/products/producto-1.jpg",
      alt: "Producto gráfico 1",
    },
    {
      src: "/products/producto-2.jpg",
      alt: "Producto gráfico 2",
    },
    {
      src: "/products/producto-3.jpg",
      alt: "Producto gráfico 3",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col pt-[140px] md:pt-[160px]">
      <section className="relative w-full h-[65vh]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-6 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              La <span className="text-primary">calidad</span> que tu
              <br />
              empresa se merece
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-tight">
              Brindando Soluciones Gráficas para Empresas desde 1998
            </p>
            <Button
              variant="default"
              size="lg"
              className="mt-4 bg-primary hover:bg-primary/90 cursor-pointer group"
            >
              Contactar Asesor Comercial
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          <div className="relative h-[400px] w-full">
            <Carousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* Banner de Instagram */}
      <EnviosBanner />
      <InstagramBanner />
      <LegislaturaBanner />
      <Features />
      <RecentWorks />
      <CertificacionBanner />
      <Services />
      <InstructivoBanner />
      <CTASection />
      <Contact />
    </main>
  )
}
