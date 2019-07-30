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
      <div className="bg-red-200 w-full max-w-3xl m-auto text-xl">
        <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>

        <div id="about-text">
          {documentToReactComponents(data.page.text.json)}
        </div>
        <div id="secondary-navigation" className="w-full max-w-md text-left">
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
