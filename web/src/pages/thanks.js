/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Thanks() {
  return (
    <div
      sx={{
        bg: "backgroundGrey",
      }}
    >
      <Layout>
        <SEO title="thanks" />
        <section
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem",
          }}
        >
          <h3>thanks! can't wait to chat.</h3>
          <Link to="/">
            <button
              sx={{
                variant: "buttons.secondary",
              }}
            >
              Back to homepage
            </button>
          </Link>
        </section>
      </Layout>
    </div>
  )
}
