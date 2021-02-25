/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import WorkSamplesHuman from "./work-samples-human"

export default function AboutHero() {
  return (
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: [4],
        backgroundColor: "white",
        marginY: [4, 8],
      }}
    >
      <article
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "left",
          maxWidth: "320px",
          padding: 2,
        }}
      >
        <Styled.h3>
          About Me{" "}
          <span role="img" aria-label="woman dancing emoji">
            💃🏻
          </span>
        </Styled.h3>
        <Styled.h5
          sx={{
            fontWeight: "body",
            fontFamily: "body",
          }}
        >
          I'm Kaitlin. I'm awesome, you're awesome. Let's be friends.
        </Styled.h5>
        <button
          sx={{
            variant: "buttons.primary",
            maxWidth: "200px",
          }}
        >
          <Link
            to="/contact"
            sx={{
              textDecoration: `none`,
              color: "white",
            }}
          >
            Reach out!
          </Link>
        </button>
      </article>
      <WorkSamplesHuman
        sx={{
          maxWidth: "300px",
          minWidth: "150px",
        }}
      />
    </section>
  )
}
