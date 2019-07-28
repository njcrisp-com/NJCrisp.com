import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import loadable from "@loadable/component"

const Player = loadable(() => import("../components/player"))

const SecondPage = () => (
  <Layout>
    <SEO title="Sound Design and Audio Production Portfolio" />
    <h1>Portfolio</h1>
    <p>Check this out:</p>
    <Player videoId="148751763" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
