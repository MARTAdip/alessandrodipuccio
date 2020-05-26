import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss"
import "react-awesome-slider/dist/styles.css"
import "../components/video.scss"

const Video = props => (
  <div className="video-outer-wrapper">
    <Layout>
      <SEO title="Other Projects" />
      <div className="video-container">
        <AwesomeSlider
          cssModule={AwesomeSliderStyles}
          animation="foldOutAnimation"
        >
          <div className="video-wrapper-inner">
            <iframe
              title="piove"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uuaoVDjRhGo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-text">
              lorem ipsumdnfekjwnfoigrjkeb
              dehbnfiouhgjreoibhiugdhfeuoirhgiuefghorüebhoiiehr
            </div>
          </div>
          <div className="video-wrapper-inner">
            <iframe
              title="araba"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/647EhZQq2F0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* 
            <video controls width="100%">
              <track kind="captions" {...props} />
              <source src="https://www.facebook.com/235867483524943/videos/236464490131909/" type="video/mp4" />
            </video>
          */}
        </AwesomeSlider>
      </div>
    </Layout>
  </div>
)

export default Video
