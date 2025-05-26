"use server"

import { BudgetSchema, ContactSchema } from "@/lib/validations/contact-schema"
import { EmailService } from "@/services/email-service"
import { BudgetForm, ContactForm } from "@/types/types"

const emailService = new EmailService()

export const sendEmailAction = async (formData: ContactForm) => {
  const validatedFields = ContactSchema.safeParse(formData)

  if (!validatedFields.success) {
    return { error: validatedFields.error }
  }

  const { name, email, phone, enterprise, message } = validatedFields.data

  const result = await emailService.sendEmail({
    name,
    email,
    phone,
    enterprise,
    message,
  })

  if (result.status !== 200) {
    return { error: "Error al enviar el mensaje" }
  }

  return { success: "Email enviado con éxito!" }
}

export const sendBudgetEmailAction = async (formData: BudgetForm) => {
  const validatedFields = BudgetSchema.safeParse(formData)

  if (!validatedFields.success) {
    return { error: validatedFields.error }
  }

  const {
    name,
    email,
    phone,
    enterprise,
    locality,
    type_work,
    delivery_date,
    include_delivery,
    message,
  } = validatedFields.data

  const result = await emailService.sendBudgetEmail({
    name,
    email,
    phone,
    enterprise,
    locality,
    type_work,
    delivery_date,
    include_delivery,
    message,
  })

  if (result.status !== 200) {
    return { error: "Error al enviar el mensaje" }
  }

  return { success: "Email enviado con éxito!" }
}
