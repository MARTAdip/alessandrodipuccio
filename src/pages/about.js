import React, { Component } from "react"
import ReadMore from "../components/readmore/ReadMore"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/about.scss"

const text1 =
  "Dai Primi anni “80 ad oggi ha suonato nei più importanti club, festival e rassegne, sia in ambito jazz che world music, in Italia e in Europa (Leverkusen, Parigi, Colonia, Istanbul, Ankara, Lisbona, Lubiana). Vanta numerose collaborazioni con musicisti di jazz e world music, fra le più significative: Bruno Tommaso, Enrico Pierannunzi, Maurizio Giammarco, Fabio Morgera, Franco D’Andrea, Gianluigi Trovesi, Pietro Tonolo, Gianni Cazzola, Luca Flores, Marco Tamburini, Massimo Urbani, Tiziana Ghiglioni, Larry Nocella, Roberto Rossi, Paolo Birro, Rosario Giuliani, Nicola Stilo, Rita Marcotulli, Riccardo Tesi, Toots Thielemans, Antonello Salis, Stefano Bollani, Albert Mangelsdorff, Claude Barthelemy, Mal Waldron, Mike Turk, Sal Nistico, Emanuele Cisi, Stefano “Cocco” Cantini. Attualmente tiene concerti con il sassofonista americano Scott Hamilton, l’organista Alberto Marsico e il batterista Alessandro Fabbri. Dal 2003 cura la direzione artistica del Festival “Settembre in Piazza della Passera” a Firenze, a cui hanno partecipato artisti di rilevanza internazionale fra cui Stefano Bollani, Peppe Servillo, Antonello Salis, Riccardo Tesi, Ginevra Di Marco, Maurizio Giammarco, Rossana Casale, Pietro Tonolo."

const text2 =
  "Ha diretto e scritto composizioni ed arrangiamenti per varie orchestre jazz. Le conduzioni più significative sono con le orchestre: Les Italiens (dal 1198 al 2013) che eseguiva esclusivamente musica composta da A. Di Puccio ed ha all attivo concerti anche in ambito europeo e la realizzazione di 2 cd usciti nel 2002 (ed. Rai Trade) e 2009 (ed. Warner Bros – Chappel Music). La Far Fly MusicComunity (dal 2006 al 2008) nata per l’esecuzione di brani di Luca Flores arrangiati da A. Di Puccio con la quale ha partecipato a vari festivals in città italiane. L’Orchestra multietnica Musipolitana, formazione di ambito world music, che per il suo carattere popolare ha partecipato a numerose rassegne vicine al tema della “festa di piazza”."

const text3 =
  'Ha curato la consulenza musicale del film "PIano Solo" di Riccardo Milani e interpretato da Kim Rossi Stuart, sulla vita di Luca Flores (con il quale ha suonato per circa venti anni) tratto dal libro di Walter Veltroni “Il Disco del Mondo”. Con l’orchestra Musipolitana ha collaborato per vari anni con la Fondazione Fabbrica Europa, in particolare lavorando sul progetto triennale europeo "Roots & Routes” realizzando le musiche per due spettacoli di danza e la colonna sonora di due documentari televisivi (Storie Migranti ed Intrecci). Attualmente ha fondato, assieme ad altri artisti (fotografi, musicisti, pittori, video maker) il Collettivo FuOri con il quale sta realizzando progetti che prevedonola fusione di musica e immagini attraverso la creazione di cortometraggi, da lui stesso curati nella regia e nell’editing, presentati in numerose occasioni fra cui nella dodicesima e quattordicesima edizione del festival fiorentino “Settembre in piazza della Passera”. '
export default class about extends Component {
  componentDidMount() {
    console.log(
      "mounted width - ",
      window.getComputedStyle(this.wrapper).getPropertyValue("width")
    )
  }

  getWrapperWidth() {
    if (this.wrapper) {
      console.log(
        "get wrapper width",
        window.getComputedStyle(this.wrapper).getPropertyValue("width")
      )
    } else {
      console.log("get wrapper - no wrapper")
    }
  }
  render() {
    return (
      <div className="about-wrapper">
        <Layout>
          <SEO title="About" />

          <div className="about-container">
            <div className="bio-wrapper">
              <div
                className="section-content"
                ref={node => (this.wrapper = node)}
              >
                <h3>ALESSANDRO DI PUCCIO (Firenze, 1958)</h3>
                <h4>VIBRAFONISTA (batterista, pianista).</h4>
                <span>{text1}</span>
                {/* <ReadMore
                  text={text1}
                  numberOfLines={3}
                  lineHeight={1.4}
                  showLessButton
                  onContentChange={this.getWrapperWidth}
                /> */}
              </div>
            </div>

            <div className="bio-wrapper">
              <div
                className="section-content"
                ref={node => (this.wrapper = node)}
              >
                <h3>DIREZIONE D'ORCHESTRA ARRANGIAMENTO E COMPOSIZIONE</h3>
                <span>{text2}</span>
                {/* <ReadMore
                  text={text2}
                  numberOfLines={3}
                  lineHeight={1.4}
                  showLessButton
                  onContentChange={this.getWrapperWidth}
                /> */}
              </div>
            </div>
            <div className="bio-wrapper">
              <div
                className="section-content"
                ref={node => (this.wrapper = node)}
              >
                <h3>COMPOSIZIONE PER MUSICA D'USO</h3>
                <h4>
                  (TEATRO, DANZA, SIGLE, COMMENTI, CINE - TELEVISIVI E
                  RADIOFONICI)
                </h4>
                <span>{text3}</span>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
