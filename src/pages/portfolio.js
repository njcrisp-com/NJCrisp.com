/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { graphql, Link } from "gatsby"
import { map } from "rambda"

import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import loadable from "@loadable/component"

const Player = loadable(() => import("../components/player"))
import PageTitle from "../components/page-title"
import { format } from "date-fns"
import Introduction from "../components/introduction"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

const Showcase = ({ project }) => {
  return (
    <section
      className="block py-4 my-8 md:my-20 xs:min-h-screen lg:min-h-0"
      css={css`
        scroll-snap-align: start;
      `}
    >
      <Fade delay={100} bottom>
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
        <Fade>
          <span
            className="text-gray-500 capitalize text-base sm:text-lg md:text-xl lg: text-xl text-white relative"
            style={{ top: "-4pt" }}
          >
            {format(project.date, `Do MMMM YYYY`)}
          </span>
        </Fade>
        <Player videoId={project.vimeoID} />
        <p className="text container text-lg lg:text-xl xl:text-2xl mt-8 content">
          {documentToReactComponents(project.description.json)}
        </p>
        <div className="px-1">
          <h3 className="text-xl text-gray-100 font-bold mt-4">Tools Used:</h3>
          <ul className="text-m list-disc list-inside">
            {map(({ name }) => (
              <li className="text-lg lg:text-xl xl:text-2xl">{name}</li>
            ))(project.toolsUsed)}
          </ul>
        </div>
      </Fade>
    </section>
  )
}

const Showcases = ({ projects }) => (
  <div
    className="md:mt-10 lg:mt-15 xl:mt-20"
    css={css`
      scroll-snap-type: y proximity;
      scroll-padding-top: 15vh;
    `}
  >
    {map(project => (
      <div key={project.node.id}>
        <Showcase project={project.node} />
      </div>
    ))(projects)}
  </div>
)

const Portfolio = ({ data }) => (
  <>
    <div className="text-gray-500">
      <SEO title="Sound Design Portfolio" />
      <div className="lg:px-8 xl:px-20 mx-auto">
        <Introduction data={data} />
        <Fade bottom delay={1000}>
          <Showcases projects={data.showcases.edges} />
        </Fade>
      </div>
    </div>
  </>
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
