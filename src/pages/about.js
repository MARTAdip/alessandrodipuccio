import React, { Component } from 'react'
import ReadMore from '../components/readmore/ReadMore'; 
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const text1 =
  'Dai Primi anni “80 ad oggi ha suonato nei più importanti club, festival e rassegne, sia in ambito jazz che world music, in Italia e in Europa (Leverkusen, Parigi, Colonia, Istanbul, Ankara, Lisbona, Lubiana). Vanta numerose collaborazioni con musicisti di jazz e world music, fra le più significative: Bruno Tommaso, Enrico Pierannunzi, Maurizio Giammarco, Fabio Morgera, Franco D’Andrea, Gianluigi Trovesi, Pietro Tonolo, Gianni Cazzola, Luca Flores, Marco Tamburini, Massimo Urbani, Tiziana Ghiglioni, Larry Nocella, Roberto Rossi, Paolo Birro, Rosario Giuliani, Nicola Stilo, Rita Marcotulli, Riccardo Tesi, Toots Thielemans, Antonello Salis, Stefano Bollani, Albert Mangelsdorff, Claude Barthelemy, Mal Waldron, Mike Turk, Sal Nistico, Emanuele Cisi, Stefano “Cocco” Cantini. Attualmente tiene concerti con il sassofonista americano Scott Hamilton, l’organista Alberto Marsico e il batterista Alessandro Fabbri. Dal 2003 cura la direzione artistica del Festival “Settembre in Piazza della Passera” a Firenze, a cui hanno partecipato artisti di rilevanza internazionale fra cui Stefano Bollani, Peppe Servillo, Antonello Salis, Riccardo Tesi, Ginevra Di Marco, Maurizio Giammarco, Rossana Casale, Pietro Tonolo.';


export default class about extends Component {


  componentDidMount() {
    console.log('mounted width - ', window.getComputedStyle(this.wrapper).getPropertyValue('width'));
  }

  getWrapperWidth() {
    if (this.wrapper) {
      console.log('get wrapper width', window.getComputedStyle(this.wrapper).getPropertyValue('width'));
    } else {
      console.log('get wrapper - no wrapper');
    }
  }
  render() {
    return (
      <Layout>
      <SEO title="Page two" />
      <h1>About me</h1>
     
      <div>
         <div className="bio-wrapper">
            <div className="section-content" ref={node => (this.wrapper = node)}>
              <h3>ALESSANDRO DI PUCCIO (Firenze, 1958)</h3>
              <h4>VIBRAFONISTA (batterista, pianista).</h4>
              {/* <ReadMore
                text={text1}
                numberOfLines={3}
                lineHeight={1.4}
                showLessButton
                onContentChange={this.getWrapperWidth}
              
              /> */}
            </div>
          </div>
      </div>
      </Layout>
    )
  }
}


