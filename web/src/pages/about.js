/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import GraphQLErrorList from "../components/graphql-error-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
          _rawDescription
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
    <Layout
      isHeroLayout={true}
      HeroComponent={AboutHero}
      heroCopyData={aboutPageNode}
    >
      <SEO title="About" />
      <AboutBackground skillsets={skillsetNodes} />
      <AboutServices services={serviceNodes} />
      {postNodes && (
        <BlogPostPreviewGrid
          title="What is that girl talking about?"
          subtitle="I write a lot. Here's the recent stuff."
          nodes={postNodes}
          browseMoreHref="/blog/"
        />
      )}
      <AboutNewsletter />
    </Layout>
  )
}

export default AboutPage
