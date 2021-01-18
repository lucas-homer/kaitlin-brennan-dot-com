/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import BlogPost from "../components/blog-post"
import SEO from "../components/seo"
import Layout from "../components/layout"

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      author {
        _id
        image {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
        }
        name
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const { mainImage } = post

  return (
    <div
      sx={{
        bg: "backgroundGrey",
      }}
    >
      <Layout>
        {post && <SEO title={post.title || "Untitled"} mainImage={mainImage} />}
        {post && <BlogPost {...post} />}
      </Layout>
    </div>
  )
}

export default BlogPostTemplate
