import React from "react"
// import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss"
import "../components/music.scss"

const Music = id => (
  <div className="music-outer-wrapper">
    <Layout>
      <SEO title="Music" />
      <div className="grid">
        <AwesomeSlider
          mobileTouch
          animation="cubeAnimation"
          // cssModule={AwesomeSliderStyles}
        >
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

      <div className="music-index">
        <iframe
          className="index-frame"
          title="view"
          width="100%"
          height="600"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/777356173&color=%23304463&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
        ></iframe>
      </div>
    </Layout>
  </div>
)

// const Music = () => (
//   <Layout>
//     <SEO title="Music" />
//     <div>
//       <Soundcloud />
//     </div>
//   </Layout>
// )
export default Music
