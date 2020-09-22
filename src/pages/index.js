import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.scss"
import {TiHeartFullOutline} from 'react-icons/ti';

const IndexPage = props => (
  <div className="outer-container-index">
    <Layout>
      <SEO title="Alessandro Di Puccio" />

      <footer style={{ color: ` white` }}>
        © {new Date().getFullYear()}, Built with <TiHeartFullOutline/>
        <br/>
        Image by<a href="https://www.instagram.com/fabiana_laurenzi/?hl=it" target="_blank" rel="noreferrer" style={{color: 'white', textDecoration: 'underline', fontSize:'12px'}}>Fabiana Laurenzi</a>
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
