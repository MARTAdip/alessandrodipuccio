import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/teaching.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Language from "../components/language"

const Teaching = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: {
          eq: "x durante_uno_stage_all_universita_di_istanbul_2004.jpg"
        }
      ) {
        childImageSharp {
          fixed(quality: 100) {
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
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-inner">
              <h1>{intl.formatMessage({ id: "patreon_title" })}</h1>

              <p>
                {intl.formatMessage({ id: "patreon_text1" })}
                <br /> {intl.formatMessage({ id: "patreon_text1_2" })}
              </p>
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
