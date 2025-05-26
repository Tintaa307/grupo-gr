"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import { Separator } from "../ui/separator"
import { sendEmailAction } from "@/actions/email-action"
import { toast } from "sonner"
import { ZodError } from "zod"
import { useState } from "react"

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const name = formData.get("name")
      const enterprise = formData.get("enterprise")
      const email = formData.get("email")
      const phone = formData.get("phone")
      const message = formData.get("message")

      const values = {
        name: name as string,
        enterprise: enterprise as string,
        email: email as string,
        phone: phone as string,
        message: message as string,
      }

      const response = await sendEmailAction(values)

      if (response.error instanceof ZodError) {
        console.log(response.error)
        return
      }

      if (response.error) {
        toast.error(response.error as string)
        return
      }

      toast.success(response.success)
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error)
      }
      toast.error("Error al enviar el mensaje")
      return
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full mb-6 sm:mb-10">
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
          <p className="sm:text-lg leading-relaxed max-lg:text-sm max-md:mb-12">
            Trabajamos con tecnología de última generación y un grupo humano
            calificado para hacer de la calidad, el trato comercial y el
            asesoramiento, valores distintivos que nos llenan de orgullo y hacen
            que nuestros clientes confíen en nosotros diariamente por más de 20
            años.
          </p>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="bg-white shadow-lg mx-auto -mt-6 sm:-mt-10 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 sm:p-8">
          {/* Información de contacto */}
          <div className="md:border-r border-gray-200 md:pr-6 lg:pr-8 mb-8 md:mb-0">
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
                  <Link
                    href="https://wa.me/541131064837"
                    target="_blank"
                    className="text-gray-600 text-sm sm:text-base underline"
                  >
                    15 31064837
                  </Link>
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
          </div>

          {/* Formulario */}
          <div className="md:pl-6 lg:pl-8 pt-0">
            <h3 className="text-lg sm:text-xl font-medium text-gray-800">
              Contacto
            </h3>
            <div className="border-b border-dashed border-gray-300 mt-2 mb-6 sm:mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm text-gray-800 mb-1"
                  >
                    Nombre / Apellido
                  </label>
                  <input
                    id="nombre"
                    name="name"
                    placeholder="Escriba su Nombre"
                    className="w-full border border-gray-300 p-2 text-gray-700 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm text-gray-800 mb-1"
                  >
                    Empresa / Razón Social
                  </label>
                  <input
                    id="empresa"
                    name="enterprise"
                    placeholder="Escriba su Apellido"
                    className="w-full border border-gray-300 p-2 text-gray-700 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-800 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Escriba su Email"
                    className="w-full border border-gray-300 p-2 text-gray-700 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm text-gray-800 mb-1"
                  >
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="phone"
                    placeholder="Escriba su Teléfono"
                    className="w-full border border-gray-300 p-2 text-gray-700 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm text-gray-800 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="message"
                  placeholder="Escriba su mensaje"
                  rows={6}
                  className="w-full border border-gray-300 p-2 text-gray-700 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <Button
                  type="submit"
                  size={"lg"}
                  className="px-4 sm:px-6 py-2 rounded-none border bg-transparent cursor-pointer hover:text-green-500 border-green-400 text-green-500 hover:bg-green-50 transition-colors text-sm sm:text-base"
                >
                  {isLoading ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
