/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Dot from "./dot"

export default function AboutBackground() {
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
          gridTemplateColumns: "auto 50px minmax(150px, 400px) auto",
          gridTemplateRows: "1fr 1fr 1fr", // TODO -- use repeat() and look at the length of list of `background` items
          padding: [3],
        }}
      >
        {/* TODO -- create sanity schema for these content items */}
        <div
          sx={{
            gridColumnStart: "2",
            gridColumnEnd: "3",
            gridRowStart: "auto",
            gridRowEnd: "auto",
          }}
        >
          <Dot color="#5C63AB" />
        </div>
        <div
          sx={{
            gridColumnStart: "3",
            gridColumnEnd: "4",
            gridRowStart: "auto",
            gridRowEnd: "auto",
          }}
        >
          <Styled.h5 sx={{ marginTop: [2] }}>Key Skillset</Styled.h5>
          <Styled.p>
            Molestie a iaculis at erat. Sagittis vitae et leo duis ut diam quam
            nulla porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.{" "}
          </Styled.p>
        </div>
        <div
          sx={{
            gridColumnStart: "2",
            gridColumnEnd: "3",
            gridRowStart: "auto",
            gridRowEnd: "auto",
          }}
        >
          <Dot color="#FF4133" />
        </div>
        <div
          sx={{
            gridColumnStart: "3",
            gridColumnEnd: "4",
            gridRowStart: "auto",
            gridRowEnd: "auto",
          }}
        >
          <Styled.h5 sx={{ marginTop: [2] }}>Key Skillset</Styled.h5>
          <Styled.p>
            Molestie a iaculis at erat. Sagittis vitae et leo duis ut diam quam
            nulla porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.{" "}
          </Styled.p>
        </div>
        <div
          sx={{
            gridColumnStart: "2",
            gridColumnEnd: "3",
            gridRowStart: "auto",
            gridRowEnd: "auto",
          }}
        >
          <Dot color="#69A1AC" />
        </div>
        <div
          sx={{
            gridColumnStart: "3",
            gridColumnEnd: "4",
            gridRowStart: "auto",
            gridRowEnd: "auto",
          }}
        >
          <Styled.h5 sx={{ marginTop: [2] }}>Key Skillset</Styled.h5>
          <Styled.p>
            Molestie a iaculis at erat. Sagittis vitae et leo duis ut diam quam
            nulla porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.{" "}
          </Styled.p>
        </div>
      </div>
    </section>
  )
}
