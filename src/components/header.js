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
        maxWidth: 960
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontSize: `20px`,
            position: `absolute`,
            top: `8px`,
            right: `2px`,
            color: `#457b9d`,
            textDecoration: `none`,
            padding: `15px`,
            borderRadius: `5px`
            // background: `rgba(255, 255, 255, 0.4)`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
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
