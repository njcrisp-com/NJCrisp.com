import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home/About" />
    <h1>Hi,</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      I am <strong>Natan James Crisp,</strong>
    </p>
    <p>a Sound Designer from London,</p>
    <p>and I am passionate about Sound Design and Audio Production.</p>
    <p>Whilst you are here, why not...</p>
    <ul>
      <li>
        <Link to="/portfolio">Check out my work</Link>
      </li>
      <li>
        <Link to="/tools">Learn about the tools I love to use</Link>
      </li>
      <li>
        <Link to="/contact">Contact me</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
