import Image from "next/image"

export function EnviosBanner() {
  return (
    <section className="w-full py-8 border-t border-b border-gray-200">
      <div className="mx-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Mapa de Argentina con texto */}
          <div className="relative h-[300px] flex justify-center">
            <div className="relative w-[550px] h-full">
              <Image
                src="/banners/banner-envios.png"
                alt="Mapa de Argentina"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto informativo central */}
          <div className="px-6 py-4 text-gray-700">
            <p className="text-lg">
              Pagá con tu medio de pago favorito: Transferencias, Cheques,
              E-Check, Mercado Pago y todas las tarjetas!
            </p>
            <p className="mt-4 text-lg">
              Hacemos envíos a todo el territorio Argentino por Correo o tu
              Expreso de confianza.
            </p>
          </div>

          {/* Métodos de pago */}
          <div className="relative h-[200px]">
            <Image
              src="/banners/banner-mp.png"
              alt="Métodos de pago"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
