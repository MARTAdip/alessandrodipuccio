import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/press.scss"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Language from "../components/language"

const Press = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "intervista passera.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      wire: file(relativePath: { eq: "wireok.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wire2: file(relativePath: { eq: "wire2ok.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      oneInstrument: file(relativePath: { eq: "oneinstrument004.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      alkaline: file(relativePath: { eq: "alkalinejazztrio.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      floresTribute: file(relativePath: { eq: "florestribute.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      janeGoddall: file(relativePath: { eq: "janegoddall.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="press-outer-wrapper">
      <Language />

      <Layout>
        <SEO title="Press" />
        <div className="press-container">
          <div className="press-wrapper">
            <div className="press-inner-wrapper">
              <h2 className="titolo">One Instrument</h2>
              <div>
                <Img fixed={data.oneInstrument.childImageSharp.fixed} />
              </div>
              <span className="description">
              {intl.formatMessage({ id: "press_description5" })}
              </span>
              <br />
              <div>
                <Img fixed={data.wire.childImageSharp.fixed} />
                <Img fixed={data.wire2.childImageSharp.fixed} />
              </div>
              <iframe
                title="oneinstrument"
                width="100%"
                height="600"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/692279068&color=%23304463&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <div></div>
              <div className="links">
                <a
                  href="https://hardwax.com/25602/alessandro-di-puccio/one-instrument-sessions-04/"
                  target="blank"
                >
                  hardwax
                </a>
                <a
                  href="https://www.deejay.de/Alessandro_Di_Puccio_One_Instrument_Sessions_ONEINST004EP_Vinyl__940306"
                  target="blank"
                >
                  deejay.de
                </a>
                <a
                  href="https://xlr8r.com/news/donato-dozzy-album-fahmi-mursyid-and-alessandro-di-puccio-next-on-grand-rivers-one-instrument/"
                  target="blank"
                >
                  xlr8r
                </a>
                <a
                  href="https://www.rushhour.nl/record/vinyl/one-instrument-sessions-1"
                  target="blank"
                >
                  rushhour.nl
                </a>
              </div>
            </div>

            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title1" })}
              </h2>
              <span className="description">
                {intl.formatMessage({ id: "press_description1" })}
              </span>
              <br />
              <AudioPlayer
                src="https://episodes.castos.com/Controradio-it/Alessandro-Di-Puccio-Ingredere-Fancesco-Corteccia-genius-loci.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
              />
              <a
                href="https://www.allaboutjazz.com/genius-loci-festival-di-santa-croce-a-firenze-by-neri-pollastri.php"
                target="blank"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>
            <hr />


            <div className="press-inner-wrapper">
              <h2 className="titolo">
                Nel giardino di palazzo Casalini, Italia e America a confronto sotto il cielo stellato
              </h2>
              <span className="description">
              <Img fixed={data.alkaline.childImageSharp.fixed} />
                {/* {intl.formatMessage({ id: "press_description1" })} */}
              </span>
              <br />
             
              <a
                href="https://www.radiorovigo.net/nel-giardino-di-palazzo-casalini-italia-e-america-a-confronto-sotto-il-cielo-stellato/"
                target="blank"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>
            <hr />

            
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                La casa del jazz dove crescono talenti
              </h2>
              <span className="description">
              Si chiama «Silence» e nasce in via degli Artisti nei locali della storica scuola dove si sono formati Stefano Bollani, Piero Borri e Marco Lamioni
              </span>
              <br />
              <br />
              <AudioPlayer
                src="https://episodes.castos.com/Controradio-it/191111-Alessandro-Di-Puccio.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
              />
              <a
                href="https://corrierefiorentino.corriere.it/firenze/notizie/cronaca/19_novembre_05/casa-jazz-dove-crescono-talenti-9a7018ea-ffde-11e9-82b5-426614f2da09.shtml"
                target="blank"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <hr />
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title2" })}
              </h2>
              <span className="description">
                {intl.formatMessage({ id: "press_description2" })}
              </span>
              <br />
              <Img fixed={data.imageOne.childImageSharp.fixed} />
              <a
                href="https://www.youtube.com/watch?time_continue=2&v=J6tNTZ5ZVpM&feature=emb_title"
                target="blank"
              >
                {intl.formatMessage({ id: "press_link2" })}
              </a>
            </div>


            <hr />
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                For Those I Never Knew – Tributo a Luca Flores
              </h2>
              <span className="description">
              Tra gli eventi di maggior spicco va senz’altro annoverato il tributo dedicato a Luca Flores da un quintetto riunito dal vibrafonista Alessandro Di Puccio (suo stretto collaboratore e amico fraterno) sotto la denominazione For Those I Never Knew, una delle più suggestive composizioni del pianista. 
              </span>
              <br />
              <Img fluid={data.floresTribute.childImageSharp.fluid} />
              <a
                href="https://www.musicajazz.it/for-those-never-knew-tributo-luca-flores/"
                target="blank"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <hr />
            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title3" })}
              </h2>
              <span className="description">
                {intl.formatMessage({ id: "press_description3" })}
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
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title4" })}
              </h2>
              <span className="description"></span>
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
            <hr />
            

            <hr />
            <div className="press-inner-wrapper">
              <h2 className="titolo">
              Les Italiens, concerto per il Jane Goodall Institute
              </h2>
              <span className="description">
              Il trascinante swing mediterraneo de Les Italiens per la prima volta all’Odeon di Firenze, e per una buona causa: martedì 7 febbraio la big-band fondata da Alessandro di Puccio è protagonista di un concerto-evento a favore del Jane Goodall Institute.
              </span>
              <br />
              <Img fixed={data.janeGoddall.childImageSharp.fixed} />
              <a
                href="http://www.toscanamusiche.it/les-italiens-concerto-per-il-jane-goodall-institute/"
                target="blank"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="press-inner-wrapper">
              <h2 className="titolo">
                {intl.formatMessage({ id: "press_title5" })}
              </h2>
              <span className="description">
                {intl.formatMessage({ id: "press_description4" })}
              </span>
              <br />
              <iframe
                title="coro"
                width="450"
                height="315"
                src="https://www.youtube.com/embed/zsASjbgJ5E4"
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

export default injectIntl(Press)
