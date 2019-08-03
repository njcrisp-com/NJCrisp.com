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
import Introduction from "../components/introduction"

const Showcase = ({ project }) => {
  console.log(project)
  return (
    <section className="block pb-4 mb-8 md:mb-20 xs:min-h-screen md:min-h-0">
      <h2 className="text-white">
        <span className="text-gray-500 uppercase sm:text-base md:text-xl sm:text-sm font-bold">
          {project.category ? `${project.category.categoryName}: ` : ""}
        </span>
        <span
          className="uppercase text-4xl md:text-5xl lg:text-6xl block leading-none font-bold relative"
          style={{ top: "-4pt" }}
        >
          {project.title}
        </span>
      </h2>
      <span
        className="text-gray-500 capitalize text-base sm:text-lg md:text-xl lg: text-xl text-white relative"
        style={{ top: "-4pt" }}
      >
        {format(project.date, `Do MMMM YYYY`)}
      </span>
      <p className="text container text-lg">
        {documentToReactComponents(project.description.json)}
      </p>
      <Player videoId={project.vimeoID} />
      <div className="px-1">
        <h3 className="text-xl text-gray-100 font-bold mt-4">Tools Used:</h3>
        <ul className="text-m list-disc list-inside">
          {map(({ name }) => (
            <li className="text-lg lg:text-xl xl:text-2xl">{name}</li>
          ))(project.toolsUsed)}
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
  <Layout lightsOn={false}>
    <div className="text-gray-500">
      <SEO title="Sound Design Portfolio" />
      <div className="lg:px-8 xl:px-20 mx-auto">
        <Introduction data={data} />
        <Showcases projects={data.showcases.edges} />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query PortfolioQuery2 {
    page: contentfulPage(label: { eq: "Portfolio" }) {
      id
      label
      text {
        id
        json
      }
    }
    showcases: allContentfulShowcase(sort: { fields: date, order: DESC }) {
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
