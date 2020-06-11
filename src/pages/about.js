import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/about.scss"
import { Gallery } from "gatsby-theme-gallery"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Language from "../components/language"
import Img from "gatsby-image"
import ReactTooltip from "react-tooltip"

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
      imageTwoDesktop: file(relativePath: { eq: "x Les Italiens Istanbul 2004.jpg" }) {
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
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px"){
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
        <button className="button-gallery">
          <Link to="/galleryMobile" className="has-text-white">
            {intl.formatMessage({ id: "about_opengallery" })}
            📷
          </Link>
        </button>
        <div className="about-container">
          <div className="bio-wrapper">
            <div className="section-content">
              <h3> {intl.formatMessage({ id: "about_title1" })}</h3>
              <h4>{intl.formatMessage({ id: "about_subtitle1" })}</h4>
              <span>
                {intl.formatMessage({ id: "about_bio1" })}
                <br />
                <div data-tip="Les Italiens in Istanbul - 2004" style={{marginTop: `15px`}} className="image-mobile">
                  <Img fluid={data.imageTwo.childImageSharp.fluid} style={{position: `relative`}} />
                  <span className="overlay" style={{color: `black`}}>Les Italiens in Istanbul - 2004</span>
                </div>
                <ReactTooltip />

                <div data-tip="Les Italiens in Istanbul - 2004" style={{marginTop: `15px`}} className="image-desktop">
                  <Img fixed={data.imageTwoDesktop.childImageSharp.fixed} />
                  <span className="overlay" style={{color: `black`}}>Les Italiens in Istanbul - 2004</span>
                </div>
                <ReactTooltip />

                <br />
                {intl.formatMessage({ id: "about_bio1_2" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio1_3" })}
                <br />
                <div data-tip="Concerto con Scott Hamilton Firenze 2017" style={{marginTop: `15px`}}>
                  <Img fluid={data.image.childImageSharp.fluid} style={{position: `relative`}}/>
                  <span className="overlay" style={{color: `black`}}>Concerto con Scott Hamilton Firenze 2017</span>
                </div>
                <ReactTooltip />
              </span>
            </div>
          </div>

          <div className="bio-wrapper">
            <div className="section-content">
              <h3>{intl.formatMessage({ id: "about_title2" })}</h3>
              <span>
                {intl.formatMessage({ id: "about_bio2" })}
                <br />
                {intl.formatMessage({ id: "about_bio2_2" })}
                <br />
                {intl.formatMessage({ id: "about_bio2_3" })}
                <div data-tip="Concerto con Luca Flores al Salt Peanuts 1984" style={{marginTop: `15px`}} className="image-mobile">
                  <Img fluid={data.lflores.childImageSharp.fluid} style={{position: `relative`}}/>
                  <span className="overlay" style={{color: `black`}}>Concerto con Luca Flores al Salt Peanuts 1984</span>
                </div>
                <ReactTooltip />
                <div data-tip="Concerto con Luca Flores al Salt Peanuts 1984" style={{marginTop: `15px`}} className="image-desktop">
                  <Img fixed={data.lfloresDesktop.childImageSharp.fixed} />
                  <span className="overlay" style={{color: `black`}}>Concerto con Luca Flores al Salt Peanuts 1984</span>
                </div>
                <ReactTooltip />
                <br /> <br />
                {intl.formatMessage({ id: "about_bio2_4" })}
                <div data-tip="Orchestra (multietnica) Musipolitana Firenze -Fabbrica Europa 2007" style={{marginTop: `15px`}}>
                  <Img fluid={data.imageThree.childImageSharp.fluid} style={{position: `relative`}}/>
                  <span className="overlay" style={{color: `black`}}>Orchestra (multietnica) Musipolitana Firenze -Fabbrica Europa 2007</span>
                </div>
                <ReactTooltip />
                <br />
                {intl.formatMessage({ id: "about_bio2_5" })}
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
                <div data-tip="Piano Solo" style={{marginTop: `15px`}}>
                  <Img fluid={data.pianosolo.childImageSharp.fluid} style={{position: `relative`}}/>
                  <span className="overlay" style={{color: `black`}}>Scena dal film Piano Solo</span>
                </div>
                <ReactTooltip />
                <br />
             
                {intl.formatMessage({ id: "about_bio3_5" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio3_6" })}
                <div data-tip="Les Italiens Piazza della Passera 2008" style={{marginTop: `15px`}}>
                  <Img fluid={data.ppassera.childImageSharp.fluid} style={{position: `relative`}}/>
                  <span className="overlay" style={{color: `black`}}>Les Italiens Piazza della Passera 2008</span>

                </div>
                <ReactTooltip />
                <div data-tip="Visual Orchestra Piazza della Passera 2016" style={{marginTop: `30px`}}>
                  <Img fluid={data.visual.childImageSharp.fluid} style={{position: `relative`}}/>
                  <span className="overlay" style={{color: `black`}}>Visual Orchestra Piazza della Passera 2016</span>
                </div>
                <ReactTooltip />
              </span>
            </div>
          </div>
        </div>
        <div className="gallery-wrapper">
          <Gallery />
        </div>
      </Layout>
    </div>
  )
}
export default injectIntl(About)
