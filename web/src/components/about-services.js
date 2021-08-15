/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default function AboutServices({ services }) {
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
          marginBottom: [3],
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
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {services.map(service => (
          <ServiceCard
            specialId={service.id}
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ specialId, title, description }) {
  return (
    <div
      sx={{
        backgroundColor: "white",
        width: "serviceCard",
        borderRadius: "primary",
        padding: [7],
        margin: [4, 8],
        filter: "drop-shadow(16px 16px 20px #CECECE)",
        textAlign: "center",
      }}
      id={specialId}
    >
      <Styled.h4>{title}</Styled.h4>
      <Styled.p>{description}</Styled.p>
    </div>
  )
}
