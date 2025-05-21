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
    <main className="flex min-h-screen flex-col pt-[120px] sm:pt-[130px] md:pt-[160px] pb-8 sm:pb-12 md:pb-16">
      <div className="w-full mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-xs sm:text-sm uppercase font-medium tracking-wider text-black mb-1 sm:mb-2">
            GRUPO GALLERIES COMPAÑÍA GRÁFICA
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-black">
            IMPRESIÓN OFFSET
          </h1>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
            <Image
              src="/offset-digital/image-1.jpg"
              alt="Máquina de impresión offset - detalle de rodillos"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
            <Image
              src="/offset-digital/image-2.jpg"
              alt="Máquina de impresión offset - imprimiendo material"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] sm:col-span-2 md:col-span-1">
            <Image
              src="/offset-digital/image-3.jpg"
              alt="Heidelberg Speedmaster - detalle de máquina"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="w-full bg-[#24b47e] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 mb-6 sm:mb-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="max-w-4xl col-span-1 md:col-span-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-6 sm:mb-8 md:mb-10">
                  IMPRESIÓN
                </h2>
                <p className="mb-4 sm:mb-6 md:mb-8 text-left text-sm sm:text-base">
                  Contamos con diferentes máquinas planas y rotativas de
                  múltiples formatos para adaptarnos a cada necesidad,
                  obteniendo un resultado profesional con un tiempo de respuesta
                  acorde a las necesidades del mercado actual. Imprimimos
                  cualquier tipo de pieza en Offset tradicional, en todo tipo de
                  Cartulinas, Papeles y Papeles Especiales con terminaciones a
                  gran escala.
                </p>

                <p className="text-left text-sm sm:text-base">
                  Todos los trabajos pueden tener una amplia gama de
                  terminaciones: troquelados, laminados, encuadernados, trazados
                  o laqueados.
                </p>
              </div>

              <div className="col-span-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2">
                  <div>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      {list1.slice(0, 7).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      {list2.slice(0, 7).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="sm:col-span-2 mt-4">
                    <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-2 text-xs sm:text-sm">
                      {[...list1.slice(7), ...list2.slice(7)].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#333333] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 mb-6 sm:mb-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-6 sm:mb-8 md:mb-10">
                  POST-IMPRESIÓN
                </h2>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                  Para explotar al máximo la creatividad de nuestros clientes y
                  entregar las mejores piezas gráficas ofrecemos la mayor
                  variedad de acabados para sus necesidades. Realizamos todo
                  tipo de troquelados y montajes, y contamos con encuadernación
                  propia una terminación profesional de los trabajos
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Acabados:
                </h3>
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                  {list3.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Acabados especiales:
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {list4.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="w-full mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-black mb-1 sm:mb-2">
                GRUPO GALLERIES COMPAÑÍA GRÁFICA
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-black">
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
