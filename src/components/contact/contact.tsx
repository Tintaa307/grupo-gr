"use client"

import type React from "react"

import { useState } from "react"
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
import { sendEmail } from "@/actions/email-action"
import { toast } from "sonner"
import { ZodError } from "zod"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    enterprise: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await sendEmail(formData)

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
    }
  }

  return (
    <section id="contact" className="w-full mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Imagen de la imprenta */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/contact-image.jpg"
            alt="Máquina de impresión offset"
            fill
            className="object-cover"
          />
        </div>

        {/* Información de la imprenta */}
        <div className="bg-primary text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">La Imprenta</h2>
          <p className="text-lg leading-relaxed">
            Trabajamos con tecnología de última generación y un grupo humano
            calificado para hacer de la calidad, el trato comercial y el
            asesoramiento, valores distintivos que nos llenan de orgullo y hacen
            que nuestros clientes confíen en nosotros diariamente por más de 20
            años.
          </p>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="bg-white shadow-lg mx-auto -mt-10 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8">
          {/* Información de contacto */}
          <div className="border-r border-gray-200 pr-8">
            <h3 className="text-xl font-medium text-gray-800">
              Grupo Galleries Review SRL
            </h3>
            <div className="border-b border-dashed border-gray-300 mt-2 mb-8"></div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-blue-400">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Dirección</h4>
                  <p className="text-gray-600">
                    José C. Paz 2969, Distrito Tecnológico, Parque Patricios |
                    CABA, Argentina
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start space-x-4">
                <div className="text-blue-400">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Nueva Línea (Llamada / chat)
                  </h4>
                  <p className="text-gray-600">15 31064837</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start space-x-4">
                <div className="text-blue-400">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">info@grupogr.com.ar</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-800">Seguinos en Redes</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com/grupogalleries"
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                  >
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </Link>
                  <Link
                    href="https://instagram.com/grupogalleries"
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                  >
                    <Instagram className="w-4 h-4 text-gray-600" />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/grupogalleries"
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="pl-8 pt-4 md:pt-0">
            <h3 className="text-xl font-medium text-gray-800">Contacto</h3>
            <div className="border-b border-dashed border-gray-300 mt-2 mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm text-gray-800 mb-1"
                  >
                    Nombre / Apellido
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Escriba su Nombre"
                    className="w-full border border-gray-300 p-2 text-gray-700"
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
                    name="empresa"
                    value={formData.enterprise}
                    onChange={handleChange}
                    placeholder="Escriba su Apellido"
                    className="w-full border border-gray-300 p-2 text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Escriba su Email"
                    className="w-full border border-gray-300 p-2 text-gray-700"
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
                    name="telefono"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Escriba su Teléfono"
                    className="w-full border border-gray-300 p-2 text-gray-700"
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
                  name="mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escriba su mensaje"
                  rows={6}
                  className="w-full border border-gray-300 p-2 text-gray-700"
                  required
                />
              </div>

              <div>
                <Button
                  type="submit"
                  size={"lg"}
                  className="px-6 py-2 rounded-none border bg-transparent cursor-pointer hover:text-green-500 border-green-400 text-green-500 hover:bg-green-50 transition-colors"
                >
                  ENVIAR MENSAJE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
