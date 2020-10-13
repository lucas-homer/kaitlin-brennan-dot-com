/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default function AboutServices() {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "backgroundGrey",
        paddingX: [4, 8],
        paddingY: [8],
      }}
    >
      <div
        sx={{
          textAlign: "center",
          marginBottom: [4, 8],
        }}
      >
        <Styled.h3>Services</Styled.h3>
        <Styled.p>
          Some other text here about the stuff I'm a pro at and will want to pay
          me to do
        </Styled.p>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  )
}

function ServiceCard() {
  return (
    <div
      sx={{
        backgroundColor: "white",
        width: "serviceCard",
        borderRadius: "primary",
        padding: [7],
        margin: [4, 8],
        filter: "drop-shadow(16px 16px 20px #CECECE)",
      }}
    >
      <Styled.h4>Consulting</Styled.h4>
      <Styled.p>
        Some text here saying how KB will smash the tasks you have for her.
      </Styled.p>
    </div>
  )
}
