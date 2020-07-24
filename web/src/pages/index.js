import React from "react"
import Layout from "../components/layout"
import HumaaanLanding from "../components/humaaan-landing"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <HumaaanLanding />
    </div>
    <h1>Content Creation</h1>
    <h2>it's catchy</h2>
  </Layout>
)

export default IndexPage
