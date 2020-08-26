import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "../components/music.scss"
// import { Link, animateScroll as scroll } from "react-scroll"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Language from "../components/language"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-c137.css"
import { Link } from "gatsby"

const Music = ({ intl }) => (
  <div className="music-outer-wrapper">
    <Language />
    <Layout>
      <SEO title="Music" />
      <div className="inner">
        <AwesomeButton size="small" type="primary">
          <Link to="/video">VIDEO</Link>
        </AwesomeButton>
      </div>
      {/* <Link
        activeClass="active"
        to="music-index"
        spy={true}
        smooth={true}
        offset={100}
        duration={500}
        style={{
          display: `flex`,
          flexFlow: `column`,
          alignItems: `flex-end`,
          fontSize: `16px`,
          textTransform: `none`,
          textDecoration: `underline`
        }}
      >
        {intl.formatMessage({ id: "submenu1" })}
      </Link>
      <Link
        activeClass="active"
        to="video-concert"
        spy={true}
        smooth={true}
        offset={100}
        duration={500}
        style={{
          display: `flex`,
          flexFlow: `column`,
          alignItems: `flex-end`,
          fontSize: `16px`,
          textTransform: `none`,
          textDecoration: `underline`
        }}
      >
        {intl.formatMessage({ id: "submenu2" })}
      </Link> */}
      <div className="grid big-content">
        
        <AwesomeSlider mobileTouch animation="cubeAnimation">
          <div className="card">
            <iframe
              className="first-frame"
              title="soundcloud1"
              width="100%"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/759887992&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
          </div>

          <div className="card">
            <iframe
              className="first-frame"
              title="soundcloud2"
              width="100%"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/692279068&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
          </div>
          <div className="card">
            <iframe
              className="first-frame"
              title="soundcloud3"
              width="100%"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/758746639&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
          </div>

          <div className="card">
            <iframe
              className="first-frame"
              title="soundcloud4"
              width="100%"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/758736940&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
          </div>
        </AwesomeSlider>
      </div>
      <div className="music-index" id="music-index">
        <iframe
          className="index-frame"
          title="view"
          width="100%"
          height="800"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/777356173&color=%23304463&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
        ></iframe>
      </div>

      <div className="video-container" id="video-concert">
        <AwesomeSlider mobileTouch animation="cubeAnimation">
          <div className="video-wrapper-inner">
            <iframe
              title="all the things you are"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/BnElYWZ_Z3U"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-text">
              {intl.formatMessage({ id: "text-video-concert1" })}
            </div>
          </div>
          <div className="video-wrapper-inner">
            <iframe
              title="things are getting better"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/UE3RFW_-mLg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-text">
              {intl.formatMessage({ id: "text-video-concert2" })}
            </div>
          </div>
          <div className="video-wrapper-inner">
            <iframe
              title="exactly like you"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/tlkCZvYcRuM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-text">
              {intl.formatMessage({ id: "text-video-concert3" })}
            </div>
          </div>
          <div className="video-wrapper-inner">
            <iframe
              title="wabash"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/Ue991RFCqEc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-text">
              {intl.formatMessage({ id: "text-video-concert4" })}
            </div>
          </div>
          <div className="video-wrapper-inner">
            <iframe
              title="sack of woe"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/4OWn03UPc4o"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-text">
              {intl.formatMessage({ id: "text-video-concert5" })}
            </div>
          </div>
          <div className="video-wrapper-inner">
            <iframe
              title="azure"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/3wLbhu4Uf7I"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-text">
              {intl.formatMessage({ id: "text-video-concert6" })}
            </div>
          </div>
        </AwesomeSlider>
      </div>
    </Layout>
  </div>
)

export default injectIntl(Music)
