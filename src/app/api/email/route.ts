import { Resend } from "resend"
import { NextResponse } from "next/server"
import { ContactFormEmail } from "@/components/emails-templates/contact-form"
import { ContactForm } from "@/types/types"

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed", status: 405 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = (await req.json()) as ContactForm

    if (!data) {
      return NextResponse.json({
        message: "No se recibieron datos.",
        status: 400,
      })
    }

    const { email, enterprise, message, name, phone } = data

    await resend.emails.send({
      from: "GrupoGr <contact@grupogr.com.ar>",
      to: ["valentinta@icloud.com"],
      subject: "Nueva consulta desde GrupoGr website",
      react: ContactFormEmail({
        name,
        email,
        phone,
        enterprise,
        message,
      }),
      text: "",
    })

    return NextResponse.json({
      message: "El email fue enviado con éxito.",
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: "Hubo un error al enviar el email.",
      status: 500,
    })
  }
}
