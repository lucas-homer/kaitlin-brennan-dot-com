/** @jsx jsx */
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
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
        <aside
          sx={{
            // padding: [4],
            marginTop: [7],
          }}
        >
          <Styled.h5>Categories</Styled.h5>
          <ul
            sx={{
              listStyle: "none",
              display: "flex",
              flexFlow: "row wrap",
            }}
          >
            {categories.map(category => (
              <li sx={{ paddingX: [4], paddingY: [0] }} key={category._id}>
                <Link
                  to={`/categories/${kebabCase(category.title)}`}
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "secondary",
                    borderRadius: "primary",
                    padding: 2,
                  }}
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </article>
  )
}
