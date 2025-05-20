"use server"

import { ContactSchema } from "@/lib/validations/contact-schema"
import { ContactForm } from "@/types/types"
import axios from "axios"

export const sendEmail = async (formData: ContactForm) => {
  const validatedFields = ContactSchema.safeParse(formData)

  if (!validatedFields.success) {
    return { error: validatedFields.error }
  }

  const { name, email, phone, enterprise, message } = validatedFields.data

  const response = await axios.post("/api/email", {
    name,
    email,
    phone,
    enterprise,
    message,
  })

  if (response.status !== 200) {
    return { error: "Error al enviar el mensaje" }
  }

  return { success: "Email enviado con éxito!" }
}
