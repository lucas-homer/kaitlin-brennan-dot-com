/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
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
    sampleTypes: allSanitySampleType {
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
    <div
      sx={{
        bg: "backgroundGrey",
      }}
    >
      <Layout>
        <SEO title="Samples" />
        <section
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 4,
            maxWidth: "400px",
            margin: "2rem auto",
          }}
        >
          <Styled.h3
            sx={{
              textAlign: "center",
            }}
          >
            Work Samples
          </Styled.h3>
          <Styled.h6
            sx={{
              textAlign: "center",
            }}
          >
            Interested in more samples, references, or want to chat about a
            potential project?
          </Styled.h6>
          <button
            sx={{
              variant: "buttons.secondary",
              maxWidth: "200px",
              margin: "0 auto",
            }}
          >
            <Link
              to="/contact"
              sx={{
                textDecoration: `none`,
                color: "primary",
              }}
            >
              Reach out!
            </Link>
          </button>
        </section>

        <WorkSamples nodes={workSampleNodes} sampleTypes={sampleTypes} />
      </Layout>
    </div>
  )
}

export default SamplesPage
