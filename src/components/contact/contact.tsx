import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Separator } from "../ui/separator"

export function Contact() {
  return (
    <section className="w-full mb-6 sm:mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Imagen de la imprenta */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/contact-image.jpg"
            alt="Máquina de impresión offset"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Información de la imprenta */}
        <div className="bg-primary text-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            La Imprenta
          </h2>
          <p
            id="contact"
            className="sm:text-lg leading-relaxed max-lg:text-sm max-md:mb-12"
          >
            Trabajamos con tecnología de última generación y un grupo humano
            calificado para hacer de la calidad, el trato comercial y el
            asesoramiento, valores distintivos que nos llenan de orgullo y hacen
            que nuestros clientes confíen en nosotros diariamente por más de 20
            años.
          </p>
        </div>
      </div>

      {/* Información de contacto */}
      <div className="bg-white shadow-lg mx-auto -mt-6 sm:-mt-10 relative z-10 max-w-2xl">
        <div className="p-5 sm:p-8">
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-800">
              Grupo Galleries Review SRL
            </h3>
            <div className="border-b border-dashed border-gray-300 mt-2 mb-6 sm:mb-8"></div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-blue-400 flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Dirección</h4>
                  <Link
                    href="https://www.google.com/maps?ll=-34.643754,-58.403699&z=16&t=m&hl=es&gl=AR&mapclient=embed&q=José+C.+Paz+2969+C1437IQA+Cdad.+Autónoma+de+Buenos+Aires"
                    target="_blank"
                    className="text-gray-600 text-sm sm:text-base underline"
                  >
                    José C. Paz 2969, Distrito Tecnológico, Parque Patricios |
                    CABA, Argentina
                  </Link>
                </div>
              </div>

              <Separator className="sm:hidden" />

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-blue-400 flex-shrink-0">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Nueva Línea (Llamada / chat)
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="https://wa.me/541128079238"
                      target="_blank"
                      className="text-gray-600 text-sm sm:text-base underline"
                    >
                      11 2807 9238
                    </Link>
                  </div>
                </div>
              </div>

              <Separator className="sm:hidden" />

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-blue-400 flex-shrink-0">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <Link
                    href="mailto:info@grupogr.com.ar"
                    target="_blank"
                    className="text-gray-600 text-sm sm:text-base underline"
                  >
                    info@grupogr.com.ar
                  </Link>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-medium text-gray-800">Seguinos en Redes</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <Link
                    href="https://facebook.com/grupogalleries"
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </Link>
                  <Link
                    href="https://instagram.com/grupogalleries"
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-gray-600" />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/grupogalleries"
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link href="/budget" className="block">
                <Button
                  size="lg"
                  className="w-full py-6 text-base sm:text-lg bg-primary hover:bg-primary/90 cursor-pointer group"
                >
                  Solicitar Presupuesto
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
