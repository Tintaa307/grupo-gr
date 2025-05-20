"use client"

import Image from "next/image"

interface Trabajo {
  id: number
  titulo: string
  imagen: string
  descripcion: string
  categoria: string
}

export function RecentWorks() {
  const trabajos: Trabajo[] = [
    {
      id: 1,
      titulo: "Bolsas personalizadas",
      imagen: "/products/producto-1.jpg",
      descripcion:
        "Bolsas de papel con diseño personalizado para marca de ropa",
      categoria: "Packaging",
    },
    {
      id: 2,
      titulo: "Stumpy Coffee Point",
      imagen: "/products/producto-2.jpg",
      descripcion:
        "Packaging completo para cafetería incluyendo cajas y vasos personalizados",
      categoria: "Branding",
    },
    {
      id: 3,
      titulo: "Cajas premium",
      imagen: "/products/producto-3.jpg",
      descripcion: "Cajas con diseño de naturaleza para productos exclusivos",
      categoria: "Packaging",
    },
    {
      id: 4,
      titulo: "Tarjetas corporativas",
      imagen: "/products/producto-4.jpg",
      descripcion: "Tarjetas corporativas con acabado premium en negro",
      categoria: "Papelería",
    },
    {
      id: 5,
      titulo: "Calendario personalizado",
      imagen: "/products/producto-5.jpg",
      descripcion:
        "Calendario con impresión de alta calidad y múltiples fotografías",
      categoria: "Calendarios",
    },
    {
      id: 6,
      titulo: "Etiquetas adhesivas",
      imagen: "/products/producto-6.jpg",
      descripcion: "Etiquetas adhesivas troqueladas para productos gourmet",
      categoria: "Etiquetas",
    },
    {
      id: 7,
      titulo: "Don Julio",
      imagen: "/products/producto-7.jpg",
      descripcion: "Bolsas de papel kraft con impresión para vinoteca premium",
      categoria: "Packaging",
    },
    {
      id: 8,
      titulo: "Papel de regalo SBS",
      imagen: "/products/producto-8.jpg",
      descripcion: "Papel de regalo personalizado con diseños exclusivos",
      categoria: "Papelería",
    },
    {
      id: 9,
      titulo: "Honest Food Co.",
      imagen: "/products/producto-9.jpg",
      descripcion:
        "Bolsas de papel kraft con impresión para restaurante de comida saludable",
      categoria: "Packaging",
    },
    {
      id: 10,
      titulo: "Jackie Smith",
      imagen: "/products/producto-10.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 11,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-11.jpg",
      descripcion:
        "Etiquetas colgantes para ropa infantil con diseño exclusivo",
      categoria: "Etiquetas",
    },
    {
      id: 12,
      titulo: "Sushi Sushi",
      imagen: "/products/producto-12.jpg",
      descripcion:
        "Packaging para delivery de comida japonesa con diseño personalizado",
      categoria: "Packaging",
    },
    {
      id: 13,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-13.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 15,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-15.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 16,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-16.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 17,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-17.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 18,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-18.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 19,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-19.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 20,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-20.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 21,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-21.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 22,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-22.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 23,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-23.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
    {
      id: 24,
      titulo: "Santa Bohemia Kids",
      imagen: "/products/producto-24.jpg",
      descripcion: "Packaging premium en color rosa para marca de accesorios",
      categoria: "Packaging",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 text-black">
          Algunos de nuestros trabajos más recientes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trabajos.map((trabajo) => (
            <div
              key={trabajo.id}
              className="relative h-64 cursor-pointer overflow-hidden group"
            >
              <Image
                src={trabajo.imagen || "/placeholder.svg"}
                alt={trabajo.titulo}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <h3 className="font-bold">{trabajo.titulo}</h3>
                  <p className="text-sm">{trabajo.categoria}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
