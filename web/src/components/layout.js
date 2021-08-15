/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
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
    <React.Fragment>
      <Header />
      {isHeroLayout && <HeroComponent heroCopyData={heroCopyData} />}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          minHeight: "55vh",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
