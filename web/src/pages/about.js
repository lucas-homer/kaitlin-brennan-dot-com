/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHero from "../components/about-hero"
import AboutServices from "../components/about-services"
import AboutBackground from "../components/about-background"
import AboutNewsletter from "../components/about-newsletter"
import { mapEdgesToNodes } from "../lib/helpers"
import Header from "../components/header"
import Footer from "../components/footer"

export const query = graphql`
  query AboutPageQuery {
    skillsets: allSanitySkillset {
      edges {
        node {
          id
          title
          description
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
  }
`

function AboutPage({ data, errors }) {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const serviceNodes = (data || {}).services
    ? mapEdgesToNodes(data.services)
    : []

  const skillsetNodes = (data || {}).skillsets
    ? mapEdgesToNodes(data.skillsets)
    : []

  return (
    <React.Fragment>
      <SEO title="About" />
      <Header />
      <AboutHero />
      <AboutServices services={serviceNodes} />
      <AboutBackground skillsets={skillsetNodes} />
      <AboutNewsletter />
      <Footer sx={{}} />
    </React.Fragment>
  )
}

export default AboutPage
