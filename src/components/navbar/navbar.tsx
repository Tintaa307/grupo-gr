"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calculator, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
      className={`w-full bg-white py-4 border-b fixed top-8 left-0 z-40 transition-all duration-300 ${
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
        <nav className="hidden md:flex items-center space-x-8">
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
        <div className="hidden md:block">
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
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-primary font-normal transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
              <Link href={"/budget"}>
                <Button
                  variant="default"
                  className="mt-4 bg-primary hover:bg-primary/90 w-full cursor-pointer"
                >
                  <Calculator className="h-4 w-4 mr-2" />
                  Pedir Cotización
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
