/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import HumaaanLanding from "./humaaan-landing"

export default function LandingHero({ heroCopyData }) {
  return (
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        mx: "auto",
        mt: [8],
        "@media screen and (max-width: 450px)": {
          flexWrap: "wrap-reverse",
        },
      }}
    >
      <HumaaanLanding
        sx={{
          maxWidth: "300px",
          minWidth: "150px",
          margin: "0 10px",
          "@media screen and (max-width: 450px)": {
            maxWidth: 175,
          },
          maxHeight: 300,
        }}
      />
      <article
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: [2, 3, 4],
          maxWidth: "500px",
          minWidth: "275px",
          marginX: ["auto", 2, 3, 4],
        }}
      >
        <Styled.h2
          sx={{
            marginBottom: [4],
            variant: "text.heading",
          }}
        >
          {heroCopyData.heroTitle}
        </Styled.h2>
        <Styled.h4>{heroCopyData.heroSubtitle}</Styled.h4>
        <Styled.h6>{heroCopyData.heroBody}</Styled.h6>
        <button
          type="button"
          sx={{
            variant: "buttons.primary",
            fontSize: 4,
            mx: "auto",
            mb: [6],
            justifySelf: "left",
          }}
        >
          <Link
            to="/contact"
            sx={{
              textDecoration: `none`,
              color: "white",
            }}
          >
            {heroCopyData.heroButton}
          </Link>
        </button>
      </article>
    </section>
  )
}
