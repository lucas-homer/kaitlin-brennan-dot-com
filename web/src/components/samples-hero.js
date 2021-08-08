/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import WorkSamplesHuman from "./work-samples-human"

export default function SamplesHero({ heroCopyData }) {
  console.log(`heroCopyData`, heroCopyData)
  return (
    <section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        backgroundColor: "backgroundGrey",
        paddingTop: "2rem",
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
        <Styled.h3>{heroCopyData.heroTitle}</Styled.h3>
        <Styled.h5
          sx={{
            fontWeight: "body",
            fontFamily: "body",
          }}
        >
          {heroCopyData.heroSubtitle}
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
            {heroCopyData.heroButton}
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
