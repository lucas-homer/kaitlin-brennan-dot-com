import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h2>Blog</h2>
  </Layout>
)

export default BlogPage
