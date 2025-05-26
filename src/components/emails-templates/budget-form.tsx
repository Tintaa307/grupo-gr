import { BudgetForm } from "@/types/types"
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from "@react-email/components"

export const BudgetFormEmail = ({
  name,
  enterprise,
  email,
  phone,
  locality,
  type_work,
  delivery_date,
  include_delivery,
  message,
}: BudgetForm) => {
  const previewText = `Nueva solicitud de presupuesto de ${name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column>
                <Img
                  src="https://grupogr.com.ar/logo-grupo-gr.png"
                  width="200"
                  height="60"
                  alt="Grupo Galleries"
                  style={logo}
                />
              </Column>
            </Row>
          </Section>

          {/* Title */}
          <Section style={content}>
            <Heading style={h1}>Nueva Solicitud de Presupuesto</Heading>
            <Text style={text}>
              Has recibido una nueva solicitud de presupuesto a través del
              formulario web.
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Customer Information */}
          <Section style={content}>
            <Heading style={h2}>Información del Cliente</Heading>

            <Row style={informationTable}>
              <Column style={informationTableColumn}>
                <Text style={informationTableLabel}>Nombre / Apellido:</Text>
                <Text style={informationTableValue}>{name}</Text>
              </Column>
              {enterprise && (
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>
                    Empresa / Razón Social:
                  </Text>
                  <Text style={informationTableValue}>
                    {enterprise || "No especificado"}
                  </Text>
                </Column>
              )}
            </Row>

            <Row style={informationTable}>
              <Column style={informationTableColumn}>
                <Text style={informationTableLabel}>Email:</Text>
                <Link href={`mailto:${email}`} style={informationTableValue}>
                  {email}
                </Link>
              </Column>
              {phone && (
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Teléfono:</Text>
                  <Link href={`tel:${phone}`} style={informationTableValue}>
                    {phone}
                  </Link>
                </Column>
              )}
            </Row>

            {locality && (
              <Row style={informationTable}>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Localidad:</Text>
                  <Text style={informationTableValue}>{locality}</Text>
                </Column>
              </Row>
            )}
          </Section>

          <Hr style={hr} />

          {/* Project Information */}
          <Section style={content}>
            <Heading style={h2}>Detalles del Proyecto</Heading>

            <Row style={informationTable}>
              {type_work && (
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Tipo de trabajo:</Text>
                  <Text style={informationTableValue}>{type_work}</Text>
                </Column>
              )}
              {delivery_date && (
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Fecha de Entrega:</Text>
                  <Text style={informationTableValue}>
                    {delivery_date.toLocaleDateString("es-AR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </Text>
                </Column>
              )}
            </Row>

            {include_delivery && (
              <Row style={informationTable}>
                <Column style={informationTableColumn}>
                  <Text style={informationTableLabel}>Incluye Entrega:</Text>
                  <Text style={informationTableValue}>{include_delivery}</Text>
                </Column>
              </Row>
            )}

            <Row style={informationTable}>
              <Column>
                <Text style={informationTableLabel}>Mensaje:</Text>
                <Text style={messageText}>{message}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Call to Action */}
          <Section style={content}>
            <Text style={text}>
              Para responder a esta solicitud, puedes contactar directamente al
              cliente o utilizar nuestro sistema de gestión de presupuestos.
            </Text>

            <Row style={buttonContainer}>
              <Column align="center">
                <Link
                  style={button}
                  href={`mailto:${email}?subject=Re: Solicitud de Presupuesto - ${name}&body=Estimado/a ${name},%0D%0A%0D%0AGracias por contactarnos. Hemos recibido su solicitud de presupuesto y nos pondremos en contacto a la brevedad.%0D%0A%0D%0ASaludos,%0D%0AEquipo Grupo Galleries`}
                >
                  Responder al Cliente
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Grupo Galleries Review SRL
              <br />
              José C. Paz 2969, Distrito Tecnológico, Parque Patricios | CABA,
              Argentina
              <br />
              Tel: (54 11) 4912-7398 / (5411) 4912-1045
              <br />
              Email: info@grupogr.com.ar
            </Text>

            <Row style={socialLinks}>
              <Column align="center">
                <Link
                  href="https://facebook.com/grupogalleries"
                  style={socialLink}
                >
                  Facebook
                </Link>
                {" | "}
                <Link
                  href="https://instagram.com/grupogalleries"
                  style={socialLink}
                >
                  Instagram
                </Link>
                {" | "}
                <Link
                  href="https://linkedin.com/company/grupogalleries"
                  style={socialLink}
                >
                  LinkedIn
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const header = {
  padding: "20px 30px",
}

const logo = {
  margin: "0 auto",
}

const content = {
  padding: "20px 30px",
}

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
}

const h2 = {
  color: "#374151",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "20px 0 10px",
}

const text = {
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
}

const hr = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
}

const informationTable = {
  borderCollapse: "collapse" as const,
  margin: "10px 0",
}

const informationTableColumn = {
  paddingRight: "20px",
  paddingBottom: "10px",
  verticalAlign: "top" as const,
}

const informationTableLabel = {
  color: "#374151",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 5px",
}

const informationTableValue = {
  color: "#6b7280",
  fontSize: "16px",
  margin: "0",
  lineHeight: "24px",
}

const messageText = {
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "5px 0 0",
  padding: "15px",
  backgroundColor: "#f9fafb",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",
}

const buttonContainer = {
  margin: "30px 0",
}

const button = {
  backgroundColor: "#10b981",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
}

const footer = {
  padding: "20px 30px",
  backgroundColor: "#f9fafb",
  borderTop: "1px solid #e5e7eb",
}

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "20px",
  textAlign: "center" as const,
  margin: "0 0 20px",
}

const socialLinks = {
  margin: "10px 0",
}

const socialLink = {
  color: "#3b82f6",
  fontSize: "14px",
  textDecoration: "none",
}
