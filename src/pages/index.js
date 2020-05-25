import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import StyledBackgroundSection from "../components/backgroundimage"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = props => (
  <Layout>
    <SEO title="Alessandro Di Puccio" />

    <Img
      fluid={props.data.imageOne.childImageSharp.fluid}
      style={{
        backgroundSize: "cover",
        width: "100%",
        backgroundPosition: "center"
        // backgroundRepeat: "no-repeat center center fixed",
      }}
    />
  </Layout>
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
