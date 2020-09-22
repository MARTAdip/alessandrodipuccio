import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/press.scss"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl } from "gatsby-plugin-intl"
import Language from "../components/language"
import { Link, animateScroll as scroll } from "react-scroll"

import { Gallery } from "gatsby-theme-gallery"
import ScrollArrow from "../components/scrollArrow"
// import Gallery  from "../components/gallery"

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
      fuoriBand: file(relativePath: { eq: "fuoriband.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      flores: file(relativePath: { eq: "flores.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 300, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      images_press_archive: allFile(
        filter: { relativeDirectory: { eq: "archive" } }
      ) {
        nodes {
          id
          base
          name
          childImageSharp {
            fixed(quality: 100, width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data.images_press_archive, "image")
  return (
    <div className="press-outer-wrapper" id="go_to_top">
      <Language />

      <Layout>
        <SEO title="Press" />
        <Link
          activeClass="active"
          to="press_archive"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          style={{
            display: `flex`,
            flexFlow: `column`,
            alignItems: `flex-start`,
            fontSize: `20px`,
            textTransform: `none`,
            textDecoration: `underline`,
            color: `yellow`,
          }}
        >
          PRESS ARCHIVE
        </Link>
        <ScrollArrow />
        <div className="press-container">
          <div className="press-wrapper">
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">One Instrument</div>
                <div className="date">04.11.2019</div>
              </div>
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
                  rel="noreferrer"
                >
                  hardwax
                </a>
                <a
                  href="https://www.deejay.de/Alessandro_Di_Puccio_One_Instrument_Sessions_ONEINST004EP_Vinyl__940306"
                  target="blank"
                  rel="noreferrer"
                >
                  deejay.de
                </a>
                <a
                  href="https://xlr8r.com/news/donato-dozzy-album-fahmi-mursyid-and-alessandro-di-puccio-next-on-grand-rivers-one-instrument/"
                  target="blank"
                  rel="noreferrer"
                >
                  xlr8r
                </a>
                <a
                  href="https://www.rushhour.nl/record/vinyl/one-instrument-sessions-1"
                  target="blank"
                  rel="noreferrer"
                >
                  rushhour.nl
                </a>
              </div>
            </div>
            <div className="line">
              <hr />
            </div>

            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title1" })}
                </div>
                <div className="date">26-28.9.2019</div>
              </div>
              <span className="description">
                {intl.formatMessage({ id: "press_description1" })}
              </span>
              <br />
              <AudioPlayer
                src="https://episodes.castos.com/Controradio-it/Alessandro-Di-Puccio-Ingredere-Fancesco-Corteccia-genius-loci.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
              />
              <br />
              <a
                href="https://www.allaboutjazz.com/genius-loci-festival-di-santa-croce-a-firenze-by-neri-pollastri.php"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>
            <div className="line">
              <hr />
            </div>

            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_description6" })}
                </div>
                <div className="date">23.7.2019</div>
              </div>

              <span className="description">
                <Img fixed={data.alkaline.childImageSharp.fixed} />
                {/* {intl.formatMessage({ id: "press_description1" })} */}
              </span>
              <br />

              <a
                href="https://www.radiorovigo.net/nel-giardino-di-palazzo-casalini-italia-e-america-a-confronto-sotto-il-cielo-stellato/"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>
            <div className="line">
              <hr />
            </div>

            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title6" })}
                </div>
                <div className="date">20.07.2019</div>
              </div>

              <span className="description">
                {intl.formatMessage({ id: "press_description7" })}
              </span>
              <br />

              <a
                href="https://www.tgcom24.mediaset.it/rubriche/alessandro-di-puccio-racconta-settembre-in-piazza-della-passera-_3229858-201902a.shtml"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="line">
              <hr />
            </div>

            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title7" })}
                </div>
                <div className="date">05.11.2019</div>
              </div>

              <span className="description">
                {intl.formatMessage({ id: "press_description8" })}
              </span>
              <br />
              <br />
              <AudioPlayer
                src="https://episodes.castos.com/Controradio-it/191111-Alessandro-Di-Puccio.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
              />
              <br />
              <a
                href="https://corrierefiorentino.corriere.it/firenze/notizie/cronaca/19_novembre_05/casa-jazz-dove-crescono-talenti-9a7018ea-ffde-11e9-82b5-426614f2da09.shtml"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title8" })}
                </div>
                <div className="date">22.02.2017</div>
              </div>
              <span className="description">
                {intl.formatMessage({ id: "press_description9" })}
              </span>
              <br />
              <Img fixed={data.fuoriBand.childImageSharp.fixed} />
              <br />
              <a
                href="https://www.tempoliberotoscana.it/event/musica-pittura-foto-e-video-allo-spazio-alfieri-di-firenze-la-performance-multimediale-del-collettivo-fuori/"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title9" })}
                </div>
                <div className="date">14.09.2017</div>
              </div>
              <span className="description">
                {intl.formatMessage({ id: "press_description10" })}
              </span>
              <br />
              <Img fluid={data.floresTribute.childImageSharp.fluid} />
              <br />
              <a
                href="https://www.musicajazz.it/for-those-never-knew-tributo-luca-flores/"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title10" })}
                </div>
                <div className="date">14.09.2016</div>
              </div>
              <span className="description">
                {intl.formatMessage({ id: "press_description11" })}
              </span>
              <br />
              <Img fixed={data.flores.childImageSharp.fixed} />
              <br />
              <a
                href="http://www.toscanamusiche.it/il-jazz-toscano-ricorda-luca-flores-allexwide-di-pisa/"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title11" })}
                </div>

                <div className="date">13.04.2015</div>
              </div>
              <span className="description">
                {intl.formatMessage({ id: "press_description12" })}
              </span>
              <br />
              <br />
              <a
                href="https://www.ilsitodifirenze.it/content/136-curved-lights-domani-simone-santini-e-alessandro-di-puccio-concerto-al-politeama"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title12" })}
                </div>
                <div className="date">23.08.2015</div>
              </div>
              <span className="description">
                {intl.formatMessage({ id: "press_description13" })}
              </span>
              <br />
              <br />
              <a
                href="https://www.barganews.com/2015/08/23/barga-ricorda-luca-flores/"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title4" })}
                </div>
                <div className="date">11.09.2013</div>
              </div>

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
            <div className="line">
              <hr />
            </div>

            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title13" })}
                </div>
                <div className="date">03.02.2012</div>
              </div>

              <span className="description">
                {intl.formatMessage({ id: "press_description14" })}
              </span>
              <br />
              <Img fixed={data.janeGoddall.childImageSharp.fixed} />
              <br />
              <a
                href="http://www.toscanamusiche.it/les-italiens-concerto-per-il-jane-goodall-institute/"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>

            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title2" })}
                </div>
                <div className="date">20.01.2009</div>
              </div>

              <span className="description">
                {intl.formatMessage({ id: "press_description2" })}
              </span>
              <br />
              <Img fixed={data.imageOne.childImageSharp.fixed} />
              <br />
              <a
                href="https://www.youtube.com/watch?time_continue=2&v=J6tNTZ5ZVpM&feature=emb_title"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link2" })}
              </a>
            </div>
            <div className="line">
              <hr />
            </div>

            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <div className="titolo">
                  {intl.formatMessage({ id: "press_title14" })}
                </div>
                <div className="date">07-30.04.2009</div>
              </div>

              <span className="description">
                {intl.formatMessage({ id: "press_description15" })}
              </span>
              <br />

              <a
                href="https://iiclubiana.esteri.it/iic_lubiana/it/gli_eventi/calendario/2009/04/omaggio-al-cinema-italiano-toto-e-anna-magnani.html"
                target="blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "press_link1" })}
              </a>
            </div>
            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <h2 className="titolo">
                  {intl.formatMessage({ id: "press_title3" })}
                </h2>
              </div>
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

            <div className="line">
              <hr />
            </div>
            <div className="press-inner-wrapper">
              <div className="titolo-wrapper">
                <h2 className="titolo">
                  {intl.formatMessage({ id: "press_title5" })}
                </h2>
              </div>
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

        <div id="press_archive" className="gallery-wrapper">
          <Gallery />
        </div>

        {/* <Link
          activeClass="active"
          to="go_to_top"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          style={{
            display: `flex`,
            flexFlow: `column`,
            alignItems: `flex-start`,
            fontSize: `22px`,
            textTransform: `none`,
            textDecoration: `underline`,
            color: `yellow`,
          }}
        >
          GO TO TOP
        </Link> */}
      </Layout>
    </div>
  )
}

export default injectIntl(Press)
