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
import { BudgetForm as BudgetFormType } from "@/types/types"
import { sendBudgetEmailAction } from "@/actions/email-action"
import { toast } from "sonner"

export function BudgetForm() {
  const [date, setDate] = useState<Date | null>(null)
  const [formData, setFormData] = useState<BudgetFormType>({
    name: "",
    enterprise: "",
    email: "",
    phone: "",
    locality: "",
    type_work: "",
    delivery_date: date || null,
    include_delivery: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)

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
    setFormData((prev) => ({ ...prev, delivery_date: date || null }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await sendBudgetEmailAction(formData)

      toast.success("Email enviado con éxito!")
    } catch (error) {
      console.error(error)
      toast.error("Error al enviar el email")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-800 mb-1">
            Nombre / Apellido
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escriba su Nombre"
            className="w-full border border-gray-300 p-2 text-gray-700"
            required
          />
        </div>
        <div>
          <label
            htmlFor="enterprise"
            className="block text-sm text-gray-800 mb-1"
          >
            Empresa / Razón Social
          </label>
          <input
            id="enterprise"
            name="enterprise"
            value={formData.enterprise}
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
          <label htmlFor="phone" className="block text-sm text-gray-800 mb-1">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Escriba su Teléfono"
            className="w-full border border-gray-300 p-2 text-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="locality"
            className="block text-sm text-gray-800 mb-1"
          >
            Localidad
          </label>
          <input
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            placeholder="Localidad"
            className="w-full border border-gray-300 p-2 text-gray-700"
          />
        </div>
        <div>
          <label
            htmlFor="type_work"
            className="block text-sm text-gray-800 mb-1"
          >
            Tipo de trabajo{" "}
            <span className="text-xs text-green-600">
              (Instructivo p/ Archivos)
            </span>
          </label>
          <Select
            onValueChange={(value) => handleSelectChange("type_work", value)}
          >
            <SelectTrigger className="w-full border border-gray-300 p-2 text-gray-700 h-[38px]">
              <SelectValue placeholder="—Por favor, elegí una opción—" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Impresión Offset">Impresión Offset</SelectItem>
              <SelectItem value="Impresión Digital">
                Impresión Digital
              </SelectItem>
              <SelectItem value="Gran Formato">Gran Formato</SelectItem>
              <SelectItem value="Packaging">Packaging</SelectItem>
              <SelectItem value="Diseño Gráfico">Diseño Gráfico</SelectItem>
              <SelectItem value="Otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="delivery_date"
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
            htmlFor="include_delivery"
            className="block text-sm text-gray-800 mb-1"
          >
            Incluye Entrega?
          </label>
          <Select
            onValueChange={(value) =>
              handleSelectChange("include_delivery", value)
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
        <label htmlFor="message" className="block text-sm text-gray-800 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
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
          {isLoading ? "Enviando..." : "ENVIAR MENSAJE"}
        </Button>
      </div>
    </form>
  )
}
