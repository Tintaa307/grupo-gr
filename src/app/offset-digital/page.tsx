import { OffsetCarousel } from "@/components/offset-carousel/offset-carousel"
import Image from "next/image"

export default function OffsetDigitalPage() {
  const list1 = [
    "• Cajas",
    "• Etiquetas",
    "• Packaging",
    "• Revistas",
    "• Bolsas Papel",
    "• Catálogos",
    "• Brochures",
    "• Manuales Producto",
    "• Folletos",
    "• Afiches",
    "• Carpetas",
    "• Soportes Productos",
    "• Exhibidores",
    "• Displays",
  ]

  const list2 = [
    "• Tacos",
    "• Stickers",
    "• Sobres",
    "• Block de Hojas",
    "• Tarjetones",
    "• Dípticos",
    "• Trípticos",
    "• Tarjetas",
    "• Cuadernos",
    "• Agendas",
  ]

  const list3 = [
    "• Polietileno Mate/Brillante",
    "• Polipropileno Mate/Brillante",
    "• Barnizados",
    "• Cuño Seco / Termorelieve",
    "• Laca UV",
    "• Hot Stamping (Oro, plata, colores holográficos, tornasoles, etc",
    "• Anillados Ring Wire",
    "• Encuadernación PUR/Binder",
    "• Encuadernación Acaballada",
    "• Soft Touch (Aterciopelado)",
  ]

  const list4 = [
    "• Poliester plata, oro, holográficos y colores",
    "• Barnizado uv pleno.",
    "• Barnizado uv sectorizado: Glitter, Texturizados, Volumétricos, Impresiones Removibles (raspadita)",
  ]

  // Imágenes para el carrusel de productos
  const productImages = [
    {
      src: "/offset-digital/carousel/image-1.png",
      alt: "Folletos impresos con diseño azul",
    },
    {
      src: "/offset-digital/carousel/image-2.png",
      alt: "Tarjeta de presentación inmobiliaria",
    },
    {
      src: "/offset-digital/carousel/image-3.png",
      alt: "Catálogo de moda con fotografías",
    },
    {
      src: "/offset-digital/carousel/image-4.png",
      alt: "Impresiones de alta calidad",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col pt-[140px] md:pt-[160px] pb-16">
      <div className="w-full mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase font-medium tracking-wider text-black mb-2">
            GRUPO GALLERIES COMPAÑÍA GRÁFICA
          </p>
          <h1 className="text-4xl md:text-5xl font-extralight text-black">
            IMPRESIÓN OFFSET
          </h1>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/offset-digital/image-1.jpg"
              alt="Máquina de impresión offset - detalle de rodillos"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/offset-digital/image-2.jpg"
              alt="Máquina de impresión offset - imprimiendo material"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/offset-digital/image-3.jpg"
              alt="Heidelberg Speedmaster - detalle de máquina"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full bg-[#24b47e] text-white py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="max-w-4xl col-span-1 md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-extralight text-center mb-10">
                  IMPRESIÓN
                </h2>
                <p className="mb-8 text-left">
                  Contamos con diferentes máquinas planas y rotativas de
                  múltiples formatos para adaptarnos a cada necesidad,
                  obteniendo un resultado profesional con un tiempo de respuesta
                  acorde a las necesidades del mercado actual. Imprimimos
                  cualquier tipo de pieza en Offset tradicional, en todo tipo de
                  Cartulinas, Papeles y Papeles Especiales con terminaciones a
                  gran escala.
                </p>

                <p className="text-left">
                  Todos los trabajos pueden tener una amplia gama de
                  terminaciones: troquelados, laminados, encuadernados, trazados
                  o laqueados.
                </p>
              </div>

              <div className="col-span-1">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <ul className="space-y-2">
                      {list1.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {list2.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#333333] text-white py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extralight text-center mb-10">
                  POST-IMPRESIÓN
                </h2>
                <p className="mb-6">
                  Para explotar al máximo la creatividad de nuestros clientes y
                  entregar las mejores piezas gráficas ofrecemos la mayor
                  variedad de acabados para sus necesidades. Realizamos todo
                  tipo de troquelados y montajes, y contamos con encuadernación
                  propia una terminación profesional de los trabajos
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-3">Acabados:</h3>
                <ul className="space-y-2 mb-6">
                  {list3.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3 className="font-medium mb-3">Acabados especiales:</h3>
                <ul className="space-y-2">
                  {list4.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 bg-white">
          <div className="w-full mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-wider text-black mb-2">
                GRUPO GALLERIES COMPAÑÍA GRÁFICA
              </p>
              <h2 className="text-3xl md:text-4xl font-extralight text-black">
                OFFSET DIGITAL
              </h2>
            </div>

            <OffsetCarousel images={productImages} />
          </div>
        </div>
      </div>
    </main>
  )
}
