/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
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

  const getHref = ({ fileUpload, url }) => {
    if (url) {
      return url
    }
    return fileUpload.asset.url
  }

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Dot color={color} />
      <div
        sx={{
          padding: 2,
        }}
      >
        <Styled.h5>{sampleType}</Styled.h5>
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
                href={getHref(sample)}
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
