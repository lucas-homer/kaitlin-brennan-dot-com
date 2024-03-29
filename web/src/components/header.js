/** @jsx jsx */
import { Link } from "gatsby"
import { useState } from "react"
import PropTypes from "prop-types"
import { jsx, Styled } from "theme-ui"
import Popover, { ArrowContainer } from "react-tiny-popover"

const Header = () => {
  const [isMenuOpen, setMenu] = useState(false)
  return (
    <header
      sx={{
        // this uses the value from `theme.space[4]`
        paddingY: 2,
        paddingX: 4,
        // these use values from `theme.colors`
        backgroundColor: "transparentBackgroundGrey",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        zIndex: "10",
        top: 0,
        backdropFilter: "saturate(180%) blur(20px)",
        transition: "background-color 0.1 ease-in-out",
      }}
    >
      <Link
        to="/"
        sx={{
          color: "text",
          textDecoration: `none`,
        }}
      >
        <Styled.h3
          sx={{
            fontSize: [3, 4, 5],
            my: "0px",
            paddingX: [0, 0, 4],
          }}
        >
          Kaitlin Brennan
        </Styled.h3>
      </Link>
      <nav
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "baseline",
        }}
      >
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            "@media screen and (max-width: 950px)": {
              display: "none",
            },
          }}
        >
          <Link
            sx={{
              color: "testText",
              padding: [0, 4],
              textDecoration: `none`,
              "&:hover": {
                color: "secondary",
              },
            }}
            to="/about"
          >
            About
          </Link>
          <Link
            sx={{
              color: "testText",
              padding: [0, 4],
              textDecoration: `none`,
              "&:hover": {
                color: "secondary",
              },
            }}
            to="/samples"
          >
            Samples
          </Link>

          <Link
            sx={{
              color: "testText",
              padding: [0, 4],
              textDecoration: `none`,
              "&:hover": {
                color: "secondary",
              },
            }}
            to="/blog"
          >
            Blog
          </Link>

          <Link
            sx={{
              color: "testText",
              padding: [0, 4],
              textDecoration: `none`,
              "&:hover": {
                color: "secondary",
              },
            }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <Popover
          onClickOutside={() => setMenu(false)}
          padding={16}
          windowBorderPadding={24}
          isOpen={isMenuOpen}
          position={"bottom"} // preferred position
          content={({ position, targetRect, popoverRect }) => (
            <ArrowContainer
              position={position}
              targetRect={targetRect}
              popoverRect={popoverRect}
              arrowColor={"#69A1AC"}
              arrowSize={10}
            >
              <div
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 4 10 #CECECE",
                  backgroundColor: "secondary",
                  borderRadius: "primary",
                  padding: 4,
                }}
              >
                <Link
                  sx={{
                    color: "white",
                    padding: [2],
                    textDecoration: `none`,
                  }}
                  to="/about"
                >
                  About
                </Link>
                <Link
                  sx={{
                    color: "white",
                    padding: [2],
                    textDecoration: `none`,
                  }}
                  to="/samples"
                >
                  Samples
                </Link>
                <Link
                  sx={{
                    color: "white",
                    padding: [2],
                    textDecoration: `none`,
                  }}
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  sx={{
                    color: "white",
                    padding: [2],
                    textDecoration: `none`,
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </ArrowContainer>
          )}
        >
          <button
            sx={{
              "@media screen and (min-width: 951px)": {
                display: "none",
              },
              border: "secondary",
              borderRadius: "primary",
              padding: "0 1rem",
              color: isMenuOpen ? "white" : "secondary",
              backgroundColor: isMenuOpen ? "secondary" : "white",
              fontWeight: "bold",
              opacity: isMenuOpen ? "0.5" : "1",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setMenu(!isMenuOpen)}
          >
            Menu
          </button>
        </Popover>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
