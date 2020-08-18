/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { encode } from "../lib/helpers"

export default function NewsletterLanding() {
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
        setShowSuccessEmoji(true)
      })
      .catch(error => alert(error))
  }

  return (
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
      }}
    >
      <div
        sx={{
          margin: "0 auto",
        }}
      >
        <h2
          sx={{
            marginBottom: "0px",
          }}
        >
          I offer delivery{" "}
          <span role="img" aria-label="painting fingernails">
            💅
          </span>
        </h2>
        <h4>Homemade thoughts to your inbox!</h4>
        {showSuccessEmoji ? (
          <h4
            sx={{
              color: "highlight",
              textAlign: "center",
              marginBottom: ".5rem",
            }}
          >
            {" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>{" "}
            I appreciate you!{" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>
          </h4>
        ) : null}
      </div>

      <form
        name="newsletter"
        method="post"
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

        <input
          onChange={handleChange}
          aria-label="Email"
          type="email"
          name="email"
          placeholder="Email"
          sx={{
            variant: "inputs.primary",
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
          Subscribe
        </button>
      </form>
    </section>
  )
}
