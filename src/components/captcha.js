import React from "react"

import * as ReCAPTCHA from "react-recaptcha"

export const Captcha = ({ onChange }) => (
  <div>
    <ReCAPTCHA
      verifyCallback={onChange}
      sitekey={process.env.GATSBY_RECAPTCHA_KEY}
    />
  </div>
)

export default Captcha
