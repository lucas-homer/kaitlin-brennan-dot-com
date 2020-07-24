/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      // this uses the value from `theme.space[4]`
      paddingTop: 4,
      paddingBottom: 2,
      paddingX: 4,
      // these use values from `theme.colors`
      backgroundColor: "backgroundGrey",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        sx={{
          textDecoration: `none`,
          variant: "text.heading",
          color: "text",
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <Link
        sx={{
          color: "text",
          padding: [0, 4],
          textDecoration: `none`,
          variant: "text.heading",
          "&:hover": {
            borderBottom: theme => `2px solid ${theme.colors.highlight}`,
          },
        }}
        to="/blog"
      >
        Blog
      </Link>
      <Link
        sx={{
          color: "text",
          padding: [0, 4],
          textDecoration: `none`,
          variant: "text.heading",
          "&:hover": {
            borderBottom: theme => `2px solid ${theme.colors.highlight}`,
          },
        }}
        to="/samples"
      >
        Samples
      </Link>

      <Link
        sx={{
          color: "text",
          padding: [0, 4],
          textDecoration: `none`,
          variant: "text.heading",
          "&:hover": {
            borderBottom: theme => `2px solid ${theme.colors.highlight}`,
          },
        }}
        to="/about"
      >
        About
      </Link>
      <Link
        sx={{
          color: "text",
          padding: [0, 4],
          textDecoration: `none`,
          variant: "text.heading",
          "&:hover": {
            borderBottom: theme => `2px solid ${theme.colors.highlight}`,
          },
        }}
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
