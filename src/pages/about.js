import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/about.scss"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Language from "../components/language"
import Img from "gatsby-image"
import ScrollArrow from "../components/scrollArrow"

const About = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "x_concerto_con_Scott Hamilton_firenze2017.jpg" }
      ) {
        childImageSharp {
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "x Les Italiens Istanbul 2004.jpg" }) {
        childImageSharp {
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwoDesktop: file(
        relativePath: { eq: "x Les Italiens Istanbul 2004.jpg" }
      ) {
        childImageSharp {
          fixed(quality: 100, width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageThree: file(
        relativePath: {
          eq: "x Orchestra (multietnica) Musipolitana Firenze -Fabbrica Europa 2007 .jpg"
        }
      ) {
        childImageSharp {
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lflores: file(
        relativePath: {
          eq: "x_concerto_con_Luca_Flores_al_Salt_Peanuts_1984.jpg"
        }
      ) {
        childImageSharp {
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lfloresDesktop: file(
        relativePath: {
          eq: "x_concerto_con_Luca_Flores_al_Salt_Peanuts_1984.jpg"
        }
      ) {
        childImageSharp {
          fixed(quality: 100, width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pianosolo: file(relativePath: { eq: "pianosolofilm.jpg" }) {
        childImageSharp {
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ppassera: file(
        relativePath: { eq: "x les italiens piazza passera 2008.jpg" }
      ) {
        childImageSharp {
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visual: file(relativePath: { eq: "x visual orchestra 1 2016.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      concertoFiLesItaliens: file(
        relativePath: {
          eq: "1concerto_con_les_italiens_firenze_2001_grancassa.jpg"
        }
      ) {
        childImageSharp {
          fixed(quality: 100, width: 330, height: 430) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      concertoFloresLucca: file(
        relativePath: { eq: "2concerto_per_LucaFlores_2015_Lucca.jpg" }
      ) {
        childImageSharp {
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about-wrapper">
      <Language />
      <Layout>
        <SEO title="About" />
        <ScrollArrow />
        <div className="about-container">
          <div className="bio-wrapper">
            <div className="section-content">
              <h3> {intl.formatMessage({ id: "about_title1" })}</h3>
              <h4>{intl.formatMessage({ id: "about_subtitle1" })}</h4>
              <span>
                {intl.formatMessage({ id: "about_bio1" })}
                <br />
                <div style={{ marginTop: `15px` }} className="image-mobile">
                  <Img
                    fluid={data.imageTwo.childImageSharp.fluid}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    Les Italiens in Istanbul - 2004
                  </span>
                </div>
                <div style={{ marginTop: `15px` }} className="image-desktop">
                  <Img fixed={data.imageTwoDesktop.childImageSharp.fixed} />
                  <span className="overlay">
                    Les Italiens in Istanbul - 2004
                  </span>
                </div>
                <br />
                <span>{intl.formatMessage({ id: "about_bio1_2" })}</span>
                <br /> <br />
                <span>{intl.formatMessage({ id: "about_bio1_3" })}</span>
                <br />
                <div style={{ marginTop: `15px` }}>
                  <Img
                    fluid={data.image.childImageSharp.fluid}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    {intl.formatMessage({ id: "about_image1" })}
                  </span>
                </div>
                <br />
                <div style={{ marginTop: `15px` }}>
                  <Img
                    fixed={data.concertoFiLesItaliens.childImageSharp.fixed}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    {intl.formatMessage({ id: "about_image5" })}
                  </span>
                </div>
              </span>
            </div>
          </div>

          <div className="bio-wrapper">
            <div className="section-content">
              <h3>{intl.formatMessage({ id: "about_title2" })}</h3>
              <span>
                {intl.formatMessage({ id: "about_bio2" })}
                <br />
                <span>{intl.formatMessage({ id: "about_bio2_2" })}</span>
                <br />
                <span>{intl.formatMessage({ id: "about_bio2_3" })}</span>
                <div style={{ marginTop: `15px` }} className="image-mobile">
                  <Img
                    fluid={data.lflores.childImageSharp.fluid}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    {intl.formatMessage({ id: "about_image2" })}
                  </span>
                </div>
                <div style={{ marginTop: `15px` }} className="image-desktop">
                  <Img fixed={data.lfloresDesktop.childImageSharp.fixed} />
                  <span className="overlay">
                    {" "}
                    {intl.formatMessage({ id: "about_image2" })}
                  </span>
                </div>
                <br /> <br />
                {intl.formatMessage({ id: "about_bio2_4" })}
                <div style={{ marginTop: `15px` }}>
                  <Img
                    fluid={data.imageThree.childImageSharp.fluid}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    {" "}
                    {intl.formatMessage({ id: "about_image3" })}
                  </span>
                </div>
                <br />
                <br />
                {intl.formatMessage({ id: "about_bio2_5" })}
                <br />
                <div style={{ marginTop: `15px` }}>
                  <Img
                    fluid={data.concertoFloresLucca.childImageSharp.fluid}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    {intl.formatMessage({ id: "about_image6" })}
                  </span>
                </div>
              </span>
            </div>
          </div>

          <div className="bio-wrapper">
            <div className="section-content">
              <h3>{intl.formatMessage({ id: "about_title3" })}</h3>

              <span>
                {intl.formatMessage({ id: "about_bio3" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio3_2" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio3_3" })}
                <br />
                <br />
                {intl.formatMessage({ id: "about_bio3_4" })}
                <div style={{ marginTop: `15px` }}>
                  <Img
                    fluid={data.pianosolo.childImageSharp.fluid}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    {intl.formatMessage({ id: "about_image4" })}
                  </span>
                </div>
                <br />
                {intl.formatMessage({ id: "about_bio3_5" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio3_6" })}
                <div style={{ marginTop: `15px` }}>
                  <Img
                    fluid={data.ppassera.childImageSharp.fluid}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    Les Italiens Piazza della Passera 2008
                  </span>
                </div>
                <div style={{ marginTop: `30px` }}>
                  <Img
                    fixed={data.visual.childImageSharp.fixed}
                    style={{ position: `relative` }}
                  />
                  <span className="overlay">
                    Visual Orchestra Piazza della Passera 2016
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default injectIntl(About)
