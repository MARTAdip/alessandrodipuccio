import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/press.scss"

const Press = () => (
  <div className="press-outer-wrapper">
    <SEO title="Press" />
    <Layout>
      <div className="press-container">
        <div className="press-wrapper">
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
            <br/>
            <iframe
              title="intervista"
              width="450"
              height="450"
              src="https://www.youtube.com/embed/J6tNTZ5ZVpM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
            <br/>
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
            <br/>
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

export default Press
