import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar/navbar"
import WhatsappButton from "@/components/whatsapp-button/whatsapp-button"
import { ContactBar } from "@/components/contact-bar/contact.bar"
import { Footer } from "@/components/footer/footer"
import { Toaster } from "sonner"
import { Chatbot } from "@/components/chatbot/chatbot"
import { TagManagerProvider } from "@/context/tag-manager"

const robotoSerif = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default:
      "Grupo Galleries - Imprenta Digital y Offset en Buenos Aires | Desde 1998",
    template: "%s | Grupo Galleries - Imprenta Digital y Offset",
  },
  description:
    "Grupo Galleries es una empresa gráfica integral especializada en impresión digital y offset desde 1998. Ofrecemos servicios de impresión, post-impresión y diseño gráfico en Buenos Aires, Argentina. Calidad garantizada y atención personalizada.",
  keywords: [
    "imprenta Buenos Aires",
    "impresión digital",
    "impresión offset",
    "servicios gráficos",
    "diseño gráfico",
    "post-impresión",
    "imprenta CABA",
    "imprenta Capital Federal",
    "empresa gráfica Argentina",
    "Grupo Galleries",
    "GrupoGr",
    "imprenta desde 1998",
    "calidad gráfica",
    "soluciones gráficas empresariales",
  ],
  authors: [{ name: "Grupo Galleries" }],
  creator: "Grupo Galleries",
  publisher: "Grupo Galleries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grupogr.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/es",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://grupogr.com",
    siteName: "Grupo Galleries",
    title:
      "Grupo Galleries - Imprenta Digital y Offset en Buenos Aires | Desde 1998",
    description:
      "Empresa gráfica integral especializada en impresión digital y offset desde 1998. Servicios de impresión, post-impresión y diseño gráfico en Buenos Aires.",
    images: [
      {
        url: "/logo-grupo-gr.png",
        width: 1200,
        height: 630,
        alt: "Grupo Galleries - Imprenta Digital y Offset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Galleries - Imprenta Digital y Offset en Buenos Aires",
    description:
      "Empresa gráfica integral desde 1998. Impresión digital, offset y servicios gráficos en Buenos Aires.",
    images: ["/logo-grupo-gr.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${robotoSerif.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Grupo Galleries",
              alternateName: "GrupoGr",
              description:
                "Empresa gráfica integral especializada en impresión digital y offset desde 1998",
              url: "https://grupogr.com",
              logo: "https://grupogr.com/logo-grupo-gr.png",
              foundingDate: "1998",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buenos Aires",
                addressRegion: "CABA",
                addressCountry: "AR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              sameAs: [
                "https://www.facebook.com/grupogalleries",
                "https://www.instagram.com/grupogalleries",
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -34.6037,
                  longitude: -58.3816,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios Gráficos",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Impresión Digital",
                      description:
                        "Servicios de impresión digital de alta calidad",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Impresión Offset",
                      description:
                        "Servicios de impresión offset para grandes volúmenes",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diseño Gráfico",
                      description: "Servicios de diseño gráfico y creatividad",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Post-impresión",
                      description: "Servicios de acabados y post-impresión",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <TagManagerProvider>
          <Toaster richColors duration={4000} position="top-right" />
          <ContactBar />
          <Navbar />
          {children}
          <Chatbot />
          <Footer />
          <WhatsappButton />
        </TagManagerProvider>
      </body>
    </html>
  )
}
