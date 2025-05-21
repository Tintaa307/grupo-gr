"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Features() {
  const router = useRouter()
  return (
    <section id="services" className="w-full mt-8 sm:mt-12">
      {/* Impresión Offset */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Imagen izquierda */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/services/services-2.jpg"
            alt="Impresión offset - materiales impresos"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Texto derecha */}
        <div className="bg-primary text-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            IMPRESIÓN OFFSET
          </h2>
          <div className="space-y-2 sm:space-y-4 text-sm sm:text-base">
            <p>Impresiones de hasta 70x100cm.</p>
            <p>cuatricromía, colores especiales y barniz.</p>
            <p>
              Contamos con la más alta tecnología y control de calidad para que
              sus piezas gráficas sean nuestra carta presentación.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <Link href="/offset-digital" className="flex items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="text-white hover:text-white bg-transparent hover:bg-transparent group cursor-pointer rounded-full text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6"
              >
                MÁS INFO{" "}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-200 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Impresión Digital */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Texto izquierda */}
        <div className="bg-[#141414] text-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            IMPRESIÓN DIGITAL
          </h2>
          <div className="space-y-2 sm:space-y-4 text-sm sm:text-base">
            <p>Ideal para pequeñas cantidades y trabajos urgentes.</p>
            <p>Alta velocidad de impresión sin chapa.</p>
          </div>
          <div className="mt-6 sm:mt-8">
            <Link href="/offset-digital" className="flex items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="text-white hover:text-white bg-transparent hover:bg-transparent group cursor-pointer rounded-full text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6"
              >
                MÁS INFO{" "}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-200 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] order-1 md:order-2">
          <Image
            src="/services/services-1.jpg"
            alt="Impresión digital - impresora profesional"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
