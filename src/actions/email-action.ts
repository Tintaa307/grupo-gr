"use server"

import { ContactSchema } from "@/lib/validations/contact-schema"
import { ContactForm } from "@/types/types"
import { sendEmail } from "@/lib/nodemailer"

export const sendEmailAction = async (formData: ContactForm) => {
  const validatedFields = ContactSchema.safeParse(formData)

  if (!validatedFields.success) {
    return { error: validatedFields.error }
  }

  const { name, email, phone, enterprise, message } = validatedFields.data

  const result = await sendEmail({
    name,
    email,
    phone,
    enterprise,
    message,
  })

  if (result.error) {
    return { error: "Error al enviar el mensaje" }
  }

  return { success: "Email enviado con éxito!" }
}
