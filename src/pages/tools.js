import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ToolsPage = () => (
  <Layout>
    <SEO title="Tools" />
    <h1>Tools</h1>
    <p>I have a slug that I love to play with.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ToolsPage
