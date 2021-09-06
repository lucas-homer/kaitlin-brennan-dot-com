/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

function Layout({
  children,
  isHeroLayout = false,
  HeroComponent,
  heroCopyData,
}) {
  return (
    <div
      sx={{
        height: "inherit",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "68px 1fr 200px",
        gridColumnGap: "0px",
        gridRowGap: "0px",
      }}
    >
      <Header />
      <main sx={{ padding: "16px" }}>
        {isHeroLayout && <HeroComponent heroCopyData={heroCopyData} />}
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
