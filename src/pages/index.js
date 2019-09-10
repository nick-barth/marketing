import React, { useState } from "react"
import Scroll from "react-scroll"
import classnames from "classnames"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import Img from "gatsby-image"
import "./reset.scss"

const IndexPage = props => {
  let textInput = null

  if (typeof window !== undefined) {
    require("react-scroll")
  }

  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop(250)
    setTimeout(() => textInput.focus(), 1000)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <div className={styles.hero}>
        <h2 className={styles.heroTitle}>
          The fast and visual way to get discovered.
        </h2>
        <p className={styles.heroSubTitle}>
          Everything gamers and streamers need to get out there.
        </p>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#532b74"
            d="M0,128L80,154.7C160,181,320,235,480,218.7C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a2d9ff"
            fill-opacity="1"
            d="M0,192L40,170.7C80,149,160,107,240,117.3C320,128,400,192,480,186.7C560,181,640,107,720,112C800,117,880,203,960,229.3C1040,256,1120,224,1200,213.3C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>
    </Layout>
  )
}

export default IndexPage
