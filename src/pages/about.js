import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/about.scss"
import { Gallery } from "gatsby-theme-gallery"
// import Link from "gatsby-link"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Language from "../components/language"

const About = ({ intl }) => {
  return (
    <div className="about-wrapper">
      <Language />
      <Layout>
        <SEO title="About" />
        <button
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "62x",
            display: "block",
            marginLeft: "auto",
          }}
        >
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
                <br /> <br />
                {intl.formatMessage({ id: "about_bio1_2" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio1_3" })}
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
                <br />
                <br />
                {intl.formatMessage({ id: "about_bio3_5" })}
                <br /> <br />
                {intl.formatMessage({ id: "about_bio3_6" })}
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
