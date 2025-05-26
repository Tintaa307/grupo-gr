import type React from "react"
import { Pencil, FileImage, Eye, Droplet, Star, Truck } from "lucide-react"

interface ServicioProps {
  icono: React.ReactNode
  titulo: string
  descripcion: string
}

function Servicio({ icono, titulo, descripcion }: ServicioProps) {
  return (
    <div className="flex gap-4 mb-12">
      <div className="flex-shrink-0 text-blue-500 mt-1">
        <div className="w-8 h-8">{icono}</div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{titulo}</h3>
        <p className="text-gray-600 leading-relaxed">{descripcion}</p>
      </div>
    </div>
  )
}

export function Services() {
  const servicios = [
    {
      icono: <Pencil className="w-8 h-8" />,
      titulo: "Diseño Gráfico",
      descripcion:
        "Desarrollo de piezas de comunicación con gran impacto visual para cumplir los objetivos comerciales de nuestros clientes y dar una imagen profesional.",
    },
    {
      icono: <FileImage className="w-8 h-8" />,
      titulo: "Impresión digital",
      descripcion:
        "Ideal para pequeñas cantidades y trabajos urgentes. Alta velocidad de impresión sin chapas.",
    },
    {
      icono: <Eye className="w-8 h-8" />,
      titulo: "Pre-Prensa",
      descripcion:
        "Tenemos un gran compromiso con nuestros trabajos, revisamos los originales con criterio, confirmamos con el cliente y recién después procedemos al copiado de chapas mediante nuestro CTP para obtener el resultado deseado.",
    },
    {
      icono: <Droplet className="w-8 h-8" />,
      titulo: "Impresión Offset",
      descripcion:
        "Impresiones de hasta 70x100cm, cuatricromía, colores especiales y barniz. Contamos con la más alta tecnología y control de calidad para que sus piezas gráficas sean nuestra carta presentación.",
    },
    {
      icono: <Star className="w-8 h-8" />,
      titulo: "Post impresión:",
      descripcion:
        "En esta etapa le damos terminación a los trabajos de diferentes maneras, según el requerimiento del cliente. Trabajo manual, troquelados, laminados, encuadernación (binder, pur, acaballado, cosido a hilo), guillotinado, doblado, trazados.",
    },
    {
      icono: <Truck className="w-8 h-8" />,
      titulo: "Logística",
      descripcion:
        "En caso de solicitarlo, podemos encargarnos del transporte y la distribución de los trabajos realizados hacia todo el país.",
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-green-600 text-lg font-medium mb-4">Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-extralight text-black mb-2">
            Somos una empresa gráfica integral.
          </h3>
          <p className="text-3xl md:text-4xl font-extralight text-black">
            Te asistimos en cada etapa del proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {servicios.map((servicio, index) => (
            <Servicio
              key={index}
              icono={servicio.icono}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
