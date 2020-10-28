/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { buildImageObj, getBlogUrl, getPublishedDate } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
import BlockText from "./block-text"

export default function BlogPostListCard(props) {
  return (
    <aside
      sx={{
        variant: "cards.blogListCard",
      }}
    >
      <Link
        to={getBlogUrl(props.publishedAt, props.slug)}
        sx={{
          textDecoration: "none",
          color: "text",
        }}
      >
        <Styled.h4>{props.title}</Styled.h4>
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
        <p
          sx={{
            margin: "0",
            textAlign: "right",
          }}
        >
          {getPublishedDate(props.publishedAt)}
        </p>
      </Link>
    </aside>
  )
}
