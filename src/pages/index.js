import React from "react"
import classnames from "classnames"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"
import Img from "gatsby-image"

const IndexPage = props => {
  console.log(props.data)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.header}>
        <div className={styles.dancers}>
          <Img
            style={{ position: "absolute" }}
            className={styles.dancer}
            fluid={props.data.ball_1.childImageSharp.fixed}
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
        <div className={classnames(styles.nav, styles.raised)}>Logo Here</div>
        <div className={classnames(styles.hero, styles.raised)}>
          Generate a website for your esports team in seconds
        </div>
        <div className={classnames(styles.subhero, styles.raised)}>
          Simple, efficient, cheap
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
