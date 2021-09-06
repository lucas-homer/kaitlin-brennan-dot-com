/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import BlockText from "./block-text"

export default function AboutServices({ services }) {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        backgroundColor: "backgroundGrey",
        paddingX: [6, 8],
        pt: [8],
        pb: [9],
        marginX: "-16px",
        mb: "4px",
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
          display: "grid",
          gridTemplateRows: "auto",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(calc(300px - 1.5rem), 1fr))",
          gap: "3rem",
          margin: "0 auto",
        }}
      >
        {services.map(service => (
          <ServiceCard
            specialId={service.id}
            key={service.id}
            title={service.title}
            description={service._rawDescription}
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
        variant: "cards.blogPreview",
        backgroundColor: "white",
        px: [3],
        pt: [6],
        filter: "drop-shadow(16px 16px 20px #CECECE)",
      }}
      id={specialId}
    >
      <Styled.h4
        sx={{
          textAlign: "center",
        }}
      >
        {title}
      </Styled.h4>
      <blockquote>
        <BlockText blocks={description} />
      </blockquote>
    </div>
  )
}
