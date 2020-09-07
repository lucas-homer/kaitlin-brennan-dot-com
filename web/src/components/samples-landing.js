/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

export default function SamplesLanding() {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 4,
        maxWidth: "landingCardContainer",
        margin: "2rem auto",
      }}
    >
      <Styled.h3
        sx={{
          textAlign: "center",
        }}
      >
        <span aria-label="boom" role="img">
          💥
        </span>{" "}
        Digital Marketing{" "}
        <span aria-label="boom" role="img">
          💥
        </span>
      </Styled.h3>
      <Styled.h5
        sx={{
          textAlign: "center",
          fontFamily: "body",
          fontWeight: "body",
        }}
      >
        <span aria-label="line graph showing growth" role="img">
          📈
        </span>{" "}
        <em
          sx={{
            textDecoration: "underline rgba(255, 65, 51, 1)",
          }}
        >
          I am a pro at growth marketing.
        </em>
      </Styled.h5>
      <ul
        sx={{
          listStyleType: "none",
          textAlign: "center",
          marginLeft: "0",
          "> li": {
            margin: "0",
          },
        }}
      >
        <li>172 years proven experience</li>
        <li>Great referrals</li>
        <li>Data driven results</li>
      </ul>
      <button
        sx={{
          variant: "buttons.secondary",
          maxWidth: "200px",
          margin: "0 auto",
        }}
      >
        <Link
          to="/samples"
          sx={{
            textDecoration: `none`,
            color: "primary",
          }}
        >
          See samples
        </Link>
      </button>
    </section>
  )
}
