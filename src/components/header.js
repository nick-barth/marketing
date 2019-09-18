import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from "./button"
import Logo from "../images/logo.svg"

import "./header.css"

const Header = ({ siteTitle }) => {
  return (
    <header id="header" className="header">
      <div className="header-inner">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
              fontSize: "15px",
            }}
          >
            <img style={{ height: "45px" }} src={Logo} />
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
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
