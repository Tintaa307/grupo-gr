"use client"

import { useRouter } from "next/navigation"

export function InstagramBanner() {
  const router = useRouter()
  return (
    <section
      onClick={() => router.push("https://www.instagram.com/grupogalleries/")}
      className="w-full bg-[url('/banners/banner-ig.jpg')] bg-cover bg-center text-white py-8 h-[250px] cursor-pointer max-md:hidden"
    />
  )
}
