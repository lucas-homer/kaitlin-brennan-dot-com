/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import AboutHero from "../components/about-hero"
import AboutServices from "../components/about-services"
import AboutBackground from "../components/about-background"
import AboutNewsletter from "../components/about-newsletter"
import BlogPostPreviewGrid from "../components/blog-post-preview-grid"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"

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
    aboutPage: allSanityAboutPage(limit: 1) {
      edges {
        node {
          heroButton
          heroSubtitle
          heroTitle
          id
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

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  const aboutPageNode = (data || {}).aboutPage
    ? mapEdgesToNodes(data.aboutPage)[0]
    : []

  return (
    <React.Fragment>
      <SEO title="About" />
      <Header />
      <AboutHero aboutPageHeroCopy={aboutPageNode} />
      <AboutBackground skillsets={skillsetNodes} />
      <AboutServices services={serviceNodes} />
      {/* <Divider /> */}
      {postNodes && (
        <BlogPostPreviewGrid
          title="What is that girl talking about?"
          subtitle="I write a lot. Here's the recent stuff."
          nodes={postNodes}
          browseMoreHref="/blog/"
        />
      )}
      <AboutNewsletter />
      <Footer />
    </React.Fragment>
  )
}

export default AboutPage
