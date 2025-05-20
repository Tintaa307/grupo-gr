import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full py-16 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-green-500 text-lg mb-4">
          Imprimí con Grupo Galleries Compañía Gráfica
        </p>
        <h2 className="text-3xl md:text-4xl font-extralight text-black mb-10 max-w-3xl">
          Tenemos una solución gráfica para cada necesidad
        </h2>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-green-500 text-green-500 hover:text-green-500 hover:bg-transparent rounded-full  transition-colors"
        >
          <Link href="/#contact" className="flex items-center gap-2 px-8">
            CONTACTANOS <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
