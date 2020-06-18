import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/teaching.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl } from "gatsby-plugin-intl"
import Language from "../components/language"
import ReactTooltip from "react-tooltip"
import ReadMoreReact from "read-more-react"

const Teaching = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      imageMobile: file(
        relativePath: {
          eq: "x durante_uno_stage_all_universita_di_istanbul_2004.jpg"
        }
      ) {
        childImageSharp {
          fluid(sizes: "(max-width: 1200px) calc(60vh - 40px), 1200px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageDesktop: file(
        relativePath: {
          eq: "x durante_uno_stage_all_universita_di_istanbul_2004.jpg"
        }
      ) {
        childImageSharp {
          fixed(quality: 100, width: 500, height: 370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="teaching-outer-wrapper">
      <Language />
      <Layout>
        <SEO title="Other Projects" />
        <div className="text-img-container">
          <div className="teaching-wrapper">
            <div className="section-content">
              <h3>{intl.formatMessage({ id: "teaching_title" })} </h3>
              <span>
                {intl.formatMessage({ id: "teaching_text1" })}
                <br /> {intl.formatMessage({ id: "teaching_text2" })}
                <br />
                {intl.formatMessage({ id: "teaching_text3" })}
                <br /> <br />
                {intl.formatMessage({ id: "teaching_text4" })}
              </span>
            </div>
          </div>
          <div
            data-tip={intl.formatMessage({ id: "teaching_image_tooltip" })}
            style={{ margin: `15px 0 15px` }}
          >
            <Img
              fluid={data.imageMobile.childImageSharp.fluid}
              className="teaching-image-mobile"
              style={{ position: `relative` }}
            />
            <span className="overlay" style={{ color: `black` }}>
              {intl.formatMessage({ id: "teaching_image_tooltip" })}
            </span>
            <Img
              fixed={data.imageDesktop.childImageSharp.fixed}
              className="teaching-image-desktop"
            />
          </div>
          <ReactTooltip />
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-inner">
              <h1>{intl.formatMessage({ id: "patreon_title" })}</h1>

              <div className="text">
                {intl.formatMessage({ id: "patreon_text1" })}
                <br /> {intl.formatMessage({ id: "patreon_text1_2" })}
                <ReadMoreReact
                  text= {intl.formatMessage({ id: "patreon_text1_3" })}
                  readMoreText={intl.formatMessage({ id: "patreon_readmore" })}
                />
               
              </div>
            </div>
            <div className="card-button">
              <button className="button-patreon" type="submit">
                <a
                  href="https://www.patreon.com/alessandrodipuccio"
                  target="blank"
                >
                  {intl.formatMessage({ id: "patreon_title" })}
                </a>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default injectIntl(Teaching)
