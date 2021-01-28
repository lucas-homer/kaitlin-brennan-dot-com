/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { encode } from "../lib/helpers"

export default function AboutNewsletter() {
  const [state, setState] = React.useState({})
  const [showSuccessEmoji, setShowSuccessEmoji] = React.useState(false)
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        form.reset()
        setShowSuccessEmoji(true)
      })
      .catch(error => alert(error))
  }

  return (
    <section
      sx={{
        color: "white",
        borderRadius: "primary",
        bg: "#925CAB",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingX: [4, 6, 6],
        paddingY: [6],
        maxWidth: "landingCardContainer",
        margin: ["16px", "32px auto"],
        filter: "drop-shadow(8px 8px 8px #CECECE)",
      }}
    >
      <div
        sx={{
          margin: "0 auto",
        }}
      >
        <Styled.h3
          sx={{
            marginBottom: ".5rem",
          }}
        >
          Artisinal Emails{" "}
          <span role="img" aria-label="artist">
            👩‍🎨
          </span>
        </Styled.h3>
        <Styled.h5>Get the Newsletter! </Styled.h5>
      </div>

      <form
        name="newsletter"
        method="post"
        action="/about"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        sx={{
          paddingX: [4, 6, 9],
          marginBottom: "0",
        }}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input
          type="hidden"
          name="form-name"
          value="contact"
          aria-label="ignore this input"
        />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input
              name="bot-field"
              onChange={handleChange}
              aria-label="don't fill this out"
            />
          </label>
        </p>

        <div
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            onChange={handleChange}
            aria-label="First Name"
            type="text"
            name="firstName"
            placeholder="First name"
            sx={{
              variant: "inputs.primary",
              marginBottom: [4],
            }}
          />
          <input
            onChange={handleChange}
            aria-label="Email"
            type="email"
            name="email"
            placeholder="Email"
            sx={{
              variant: "inputs.primary",
              marginBottom: [4],
            }}
          />
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {showSuccessEmoji ? (
              <Styled.h5
                sx={{
                  color: "white",
                  textAlign: "center",
                  px: [2, 3, 4],
                  py: [1],
                  marginBottom: "0",
                }}
              >
                <em>Success!</em>
              </Styled.h5>
            ) : null}
            <button
              type="submit"
              sx={{
                color: "#925CAB",
                bg: "white",
                px: [6],
                py: [1],
                border: "none",
                borderRadius: "primary",
                whiteSpace: "nowrap",
                "&:hover": {
                  cursor: "pointer",
                },
                fontSize: 4,
                transition: "filter 400ms",
                "&:not(:disabled):hover": {
                  filter:
                    "contrast(175%) hue-rotate(50deg) drop-shadow(0px 5px 10px hsl(281,32%,65%))",
                },
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
