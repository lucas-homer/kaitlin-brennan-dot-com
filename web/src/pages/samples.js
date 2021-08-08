/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import SamplesHero from "../components/samples-hero"
import WorkSamples from "../components/work-samples"
import { mapEdgesToNodes } from "../lib/helpers"

export const query = graphql`
  query SamplesPageQuery {
    workSamples: allSanityWorkSample {
      edges {
        node {
          id
          title
          sampleType {
            title
          }
          fileUpload {
            asset {
              id
              title
              description
              url
            }
          }
          url
        }
      }
    }
    sampleTypes: allSanitySampleType(sort: { fields: title, order: [ASC] }) {
      edges {
        node {
          title
        }
      }
    }
    workSamplesPageCopy: allSanityWorkSamplesPage(limit: 1) {
      edges {
        node {
          id
          heroTitle
          heroSubtitle
          heroButton
        }
      }
    }
  }
`

function SamplesPage({ data, errors }) {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const workSampleNodes = (data || {}).workSamples
    ? mapEdgesToNodes(data.workSamples)
    : []

  const sampleTypes = (data || {}).sampleTypes
    ? mapEdgesToNodes(data.sampleTypes)
    : []

  const workSamplesPageCopyNode = (data || {}).workSamplesPageCopy
    ? mapEdgesToNodes(data.workSamplesPageCopy)[0]
    : []

  return (
    <Layout
      isHeroLayout
      HeroComponent={SamplesHero}
      heroCopyData={workSamplesPageCopyNode}
    >
      <SEO title="Samples" />
      <WorkSamples workSamples={workSampleNodes} sampleTypes={sampleTypes} />
    </Layout>
  )
}

export default SamplesPage
