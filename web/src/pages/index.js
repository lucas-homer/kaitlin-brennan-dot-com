/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GraphQLErrorList from "../components/graphql-error-list"
import { mapEdgesToNodes } from "../lib/helpers"

import LandingHero from "../components/hero"
import SamplesCard from "../components/samples-landing"
import NewsletterForm from "../components/newsletter-landing"
import Divider from "../components/divider"

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

    services: allSanityService {
      edges {
        node {
          id
          title
          _rawDescription
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

      <NewsletterForm />
    </Layout>
  )
}

export default IndexPage
