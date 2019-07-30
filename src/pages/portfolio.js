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
    <section className="block pb-4 mb-8 xs:min-h-screen md:min-h-0">
      <h2>
        <span className="uppercase sm:text-base md:text-xl sm:text-sm font-bold">
          {project.category ? project.category.categoryName : ""}
        </span>
        <span className="uppercase text-4xl md:text-5xl lg:text-6xl block leading-none font-bold">
          {project.title}
        </span>
      </h2>
      <span className="capitalize text-base sm:text-lg md:text-xl lg: text-xl">
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

const Introduction = ({ data }) => (
  <div className="bg-red-200 mb-8 md:mb-24 max-w-4xl text-lg text-center md:text-left mx-auto md:mx-0">
    {documentToReactComponents(data.page.text.json)}
  </div>
)

const Portfolio = ({ data }) => (
  <Layout>
    <div className="">
      <SEO title="Sound Design Portfolio" />
      <Introduction data={data} />
      <Showcases projects={data.showcases.edges} />
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
