/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { buildImageObj, getBlogUrl } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
import BlockText from "./block-text"

export default function BlogPostPreview(props) {
  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug)}>
      <h3>{props.title}</h3>
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
        <div>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  )
}
