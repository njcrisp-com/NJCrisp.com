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

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home/About" />
      <div className="relative w-full max-w-3xl m-auto text-xl md:pt-20 lg:pt-30 xl:pt-40">
        <img
          css={css`
            width: auto;
            height: 50vh;
            max-height: 400px;
          `}
          src={data.Portrait.publicURL}
          alt="Portrait"
          className="float-left mr-8"
        />
        <div id="about-text">
          {documentToReactComponents(data.page.text.json)}
        </div>
        <div
          id="secondary-navigation"
          className="w-full max-w-md text-left mt-12 absolute right-0"
        >
          <p className="text-base text-gray-600">
            Whilst you are here, why not...
          </p>
          <ul className="ml-4">
            <li>
              <Link to="/portfolio">
                <FontAwesomeIcon
                  icon={faFileAudio}
                  className="mr-1 text-green-500"
                />{" "}
                Check out my work
              </Link>
            </li>
            <li>
              <Link to="/tools">
                <FontAwesomeIcon
                  icon={faTools}
                  className="mr-1 text-orange-500"
                />{" "}
                Learn about the tools I love to use
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FontAwesomeIcon
                  icon={faComments}
                  className="mr-1 text-pink-500"
                />{" "}
                Contact me
              </Link>
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
    Portrait: file(relativePath: { eq: "jesus@0.5x.png" }) {
      publicURL
    }
  }
`

export default IndexPage
