import { Resend } from "resend"
import { ContactFormEmail } from "@/components/emails-templates/contact-form"
import { BudgetForm, ContactForm } from "@/types/types"
import { BudgetFormEmail } from "@/components/emails-templates/budget-form"

export class EmailService {
  private resend: Resend

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY)
  }

  async sendEmail(data: ContactForm) {
    const { email, enterprise, message, name, phone } = data

    const { error } = await this.resend.emails.send({
      from: "GrupoGr <website@grupogr.com.ar>",
      to: ["valentinta@icloud.com", "info@grupogr.com.ar"],
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

    if (error) {
      throw new Error("Error al enviar el email")
    }

    return {
      message: "El email fue enviado con éxito.",
      status: 200,
    }
  }

  async sendBudgetEmail(data: BudgetForm) {
    const {
      email,
      enterprise,
      message,
      name,
      phone,
      locality,
      type_work,
      delivery_date,
      include_delivery,
    } = data

    const { error } = await this.resend.emails.send({
      from: "GrupoGr <website@grupogr.com.ar>",
      to: ["valentinta@icloud.com", "info@grupogr.com.ar"],
      subject: "Nueva solicitud de presupuesto desde GrupoGr website",
      react: BudgetFormEmail({
        name,
        email,
        phone,
        enterprise,
        locality,
        type_work,
        delivery_date,
        include_delivery,
        message,
      }),
      text: "",
    })

    if (error) {
      throw new Error("Error al enviar el email")
    }

    return {
      message: "El email fue enviado con éxito.",
      status: 200,
    }
  }
}
