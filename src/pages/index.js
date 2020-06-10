import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <Hero/>
    <About/>
    <Work/>
  </Layout>
)

export default IndexPage
