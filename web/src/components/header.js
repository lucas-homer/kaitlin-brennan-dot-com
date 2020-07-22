/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      // this uses the value from `theme.space[4]`
      padding: 4,
      // these use values from `theme.colors`
      backgroundColor: "background",
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
          color: "text",
          fontFamily: "heading",
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
      <h4>
        <Link
          sx={{
            color: "text",
            padding: [0, 4],
            textDecoration: `none`,
            fontFamily: "heading",
            "&:hover": {
              borderBottom: theme => `2px solid ${theme.colors.primaryLight}`,
            },
          }}
          to="/blog"
        >
          Blog
        </Link>
      </h4>
      <h4>
        <Link
          sx={{
            color: "text",
            padding: [0, 4],
            textDecoration: `none`,
            fontFamily: "heading",
            "&:hover": {
              borderBottom: theme => `2px solid ${theme.colors.primaryLight}`,
            },
          }}
          to="/samples"
        >
          Samples
        </Link>
      </h4>

      <h4>
        <Link
          sx={{
            color: "text",
            padding: [0, 4],
            textDecoration: `none`,
            fontFamily: "heading",
            "&:hover": {
              borderBottom: theme => `2px solid ${theme.colors.primaryLight}`,
            },
          }}
          to="/about"
        >
          About
        </Link>
      </h4>
      <h4>
        <Link
          sx={{
            color: "text",
            padding: [0, 4],
            textDecoration: `none`,
            fontFamily: "heading",
            "&:hover": {
              borderBottom: theme => `2px solid ${theme.colors.primaryLight}`,
            },
          }}
          to="/contact"
        >
          Contact
        </Link>
      </h4>
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
