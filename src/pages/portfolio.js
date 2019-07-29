import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
    <Showcases data={showcases} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query PortfolioQuery {
    page: contentfulPage(label: { eq: "Portfolio" }) {
      id
      label
      text {
        id
        json
      }
    }
    showcases: allContentfulShowcase {
      edges {
        node {
          id
          date
          description {
            json
          }
          vimeoID
          title
          toolsUsed {
            name
          }
        }
      }
    }
  }
`

export default Portfolio
