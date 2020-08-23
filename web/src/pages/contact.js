/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SittingHuman from "../components/sitting-human"
import ContactForm from "../components/contact-form"

export default function ContactPage() {
  return (
    <div
      sx={{
        bg: "backgroundGrey",
      }}
    >
      <Layout>
        <SEO title="Contact" />
        <section
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: "2rem",
          }}
        >
          <SittingHuman
            sx={{
              maxWidth: "35%",
              "@media screen and (max-width: 650px)": {
                display: "none",
              },
            }}
          />
          <ContactForm />
        </section>
      </Layout>
    </div>
  )
}
