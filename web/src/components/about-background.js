/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Skillset from "./skillset"

export default function AboutBackground({ skillsets }) {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        paddingY: [8],
      }}
    >
      <div
        sx={{
          textAlign: "center",
          marginBottom: [3],
        }}
      >
        <Styled.h3>Background</Styled.h3>
      </div>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "auto minmax(150px, 400px) auto",
          gridTemplateRows: `repeat(${skillsets}, 1fr)`,
          padding: [3],
        }}
      >
        {skillsets.map((skillset, index) => (
          <Skillset skillset={skillset} key={skillset.id} index={index} />
        ))}
      </div>
    </section>
  )
}
