import "../../node_modules/plyr/dist/plyr.css"

import React from "react"
import { Link } from "gatsby"
import Plyr from "react-plyr"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Sound Design and Audio Production Portfolio" />
    <h1>Portfolio</h1>
    <p>Check this out:</p>
    <Plyr
      type="vimeo" // or "vimeo"
      videoId="148751763"
      autoplay="true"
      resetOnEnd="true"
      clickToPlay="true"
      autopause="true"
      quality="1080"
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
