/** @jsx jsx */
import { jsx } from "theme-ui"
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
      <h2
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
      </h2>
      <h5
        sx={{
          textAlign: "center",
        }}
      >
        <span aria-label="line graph showing growth" role="img">
          📈
        </span>{" "}
        I am a pro at growth marketing.
      </h5>
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
