import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="site-header"
    style={{
      paddingTop: `3rem`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        marginTop: `150px`,
        padding: `1.45rem 1.0875rem`,
        position: `realtive`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            position: `absolute`,
            top: `15px`,
            right: `2px`,
            color: `#000`,
            textDecoration: `none`,
            padding: `15px`,
            borderRadius: `5px`,
            background: `rgba(255, 255, 255, 0.4)`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
