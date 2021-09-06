/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import BlockText from "./block-text"

export default function SamplesLanding({ services, landingPageCopy }) {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        maxWidth: "landingCardContainer",
        margin: "50px auto",
      }}
    >
      <Styled.h3
        sx={{
          textAlign: "center",
        }}
      >
        {landingPageCopy.servicesTitle}
      </Styled.h3>
      <Styled.h5
        sx={{
          textAlign: "center",
          fontFamily: "body",
          fontWeight: "body",
        }}
      >
        {landingPageCopy.servicesSubtitle}
      </Styled.h5>
      <ul
        sx={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          marginLeft: "0",
        }}
      >
        {services.map(service => (
          <li
            sx={{
              maxWidth: ["300px", "500px"],
              mb: [4, 6],
              variant: "cards.blogPreview",
              backgroundColor: "white",
              transition: "filter 400ms",
              "&:not(:disabled):hover": {
                filter: "contrast(102%) drop-shadow(16px 16px 20px #CECECE)",
              },
              textDecoration: "none",
              color: "text",
            }}
            key={service.id}
          >
            <Styled.h5
              sx={{
                color: "text",
                textDecoration: "underline solid #FF4133",
                fontStyle: "italic",
                mb: [4],
              }}
            >
              {service.title}
            </Styled.h5>
            <blockquote>
              <BlockText blocks={service._rawDescription} />
            </blockquote>
          </li>
        ))}
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
          {landingPageCopy.servicesButton}
        </Link>
      </button>
    </section>
  )
}
