/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GraphQLErrorList from "../components/graphql-error-list"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"

import HumaaanLanding from "../components/humaaan-landing"

import SamplesCard from "../components/samples-landing"
import NewsletterForm from "../components/newsletter-landing"
import BlogPostPreviewGrid from "../components/blog-post-preview-grid"

export const query = graphql`
  query IndexPageQuery {
    site: allSanitySiteSettings {
      edges {
        node {
          keywords
          author
          description
          title
        }
      }
    }

    posts: allSanityPost(
      limit: 2
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
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
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site ? mapEdgesToNodes(data.site) : []

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  console.log("postNodes", postNodes)

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <section
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HumaaanLanding
          sx={{
            maxWidth: "300px",
            minWidth: "150px",
          }}
        />
        <article
          sx={{
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          <aside
            sx={{
              paddingY: [2, 3, 4],
              paddingRight: [2, 3, 4],
              paddingLeft: "0",
              marginRight: [2, 3, 4],
            }}
          >
            <h1
              sx={{
                marginBottom: "0px",
              }}
            >
              Content Creator
            </h1>
            <h2>Clicks queen</h2>
          </aside>
          <button
            type="button"
            sx={{
              variant: "buttons.primary",
              fontSize: 4,
            }}
          >
            <Link
              to="/contact"
              sx={{
                textDecoration: `none`,
                color: "white",
              }}
            >
              I'll bite
            </Link>
          </button>
        </article>
      </section>
      <SamplesCard />
      {postNodes && (
        <BlogPostPreviewGrid
          title="Latest blog posts"
          nodes={postNodes}
          browseMoreHref="/blog/"
        />
      )}
      <NewsletterForm />
    </Layout>
  )
}

export default IndexPage
