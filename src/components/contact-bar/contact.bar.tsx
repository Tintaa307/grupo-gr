import Link from "next/link"
import { Phone, Mail, Instagram, MessageSquare } from "lucide-react"

export function ContactBar() {
  const contactItems = [
    {
      href: "tel:1131064837",
      icon: Phone,
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
    <div className="w-full bg-white border-b py-2 fixed top-0 left-0 z-50 max-lg:hidden">
      <div className="container mx-auto flex flex-wrap justify-center gap-16 px-4 text-sm">
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
