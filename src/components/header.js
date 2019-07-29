import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="pl-8 pt-8 mb-4">
    <div>
      <h1 className="capitalized text-4xl font-bold leading-none">
        <Link to="/" exact>
          <span class="block">Natan</span>
          <span class="block">James</span>
          <span class="block">Crisp</span>
        </Link>
      </h1>
      <p className="lowercase text-lg">Sound Design & Audio Production</p>
    </div>
    <div className="my-1">
      <div className="w-2/3 bg-black h-1"></div>
    </div>
    <div>
      <ul className="list-none text-3xl inline-flex leading-none pt-3">
        <li className="uppercase inline mr-4">
          <Link to="/" exact>
            About
          </Link>
        </li>
        <li className="uppercase inline mr-4">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="uppercase inline mr-4">
          <Link to="/tools">Tools</Link>
        </li>
        <li className="uppercase inline mr-4">
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
