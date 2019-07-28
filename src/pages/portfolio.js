import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import loadable from "@loadable/component"

const Player = loadable(() => import("../components/player"))

const videos = [
  {
    videoId: "148751763",
  },
]

const Portfolio = () => (
  <Layout>
    <SEO title="Sound Design and Audio Production Portfolio" />
    <h1>Portfolio</h1>
    <p>Check this out:</p>
    <Player videoId={videos[0].videoId} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
