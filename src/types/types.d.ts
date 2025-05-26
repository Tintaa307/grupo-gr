export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  enterprise: string
}

export interface BudgetForm {
  name: string
  email: string
  phone: string
  enterprise: string
  locality: string
  type_work: string
  delivery_date: Date | null
  include_delivery: string
  message: string
}
