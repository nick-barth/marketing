import React, { useState } from "react"
import Scroll from "react-scroll"
import classnames from "classnames"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Button from "../components/button"
import Tribox from "../components/tribox"
import styles from "./index.module.scss"
import mapImg from "../images/tri_map.svg"
import crownImg from "../images/tri_crown.svg"
import magnetImg from "../images/tri_magnet.svg"
import Pricing from "../components/pricing"
import dbkImg from "../images/dbk.svg"
import permaImg from "../images/permastunned.svg"
import aberdeeneaglesImg from "../images/aberdeeneagles.svg"
import rhsImg from "../images/rhs.svg"
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

  const teams = [
    { image: dbkImg, alt: "dbkImage" },
    { image: aberdeeneaglesImg, alt: "abderdeen eagles" },
    { image: rhsImg, alt: "rhs image" },
    { image: permaImg, alt: "perma stunned gaming" },
  ]

  return (
    <>
      <Header />
      <Layout>
        <SEO title="Home" />
        <div className={styles.hero}>
          <h2 className={styles.heroTitle}>
            The fast and visual way to get discovered.
            <div data-aos="fade-in" className={styles.brush} />
          </h2>
          <p className={styles.heroSubTitle}>
            Everything gamers and streamers need to get out there.
          </p>
          <Button>Sign Up</Button>
        </div>
        <div className={styles.trustedSection}>
          <h3 className={styles.trustedTitle}>
            Trusted by over 100 players, and 20 organisations, across 11
            countries
          </h3>
          <div className={styles.trustedImageContainer}>
            {teams.map(t => {
              return (
                <img
                  className={styles.trustedImage}
                  alt={t.alt}
                  src={t.image}
                />
              )
            })}
          </div>
        </div>
        <div className={styles.solutionsSection}>
          <h3 className={styles.solutionsHeader}>Solutions</h3>
          <div className={styles.triboxHolder}>
            <Tribox
              subtitle="state of the art"
              title="Get a site"
              text="SEO driven.  Responsive.  Performant.  Ready for loads of users.  Beautiful.  Efficient.  Custimizable.  We are looking to build a proffessional facing product for you to use as your homebase.  You will track your users and monitor your progress with our analytics."
              image={mapImg}
            />
            <Tribox
              subtitle="ezpz"
              title="Get noticed"
              text="Streamers, gamers, organisations, our goal is to get you noticed.  We are looking to proffesionalise your brand, make you stand out to sponsors, your audience, and the gaming scene.  Our clients tend to be proffessional focused and driven content creaters in esports.  Just like us."
              image={magnetImg}
            />
            <Tribox
              subtitle="frag"
              title="Get big"
              text="Our goal is bridge the gap between a pug star, and a super star.  We want to stabilize the journey from highly skilled amatuer to proffessional.  Our agents are all experienced gamers and industry proffesionals, who are looking to pass on knowledge and skills to the next generation of players.  "
              image={crownImg}
            />
          </div>
        </div>
        <Pricing />
        <div className={styles.footer}>
          <div className={styles.waveContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#eca400"
                fill-opacity="1"
                d="M0,192L34.3,165.3C68.6,139,137,85,206,106.7C274.3,128,343,224,411,250.7C480,277,549,235,617,192C685.7,149,754,107,823,117.3C891.4,128,960,192,1029,181.3C1097.1,171,1166,85,1234,64C1302.9,43,1371,85,1406,106.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              />
            </svg>
          </div>
          <div className={styles.waveContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#532b74"
                fill-opacity="1"
                d="M0,160L34.3,144C68.6,128,137,96,206,101.3C274.3,107,343,149,411,154.7C480,160,549,128,617,106.7C685.7,85,754,75,823,90.7C891.4,107,960,149,1029,176C1097.1,203,1166,213,1234,208C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
