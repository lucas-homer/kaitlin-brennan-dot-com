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
        padding: 4,
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

      <ul
        sx={{
          listStyleType: "none",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <Styled.h5
          sx={{
            margin: "0 0 0 auto",
            fontFamily: "body",
            fontWeight: "body",
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
