import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/press.scss"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Press = () => {
  const data = useStaticQuery(graphql`
  query {
    imageOne: file( relativePath: { eq: "intervista passera.png"}) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)


  return(
    <div className="press-outer-wrapper">
    <SEO title="Press" />
    <Layout>
      <div className="press-container">
        <div className="press-wrapper">
          <div className="press-inner-wrapper">
            <h3 className="titolo">
              Genius Loci, Festival Di Santa Croce A Firenze
            </h3>
            <span className="description">
              Per la terza edizione di “Genius Loci: alla scoperta di Santa
              Croce”, che si terrà da giovedì 26 a sabato 28 settembre nel
              Complesso monumentale di Santa Croce a Firenze, una serie di
              interviste per scoprire il programma attraverso la voce dei
              protagonisti. 20 settembre 2019 – Intervista a cura di Giustina
              Terenzi con Alessandro Di Puccio che assieme a Giulio Ottanelli
              proporrà un concerto in due parti dal titolo “INGREDERE: FRANCESCO
              CORTECCIA, musiche rinascimentali dalla corte dei Medici”.
              L’iniziativa è organizzata da Controradio, Controradio Club, Opera
              di Santa Croce, in collaborazione con La Nottola di Minerva, il
              contributo di Comune di Firenze – Estate Fiorentina 2019 e il
              patrocinio della Città Metropolitana di Firenze.
            </span>
            <br />
            <AudioPlayer
              src="https://episodes.castos.com/Controradio-it/Alessandro-Di-Puccio-Ingredere-Fancesco-Corteccia-genius-loci.mp3"
              onPlay={e => console.log("onPlay")}
              // other props here
              />
           
          </div>
          <div className="press-inner-wrapper">
            <h3 className="titolo">
              Les italiens - intervista su RAI tre - concerto in piazza della
              passera
            </h3>
            <span className="description">
              Les Italiens, l'ensamble che unisce Ritmi e colori di derivazione
              Zingaresca, popolare e Jazzistica, manouche, Jump e Twist con la
              canzone italiana, la musica di strada, le chansons francesi e il
              vetriolo del Quartetto Cetra catturati insieme al loro leader
              Alessandro di Puccio in piazza della passera da Rai TRe durante un
              concerto. il 2009 è l'anno di VERDELUNA DANCING HALL, il nuovo
              imminente album dei les Italiens previsto per la prossima
              primavera; il mondo sonoro delle orchestre Jazz da ballo rivive in
              un sound tra modernità e tradizione; è un racconto che risuona
              dalle stanze dei vecchi locali notturni, a metà tra ironia,
              modernità, smoking logori, lustrini ancora capaci di brillare,
              occasioni amorose e amori d'occasione fatti di un erotismo
              vicinolontano.
            </span>
            <br />
            <Img fixed={data.imageOne.childImageSharp.fixed} />
            {/* <iframe
              title="intervista"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/J6tNTZ5ZVpM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>

          <hr />
          <div className="press-inner-wrapper">
            <h3 className="titolo">
              Musipolitana - R&R2007: Intervista ad Alessandro Di Puccio
            </h3>
            <span className="description">
              Estratto dalla serie di interviste ai musicisti dell'orchestra e
              ai protagonisti del progetto europeo Roots&Routes 2007 nell'ambito
              del festival Fabbrica Europa. In questo video il direttore
              dell'Orchestra Alessandro di Puccio spiega le finalità e le
              caratteristiche del progetto Musipolitana
            </span>
            <br />
            <iframe
              title="musipolitana"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/FBRQ1cDyGh8"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>
          </div>
          <hr />
          <div className="press-inner-wrapper">
            <h3 className="titolo">
              'Settembre in Piazza della Passera' - Alessandro Di Puccio
            </h3>
            <span className="description">
              Estratto dalla serie di interviste ai musicisti dell'orchestra e
              ai protagonisti del progetto europeo Roots&Routes 2007 nell'ambito
              del festival Fabbrica Europa. In questo video il direttore
              dell'Orchestra Alessandro di Puccio spiega le finalità e le
              caratteristiche del progetto Musipolitana
            </span>
            <br />
            <iframe
              title="piazza passera"
              width="450"
              height="315"
              src="https://www.youtube.com/embed/QXTM0dd3lJ0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  </div>
)
}

export default Press
