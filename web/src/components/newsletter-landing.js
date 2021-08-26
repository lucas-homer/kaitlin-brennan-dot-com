/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { encode } from "../lib/helpers"

export default function NewsletterLanding() {
  const [state, setState] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [showSuccessEmoji, setShowSuccessEmoji] = React.useState(false)
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setShowSuccessEmoji(false)
    setError("")

    const form = e.target

    try {
      console.log("inside the TRY")
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })

      form.reset()
      setShowSuccessEmoji(true)
    } catch (error) {
      console.log(`error from catch`, error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {showSuccessEmoji ? (
        <h4
          sx={{
            color: "purp",
            textAlign: "center",
            marginBottom: ".5rem",
          }}
        >
          {" "}
          <span role="img" aria-label="purple heart">
            💜
          </span>{" "}
          <span sx={{ fontStyle: "italic" }}>
            Thanks! I sent an email to confirm.
          </span>{" "}
          <span role="img" aria-label="purple heart">
            💜
          </span>
        </h4>
      ) : error ? (
        <h4
          sx={{
            color: "highlight",
            textAlign: "center",
            marginBottom: ".5rem",
          }}
        >
          {error}
        </h4>
      ) : null}
      <section
        sx={{
          borderRadius: "primary",
          bg: "backgroundGrey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 4,
          maxWidth: "landingCardContainer",
          margin: "2rem auto",
          filter: "drop-shadow(16px 16px 20px #cecece)",
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
            I offer delivery{" "}
            <span role="img" aria-label="painting fingernails">
              💅
            </span>
          </Styled.h3>
          <Styled.h5>Homemade thoughts to your inbox</Styled.h5>
        </div>

        <form
          name="newsletter"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          sx={{
            margin: "0 auto",
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
              flexWrap: "nowrap",
            }}
          >
            <input
              onChange={handleChange}
              aria-label="Email"
              type="email"
              name="email"
              placeholder="Email"
              sx={{
                variant: "inputs.primary",
                width: "100%",
                maxWidth: 200,
              }}
            />
            <button
              type="submit"
              sx={{
                variant: "buttons.secondary",
                fontSize: 4,
                marginLeft: "-8px",
              }}
            >
              {isLoading ? "Loading..." : "Subscribe"}
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
