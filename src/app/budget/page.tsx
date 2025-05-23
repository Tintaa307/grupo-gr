import { BudgetForm } from "@/components/budget-form/budget-form"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function BudgetPage() {
  return (
    <main className="flex min-h-screen flex-col pt-[120px] pb-16">
      <div className="bg-blue-500 h-[280px] w-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-20 max-md:mb-10 max-md:text-2xl">
          En que podemos ayudarte?
        </h1>
      </div>

      {/* Contenedor del formulario */}
      <div className="container mx-auto px-4 -mt-[100px] mb-16">
        <div className="bg-white shadow-lg rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Columna izquierda - Información de contacto */}
            <div className="p-8 border-r border-gray-200">
              <h2 className="text-xl font-medium text-gray-800 mb-6">
                Información de Contacto
              </h2>
              <div className="border-b border-dashed border-gray-300 mb-8"></div>

              <div className="space-y-12">
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Dirección:</h3>
                    <p className="text-gray-600">
                      José C. Paz 2969, Distrito Tecnológico,
                      <br />
                      Parque Patricios | CABA, Argentina
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-start gap-4">
                  <div className="text-blue-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Whatsapp</h3>
                    <p className="text-gray-600">(5491) 3109-3621</p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-start gap-4">
                  <div className="text-blue-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">
                      Teléfono Comercial:
                    </h3>
                    <p className="text-gray-600">
                      TE: (54 11) 4912-7398 / (5411) 4912-1045
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-start gap-4">
                  <div className="text-blue-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">E-Mail</h3>
                    <p className="text-gray-600">info@grupogr.com.ar</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-gray-800">Social Media</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://facebook.com/grupogalleries"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                    >
                      <Facebook className="w-4 h-4 text-gray-600" />
                    </Link>
                    <Link
                      href="https://instagram.com/grupogalleries"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                    >
                      <Instagram className="w-4 h-4 text-gray-600" />
                    </Link>
                    <Link
                      href="https://linkedin.com/company/grupogalleries"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                    >
                      <Linkedin className="w-4 h-4 text-gray-600" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="p-8">
              <h2 className="text-xl font-medium text-gray-800 mb-6">
                Solicitar Presupuesto
              </h2>
              <div className="border-b border-dashed border-gray-300 mb-8"></div>

              <BudgetForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
