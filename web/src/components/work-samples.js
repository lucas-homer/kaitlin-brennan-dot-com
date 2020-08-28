/** @jsx jsx */
import { jsx } from "theme-ui"
import WorkSampleCard from "./work-sample-card"

export default function WorkSamples({ workSamples, sampleTypes }) {
  return (
    <section
      sx={{
        bg: "white",
        paddingY: 8,
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(calc(400px - 1.5rem), 1fr))",
        gap: "3rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {sampleTypes?.map((type, index) => {
        const workSamplesForType = workSamples.filter(
          sample => sample.sampleType.title === type.title
        )

        return (
          <WorkSampleCard
            sampleType={type.title}
            key={type.title}
            samples={workSamplesForType}
            colorKey={index}
          />
        )
      })}
    </section>
  )
}
