/** @jsx jsx */
import { jsx } from "theme-ui"
import WorkSampleCard from "./work-sample-card"

export default function WorkSamples({ workSamples, sampleTypes }) {
  return (
    <section
      sx={{
        paddingX: [6, 8],
        pt: [8],
        pb: [9],
        margin: "0 auto",
        maxWidth: 800,
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(calc(300px), 1fr))",
          gap: "2rem",
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
      </div>
    </section>
  )
}
