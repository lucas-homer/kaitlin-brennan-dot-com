/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { buildImageObj, getBlogUrl } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
import BlockText from "./block-text"

export default function BlogPostPreview(props) {
  return (
    <aside
      sx={{
        variant: "cards.blogPreview",
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
        <div>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
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
