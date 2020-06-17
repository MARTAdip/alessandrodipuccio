import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/press.scss"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Language from "../components/language"

const Press = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "intervista passera.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="press-outer-wrapper">
      <Language />

      <Layout>
        <SEO title="Press" />
        <div className="press-container">
          <div className="press-wrapper">
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title1" })}
              </h2>
              <span className="description">
                {intl.formatMessage({ id: "press_description1" })}
              </span>
              <br />
              <AudioPlayer
                src="https://episodes.castos.com/Controradio-it/Alessandro-Di-Puccio-Ingredere-Fancesco-Corteccia-genius-loci.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
              />
              <a
                href="https://www.allaboutjazz.com/genius-loci-festival-di-santa-croce-a-firenze-by-neri-pollastri.php"
                target="blank"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title2" })}
              </h2>
              <span className="description">
                {intl.formatMessage({ id: "press_description2" })}
              </span>
              <br />
              <Img fixed={data.imageOne.childImageSharp.fixed} />
              <a
                href="https://www.youtube.com/watch?time_continue=2&v=J6tNTZ5ZVpM&feature=emb_title"
                target="blank"
              >
                {intl.formatMessage({ id: "press_link2" })}
              </a>
              {/* <iframe
              title="intervista"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/J6tNTZ5ZVpM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            </div>

            <hr />
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title3" })}
              </h2>
              <span className="description">
                {intl.formatMessage({ id: "press_description3" })}
              </span>
              <br />
              <iframe
                title="musipolitana"
                width="450"
                height="315"
                src="https://www.youtube.com/embed/FBRQ1cDyGh8"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <hr />
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title4" })}
              </h2>
              <span className="description"></span>
              <br />
              <iframe
                title="piazza passera"
                width="450"
                height="315"
                src="https://www.youtube.com/embed/QXTM0dd3lJ0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title5" })}
              </h2>
              <span className="description">
                {intl.formatMessage({ id: "press_description4" })}
              </span>
              <br />
              <iframe
                title="coro"
                width="450"
                height="315"
                src="https://www.youtube.com/embed/zsASjbgJ5E4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default injectIntl(Press)
