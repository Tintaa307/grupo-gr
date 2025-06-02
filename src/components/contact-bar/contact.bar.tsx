import Link from "next/link"
import { Phone, Mail, Instagram, Truck } from "lucide-react"
import { cn } from "@/lib/utils"

const WhatsAppIcon = () => (
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
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </svg>
)

export function ContactBar() {
  const contactItems = [
    {
      icon: WhatsAppIcon,
      text: "11 6440-1067",
      action: "https://wa.me/541131064837",
    },
    {
      icon: Phone,
      text: "011 4912-1045",
      action: "tel:541149121045",
    },
    {
      icon: WhatsAppIcon,
      text: "11 3109-3621",
      action: "https://wa.me/541131093621",
    },
    {
      icon: Mail,
      text: "info@grupogr.com.ar ",
      action: "mailto:info@grupogr.com.ar ",
    },
    {
      icon: Instagram,
      text: "@grupogalleries",
      action: "https://instagram.com/grupogalleries",
    },
    {
      icon: Truck,
      text: "Envíos a todo el país",
      action: "#",
    },
  ]

  return (
    <div className="w-full bg-primary border-b py-2 fixed top-0 left-0 z-50 max-lg:hidden">
      <div className="mx-auto flex flex-wrap justify-center gap-16 px-4 text-sm w-full max-xl:gap-6">
        {contactItems.map((item, index) => (
          <Link
            key={index}
            href={item.action}
            className={cn(
              "text-white hover:underline flex items-center gap-1",
              item.action === "#" && "hover:no-underline cursor-auto"
            )}
          >
            <item.icon className="h-4 w-4" /> {":"} {item.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
