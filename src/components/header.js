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
            to="/#top"
            style={{
              color: `black`,
              textDecoration: `none`,
              fontSize: "15px",
            }}
          >
            <img alt="burst.gg" style={{ height: "45px" }} src={Logo} />
          </Link>
        </h1>
        <div style={{ margin: 0 }}>
          <Link to="/#solutions" className="header-link">
            Solutions
          </Link>
          <Link to="/#pricing" className="header-link">
            Pricing
          </Link>
          <Link
            className="header-link"
            onClick={() => window.$crisp.push(["do", "chat:open"])}
          >
            Contact
          </Link>
          <a
            href="app.burst.gg"
            className="header-button"
            header-button
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
