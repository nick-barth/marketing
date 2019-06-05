import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.header}>Hello World</div>
  </Layout>
)

export default IndexPage
