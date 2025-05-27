import Image from "next/image"

export function EnviosBanner() {
  return (
    <section className="w-full py-6 sm:py-8 border-t border-b border-gray-200">
      <div className="mx-auto px-2 sm:px-4 max-lg:w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 items-center">
          {/* Mapa de Argentina con texto */}
          <div className="relative flex justify-center">
            <div className="relative w-full h-[180px] xs:h-[150px] sm:h-[180px] md:h-[220px] lg:h-[250px]">
              <Image
                src="/banners/banner-envios.png"
                alt="Mapa de Argentina"
                fill
                className="object-contain"
                sizes="(max-width: 480px) 90vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Texto informativo central */}
          <div className="px-2 xs:px-1 sm:px-3 md:px-4 py-2 text-gray-700 text-center xs:text-left">
            <p className="text-sm xs:text-xs sm:text-sm md:text-base lg:text-lg">
              Pagá con tu medio de pago favorito: Transferencias, Cheques,
              E-Check, Mercado Pago y todas las tarjetas!
            </p>
            <p className="mt-2 xs:mt-1 sm:mt-2 md:mt-3 lg:mt-4 text-sm xs:text-xs sm:text-sm md:text-base lg:text-lg">
              Hacemos envíos a todo el territorio Argentino por Correo o tu
              Expreso de confianza.
            </p>
          </div>

          {/* Métodos de pago */}
          <div className="relative flex justify-center">
            <div className="relative w-full h-[120px] xs:h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
              <Image
                src="/banners/banner-mp.png"
                alt="Métodos de pago"
                fill
                className="object-contain"
                sizes="(max-width: 480px) 90vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
