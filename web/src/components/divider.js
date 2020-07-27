/** @jsx jsx */
import { jsx } from "theme-ui"

export default function Divider() {
  return (
    <hr
      sx={{
        color: "muted",
        maxWidth: [150, 300, 400],
        margin: "2rem auto",
      }}
    />
  )
}
