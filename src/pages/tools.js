/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Introduction from "../components/introduction"
import { map } from "rambda"
import { css, jsx } from "@emotion/core"

import { Img } from "gatsby-image"

export const query = graphql`
  query ToolsQuery {
    page: contentfulPage(label: { eq: "Tools" }) {
      id
      label
      text {
        id
        json
      }
    }
    tools: allContentfulTool {
      edges {
        node {
          name
          logo {
            file {
              url
              fileName
            }
          }
          id
          description {
            json
          }
        }
      }
    }
  }
`

const ToolList = ({ tools }) => {
  return (
    <div className="md:pl-4 lg:pl-10 xl:pl-20">
      {map(({ node }) => (
        <section className="mt-8 mb-16 w-full flex flex-wrap">
          <div className="flex-1 flex-none mr-10 text-center md:text-right min-w-full md:min-w-0">
            <div className="w-64 mx-auto">
              <h1 className="text-4xl md:text-5xl uppercase font-bold tracking-normal">
                {node.name}
              </h1>

              <img
                src={node.logo.file.url}
                alt={`${node.name} logo`}
                className="mb-3 w-64 w-full mx-auto mb-6 lg:mb-0"
              />
            </div>
          </div>
          <p className="content flex-1 flex-grow md:pt-16 px-2 lg:max-w-4xl">
            {documentToReactComponents(node.description.json)}
          </p>
        </section>
      ))(tools.edges)}
    </div>
  )
}

const ToolsPage = ({ data }) => (
  <Layout>
    <SEO title="Tools" />
    <Introduction data={data} />
    <ToolList tools={data.tools} />
  </Layout>
)

export default ToolsPage
