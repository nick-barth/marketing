import React, { useState } from "react"
import Scroll from "react-scroll"
import classnames from "classnames"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Button from "../components/button"
import Tribox from "../components/Tribox"
import styles from "./index.module.scss"
import mapImg from "../images/tri_map.svg"
import crownImg from "../images/tri_crown.svg"
import magnetImg from "../images/tri_magnet.svg"
import Pricing from "../components/pricing"
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
        <Button>Sign Up</Button>
      </div>
      <div className={styles.solutionsSection}>
        <h3 className={styles.solutionsHeader}>Solutions</h3>
        <div className={styles.triboxHolder}>
          <Tribox
            subtitle="state of the art"
            title="Get a site"
            text="Our services revolve around getting you out there.  We're attempting to cut out the luck and chance from gaming culture, we want to create a more stable infrastructure that rewards consistency and hardwork."
            image={mapImg}
          />
          <Tribox
            subtitle="ezpz"
            title="Get noticed"
            text="Our services revolve around getting you out there.  We're attempting to cut out the luck and chance from gaming culture, we want to create a more stable infrastructure that rewards consistency and hardwork."
            image={magnetImg}
          />
          <Tribox
            subtitle="frag"
            title="Get playing"
            text="Our services revolve around getting you out there.  We're attempting to cut out the luck and chance from gaming culture, we want to create a more stable infrastructure that rewards consistency and hardwork."
            image={crownImg}
          />
        </div>
      </div>
      <Pricing />
    </Layout>
  )
}

export default IndexPage
