/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { buildImageObj, getPublishedDate } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
import BlockText from "./block-text"

export default function BlogPost(props) {
  const { _rawBody, categories, title, mainImage, publishedAt } = props
  return (
    <article
      sx={{
        variant: "cards.blogPost",
      }}
    >
      <Styled.h3>{title}</Styled.h3>
      {publishedAt && <div>{getPublishedDate(publishedAt)}</div>}
      {mainImage && mainImage.asset && (
        <Fragment>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </Fragment>
      )}
      {_rawBody && <BlockText blocks={_rawBody} />}
      {categories?.length ? (
        <aside>
          <Styled.h4>Categories</Styled.h4>
          <ul>
            {categories.map(category => (
              <li key={category._id}>{category.title}</li>
            ))}
          </ul>
        </aside>
      ) : null}
    </article>
  )
}
