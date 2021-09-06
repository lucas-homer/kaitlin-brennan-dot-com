/** @jsx jsx */
import { jsx } from "theme-ui"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form"

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  )
}
