import * as React from "react"

export default function Dot({ color, width = 32, height = 32 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={width}
      height={height}
    >
      <circle cx="50" cy="50" r="50" fill={color} />
    </svg>
  )
}
