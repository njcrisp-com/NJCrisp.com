import React from "react"
import { graphql, Link } from "gatsby"
import { map } from "rambda"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import loadable from "@loadable/component"

const Player = loadable(() => import("../components/player"))
import PageTitle from "../components/page-title"
import { format } from "date-fns"

const Showcase = ({ project }) => {
  console.log(project)
  return (
    <section className="block">
      <h2>
        <span className="uppercase text-xl font-bold">
          {project.category ? project.category.categoryName : ""}
        </span>
        <span className="uppercase text-6xl block leading-none font-bold">
          {project.title}
        </span>
      </h2>
      <span className="capitalize text-xl">
        {format(project.date, `Do MMMM YYYY`)}
      </span>
      <Player videoId={project.vimeoID} />
      <div className="px-1">
        <p className="text container text-lg">
          {documentToReactComponents(project.description.json)}
        </p>
        <h3 className="text-xl font-bold mt-4">Tools Used:</h3>
        <ul className="text-m list-disc list-inside">
          {map(({ name }) => <li className="text-lg">{name}</li>)(
            project.toolsUsed
          )}
        </ul>
      </div>
    </section>
  )
}

const Showcases = ({ projects }) => (
  <div>
    {map(project => <Showcase project={project.node} key={project.node.id} />)(
      projects
    )}
  </div>
)

const Portfolio = ({ data }) => (
  <Layout>
    <SEO title="Sound Design and Audio Production Portfolio" />
    <Showcases projects={data.showcases.edges} />
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
          category {
            categoryName
          }
          toolsUsed {
            name
          }
        }
      }
    }
  }
`

export default Portfolio
