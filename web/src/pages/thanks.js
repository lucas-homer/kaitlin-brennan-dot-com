/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PottedPlant from "../components/potted-plant"

export default function Thanks() {
  return (
    <Layout>
      <SEO title="thanks" />
      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          maxWidth: "landingCardContainer",
          margin: "4rem auto 0",
        }}
      >
        <div sx={{ paddingRight: [7], paddingLeft: [8], paddingBottom: [7] }}>
          <PottedPlant />
        </div>
        <Styled.h4
          sx={{
            textAlign: "center",
            marginBottom: [1],
          }}
        >
          Thank you so much!{" "}
        </Styled.h4>
        <Styled.h5
          sx={{
            textAlign: "center",
            fontFamily: "body",
            fontWeight: "body",
          }}
        >
          <span role="img" aria-label="praying hands">
            🙏
          </span>{" "}
          I can't wait to connect{" "}
          <span role="img" aria-label="praying hands">
            🙏
          </span>{" "}
        </Styled.h5>
        <button
          sx={{
            variant: "buttons.secondary",
            maxWidth: "200px",
            margin: "12px auto ",
          }}
        >
          <Link
            to="/"
            sx={{
              textDecoration: `none`,
              color: "primary",
            }}
          >
            Back to Home page
          </Link>
        </button>
      </section>
    </Layout>
  )
}
