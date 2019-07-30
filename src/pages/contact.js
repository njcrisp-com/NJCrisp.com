import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <form className="max-w-xl mt-8 md:mt-16 mr-4 mb-4">
      <div className>
        <label className="block text-sm text-gray-00" htmlFor="cus_name">
          Name
        </label>
        <input
          className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          name="cus_name"
          type="text"
          required
          placeholder="Your Name"
          aria-label="Name"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm text-gray-600" htmlFor="cus_email">
          Email
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          name="cus_email"
          type="text"
          required
          placeholder="Your Email"
          aria-label="Email"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm text-gray-600" htmlFor="cus_email">
          Message
        </label>
        <textarea
          rows="3"
          className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
          name="cus_email"
          type="text"
          required
          placeholder="What's up?"
          aria-label="Your Message"
        />
      </div>

      <div className="mt-4">
        <button
          className="px-4 py-1 text-white font-light tracking-wide bg-green-700 rounded"
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
    {documentToReactComponents(data.page.text.json)}
    <ContactForm />
  </Layout>
)

export default ContactPage
