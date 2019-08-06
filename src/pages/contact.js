/** @jsx jsx */
import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Introduction from "../components/introduction"
import { contains } from "ramda"
import { css, jsx } from "@emotion/core"
import * as emailjs from "emailjs-com"

import contactValidationSchema from "../contactValidationSchema"
import { format } from "date-fns"

import Captcha from "../components/captcha"

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

async function sendEmail(values) {
  const templateParams = {
    date: format(new Date(), "DD/MM/YYYY hh:mm:ss"),
    ...values,
  }
  console.log("sending email with params:", templateParams)

  return emailjs.send(
    "default_service",
    "contact",
    templateParams,
    "user_IlrblBSFJVzYxWfhDXKOa"
  )
}

const errorMessage = ({ children }) => {
  return (
    <div className="text-sm text-center text-red-400 inline-block mx-auto px-4">
      {children}
    </div>
  )
}

const ContactForm = ({}) => {
  const [finished, setFinished] = useState(false)
  const [human, setHuman] = useState(false)

  const onChange = args => {
    console.log("reCaptcha onChange:", args)
    setHuman(true)
  }

  if (!finished) {
    return (
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submitting form")
          if (human) {
            sendEmail(values).then(
              success => {
                setSubmitting(false)
                setFinished(true)
              },
              error => {
                alert("Error!", error)
              }
            )
          } else {
            alert("Please fill out ReCAPTCHA to verify you are a human")
            setSubmitting(false)
          }
        }}
        validationSchema={contactValidationSchema}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => {
          const submitButtonText =
            isValid && isSubmitting ? "Submitting..." : "Submit"
          return (
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
              <div className="my-2">
                <Captcha onChange={onChange} />
              </div>
              <div className="mt-4">
                <button
                  className={`w-full px-4 py-4 text-lg text-white font-bold tracking-wide uppercase rounded ${
                    !isValid ? "bg-gray-500 cursor-not-allowed" : ""
                  }
          ${isValid && !isSubmitting ? "bg-green-700 hover:bg-green-500" : ""}

          ${
            isValid && isSubmitting
              ? "bg-yellow-700 cursor-wait pointer-events-none"
              : ""
          }
        `}
                  type="submit"
                  css={css`
                    transition: background-color 0.333s ease-in-out;
                  `}
                >
                  {submitButtonText}
                </button>
              </div>
            </Form>
          )
        }}
      ></Formik>
    )
  } else {
    return (
      <div className="m-6 p-2 text-center block text-xl content">
        <p>{`Thank you for your message.`}</p>
        <p>{`I'll reply to you ASAP.`}</p>
        <p>
          <Link to="/">go back to the homepage</Link>
        </p>
      </div>
    )
  }
}

const ContactPage = ({ data }) => (
  <>
    <SEO title="Contact" />
    <div className="lg:px-8 xl:px-20">
      <Introduction lightsOn data={data} />
      <ContactForm />
    </div>
  </>
)
export default ContactPage
