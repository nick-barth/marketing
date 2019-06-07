import React, { useState } from "react"
import Scroll from "react-scroll"
import classnames from "classnames"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import Img from "gatsby-image"
import Chevron from "../icons/chevron.svg"
import Efficient from "../icons/efficient.svg"
import Performant from "../icons/performant.svg"
import Simple from "../icons/simple.svg"
import "./reset.scss"

const IndexPage = props => {
  const [emailAddress, setEmailAddress] = useState("")
  const [canSend, setCanSend] = useState(false)

  let textInput = null

  function handleClick() {
    textInput.focus()
  }

  const handleChange = value => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    setCanSend(re.test(String(value).toLowerCase()) ? true : false)
    setEmailAddress(value)
  }

  if (typeof window !== undefined) {
    require("react-scroll")
  }

  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop(250)
    setTimeout(() => textInput.focus(), 1000)
  }

  const handleSubmit = () => {
    console.log("wow")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.header}>
        <div className={styles.dancers}>
          <Img
            style={{ position: "absolute" }}
            className={styles.dancer}
            fixed={props.data.ball_1.childImageSharp.fixed}
            alt="Balls"
          />
          <Img
            style={{ position: "absolute" }}
            className={styles.dancer}
            fixed={props.data.ball_2.childImageSharp.fixed}
            alt="Balls"
          />
          <Img
            style={{ position: "absolute" }}
            className={styles.dancer}
            fixed={props.data.ball_3.childImageSharp.fixed}
            alt="Balls"
          />
        </div>
        <div className={classnames(styles.nav, styles.raised)}>
          <div className={styles.logoText}>nextgenerate</div>
        </div>
        <div className={styles.heroContainer}>
          <h1 className={classnames(styles.hero, styles.raised)}>
            Generate a website for your esports team in&nbsp;seconds
          </h1>
          <h2 className={classnames(styles.subhero, styles.raised)}>
            perfect for the start of your esports journey
          </h2>
        </div>
      </div>
      <div className={styles.emailContainer}>
        <h2 className={styles.emailHeader}>
          We're still in Beta, we'd love to see your team.
        </h2>
        <p className={styles.emailSubtext}>
          Enter your email here and we'll give you a free website (for a little
          while).
        </p>
        <form
          method="post"
          action="#"
          className={styles.emailForm}
          netlify
          name="contact"
        >
          <label className={styles.emailInputContainer} htmlFor="email">
            <input
              className={styles.emailInput}
              id="email"
              type="text"
              placeholder="Email"
              onChange={val => handleChange(val.target.value)}
              ref={input => {
                textInput = input
              }}
            />
          </label>
          <button
            disabled={!canSend}
            className={classnames(
              styles.button,
              canSend && styles.buttonCanSend
            )}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <div className={styles.triContainer}>
        <div className={styles.triBox}>
          <Img
            style={{ position: "absolute" }}
            className={styles.triBoxIcon}
            fixed={props.data.ball_4.childImageSharp.fixed}
            alt="Balls"
          />
          <h3 className={styles.triBoxHeader}>Efficient</h3>
          <p className={styles.triBoxContent}>
            With our network of generated sites, we are able to run big data
            user testing to determine the best solution for your site.
          </p>
          <button onClick={scrollToTop} className={styles.triBoxButton}>
            Learn More <Chevron className={styles.icon} />
          </button>
        </div>
        <div className={styles.triBox}>
          <Img
            style={{ position: "absolute" }}
            className={classnames(styles.triBoxIcon, styles.triBoxIcon2)}
            fixed={props.data.ball_4.childImageSharp.fixed}
            alt="Balls"
          />
          <h3 className={styles.triBoxHeader}>Simple</h3>
          <p className={styles.triBoxContent}>
            We are offering you a solution, no guesswork, no DIY, we are
            crafting an out of box experience that suits exactly your needs
          </p>
          <button onClick={scrollToTop} className={styles.triBoxButton}>
            Learn More <Chevron className={styles.icon} />
          </button>
        </div>
        <div className={styles.triBox}>
          <Img
            style={{ position: "absolute" }}
            className={classnames(styles.triBoxIcon, styles.triBoxIcon3)}
            fixed={props.data.ball_4.childImageSharp.fixed}
            alt="Balls"
          />
          <h3 className={styles.triBoxHeader}>Performant</h3>
          <p className={styles.triBoxContent}>
            By using the latest tech and limiting featuresets we are able to
            concisely control user experience, SEO, and the preformance of your
            website.
          </p>
          <button onClick={scrollToTop} className={styles.triBoxButton}>
            Learn More <Chevron className={styles.icon} />
          </button>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionImageContainer}>
          <Simple className={styles.sectionImage} />
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionHeader}>Streamlined</h2>
          <p className={styles.sectionContent}>
            Web data suggests users are looking for a functional, fast, and
            streamlined experience on any website. We are using data and testing
            to ensure we know what the user is looking for, and we are able to
            serve them as quickly as possible.
          </p>
        </div>
      </div>
      <div className={classnames(styles.section, styles.sectionLeft)}>
        <div className={styles.sectionImageContainer}>
          <Performant className={styles.sectionImage} />
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionHeader}>Performance</h2>
          <p className={styles.sectionContent}>
            Execution is key. We strive to use the best technology and enforce
            strict standards on ourselves. So far, it's working. The numbers are
            clear in this, pageload is the single most important metric for
            users interactions with your site. We aim to be as quick as
            possible, to serve you and your users.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionImageContainer}>
          <Efficient className={styles.sectionImage} />
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionHeader}>Data driven</h2>
          <p className={styles.sectionContent}>
            We're making decisions for you, those decisions come from our
            designers, and most importantly our data. We're measuring everything
            about these websites in order to whittle our way down and hone a
            perfect site.
          </p>
        </div>
      </div>
      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          Want to see your new site in action?
        </div>
        <button onClick={scrollToTop} className={styles.ctaCta}>
          Start now
        </button>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    ball_1: file(relativePath: { eq: "ball_1.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ball_4: file(relativePath: { eq: "ball_1.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ball_2: file(relativePath: { eq: "ball_2.png" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ball_3: file(relativePath: { eq: "ball_3.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
