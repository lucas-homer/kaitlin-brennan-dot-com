/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import BlogPostPreview from "./blog-post-preview"

function BlogPostPreviewGrid(props) {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingX: [4, 8],
        paddingY: [8],
        maxWidth: "blogPost",
        margin: "2rem auto",
      }}
    >
      <Link
        to={props.browseMoreHref}
        sx={{
          textDecoration: `none`,
          variant: "text.heading",
          color: "text",
          textAlign: "center",
        }}
      >
        <Styled.h3
          sx={{
            variant: "text.heading",
          }}
        >
          {props.title}
        </Styled.h3>
        <Styled.h5
          sx={{
            variant: "text.heading",
            fontFamily: "body",
            fontWeight: "body",
            textDecoration: "underline rgba(255, 65, 51, 1)",
          }}
        >
          <em>{props.subtitle}</em>
        </Styled.h5>
      </Link>

      <div
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(calc(300px - 1.5rem), 1fr))",
          gap: "3rem",
        }}
      >
        {props.nodes &&
          props.nodes.map(node => (
            <div key={node.id}>
              <BlogPostPreview {...node} />
            </div>
          ))}
      </div>
      {props.browseMoreHref && (
        <Styled.h5
          sx={{
            margin: "0 0 0 auto",
            fontFamily: "body",
            fontWeight: "body",
            paddingY: "2rem",
          }}
        >
          <Link
            to={props.browseMoreHref}
            sx={{
              color: "text",
              textDecoration: "underline rgba(255, 65, 51, 1)",
            }}
          >
            <em>Browse more </em>
            <span aria-label="right arrow" role="img">
              ➡️
            </span>
          </Link>
        </Styled.h5>
      )}
    </section>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
}

export default BlogPostPreviewGrid
