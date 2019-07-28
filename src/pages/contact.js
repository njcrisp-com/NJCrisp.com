import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Natan</h1>
    <p>Sup my g?</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
