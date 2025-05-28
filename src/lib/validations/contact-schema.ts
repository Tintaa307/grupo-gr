import { z } from "zod"

export const ContactSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }).max(20, {
    message: "El nombre debe tener menos de 20 caracteres",
  }),
  email: z.string().email({ message: "El email es requerido" }),
  phone: z.string().min(1, { message: "El teléfono es requerido" }).max(15, {
    message: "El teléfono debe tener menos de 15 caracteres",
  }),
  enterprise: z
    .string()
    .max(50, {
      message: "La empresa debe tener menos de 50 caracteres",
    })
    .optional(),
  message: z
    .string()
    .max(500, {
      message: "El mensaje debe tener menos de 200 caracteres",
    })
    .optional(),
})

export const BudgetSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }).max(20, {
    message: "El nombre debe tener menos de 20 caracteres",
  }),
  email: z.string().email({ message: "El email es requerido" }),
  phone: z.string().min(1, { message: "El teléfono es requerido" }).max(15, {
    message: "El teléfono debe tener menos de 15 caracteres",
  }),
  enterprise: z
    .string()
    .max(50, {
      message: "La empresa debe tener menos de 50 caracteres",
    })
    .optional(),
  locality: z
    .string()
    .max(50, {
      message: "La localidad debe tener menos de 50 caracteres",
    })
    .optional(),
  type_work: z
    .string()
    .max(50, {
      message: "El tipo de trabajo debe tener menos de 50 caracteres",
    })
    .optional(),
  delivery_date: z.date().optional(),
  include_delivery: z.string().optional(),
  message: z
    .string()
    .max(500, {
      message: "El mensaje debe tener menos de 200 caracteres",
    })
    .optional(),
})
