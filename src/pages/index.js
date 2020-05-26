import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = props => (
  <div className="outer-container-index">
    <Layout>
      <SEO title="Alessandro Di Puccio" />

      <Img
        fluid={props.data.imageOne.childImageSharp.fluid}
        style={{
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center",
        }}
      />
      <footer>
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
      fluid(maxWidth: 1000) {
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
