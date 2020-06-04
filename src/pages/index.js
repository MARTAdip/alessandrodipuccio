import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.scss"

const IndexPage = props => (
  <div className="outer-container-index">
    <Layout>
      <SEO title="Alessandro Di Puccio" />

      <footer style={{ color: ` white` }}>
        © {new Date().getFullYear()}, Built with love
        {` `}
      </footer>
    </Layout>
  </div>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home.jpeg" }) {
      ...fluidImage
    }
  }
`
