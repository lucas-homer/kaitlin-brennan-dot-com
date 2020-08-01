/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import LinkedIn from "./linkedin"
import Twitter from "./twitter"
import Facebook from "./facebook"

export default function Footer() {
  return (
    <footer
      sx={{
        backgroundColor: "backgroundGrey",
        paddingY: [8],
        paddingX: [5, 10],
      }}
    >
      <section
        sx={{
          maxWidth: "960px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h6
            sx={{
              margin: "0",
              paddingY: 1,
            }}
          >
            <Link
              to="/blog"
              sx={{
                textDecoration: `none`,
                variant: "text.heading",
                color: "text",
                "&:hover": {
                  color: "secondary",
                },
              }}
            >
              Blog
            </Link>
          </h6>
          <h6
            sx={{
              margin: "0",
              paddingY: 1,
            }}
          >
            <Link
              to="/samples"
              sx={{
                textDecoration: `none`,
                variant: "text.heading",
                color: "text",
                "&:hover": {
                  color: "secondary",
                },
              }}
            >
              Samples
            </Link>
          </h6>
          <h6
            sx={{
              margin: "0",
              paddingY: 1,
            }}
          >
            <Link
              to="/about"
              sx={{
                textDecoration: `none`,
                variant: "text.heading",
                color: "text",
                "&:hover": {
                  color: "secondary",
                },
              }}
            >
              About
            </Link>
          </h6>
          <h6
            sx={{
              margin: "0",
              paddingY: 1,
            }}
          >
            <Link
              to="/contact"
              sx={{
                textDecoration: `none`,
                variant: "text.heading",
                color: "text",
                "&:hover": {
                  color: "secondary",
                },
              }}
            >
              Contact
            </Link>
          </h6>

          <p
            sx={{
              fontSize: [0],
            }}
          >
            © {new Date().getFullYear()} Kaitlin Brennan
          </p>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.linkedin.com/in/kaitlin-brennan-64b7aa92/"
            rel="noreferrer"
            target="_blank"
            sx={{
              padding: 2,
            }}
          >
            <LinkedIn
              sx={{
                height: "24px",
                width: "24px",
              }}
            />
          </a>
          <a
            href="https://twitter.com/KaitlinEBrennan"
            rel="noreferrer"
            target="_blank"
            sx={{
              padding: 2,
            }}
          >
            <Twitter
              sx={{
                height: "24px",
                width: "24px",
              }}
            />
          </a>
          <a
            href="https://facebook.com/"
            rel="noreferrer"
            target="_blank"
            sx={{
              padding: 2,
            }}
          >
            <Facebook
              sx={{
                height: "24px",
                width: "24px",
              }}
            />
          </a>
        </div>
      </section>
    </footer>
  )
}
