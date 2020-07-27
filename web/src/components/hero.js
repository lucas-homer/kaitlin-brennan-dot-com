/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import HumaaanLanding from "./humaaan-landing"

export default function Hero() {
  return (
    <section
      sx={{
        background: theme =>
          `linear-gradient(180deg, ${theme.colors.backgroundGrey} 60%, ${theme.colors.white} 40%)`,
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
  )
}
