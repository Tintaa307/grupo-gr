import { ContactForm } from "@/types/types"
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"

export const ContactFormEmail = ({
  name,
  enterprise,
  email,
  phone,
  message,
}: ContactForm) => {
  return (
    <Html>
      <Head />
      <Preview>Nueva consulta de contacto de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://placeholder.svg?height=60&width=200&text=Grupo+Galleries`}
              width="200"
              height="60"
              alt="Grupo Galleries"
              style={logo}
            />
          </Section>
          <Section style={boxInfos}>
            <Heading style={h1}>Nueva consulta recibida</Heading>
            <Text style={paragraph}>
              Ha recibido una nueva consulta a través del formulario de contacto
              en su sitio web.
            </Text>

            <Section style={infoBox}>
              <Row>
                <Column style={infoColumn}>
                  <Text style={infoTitle}>Nombre / Apellido:</Text>
                </Column>
                <Column>
                  <Text style={infoValue}>{name}</Text>
                </Column>
              </Row>
              <Hr style={divider} />

              <Row>
                <Column style={infoColumn}>
                  <Text style={infoTitle}>Empresa / Razón Social:</Text>
                </Column>
                <Column>
                  <Text style={infoValue}>{enterprise}</Text>
                </Column>
              </Row>
              <Hr style={divider} />

              <Row>
                <Column style={infoColumn}>
                  <Text style={infoTitle}>Email:</Text>
                </Column>
                <Column>
                  <Text style={infoValue}>{email}</Text>
                </Column>
              </Row>
              <Hr style={divider} />

              <Row>
                <Column style={infoColumn}>
                  <Text style={infoTitle}>Teléfono:</Text>
                </Column>
                <Column>
                  <Text style={infoValue}>{phone}</Text>
                </Column>
              </Row>
              <Hr style={divider} />

              <Row>
                <Column style={infoColumn}>
                  <Text style={infoTitle}>Mensaje:</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={messageStyle}>{message}</Text>
                </Column>
              </Row>
            </Section>

            <Section style={ctaContainer}>
              <Button style={button} href={`mailto:${email}`}>
                Responder al cliente
              </Button>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Grupo Galleries Review. Todos los
              derechos reservados.
            </Text>
            <Text style={footerText}>
              José C. Paz 2969, Distrito Tecnológico, Parque Patricios | CABA,
              Argentina
            </Text>
            <Text style={footerText}>
              <Link href="tel:1131064837" style={footerLink}>
                +54 11 3106-4837
              </Link>{" "}
              |
              <Link href="mailto:info@grupogalleries.com" style={footerLink}>
                {" "}
                info@grupogalleries.com
              </Link>
            </Text>
            <Text style={footerText}>
              <Link
                href="https://www.instagram.com/grupogalleries"
                style={footerLink}
              >
                @grupogalleries
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactFormEmail

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
}

const logoContainer = {
  padding: "20px 0",
  textAlign: "center" as const,
}

const logo = {
  margin: "0 auto",
}

const boxInfos = {
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
}

const h1 = {
  color: "#25b0e8",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  textAlign: "center" as const,
}

const paragraph = {
  color: "#444",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center" as const,
  margin: "16px 0 24px",
}

const infoBox = {
  border: "1px solid #e1e1e1",
  borderRadius: "4px",
  padding: "15px",
  margin: "20px 0",
}

const infoColumn = {
  width: "40%",
}

const infoTitle = {
  color: "#25b0e8",
  fontWeight: "bold",
  margin: "8px 0",
  fontSize: "14px",
}

const infoValue = {
  color: "#444",
  margin: "8px 0",
  fontSize: "14px",
}

const messageStyle = {
  color: "#444",
  margin: "8px 0 16px",
  fontSize: "14px",
  lineHeight: "21px",
  whiteSpace: "pre-wrap" as const,
}

const divider = {
  borderTop: "1px solid #e1e1e1",
  margin: "2px 0",
}

const ctaContainer = {
  textAlign: "center" as const,
  margin: "30px 0",
}

const button = {
  backgroundColor: "#25b0e8",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 24px",
}

const footer = {
  textAlign: "center" as const,
  margin: "20px 0",
}

const footerText = {
  color: "#666",
  fontSize: "12px",
  margin: "4px 0",
}

const footerLink = {
  color: "#25b0e8",
  textDecoration: "none",
}
