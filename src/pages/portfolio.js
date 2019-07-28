import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Sound Design and Audio Production Portfolio" />
    <h1>Portfolio</h1>
    <p>Check this out:</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
