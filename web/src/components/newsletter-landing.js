/** @jsx jsx */
import { jsx } from "theme-ui"

export default function NewsletterLanding() {
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
        margin: "0 auto",
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
          I offer delivery 💅
        </h2>
        <h4>Homemade thoughts to your inbox!</h4>
      </div>

      <form
        sx={{
          margin: "0 auto",
        }}
        onSubmit={() => {}}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          sx={{
            variant: "inputs.primary",
          }}
        />
        <button
          type="button"
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
