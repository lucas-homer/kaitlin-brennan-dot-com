export default {
  colors: {
    text: "#0A0A0A",
    backgroundGrey: "#F2F2F2",
    background: "#fff",
    white: "#fff",
    primary: "#DB2721",
    secondary: "#69A1AC",
    highlight: "#FF4133",
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
    monospace: "Menlo, monospace",
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
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 9,
    },
    h2: {
      variant: "text.heading",
      fontSize: 8,
    },
    h3: {
      variant: "text.heading",
      fontSize: 7,
    },
    h4: {
      variant: "text.heading",
      fontSize: 5,
    },
    h5: {
      variant: "text.heading",
      fontSize: 3,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
  },
}
