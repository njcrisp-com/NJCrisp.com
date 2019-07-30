/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Introduction from "../components/introduction"
import { map } from "rambda"
import { css, jsx } from "@emotion/core"

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
    <div className="">
      {map(({ node }) => (
        <section className="mt-8 mb-16 w-full max-w-xl">
          <img
            src={node.logo.file.url}
            alt={`${node.name} logo`}
            css={css`
              width: 150px;
            `}
            className="mb-3"
          />
          <h1 className="text-3xl uppercase font-bold tracking-normal">
            {node.name}
          </h1>
          <p>{documentToReactComponents(node.description.json)}</p>
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
