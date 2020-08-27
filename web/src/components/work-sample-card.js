/** @jsx jsx */
import { jsx } from "theme-ui"
import Dot from "./dot"

const COLORS = [
  "#69A1AC",
  "#DB2721",
  "#FF9B21",
  "#5C63AB",
  "#89C5CC",
  "#FF4133",
  "#E87613",
  "rgba(105, 161, 172, 0.44)",
  "#925CAB",
]

export default function WorkSampleCard({ sampleType, samples, colorKey }) {
  const color = COLORS[colorKey]

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "flex-start",
        width: "300px",
        margin: "0 2rem 2rem",
      }}
    >
      <Dot height={32} color={color} />
      <div
        sx={{
          padding: 2,
        }}
      >
        <h4>{sampleType}</h4>
        <ul
          sx={{
            listStyle: "none",
            padding: "0",
            margin: "0",
          }}
        >
          {samples?.map(sample => (
            <li
              sx={{
                marginBottom: "0",
              }}
              key={sample.id}
            >
              <a
                href={sample.pdfUpload.asset.url}
                rel="noreferrer"
                target="_blank"
                sx={{
                  color: "text",
                  textDecorationColor: "#FF4133",
                }}
              >
                <em>{sample.title}</em>
              </a>
            </li>
          )) ?? null}
        </ul>
      </div>
    </div>
  )
}
