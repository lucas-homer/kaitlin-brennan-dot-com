/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default function AboutNewsletter() {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 1rem",
        backgroundColor: "white",
        paddingTop: "2rem",
      }}
    >
      <div
        sx={{
          textAlign: "center",
        }}
      >
        <Styled.h3>Newsletter</Styled.h3>
      </div>
    </section>
  )
}
