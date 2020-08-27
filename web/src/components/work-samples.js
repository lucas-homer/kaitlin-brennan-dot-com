/** @jsx jsx */
import { jsx } from "theme-ui"
import WorkSampleCard from "./work-sample-card"

export default function WorkSamples({ workSamples, sampleTypes }) {
  return (
    <section
      sx={{
        bg: "white",
        paddingY: 8,
        display: "flex",
        maxWidth: "800px",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "space-evenly",
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
