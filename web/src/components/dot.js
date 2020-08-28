import * as React from "react"

export default function Dot(props) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color}
      width={props.height}
      height={props.height}
    >
      <circle cx="50" cy="50" r="50" fill={props.color} />
    </svg>
  )
}
