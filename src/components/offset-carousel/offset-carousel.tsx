"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
  src: string
  alt: string
}

interface ProductCarouselProps {
  images: CarouselImage[]
}

export function OffsetCarousel({ images }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayInterval = 5000

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  // Pausar el autoplay cuando el usuario interactúa con el carrusel
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    // Reiniciar el autoplay después de 10 segundos de inactividad
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Configurar el autoplay
  useEffect(() => {
    let slideInterval: NodeJS.Timeout | null = null

    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        goToNext()
      }, autoPlayInterval)
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval)
      }
    }
  }, [isAutoPlaying, goToNext])

  return (
    <div className="relative">
      {/* Carrusel de imágenes */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative h-[250px] md:h-[450px]">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[250px] md:h-[450px]">
                  <Image
                    src={
                      images[(index + 1) % images.length].src ||
                      "/placeholder.svg"
                    }
                    alt={images[(index + 1) % images.length].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[250px] md:h-[450px]">
                  <Image
                    src={
                      images[(index + 2) % images.length].src ||
                      "/placeholder.svg"
                    }
                    alt={images[(index + 2) % images.length].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Botones de navegación */}
      <button
        onClick={() => {
          goToPrevious()
          pauseAutoPlay()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => {
          goToNext()
          pauseAutoPlay()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
