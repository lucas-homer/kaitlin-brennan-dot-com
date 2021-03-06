/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import HumaaanLanding from "./humaaan-landing"

export default function Hero() {
  return (
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
      }}
    >
      <HumaaanLanding
        sx={{
          maxWidth: "300px",
          minWidth: "150px",
          margin: "0 10px",
        }}
      />
      <article
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingY: [2, 3, 4],
          paddingRight: [2, 3, 4],
          paddingLeft: "0",
          marginRight: [2, 3, 4],
          maxWidth: "500px",
        }}
      >
        <Styled.h2
          sx={{
            marginBottom: [1],
            variant: "text.heading",
          }}
        >
          Content Creator
        </Styled.h2>
        <Styled.h4>Clicks Queen</Styled.h4>
        <Styled.h6>
          This will be a two to three sentence subheader. Maybe a few statements
          that project sharp, funny, productive. Sounds nice, right?
        </Styled.h6>
        <button
          type="button"
          sx={{
            variant: "buttons.primary",
            fontSize: 4,
            mr: "auto",
            ml: "12px",
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
            I'll bite
          </Link>
        </button>
      </article>
    </section>
  )
}
