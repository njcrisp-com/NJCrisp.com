import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import css from "@emotion/css"

import {
  faFileAudio,
  faComments,
  faTools,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SecondaryNavigation = () => (
  <section
    id="secondary-navigation"
    className="bg-yellow-100 inline-block w-full"
  >
    <p className="text-base text-gray-600">Whilst you are here, why not...</p>
    <ul className="ml-4">
      <li>
        <Link to="/portfolio">
          <FontAwesomeIcon icon={faFileAudio} className="mr-1 text-green-500" />{" "}
          Check out my work
        </Link>
      </li>
      <li>
        <Link to="/tools">
          <FontAwesomeIcon icon={faTools} className="mr-1 text-orange-500" />{" "}
          Learn about the tools I love to use
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <FontAwesomeIcon icon={faComments} className="mr-1 text-pink-500" />{" "}
          Contact me
        </Link>
      </li>
    </ul>
  </section>
)

const Portrait = ({ data }) => {
  return (
    <img
      css={css`
        width: auto;
        height: 50vh;
        max-height: 400px;
      `}
      src={data.Portrait.publicURL}
      alt="Portrait"
      className=""
    />
  )
}

const AboutText = ({ data }) => {
  return <div id="about-text">{documentToReactComponents(data)}</div>
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home/About" />
      <section id="about-wrapper">
        <div className="relative w-full m-auto bg-red-100">
          <Portrait data={data} />
          <AboutText data={data.page.text.json} />
          <SecondaryNavigation />
        </div>
      </section>
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
    Portrait: file(relativePath: { eq: "jesus@0.5x.png" }) {
      publicURL
    }
  }
`

export default IndexPage
