/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { getBlogUrl } from "../lib/helpers"
import BlockText from "./block-text"

export default function BlogPostPreview(props) {
  return (
    <aside
      sx={{
        variant: "cards.blogPreview",
        transition: "filter 400ms",
        "&:not(:disabled):hover": {
          filter: "contrast(102%) drop-shadow(16px 16px 20px #CECECE)",
        },
      }}
    >
      <Link
        to={getBlogUrl(props.publishedAt, props.slug)}
        sx={{
          textDecoration: "none",
          color: "text",
        }}
      >
        <h4
          sx={{
            variant: "styles.h4",
          }}
        >
          {props.title}
        </h4>
        {props._rawExcerpt && (
          <blockquote
            sx={{
              lineHeight: "1.25",
              margin: "0",
            }}
          >
            <BlockText blocks={props._rawExcerpt} />
          </blockquote>
        )}
      </Link>
    </aside>
  )
}
