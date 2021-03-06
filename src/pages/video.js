import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss"
import "react-awesome-slider/dist/styles.css"
import "../components/video.scss"
import { injectIntl } from "gatsby-plugin-intl"
import Language from "../components/language"
import { animateScroll as scroll } from "react-scroll"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-c137.css"
import { Link } from "gatsby"

const Video = ({ intl }) => {
  // const videoquery = graphql`
  //   {
  //     allYoutubeVideo(
  //       filter: { channelId: { eq: "UChCWBb3bJHHF08ktBunb21Q" } }
  //     ) {
  //       edges {
  //         node {
  //           id
  //           title
  //           description
  //           videoId
  //           publishedAt
  //           privacyStatus
  //         }
  //       }
  //     }
  //   }
  // `
  // console.log(videoquery)

  return (
    <div className="video-outer-wrapper">
      <Language />
      <Layout>
        <SEO title="Other Projects" />
        <div className="inner">
          <AwesomeButton size="small" type="primary">
            <Link to="/music">MUSIC</Link>
          </AwesomeButton>
        </div>

        <div className="video-flex">
          <div className="description-wrapper">
            <div className="description">
              {intl.formatMessage({ id: "video_description" })}
            </div>
          </div>
          <div className="video-container" id="video-index">
            <AwesomeSlider
              cssModule={AwesomeSliderStyles}
              mobileTouch
              animation="cubeAnimation"
            >
              <div className="video-wrapper-inner">
                <iframe
                  title="neorealista"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/CTe0P7i0wCk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-text">
                  {intl.formatMessage({ id: "text-other-projects8" })}
                </div>
              </div>
              <div className="video-wrapper-inner">
                <iframe
                  title="sindrome"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/GxpiGI2m9u8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-text">
                  {intl.formatMessage({ id: "text-other-projects7" })}
                </div>
              </div>
              <div className="video-wrapper-inner">
                <iframe
                  title="auf wiedersehen, goodbye"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/-fWlgrf7h-0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-text">
                  {intl.formatMessage({ id: "text-other-projects1" })}
                </div>
              </div>

              <div className="video-wrapper-inner">
                <iframe
                  title="le nozze"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/j5EEvSV3224"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-text">
                  {intl.formatMessage({ id: "text-other-projects2" })}
                </div>
              </div>
              <div className="video-wrapper-inner">
                <iframe
                  title="canzona"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/szfban48x7E"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-text">
                  {intl.formatMessage({ id: "text-other-projects3" })}
                </div>
              </div>
              <div className="video-wrapper-inner">
                <iframe
                  title="exp part1"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/eijp33GV7Lc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-text">
                  {intl.formatMessage({ id: "text-other-projects4" })}
                </div>
              </div>
              <div className="video-wrapper-inner">
                <iframe
                  title="exp part2"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/NaAX_CSKnAw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-text">
                  {intl.formatMessage({ id: "text-other-projects5" })}
                </div>
              </div>
              <div className="video-wrapper-inner">
                <iframe
                  title="lulu"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/J6SEu-Vi6zw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-text">
                  {intl.formatMessage({ id: "text-other-projects6" })}
                </div>
              </div>
            </AwesomeSlider>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default injectIntl(Video)
