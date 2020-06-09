import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/teaching.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

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
              <h1>Become a Patreon</h1>
              <p>
                Ho sempre pensato che l’apprendimento dell’arte del linguaggio
                dei suoni (così è definita la musica) sia un percorso ricco di
                “sorprese” che lo rendono avvincente ed emozionante. La più
                importante nel mio iter di apprendimento è stato l’incontro con
                l’eleganza e l’immediatezza del linguaggio del jazz. <br /> Fin
                dall’inizio la mia attività artistica è stata ispirata dal
                fascino emanato dalla pratica dell’improvvisazione che permette
                di esprimersi in maniera personale e straordinariamente libera e
                creativa. Ho pensato di condividere la mia quarantennale
                esperienza attraverso Patreon per chi si sta avvicinando al
                linguaggio del Jazz o chi, già avanti nel suo percorso di
                studio, desideri approfondire le tematiche riguardanti il
                linguaggio del jazz.
              </p>
            </div>
            <div className="card-button">
              <button className="button-patreon" type="submit">
                <a
                  href="https://www.patreon.com/alessandrodipuccio"
                  target="blank"
                >
                  become a Patreon
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
