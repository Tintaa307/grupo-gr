import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Features() {
  return (
    <section className="w-full mt-12">
      {/* Impresión Offset */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Imagen izquierda */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/services/services-2.jpg"
            alt="Impresión offset - materiales impresos"
            fill
            className="object-cover"
          />
        </div>

        {/* Texto derecha */}
        <div className="bg-primary text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            IMPRESIÓN OFFSET
          </h2>
          <div className="space-y-4">
            <p>Impresiones de hasta 70x100cm.</p>
            <p>cuatricromía, colores especiales y barniz.</p>
            <p>
              Contamos con la más alta tecnología y control de calidad para que
              sus piezas gráficas sean nuestra carta presentación.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/servicios/digital" className="flex items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="text-white hover:text-white bg-transparent hover:bg-transparent group cursor-pointer rounded-full"
              >
                MÁS INFO{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Impresión Digital */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Texto izquierda */}
        <div className="bg-[#141414] text-white p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            IMPRESIÓN DIGITAL
          </h2>
          <div className="space-y-4">
            <p>Ideal para pequeñas cantidades y trabajos urgentes.</p>
            <p>Alta velocidad de impresión sin chapa.</p>
          </div>
          <div className="mt-8">
            <Link href="/servicios/digital" className="flex items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="text-white hover:text-white bg-transparent hover:bg-transparent group cursor-pointer rounded-full"
              >
                MÁS INFO{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="relative h-[400px] md:h-[500px] order-1 md:order-2">
          <Image
            src="/services/services-1.jpg"
            alt="Impresión digital - impresora profesional"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
