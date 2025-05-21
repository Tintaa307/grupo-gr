"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calculator,
  Instagram,
  Mail,
  Menu,
  MessageSquare,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    {
      label: "La imprenta",
      href: "/",
    },
    {
      label: "Productos",
      href: "/#products",
    },
    {
      label: "Offset / Digital",
      href: "/offset-digital",
    },
    {
      label: "Servicios",
      href: "/#services",
    },
    {
      label: "Contacto",
      href: "/#contact",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`w-full bg-white py-4 border-b fixed top-8 left-0 z-40 transition-all duration-300 max-md:top-0 ${
        scrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            className={`relative transition-all duration-300 ${
              scrolled ? "h-12 w-48" : "h-16 w-64"
            }`}
          >
            <Image
              src="/logo-grupo-gr.png"
              alt="Grupo Galleries - Compañía Gráfica"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navegación para desktop */}
        <nav className="max-lg:hidden flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black hover:text-primary font-normal transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón de presupuestos */}
        <div className="max-lg:hidden block">
          <Link href={"/budget"}>
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 cursor-pointer"
            >
              <Calculator className="h-4 w-4 mr-2" />
              Pedir Cotización
            </Button>
          </Link>
        </div>

        {/* Menú móvil */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[350px] overflow-y-auto px-4"
          >
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left">Menú</SheetTitle>
            </SheetHeader>

            {/* Contact Bar en móvil */}
            <div className="mb-8 border-b pb-6">
              <h3 className="font-medium text-gray-800 mb-4">Contacto</h3>
              <div className="flex flex-col space-y-4">
                <Link
                  href="tel:1131064837"
                  className="text-blue-500 hover:underline flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" /> 11 3106-4837
                </Link>
                <Link
                  href="tel:0114912-1045"
                  className="text-blue-500 hover:underline flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" /> 011 4912-1045
                </Link>
                <Link
                  href="https://wa.me/1131093621"
                  className="text-blue-500 hover:underline flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" /> 11 3109-3621
                </Link>
                <Link
                  href="mailto:info@grupogalleries.com"
                  className="text-blue-500 hover:underline flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" /> info@grupogalleries.com
                </Link>
                <Link
                  href="https://instagram.com/grupogalleries"
                  className="text-blue-500 hover:underline flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" /> @grupogalleries
                </Link>
              </div>
            </div>

            {/* Navegación móvil */}
            <nav className="flex flex-col space-y-1">
              <Link
                href="/la-imprenta"
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 py-3 px-2 rounded-md transition-colors"
              >
                La imprenta
              </Link>
              <Link
                href="/productos"
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 py-3 px-2 rounded-md transition-colors"
              >
                Productos
              </Link>
              <Link
                href="/offset-digital"
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 py-3 px-2 rounded-md transition-colors"
              >
                Offset / Digital
              </Link>
              <Link
                href="/servicios"
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 py-3 px-2 rounded-md transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="/budget"
                className="text-gray-700 hover:text-blue-500 hover:bg-gray-100 py-3 px-2 rounded-md transition-colors"
              >
                Presupuestos
              </Link>
            </nav>

            <div className="mt-8">
              <Button
                variant="default"
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Pedir Cotización
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
