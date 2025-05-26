"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
}

interface CarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
}

export function Carousel({ images, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  // Configurar el autoplay
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  // Si no hay imágenes, mostrar un placeholder
  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <p>No hay imágenes disponibles</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {/* Botones de navegación */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <Button
          onClick={goToPrevious}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/70 hover:bg-white shadow-md"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <Button
          onClick={goToNext}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/70 hover:bg-white shadow-md"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Imagen actual */}
      <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
        <div
          className="w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex h-full">
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-center object-fit"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
