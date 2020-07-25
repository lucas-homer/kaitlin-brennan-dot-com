/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HumaaanLanding from "../components/humaaan-landing"

import SamplesCard from "../components/samples-landing"
import NewsletterForm from "../components/newsletter-landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HumaaanLanding
        sx={{
          maxWidth: "300px",
          minWidth: "150px",
        }}
      />
      <article
        sx={{
          display: "flex",
          alignItems: "baseline",
          flexWrap: "wrap",
        }}
      >
        <aside
          sx={{
            paddingY: [2, 3, 4],
            paddingRight: [2, 3, 4],
            paddingLeft: "0",
            marginRight: [2, 3, 4],
          }}
        >
          <h1
            sx={{
              marginBottom: "0px",
            }}
          >
            Content Creator
          </h1>
          <h2>Clicks queen</h2>
        </aside>
        <button
          type="button"
          sx={{
            variant: "buttons.primary",
            fontSize: 4,
          }}
        >
          <Link
            to="/contact"
            sx={{
              textDecoration: `none`,
              color: "white",
            }}
          >
            I'll bite
          </Link>
        </button>
      </article>
    </section>
    <SamplesCard />
    <NewsletterForm />
  </Layout>
)

export default IndexPage
