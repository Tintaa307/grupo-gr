import Link from "next/link"
import { Phone, Mail, Instagram, MessageSquare } from "lucide-react"

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
      href: "tel:1131064837",
      icon: WhatsAppIcon,
      text: "11 3106-4837",
    },
    {
      href: "tel:0114912-1045",
      icon: Phone,
      text: "011 4912-1045",
    },
    {
      href: "https://wa.me/1131093621",
      icon: MessageSquare,
      text: "11 3109-3621",
    },
    {
      href: "mailto:info@grupogalleries.com",
      icon: Mail,
      text: "info@grupogalleries.com",
    },
    {
      href: "https://instagram.com/grupogalleries",
      icon: Instagram,
      text: "@grupogalleries",
    },
  ]

  return (
    <div className="w-full bg-white border-b py-2 fixed top-0 left-0 z-50 max-md:hidden">
      <div className="container mx-auto flex flex-wrap justify-center gap-16 px-4 text-sm max-lg:gap-4">
        {contactItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-primary hover:underline flex items-center gap-1"
          >
            <item.icon className="h-4 w-4" /> {":"} {item.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
