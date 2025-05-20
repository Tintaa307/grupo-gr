import { FileText } from "lucide-react"
import Link from "next/link"

export function InstructivoBanner() {
  return (
    <section className="w-full bg-emerald-500 py-16">
      <div className="w-[60%] mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <h2 className="text-2xl md:text-3xl text-white font-normal text-center md:text-left mb-8 md:mb-0">
          Instructivo para mandar archivos a la imprenta
        </h2>

        <Link
          href="/INSTRUCTIVO ARCHIVOS_GGR.pdf"
          className="flex flex-col items-center text-white hover:opacity-90 transition-opacity"
          target="_blank"
        >
          <FileText className="w-16 h-16 mb-2" />
          <span className="text-sm">Descargar PDF</span>
        </Link>
      </div>
    </section>
  )
}
