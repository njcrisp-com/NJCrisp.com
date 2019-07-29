import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 className="capitalized text-4xl leading-none">
        <Link to="/">Natan James Crisp</Link>
      </h1>
    </div>
    <div>
      <ul className="list-none inline-flex leading-none">
        <li className="uppercase text-lg inline mr-4">
          <Link to="/portfolio">About</Link>
        </li>
        <li className="uppercase text-lg inline mr-4">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="uppercase text-lg inline mr-4">
          <Link to="/tools">Tools</Link>
        </li>
        <li className="uppercase text-lg inline mr-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
