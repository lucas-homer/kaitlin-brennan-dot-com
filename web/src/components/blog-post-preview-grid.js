/** @jsx jsx */
import { jsx } from "theme-ui"
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
        <h2
          sx={{
            variant: "text.heading",
          }}
        >
          {props.title}
        </h2>
        <h4
          sx={{
            variant: "text.heading",
          }}
        >
          {props.subtitle}
        </h4>
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
        <h4
          sx={{
            margin: "0 0 0 auto",
          }}
        >
          <Link
            to={props.browseMoreHref}
            sx={{ color: "text", textDecoration: `none` }}
          >
            Browse more{" "}
            <span aria-label="right arrow" role="img">
              ➡️
            </span>
          </Link>
        </h4>
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
