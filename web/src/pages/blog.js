/** @jsx jsx */

import { graphql } from "gatsby"
import Layout from "../components/layout"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import BlogPostList from "../components/blog-post-list"
import { Styled, jsx } from "theme-ui"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
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

function BlogPage(props) {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  return (
    <Layout>
      <SEO title="Kaitlin Has Opinions" />
      <section
        sx={{
          marginY: [6],
          marginX: "auto",
          maxWidth: "600px",
        }}
      >
        <Styled.h2>Kaitlin Has Opinions</Styled.h2>
        <Styled.h6 sx={{ fontWeight: "normal" }}>
          A semi-regular spray of links and other such content droplets.
        </Styled.h6>
        {postNodes && <BlogPostList nodes={postNodes} />}
      </section>
    </Layout>
  )
}

export default BlogPage
