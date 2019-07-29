import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home/About" />
      <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <div id="about-text">
        {documentToReactComponents(data.page.text.json)}
      </div>
      <div id="secondary-navigation">
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    page: contentfulPage(label: { eq: "Home" }) {
      id
      label
      text {
        id
        json
      }
    }
  }
`

export default IndexPage
