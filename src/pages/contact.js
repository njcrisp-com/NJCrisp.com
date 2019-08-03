import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction"

export const query = graphql`
  query ContactQuery {
    page: contentfulPage(label: { eq: "Contact" }) {
      id
      label
      text {
        id
        json
      }
    }
  }
`

const ContactForm = () => (
  <div className="leading-loose">
    <form className="w-full max-w-screen md:max-w-4xl lg:max-w-5xl mt-6 md:mt-8 mr-4 mb-4">
      <div className>
        <label
          className="block text-base uppercase tracking-wide text-gray-600"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          name="name"
          type="text"
          required
          placeholder="Your Name"
          aria-label="Name"
        />
      </div>
      <div className="mt-2">
        <label
          className="block text-base uppercase tracking-wide text-gray-600"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          name="email"
          type="text"
          required
          placeholder="Your Email"
          aria-label="Email"
        />
      </div>
      <div className="mt-2">
        <label
          className="block text-base uppercase tracking-wide text-gray-600"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          rows="3"
          className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
          name="message"
          required
          placeholder="What's up?"
          aria-label="Message"
        />
      </div>

      <div className="mt-4">
        <button
          className="w-full px-4 py-4 text-lg text-white font-bold tracking-wide uppercase bg-green-700 hover:bg-green-500 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
)

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <div className="lg:px-8 xl:px-20">
      <Introduction lightsOn data={data} />
      <ContactForm />
    </div>
  </Layout>
)

export default ContactPage
