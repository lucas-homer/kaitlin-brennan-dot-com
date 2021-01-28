/** @jsx jsx */
import React from "react"
import { navigate } from "gatsby"
import { Styled, jsx } from "theme-ui"
import { encode } from "../lib/helpers"

export default function ContactForm() {
  const [state, setState] = React.useState({})

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
        navigate(form.getAttribute("action"))
        form.reset()
      })

      .catch(error => alert(error))
  }

  return (
    <aside>
      <Styled.h2>Let's Connect</Styled.h2>
      <Styled.h5 sx={{ fontWeight: "body" }}>
        Beverages. Exchange ideas. Sparks!
      </Styled.h5>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
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
        <p>
          <label>
            Your name:
            <br />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              aria-label="Your name"
              sx={{
                variant: "inputs.primary",
                width: "100%",
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              aria-label="Your email"
              sx={{
                variant: "inputs.primary",
                width: "100%",
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea
              name="message"
              onChange={handleChange}
              aria-label="message"
              sx={{
                variant: "inputs.primary",
                width: "100%",
              }}
            />
          </label>
        </p>
        <p>
          <button
            type="submit"
            sx={{
              variant: "buttons.primary",
            }}
          >
            Send
          </button>
        </p>
      </form>
    </aside>
  )
}
