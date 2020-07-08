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
                  text={intl.formatMessage({ id: "patreon_text1_3" })}
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
        <h1 className="reward-title">REWARDS SOSTENITORI e STUDENTI</h1>
        <div className="card-container small-cont">
          <div className="card-wrapper small">
            <div className="small-card-container">
              <div className="small-text">
                <h4>Per tutti i sostenitori </h4>
                <p>
                  ogni mese sarà inviato un fascicolo di una raccolta di
                  dispense sulla storia del jazz con le biografie dei jazzisti
                  più importanti. Ogni biografia è munita d’indicazioni di
                  ascolti, cioè di link (Youtube) corrispondenti ad importanti
                  audio e filmati dei vari musicisti.
                </p>
              </div>
            </div>
          </div>

          <div className="card-wrapper small">
            <div className="small-card-container">
              <div className="small-text">
                <h4>Sostenitori standard 5 € mensili</h4>
                <p>
                  ogni mese sarà inviato un bootleg storico in mp3 di un brano
                  tratto dalle registrazioni di concerti effettuati nel jazz
                  club fiorentino Salt Peanuts tra il 1983 e il 1985. (tra i
                  vari musicisti che presero parte ai concerti figurano Lee
                  Konitz, Chet Baker, Eddie Lookjaw Davis, Sal Nistico, Al Cohn,
                  Albert Mangelsdorff.)
                </p>
              </div>
            </div>
          </div>
          <div className="card-wrapper small">
            <div className="small-card-container">
              <div className="small-text">
                <h4>Sostenitori premium (musicisti amatoriali)</h4>
                <p>
                  <ol>10 € mensili</ol> ogni mese sarà inviato un bootleg
                  storico in mp3 di un brano tratto dalle registrazioni di
                  concerti effettuati nel jazz club fiorentino Salt Peanuts tra
                  il 1983 e il 1985. (tra i vari musicisti che presero parte ai
                  concerti figurano Lee Konitz, Chet Baker, Eddie Lookjaw Davis,
                  Sal Nistico, Al Cohn, Albert Mangelsdorff.) <br />
                  + ogni mese saranno inviati 2 esercizi dedicati alla tecnica
                  per l’improvvisazione o un arrangiamento (per piccole
                  formazioni max sestetto), appositamente realizzato tenendo
                  conto del livello degli esecutori, di uno standard a vostra
                  scelta.
                  <br />
                  <ol>15 € mensili </ol> ogni mese sarà inviato un bootleg
                  storico in mp3 di un brano tratto dalle registrazioni di
                  concerti effettuati nel jazz club fiorentino Salt Peanuts tra
                  il 1983 e il 1985. (tra i vari musicisti che presero parte ai
                  concerti figurano Lee Konitz, Chet Baker, Eddie Lookjaw Davis,
                  Sal Nistico, Al Cohn, Albert Mangelsdorff.) <br />
                  + ogni mese
                  saranno inviati 4 esercizi dedicati alla tecnica per
                  l’improvvisazione o 2 arrangiamenti (per piccole formazioni
                  max sestetto), appositamente realizzato tenendo conto del
                  livello degli esecutori, di 2 standard a vostra scelta.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default injectIntl(Teaching)
