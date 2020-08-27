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
          pdfUpload {
            asset {
              id
              title
              description
              url
            }
          }
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

  return (
    <Layout isHeroLayout HeroComponent={SamplesHero}>
      <SEO title="Samples" />
      <WorkSamples workSamples={workSampleNodes} sampleTypes={sampleTypes} />
    </Layout>
  )
}

export default SamplesPage
