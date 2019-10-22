import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Link } from "gatsby"
import { graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import css from "@emotion/css"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import Bounce from "react-reveal/Bounce"

import {
  faFileAudio,
  faComments,
  faTools,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SecondaryNavigation = () => (
  <section id="secondary-navigation" className="flex text-left mt-10 mr-5">
    <Zoom delay={500}>
      <div className="flex-grow"></div>
      <div className="flex-shrink">
        <p className="text-base text-gray-600 text-center sm:text-left pt-6">
          Whilst you are here, why not...
        </p>
        <ul
          className="ml-4 list-none"
          css={css`
            list-style-type: none;
          `}
        >
          <li className="text-gray-800 hover:text-gray-600 my-2">
            <Link to="/portfolio">
              <FontAwesomeIcon
                icon={faFileAudio}
                className="mr-1 text-green-500"
              />{" "}
              Check out <span className="font-bold text-blue-600">my work</span>
            </Link>
          </li>
          <li className="text-gray-800 hover:text-gray-600 my-2">
            <Link to="/tools">
              <FontAwesomeIcon
                icon={faTools}
                className="mr-1 text-orange-500"
              />{" "}
              Learn about the{" "}
              <span className="font-bold text-blue-600">tools</span> I love to
              use
            </Link>
          </li>
          <li className="text-gray-800 hover:text-gray-600 my-2">
            <Link to="/contact">
              <FontAwesomeIcon
                icon={faComments}
                className="mr-1 text-pink-500"
              />{" "}
              Get in <span className="font-bold text-blue-600">contact</span>{" "}
              with me
            </Link>
          </li>
        </ul>
      </div>
    </Zoom>
  </section>
)

const HomepagePhoto = ({ data }) => {
  return (
    <figure className="self-center flex-1 flex-grow min-w-full xs:min-w-full sm:min-w-full md:min-w-full lg:min-w-0">
      <Fade delay={1500}>
        <Img
          fluid={data.HomepagePhoto.childImageSharp.fluid}
          alt="HomepagePhoto"
          css={css``}
          className="w-full rounded"
        />
      </Fade>
    </figure>
  )
}

const AboutText = ({ data }) => {
  return (
    <div
      id="about-text"
      className="w-64 flex-1 text-lg text-center lg:text-xl lg:text-left mx-4 lg:mx-12 xl:mx-20 lg:mt-0 mt-6 self-center max-w-6xl"
    >
      <Zoom delay={750}>
        <div className="content md:text-xl lg:text-2xl px-4 ">
          {documentToReactComponents(data)}
        </div>
        <SecondaryNavigation />
      </Zoom>
    </div>
  )
}

const IndexPage = ({ data }) => {
  return (
    <Fade delay={750}>
      <SEO title="Sound Design & Audio Production" />
      <section id="about-wrapper">
        <div className="w-full max-w-screen m-auto h-full flex flex-wrap py-0 md:py-6 lg:py-20">
          <HomepagePhoto data={data} />
          <AboutText data={data.page.text.json} />
        </div>
      </section>
    </Fade>
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
    HomepagePhoto: file(relativePath: { eq: "natan-in-studio.jpg" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
