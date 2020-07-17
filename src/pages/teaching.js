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
import { TiStar, TiPlus } from 'react-icons/ti';

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
              <h2>Sostenitori</h2>
              <div className="small-text">
                <h4>5€ (quota mensile) - Riceveranno ogni mese: </h4>
                <div>
                  <span className="list">
                    <TiStar/> Una dispensa sulla storia del jazz e una biografia di uno
                    dei più importanti musicisti corredata di link di filmati e
                    registrazioni audio.
                  </span>
                  <br />
                  <br />
                  <span className="list">
                  <TiStar/> Mp3 di 2 brani tratti da vari bootleg di concerti
                    effettuati tra il 1983 e il 1985 nel jazz club fiorentino
                    Salt Peanuts (tra i vari musicisti che presero parte ai
                    concerti figurano Lee Konitz, Chet Baker, Eddie Lookjaw
                    Davis, Sal Nistico, Al Cohn, Albert Mangelsdorff.)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper small">
            <div className="small-card-container">
              <h2>Sostenitori Premium (musicisti amatoriali o studenti)</h2>
              <div className="small-text">
                <h4>
                  10 € - Oltre alle dispense sulla storia del jazz e gli mp3,
                  riceveranno ogni mese:
                </h4>
                <div>
                  <span className="list">
                  <TiStar/> 2 esercizi di tecnica per lo sviluppo dell’improvvisazione
                    oppure un arrangiamento (per piccole formazioni - max
                    sestetto) di uno standard a scelta nella lista (il titolo
                    del brano dovrà essere inviato per email ogni mese).
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper small">
            <div className="small-card-container">
              <h2>Sostenitori Special (musicisti amatoriali o studenti)</h2>
              <div className="small-text">
                <h4>
                  15 € - Oltre alle dispense sulla storia del jazz e gli mp3,
                  riceveranno ogni mese:
                </h4>
                <div>
                  <span className="list">
                  <TiStar/> 4 esercizi di tecnica per lo sviluppo dell’improvvisazione
                    oppure 2 arrangiamenti (per piccole formazioni - max
                    sestetto) di uno standard a scelta nella
                    <div style={{ color: `red` }}>lista</div> (il titolo del
                    brano dovrà essere inviato per email ogni mese).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="reward-title">LEZIONI ONLINE</h1>
        <div className="card-container small-cont">
          <div className="card-wrapper small">
            <div className="small-card-container">
              <h2>30€</h2>
              <div className="small-text">
                <div>
                  <span className="list">
                  <TiStar/> 1 lezione mensile individuale di 90 min. <TiPlus /> materiale
                    didattico consistente in pdf di esercizi con esempi audio e
                    dispense di armonia.
                  </span>
                  <br />

                  <h4> In <TiPlus /> ogni mese riceveranno: </h4>
                  <span className="list">
                  <TiStar/> una dispensa sulla storia del jazz e una biografia di uno
                    dei più importanti musicisti corredata di link di filmati e
                    registrazioni audio.
                    <br />
                    <br /> <TiStar/> Mp3 di 2 brani tratti da vari bootleg di concerti
                    effettuati tra il 1983 e il 1985 nel jazz club fiorentino
                    Salt Peanuts (tra i vari musicisti che presero parte ai
                    concerti figurano Lee Konitz, Chet Baker, Eddie Lookjaw
                    Davis, Sal Nistico, Al Cohn, Albert Mangelsdorff.)
                    <br /> 
                    <br /> 
                    (È possibile effettuare anche lezioni collettive, in tal caso
                    si mantengono gli stessi prezzi delle individuali dividendo
                    la cifra fra il numero dei partecipanti (max 4 persone) <TiPlus />
                    l’aggiunta di 5 € a persona es: 4 mensili per 4 persone 20 <TiPlus />
                    5 tot. 25 € a partecipante)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper small">
            <div className="small-card-container">
              <h2>50€</h2>
              <div className="small-text">
                <div>
                  <span className="list">
                  <TiStar/> 2 lezioni mensili individuali di 90 min. <TiPlus /> il materiale
                    didattico.
                    <br />
                    <TiStar/> Le dispense sulla storia del jazz.
                    <br /> <TiStar/> Gli mp3 dei concerti del Salt Peanuts.
                    <br /> 
                    <br /> 
                    (È possibile effettuare anche lezioni collettive, in tal caso
                    si mantengono gli stessi prezzi delle individuali dividendo
                    la cifra fra il numero dei partecipanti (max 4 persone) <TiPlus />
                    l’aggiunta di 5 € a persona es: 4 mensili per 4 persone 20 <TiPlus />
                    5 tot. 25 € a partecipante)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper small">
            <div className="small-card-container">
              <h2>80€</h2>
              <div className="small-text">
                <div>
                  <span className="list">
                  <TiStar/> 4 lezioni mensili individuali di 90 min. <TiPlus /> il materiale
                    didattico.
                    <br />
                    <TiStar/> Le dispense sulla storia del jazz.
                    <br /> <TiStar/> Gli mp3 dei concerti del Salt Peanuts.
                    <br /> 
                    <br /> 
                    (È possibile effettuare anche lezioni collettive, in tal caso
                    si mantengono gli stessi prezzi delle individuali dividendo
                    la cifra fra il numero dei partecipanti (max 4 persone) <TiPlus />
                    l’aggiunta di 5 € a persona es: 4 mensili per 4 persone 20 <TiPlus />
                    5 tot. 25 € a partecipante)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-wrapper small">
            <div className="small-card-container">
              <h2>140€</h2>
              <div className="small-text">
                <div>
                  <span className="list">
                  <TiStar/> 8 lezioni (in 1 o 2 mesi) individuali di 90 min. <TiPlus /> il
                    materiale didattico.
                    <br />
                    <TiStar/> Le dispense sulla storia del jazz.
                    <br /> <TiStar/> Gli mp3 dei concerti del Salt Peanuts.
                    <br /> 
                    <br /> 
                    (È possibile effettuare anche lezioni collettive, in tal caso
                    si mantengono gli stessi prezzi delle individuali dividendo
                    la cifra fra il numero dei partecipanti (max 4 persone) <TiPlus />
                    l’aggiunta di 5 € a persona es: 4 mensili per 4 persone 20 <TiPlus />
                    5 tot. 25 € a partecipante)
                  </span>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </Layout>
    </div>
  )
}

export default injectIntl(Teaching)
