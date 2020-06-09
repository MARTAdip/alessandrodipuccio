import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/teaching.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Teaching = () => {
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
              <h3>ATTIVITA' DIDATTICA:</h3>
              <span>
                Dal 1985 svolge attività didattica come insegnante di strumenti
                a percussione (batteria, vibrafono) e tiene corsi di musica
                d’insieme, armonia, tecnica dell’improvvisazione ad indirizzo
                jazzistico, composizione e arrangiamento per musica d'uso e
                storia del Jazz.
                <br /> È stato direttore didattico dal 1986 al 2017 della scuola
                del Centro Attività Musicali (CAM) di Firenze e dal 1986 al 2003
                anche della scuola comunale di Scandicci (Fi). <br />{" "}
                Attualmente dirige il dipartimento Jazz dell’Accademia Musicale
                di Firenze e il Centro per le Arti Silence JAM (jazz, arte,
                movimento) di Firenze. Ha tenuto seminari in molte Scuole di
                Musica e Conservatori italiani sull'improvvisazione nel jazz
                (Firenze, Siena, Modena, La Spezia) e un seminario
                all'Università di Istanbul (2004) e al conservatorio di Pantin,
                Parigi (1987). <br /> <br /> Ha svolto per oltre vent’anni anche
                attività di aggiornamento didattico per gli insegnanti e corsi
                di Ascolto guidato per le classi delle scuole materne e
                elementari nel Comune e nella Provincia di Firenze. Dal 2004 al
                2015, per l'Assessorato alla Pubblica Istruzione del Comune di
                Firenze, nell'ambito delle proposte formative “Chiavi Della
                Città”, ha diretto laboratori di teatro musicale per e con i
                bambini delle scuole elementari e medie.
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

export default Teaching
