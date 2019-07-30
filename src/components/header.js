import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mb-4 w-screen">
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
      <div className="w-3/4 bg-black h-1"></div>
    </div>
    <div>
      <ul className="w-1/2 block list-none text-3xl inline-flex leading-none pt-3 text-center text-gray-600 font-light">
        <li className="uppercase inline-block text-center  mr-4">
          <Link activeClassName="font-bold text-gray-900" to="/" exact>
            About
          </Link>
        </li>
        <li className="uppercase inline-block text-center  mr-4">
          <Link activeClassName="font-bold text-gray-900" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="uppercase inline-block text-center  mr-4">
          <Link activeClassName="font-bold text-gray-900" to="/tools">
            Tools
          </Link>
        </li>
        <li className="uppercase inline-block text-center  mr-4">
          <Link activeClassName="font-bold text-gray-900" to="/contact">
            Contact
          </Link>
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
