import React, { useState } from "react"
import classnames from "classnames"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import Img from "gatsby-image"
import Chevron from "../icons/chevron.svg"

const IndexPage = props => {
  const [emailAddress, setEmailAddress] = useState("")
  const [canSend, setCanSend] = useState(false)

  const handleChange = value => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    setCanSend(re.test(String(value).toLowerCase()) ? true : false)
    setEmailAddress(value)
  }

  console.log(props.data)

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
          <div className={classnames(styles.hero, styles.raised)}>
            Generate a website for your esports team in&nbsp;seconds
          </div>
          <div className={classnames(styles.subhero, styles.raised)}>
            perfect for the start of your esports journey
          </div>
        </div>
      </div>
      <div className={styles.emailContainer}>
        <div className={styles.emailHeader}>
          We're still in Beta, however, we'd love to see your team.
        </div>
        <div className={styles.emailSubtext}>
          Enter your email here and we'll give you a free website (for a little
          while).
        </div>
        <div className={styles.emailForm}>
          <div className={styles.emailInputContainer}>
            <input
              className={styles.emailInput}
              id="email"
              type="text"
              placeholder="Email"
              onChange={val => handleChange(val.target.value)}
            />
          </div>
          <button
            disabled={!canSend}
            className={classnames(
              styles.button,
              canSend && styles.buttonCanSend
            )}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
      <div className={styles.triContainer}>
        <div className={styles.triBox}>
          <Img
            style={{ position: "absolute" }}
            className={styles.triBoxIcon}
            fixed={props.data.ball_4.childImageSharp.fixed}
            alt="Balls"
          />
          <div className={styles.triBoxHeader}>Efficient</div>
          <div className={styles.triBoxContent}>
            With our network of generated sites, we are able to run big data
            user testing to determine the best solution for your site.
          </div>
          <button className={styles.triBoxButton}>
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
          <div className={styles.triBoxHeader}>Simple</div>
          <div className={styles.triBoxContent}>
            We are offering you a solution, no guesswork, no DIY, we are
            crafting an out of box experience that suits exactly your needs
          </div>
          <button className={styles.triBoxButton}>
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
          <div className={styles.triBoxHeader}>Performant</div>
          <div className={styles.triBoxContent}>
            By limiting featuresets we are able to concisely control user
            experience, SEO, and the preformance of your website.
          </div>
          <button className={styles.triBoxButton}>
            Learn More <Chevron className={styles.icon} />
          </button>
        </div>
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
