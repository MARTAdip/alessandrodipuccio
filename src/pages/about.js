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
          fixed(quality: 100, width: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageTwo: file(relativePath: { eq: "x Les Italiens Istanbul 2004.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300) {
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
          fixed(quality: 100, width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pianosolo: file(relativePath: { eq: "pianosolofilm.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ppassera: file(
        relativePath: { eq: "x les italiens piazza passera 2008.jpg" }
      ) {
        childImageSharp {
          fixed(quality: 100, width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      visual: file(relativePath: { eq: "x visual orchestra 1 2016.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data, "hello")

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
                <div data-tip="Les Italiens in Istanbul - 2004" style={{marginTop: `15px`}}>
                  <Img fixed={data.imageTwo.childImageSharp.fixed} />
                  <span className="overlay" style={{color: `black`}}>Les Italiens in Istanbul - 2004</span>
                </div>
                <ReactTooltip />
                <br />
                {intl.formatMessage({ id: "about_bio1_2" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio1_3" })}
                <br />
                <div data-tip="Concerto con Scott Hamilton Firenze 2017" style={{marginTop: `15px`}}>
                  <Img fixed={data.image.childImageSharp.fixed} />
                  <span className="overlay" style={{color: `white`}}>Concerto con Scott Hamilton Firenze 2017</span>
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
                <br /> <br />
                {intl.formatMessage({ id: "about_bio2_4" })}
                <div data-tip="Orchestra (multietnica) Musipolitana Firenze -Fabbrica Europa 2007" style={{marginTop: `15px`}}>
                  <Img fixed={data.imageThree.childImageSharp.fixed} />
                  <span className="overlay" style={{color: `white`}}>Orchestra (multietnica) Musipolitana Firenze -Fabbrica Europa 2007</span>
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
                  <Img fixed={data.pianosolo.childImageSharp.fixed} />
                  <span className="overlay" style={{color: `black`}}>Scena dal film Piano Solo</span>
                </div>
                <ReactTooltip />
                <br />
             
                {intl.formatMessage({ id: "about_bio3_5" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio3_6" })}
                <div data-tip="Les Italiens Piazza della Passera 2008" style={{marginTop: `15px`}}>
                  <Img fixed={data.ppassera.childImageSharp.fixed} />
                  <span className="overlay" style={{color: `white`}}>Les Italiens Piazza della Passera 2008</span>

                </div>
                <ReactTooltip />
                <div data-tip="Visual Orchestra Piazza della Passera 2016" style={{marginTop: `15px`}}>
                  <Img fixed={data.visual.childImageSharp.fixed} />
                  <span className="overlay" style={{color: `white`}}>Visual Orchestra Piazza della Passera 2016</span>
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
