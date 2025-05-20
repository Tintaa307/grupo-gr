"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function BudgetForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    localidad: "",
    tipoTrabajo: "",
    fechaEntrega: null as Date | null,
    incluyeEntrega: "",
    mensaje: "",
  })

  const [date, setDate] = useState<Date | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setDate(date || null)
    setFormData((prev) => ({ ...prev, fechaEntrega: date || null }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert(
      "Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad."
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm text-gray-800 mb-1">
            Nombre / Apellido
          </label>
          <input
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Escriba su Nombre"
            className="w-full border border-gray-300 p-2 text-gray-700"
            required
          />
        </div>
        <div>
          <label htmlFor="empresa" className="block text-sm text-gray-800 mb-1">
            Empresa / Razón Social
          </label>
          <input
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Escriba su Apellido"
            className="w-full border border-gray-300 p-2 text-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm text-gray-800 mb-1">
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
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Escriba su Teléfono"
            className="w-full border border-gray-300 p-2 text-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="localidad"
            className="block text-sm text-gray-800 mb-1"
          >
            Localidad
          </label>
          <input
            id="localidad"
            name="localidad"
            value={formData.localidad}
            onChange={handleChange}
            placeholder="Localidad"
            className="w-full border border-gray-300 p-2 text-gray-700"
          />
        </div>
        <div>
          <label
            htmlFor="tipoTrabajo"
            className="block text-sm text-gray-800 mb-1"
          >
            Tipo de trabajo{" "}
            <span className="text-xs text-green-600">
              (Instructivo p/ Archivos)
            </span>
          </label>
          <Select
            onValueChange={(value) => handleSelectChange("tipoTrabajo", value)}
          >
            <SelectTrigger className="w-full border border-gray-300 p-2 text-gray-700 h-[38px]">
              <SelectValue placeholder="—Por favor, elegí una opción—" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="offset">Impresión Offset</SelectItem>
              <SelectItem value="digital">Impresión Digital</SelectItem>
              <SelectItem value="gran-formato">Gran Formato</SelectItem>
              <SelectItem value="packaging">Packaging</SelectItem>
              <SelectItem value="diseno">Diseño Gráfico</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fechaEntrega"
            className="block text-sm text-gray-800 mb-1"
          >
            Fecha de Entrega
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal border border-gray-300 p-2 text-gray-700 h-[38px]"
              >
                {date
                  ? format(date, "dd/MM/yyyy", { locale: es })
                  : "dd/mm/aaaa"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date || undefined}
                onSelect={handleDateChange}
                initialFocus
                locale={es}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <label
            htmlFor="incluyeEntrega"
            className="block text-sm text-gray-800 mb-1"
          >
            Incluye Entrega?
          </label>
          <Select
            onValueChange={(value) =>
              handleSelectChange("incluyeEntrega", value)
            }
          >
            <SelectTrigger className="w-full border border-gray-300 p-2 text-gray-700 h-[38px]">
              <SelectValue placeholder="Sí, quiero que lo envíen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="si">Sí, quiero que lo envíen</SelectItem>
              <SelectItem value="no">No, lo retiro personalmente</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm text-gray-800 mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escriba su mensaje detallando: Cantidad de ejemplares, Tipo de Papel/Gramaje, Cantidad de Colores"
          rows={6}
          className="w-full border border-gray-300 p-2 text-gray-700"
          required
        />
      </div>

      <div>
        <Button
          type="submit"
          size={"lg"}
          className="px-6 py-2 border bg-transparent rounded-none border-green-400 text-green-500 hover:bg-green-50 transition-colors cursor-pointer"
        >
          ENVIAR MENSAJE
        </Button>
      </div>
    </form>
  )
}
