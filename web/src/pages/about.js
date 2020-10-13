/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import AboutHero from "../components/about-hero"
import AboutServices from "../components/about-services"
import AboutBackground from "../components/about-background"
import AboutNewsletter from "../components/about-newsletter"
// import { mapEdgesToNodes } from "../lib/helpers"
import Header from "../components/header"
import Footer from "../components/footer"

// export const query = graphql`
//   query AboutPageQuery {
//     workSamples: allSanityWorkSample {
//       edges {
//         node {
//           id
//           title
//           sampleType {
//             title
//           }
//           fileUpload {
//             asset {
//               id
//               title
//               description
//               url
//             }
//           }
//           url
//         }
//       }
//     }
//   }
// `

function AboutPage() {
  // { data, errors }
  // if (errors) {
  //   return (
  //     <Layout>
  //       <GraphQLErrorList errors={errors} />
  //     </Layout>
  //   )
  // }

  // const workSampleNodes = (data || {}).workSamples
  //   ? mapEdgesToNodes(data.workSamples)
  //   : []
  const data = useStaticQuery(graphql`
    query WebSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <SEO title="About" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <AboutHero />
      <AboutServices />
      <AboutBackground />
      <AboutNewsletter />
      <Footer sx={{}} />
    </React.Fragment>
  )
}

export default AboutPage
