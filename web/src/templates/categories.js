/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import BlogPostList from "../components/blog-post-list"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"

export const query = graphql`
  query CategoriesTemplateQuery($categoryName: String!) {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { categories: { elemMatch: { title: { eq: $categoryName } } } }
    ) {
      totalCount
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

function CategoriesTemplate(props) {
  const { data, errors, pageContext } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const { categoryName } = pageContext
  const totalCount = data.posts.totalCount

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  return (
    <Layout>
      <SEO title={categoryName} />
      <section
        sx={{
          marginY: [6],
          marginX: "auto",
          maxWidth: "600px",
        }}
      >
        <Styled.h2>{`${categoryName} (${totalCount})`}</Styled.h2>
        {postNodes && <BlogPostList nodes={postNodes} />}
      </section>
    </Layout>
  )
}

export default CategoriesTemplate
