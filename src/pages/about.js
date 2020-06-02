import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/about.scss"
import Gallery from "../components/gallery"

const text1 =
  `Dai Primi anni “80 ad oggi ha suonato nei più importanti club, festival e rassegne, sia in ambito jazz che world music, in Italia e in Europa (Leverkusen, Parigi, Colonia, Istanbul, Ankara, Lisbona, Lubiana). \r\n Vanta numerose collaborazioni con musicisti di jazz e world music, fra le più significative: Bruno Tommaso, Enrico Pierannunzi, Maurizio Giammarco, Fabio Morgera, Franco D’Andrea, Gianluigi Trovesi, Pietro Tonolo, Gianni Cazzola, Luca Flores, Marco Tamburini, Massimo Urbani, Tiziana Ghiglioni, Larry Nocella, Roberto Rossi, Paolo Birro, Rosario Giuliani, Nicola Stilo, Rita Marcotulli, Riccardo Tesi, Toots Thielemans, Antonello Salis, Stefano Bollani, Albert Mangelsdorff, Claude Barthelemy, Mal Waldron, Mike Turk, Sal Nistico, Emanuele Cisi, Stefano “Cocco” Cantini, Francesco Maccianti. \r\n Attualmente tiene concerti con il sassofonista americano SCOTT HAMILTON, l’organista ALBERTO MARSICO e il batterista ALESSANDRO FABBRI. `

const text2 =
  `Ha diretto e scritto composizioni ed arrangiamenti per orchestre jazz, fra cui le esperienze più significative sono con le orchestre: Les Italiens (dal 1998 al 2013) che eseguiva esclusivamente sue composizioni e si è esibita in  festival e rassegne italiane ed europee. Con questa\norchestra ha  realizzato  2 CD Les Italiens (2002) e Verdeluna Dancing Hall (2009). L’ orchestra Far Fly MusicComunity (dal 2006 al 2008) nata per l’esecuzione di brani del pianista scomparso Luca Flores arrangiati da Di Puccio con la quale ha partecipato a molti festivals jazz. L’Orchestra multietnica Musipolitana, formazione di ambito world music il cui organico era composto da musicisti provenienti da Cuba, Costa D’Avorio, Marocco, Iran, Brasile oltre che dal Sud d’Italia. Per il suo carattere popolare ha partecipato a numerose rassegne vicine al tema della “festa di piazza” e festival di musica etnica.`

const text3 =
  'Ha composto ed arrangiato musica per spettacoli teatrali collaborando con importanti attori italiani (Carlina Torta, Marco Zannoni, Veronique Nah) e i registi Pietro Bartolini, Silvano Panichi, Alessandro Libertini. Negli anni dal 2005 al 2014 ha composto musiche e curato la regia di Mini Musicals per ragazzi con spettacolo finale al Teatro della Pergola di Firenze, in collaborazione con l’Assessorato all’Istruzione del Comune di Firenze. Questa attività è culminata nella realizzazione del disco “Si può farcela” (2017) – musica di Di Puccio, prodotto da Marco lamioni e Comune di Firenze – con la partecipazione di Roberto Vecchioni e Irene Grandi. Sue composizioni, prevalentemente di Les Italiens, sono state usate come sigla o colonna sonora o commenti musicali per trasmissioni radiofoniche e televisive (prevalentemente per la RAI – fra cui fiction televisive e due film prodotti da Rai Trade – e un film d’animazione per la televisione Canadese). E’ stato consulente musicale del film "PIano Solo" di Riccardo Milani, interpretato da Kim Rossi Stuart, sulla vita di Luca Flores (con il quale ha suonato per circa venti anni) tratto dal libro di Walter Veltroni “Il Disco del Mondo”. Con l’orchestra Musipolitana ha collaborato per vari anni con la Fondazione Fabbrica Europa, lavorando in particolare sul progetto triennale europeo "Roots & Routes” con la realizzazione delle musiche per due spettacoli di danza e la colonna sonora di due documentari televisivi (Storie Migranti ed Intrecci). Ha fondato nel 2015, assieme ad altri artisti (fotografi, musicisti, pittori, video maker) il Collettivo Fu.Ori con il quale sta realizzando progetti che prevedono la fusione di musica e immagini attraverso la creazione di cortometraggi, da lui stesso curati nella regia e nell’editing, presentati in numerose occasioni fra cui nella 12a e 14a edizione del Festival Jazz fiorentino “Settembre in piazza della Passera” di cui Di Puccio è Direttore Artistico dall’anno 2001.'
  

export default class about extends Component {
  // componentDidMount() {
  //   console.log(
  //     "mounted width - ",
  //     window.getComputedStyle(this.wrapper).getPropertyValue("width")
  //   )
  // }

  // getWrapperWidth() {
  //   if (this.wrapper) {
  //     console.log(
  //       "get wrapper width",
  //       window.getComputedStyle(this.wrapper).getPropertyValue("width")
  //     )
  //   } else {
  //     console.log("get wrapper - no wrapper")
  //   }
  // }
  render() {
    return (
      <div className="about-wrapper">
        <Layout>
          <SEO title="About" />

          <div className="about-container">
            <div className="bio-wrapper">
              <div className="section-content">
                <h3>ALESSANDRO DI PUCCIO (Firenze, 1958)</h3>
                <h4> VIBRAFONISTA, Batterista e pianista. Compositore e Arrangiatore.
                </h4>
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
              <div className="section-content">
                <h3>ARRANGIAMENTO E COMPOSIZIONE PER ORCHESTRA.</h3>
                <span>{text2}</span>
              </div>
            </div>
            <div className="bio-wrapper">
              <div className="section-content">
                <h3>COMPOSIZIONE PER TEATRO, DANZA, COMMENTI CINE-TELEVISIVI E RADIOFONICI</h3>
                
                <span>{text3}</span>
              </div>
            </div>
          </div>
          <Gallery/> 
        </Layout>
      </div>
    )
  }
}
