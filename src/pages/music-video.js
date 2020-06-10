import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-c137.css"
import "../components/music-video.scss"
import { Link } from "gatsby"

const MusicVideo = () => {
  return (
    <div className="music-video-outer-wrapper">
      <Layout>
        <SEO title="Music-Video" />
        <div className="choice-container">
          <div className="col-music">
            <div className="inner">
              <AwesomeButton size="large" type="primary">
                <Link to="/music">MUSIC</Link>
              </AwesomeButton>
            </div>
          </div>
          <div className="col-video">
            <div className="inner">
              <AwesomeButton size="large" type="primary">
                <Link to="/video">VIDEO</Link>
              </AwesomeButton>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default MusicVideo
