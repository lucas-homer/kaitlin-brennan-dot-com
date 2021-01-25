/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrayingEmoji from "../components/praying-emoji"

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
            justifyContent: "center",
            padding: 4,
            maxWidth: "landingCardContainer",
            margin: "4rem auto 0",
          }}
        >
          <PrayingEmoji />
          <Styled.h3
            sx={{
              textAlign: "center",
            }}
          >
            Thank you so much!{" "}
          </Styled.h3>
          <Styled.h5
            sx={{
              textAlign: "center",
              fontFamily: "body",
              fontWeight: "body",
            }}
          >
            I can't wait to connect!
          </Styled.h5>
          <button
            sx={{
              variant: "buttons.secondary",
              maxWidth: "200px",
              margin: "0 auto",
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
    </div>
  )
}
