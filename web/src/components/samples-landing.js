/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

export default function SamplesLanding({ services }) {
  const handleKeyDown = (ev, id) => {
    if (ev.keyCode === 13) {
      console.log("ev", ev)
      navigate(`/about#${id}`)
    }
  }

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
        Services{" "}
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
        I solemnly swear to never use #buzzwords
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
        {services.map(service => (
          <li key={service.id}>
            {" "}
            <em
              onClick={() => navigate(`/about#${service.id}`)}
              role="link"
              tabIndex="0"
              onKeyDown={ev => handleKeyDown(ev, service.id)}
              sx={{
                color: "text",
                textDecoration: "underline solid #FF4133",
                cursor: "pointer",
              }}
            >
              {service.title}
            </em>
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
          See samples
        </Link>
      </button>
    </section>
  )
}
