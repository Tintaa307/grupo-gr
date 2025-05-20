import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar/navbar"
import WhatsappButton from "@/components/whatsapp-button/whatsapp-button"
import { ContactBar } from "@/components/contact-bar/contact.bar"
import { Footer } from "@/components/footer/footer"
import { Toaster } from "sonner"

const robotoSerif = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
})

export const metadata: Metadata = {
  title:
    "Offset Digital – Grupo Galleries Compañía Gráfica | GrupoGr | Imprenta caba",
  description:
    "Una empresa gráfica integral, desde 1998, dedicada a la impresión y post impresión de productos gráficos.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.ico",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSerif.className} antialiased`}>
        <Toaster richColors duration={4000} position="top-right" />
        <ContactBar />
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  )
}
