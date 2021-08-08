/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GraphQLErrorList from "../components/graphql-error-list"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"

import LandingHero from "../components/hero"
import Divider from "../components/divider"
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
          ogImage {
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
        }
      }
    }

    posts: allSanityPost(
      limit: 4
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

    services: allSanityService {
      edges {
        node {
          id
          title
          description
        }
      }
    }

    landingPageCopy: allSanityLandingPage(limit: 1) {
      edges {
        node {
          id
          heroBody
          heroButton
          heroSubtitle
          heroTitle
          servicesButton
          servicesSubtitle
          servicesTitle
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

  const [site] = (data || {}).site ? mapEdgesToNodes(data.site) : []

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  const serviceNodes = (data || {}).services
    ? mapEdgesToNodes(data.services)
    : []

  const landingPageCopyNode = (data || {}).landingPageCopy
    ? mapEdgesToNodes(data.landingPageCopy)[0]
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout
      isHeroLayout={true}
      HeroComponent={LandingHero}
      heroCopyData={landingPageCopyNode}
    >
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
        mainImage={site.ogImage}
      />
      <SamplesCard
        services={serviceNodes}
        landingPageCopy={landingPageCopyNode}
      />
      <Divider />
      {postNodes && (
        <BlogPostPreviewGrid
          title="What is that girl talking about?"
          subtitle="I write a lot. Here's the recent stuff."
          nodes={postNodes}
          browseMoreHref="/blog/"
        />
      )}
      <Divider />
      <NewsletterForm />
    </Layout>
  )
}

export default IndexPage
