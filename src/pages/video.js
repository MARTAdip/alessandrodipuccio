import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss"
import "react-awesome-slider/dist/styles.css"
import "../components/video.scss"

const Video = props => {
  // const videoquery = graphql`
  //   {
  //     allYoutubeVideo(
  //       filter: { channelId: { eq: "UChCWBb3bJHHF08ktBunb21Q" } }
  //     ) {
  //       edges {
  //         node {
  //           id
  //           title
  //           description
  //           videoId
  //           publishedAt
  //           privacyStatus
  //         }
  //       }
  //     }
  //   }
  // `
  // console.log(videoquery)

  return (
    <div className="video-outer-wrapper">
      <Layout>
        <SEO title="Other Projects" />
        <div className="video-container">
          <AwesomeSlider
            cssModule={AwesomeSliderStyles}
            animation="foldOutAnimation"
          >
            <div className="video-wrapper-inner">
              <iframe
                title="auf wiedersehen, goodbye"
                width="450"
                height="315"
                src="https://www.youtube.com/embed/-fWlgrf7h-0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-text">
                Immagini Piero Mazzoni, musica ideazione video montaggio e
                animazione Alessandro Di Puccio e Les Italiens, featuring
                Antonello Salis: fisarmonica (video realizzato nel 2013) il
                brano è contenuto nell'album "Les Italiens" Forrest Hill record
                (2002).
              </div>
            </div>

            <div className="video-wrapper-inner">
              <iframe
                title="le nozze"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/j5EEvSV3224"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-text">
                Riscrittura di Ingredere (ingresso) un brano tratto da le
                musiche composte da Francesco Corteccia (compositore
                rinascimentale) per il matrimonio di Cosimo I de' Medici con
                Eleonora de Toledo. Alessandro Di Puccio Vibrafono - Stefano
                Negri sax soprano
              </div>
            </div>
            <div className="video-wrapper-inner">
              <iframe
                title="canzona"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/szfban48x7E"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-text">
                Riscrittura di un brano di Francesco Corteccia (compositore
                rinascimentale) Alessandro Di Puccio Vibrafono - Stefano Negri
                sax soprano
              </div>
            </div>
            <div className="video-wrapper-inner">
              <iframe
                title="exp part1"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eijp33GV7Lc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-text">
                Musica: Simone Santini (ewi, oboe, sax sopranino Eb) Video:
                Alessandro Di Puccio (vibrafono) 2015
              </div>
            </div>
            <div className="video-wrapper-inner">
              <iframe
                title="exp part2"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NaAX_CSKnAw"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-text">
                Musica: Simone Santini (ewi, oboe, sax sopranino Eb) Video:
                Alessandro Di Puccio (vibrafono) 2015
              </div>
            </div>
            <div className="video-wrapper-inner">
              <iframe
                title="azure"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3wLbhu4Uf7I"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-text">
                Azure (Duke Ellington) Echoes of MJQ Caligola Records 2002 Paolo
                Birro piano - Alessandro Di Puccio vibrafono - Paolo Ghetti
                contrabbasso - Alessandro Fabbri batteria.
              </div>
            </div>
            <div className="video-wrapper-inner">
              <iframe
                title="lulu"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/J6SEu-Vi6zw"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-text">
                Lulù (Alessandro Di Puccio- Franco Pinzauti) dal cd "Les
                Italiens" Forrest Hill 2002 Francesca Taranto voce - Antonello
                Salis Fisarmonica
              </div>
            </div>
            <div className="video-wrapper-inner">
              <iframe
                title="all the things you are"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BnElYWZ_Z3U"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-text">
                Alessandro Di Puccio vibrafono - Leonardo Volo pianoforte
                Firenze feb. 2017
              </div>
            </div>
          </AwesomeSlider>
        </div>
      </Layout>
    </div>
  )
}
export default Video
