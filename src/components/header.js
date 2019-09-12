import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "./button"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 0`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: "15px",
          }}
        >
          <img src={Logo} />
        </Link>
      </h1>
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: "15px",
            marginRight: "20px",
          }}
        >
          Solutions
        </Link>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: "15px",
            marginRight: "20px",
          }}
        >
          Pricing
        </Link>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: "15px",
            marginRight: "20px",
          }}
        >
          Contact
        </Link>
        <a
          href="app.burst.gg"
          style={{
            color: `black`,
            fontSize: "12px",
          }}
        >
          <Button>Login</Button>
        </a>
      </div>
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
