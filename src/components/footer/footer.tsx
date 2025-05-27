"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-gray-50">
      {/* Mapa */}
      <div className="relative w-full h-[500px] flex items-center justify-center border border-gray-200">
        <div
          id="google-map"
          className="w-full h-full relative flex items-center justify-center"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.4334914080073!2d-58.40627412425799!3d-34.64375377293999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb6d2d131ce9%3A0x78fdbf1e23d61441!2sJos%C3%A9%20C.%20Paz%202969%2C%20C1437IQA%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1747456605165!5m2!1ses!2sar"
            width="600"
            height="450"
            loading="lazy"
            className="w-[50%] max-md:w-[100%]"
          />
        </div>
      </div>

      {/* Información de la empresa y copyright */}
      <div className="py-6 text-center text-gray-600 text-sm">
        <p className="mb-2">
          Grupo Galleries Review | Imprenta Offset especializada en soluciones
          gráficas para Empresas. Envíos al interior del país.
        </p>
        <p>
          <Link
            href="https://www.grupogr.com.ar"
            className="hover:text-gray-800"
          >
            www.grupogr.com.ar
          </Link>{" "}
          | Grupo Galleries Review | Copyright © Todos los derechos reservados{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
