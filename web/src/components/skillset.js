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

export default function Skillset({ skillset, index }) {
  const color = COLORS[index]
  return (
    <div
      sx={{
        gridColumnStart: "2",
        gridColumnEnd: "3",
        gridRowStart: "auto",
        gridRowEnd: "auto",

        display: "grid",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "50px minmax(150px, 350px)",
      }}
    >
      <Dot color={color} />
      <div>
        <Styled.h5 sx={{ marginTop: [2] }}>{skillset.title}</Styled.h5>
        <Styled.p>{skillset.description}</Styled.p>
      </div>
    </div>
  )
}
