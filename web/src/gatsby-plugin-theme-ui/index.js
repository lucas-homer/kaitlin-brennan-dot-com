export default {
  colors: {
    text: "#0A0A0A",
    background: "#F2F2F2",
    white: "#fff",
    primary: "#DB2721",
    secondary: "#69A1AC",
    primaryLight: "#FF4133",
    secondaryLight: "#89C5CC",
    muted: "#828282",
  },
  shadows: {
    primary: "0 4 10 #CECECE",
  },
  radii: {
    primary: "10",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Georgia, serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 2,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  breakpoints: ["40em", "56em", "64em"],
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
      px: "space[2, 3, 4]",
      py: "space[1]",
    },
    secondary: {
      color: "primary",
      bg: "white",
      px: "space[2, 3, 4]",
      py: "space[1]",
    },
  },
  styles: {},
}
