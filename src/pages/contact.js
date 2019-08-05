/** @jsx jsx */
import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Introduction from "../components/introduction"
import { contains } from "ramda"
import { css, jsx } from "@emotion/core"

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

const submitForm = (values, { setSubmitting }) => {
  console.log("submitting form")
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

const errorMessage = ({ children }) => {
  return (
    <div className="text-sm text-center text-red-400 inline-block mx-auto px-4">
      {children}
    </div>
  )
}

const ContactForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  isValid,
  /* and other goodies */
}) => (
  <Form className="leading-loose w-full max-w-screen md:max-w-4xl lg:max-w-5xl mt-6 md:mt-8 mr-4 mb-4">
    <div className="mb-2">
      <label
        className="block text-base uppercase tracking-wide text-gray-600"
        htmlFor="name"
      >
        Name
      </label>
      <Field
        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
        name="name"
        type="text"
        required
        placeholder="Your Name"
        aria-label="Name"
      />
      <ErrorMessage component={errorMessage} name="name" />
    </div>
    <div className="mt-2">
      <label
        className="block text-base uppercase tracking-wide text-gray-600"
        htmlFor="email"
      >
        Email
      </label>
      <Field
        className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
        name="email"
        type="email"
        required
        placeholder="Your Email"
        aria-label="Email"
      />
      <ErrorMessage component={errorMessage} name="email" />
    </div>
    <div className="mt-2">
      <label
        className="block text-base uppercase tracking-wide text-gray-600"
        htmlFor="message"
      >
        Message
      </label>
      <Field
        component="textarea"
        rows="3"
        className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
        name="message"
        required
        placeholder="What's up?"
        aria-label="Message"
      />
      <ErrorMessage component={errorMessage} name="message" />
    </div>

    <div className="mt-4">
      <button
        className={`w-full px-4 py-4 text-lg text-white font-bold tracking-wide uppercase rounded ${
          isValid ? "bg-green-700 hover:bg-green-500" : "bg-gray-500"
        }`}
        type="submit"
        css={css`
          transition: background-color 0.333s ease-in-out;
        `}
      >
        Submit
      </button>
    </div>
  </Form>
)

function validateForm({ email, name, message }) {
  let errors = {}

  if (!email) {
    errors.email = "Please enter your email address"
  }

  if (email.length < 5 || !(contains("@")(email) && contains(".")(email))) {
    errors.email = "Please enter a valid email address"
  }

  if (!name || name.length < 3) {
    errors.name = "Please enter your name"
  }

  if (!message) {
    errors.message = "Please enter a message"
  }

  console.log("validating form")
  return errors
}

const ContactFormik = () => (
  <Formik
    initialValues={{ email: "", name: "", message: "" }}
    onSubmit={submitForm}
    validate={validateForm}
  >
    {props => <ContactForm {...props} />}
  </Formik>
)

const ContactPage = ({ data }) => (
  <>
    <SEO title="Contact" />
    <div className="lg:px-8 xl:px-20">
      <Introduction lightsOn data={data} />
      <ContactFormik />
    </div>
  </>
)

export default ContactPage
