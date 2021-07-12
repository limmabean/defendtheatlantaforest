import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"row"}>
      <div className={"column column-side"}></div>
      <div className={"column column-main"}>
        <h1 className={"header__title"}>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className={"column column-side"}></div>
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
