/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import SittingHuman from "../components/sitting-human"
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
          <div
            sx={{
              width: "100%",
              height: "0",
              paddingBottom: "55%",
              position: "relative",
              maxWidth: "35%",
              "@media screen and (max-width: 650px)": {
                display: "none",
              },
            }}
          >
            <iframe
              src="https://giphy.com/embed/OCu7zWojqFA1W"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
              title="Hold On To Your Butts Jurassic Park gif"
            ></iframe>
          </div>
          <ContactForm />
        </section>
      </Layout>
    </div>
  )
}
